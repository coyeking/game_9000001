const {ccclass, property} = cc._decorator;
 
@ccclass
export default class Hall9000001 extends base.BaseView {
 
    start () {
    }
 
    /**
     * 点击事件
     * @param event 
     * @param customEventData 
     */
    onClick(event:cc.Event, customEventData: string){
        let eventName = event.currentTarget.name;
        switch (eventName) {
            case 'btn_set':
                // base.UiMger.createPopup('setting');
                break;
            case 'btn_share':
                base.NativeMger.onShare();
                break;
            default:
                break;
        }
    }
 
}
 
