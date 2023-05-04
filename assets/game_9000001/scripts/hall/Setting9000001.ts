/*
 * Describe: 设置页面
 * File: Setting9000001.ts
 * Created Date: Thursday, May 4th 2023, 11:01:59 pm
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
export default class Setting9000001 extends base.PopupModel {
    @property(cc.Slider)
    ui_musicSlider: cc.Slider = null;
    @property(cc.Slider)
    ui_effectSlider: cc.Slider = null;
 
    start () {
        this.open();
        this.ui_musicSlider.progress = base.SoundMger.instance.getMusicVolume();
        this.ui_effectSlider.progress = base.SoundMger.instance.getEffectsVolume();
    }
 
    private onEventMusicSliderCall(){
        base.SoundMger.instance.setMusicVolume(this.ui_musicSlider.progress);
    }
    
    private onEventEffectSliderCall(){
        base.SoundMger.instance.setEffectsVolume(this.ui_effectSlider.progress);
        
    }
 
}
 
