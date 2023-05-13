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
    @property(cc.Node)
    ui_effect: cc.Node[] = [];
    @property(cc.Node)
    ui_music: cc.Node[] = [];
 
    start () {
        this.open();
        this.ui_musicSlider.progress = base.SoundMger.instance.getMusicVolume();
        this.ui_effectSlider.progress = base.SoundMger.instance.getEffectsVolume();

        for (let i = 0; i < 2; i++) {
            this.ui_effect[i].active = false;
            this.ui_music[i].active = false;
            this.ui_effect[i].on('click',this.onClicSetkEffect,this);
            this.ui_music[i].on('click',this.onClicSetkMusic,this);
        }
        this.setStatus();
    }
 
    private onEventMusicSliderCall(){
        base.SoundMger.instance.setMusicVolume(this.ui_musicSlider.progress);
        this.setStatus();
    }
    
    private onEventEffectSliderCall(){
        base.SoundMger.instance.setEffectsVolume(this.ui_effectSlider.progress);
        this.setStatus();
    }

    private onClicSetkEffect(event:cc.Button){
        this.onClickEffect();
        if (this.ui_effectSlider.progress > 0) this.ui_effectSlider.progress = 0;
        else this.ui_effectSlider.progress = 0.5;
        this.onEventEffectSliderCall();
    }
    
    private onClicSetkMusic(event:cc.Button){
        this.onClickEffect();
        if (this.ui_musicSlider.progress > 0) this.ui_musicSlider.progress = 0;
        else this.ui_musicSlider.progress = 0.5;
        this.onEventMusicSliderCall();
    }

    private setStatus(){
        this.ui_effect[0].active = !(this.ui_effectSlider.progress > 0);
        this.ui_effect[1].active = this.ui_effectSlider.progress > 0;
        this.ui_music[0].active = !(this.ui_musicSlider.progress > 0);
        this.ui_music[1].active = this.ui_musicSlider.progress > 0;
    }
 
}
 
