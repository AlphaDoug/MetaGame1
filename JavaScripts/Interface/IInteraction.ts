@Core.Class
export default class InteractActor extends Core.Script {
    /**
     * 交互物的场景中对象
     */
    private m_Object: GameObject;
    private m_trigger: Trigger;
    private m_guid:string;

    protected onStart(): void {
        this.m_Object = this.gameObject
        this.m_trigger = <Trigger>this.m_Object.getChildByName("Trigger") 
        this.m_guid = this.m_Object.guid;
        this.m_trigger.onEnter.add(go => {
            if (!this.m_Object.isRunningClient()) {
                return
            }
            // 判断进入碰撞区域的对象是否为角色
            if (!(go instanceof Gameplay.Character)) {
                // 不是角色，停止执行
                return;
            }
    
            go = <Gameplay.Character>go
            if (!(go == getCurrentPlayer().character)) {
                //非本地玩家控制的角色
                return
            }
            Events.dispatchLocal("client_show_interact_button", this.m_guid)
        })
        this.m_trigger.onLeave.add(go => {
            if (!this.m_Object.isRunningClient()) {
                return
            }
            // 判断进入碰撞区域的对象是否为角色
            if (!(go instanceof Gameplay.Character)) {
                // 不是角色，停止执行
                return;
            }
            go = <Gameplay.Character>go
            if (!(go == getCurrentPlayer().character)) {
                //非本地玩家控制的角色
                return
            }
            Events.dispatchLocal("client_hide_interact_button", this.m_guid)
        })

       
    }

    /**
     * 交互物初始化
     */
    public Init(guid : string, transform : Transform) :string{
        this.m_Object = GameObject.spawn({guid: guid, replicates : true, transform : transform});

        return this.m_guid;
    }

    public IsClient() :boolean{
        return this.m_Object.isRunningClient();
    }
    /**开始交互，由客户端UI层面发起*/
    public OnInteract(player:Player, index:number):void{
        if (this.m_Object.isRunningClient()) {
            this.InteractImplement(player, index);
        } else {
            return;
        }
    }

    @Core.Function(Core.Server)
    protected InteractImplement(player:Player, index:number):void{
        this.DoOnServer(player, index);
        this.DoOnClient(player, index);
    }
    /**
     * 客户端触发，在发生交互后调用
     */
    @Core.Function(Core.Client)
    protected DoOnClient(player:Player, index:number):void{
        console.log('客户端产生交互，玩家', player)
    }
    /**
     * 服务端触发，在发生交互后调用
     */
    @Core.Function(Core.Server)
    protected DoOnServer(player:Player, index:number):void{
        console.log('服务端产生交互，玩家', player)
    }
}
