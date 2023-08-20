/**玩家属性同步类，世界中每有一个玩家，就会在对象下面创建一个此脚本来对应此玩家 */
@Core.Class
export default class PlayerAttr extends Core.Script {

    public character:Gameplay.Character
    @Core.Property({displayName: '血量', replicated : true})
    public hp : number = 100
    @Core.Property({displayName: '最大血量', replicated : true})
    public maxHp : number
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        
        console.log('创建成功脚本')

    }
    public InitData(c : Gameplay.Character){
        if(this.isRunningClient()){
            return
        }
        this.character = c
        this.maxHp = 100
        this.hp = this.maxHp
        console.log('玩家属性脚本初始化完成')
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}