import {Player} from "./player/player";
import {Job} from "./enum/jobs";
import {DatabaseWrapper} from "./database/wrapper";
import {resourceLimits} from "worker_threads";

interface IDeferral {
    defer: () => void;
    update: (message: string) => void;
    presentCard: (card: unknown, cb: (data: unknown, rawData: string) => void) => void;
    done: (reason?: string) => void;
    handover(data: { [key: string]: any }): void;
}

setImmediate(() => {
    DatabaseWrapper.connect().finally(() => {
        console.log("[FRAMEWORK] Database connection has been successfully established");
    }).catch(() => {
        console.log("[FRAMEWORK] Database connection could not be established");
    });
});

RegisterCommand("debug", function(source: any, args: any, rawCommand: any) {

}, false);

on("playerConnecting", (playerName: string, setKickReason: (msg: string) => void, deferrals: IDeferral ) => {
    const playerId = global.source;
    const player = global.source.toString();

    let identifiers: {[identifierName: string]: string} = {};

    for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
        const identifier = GetPlayerIdentifier(player, i);
        const [name, _] = identifier.split(":");
        identifiers[name] = identifier;
    }

    let profile = new Player(playerId, identifiers, "user", Job.NONE, null);

    for (let i = 0; i < GetNumPlayerTokens(player); i++) {
        profile.addToken(GetPlayerToken(player, i));
    }
});

on("brp_core:playerInit", () => {
    const player = global.source;
    const playerInstance = Player.playerCache[player];
    playerInstance.setIsLoaded(true);
    playerInstance.triggerEvent("brp_core:spawnPlayer");
})