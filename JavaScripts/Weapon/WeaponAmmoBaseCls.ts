export class WeaponAmmoBaseCls{
    public count :number
    private id :number
    private order :number
    private pickSound :string
    private character : Character

    consturctor(id:number,count:number,character : Character){
        this.id = id
        this.count = count
        this.character = character
        this.PickSound()
    }

    private PlayerPickAmmo(weaponAmmo : GameObject, count : number):void{
        if(weaponAmmo){
            
        }
        this.count += count
        this.PickSound()
    }      
    private PlayerDropAmmo(count: number):boolean{
        let isDropAll = false
        if(this.count <= 0){
            return
        }
        if(count >= this.count){
            isDropAll = true
        }
        this.count -= count
        if(isDropAll){
            this.count = 0
        }
        return isDropAll
    }
    public PlayerConsumeAmmo(count : number):number{
        if(this.count <= 0){
            this.count = 0
            return 0
        }
        if(count > this.count){
            count = this.count
        }
        this.count -= count
        return count
    }
    public SetCount(count : number):void{
        this.count = count
    }
    private PickSound():void{
        
    }
}