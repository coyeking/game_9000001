declare namespace base {
    /**
     * 枚举
     * tips类型
     */
    export enum ToastType {
        /**
         * 默认
         */
        DEFAULT = 0,
        /**
         * 成功
         */
        SUCCESS = 1,
        /**
         * 失败
         */
        FAIL = 2
    }
    /**
     * 枚举
     * 弹窗类型
     */
    export enum AlertType {
        /**
         * 只有一个确定
         */
        DEFAULT = 0,
        /**
         * 有两个按钮
         */
        TWOBTN = 1
    }
    /**
     *本地存储
     */
    export enum LocalNames {
        /**背景音乐值 */
        LOCAL_MUSICVOLUME = "LOCAL_MUSICVOLUME",
        /**音效值 */
        LOCAL_EFFECTSVOLUME = "LOCAL_EFFECTSVOLUME"
    }
    /**
     *通知
     */
    export enum NotifyNames {
    }
    /**
     * 枚举
     * ui层级
     */
    export enum UUID {
        /** Layer层 */
        Layer = 100,
        /** poput层 */
        Popup = 500,
        /** Alert层 */
        Alert = 1000,
        /**Toast层 */
        Toast = 2000,
        /** loading层 */
        Loading = 2000
    }
    /**
     * 全局变量
     */
    export class Global {
        /** 当前分包 bunleName */
        static bundleName: string;
        /** 分享title */
        static shareTitle: string;
    }
    /**
     * 音效管理器
     */
    export class SoundMger {
        static _instance: SoundMger;
        static readonly instance: SoundMger;
        _musicVolume: number;
        _effectsVolume: number;
        protected init(): void;
        /**
         * 获取AudioClip
         * @param url
         * @param callback
         * @returns
         */
        protected getClip(_url: string, _callback: Function, _bundleName?: string): void;
        /**
         * 播放音效
         * @param url 音效地址
         * @param loop 是否重复
         * @returns
         */
        playEffect(url?: string, loop?: boolean, _bundleName?: string): void;
        /**
         * 停止播放音效
         */
        stopEffect(): void;
        /**
         * 设置音效音量
         * @param volume 0.0 ~ 1.0
         */
        setEffectsVolume(volume: number): void;
        /**
         * 获取音效值
         * @returns
         */
        getEffectsVolume(): number;
        /**
         * 播放背景音乐
         * @param url 音效地址
         */
        playMusic(url: string, _bundleName?: string): void;
        /**
         * 停止播放背景音乐
         */
        stopMusic(): void;
        /**
         * 设置背景音乐音量
         * @param volume 0.0 ~ 1.0
         */
        setMusicVolume(volume: number): void;
        /**
         * 获取背景音乐音量
         * @returns
         */
        getMusicVolume(): number;
        /**
         * 背景是否静音
         * @returns boolean
         */
        getIsMusic(): boolean;
        /**
         * 音效是否静音
         * @returns boolean
         */
        getIsEffects(): boolean;
    }
    export class BaseView extends cc.Component {
        /**
         * 按钮点击音效
         * @param event
         * @param customEventData
         */
        protected onClickEffect(): void;
    }
        export class PopupModel extends BaseView {
        protected ui_mask: cc.Node;
        protected ui_content: cc.Node;
        onEnable(): void;
        /**
         *
         * @param cb 关闭完成返回
         * @param isAct 是否动画
         */
        protected close(isAct?: boolean, cb?: Function): void;
        /**
         *
         * @param cb 打开完成回调
         * @param isAct 打开动画
         */
        protected open(isAct?: boolean, cb?: Function): void;
    }
            export class AlertModel extends PopupModel {
        protected ui_label: cc.Label;
        protected ui_btn_Cancel: cc.Node;
        protected ui_btnConfirm_center: cc.Node;
        protected ui_btnConfirm: cc.Node;
        _ConfirmCallBack: Function;
        _CancelCallBack: Function;
        show(msg?: string, type?: AlertType, _ConfirmCallBack?: Function, _CancelCallBack?: Function): void;
        /**
         * 按钮确定事件
         * @param event
         * @param customEventData
         */
        protected onConfirm(event: cc.Event, customEventData: string): void;
        /**
         * 按钮取消事件
         * @param event
         * @param customEventData
         */
        protected onCancel(event: cc.Event, customEventData: string): void;
    }
    /**
     * 分包资源管理
     */
    export class AssetMger {
        /**
        * 加载资源
        * @param url   资源路径
        * @param type  资源类型
        * @param cb    回调
        * @param bundleName
        * @method loadRes
        */
        static loadRes(url: string, type: any, complete: Function, _bundleName?: string): string;
        /**
         * 加载所有预制体资源
         * @param onProgress
         * @param onComplete
         * @param bundleName
         * @returns
         */
        static loadAllPrefabRes<T extends cc.Asset>(onProgress: (proress: number) => void, onComplete: (error: Error, assets: Array<T>) => void, _bundleName?: string): void;
        /**
         * 加载prefab
         * @param _name 文件名
         * @param bundleName
         * @returns
         */
        static loadPrefabRes(_name: string, bundleName?: string): Promise<cc.Prefab>;
        /**
         * 加载AudioClip
         * @param _name 文件名
         * @param bundleName
         * @returns Promise
         */
        static loadAudioClipRes(_name: string, bundleName?: string): Promise<cc.AudioClip>;
        /**
         * 加载贴图资源
         * @param path 贴图路径
         * @param bundleName
         * @returns Promise
         */
        static loadSpriteFrameRes(path: string, bundleName?: string): Promise<cc.SpriteFrame>;
        /**
         * 记载粒子
         * @param _name 粒子名称
         * @returns Promise
         */
        static loadParticleAssetRes(_name: string, bundleName?: string): Promise<cc.ParticleAsset>;
        /**
         * 加载贴图资源
         * @param path 贴图路径
         * @returns Promise
         */
        static loadSpriteAtlasRes(path: string, bundleName?: string): Promise<cc.SpriteAtlas>;
        /**
         * 加载text资源
         * @param path 路径
         * @param bundleName
         * @returns
         */
        static loadTextAssetRes(path: string, bundleName?: string): Promise<cc.TextAsset>;
        /**
         * 加载json资源
         * @param bundleName
         * @param path 路径
         * @returns Promise<cc.JsonAsset.json>
         */
        static loadJsonAssetRes(path: string, bundleName?: string): Promise<any>;
        /**
         * 加载本地分包
         * @param bundleName
          * @returns Promise<cc.AssetManager.Bundle>
         */
        static loadBundle(bundleName: string): Promise<cc.AssetManager.Bundle>;
        /**
         * 移除分包
         * @param bundleName
          * @returns Promise
         */
        static removeBundle(bundleName: string): Promise<void>;
        /**
         * 释放分包资源
         * @param bundleName
          * @returns Promise
         */
        static releaseBundle(bundleName: string): Promise<void>;
        /**
         * 加载微信头像，无后缀网络资源
         * @param url
         */
        static loadRemoteWXImg(url: string): Promise<cc.SpriteFrame>;
    }
    /**
     * 缓存管理
     */
    export class CacheMger {
        static _instance: CacheMger;
        static readonly instance: CacheMger;
        protected _cache: cc.Object;
        /**
         * add
         * @param _key
         * @param _uuid
         * @param _bundleName
         * @returns
         */
        add(_key: string, _uuid: string, _bundleName?: string): string;
        /**
         * get
         * @param _key
         * @param _bundleName
         * @returns
         */
        get(_key: string, _bundleName?: string): string | null;
        /**
         * getPrefab
         * @param _key
         * @param _bundleName
         * @returns
         */
        getPrefab(_key: string, _bundleName?: string): cc.Prefab | null;
        /**
         * del
         * @param _bundleName
         * @returns
         */
        del(_bundleName?: string): void;
    }
        export class ToastModel extends cc.Component {
        private item;
        init(msg: string, type: ToastType): void;
    }
        /**
     * ui管理
     */
    export class UiMger {
        /**
         * 加载场景并运行
         * @param classname
         * @param param
         */
        static loadMainScene(_bundleName?: string): void;
        /**
         * 加载场景并运行
         * @param classname
         * @param param
         */
        static runScene(_sceneName: string, _bundleName?: string): void;
        /**
         * showToast
         * @param _msg string
         * @param _type ToastType
         * @param _bundleName string
         * @returns
         */
        static showToast(_msg: string, _type?: ToastType, _bundleName?: string): void;
        /**
         * 加载Layer
         * @param _prefabName
         * @param _className
         * @param _param
         * @param _complete
         * @param _bundleName
         * @returns
         */
        static createLayer(_prefabName: string, _className?: string, _param?: any, _complete?: () => void, _bundleName?: string): void;
        /**
         * 加载Popup
         * @param _prefabName
         * @param _className
         * @param _param
         * @param _complete
         * @param _bundleName
         * @returns
         */
        static createPopup(_prefabName: string, _className?: string, _param?: any, _complete?: () => void, _bundleName?: string): void;
        /**
         * 显示
         * @param msg
         * @param type
         * @param callBack
         */
        static showAlert(msg?: string, type?: AlertType, _ConfirmCallBack?: Function, _CancelCallBack?: Function, _bundleName?: string): void;
    }
    export class LoadingModel extends cc.Component {
        ui_bundleName: string;
        ui_progress: cc.ProgressBar;
        /**
         * 加载分包
         */
        protected load(): void;
    }
    /**
     * 通知消息事件管理器
     */
    export class EventMger {
        private static _handlers;
        /**
         * 监听事件
         * @param {string} eventName 事件名称
         * @param {function} handler 监听函数
         * @param {object} target 监听目标
         */
        static on(eventName: string, handler: Function, target: any): number;
        /**
         * 取消监听
         * @param {string} eventName 监听事件
         * @param {function} handler 监听函数
         * @param {object} target 监听目标
         */
        static off(eventName: string, handler: Function, target: any): void;
        /**
         * 分发事件
         * @param {string} eventName 分发事件名
         * @param  {...any} params 分发事件参数
         */
        static dispatchEvent(eventName: string, ...args: any[]): void;
    }
    /**
     * 设备工具
     */
    export class DeviceUtil {
        /**
         * 返回手机屏幕安全区域，如果不是异形屏将默认返回设计分辨率尺寸。目前只支持安卓、iOS 原生平台和微信小游戏平台。
         */
        static getSafeAreaRect(): cc.Rect;
        /** 当前平台 */
        static readonly platform: number;
        /** 当前操作系统 */
        static readonly os: string;
        /** 是否为安卓手机 */
        static readonly isAndroid: boolean;
        /** 是否为原生环境 */
        static readonly isNative: boolean;
        /** 是否为浏览器环境 */
        static readonly isBrowser: boolean;
        /** 是否为手机 */
        static readonly isMobile: boolean;
        /** 是否为苹果手机 */
        static readonly isIPhone: boolean;
        /** 是否为苹果平板 */
        static readonly isIPad: boolean;
        /** 是否为手机浏览器 */
        static readonly isMobileBrowser: boolean;
        /** 是否为桌面浏览器 */
        static readonly isDesktopBrowser: boolean;
        /** 是否为微信小游戏 */
        static readonly isWeChat: boolean;
        /** 是否为 QQ 小游戏 */
        static readonly isQQPlay: boolean;
        /** 是否为字节小游戏 */
        static readonly isByteDance: boolean;
        /** 是否为百度小游戏 */
        static readonly isBaidu: boolean;
        /** 是否为 vivo 小游戏 */
        static readonly isVivo: boolean;
        /** 是否为 OPPO 小游戏 */
        static readonly isOPPO: boolean;
        /** 是否为小米小游戏 */
        static readonly isXiaomi: boolean;
        /** 是否为华为小游戏 */
        static readonly isHuawei: boolean;
        /** 是否为支付宝小游戏 */
        static readonly isAlipay: boolean;
    }
    /**
     * 微信小游戏管理
     */
    export class WxMpMger {
        /**
         * 手机震动
         * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
         * type有效值为：heavy、medium、light
         * https://developers.weixin.qq.com/minigame/dev/api/device/vibrate/wx.vibrateShort.html
         */
        static vibrateShort(_type?: string): void;
        /**
         * 微信登录接口
         */
        static wxLogin(): Promise<any>;
        /**
         * 获取用户数据
         * @param code
         * @returns
         */
        private static getUserInfo;
        /**
         * 小程序左上角被动分享
         * @param title
         * @param imageUrl
         * @returns
         */
        static initMPShare(title: string, imageUrl: string): void;
        /**
         * 用户主动分享
         * @param query
         * @param title
         */
        static onShare(query: string, title: string, imageUrl: string): void;
        /**
         * 设置排行榜数据
         * 小程序后台设置标识为【level】
         * @param level
         */
        static setWxCloudRankData(level: number): void;
        /**
         * 拷贝文本
         */
        static setClipboardData(str: string): void;
        /**
         * 检测版本更新
         */
        static updateManager(): void;
    }
    export class NativeMger {
        /**
         * 手机震动
         * @param type 有效值为：heavy、medium、light
         * @returns boolean
         */
        static vibrateShort(type?: string): boolean;
        /**
         * 小程序左上角被动分享
         * @param title
         * @param imageUrl
         * @returns
         */
        static initMPShare(_title?: string, _imgUrl?: string): void;
        /**
         * 用户主动分享
         * @param _query url参数
         * @param _title 分享标题
         * @param _imgUrl 分享图片
         * @returns
         */
        static onShare(_query?: string, _title?: string, _imgUrl?: string): void;
        /**
         * 打开外部浏览器
         * @param url
         */
        static openBrowser(url: string): void;
        /**
         * 设置系统剪贴板的内容
         * @param str
         */
        static setClipboardData(str: string): void;
        /**
         * 检测版本更新
         */
        static updateManager(): void;
    }
    /**
     * 节点池
     */
    export class PoolNodeMger {
        dictPool: any;
        dictPrefab: any;
        static _instance: PoolNodeMger;
        static readonly instance: PoolNodeMger;
        /**
         * 根据预设从对象池中获取对应节点
         * @param prefab
         * @param parent
         * @returns
         */
        getNode(prefab: cc.Prefab, parent: cc.Node): cc.Node;
        /**
         * 将对应节点放回对象池中
         * @param node
         * @returns
         */
        putNode(node: cc.Node): void;
        /**
         * 根据名称，清除对应对象池
         * @param name
         */
        clearPool(name: string): void;
    }
    /**
     * 本地储存管理
     */
    export class StorageMger {
        /**
         * 存储本地数据
         * @param key 存储key
         * @param value 存储值
         * @returns
         */
        static set(key: string, value: any): void;
        /**
         * 获取指定关键字的数据
         * @param key          获取的关键字
         * @param defaultValue 获取的默认值
         * @returns
         */
        static get(key: string, defaultValue?: any): string;
        /** 获取指定关键字的数值 */
        static getNumber(key: string, defaultValue?: number): number;
        /** 获取指定关键字的布尔值 */
        static getBoolean(key: string): boolean;
        /** 获取指定关键字的JSON对象 */
        static getJson(key: string, defaultValue?: any): any;
        /**
         * 删除指定关键字的数据
         * @param key 需要移除的关键字
         * @returns
         */
        static remove(key: string): void;
        /** 清空整个本地存储 */
        static clear(): void;
    }
    /**
     * 数组工具
     */
    export class ArrayUtil {
        /**
         * 复制二维数组
         * @param array 目标数组
         */
        static copy2DArray(array: any[][]): any[][];
        /**
        * Fisher-Yates Shuffle 随机置乱算法
        * @param array 目标数组
        */
        static fisherYatesShuffle(array: any[]): any[];
        /**
        * 混淆数组
        * @param array 目标数组
        */
        static confound(array: any[]): any[];
        /**
         * 数组扁平化
         * @param array 目标数组
         */
        static flattening(array: any[]): any[];
        /**
        * 合并数组
        * @param array1 目标数组1
        * @param array2 目标数组2
        */
        static combineArrays(array1: any[], array2: any[]): any[];
        /**
        * 获取随机数组成员
        * @param array 目标数组
        */
        static getRandomValueInArray(array: any[]): any;
    }
    /**
     * Base64 工具
     */
    export class Base64Util {
        /**
         * 将普通文本编码为 Base64 格式文本
         * @param string
         * @see
         */
        static encodeString(string: string): string;
        /**
         * 将 Base64 格式文本解码为普通文本
         * @param base64
         */
        static decodeString(base64: string): string;
        /**
         * 将普通文本编码为 UTF-8 格式文本
         * @param string
         */
        static encodeUtf8(string: string): string;
        /**
         * 将为 UTF-8 格式文本解码为普通文本
         * @param utf8
         */
        static decodeUtf8(utf8: string): string;
        /**
         * (仅 Web 平台下可用) 将 Base64 文本转为二进制数据
         * @param base64
         */
        static base64ToBlob(base64: string): Blob;
    }
    /**
     * 浏览器工具
     */
    export class BrowserUtil {
        /**
         * 清除当前 URL 的参数（修改历史记录，不会刷新当前网页）
         */
        static clearUrlParam(): void;
        /**
         * 设置当前 URL 的参数（修改历史记录，不会刷新当前网页）
         * @param param 参数
         */
        static setUrlParam(param: string | {
            key: string;
            value: string;
        }[]): void;
        /**
         * 获取当前 URL 的参数
         * @param key 键
         */
        static getUrlParam(key: string): string;
        /**
         * 获取当前 URL 的所有参数
         */
        static getUrlParams(): {
            key: string;
            value: string;
        }[];
        /**
         * 复制文本至设备剪贴板
         * @param value 文本内容
         */
        static copy(value: string): boolean;
    }
    /**
     * 颜色工具
     */
    export class ColorUtil {
        /**
         * 将 16 进制（hex）颜色字符串转为 RGBA 格式
         * @param {string} hex
         * @example
         * ColorUtil.hexToRgba('#FFFFFF'); // { r: 255, g: 255, b: 255, a: 255 }
         */
        static hexToRgba(hex: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        /**
         * 将 RGB 或 RGBA 颜色值转为 16 进制（hex）颜色字符串
         * @param color
         * @example
         * const color = {
         *   r: 255,
         *   g: 255,
         *   b: 255,
         * };
         * ColorUtil.rgbaToHex(color);  // '#FFFFFF'
         */
        static rgbaToHex(color: {
            r: number;
            g: number;
            b: number;
            a?: number;
        }): string;
        /**
         * 测试字符串是否为 16 进制（hex）颜色值
         * @param hex
         */
        static isHex(hex: string): boolean;
    }
    /**
     * 几何工具（无优化）
     */
    export class GeometryUtil {
        /**
         * 判断点是否在线段上
         * @param p 目标点
         * @param a 线段端点 a
         * @param b 线段端点 b
         */
        static pointOnLine(p: cc.Vec3, a: cc.Vec3, b: cc.Vec3): boolean;
        /**
         * 判断点是否在三角形内（同向法）
         * @param p 目标点
         * @param a 三角形顶点 a
         * @param b 三角形顶点 b
         * @param c 三角形顶点 c
         */
        static pointInTriangle(p: cc.Vec3, a: cc.Vec3, b: cc.Vec3, c: cc.Vec3): boolean;
        /**
         * 获取点到线段的最短距离
         * @param p 目标点
         * @param a 线段端点 a
         * @param b 线段端点 b
         */
        static pointLineDistance(p: cc.Vec3, a: cc.Vec3, b: cc.Vec3): number;
    }
    /**
     * 数学工具
     */
    export class MathUtil {
        /**
         * 获取随机数
         * @param {Number} min 最小值
         * @param {Number} max 最大值
         * @returns
         */
        static getRandom(min: number, max: number): number;
        /**
        * 获取一个 min 到 max 范围内的随机整数
        * @param min 最小值
        * @param max 最大值
        */
        static getRandomInt(min?: number, max?: number): number;
        /**
         * 获取一个伪随机整数
         * @param seed 随机种子
         * @param key key
         */
        static getPseudoRandomInt(seed: number, key: number): number;
        /**
         * 获取两点间的角度
         * @param p1 点1
         * @param p2 点2
         */
        static getAngle(p1: cc.Vec2, p2: cc.Vec2): number;
        /**
         * 获取两点间的距离
         * @param p1 点1
         * @param p2 点2
         */
        static getDistance(p1: cc.Vec2, p2: cc.Vec2): number;
        /**
         * 将角度转为弧度
         * @param angle 角度
         */
        static angleToRadian(angle: number): number;
        /**
         * 浮点数加法运算（避免浮点数加法精度问题）
         * @param a 数
         * @param b 数
         */
        static addSafely(a: number, b: number): number;
    }
    /**
     * 节点工具
     */
    export class NodeUtil {
        /**
         * 获取节点在目标节点（容器）下的相对位置
         * @param node 节点
         * @param container 目标节点（容器）
         */
        static getRelativePosition(node: cc.Node, container: cc.Node): cc.Vec2;
        /**
         * 坐标是否在目标节点范围内
         * @param pos 坐标
         * @param target 目标节点
         */
        static isPosOnNodeRect(pos: cc.Vec2, target: cc.Node): boolean;
        /**
         * 两个节点是否重叠
         * @param node1 节点 1
         * @param node2 节点 2
         * @param contains 是否完全包含
         */
        static areNodesOverlap(node1: cc.Node, node2: cc.Node, contains?: boolean): boolean;
        /**
         * 获取节点本身在世界坐标系下的对齐轴向的包围盒（不包含子节点）
         * @param node 节点
         */
        static getNodeSelfBoundingBoxToWorld(node: cc.Node): cc.Rect;
    }
    /**
     * 对象工具
     */
    export class ObjectUtil {
        /**
         * 判断指定的值是否为对象
         * @param value 值
         */
        static isObject(value: any): boolean;
        /**
         * 深拷贝
         * @param target 目标
         */
        static deepCopy(target: any): any;
        /**
         * 拷贝对象
         * @param target 目标
         */
        static copy(target: object): object;
    }
    /**
     * Promise 工具
     */
    export class PromiseUtil {
        /**
         * 等待
         * @param time 时长（秒）
         * @example
         * await PromiseUtil.sleep(1);
         */
        static sleep(time: number): Promise<void>;
    }
    /**
     * 正则工具
     */
    export class RegexUtil {
        /**
         * 判断字符是否为双字节字符（如中文字符）
         * @param string 原字符串
         */
        static isDWORD(string: string): boolean;
    }
    /**
     * 渲染工具
     */
    export class RenderUtil {
        /**
         * 获取节点的 RenderTexture
         * @param node 节点
         * @param out 输出
         */
        static getRenderTexture(node: cc.Node, out?: cc.RenderTexture): cc.RenderTexture;
        /**
         * 使用指定材质来将 RenderTexture 渲染到另一个 RenderTexture
         * @param srcRT 来源
         * @param dstRT 目标
         * @param material 材质
         */
        static renderWithMaterial(srcRT: cc.RenderTexture, dstRT: cc.RenderTexture | cc.Material, material?: cc.Material): cc.RenderTexture;
        /**
         * 获取像素数据
         * @param node 节点
         * @param flipY 垂直翻转数据
         */
        static getPixelsData(node: cc.Node, flipY?: boolean): Uint8Array;
        /**
         * 垂直翻转图像数据
         * @param array 数据
         * @param width 行宽
         */
        static flipY(array: Uint8Array, width: number): Uint8Array;
    }
    /**
     * 本地储存工具
     */
    export class StorageUtil {
        /**
         * 保存数据到本地
         * @param key 键
         * @param value 值
         */
        static set(key: string, value: any): void;
        /**
         * 读取本地数据
         * @param key 键
         * @param parse 解析
         */
        static get(key: string, parse?: boolean): any;
        /**
         * 移除本地数据
         * @param key 键
         */
        static remove(key: string): void;
        /**
         * 清除所有数据
         */
        static clear(): void;
    }
    /**
     * 验证工具
     */
    export class TestUtil {
        /**
         * 验证电子邮箱格式
         * @param value string
         */
        static email(value: string): boolean;
        /**
         * 验证手机格式
         * @param value string
         */
        static mobile(value: string): boolean;
        /**
         * 验证URL格式
         * @param value string
         */
        static url(value: string): boolean;
        /**
         * 验证日期格式
         * @param value string
         */
        static date(value: string): boolean;
        /**
         * 验证ISO类型的日期格式
         * @param value string
         */
        static dateISO(value: string): boolean;
        /**
         * 验证十进制数字
         * @param value string
         */
        static number(value: string): boolean;
        /**
         * 验证整数
         * @param value string
         */
        static digits(value: string): boolean;
        /**
         * 验证身份证号码
         * @param value string
         */
        static idCard(value: string): boolean;
        /**
         * 验证金额,只允许保留两位小数
         * @param value string
         */
        static amount(value: string): boolean;
        /**
         * 验证是否中文
         * @param value string
         */
        static chinese(value: string): boolean;
        /**
         * 验证是否英文
         * @param value string
         */
        static letter(value: string): boolean;
        /**
         * 验证只能是字母或者数字
         * @param value string
         */
        static enOrNum(value: string): boolean;
        /**
         * 验证是否包含某个值
         * @param value string
         * @param param any
         */
        static contains(value: string, param: any): boolean;
        /**
         * 是否固定电话
         * @param value string
         */
        static landline(value: string): boolean;
        /**
         * 判断是否为空
         * @param value any
         */
        static empty(value: any): boolean;
        /**
         * 是否json字符串
         * @param value any
         */
        static jsonString(value: any): boolean;
        /**
         * 是否数组
         * @param value any
         */
        static array(value: any): boolean;
        /**
         * 是否对象
         * @param value any
         */
        static object(value: any): boolean;
    }
    /**
     * 时间工具
     */
    export class TimeUtil {
        /**
         * 获取当前时间戳
         * @example
         * TimeUtil.getTimestamp(); // 1614616955186
         */
        static getTimestamp(): number;
        /**
         * 获取当前日期（年/月/日）
         * @example
         * TimeUtil.getDate(); // "2021/3/2"
         */
        static getDate(): string;
        /**
         * 获取当天指定时间的时间戳
         * @param hour 时
         * @param minute 分
         * @param second 秒
         * @example
         * const time = TimeUtil.getTargetTimestamp(10, 20, 30); // 1601259630000
         * new Date(time).toLocaleString(); // "上午10:20:30"
         */
        static getTargetTimestamp(hour?: number, minute?: number, second?: number): number;
        /**
         * 将毫秒转为时分秒的格式（最小单位为秒，如："00:01:59"）
         * @param time 毫秒数
         * @param separator 分隔符
         * @param keepHours 当小时数为 0 时依然展示小时数
         * @example
         * TimeUtil.msToHMS(119000); // "00:01:59"
         */
        static msToHMS(time: number, separator?: string, keepHours?: boolean): string;
    }
    /**
     * Tween 工具
     */
    export class TweenUtil {
        /**
         * 水平翻转（卡片翻转）
         * @param node 节点
         * @param duration 总时长
         * @param onMiddle 中间状态回调
         * @param onComplete 完成回调
         */
        static flip(node: cc.Node, duration: number, onMiddle?: Function, onComplete?: Function): Promise<void>;
    }
    /**
     *  UI 工具库
     *    - 坐标转换
     */
    export class UIUtil {
        /**
        * 把一个世界坐标的点，转换到某个节点下的坐标
        * @param {*} node
        * @param {*} worldPoint
        */
        static convetOtherNodeSpaceAR(node: cc.Node, targetNode: cc.Node, pos?: cc.Vec2): cc.Vec2;
        /**
        * 得到一个节点的世界坐标
        * @param {*} node
        * @param {*} pos
        */
        static localConvertWorldPointAR(node: cc.Node, pos: cc.Vec2): cc.Vec2;
        /**
        * 把一个世界坐标的点，转换到某个节点下的坐标
        * @param {*} node
        * @param {*} worldPoint
        */
        static worldConvertLocalPointAR(node: cc.Node, worldPoint: cc.Vec2): cc.Vec2;
    }
    /**
     * 工具
     */
    export class Util {
        /**
        * 深度拷贝
        * @param {any} sObj 拷贝的对象或数组
        * @returns
        */
        static clone(sObj: any): any;
    }

}