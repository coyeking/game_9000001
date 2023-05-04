/*
 * Describe: 程序入口
 * File: Main.ts
 * Created Date: Wednesday, May 3rd 2023, 9:50:05 pm
 * Author: coyeking (coyeking385@gmail.com)
 * -----
 * QQ: 2903475819
 * github: https://github.com/coyeking
 * gitee: https://gitee.com/coyeking
 * Copyright (c) 2023 https://www.xiaowo6.cn
 * ----------	---	---------------------------------------------------------
 */
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
 
