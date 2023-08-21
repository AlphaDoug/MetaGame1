export class PlayerData extends Subdata {

    public hp: number = 100;

    /** 金币改变的回调，在需要知道金币改变的地方监听即可 */
    public onhpChange: Action = new Action();

    /**
     * 改变金币的数量
     * @param deltaNum 改变值，为负数就是减
     */
    public changeGold(deltaNum: number) {
        // 服务端改变金币，将这个操作同步给客户端
        this.syncToClient();
        this.hp += deltaNum;
        this.onhpChange.call(this.hp);
    }
}