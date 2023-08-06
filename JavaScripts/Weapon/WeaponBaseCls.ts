
export abstract class WeaponBaseCls {

    /**枪械预制体*/
    public prefab: GameObject
    /**
     * 枪械配置ID
     */
    private id: number
    /**枪械绑定的锚点 */
    public root: GameObject
    /**枪械所属的玩家角色 */
    private character: Character
    /**枪口位置点 */
    private muzzleObj: GameObject
    /**枪管方向 */
    private dir: Vector
    /**投弹口对象 */
    private toss: GameObject

    /**枪械是否被持有 */
    private _isdraw: boolean = false
    private _isZoomIn : boolean = false
    private _rapidlyRemainingBullets: number = 1
    private _curShootMode : number = 1
    private _hasJustFired : boolean = false
    private _fireWait : number = 0
    private _isGoingToFire = false
    private _isFiringOnNextUpdate = false
    private _isAllowed = true
    private _wasAllowedAndFiring = false
    private _isGoingToReloadMagazine = false
    private _isReloadOnNextUpdate = false
    private _reloadWait = 0
    private _onReload = false
    
    private _isIgnoringSelf = true
    
    private _hasFireCondition = true
    
    private _fireConditionSide = 1
    
    private _isGoingToPump = false
    
    private _isPumpNextUpdate = false
    
    private _pumpWait = 0
    
    private _isPumping = false
    
    private _isWaitingPump = false
     
    private _zoomInTryPump = false
     
    private _isWithDrawing = false

    private _weaponAccessoryList : object = {
        muzzle: null,
        grip: null,
        magazine : null,
        butt: null,
        sight : null
    }
    

    constructor(){

    }
}