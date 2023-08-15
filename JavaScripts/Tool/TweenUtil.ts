export class TweenUtil{

    StartFunction : (t:TweenUtil)=>void
    UpdateFunction : (t:TweenUtil, dt : number)=>void
    StopFunction : (t:TweenUtil)=>void

    totalTime:number
    time:number

    customData : Map<string, any>
    isPlaying : boolean

    constructor(
        getTotalTime:() => number, 
        update : (time1:number,time2:number,time3:number)=>void,
        callback:()=>void,
        start?:()=>void){
            start = start || function() {}
            this.StartFunction = (t:TweenUtil)=>{
                start()
                t.totalTime = getTotalTime()
                t.time = 0
                this.isPlaying = true
            }
            this.UpdateFunction = (t:TweenUtil, dt : number)=>{
                if (!this.isPlaying) {
                    return
                }
                t.time += dt
                if(t.time >= t.totalTime){
                    t.StopFunction(t)
                    return
                }
                update(t.time,t.totalTime,t.time)
            }
            this.StopFunction = (t:TweenUtil)=>{
                if(!this.isPlaying)
                {
                    return
                }
                callback()
                this.isPlaying = false
            }
    }
} 