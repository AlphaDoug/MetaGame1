declare namespace GameConst{
    enum GunModeEnum {
        SniperRifle = 1, 
        AssaultRifle = 2, 
        SubMachineGun = 3,
        ShotGun = 4, 
        Pistol = 5, 
        MeleeWeapon = 6, 
        ThrownWeapon = 7, 
        RocketLauncher = 8, 
        Other = 9, 
        TrailingGun = 10
    }
    enum HitPartEnum{
        None = 0,
        Head = 1,
        Body = 2,
        Limb = 3,
        Fort = 4
    }
    enum FireModeEnum{
        Auto = 1, 
        Rapidly_1 = 2, 
        Rapidly_2 = 3, 
        Single = 4 
    }
    enum DiffuseFunctionEnum{
        Linear = 1,
        Sqrt = 2,
        Square = 3
    }
    enum CanBeEquipPositionEnum{
        MainOrDeputy = 1,
        Mini = 2,
        Prop = 3
    }
    /**枪械配件类型 */
    enum WeaponAccessoryTypeEnum{
        Muzzle = 1,
        Grip = 2,
        Magazine = 3,
        Butt = 4,
        Sight = 5
    }
    enum UnitTypeEnum{
        Weapon = 1,
        Accessory = 2,
        Ammo = 3
    }
    enum ObjectTypeEnum{
        Hole = 1,
        FireEff = 2,
        HitEff = 3,
        Shell = 4,
        Sound = 5
    }
    enum PlayerActionModeEnum{
        Run = 1, 
        QuicklyRun = 2, 
        AimRun = 3, 
        CrouchRun = 4, 
        QuicklyCrouchRun = 5, 
        AimCrouchRun = 6 
    }
}
declare namespace GameConst{
    type 

    type WeaponConfigData = {
        name : string
        des : string
        icon : string
        selectedIcon : string
        order : number
        defaultAimImg : string
        waistAimMode : string
        recoilId : number
        animationId : number
        banShoot : boolean
        isHitSelf : boolean
        isHitFriend : boolean
        canBeEquipAccessory : number[]
        damage : number
        magazineUsed : number
        hitHeadDamageRate : number
        hitBodyDamageRate : number
        hitLimbDamageRate : number
        distance : number
        bulletName : string
        bulletHole : string
        bulletShell : string
        autoReload : boolean
        mechinicalAimFOV : number
        waistAimFOV : number
        shootSpeed : number
        bulletPerShoot : number
        consumeSingleBulletPerShoot : number
        shootMode : FireModeEnum[]
        defaultShootMode : FireModeEnum
        rapidly_1 : number
        rapidly_2 : number
        gunMode : GunModeEnum
        accurateAim : boolean
        canBeEquipPosition : CanBeEquipPositionEnum
        aimTime : number
        stopAimTime : number
        assistAimTime : number
        assistAimDis0 : number
        assistAimDis1 : number
        assistAimRatio : number
        reloadWithMagazines : boolean
        canInterruptBulletLoad : boolean
        hitEffect : string
        fireEffect : string
        bulletSpeed : number
    }
}