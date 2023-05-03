import { GameConfig } from "../GameConfig";
 
const {ccclass, property} = cc._decorator;
@ccclass
export default class Main extends cc.Component {
    @property(cc.Prefab)
    ui_loading_prefab: cc.Prefab = null;
 
    onLoad () {
        this.node.addChild(cc.instantiate(this.ui_loading_prefab));
    }
 
    start(){ 
        this.initSdk();
    }
 
    /**
     * 初始化SDK
     */
    initSdk(){
        base.NativeMger.initMPShare(GameConfig.shareTitle);
    }
 
 
}
 
