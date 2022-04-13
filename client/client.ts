const thread = setTick(function(){
    if (NetworkIsPlayerActive(PlayerId())) {
        emitNet("brp_core:playerInit");
        clearTick(thread);
    }
});

onNet("brp_core:spawnPlayer", () => {
    exports.spawnmanager.spawnPlayer({
        x: 2590.05,
        y: -1202.15,
        z: 53.9,
        model: "A_M_M_JamesonGuard_01", // TODO: switch model to use the free mode (ability to change clothes)
        skipFade: false
    }, () => {
        const playerId = PlayerId();
        const playerPed = PlayerPedId();

        Citizen.invokeNative("0xC866A984", playerPed);
    });
});