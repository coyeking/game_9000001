/*
 * Describe: 大厅
 * File: Hall9000001.ts
 * Created Date: Wednesday, May 3rd 2023, 11:19:47 pm
 * Author: coyeking (coyeking385@gmail.com)
 * -----
 * QQ: 2903475819
 * github: https://github.com/coyeking
 * gitee: https://gitee.com/coyeking
 * Copyright (c) 2023 https://www.xiaowo6.cn
 * ----------	---	---------------------------------------------------------
 */
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
                base.UiMger.createPopup('setting');
                break;
            case 'btn_share':
                base.NativeMger.onShare();
                break;
            default:
                break;
        }
    }
 
}
 
