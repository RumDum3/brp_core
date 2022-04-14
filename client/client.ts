const thread = setTick(function(){
    if (NetworkIsPlayerActive(PlayerId())) {
        emitNet("brp_core:playerInit");
        clearTick(thread);
    }
});

setImmediate(() => {
    SetMinimapHideFow(true);
    Citizen.invokeNative("0x5FB53015", 2);
    Citizen.invokeNative("0x50C803A4CD5932C5", 0); // hide hud
});

setTick(() => {
    Citizen.invokeNative("0xFE99B66D079CF6BC", 0, 0xCF8A4ECA, true) // disable control [LALT]
    Citizen.invokeNative("0xFE99B66D079CF6BC", 0, 0xAC4BD4F1, true) // disable control [TAB]
    Citizen.invokeNative("0xFE99B66D079CF6BC", 0, 0xB238FE0B, true) // disable control [TAB - HOLSTER] (inventory)
    Citizen.invokeNative("0x543DFE14BE720027", false) // remove cinematic mode
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