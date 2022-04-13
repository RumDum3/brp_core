const thread = setTick(function(){
    if (NetworkIsPlayerActive(PlayerId())) {
        emitNet("brp_core:playerInit");
        clearTick(thread);
    }
});

onNet("brp_core:spawnPlayer", () => {
    exports.spawnmanager.spawnPlayer({
        x: 500.0,
        y: 500.0,
        z: 500.0,
        model: "mp_m_freemode_01"
    }, () => {
        const playerId = PlayerId();
        const ped = PlayerPedId();

        SetPedDefaultComponentVariation(ped);

        SetCanAttackFriendly(ped, true, false);
        NetworkSetFriendlyFireOption(true);

        ShutdownLoadingScreen();
        ShutdownLoadingScreenNui();
    });
});