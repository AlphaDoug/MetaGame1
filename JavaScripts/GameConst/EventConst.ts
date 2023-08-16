declare namespace EventConst{
    enum ClientEvent {
        PlayerBeHitEvent = "PlayerBeHitEvent",
        PlayerNearWeaponEvent = "PlayerNearWeaponEvent",
        PlayerFarWeaponEvent = 'PlayerFarWeaponEvent',
        PlayerNearWeaponAccessoryEvent = 'PlayerNearWeaponAccessoryEvent',
        PlayerFarWeaponAccessoryEvent = 'PlayerFarWeaponAccessoryEvent',
        PlayerNearAmmoEvent = 'PlayerNearAmmoEvent',
        PlayerFarAmmoEvent = 'PlayerFarAmmoEvent',
        PlayerDieEvent = 'PlayerDieEvent',
        CreateAllUnitEvent = 'CreateAllUnitEvent',
        SettingAssAimRefreshEvent = 'SettingAssAimRefreshEvent',
        SyncDataEvent = 'SyncDataEvent',
        OnEquipWeaponEvent = 'OnEquipWeaponEvent',
        SettingReadyEvent = 'SettingReadyEvent',
        WeaponObjCreatedEvent = 'WeaponObjCreatedEvent',
        WeaponObjActiveChangeEvent = 'WeaponObjActiveChangeEvent'
    }
    enum ServerEvent {
        WeaponHitPlayerEvent ='WeaponHitPlayerEvent',
        CreateAmmoEvent ='CreateAmmoEvent',
        DestroyAmmoEvent ='DestroyAmmoEvent',
        PlayerPickAmmoEvent = 'PlayerPickAmmoEvent',
        PlayerEventCreateOverEvent = 'PlayerEventCreateOverEvent',
        PlayerDataModifiEvent = 'PlayerDataModifiEvent',
        SyncAndSaveEvent = 'SyncAndSaveEvent',
        WeaponObjCreatedEvent = 'WeaponObjCreatedEvent'
    }
}