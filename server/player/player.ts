import {Job} from "../enum/jobs";
import {Inventory} from "../inventory/inventory";

export class Player {
    private readonly playerId: number;
    private readonly identifiers: {[identifierName: string]: string};
    private tokens: string[];
    private group: string;
    private job: Job;
    private name: string | null;
    private inventory: Inventory;

    private hasLoaded: boolean;

    public static playerCache: {[identifier: string]: Player};

    public constructor(playerId: number, identifiers: {[identifierName: string]: string}, group: string, job: Job, name: string | null) {
        this.playerId = playerId;
        this.identifiers = identifiers;
        this.tokens = [];
        this.group = group;
        this.job = job;
        this.name = name;
        this.inventory = new Inventory();

        this.hasLoaded = false;

        Player.playerCache[playerId] = this;
    }

    public getIdentifiers(): {[identifierName: string]: string} {
        return this.identifiers;
    }

    public getTokens(): Array<String> {
        return this.tokens;
    }

    public getGroup(): string {
        return this.group;
    }

    public getJob(): Job {
        return this.job;
    }

    public getName(): string | null {
        return this.name;
    }

    public getInventory(): Inventory {
        return this.inventory;
    }

    public isLoaded(): boolean {
        return this.hasLoaded;
    }

    public addToken(token: string) {
        this.tokens.push(token);
    }

    public set setGroup(group: string) {
        this.group = group;
    }

    public set setJob(job: Job) {
        this.job = job;
    }

    public setIsLoaded(value: boolean): void {
        this.hasLoaded = value;
    }

    public triggerEvent(eventName: string, ...args: any[]): void {
        emitNet(eventName, this.playerId, ...args);
    }
}