var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// JavaScripts/GameConst/EventConst.ts
var require_EventConst = __commonJS({
  "JavaScripts/GameConst/EventConst.ts"() {
  }
});

// JavaScripts/GameConst/GameConst.ts
var require_GameConst = __commonJS({
  "JavaScripts/GameConst/GameConst.ts"() {
  }
});

// build.ts
var require_build = __commonJS({
  "build.ts"() {
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  MWModuleMap: () => MWModuleMap
});
module.exports = __toCommonJS(stdin_exports);

// JavaScripts/Config/ConfigBase.ts
var ConfigBase_exports = {};
__export(ConfigBase_exports, {
  ConfigBase: () => ConfigBase
});
var _ConfigBase = class {
  ELEMENTARR = [];
  ELEMENTMAP = /* @__PURE__ */ new Map();
  KEYMAP = /* @__PURE__ */ new Map();
  constructor(excelData) {
    let headerLine = 2;
    this.ELEMENTARR = new Array(excelData.length - headerLine);
    for (let i = 0; i < this.ELEMENTARR.length; i++) {
      this.ELEMENTARR[i] = {};
    }
    let column = excelData[0].length;
    for (let j = 0; j < column; j++) {
      let name = excelData[0][j];
      let tags = excelData[1][j].split("|");
      if (tags.includes(_ConfigBase.TAG_CHILDLANGUAGE))
        continue;
      let jOffect = 0;
      if (tags.includes(_ConfigBase.TAG_MAINLANGUAGE)) {
        let index = j + _ConfigBase.languageIndex;
        let targetTags = excelData[1][index].split("|");
        if (index < column && targetTags.includes(_ConfigBase.TAG_CHILDLANGUAGE)) {
          jOffect = _ConfigBase.languageIndex;
        }
      }
      let hasTag_Key = tags.includes(_ConfigBase.TAG_KEY);
      let hasTag_Language = tags.includes(_ConfigBase.TAG_LANGUAGE);
      for (let i = 0; i < this.ELEMENTARR.length; i++) {
        let ele = this.ELEMENTARR[i];
        let value = excelData[i + headerLine][j + jOffect];
        if (j == 0) {
          this.ELEMENTMAP.set(value, ele);
        } else {
          if (hasTag_Key) {
            this.KEYMAP.set(value, excelData[i + headerLine][0]);
          }
          if (hasTag_Language) {
            if (_ConfigBase.getLanguage != null) {
              value = _ConfigBase.getLanguage(value);
            } else {
              value = "unknow";
            }
          }
        }
        ele[name] = value;
      }
    }
  }
  static initLanguage(languageIndex, getLanguageFun) {
    _ConfigBase.languageIndex = languageIndex;
    _ConfigBase.getLanguage = getLanguageFun;
    if (_ConfigBase.languageIndex < 0) {
      _ConfigBase.languageIndex = _ConfigBase.getSystemLanguageIndex();
    }
  }
  static getSystemLanguageIndex() {
    let language = Util.LocaleUtil.getDefaultLocale().toString().toLowerCase();
    if (!!language.match("en")) {
      return 0;
    }
    if (!!language.match("zh")) {
      return 1;
    }
    if (!!language.match("ja")) {
      return 2;
    }
    if (!!language.match("de")) {
      return 3;
    }
    return 0;
  }
  getElement(id) {
    let ele = this.ELEMENTMAP.get(Number(id)) || this.ELEMENTMAP.get(this.KEYMAP.get(id));
    if (ele == null) {
      console.error(this.constructor.name + "\u914D\u7F6E\u8868\u4E2D\u627E\u4E0D\u5230\u5143\u7D20 id:" + id);
    }
    return ele;
  }
  findElement(fieldName, fieldValue) {
    for (let i = 0; i < this.ELEMENTARR.length; i++) {
      if (this.ELEMENTARR[i][fieldName] == fieldValue) {
        return this.ELEMENTARR[i];
      }
    }
  }
  findElements(fieldName, fieldValue) {
    let arr = [];
    for (let i = 0; i < this.ELEMENTARR.length; i++) {
      if (this.ELEMENTARR[i][fieldName] == fieldValue) {
        arr.push(this.ELEMENTARR[i]);
      }
    }
    return arr;
  }
  getAllElement() {
    return this.ELEMENTARR;
  }
};
var ConfigBase = _ConfigBase;
__publicField(ConfigBase, "TAG_KEY", "Key");
__publicField(ConfigBase, "TAG_LANGUAGE", "Language");
__publicField(ConfigBase, "TAG_MAINLANGUAGE", "MainLanguage");
__publicField(ConfigBase, "TAG_CHILDLANGUAGE", "ChildLanguage");
__publicField(ConfigBase, "languageIndex", 0);
__publicField(ConfigBase, "getLanguage");

// JavaScripts/Config/GameConfig.ts
var GameConfig_exports = {};
__export(GameConfig_exports, {
  GameConfig: () => GameConfig
});

// JavaScripts/Config/Monsters.ts
var Monsters_exports = {};
__export(Monsters_exports, {
  MonstersConfig: () => MonstersConfig
});
var EXCELDATA = [["id", "name", "maxHP", "level", "atk", "modelGuid"], ["", "", "", "", "", ""], [1, "\u8718\u86DB", 100, 2, 1, "192569"], [2, "\u5154\u5B50", 200, 2, 1, "138268"], [3, "\u9E8B\u9E7F", 300, 2, 1, "126030"]];
var MonstersConfig = class extends ConfigBase {
  constructor() {
    super(EXCELDATA);
  }
};

// JavaScripts/Config/GameConfig.ts
var GameConfig = class {
  static initLanguage(languageIndex, getLanguageFun) {
    ConfigBase.initLanguage(languageIndex, getLanguageFun);
    this.configMap.clear();
  }
  static getConfig(ConfigClass) {
    if (!this.configMap.has(ConfigClass.name)) {
      this.configMap.set(ConfigClass.name, new ConfigClass());
    }
    return this.configMap.get(ConfigClass.name);
  }
  static get Monsters() {
    return this.getConfig(MonstersConfig);
  }
};
__publicField(GameConfig, "configMap", /* @__PURE__ */ new Map());

// JavaScripts/DefaultUI.ts
var DefaultUI_exports = {};
__export(DefaultUI_exports, {
  default: () => UIDefault
});
var UIDefault = class extends UI.UIBehavior {
  Character;
  InteractBtn;
  NearInteractGuid;
  resolveString(assetIds) {
    let assetIdArray = new Array();
    let assetId = "";
    let s = assetIds.split("");
    for (let a of s) {
      if (a == ",") {
        assetIdArray.push(assetId);
        assetId = "";
      } else {
        assetId += a;
      }
    }
    if (assetId) {
      assetIdArray.push(assetId);
    }
    return assetIdArray;
  }
  initAssets(assetIds) {
    let assetIdArray = this.resolveString(assetIds);
    for (let element of assetIdArray) {
      Util.AssetUtil.asyncDownloadAsset(element);
    }
  }
  TryInteract() {
    let obj = GameObject.find(this.NearInteractGuid);
    if (obj == null) {
      return;
    }
    let a = obj.getScripts();
    let actor = obj.getScriptByName("IInteraction");
    actor.OnInteract(getCurrentPlayer(), 1);
  }
  ShowInteractButton(guid) {
    this.InteractBtn.visibility = UI.SlateVisibility.Visible;
    this.NearInteractGuid = guid;
  }
  HideInteractButton(guid) {
    if (this.NearInteractGuid == guid) {
      this.NearInteractGuid = "";
      this.InteractBtn.visibility = UI.SlateVisibility.Collapsed;
    }
  }
  onStart() {
    this.initAssets("95777,61245");
    this.canUpdate = false;
    const JumpBtn = this.uiWidgetBase.findChildByPath("RootCanvas/Button_Jump");
    const AttackBtn = this.uiWidgetBase.findChildByPath("RootCanvas/Button_Attack");
    this.InteractBtn = this.uiWidgetBase.findChildByPath("RootCanvas/InteractBtn");
    this.InteractBtn.visibility = UI.SlateVisibility.Collapsed;
    Events.addLocalListener("client_show_interact_button", (guid) => {
      this.ShowInteractButton(guid);
    });
    Events.addLocalListener("client_hide_interact_button", (guid) => {
      this.HideInteractButton(guid);
    });
    JumpBtn.onPressed.add(() => {
      if (this.Character) {
        this.Character.jump();
      } else {
        Gameplay.asyncGetCurrentPlayer().then((player) => {
          this.Character = player.character;
          this.Character.jump();
        });
      }
    });
    AttackBtn.onPressed.add(() => {
      Gameplay.asyncGetCurrentPlayer().then((player) => {
        this.Character = player.character;
        let anim1 = player.character.loadAnimation("61245");
        anim1.slot = Gameplay.AnimSlot.Upper;
        if (anim1.isPlaying) {
          return;
        } else {
          anim1.play();
        }
      });
    });
    this.InteractBtn.onPressed.add(() => {
      this.TryInteract();
    });
  }
  onAdded() {
  }
  onRemoved() {
  }
  onDestroy() {
  }
};
UIDefault = __decorateClass([
  UI.UICallOnly("")
], UIDefault);

// JavaScripts/Entity/Monster/MonsterBase.ts
var MonsterBase_exports = {};
__export(MonsterBase_exports, {
  default: () => MonsterBase
});
var MonsterBase = class extends Core.Script {
  onStart() {
  }
  onUpdate(dt) {
  }
  onDestroy() {
  }
};
MonsterBase = __decorateClass([
  Core.Class
], MonsterBase);

// JavaScripts/Factory/Fac_InteractObject.ts
var Fac_InteractObject_exports = {};
__export(Fac_InteractObject_exports, {
  default: () => Fac_InteractObject
});
var Fac_InteractObject = class extends Core.Script {
  guidList = /* @__PURE__ */ new Map();
  ac;
  onStart() {
  }
  onUpdate(dt) {
  }
  onDestroy() {
  }
};
Fac_InteractObject = __decorateClass([
  Core.Class
], Fac_InteractObject);

// <stdin>
var foreign7 = __toESM(require_EventConst());
var foreign8 = __toESM(require_GameConst());

// JavaScripts/GamePlayMain.ts
var GamePlayMain_exports = {};
__export(GamePlayMain_exports, {
  default: () => GamePlayMain
});

// JavaScripts/PlayerAttr.ts
var PlayerAttr_exports = {};
__export(PlayerAttr_exports, {
  default: () => PlayerAttr
});
var PlayerAttr = class extends Core.Script {
  character;
  hp = 100;
  maxHp;
  onStart() {
    console.log("\u521B\u5EFA\u6210\u529F\u811A\u672C");
  }
  InitData(c) {
    if (this.isRunningClient()) {
      return;
    }
    this.character = c;
    this.maxHp = 100;
    this.hp = this.maxHp;
    console.log("\u73A9\u5BB6\u5C5E\u6027\u811A\u672C\u521D\u59CB\u5316\u5B8C\u6210");
  }
  onUpdate(dt) {
  }
  onDestroy() {
  }
};
__decorateClass([
  Core.Property({ displayName: "\u8840\u91CF", replicated: true })
], PlayerAttr.prototype, "hp", 2);
__decorateClass([
  Core.Property({ displayName: "\u6700\u5927\u8840\u91CF", replicated: true })
], PlayerAttr.prototype, "maxHp", 2);
PlayerAttr = __decorateClass([
  Core.Class
], PlayerAttr);

// JavaScripts/GamePlayMain.ts
var GamePlayMain = class extends Core.Script {
  totalPlayerAttrs = /* @__PURE__ */ new Map();
  onStart() {
    Events.addPlayerJoinedListener(this.OnPlayerJoined.bind(this));
    Events.addPlayerLeftListener(this.OnPlayerLeft.bind(this));
  }
  async OnPlayerJoined(player) {
    console.log("\u73A9\u5BB6\u52A0\u5165" + player.character.guid);
    let obj = await Core.Script.spawnScript(PlayerAttr, true);
    obj.InitData(player.character);
    this.totalPlayerAttrs.set(player.character.guid, obj);
    console.log("\u811A\u672C\u4E3A" + obj);
  }
  OnPlayerLeft(player) {
    console.log("\u73A9\u5BB6\u79BB\u5F00" + player.character.guid);
    let obj = this.totalPlayerAttrs.get(player.character.guid);
    obj.destroy();
    this.totalPlayerAttrs.delete(player.character.guid);
  }
};
GamePlayMain = __decorateClass([
  Core.Class
], GamePlayMain);

// JavaScripts/Interface/IInteraction.ts
var IInteraction_exports = {};
__export(IInteraction_exports, {
  default: () => InteractActor
});
var InteractActor = class extends Core.Script {
  m_Object;
  m_trigger;
  m_guid;
  onStart() {
    this.m_Object = this.gameObject;
    this.m_trigger = this.m_Object.getChildByName("Trigger");
    this.m_guid = this.m_Object.guid;
    this.m_trigger.onEnter.add((go) => {
      if (!this.m_Object.isRunningClient()) {
        return;
      }
      if (!(go instanceof Gameplay.Character)) {
        return;
      }
      go = go;
      if (!(go == getCurrentPlayer().character)) {
        return;
      }
      Events.dispatchLocal("client_show_interact_button", this.m_guid);
    });
    this.m_trigger.onLeave.add((go) => {
      if (!this.m_Object.isRunningClient()) {
        return;
      }
      if (!(go instanceof Gameplay.Character)) {
        return;
      }
      go = go;
      if (!(go == getCurrentPlayer().character)) {
        return;
      }
      Events.dispatchLocal("client_hide_interact_button", this.m_guid);
    });
  }
  Init(guid, transform) {
    this.m_Object = GameObject.spawn({ guid, replicates: true, transform });
    return this.m_guid;
  }
  IsClient() {
    return this.m_Object.isRunningClient();
  }
  OnInteract(player, index) {
    if (this.m_Object.isRunningClient()) {
      this.InteractImplement(player, index);
    } else {
      return;
    }
  }
  InteractImplement(player, index) {
    this.DoOnServer(player, index);
    this.DoOnClient(player, index);
  }
  DoOnClient(player, index) {
    console.log("\u5BA2\u6237\u7AEF\u4EA7\u751F\u4EA4\u4E92\uFF0C\u73A9\u5BB6", player);
  }
  DoOnServer(player, index) {
    console.log("\u670D\u52A1\u7AEF\u4EA7\u751F\u4EA4\u4E92\uFF0C\u73A9\u5BB6", player);
  }
};
__decorateClass([
  Core.Function(Core.Server)
], InteractActor.prototype, "InteractImplement", 1);
__decorateClass([
  Core.Function(Core.Client)
], InteractActor.prototype, "DoOnClient", 1);
__decorateClass([
  Core.Function(Core.Server)
], InteractActor.prototype, "DoOnServer", 1);
InteractActor = __decorateClass([
  Core.Class
], InteractActor);

// JavaScripts/PlayerBehavior.ts
var PlayerBehavior_exports = {};
__export(PlayerBehavior_exports, {
  PlayerBehavior: () => PlayerBehavior
});

// JavaScripts/PlayerGunMgr.ts
var PlayerGunMgr_exports = {};
__export(PlayerGunMgr_exports, {
  PlayerGunMgr: () => PlayerGunMgr
});
var _PlayerGunMgr = class {
  player;
  curGun;
  mainGun;
  deputyGun;
  miniGun;
  prop1;
  prop2;
  hadAccessoryList;
  hadAmmoList;
  canUpdateGun = true;
  static get Instance() {
    if (_PlayerGunMgr._instance == null) {
      _PlayerGunMgr._instance = new _PlayerGunMgr(Gameplay.getCurrentPlayer().character);
    }
    return _PlayerGunMgr._instance;
  }
  constructor(player) {
    InputUtil.onKeyDown(Keys.One, () => {
      this.SwitchWeapon(1);
    });
    InputUtil.onKeyDown(Keys.Two, () => {
      this.SwitchWeapon(2);
    });
    InputUtil.onKeyDown(Keys.Three, () => {
      this.SwitchWeapon(3);
    });
    InputUtil.onKeyDown(Keys.Four, () => {
      this.SwitchWeapon(4);
    });
    InputUtil.onKeyDown(Keys.Five, () => {
      this.SwitchWeapon(5);
    });
    InputUtil.onKeyDown(Keys.X, () => {
      this.SwitchWeapon(0);
    });
    InputUtil.onKeyDown(Keys.G, () => {
      this.DropWeapon();
    });
    InputUtil.onKeyDown(Keys.B, () => {
      this.ChangeShootMode();
    });
    InputUtil.onKeyDown(Keys.LeftAlt, () => {
    });
    InputUtil.onKeyDown(Keys.RightMouseButton, () => {
      if (this.curGun) {
        this.curGun.MechanicalAimStart();
      }
    });
    InputUtil.onKeyDown(Keys.R, () => {
      if (this.curGun) {
        this.curGun.LoadMagazine();
      }
    });
    InputUtil.onKeyPress(Keys.R, () => {
    });
    InputUtil.onKeyUp(Keys.LeftAlt, () => {
    });
    InputUtil.onKeyUp(Keys.LeftAlt, () => {
      if (this.curGun) {
        this.curGun.MechanicalAimStop();
      }
    });
  }
  SwitchWeapon(index) {
  }
  ChangeShootMode() {
  }
  DropWeapon() {
  }
};
var PlayerGunMgr = _PlayerGunMgr;
__publicField(PlayerGunMgr, "_instance");

// JavaScripts/Weapon/CameraController.ts
var CameraController_exports = {};
__export(CameraController_exports, {
  CameraController: () => CameraController
});

// JavaScripts/Weapon/WeaponTool.ts
var WeaponTool_exports = {};
__export(WeaponTool_exports, {
  WeaponTool: () => WeaponTool
});
var WeaponTool;
((WeaponTool2) => {
  function InitWeaponConfig(_weapon) {
  }
  WeaponTool2.InitWeaponConfig = InitWeaponConfig;
  function InitWeaponMagazineConfig(_magazine) {
  }
  WeaponTool2.InitWeaponMagazineConfig = InitWeaponMagazineConfig;
  function InitWeaponRecoilConfig(_recoil) {
  }
  WeaponTool2.InitWeaponRecoilConfig = InitWeaponRecoilConfig;
  function InitWeaponCameraConfig(_camera) {
  }
  WeaponTool2.InitWeaponCameraConfig = InitWeaponCameraConfig;
  function InitWeaponAccessoryConfig(_accessory) {
  }
  WeaponTool2.InitWeaponAccessoryConfig = InitWeaponAccessoryConfig;
  function Shake(_strength) {
    return _strength * (Math.random() - 0.5);
  }
  WeaponTool2.Shake = Shake;
  function RotateVector(source, axis, angle) {
    let ro = source.toRotation();
    let qu = ro.toQuaternion();
    let outer;
    angle = angle;
    Quaternion.fromAxisAngle(axis, angle, outer);
    let res;
    Quaternion.multiplyVector(source, outer, res);
    return res;
  }
  WeaponTool2.RotateVector = RotateVector;
  function GaussRandom() {
    let u = Math.random();
    let v = Math.random();
    let z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    z = (z + 3) / 6;
    z = z * 2 - 1;
    if (Math.abs(z) > 1) {
      return GaussRandom();
    }
    return z;
  }
  WeaponTool2.GaussRandom = GaussRandom;
  function Asymptote(x, A) {
    A = A || 0.4;
    if (A <= 0 || A >= 1) {
      console.error("A must be between 0 and 1");
    }
    if (x < 0) {
      console.error("x should be positive");
    }
    if (x <= A) {
      return x;
    }
    return 1 + (3 * A * A - 2 * A) / x + (A * A - 2 * A * A * A) / x / x;
  }
  WeaponTool2.Asymptote = Asymptote;
  function AsymtoteBi(x, A) {
    A = A || 0.4;
    if (A <= 0 || A >= 1) {
      console.error("A must be between 0 and 1");
    }
    if (x >= 0) {
      return Asymptote(x, A);
    }
    return -Asymptote(x, A);
  }
  WeaponTool2.AsymtoteBi = AsymtoteBi;
  function RandomRotate(direction, maxSpreadAngle) {
    const spreadAngle = GaussRandom() * maxSpreadAngle;
    const randomRotation = Math.random() * 2 * Math.PI;
    const x = Math.sin(spreadAngle) * Math.cos(randomRotation);
    const y = Math.cos(spreadAngle);
    const z = Math.sin(spreadAngle) * Math.sin(randomRotation);
    const dirZ = direction.z;
    const rotateMatrix = [
      [Math.cos(dirZ), -Math.sin(dirZ), 0],
      [Math.sin(dirZ), Math.cos(dirZ), 0],
      [0, 0, 1]
    ];
    const rotatedX = rotateMatrix[0][0] * x + rotateMatrix[0][1] * y + rotateMatrix[0][2] * z;
    const rotatedY = rotateMatrix[1][0] * x + rotateMatrix[1][1] * y + rotateMatrix[1][2] * z;
    const rotatedZ = rotateMatrix[2][0] * x + rotateMatrix[2][1] * y + rotateMatrix[2][2] * z;
    return new Vector(rotatedX, rotatedY, rotatedZ);
  }
  WeaponTool2.RandomRotate = RandomRotate;
  function AccelerateScalar(x, _linearRange, _maxScale) {
    if (_maxScale <= 1 || _linearRange <= 0) {
      console.error("\u6700\u5927\u6BD4\u4F8B\u5FC5\u987B\u5927\u4E8E1, \u7EBF\u6027\u8303\u56F4\u5FC5\u987B\u5927\u4E8E0");
      return;
    }
    if (x < 0) {
      console.error("\u4F7F\u7528\u53CC\u8FB9\u7684\u51FD\u6570\u4EE5\u652F\u6301\u8D1F\u503C");
    }
    if (x <= _linearRange) {
      return 1;
    } else if (x >= _maxScale * _linearRange) {
      return _maxScale;
    } else {
      return 1 / _linearRange * x;
    }
  }
  WeaponTool2.AccelerateScalar = AccelerateScalar;
  function BiAccelerateScalar(x, _linearRange, _maxScale) {
    let sign = x >= 0 ? 1 : -1;
    return AccelerateScalar(sign * x, _linearRange, _maxScale);
  }
  WeaponTool2.BiAccelerateScalar = BiAccelerateScalar;
  function GenerateCurve(_startPoint, _startVec, _length, _dt, _gravity) {
    _gravity = _gravity ? _gravity : 1;
    let curve;
    for (let index = 1; index <= _length; index++) {
      let posX = new Vector2(_startPoint.x, _startPoint.z).add(new Vector2(_startVec.x, _startVec.z)).multiply(_dt * index);
      let PosY = _startVec.y * _dt * index - 0.5 * 9.8 * _gravity * (_dt * index) * (_dt * index) + _startPoint.y;
      curve.push(new Vector(posX.x, PosY, posX.y));
    }
    return curve;
  }
  WeaponTool2.GenerateCurve = GenerateCurve;
  function GetAttenuationByGunId(_type, _gun, _dis) {
    if (_type == 1) {
      let disAttenuation = _gun._configData.damageAttenuation;
      let len = disAttenuation.length;
      if (len == 0) {
        return 0;
      }
      for (let i = len; i >= 1; i--) {
        if (disAttenuation[i].Distance <= _dis) {
          return disAttenuation[i].Attenuation;
        }
      }
      return 0;
    } else if (_type == 2) {
      let explosionAttenuation = _gun._configData.explosionDamageAttenuation;
      let len = explosionAttenuation.length;
      if (len == 0) {
        return 0;
      }
      for (let i = len; i >= 1; i--) {
        if (explosionAttenuation[i].Distance <= _dis) {
          return explosionAttenuation[i].Attenuation;
        }
      }
      return 0;
    }
  }
  WeaponTool2.GetAttenuationByGunId = GetAttenuationByGunId;
  function GetEnemyByRange(_self, _isHitSelf, _isHitFriend, _dis, _angle, _pos) {
    let characters;
    return characters;
  }
  WeaponTool2.GetEnemyByRange = GetEnemyByRange;
  function GetWeaponAmmoId(_weaponId) {
    return;
  }
  WeaponTool2.GetWeaponAmmoId = GetWeaponAmmoId;
})(WeaponTool || (WeaponTool = {}));

// JavaScripts/Tool/TweenUtil.ts
var TweenUtil_exports = {};
__export(TweenUtil_exports, {
  TweenUtil: () => TweenUtil
});
var TweenUtil = class {
  StartFunction;
  UpdateFunction;
  StopFunction;
  totalTime;
  time;
  customData;
  isPlaying;
  constructor(getTotalTime, update, callback, start) {
    start = start || function() {
    };
    this.StartFunction = (t) => {
      start();
      t.totalTime = getTotalTime();
      t.time = 0;
      this.isPlaying = true;
    };
    this.UpdateFunction = (t, dt) => {
      if (!this.isPlaying) {
        return;
      }
      t.time += dt;
      if (t.time >= t.totalTime) {
        t.StopFunction(t);
        return;
      }
      update(t.time, t.totalTime, t.time);
    };
    this.StopFunction = (t) => {
      if (!this.isPlaying) {
        return;
      }
      callback();
      this.isPlaying = false;
    };
  }
};

// JavaScripts/Weapon/CameraController.ts
var _CameraController = class {
  m_camera;
  gun;
  offset;
  m_currentHeight;
  m_supposedHeight;
  deltaOffset;
  fieldOfView;
  deltaTheta;
  gamma;
  distance;
  deltaPhy;
  shakeTime;
  shakeStrenth;
  crouchController;
  ShakeController;
  static get Instance() {
    if (_CameraController._instance == null) {
      _CameraController._instance = new _CameraController();
    }
    return _CameraController._instance;
  }
  constructor() {
    this.crouchController = new TweenUtil(
      () => {
        return 0.4;
      },
      (t1, t2, t3) => {
        this.m_supposedHeight = Gameplay.getCurrentPlayer().character.capsuleHalfHeight * 2;
        let fin = this.m_currentHeight + 10 * t3 * (this.m_supposedHeight - this.m_currentHeight);
        this.m_currentHeight = fin;
      },
      () => {
        this.m_currentHeight = this.m_supposedHeight;
      }
    );
    this.ShakeController = new TweenUtil(
      () => {
        return this.shakeTime;
      },
      (t1, t2, t3) => {
        this.deltaOffset = new Vector(
          WeaponTool.Shake(this.shakeStrenth),
          WeaponTool.Shake(this.shakeStrenth),
          WeaponTool.Shake(this.shakeStrenth)
        ).multiply(t1 / t2);
      },
      () => {
        this.deltaOffset = new Vector(0, 0, 0);
      }
    );
  }
  Update(dt) {
    this.crouchController.UpdateFunction(this.crouchController, dt);
    this.ShakeController.UpdateFunction(this.crouchController, dt);
    if (this.deltaPhy != 0) {
    }
  }
  Crouch() {
    this.crouchController.StartFunction(this.crouchController);
    if (this.gun && this.gun._isdraw) {
      this.gun._cameraControl.Crouch();
    }
  }
  SetOffset() {
    this.m_camera.cameraSystemRelativeTransform.location = this.offset.add(Vector.up.multiply(this.m_currentHeight)).add(this.deltaOffset);
  }
  CameraShake(strength, time) {
    this.shakeStrenth = strength;
    this.shakeTime = time;
    this.ShakeController.StartFunction(this.ShakeController);
  }
};
var CameraController = _CameraController;
__publicField(CameraController, "_instance");

// JavaScripts/PlayerBehavior.ts
var _PlayerBehavior = class {
  player;
  state;
  SpeedStdCoeft;
  coefInertia;
  InerPara;
  GunWeight;
  BehJudgeTab;
  keyDownTab;
  static get Instance() {
    if (_PlayerBehavior._instance == null) {
      _PlayerBehavior._instance = new _PlayerBehavior();
    }
    return _PlayerBehavior._instance;
  }
  BindEventHandler() {
    Events.addServerListener(EventConst.ClientEvent.OnEquipWeaponEvent, this.OnEquipWeaponEventHandler.bind(this));
    Events.addLocalListener(EventConst.ClientEvent.OnEquipWeaponEvent, this.OnEquipWeaponEventHandler.bind(this));
  }
  constructor() {
  }
  InitialDataRead() {
    this.BehJudgeTab = /* @__PURE__ */ new Map([
      ["Run", false],
      ["Crouch", false],
      ["Quickly", false],
      ["Aim", false]
    ]);
    this.keyDownTab = [];
  }
  InitPlayerAttributes() {
    this.player.maxJumpHeight = 1;
  }
  OnEquipWeaponEventHandler() {
    if (PlayerGunMgr.Instance.curGun == null) {
      return;
    }
  }
  ChangeOccEventHandler(occId) {
  }
  PlayerBehaviorChanged(_behavior) {
    if (this.BehJudgeTab.get(_behavior)) {
      this.BehJudgeTab.set(_behavior, false);
    } else {
      this.BehJudgeTab.set(_behavior, true);
    }
    this.BehJudgeTab.forEach((value, key) => {
      if (value) {
        this.keyDownTab.push(key);
      }
    });
    if (this.keyDownTab.length == 1) {
      switch (this.keyDownTab[0]) {
        case "Run":
          this.PlayerModeChanged(GameConst.PlayerActionModeEnum.Run);
          break;
        default:
          break;
      }
    } else if (this.keyDownTab.length == 2) {
      this.keyDownTab.forEach((value, key) => {
        switch (value) {
          case "Crouch":
            this.PlayerModeChanged(GameConst.PlayerActionModeEnum.CrouchRun);
            break;
          case "Quickly":
            this.PlayerModeChanged(GameConst.PlayerActionModeEnum.QuicklyRun);
            break;
          case "Aim":
            this.PlayerModeChanged(GameConst.PlayerActionModeEnum.AimRun);
            break;
          default:
            break;
        }
      });
    } else if (this.keyDownTab.length == 3) {
      this.keyDownTab.forEach((value, key) => {
        switch (value) {
          case "Quickly":
            this.PlayerModeChanged(GameConst.PlayerActionModeEnum.QuicklyCrouchRun);
            break;
          case "Aim":
            this.PlayerModeChanged(GameConst.PlayerActionModeEnum.AimCrouchRun);
            break;
          default:
            break;
        }
      });
    }
    this.keyDownTab = [];
  }
  PlayerModeChanged(modeName) {
    this.state = modeName;
  }
  DiffDireMovement(dt) {
  }
  Update(dt) {
    this.DiffDireMovement(dt);
    this.CharacterStartInertia();
    let spd;
    switch (this.state) {
      case GameConst.PlayerActionModeEnum.Run:
        break;
      case GameConst.PlayerActionModeEnum.AimCrouchRun:
        break;
      case GameConst.PlayerActionModeEnum.AimRun:
        break;
      case GameConst.PlayerActionModeEnum.CrouchRun:
        break;
      case GameConst.PlayerActionModeEnum.QuicklyCrouchRun:
        break;
      case GameConst.PlayerActionModeEnum.QuicklyRun:
        break;
      default:
        break;
    }
    this.player.maxWalkSpeed = spd * this.SpeedStdCoeft * this.coefInertia * this.GunWeight * 1;
  }
  CharacterStartInertia() {
    if (PlayerGunMgr.Instance.curGun) {
      this.GunWeight = 1 / PlayerGunMgr.Instance.curGun._configData.weight;
    }
  }
  PlayerJump() {
    if (!this.player.isJumping) {
      if (this.player.isCrouching) {
        this.player.crouch(false);
        this.PlayerBehaviorChanged("Crouch");
        CameraController.Instance.Crouch();
      } else {
        if (PlayerGunMgr.Instance.curGun && PlayerGunMgr.Instance.curGun._isZoomIn) {
          PlayerGunMgr.Instance.curGun.MechanicalAimStop();
        }
        this.player.jump();
      }
    }
  }
  PlayerCrouch() {
    this.PlayerBehaviorChanged("Crouch");
    if (!this.player.isCrouching) {
      this.player.crouch(true);
    } else {
      this.player.crouch(false);
    }
    CameraController.Instance.Crouch();
  }
  CrouchReset() {
    if (this.player.isCrouching) {
    }
  }
  InitsetOrReset() {
    this.CrouchReset();
    this.InitialDataRead();
    this.InitPlayerAttributes();
    this.PlayerBehaviorChanged("Run");
  }
};
var PlayerBehavior = _PlayerBehavior;
__publicField(PlayerBehavior, "_instance");

// JavaScripts/Weapon/WeaponAccessoryBaseCls.ts
var WeaponAccessoryBaseCls_exports = {};
__export(WeaponAccessoryBaseCls_exports, {
  WeaponAccessoryBaseCls: () => WeaponAccessoryBaseCls
});
var WeaponAccessoryBaseCls = class {
  weaponAccessory;
  id;
  uuid;
  attachedWeapon;
  configData;
  constructor(_obj) {
    this.weaponAccessory = _obj;
    this.attachedWeapon = null;
    WeaponTool.InitWeaponAccessoryConfig(this);
    this.PickSound();
  }
  Update(dt) {
  }
  EquipToWeapon(weapon) {
    this.attachedWeapon = weapon;
  }
  UnEquipFromWeapon() {
    this.attachedWeapon = null;
  }
  destructor() {
  }
  PickSound() {
  }
};

// JavaScripts/Weapon/WeaponAmmoBaseCls.ts
var WeaponAmmoBaseCls_exports = {};
__export(WeaponAmmoBaseCls_exports, {
  WeaponAmmoBaseCls: () => WeaponAmmoBaseCls
});
var WeaponAmmoBaseCls = class {
  count;
  id;
  order;
  pickSound;
  character;
  consturctor(id, count, character) {
    this.id = id;
    this.count = count;
    this.character = character;
    this.PickSound();
  }
  PlayerPickAmmo(weaponAmmo, count) {
    if (weaponAmmo) {
    }
    this.count += count;
    this.PickSound();
  }
  PlayerDropAmmo(count) {
    let isDropAll = false;
    if (this.count <= 0) {
      return;
    }
    if (count >= this.count) {
      isDropAll = true;
    }
    this.count -= count;
    if (isDropAll) {
      this.count = 0;
    }
    return isDropAll;
  }
  PlayerConsumeAmmo(count) {
    if (this.count <= 0) {
      this.count = 0;
      return 0;
    }
    if (count > this.count) {
      count = this.count;
    }
    this.count -= count;
    return count;
  }
  SetCount(count) {
    this.count = count;
  }
  PickSound() {
  }
};

// JavaScripts/Weapon/WeaponAnimationCls.ts
var WeaponAnimationCls_exports = {};
__export(WeaponAnimationCls_exports, {
  WeaponAnimationCls: () => WeaponAnimationCls
});
var WeaponAnimationCls = class {
  gun;
  id;
  player;
  rightArmPosition;
  leftArmPosition;
  config;
  shoulderRayMinDistance;
  noShootingState;
  layer;
  constructor() {
  }
  Update(dt) {
  }
  destructor() {
  }
};

// JavaScripts/Weapon/WeaponBaseCls.ts
var WeaponBaseCls_exports = {};
__export(WeaponBaseCls_exports, {
  WeaponBaseCls: () => WeaponBaseCls
});

// JavaScripts/Weapon/WeaponCameraCls.ts
var WeaponCameraCls_exports = {};
__export(WeaponCameraCls_exports, {
  WeaponCameraCls: () => WeaponCameraCls
});
var WeaponCameraCls = class {
  gunRecoil;
  gun;
  m_camera;
  m_originZoom;
  m_supposedZoom;
  m_sightZoom;
  aimTime;
  m_isZoomIn;
  m_originOffset;
  m_aimOffset;
  m_currentOffset;
  isUpdating;
  screenSize;
  m_sensitivity;
  m_originDistance;
  distance;
  m_aimDistance;
  m_gamma;
  deltaPhy;
  deltaTheta;
  m_deltaFOV;
  m_lastMousePos;
  vibrationAmpl;
  m_backTime;
  m_jumpTotal;
  m_backTotal;
  enableAssistAim;
  aimEnemy;
  AimingIsOver;
  m_jumpFovRateScale;
  m_aimTimeRateScale;
  lastZoom;
  targetCallTime;
  targetReturn;
  m_jumpFovRateTable;
  m_aimTimeRateTable;
  selfSpinController;
  jumpFOVController;
  jumpController;
  recoverController;
  assistAimController;
  aimController;
  deaimController;
  configData;
  constructor(_gunRecoil) {
    WeaponTool.InitWeaponCameraConfig(this);
    this.gunRecoil = _gunRecoil;
    this.gun = _gunRecoil.gun;
    this.m_originZoom = this.gun._configData.waistAimFOV;
    this.m_supposedZoom = this.m_originZoom;
    this.m_sightZoom = this.gun._configData.mechinicalAimFOV;
    this.aimTime = this.gun._configData.aimTime;
    this.m_currentOffset = this.m_originOffset;
    this.isUpdating = false;
    this.screenSize = WindowUtil.getViewportSize();
    this.distance = this.m_originDistance;
    this.m_gamma = 0;
    this.deltaPhy = 0;
    this.deltaTheta = 0;
    this.m_deltaFOV = 0;
    this.m_lastMousePos = new Vector2();
    this.vibrationAmpl = 0;
    this.m_backTime = 0;
    this.m_jumpTotal = Vector2.zero;
    this.m_backTotal = 0;
    this.aimEnemy = null;
    this.AimingIsOver = false;
    this.m_jumpFovRateScale = 1;
    this.m_aimTimeRateScale = 1;
    this.selfSpinController = new TweenUtil(
      () => {
        let remnPhase = 2 * Math.PI - this.selfSpinController.customData.get("phase");
        return Math.min(this.m_backTime, remnPhase / this.configData.vibrationOmega);
      },
      (t1, t2, t3) => {
        this.m_gamma = this.selfSpinController.customData.get("Ampl") * Math.exp(-this.configData.vibrationDump * t1) * Math.sin(this.configData.vibrationOmega * t1) + this.selfSpinController.customData.get("phase");
      },
      () => {
        this.m_gamma = 0;
      },
      () => {
        if (!this.selfSpinController.customData.has("phase") || !this.selfSpinController.customData.has("Ampl")) {
          this.selfSpinController.customData.set("phase", 0);
          this.selfSpinController.customData.set("Ampl", this.vibrationAmpl * WeaponTool.GaussRandom());
          return;
        }
        let tempA = this.selfSpinController.customData.get("Ampl") * Math.exp(-this.configData.vibrationDump * this.selfSpinController.time);
        let temp0 = tempA * this.configData.vibrationOmega * Math.cos(this.configData.vibrationOmega * this.selfSpinController.time + this.selfSpinController.customData.get("phase"));
        let delta = this.configData.vibrationOmega * this.vibrationAmpl * WeaponTool.GaussRandom();
        let newPhase = Math.atan(this.m_gamma * this.configData.vibrationOmega / (delta + temp0));
        let newAmpl = (delta + temp0) / this.configData.vibrationOmega / Math.cos(newPhase);
        this.selfSpinController.customData.set("phase", newPhase);
        this.selfSpinController.customData.set("Ampl", newAmpl);
      }
    );
    this.jumpFOVController = new TweenUtil(
      () => {
        let stdSpeed = this.jumpFOVController.customData.get("jumpFOV") / this.configData.jumpTime;
        if (stdSpeed == 0) {
          return 0;
        } else {
          return 2 * this.configData.jumpTime + (this.jumpFOVController.customData.get("jumpFOV") - this.m_deltaFOV) / stdSpeed;
        }
      },
      (t1, t2, dt) => {
        if (t2 - t1 > 2 * this.configData.jumpTime) {
          this.m_deltaFOV += dt * this.jumpFOVController.customData.get("jumpFOV") / this.configData.jumpTime;
        } else {
          this.m_deltaFOV = (t2 - t1) / (2 * this.configData.jumpTime) * this.jumpFOVController.customData.get("jumpFOV");
        }
      },
      () => {
        this.m_deltaFOV = 0;
      },
      () => {
        this.jumpFOVController.customData.set("jumpFOV", this.GetJumpFOV());
      }
    );
    this.jumpController = new TweenUtil(
      () => {
        return this.configData.jumpTime;
      },
      (t1, t2, dt) => {
        let omega = 0.5 * Math.PI / t2;
        let power = omega * Math.cos(omega * (t1 - 0.5 * dt)) * dt;
        this.deltaTheta = this.deltaTheta + power * this.m_jumpTotal.y;
        this.deltaPhy = this.deltaPhy + power * this.m_jumpTotal.x;
        this.jumpController.customData.set("total", this.jumpController.customData.get("total").subtract(this.m_jumpTotal.multiply(power)));
      },
      () => {
        this.deltaTheta += this.jumpController.customData.get("total").y;
        this.deltaPhy += this.jumpController.customData.get("total").x;
        this.jumpController.customData.set("total", new Vector2());
        if (this.aimEnemy) {
          this.assistAimController.StartFunction(this.assistAimController);
        }
        this.gun._weaponGUI.Fire();
      },
      () => {
        if (this.recoverController.isPlaying) {
          this.recoverController.StopFunction(this.recoverController);
        }
        if (this.jumpController.isPlaying) {
          this.jumpController.StopFunction(this.jumpController);
        }
        this.jumpController.customData.set("total", this.m_jumpTotal);
      }
    );
    this.recoverController = new TweenUtil(
      () => {
        return this.m_backTime;
      },
      (t1, t2, dt) => {
        let Ampl = this.m_backTotal * this.configData.vibrationDump / (1 - Math.exp(-this.configData.vibrationDump * t2));
        let delta = Ampl * Math.exp(-this.configData.vibrationDump * (t1 - 0.5 * dt)) * dt;
        this.deltaTheta = this.deltaTheta - delta;
        this.recoverController.customData.set("total", this.recoverController.customData.get("total") + delta);
      },
      () => {
      },
      () => {
        this.recoverController.customData.set("total", 0);
      }
    );
    this.assistAimController = new TweenUtil(
      () => {
        return this.gun._configData.assistAimTime;
      },
      (_t1, _t2, _dt) => {
        if (!this.aimEnemy) {
          return;
        }
        let targetPos = this.GetAimPos(this.aimEnemy);
        let dir = this.m_camera.transform.getForwardVector().normalized;
        let pos = this.GetCameraPos();
        let res = Gameplay.lineTrace(pos.add(dir.multiply(0.5)), pos.add(dir.multiply(this.gun._configData.distance)));
        res.forEach((v, k) => {
          if (v.gameObject == this.aimEnemy) {
            this.assistAimController.customData.set("isChange", true);
            return;
          }
        });
        if (this.IsRight(targetPos) != this.assistAimController.customData.get("isChange")) {
          this.assistAimController.customData.set("isChange", true);
        }
        if (this.assistAimController.customData.get("isChange")) {
          return;
        }
        this.deltaTheta += _dt * this.assistAimController.customData.get("omegaTheta");
        this.deltaPhy += _dt * this.assistAimController.customData.get("omegaPhy");
      },
      () => {
      },
      () => {
        let targetPos = this.GetAimPos(this.aimEnemy);
        let relativePos = targetPos.subtract(this.GetCameraPos());
        this.assistAimController.customData.set("isRight", this.IsRight(targetPos));
        this.assistAimController.customData.set("isChange", false);
        let thetaTotal = Math.atan(relativePos.y / new Vector2(relativePos.x, relativePos.z).magnitude) - (90 - Vector.angle(this.m_camera.transform.getForwardVector(), Vector.up)) / 180 * Math.PI;
        let phyTotal = Vector2.angle(
          new Vector2(relativePos.x, relativePos.z),
          new Vector2(this.m_camera.transform.getForwardVector().x, this.m_camera.transform.getForwardVector().z)
        ) * Math.PI / 180 * (this.assistAimController.customData.get("isRight") ? -1 : 1);
        let ratio = this.gun._configData.assistAimRatio / this.gun._configData.assistAimTime;
        this.assistAimController.customData.set("omegaTheta", thetaTotal * ratio);
        this.assistAimController.customData.set("omegaPhy", phyTotal * ratio);
      }
    );
    this.aimController = new TweenUtil(
      () => {
        return this.GetAimTime();
      },
      (t1, t2, dt) => {
        let por = t1 / t2;
        this.m_supposedZoom = (1 - por) * this.m_originZoom + por * this.aimController.customData.get("sightZoom");
        por = Math.sqrt(1 - (1 - por) * (1 - por));
        this.m_currentOffset = this.m_originOffset.multiply(1 - por).add(this.m_aimOffset.multiply(por));
        this.distance = (1 - por) * this.m_originDistance + por * this.m_aimDistance;
      },
      () => {
        this.m_supposedZoom = this.aimController.customData.get("sightZoom");
        this.m_currentOffset = this.m_aimOffset;
        this.distance = this.m_aimDistance;
        this.AimingIsOver = true;
      },
      () => {
        if (this.deaimController.isPlaying) {
          this.deaimController.StopFunction(this.deaimController);
        }
        this.m_isZoomIn = true;
        this.aimController.customData.set("sightZoom", this.GetSightFOV());
      }
    );
    this.deaimController = new TweenUtil(
      () => {
        return this.gun._configData.stopAimTime;
      },
      (t1, t2, dt) => {
        let por = t1 / t2;
        this.m_supposedZoom = (1 - por) * this.deaimController.customData.get("preZoom") + por * this.m_originZoom;
        this.m_currentOffset = this.m_aimOffset.multiply(1 - por).add(this.m_originOffset.multiply(por));
        this.distance = (1 - por) * this.m_aimDistance + por * this.m_originDistance;
      },
      () => {
        this.m_supposedZoom = this.m_originZoom;
        this.m_currentOffset = this.m_originOffset;
        this.distance = this.m_originDistance;
        this.SetProperties();
      },
      () => {
        if (this.aimController.isPlaying) {
          this.aimController.StopFunction(this.aimController);
        }
        this.m_isZoomIn = false;
        this.deaimController.customData.set("preZoom", this.m_supposedZoom);
      }
    );
  }
  destructor() {
    this.EndAll();
  }
  Update(dt) {
    if (!this.isUpdating) {
      return;
    }
    this.SetProperties();
    this.m_aimTimeRateTable.clear();
    this.gun._weaponAccessoryList.forEach((v, k) => {
      this.m_aimTimeRateTable.set(k, v.configData.aimTimeRate);
    });
    this.m_jumpFovRateTable.clear();
    this.gun._weaponAccessoryList.forEach((v, k) => {
      this.m_jumpFovRateTable.set(k, v.configData.jumpFovRate);
    });
    this.selfSpinController.UpdateFunction(this.selfSpinController, dt);
    this.jumpFOVController.UpdateFunction(this.jumpFOVController, dt);
    this.jumpController.UpdateFunction(this.jumpController, dt);
    this.recoverController.UpdateFunction(this.recoverController, dt);
    this.assistAimController.UpdateFunction(this.assistAimController, dt);
    this.deaimController.UpdateFunction(this.deaimController, dt);
    this.aimController.UpdateFunction(this.aimController, dt);
    this.RefreshScales();
    this.RefreshSettings();
    this.deltaPhy = 0;
    this.deltaTheta = 0;
  }
  OnEquipWeapon(_gunController, info) {
    this.gun = _gunController;
    this.m_camera = Gameplay.getCurrentPlayer().character.cameraSystem;
    this.lastZoom = this.m_camera.cameraFOV;
    let t = new Transform();
    t.rotation = this.m_camera.cameraSystemRelativeTransform.rotation;
    t.scale = this.m_camera.cameraSystemRelativeTransform.scale;
    t.location = new Vector(0, 0, Gameplay.getCurrentPlayer().character.capsuleHalfHeight * 2).add(this.m_currentOffset);
    this.m_camera.cameraSystemRelativeTransform = t;
    this.m_sightZoom = this.gun._configData.mechinicalAimFOV;
    this.m_originZoom = this.gun._configData.waistAimFOV;
    this.m_supposedZoom = this.m_originZoom;
    CameraController.Instance.fieldOfView = this.m_sightZoom;
    this.isUpdating = true;
    CameraController.Instance.gun = this.gun;
  }
  InputRecoil(_recoil) {
    this.m_backTime = this.GetBackTime();
    let vert = _recoil.GetVertical() * Math.PI / 180;
    this.m_backTotal = _recoil._configData.backTotal * vert;
    this.vibrationAmpl = _recoil.GetSelfSpinRange() * Math.PI / 180;
    this.m_jumpTotal = new Vector2(_recoil.GetHorizontal() * Math.PI / 180, vert);
    this.selfSpinController.StartFunction(this.selfSpinController);
    this.jumpController.StartFunction(this.jumpController);
    this.recoverController.StartFunction(this.recoverController);
    this.jumpFOVController.StartFunction(this.jumpFOVController);
  }
  Crouch() {
    this.assistAimController.StopFunction(this.assistAimController);
  }
  MechanicalAimStart() {
    this.AimingIsOver = false;
    this.aimController.StartFunction(this.aimController);
  }
  GetAssistAimDis() {
    return this.m_isZoomIn ? this.gun._configData.assistAimDis1 : this.gun._configData.assistAimDis0;
  }
  MechanicalAimStop() {
    this.deaimController.StartFunction(this.deaimController);
  }
  GetAimTime() {
    return this.aimTime + this.m_aimTimeRateScale;
  }
  GetBackTime() {
    return this.gun._recoil.GetShakeTime();
  }
  OnUnEquipWeapon(_useStateBefore) {
    CameraController.Instance.fieldOfView = this.lastZoom;
    CameraController.Instance.gun = null;
    this.EndAll();
    this.isUpdating = false;
  }
  GetEnemies() {
    let res = new Array();
    Gameplay.getAllPlayers().forEach((v) => {
    });
    return res;
  }
  IsVisible(_enemy) {
    let pos = this.GetCameraPos();
    let res = true;
    let rayCastHead = Gameplay.lineTrace(pos, _enemy.getWorldLocation().add(Vector.up.multiply(_enemy.capsuleHalfHeight)));
    rayCastHead.forEach((v) => {
      if (!(v.gameObject instanceof Character) || v.gameObject != _enemy && v.gameObject != Gameplay.getCurrentPlayer().character) {
        res = false;
        return;
      }
    });
    return res;
  }
  EndAll() {
    if (this.m_isZoomIn) {
      this.MechanicalAimStop();
    }
    this.selfSpinController?.StopFunction(this.selfSpinController);
    this.jumpFOVController?.StopFunction(this.jumpFOVController);
    this.jumpController?.StopFunction(this.jumpController);
    this.recoverController?.StopFunction(this.recoverController);
    this.assistAimController?.StopFunction(this.assistAimController);
    this.deaimController?.StopFunction(this.deaimController);
    this.aimController?.StopFunction(this.aimController);
  }
  RefreshSettings() {
  }
  RefreshScales() {
    let factor = 1;
    this.m_jumpFovRateTable.forEach((v, k) => {
      factor *= v;
    });
    this.m_jumpFovRateScale = factor;
    factor = 1;
    this.m_aimTimeRateTable.forEach((v, k) => {
      factor *= v;
    });
    this.m_aimTimeRateScale = factor;
  }
  SetProperties() {
    CameraController.Instance.deltaTheta += this.deltaTheta;
    CameraController.Instance.deltaPhy += this.deltaPhy;
    CameraController.Instance.gamma = this.m_gamma;
    CameraController.Instance.fieldOfView = this.m_supposedZoom + this.m_deltaFOV;
    CameraController.Instance.distance = this.distance;
    CameraController.Instance.offset = this.m_currentOffset;
  }
  GetSightFOV() {
    let fov = 0;
    this.gun._weaponAccessoryList.forEach((v, k) => {
      if (v.configData.aimFovRate > 0) {
        fov = v.configData.aimFovRate;
        return;
      }
    });
    if (fov != 0) {
      return fov;
    } else {
      return this.gun._configData.mechinicalAimFOV;
    }
  }
  IsRight(targetPos) {
    return Vector.dot(Vector.cross(this.m_camera.transform.getForwardVector(), Vector.up), targetPos.subtract(this.GetCameraPos())) > 0;
  }
  IsUp(targetPos) {
    let relativePos = targetPos.subtract(this.GetCameraPos());
    return Math.atan(relativePos.y / new Vector2(relativePos.x, relativePos.z).magnitude) > 90 - Vector.angle(this.m_camera.transform.getForwardVector(), Vector.up) * Math.PI / 180;
  }
  DragStart() {
    this.m_lastMousePos = UI.getMousePositionOnViewport();
  }
  GetCameraPos() {
    let offset = this.m_camera.cameraSystemRelativeTransform.location;
    return Gameplay.getCurrentPlayer().character.getWorldLocation().add(WeaponTool.RotateVector(offset, Vector.up, Gameplay.getCurrentPlayer().character.getWorldRotation().z));
  }
  GetJumpFOV() {
    return this.configData.jumpFOV * this.m_jumpFovRateScale * Gameplay.getCurrentPlayer().character.cameraSystem.cameraFOV / this.m_originZoom;
  }
  GetAimPos(enemy) {
    let pos1;
    let pos2;
    pos1 = enemy.getAppearance().getSlotWorldPosition(SlotType.Head);
    pos2 = enemy.getAppearance().getSlotWorldPosition(SlotType.Buttocks);
    return pos1.multiply(2).add(pos2).divide(3);
  }
  GetTarget() {
    if (this.targetCallTime && TimeUtil.elapsedTime() - this.targetCallTime < 0.01) {
      return this.targetReturn;
    }
    let dir = this.m_camera.transform.getForwardVector().normalized;
    let pos = this.GetCameraPos();
    let raycastAll = Gameplay.lineTrace(pos.add(dir.multiply(0.5)), pos.add(dir.multiply(this.gun._configData.distance)));
    this.aimEnemy = null;
    if (this.enableAssistAim) {
      let minDis = this.GetAssistAimDis();
      let candidate;
      this.GetEnemies().forEach((v) => {
        let targetPos = this.GetAimPos(v);
        let targetDis = targetPos.subtract(pos).magnitude;
        let angle = Vector.angle(dir, targetPos.subtract(pos));
        let aimDis = targetDis * Math.sin(angle * Math.PI / 180);
        if (angle < 30 && aimDis <= minDis && this.IsVisible(v)) {
          candidate = v;
          minDis = aimDis;
        }
      });
      this.aimEnemy = candidate;
    }
    let finalPoint;
    let i;
    raycastAll.forEach((v) => {
      if (!(v instanceof Character)) {
        finalPoint = v.impactPoint;
        return;
      }
    });
    if (finalPoint) {
      this.targetReturn = [finalPoint, true];
    } else {
      this.targetReturn = [dir, false];
    }
    this.targetCallTime = TimeUtil.elapsedTime();
    return this.targetReturn;
  }
  GetSensitivity() {
    return this.m_camera.cameraFOV / 60 * this.m_sensitivity;
  }
  DragHold() {
    let temp = UI.getMousePositionOnViewport();
    if (!this.m_lastMousePos) {
      return;
    }
    this.deltaPhy += (temp.x - this.m_lastMousePos.x) * this.screenSize.x * this.GetSensitivity();
    this.deltaTheta += (temp.y - this.m_lastMousePos.y) * this.screenSize.y * this.GetSensitivity();
    this.m_lastMousePos = temp;
  }
  DragEnd() {
    this.m_lastMousePos = null;
  }
};

// JavaScripts/Weapon/WeaponGUICls.ts
var WeaponGUICls_exports = {};
__export(WeaponGUICls_exports, {
  WeaponGUICls: () => WeaponGUICls
});
var WeaponGUICls = class {
};

// JavaScripts/Weapon/WeaponMagazineCls.ts
var WeaponMagazineCls_exports = {};
__export(WeaponMagazineCls_exports, {
  WeaponMagazineCls: () => WeaponMagazineCls
});
var WeaponMagazineCls = class {
  weapon;
  id;
  leftAmmo;
  ammoInventory;
  loadPercentage;
  isFullyLoaded;
  isEmptyLoaded;
  canLoaded;
  loadTimeRateTable;
  loadTimeRateScale;
  maxAmmoRateTable;
  maxAmmoRateScale;
  preMaxAmmo;
  _configData;
  constructor(weapon) {
    WeaponTool.InitWeaponMagazineConfig(this);
    let moveAmmo = this.leftAmmo - this._configData.maxNum;
    if (moveAmmo > 0) {
      this.leftAmmo = this._configData.maxNum;
    } else {
      moveAmmo = 0;
    }
    this.Update();
  }
  UpdateFullyLoaded() {
    this.isFullyLoaded = this.leftAmmo >= this.GetMaxAmmo();
    return this.isFullyLoaded;
  }
  UpdateEmptyLoaded() {
    this.isEmptyLoaded = this.leftAmmo <= 0;
    return this.isEmptyLoaded;
  }
  UpdateCanLoad() {
    this.canLoaded = !this.isFullyLoaded && this.ammoInventory && this.ammoInventory.count > 0;
    return this.canLoaded;
  }
  UpdateLoadPercentage() {
    this.loadPercentage = Math.floor(this.leftAmmo / this.GetMaxAmmo() * 100);
    return this.loadPercentage;
  }
  Consume() {
    return () => {
      if (this.leftAmmo > 0) {
        this.leftAmmo -= 1;
        return true;
      }
      return false;
    };
  }
  LoadOneBullet() {
    if (this.canLoaded) {
      this.leftAmmo += 1;
    }
  }
  LoadMagazine() {
    if (this.canLoaded) {
      let addition = this.GetMaxAmmo() - this.leftAmmo;
      this.leftAmmo += addition;
      this.UpdateFullyLoaded();
    }
  }
  RecordingBulletsLeft(_isBackToBulletInventory) {
    if (_isBackToBulletInventory && this.ammoInventory) {
      this.ammoInventory.count += this.leftAmmo;
      this.leftAmmo = 0;
    }
    this.Update();
  }
  Update() {
    if (this.preMaxAmmo > this.GetMaxAmmo()) {
      if (this.GetMaxAmmo() < this.leftAmmo) {
        let deltaAmmo = this.leftAmmo - this.GetMaxAmmo();
        this.leftAmmo -= deltaAmmo;
        this.ammoInventory.count += deltaAmmo;
      }
    }
    this.preMaxAmmo = this.GetMaxAmmo();
    this.UpdateFullyLoaded();
    this.UpdateEmptyLoaded();
    this.UpdateCanLoad();
    this.UpdateLoadPercentage();
    this.loadTimeRateTable.clear();
    this.maxAmmoRateTable.clear();
    this.weapon._weaponAccessoryList.forEach((v, k) => {
      this.loadTimeRateTable.set(k, v.configData.magazineLoadTimeRate);
      this.maxAmmoRateTable.set(k, v.configData.maxAmmoRate.get(this.weapon.id));
    });
    this.RefreshScales();
  }
  RefreshScales() {
    let factor = 1;
    this.loadTimeRateTable.forEach((v) => {
      factor *= v;
    });
    this.loadTimeRateScale = factor;
    factor = 1;
    this.maxAmmoRateTable.forEach((v) => {
      factor *= v;
    });
    this.maxAmmoRateScale = factor;
  }
  GetLoadTime() {
    return this._configData.loadTime * this.loadTimeRateScale;
  }
  GetMaxAmmo() {
    return this.maxAmmoRateScale + this._configData.maxNum > 0 ? this.maxAmmoRateScale + this._configData.maxNum : 1;
  }
};

// JavaScripts/Weapon/WeaponRecoilCls.ts
var WeaponRecoilCls_exports = {};
__export(WeaponRecoilCls_exports, {
  WeaponRecoilCls: () => WeaponRecoilCls
});
var WeaponRecoilCls = class {
  id;
  gun;
  _verticalScale = 1;
  _horizontalScale = 1;
  _minErrorScale = 1;
  _maxErrorScale = 1;
  _recoverRateScale = 1;
  _selfSpinRangeRateScale = 1;
  _unstability = 0;
  _currentError = 0;
  _horizontalRateTable;
  _verticalRateTable;
  _minErrorRateTable;
  _maxErrorRateTable;
  _recoverRateTable;
  _selfSpinRangeRateTable;
  _lastPos;
  _configData;
  difFunction(_unstability) {
    _unstability = _unstability || this._unstability;
    if (this._configData.diffuseFunction === GameConst.DiffuseFunctionEnum.Linear) {
      return _unstability;
    } else if (this._configData.diffuseFunction === GameConst.DiffuseFunctionEnum.Sqrt) {
      return Math.sqrt(_unstability);
    } else if (this._configData.diffuseFunction === GameConst.DiffuseFunctionEnum.Square) {
      return _unstability * _unstability;
    }
  }
  Update(_dt) {
    this._unstability = Math.min(
      this._unstability - this._configData.diffuseRecoverRate * _dt,
      0,
      1
    );
    this._horizontalRateTable.clear();
    this._verticalRateTable.clear();
    this._minErrorRateTable.clear();
    this._maxErrorRateTable.clear();
    this._recoverRateTable.clear();
    this._selfSpinRangeRateTable.clear();
    const curPos = this.gun.character.getWorldLocation();
    if (curPos.subtract(this._lastPos).magnitude > 0.5 * _dt || this.gun.character.isJumping) {
      this._minErrorRateTable.set("Move", this._configData.jumpErrorScale);
      this._maxErrorRateTable.set("Move", this._configData.jumpErrorScale);
    } else {
      this._minErrorRateTable.delete("Move");
      this._maxErrorRateTable.delete("Move");
    }
    this._lastPos = curPos;
    if (this.gun.character.crouch) {
      this._minErrorRateTable.set("Crouch", this._configData.crouchErrorScale);
      this._maxErrorRateTable.set("Crouch", this._configData.crouchErrorScale);
    } else {
      this._minErrorRateTable.delete("Crouch");
      this._maxErrorRateTable.delete("Crouch");
    }
    for (const [k, v] of Object.entries(this.gun._weaponAccessoryList)) {
      this._horizontalRateTable.set(k, v.horizontalJumpRangeRate);
      this._verticalRateTable.set(k, v.verticalJumpAngleRate);
      this._minErrorRateTable.set(k, v.minErrorRate);
      this._maxErrorRateTable.set(k, v.maxErrorRate);
      this._recoverRateTable.set(k, v.gunRecoverRate);
      this._selfSpinRangeRateTable.set(k, v.selfSpinRangeRate);
    }
    this.gun.error = this.GetDiffuse(_dt);
    this.RefreshScales();
  }
  GetVertical() {
    return (this._configData.verticalJumpAngle + this._configData.verticalJumpRange * WeaponTool.GaussRandom()) * this._verticalScale;
  }
  GetHorizontal() {
    return this._horizontalScale * this._configData.horizontalJumpRange * WeaponTool.GaussRandom();
  }
  GetMinError() {
    return this._configData.minError * this._minErrorScale;
  }
  GetMaxError() {
    return this._configData.maxError * this._maxErrorScale;
  }
  GetShakeTime() {
    return this._configData.gunRecoil / (this._configData.gunRecoverRate * this._recoverRateScale);
  }
  GetSelfSpinRange() {
    return this._configData.selfSpinRange * this._selfSpinRangeRateScale;
  }
  Fire() {
    this._unstability = Math.min(1, this._unstability + this._configData.gunRecoil);
  }
  GetDiffuse(_dt) {
    let tobe = this.GetMinError() + this.difFunction(null) * (this.GetMaxError() - this.GetMinError());
    this._currentError += _dt * 10 * (tobe - this._currentError);
    return this._currentError;
  }
  GetShakeIntensity() {
    return this._configData.shakeIntensity;
  }
  RefreshScales() {
    let factor = 1;
    this._horizontalRateTable.forEach((v, k) => {
      factor *= v;
    });
    this._horizontalScale = factor;
    factor = 1;
    this._verticalRateTable.forEach((v, k) => {
      factor *= v;
    });
    this._verticalScale = factor;
    factor = 1;
    this._minErrorRateTable.forEach((v, k) => {
      factor *= v;
    });
    this._minErrorScale = factor;
    factor = 1;
    this._maxErrorRateTable.forEach((v, k) => {
      factor *= v;
    });
    this._maxErrorScale = factor;
    factor = 1;
    this._recoverRateTable.forEach((v, k) => {
      factor *= v;
    });
    this._recoverRateScale = factor;
    factor = 1;
    this._selfSpinRangeRateTable.forEach((v, k) => {
      factor *= v;
    });
    this._selfSpinRangeRateScale = factor;
  }
};

// JavaScripts/Weapon/WeaponSoundCls.ts
var WeaponSoundCls_exports = {};
__export(WeaponSoundCls_exports, {
  WeaponSoundCls: () => WeaponSoundCls
});
var WeaponSoundCls = class {
};

// JavaScripts/Weapon/WeaponBaseCls.ts
var WeaponBaseCls = class {
  prefab;
  id;
  root;
  character;
  muzzleObj;
  dir;
  toss;
  _isdraw = false;
  _isZoomIn = false;
  _rapidlyRemainingBullets = 1;
  _curShootMode = GameConst.FireModeEnum.Auto;
  _hasJustFired = false;
  _fireWait = 0;
  _isGoingToFire = false;
  _isFiringOnNextUpdate = false;
  _isAllowed = true;
  _wasAllowedAndFiring = false;
  _isGoingToReloadMagazine = false;
  _isReloadOnNextUpdate = false;
  _reloadWait = 0;
  _onReload = false;
  _isIgnoringSelf = true;
  _hasFireCondition = true;
  _fireConditionSide = 1;
  _isGoingToPump = false;
  _isPumpNextUpdate = false;
  _pumpWait = 0;
  _isPumping = false;
  _isWaitingPump = false;
  _zoomInTryPump = false;
  _isWithDrawing = false;
  _pumpMakeShell = false;
  _aimBeforePump = false;
  _weaponAccessoryList = /* @__PURE__ */ new Map();
  _magazine;
  _recoil;
  _cameraControl;
  _weaponGUI;
  _animationController;
  _weaponSound;
  error;
  _autoFireAim;
  constructor(_character, _root, _weaponObj) {
    this.EarlyInitialize();
    this.prefab = _weaponObj;
    this.root = _root;
    this.character = _character;
    this._magazine = new WeaponMagazineCls(this);
    this._recoil = new WeaponRecoilCls();
    this._cameraControl = new WeaponCameraCls(this._recoil);
    this._weaponGUI = new WeaponGUICls();
    this._animationController = new WeaponAnimationCls();
    this._weaponSound = new WeaponSoundCls();
    this.LaterInitialize();
  }
  destructor() {
    this.EarlyDestructor();
    this._magazine.RecordingBulletsLeft(true);
    this.prefab.setVisibility(Type.PropertyStatus.On);
    this._weaponAccessoryList.forEach((value, key) => {
      if (value) {
        value.UnEquipFromWeapon();
      }
    });
    this._weaponAccessoryList.clear();
    this._cameraControl.destructor();
    this._animationController.destructor();
  }
  EarlyInitialize() {
  }
  LaterInitialize() {
  }
  EarlyDestructor() {
  }
  Update(_dt) {
    if (this._isWithDrawing) {
      return;
    }
    if (this._isGoingToFire) {
      this._isFiringOnNextUpdate = true;
    }
    if (this._configData.autoReload) {
    }
    if (this._configData.pumpAfterFire && this._hasJustFired && !this._onReload && !this._isPumping) {
      if (this._isZoomIn) {
        this._isWaitingPump = true;
      } else {
        this.PumpStart();
      }
    }
    if (this._zoomInTryPump && this._isWaitingPump) {
      this._zoomInTryPump = true;
      this.PumpStart();
    }
    if (this._isGoingToReloadMagazine) {
      this._onReload = true;
      this._isReloadOnNextUpdate = true;
      this._isAllowed = false;
    }
    if (this._isGoingToPump) {
      this._isPumpNextUpdate = true;
      this._isAllowed = false;
      this._pumpMakeShell = false;
      this._isPumping = true;
      this._pumpWait = 1 / this._configData.shootSpeed;
    }
    let isAllowedAndFiring = this._isGoingToFire && this._isAllowed;
    if (this.character) {
      if (isAllowedAndFiring && !this._wasAllowedAndFiring) {
        Events.dispatchLocal(GameConst.LocalWeaponEvent.FireStarted, this);
      }
      if (!isAllowedAndFiring && this._wasAllowedAndFiring) {
        Events.dispatchLocal(GameConst.LocalWeaponEvent.FireStopped, this);
      }
      if (this._isGoingToPump) {
        this._isGoingToPump = false;
        Events.dispatchLocal(GameConst.LocalWeaponEvent.PumpStarted, this);
      }
      if (this._isGoingToReloadMagazine) {
        if (this._configData.reloadWithMagazines) {
          Events.dispatchLocal(GameConst.LocalWeaponEvent.MagazineLoadStarted, this);
        } else {
          Events.dispatchLocal(GameConst.LocalWeaponEvent.BulletLoadStarted, this);
        }
        if (this._isZoomIn) {
          this.MechanicalAimStop();
        }
        this._isGoingToReloadMagazine = false;
      }
    }
    this._wasAllowedAndFiring = isAllowedAndFiring;
    this._fireWait -= _dt;
    this._reloadWait -= _dt;
    this._pumpWait -= _dt;
    if (this._pumpWait < 0.8 / this._configData.shootSpeed && this._pumpWait > 0 && this._aimBeforePump) {
      this.MechanicalAimStop();
    }
    if (this._pumpWait < 0.6 / this._configData.shootSpeed && this._pumpWait > 0 && this._isPumping && !this._pumpMakeShell) {
      this.MakeBulletShell();
      this._pumpMakeShell = true;
    }
    if (this._hasJustFired && this._configData.canInterruptBulletLoad) {
      this._reloadWait = 0;
      this._isAllowed = true;
      this._isReloadOnNextUpdate = false;
      this._onReload = false;
    } else {
      if (this._isReloadOnNextUpdate && this._reloadWait < 0) {
        if (this._configData.reloadWithMagazines) {
          this._isAllowed = true;
          this._isReloadOnNextUpdate = false;
          this._magazine.LoadMagazine();
          this._onReload = false;
          Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this);
        } else {
          this._magazine.LoadOneBullet();
          Events.dispatchLocal(GameConst.LocalWeaponEvent.BulletLoaded, this);
          if (this._magazine.UpdateLoadPercentage() !== 100) {
            if (this._magazine.UpdateCanLoad()) {
              this._isAllowed = this._configData.canInterruptBulletLoad;
              this._isReloadOnNextUpdate = true;
              this._onReload = true;
              this._reloadWait = this._magazine.GetLoadTime();
            } else {
              this._isAllowed = true;
              this._isReloadOnNextUpdate = false;
              this._onReload = false;
              Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this);
            }
          } else {
            this._isAllowed = true;
            this._isReloadOnNextUpdate = false;
            this._onReload = false;
            Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this);
          }
        }
      }
    }
    if (this._isPumpNextUpdate && this._pumpWait < 0) {
      this._isAllowed = true;
      this._isPumpNextUpdate = false;
      this._isPumping = false;
      this._isWaitingPump = false;
      Events.dispatchLocal(GameConst.LocalWeaponEvent.Pumped, this);
      if (this._aimBeforePump && !this._autoFireAim) {
        this._aimBeforePump = false;
        this.MechanicalAimStart();
      }
    }
    this._hasJustFired = false;
    if (this._isFiringOnNextUpdate && this._isAllowed) {
      let fireDelay = 1 / this._configData.shootSpeed;
      let delay = 0;
      let hasFired = false;
      while (this._fireWait < 0) {
        for (let i = 1; i <= this._configData.bulletPerShoot; i++) {
          if (this._magazine.isEmptyLoaded) {
            break;
          }
          if (this.Fire(delay, !this._configData.consumeSingleBulletPerShoot)) {
            hasFired = true;
            this._rapidlyRemainingBullets--;
          } else {
            this._rapidlyRemainingBullets = 0;
          }
        }
        if (hasFired && this._configData.consumeSingleBulletPerShoot) {
          this.Consume();
        }
        if (hasFired) {
          if (!this._configData.pumpAfterFire) {
            this.MakeBulletShell();
          }
          Events.dispatchLocal(GameConst.LocalWeaponEvent.Fired, this);
        } else {
          Events.dispatchLocal(GameConst.LocalWeaponEvent.EmptyFire, this);
        }
        delay += fireDelay;
        this._fireWait += fireDelay;
        this._isGoingToFire = false;
      }
      if (hasFired) {
        this._recoil.Fire();
        this._cameraControl.InputRecoil(this._recoil);
      }
      if (!this._isAllowed) {
        this._rapidlyRemainingBullets = 0;
      }
      if (this._curShootMode != GameConst.FireModeEnum.Auto) {
        if (this._rapidlyRemainingBullets <= 0 || this._magazine.isEmptyLoaded) {
          this._rapidlyRemainingBullets = 0;
          this._isGoingToFire = false;
          this._isFiringOnNextUpdate = false;
        }
        if (this._curShootMode == GameConst.FireModeEnum.Single) {
          this._isGoingToFire = false;
          this._isFiringOnNextUpdate = false;
        }
      } else {
        this._rapidlyRemainingBullets = this._rapidlyRemainingBullets <= 0 ? 0 : this._rapidlyRemainingBullets;
        this._isGoingToFire = false;
        this._isFiringOnNextUpdate = false;
      }
      this._fireWait = Math.max(0, this._fireWait);
      this._reloadWait = Math.max(0, this._reloadWait);
      this._pumpWait = Math.max(0, this._pumpWait);
      this._cameraControl.Update(_dt);
      this._animationController.Update(_dt);
      this._recoil.Update(_dt);
      this._magazine.Update();
      this.RefreshScales();
    }
  }
  EquipAccessory(acce) {
    let acceId = acce.id;
    let canBeEquip = false;
    this._configData.canBeEquipAccessory.forEach((id) => {
      if (id == acceId) {
        canBeEquip = true;
      }
    });
    if (!canBeEquip) {
      return [false, null];
    }
    let originAcce = this._weaponAccessoryList.get(acce.configData.location);
    this._weaponAccessoryList.set(acce.configData.location, acce);
    acce.EquipToWeapon(this);
    return [true, originAcce];
  }
  UnEquipAccessory(_locationOrCls) {
    if (_locationOrCls instanceof WeaponAccessoryBaseCls) {
      this._weaponAccessoryList.delete(_locationOrCls.configData.location);
    } else {
      this._weaponAccessoryList.delete(_locationOrCls);
    }
  }
  LoadMagazine() {
    if (this._isdraw && !this._isPumping && this._magazine.canLoaded && !this._onReload) {
      this._isGoingToReloadMagazine = true;
    }
  }
  PumpStart() {
    if (this._isdraw && !this._onReload) {
      this._isGoingToPump = true;
      this._aimBeforePump = this._isZoomIn;
    }
  }
  async MakeBulletShell() {
    if (this.toss == null) {
      return;
    }
    let temp = new Rotation(180 * Math.random(), 0, 180 * Math.random());
    let obj = await GameObjPool.getInstance().asyncSpawn(this._configData.bulletShell);
    obj.setWorldLocation(this.toss.getWorldLocation());
    obj.setWorldRotation(temp);
  }
  async MakeFireEffect() {
    let obj = await GameObjPool.getInstance().asyncSpawn(this._configData.fireEffect);
    obj.setWorldLocation(this.muzzleObj.getWorldLocation());
  }
  async MakeBullet(endObj, endPos, endNormal) {
    if (!endObj) {
      return;
    }
    if (endObj instanceof Character) {
      return;
    }
    let obj = await GameObjPool.getInstance().asyncSpawn(this._configData.bulletHole);
    obj.setWorldLocation(endPos);
    obj.setWorldScale(new Vector(0.1, 0.1, 0.1));
  }
  async MakeHitEffect(endPos) {
    let obj = await GameObjPool.getInstance().asyncSpawn(this._configData.hitEffect);
    obj.setWorldLocation(endPos);
  }
  IgnoreSelf(ignore) {
    this._isIgnoringSelf = ignore;
  }
  SetFireCondition(side) {
    this._hasFireCondition = true;
    this._fireConditionSide = side;
  }
  CancelFireCondition() {
    this._hasFireCondition = false;
  }
  TryFireOneBullet() {
    if (this._isdraw) {
      this._isGoingToFire = true;
      switch (this._curShootMode) {
        case GameConst.FireModeEnum.Single:
          this._rapidlyRemainingBullets = 1;
          break;
        case GameConst.FireModeEnum.Rapidly_1:
          this._rapidlyRemainingBullets = this._configData.rapidly_1;
          break;
        case GameConst.FireModeEnum.Rapidly_2:
          this._rapidlyRemainingBullets = this._configData.rapidly_2;
          break;
        default:
          break;
      }
    }
  }
  TryKeepFire() {
    if (this._isdraw && this._curShootMode == GameConst.FireModeEnum.Auto) {
      this._isGoingToFire = true;
    }
  }
  TryPump(b) {
    if (this._configData.pumpAfterFire && this._isZoomIn && !this._isPumping) {
      this._zoomInTryPump = true;
    }
    if (!b) {
      return;
    }
    this._autoFireAim = b;
  }
  MechanicalAimStart() {
    if (this._isZoomIn || !this._isdraw) {
      return;
    }
    if (!(this.character.movementState == MovementMode.Walk) || this._isPumping || this._onReload) {
      return;
    }
    this._isZoomIn = true;
    this._cameraControl.MechanicalAimStart();
    Events.dispatchLocal(GameConst.LocalWeaponEvent.AimIn, this);
  }
  MechanicalAimStop() {
    if (!(this._isZoomIn && this._isdraw)) {
      return;
    }
    this._isZoomIn = false;
    this._cameraControl.MechanicalAimStop();
    Events.dispatchLocal(GameConst.LocalWeaponEvent.AimOut, this);
  }
  WithdrawWeapon() {
    if (!this._isdraw) {
      return;
    }
    this._aimBeforePump = false;
    if (this._isZoomIn) {
      this.MechanicalAimStop();
    }
    this._cameraControl.OnUnEquipWeapon(true);
    this.prefab.setVisibility(Type.PropertyStatus.Off);
    if (this._onReload) {
      this._reloadWait = 0;
      this._isReloadOnNextUpdate = false;
      this._onReload = false;
      this._isAllowed = true;
      Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this);
    }
    this._isdraw = false;
    Events.dispatchLocal(GameConst.LocalWeaponEvent.WithDrawWeapon, this);
  }
  DrawWeapon() {
    if (this._isdraw) {
      return;
    }
    this._isWithDrawing = true;
    this._isdraw = true;
    this._aimBeforePump = false;
    this._cameraControl.OnEquipWeapon(this, null);
    this.prefab.setVisibility(Type.PropertyStatus.On);
    if (this._isWaitingPump) {
      this.PumpStart();
    }
    setTimeout(() => {
      if (this) {
        this._isWithDrawing = false;
      }
    }, 1e3);
    Events.dispatchLocal(GameConst.LocalWeaponEvent.DrawWeapon, this);
  }
  Consume() {
    this._magazine.Consume()();
  }
  ChangeShootMode() {
    if (this._isdraw && this._isAllowed) {
      if (this._configData.shootMode.length > 0) {
        let nextIndex;
        this._configData.shootMode.forEach((value, index) => {
          if (value == this._curShootMode) {
            nextIndex++;
            return;
          }
        });
        if (this._configData.shootMode[nextIndex] == null) {
          nextIndex = 1;
        }
        this._curShootMode = this._configData.shootMode[nextIndex];
      }
      return this._curShootMode;
    }
  }
  RayCastOrigin() {
    return this.character.getWorldLocation().add(this.character.getForwardVector().multiply(0.5).add(Vector.up.multiply(this.character.capsuleHalfHeight * 2 - 0.1)));
  }
  RayCastTarget() {
    let [info, isTarget] = this._cameraControl.GetTarget();
    if (isTarget) {
      return info;
    } else {
      return info.multiply(this._configData.distance).add(this.muzzleObj.getWorldLocation());
    }
  }
  OverloadRayCast(dir) {
    let target = this.RayCastOrigin().add(dir.multiply(this._configData.distance));
    let info = Gameplay.lineTrace(this.RayCastOrigin(), target);
    let result;
    if (info.length == 0) {
      return result;
    }
    for (const key in info) {
      if (Object.prototype.hasOwnProperty.call(info, key)) {
        const element = info[key];
        if (element.gameObject instanceof Gameplay.Character && element.gameObject != Gameplay.getCurrentPlayer().character) {
          return;
        }
        if (element.gameObject.getCollision() == Type.CollisionStatus.On) {
          result.HitPoint = element.impactPoint;
          result.HitObject = element.gameObject;
          result.HitNormal = element.impactNormal;
          return result;
        }
      }
    }
    for (const key in info) {
      if (Object.prototype.hasOwnProperty.call(info, key)) {
        const element = info[key];
        if (element.gameObject instanceof Gameplay.Character) {
        }
      }
    }
    info.forEach((element) => {
    });
    return result;
  }
  CalculateRayCastDirection() {
    let dir = this.RayCastTarget().subtract(this.RayCastOrigin()).normalized;
    if (this._animationController.noShootingState) {
      dir = this.muzzleObj.forwardVector;
    }
    if (this._isZoomIn && this._configData.accurateAim) {
      return dir;
    }
    return WeaponTool.RandomRotate(dir, this._recoil._currentError);
  }
  Fire(delay, consume) {
    let isFriend = false;
    let direction = this.CalculateRayCastDirection();
    let hit = this.OverloadRayCast(direction);
    this._hasJustFired = true;
    if (!isFriend && hit) {
      let endPos = hit.HitPoint;
      let endNorm = hit.HitNormal;
      let endObj = hit.HitObject;
      if (consume) {
        this.Consume();
      }
      if (hit.HitObject == null) {
        endPos = this.RayCastOrigin().add(direction.multiply(this._configData.distance));
      }
      this.MakeBullet(endObj, endPos, endNorm);
      if (hit.IsTarget) {
        hit.Damage = this._configData.damage;
        Events.dispatchLocal(GameConst.LocalWeaponEvent.SuccessfullyHitTarget, this, hit);
      }
      return true;
    } else {
      return false;
    }
  }
  Damage(hit) {
    let hitPos = hit.HitPoint;
    let attenuation;
    if (hitPos == null) {
      attenuation = 0;
    } else {
      let dis = hitPos.subtract(this.character.getWorldLocation()).magnitude;
      attenuation = WeaponTool.GetAttenuationByGunId(1, this, dis);
    }
    let damage = this._configData.damage + attenuation;
    damage = damage <= 0 ? 0 : damage;
    switch (hit.HitPart) {
      case GameConst.HitPartEnum.Limb:
        damage = damage * this._configData.hitLimbDamageRate;
        break;
      case GameConst.HitPartEnum.Body:
        damage = damage * this._configData.hitBodyDamageRate;
        break;
      case GameConst.HitPartEnum.Head:
        damage = damage * this._configData.hitHeadDamageRate;
        break;
      default:
        break;
    }
    if (damage > 0) {
      let targetPlayer;
      Events.dispatchLocal(GameConst.LocalWeaponEvent.SuccessfullyHit, hitPos, targetPlayer, damage, hit.HitPart);
    }
  }
  RefreshScales() {
    let factor = 1;
  }
};

// JavaScripts/ui-generate/DefaultUI_generate.ts
var DefaultUI_generate_exports = {};
__export(DefaultUI_generate_exports, {
  default: () => DefaultUI_Generate
});
var DefaultUI_Generate = class extends UI.UIBehavior {
  onAwake() {
  }
};
DefaultUI_Generate = __decorateClass([
  UI.UICallOnly("UI/DefaultUI.ui")
], DefaultUI_Generate);

// JavaScripts/ui-generate/MonstInfoUI_generate.ts
var MonstInfoUI_generate_exports = {};
__export(MonstInfoUI_generate_exports, {
  default: () => MonstInfoUI_Generate
});
var MonstInfoUI_Generate = class extends UI.UIBehavior {
  onAwake() {
  }
};
MonstInfoUI_Generate = __decorateClass([
  UI.UICallOnly("UI/MonstInfoUI.ui")
], MonstInfoUI_Generate);

// <stdin>
var foreign28 = __toESM(require_build());
var MWModuleMap = {
  "JavaScripts/Config/ConfigBase": ConfigBase_exports,
  "JavaScripts/Config/GameConfig": GameConfig_exports,
  "JavaScripts/Config/Monsters": Monsters_exports,
  "JavaScripts/DefaultUI": DefaultUI_exports,
  "JavaScripts/Entity/Monster/MonsterBase": MonsterBase_exports,
  "JavaScripts/Factory/Fac_InteractObject": Fac_InteractObject_exports,
  "JavaScripts/GameConst/EventConst": foreign7,
  "JavaScripts/GameConst/GameConst": foreign8,
  "JavaScripts/GamePlayMain": GamePlayMain_exports,
  "JavaScripts/Interface/IInteraction": IInteraction_exports,
  "JavaScripts/PlayerAttr": PlayerAttr_exports,
  "JavaScripts/PlayerBehavior": PlayerBehavior_exports,
  "JavaScripts/PlayerGunMgr": PlayerGunMgr_exports,
  "JavaScripts/Tool/TweenUtil": TweenUtil_exports,
  "JavaScripts/Weapon/CameraController": CameraController_exports,
  "JavaScripts/Weapon/WeaponAccessoryBaseCls": WeaponAccessoryBaseCls_exports,
  "JavaScripts/Weapon/WeaponAmmoBaseCls": WeaponAmmoBaseCls_exports,
  "JavaScripts/Weapon/WeaponAnimationCls": WeaponAnimationCls_exports,
  "JavaScripts/Weapon/WeaponBaseCls": WeaponBaseCls_exports,
  "JavaScripts/Weapon/WeaponCameraCls": WeaponCameraCls_exports,
  "JavaScripts/Weapon/WeaponGUICls": WeaponGUICls_exports,
  "JavaScripts/Weapon/WeaponMagazineCls": WeaponMagazineCls_exports,
  "JavaScripts/Weapon/WeaponRecoilCls": WeaponRecoilCls_exports,
  "JavaScripts/Weapon/WeaponSoundCls": WeaponSoundCls_exports,
  "JavaScripts/Weapon/WeaponTool": WeaponTool_exports,
  "JavaScripts/ui-generate/DefaultUI_generate": DefaultUI_generate_exports,
  "JavaScripts/ui-generate/MonstInfoUI_generate": MonstInfoUI_generate_exports,
  "build": foreign28
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0V2ZW50Q29uc3QudHMiLCAiSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdC50cyIsICJidWlsZC50cyIsICI8c3RkaW4+IiwgIkphdmFTY3JpcHRzL0NvbmZpZy9Db25maWdCYXNlLnRzIiwgIkphdmFTY3JpcHRzL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwgIkphdmFTY3JpcHRzL0NvbmZpZy9Nb25zdGVycy50cyIsICJKYXZhU2NyaXB0cy9EZWZhdWx0VUkudHMiLCAiSmF2YVNjcmlwdHMvRW50aXR5L01vbnN0ZXIvTW9uc3RlckJhc2UudHMiLCAiSmF2YVNjcmlwdHMvRmFjdG9yeS9GYWNfSW50ZXJhY3RPYmplY3QudHMiLCAiSmF2YVNjcmlwdHMvR2FtZVBsYXlNYWluLnRzIiwgIkphdmFTY3JpcHRzL1BsYXllckF0dHIudHMiLCAiSmF2YVNjcmlwdHMvSW50ZXJmYWNlL0lJbnRlcmFjdGlvbi50cyIsICJKYXZhU2NyaXB0cy9QbGF5ZXJCZWhhdmlvci50cyIsICJKYXZhU2NyaXB0cy9QbGF5ZXJHdW5NZ3IudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXIudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblRvb2wudHMiLCAiSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscy50cyIsICJKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUudHMiLCAiSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImRlY2xhcmUgbmFtZXNwYWNlIEV2ZW50Q29uc3R7XHJcbiAgICBlbnVtIENsaWVudEV2ZW50IHtcclxuICAgICAgICBQbGF5ZXJCZUhpdEV2ZW50ID0gXCJQbGF5ZXJCZUhpdEV2ZW50XCIsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkV2ZW50ID0gXCJQbGF5ZXJOZWFyV2VhcG9uRXZlbnRcIixcclxuICAgICAgICBQbGF5ZXJGYXJXZWFwb25FdmVudCA9ICdQbGF5ZXJGYXJXZWFwb25FdmVudCcsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkFjY2Vzc29yeUV2ZW50ID0gJ1BsYXllck5lYXJXZWFwb25BY2Nlc3NvcnlFdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQgPSAnUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQnLFxyXG4gICAgICAgIFBsYXllck5lYXJBbW1vRXZlbnQgPSAnUGxheWVyTmVhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyQW1tb0V2ZW50ID0gJ1BsYXllckZhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRGllRXZlbnQgPSAnUGxheWVyRGllRXZlbnQnLFxyXG4gICAgICAgIENyZWF0ZUFsbFVuaXRFdmVudCA9ICdDcmVhdGVBbGxVbml0RXZlbnQnLFxyXG4gICAgICAgIFNldHRpbmdBc3NBaW1SZWZyZXNoRXZlbnQgPSAnU2V0dGluZ0Fzc0FpbVJlZnJlc2hFdmVudCcsXHJcbiAgICAgICAgU3luY0RhdGFFdmVudCA9ICdTeW5jRGF0YUV2ZW50JyxcclxuICAgICAgICBPbkVxdWlwV2VhcG9uRXZlbnQgPSAnT25FcXVpcFdlYXBvbkV2ZW50JyxcclxuICAgICAgICBTZXR0aW5nUmVhZHlFdmVudCA9ICdTZXR0aW5nUmVhZHlFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQ3JlYXRlZEV2ZW50ID0gJ1dlYXBvbk9iakNyZWF0ZWRFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQgPSAnV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQnXHJcbiAgICB9XHJcbiAgICBlbnVtIFNlcnZlckV2ZW50IHtcclxuICAgICAgICBXZWFwb25IaXRQbGF5ZXJFdmVudCA9J1dlYXBvbkhpdFBsYXllckV2ZW50JyxcclxuICAgICAgICBDcmVhdGVBbW1vRXZlbnQgPSdDcmVhdGVBbW1vRXZlbnQnLFxyXG4gICAgICAgIERlc3Ryb3lBbW1vRXZlbnQgPSdEZXN0cm95QW1tb0V2ZW50JyxcclxuICAgICAgICBQbGF5ZXJQaWNrQW1tb0V2ZW50ID0gJ1BsYXllclBpY2tBbW1vRXZlbnQnLFxyXG4gICAgICAgIFBsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50ID0gJ1BsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50JyxcclxuICAgICAgICBQbGF5ZXJEYXRhTW9kaWZpRXZlbnQgPSAnUGxheWVyRGF0YU1vZGlmaUV2ZW50JyxcclxuICAgICAgICBTeW5jQW5kU2F2ZUV2ZW50ID0gJ1N5bmNBbmRTYXZlRXZlbnQnLFxyXG4gICAgICAgIFdlYXBvbk9iakNyZWF0ZWRFdmVudCA9ICdXZWFwb25PYmpDcmVhdGVkRXZlbnQnXHJcbiAgICB9XHJcbn0iLCAiZGVjbGFyZSBuYW1lc3BhY2UgR2FtZUNvbnN0e1xyXG4gICAgZW51bSBMb2NhbFdlYXBvbkV2ZW50IHtcclxuICAgICAgICBQaWNrV2VhcG9uID0gJ1BpY2tXZWFwb24nLFxyXG4gICAgICAgIERyYXdXZWFwb24gPSAnRHJhd1dlYXBvbicsXHJcbiAgICAgICAgV2l0aERyYXdXZWFwb24gPSAnV2l0aERyYXdXZWFwb24nLFxyXG4gICAgICAgIE1hZ2F6aW5lTG9hZFN0YXJ0ZWQgPSAnTWFnYXppbmVMb2FkU3RhcnRlZCcsXHJcbiAgICAgICAgRnVsbHlMb2FkZWQgPSAnRnVsbHlMb2FkZWQnLFxyXG4gICAgICAgIEJ1bGxldExvYWRTdGFydGVkID0gJ0J1bGxldExvYWRTdGFydGVkJyxcclxuICAgICAgICBCdWxsZXRMb2FkZWQgPSAnQnVsbGV0TG9hZGVkJyxcclxuICAgICAgICBSZWxvYWRGaW5pc2hlZCA9ICdSZWxvYWRGaW5pc2hlZCcsXHJcbiAgICAgICAgUHVtcFN0YXJ0ZWQgPSAnUHVtcFN0YXJ0ZWQnLFxyXG4gICAgICAgIFB1bXBlZCA9ICdQdW1wZWQnLFxyXG4gICAgICAgIEZpcmVkID0gJ0ZpcmVkJyxcclxuICAgICAgICBFbXB0eUZpcmUgPSAnRW1wdHlGaXJlJyxcclxuICAgICAgICBGaXJlU3RhcnRlZCA9ICdGaXJlU3RhcnRlZCcsXHJcbiAgICAgICAgRmlyZVN0b3BwZWQgPSAnRmlyZVN0b3BwZWQnLFxyXG4gICAgICAgIFN1Y2Nlc3NmdWxseUhpdCA9ICdTdWNjZXNzZnVsbHlIaXQnLFxyXG4gICAgICAgIFN1Y2Nlc3NmdWxseUhpdFRhcmdldCA9ICdTdWNjZXNzZnVsbHlIaXRUYXJnZXQnLFxyXG4gICAgICAgIEFpbUluID0gJ0FpbUluJyxcclxuICAgICAgICBBaW1PdXQgPSAnQWltT3V0JyxcclxuICAgIH1cclxuICAgIGVudW0gR3VuTW9kZUVudW0ge1xyXG4gICAgICAgIFNuaXBlclJpZmxlID0gMSwgXHJcbiAgICAgICAgQXNzYXVsdFJpZmxlID0gMiwgXHJcbiAgICAgICAgU3ViTWFjaGluZUd1biA9IDMsXHJcbiAgICAgICAgU2hvdEd1biA9IDQsIFxyXG4gICAgICAgIFBpc3RvbCA9IDUsIFxyXG4gICAgICAgIE1lbGVlV2VhcG9uID0gNiwgXHJcbiAgICAgICAgVGhyb3duV2VhcG9uID0gNywgXHJcbiAgICAgICAgUm9ja2V0TGF1bmNoZXIgPSA4LCBcclxuICAgICAgICBPdGhlciA9IDksIFxyXG4gICAgICAgIFRyYWlsaW5nR3VuID0gMTBcclxuICAgIH1cclxuICAgIGVudW0gSGl0UGFydEVudW17XHJcbiAgICAgICAgTm9uZSA9IDAsXHJcbiAgICAgICAgSGVhZCA9IDEsXHJcbiAgICAgICAgQm9keSA9IDIsXHJcbiAgICAgICAgTGltYiA9IDMsXHJcbiAgICAgICAgRm9ydCA9IDRcclxuICAgIH1cclxuICAgIGVudW0gRmlyZU1vZGVFbnVte1xyXG4gICAgICAgIEF1dG8gPSAxLCBcclxuICAgICAgICBSYXBpZGx5XzEgPSAyLCBcclxuICAgICAgICBSYXBpZGx5XzIgPSAzLCBcclxuICAgICAgICBTaW5nbGUgPSA0IFxyXG4gICAgfVxyXG4gICAgZW51bSBEaWZmdXNlRnVuY3Rpb25FbnVte1xyXG4gICAgICAgIExpbmVhciA9IDEsXHJcbiAgICAgICAgU3FydCA9IDIsXHJcbiAgICAgICAgU3F1YXJlID0gM1xyXG4gICAgfVxyXG4gICAgZW51bSBDYW5CZUVxdWlwUG9zaXRpb25FbnVte1xyXG4gICAgICAgIE1haW5PckRlcHV0eSA9IDEsXHJcbiAgICAgICAgTWluaSA9IDIsXHJcbiAgICAgICAgUHJvcCA9IDNcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1OTE0RFx1NEVGNlx1N0M3Qlx1NTc4QiAqL1xyXG4gICAgZW51bSBXZWFwb25BY2Nlc3NvcnlUeXBlRW51bXtcclxuICAgICAgICBNdXp6bGUgPSAxLFxyXG4gICAgICAgIEdyaXAgPSAyLFxyXG4gICAgICAgIE1hZ2F6aW5lID0gMyxcclxuICAgICAgICBCdXR0ID0gNCxcclxuICAgICAgICBTaWdodCA9IDVcclxuICAgIH1cclxuICAgIGVudW0gVW5pdFR5cGVFbnVte1xyXG4gICAgICAgIFdlYXBvbiA9IDEsXHJcbiAgICAgICAgQWNjZXNzb3J5ID0gMixcclxuICAgICAgICBBbW1vID0gM1xyXG4gICAgfVxyXG4gICAgZW51bSBPYmplY3RUeXBlRW51bXtcclxuICAgICAgICBIb2xlID0gMSxcclxuICAgICAgICBGaXJlRWZmID0gMixcclxuICAgICAgICBIaXRFZmYgPSAzLFxyXG4gICAgICAgIFNoZWxsID0gNCxcclxuICAgICAgICBTb3VuZCA9IDVcclxuICAgIH1cclxuICAgIGVudW0gUGxheWVyQWN0aW9uTW9kZUVudW17XHJcbiAgICAgICAgUnVuID0gMSwgXHJcbiAgICAgICAgUXVpY2tseVJ1biA9IDIsIFxyXG4gICAgICAgIEFpbVJ1biA9IDMsIFxyXG4gICAgICAgIENyb3VjaFJ1biA9IDQsIFxyXG4gICAgICAgIFF1aWNrbHlDcm91Y2hSdW4gPSA1LCBcclxuICAgICAgICBBaW1Dcm91Y2hSdW4gPSA2IFxyXG4gICAgfVxyXG59XHJcbmRlY2xhcmUgbmFtZXNwYWNlIEdhbWVDb25zdHtcclxuICAgIHR5cGUgRGFtYWdlQXR0ZW51YXRpb24gPSB7XHJcbiAgICAgICAgRGlzdGFuY2U6IG51bWJlcjtcclxuICAgICAgICBBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgQm9uZVdlaWdodCA9IHtcclxuXHJcbiAgICB9XHJcbiAgICB0eXBlIFdlYXBvbkhpdFJlc3VsdCA9IHtcclxuICAgICAgICBIaXRQb2ludCA6IFZlY3RvclxyXG4gICAgICAgIEhpdE9iamVjdCA6IEdhbWVPYmplY3RcclxuICAgICAgICBIaXROb3JtYWwgOiBWZWN0b3JcclxuICAgICAgICBIaXRQYXJ0IDogSGl0UGFydEVudW1cclxuICAgICAgICBJc1RhcmdldCA6IGJvb2xlYW5cclxuICAgICAgICBEYW1hZ2UgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1OTE0RFx1N0Y2RVx1OTc1OVx1NjAwMVx1NUM1RVx1NjAyNyAqL1xyXG4gICAgdHlwZSBXZWFwb25Db25maWdEYXRhID0ge1xyXG4gICAgICAgIG5hbWUgOiBzdHJpbmdcclxuICAgICAgICBkZXMgOiBzdHJpbmdcclxuICAgICAgICBpY29uIDogc3RyaW5nXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uIDogc3RyaW5nXHJcbiAgICAgICAgb3JkZXIgOiBudW1iZXJcclxuICAgICAgICBkZWZhdWx0QWltSW1nIDogc3RyaW5nXHJcbiAgICAgICAgd2Fpc3RBaW1Nb2RlIDogc3RyaW5nXHJcbiAgICAgICAgcmVjb2lsSWQgOiBudW1iZXJcclxuICAgICAgICBhbmltYXRpb25JZCA6IG51bWJlclxyXG4gICAgICAgIGJhblNob290IDogYm9vbGVhblxyXG4gICAgICAgIGlzSGl0U2VsZiA6IGJvb2xlYW5cclxuICAgICAgICBpc0hpdEZyaWVuZCA6IGJvb2xlYW5cclxuICAgICAgICBjYW5CZUVxdWlwQWNjZXNzb3J5IDogbnVtYmVyW11cclxuICAgICAgICBkYW1hZ2UgOiBudW1iZXJcclxuICAgICAgICBtYWdhemluZVVzZWQgOiBudW1iZXJcclxuICAgICAgICBoaXRIZWFkRGFtYWdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGhpdEJvZHlEYW1hZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgaGl0TGltYkRhbWFnZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBkaXN0YW5jZSA6IG51bWJlclxyXG4gICAgICAgIGJ1bGxldE5hbWUgOiBzdHJpbmdcclxuICAgICAgICBidWxsZXRIb2xlIDogc3RyaW5nXHJcbiAgICAgICAgYnVsbGV0U2hlbGwgOiBzdHJpbmdcclxuICAgICAgICBhdXRvUmVsb2FkIDogYm9vbGVhblxyXG4gICAgICAgIG1lY2hpbmljYWxBaW1GT1YgOiBudW1iZXJcclxuICAgICAgICB3YWlzdEFpbUZPViA6IG51bWJlclxyXG4gICAgICAgIHNob290U3BlZWQgOiBudW1iZXJcclxuICAgICAgICBidWxsZXRQZXJTaG9vdCA6IG51bWJlclxyXG4gICAgICAgIGNvbnN1bWVTaW5nbGVCdWxsZXRQZXJTaG9vdCA6IG51bWJlclxyXG4gICAgICAgIHNob290TW9kZSA6IEZpcmVNb2RlRW51bVtdXHJcbiAgICAgICAgZGVmYXVsdFNob290TW9kZSA6IEZpcmVNb2RlRW51bVxyXG4gICAgICAgIHJhcGlkbHlfMSA6IG51bWJlclxyXG4gICAgICAgIHJhcGlkbHlfMiA6IG51bWJlclxyXG4gICAgICAgIGd1bk1vZGUgOiBHdW5Nb2RlRW51bVxyXG4gICAgICAgIGFjY3VyYXRlQWltIDogYm9vbGVhblxyXG4gICAgICAgIGNhbkJlRXF1aXBQb3NpdGlvbiA6IENhbkJlRXF1aXBQb3NpdGlvbkVudW1cclxuICAgICAgICBhaW1UaW1lIDogbnVtYmVyXHJcbiAgICAgICAgc3RvcEFpbVRpbWUgOiBudW1iZXJcclxuICAgICAgICBhc3Npc3RBaW1UaW1lIDogbnVtYmVyXHJcbiAgICAgICAgYXNzaXN0QWltRGlzMCA6IG51bWJlclxyXG4gICAgICAgIGFzc2lzdEFpbURpczEgOiBudW1iZXJcclxuICAgICAgICBhc3Npc3RBaW1SYXRpbyA6IG51bWJlclxyXG4gICAgICAgIHJlbG9hZFdpdGhNYWdhemluZXMgOiBib29sZWFuXHJcbiAgICAgICAgY2FuSW50ZXJydXB0QnVsbGV0TG9hZCA6IGJvb2xlYW5cclxuICAgICAgICBoaXRFZmZlY3QgOiBzdHJpbmdcclxuICAgICAgICBmaXJlRWZmZWN0IDogc3RyaW5nXHJcbiAgICAgICAgYnVsbGV0U3BlZWQgOiBudW1iZXJcclxuICAgICAgICBkYW1hZ2VBdHRlbnVhdGlvbiA6IERhbWFnZUF0dGVudWF0aW9uW11cclxuICAgICAgICBleHBsb3Npb25EYW1hZ2VBdHRlbnVhdGlvbiA6IERhbWFnZUF0dGVudWF0aW9uW11cclxuICAgICAgICBjaGFyYWN0ZXJBbmltYXRpb25Nb2RlIDogbnVtYmVyXHJcbiAgICAgICAgcHVtcEFmdGVyRmluYWxMb2FkIDogYm9vbGVhblxyXG4gICAgICAgIHB1bXBBZnRlckZpcmUgOiBib29sZWFuXHJcbiAgICAgICAgYm9uZVdlaWdodCA6IEJvbmVXZWlnaHRcclxuICAgICAgICBkYW1hZ2VSZXNwb25zZVdhaXRUaW1lIDogbnVtYmVyXHJcbiAgICAgICAgZ3Jhdml0eVNjYWxlIDogbnVtYmVyXHJcbiAgICAgICAgZXhwbG9zaW9uUmFuZ2UgOiBudW1iZXJcclxuICAgICAgICB3ZWlnaHQgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NUYzOVx1NTkzOVx1OTE0RFx1N0Y2RVx1OTc1OVx1NjAwMVx1NUM1RVx1NjAyNyAqL1xyXG4gICAgdHlwZSBXZWFwb25NYWdhemluZUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbWF0Y2hBbW1vIDogbnVtYmVyXHJcbiAgICAgICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIG1heE51bSA6IG51bWJlclxyXG4gICAgICAgIGxvYWRUaW1lIDogbnVtYmVyXHJcbiAgICAgICAgYW1tb05hbWUgOiBzdHJpbmdcclxuICAgICAgICBhbW1vRGVzIDogc3RyaW5nXHJcbiAgICAgICAgYW1tb0ljb24gOiBzdHJpbmdcclxuICAgICAgICBhbW1vSGl0VGV4dHVyZSA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9Nb2RlbCA6IHN0cmluZ1xyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5MTREXHU0RUY2XHU5MTREXHU3RjZFXHU5NzU5XHU2MDAxXHU1QzVFXHU2MDI3ICovXHJcbiAgICB0eXBlIFdlYXBvbkFjY2Vzc29yeUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGRlcyA6IHN0cmluZ1xyXG4gICAgICAgIGljb24gOiBzdHJpbmdcclxuICAgICAgICBsb2NhdGlvbiA6IEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bVxyXG4gICAgICAgIG9yZGVyIDogbnVtYmVyXHJcbiAgICAgICAgbW9kZWwgOiBzdHJpbmdcclxuICAgICAgICBpc1NpbGVuY2VyIDogYm9vbGVhblxyXG4gICAgICAgIGFpbUZvdlJhdGUgOiBudW1iZXIgXHJcbiAgICAgICAgbWluRXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgbWF4RXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuUmVjb3ZlclJhdGUgOiBudW1iZXJcclxuICAgICAgICB2ZXJ0aWNhbEp1bXBBbmdsZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBob3Jpem9udGFsSnVtcFJhbmdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIHNlbGZTcGluUmFuZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAganVtcEZvdlJhdGUgOiBudW1iZXJcclxuICAgICAgICBidWxsZXRTcGVlZFJhdGUgOiBudW1iZXJcclxuICAgICAgICBtYWdhemluZUxvYWRUaW1lUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIG1heEFtbW9SYXRlIDogTWFwPG51bWJlciwgbnVtYmVyPlxyXG4gICAgICAgIGFpbVRpbWVSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgcGlja1NvdW5kIDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTc2RjhcdTY3M0FcdTc2RjhcdTUxNzNcdTc2ODRcdTkxNERcdTdGNkUgKi9cclxuICAgIHR5cGUgV2VhcG9uQ2FtZXJhQ29uZmlnRGF0YSA9IHtcclxuICAgICAgICB2aWJyYXRpb25EdW1wIDogbnVtYmVyXHJcbiAgICAgICAgdmlicmF0aW9uT21lZ2EgOiBudW1iZXJcclxuICAgICAgICBqdW1wVGltZSA6IG51bWJlclxyXG4gICAgICAgIGp1bXBGT1YgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NTQwRVx1NTc1MFx1NTI5Qlx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgdHlwZSBXZWFwb25SZWNvaWxDb25maWdEYXRhID0ge1xyXG4gICAgICAgIG1pbkVycm9yIDogbnVtYmVyXHJcbiAgICAgICAgbWF4RXJyb3IgOiBudW1iZXJcclxuICAgICAgICBndW5SZWNvaWwgOiBudW1iZXJcclxuICAgICAgICBndW5SZWNvdmVyUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGRpZmZ1c2VSZWNvdmVyUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIHZlcnRpY2FsSnVtcEFuZ2xlIDogbnVtYmVyXHJcbiAgICAgICAgYmFja1RvdGFsIDogbnVtYmVyXHJcbiAgICAgICAgaG9yaXpvbnRhbEp1bXBSYW5nZSA6IG51bWJlclxyXG4gICAgICAgIHZlcnRpY2FsSnVtcFJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgc2VsZlNwaW5SYW5nZSA6IG51bWJlclxyXG4gICAgICAgIHNlbGZTcGluTWF4IDogbnVtYmVyXHJcblxyXG4gICAgICAgIHVpSnVtcEFtcGwgOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBNYXggOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBEdW1wIDogbnVtYmVyXHJcbiAgICAgICAgdWlKdW1wT21lZ2EgOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBBbmdsZSA6IG51bWJlclxyXG5cclxuICAgICAgICBzaGFrZUludGVuc2l0eSA6IG51bWJlclxyXG4gICAgICAgIGRpZmZ1c2VGdW5jdGlvbiA6IERpZmZ1c2VGdW5jdGlvbkVudW1cclxuICAgICAgICBqdW1wRXJyb3JTY2FsZSA6IG51bWJlclxyXG4gICAgICAgIGNyb3VjaEVycm9yU2NhbGUgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NTJBOFx1NzUzQlx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgdHlwZSBXZWFwb25BbmltYXRpb25Db25maWdEYXRhID0ge1xyXG4gICAgICAgIGd1bmlkIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuRXZuZXQgOiBudW1iZXJcclxuICAgICAgICBpc0xvb3AgOiBib29sZWFuXHJcbiAgICAgICAgVHJhbnNpdGlvbkR1cmF0aW9uIDogbnVtYmVyXHJcbiAgICAgICAgQW5pbWF0aW9uTmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIERldGFpbCA6IHN0cmluZ1xyXG4gICAgICAgIFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgV2VpZ2h0IDogbnVtYmVyXHJcbiAgICAgICAgQ292ZXJwbGF5IDogbnVtYmVyXHJcbiAgICAgICAgR3VuTmFtZSA6IHN0cmluZ1xyXG4gICAgfVxyXG59IiwgIiIsICJpbXBvcnQgKiBhcyBmb3JlaWduMSBmcm9tICcuL0phdmFTY3JpcHRzL0NvbmZpZy9Db25maWdCYXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yIGZyb20gJy4vSmF2YVNjcmlwdHMvQ29uZmlnL0dhbWVDb25maWcnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvTW9uc3RlcnMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjQgZnJvbSAnLi9KYXZhU2NyaXB0cy9EZWZhdWx0VUknO1xuaW1wb3J0ICogYXMgZm9yZWlnbjUgZnJvbSAnLi9KYXZhU2NyaXB0cy9FbnRpdHkvTW9uc3Rlci9Nb25zdGVyQmFzZSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNiBmcm9tICcuL0phdmFTY3JpcHRzL0ZhY3RvcnkvRmFjX0ludGVyYWN0T2JqZWN0JztcbmltcG9ydCAqIGFzIGZvcmVpZ243IGZyb20gJy4vSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0V2ZW50Q29uc3QnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjggZnJvbSAnLi9KYXZhU2NyaXB0cy9HYW1lQ29uc3QvR2FtZUNvbnN0JztcbmltcG9ydCAqIGFzIGZvcmVpZ245IGZyb20gJy4vSmF2YVNjcmlwdHMvR2FtZVBsYXlNYWluJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xMCBmcm9tICcuL0phdmFTY3JpcHRzL0ludGVyZmFjZS9JSW50ZXJhY3Rpb24nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjExIGZyb20gJy4vSmF2YVNjcmlwdHMvUGxheWVyQXR0cic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTIgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJCZWhhdmlvcic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTMgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJHdW5NZ3InO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE0IGZyb20gJy4vSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE1IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE2IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE3IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xOCBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE5IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIwIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjEgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yMiBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yNCBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjUgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uVG9vbCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjYgZnJvbSAnLi9KYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI3IGZyb20gJy4vSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI4IGZyb20gJy4vYnVpbGQnO1xuXG5leHBvcnQgY29uc3QgTVdNb2R1bGVNYXAgPSB7IFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UnOiBmb3JlaWduMSxcbiAgICAgJ0phdmFTY3JpcHRzL0NvbmZpZy9HYW1lQ29uZmlnJzogZm9yZWlnbjIsXG4gICAgICdKYXZhU2NyaXB0cy9Db25maWcvTW9uc3RlcnMnOiBmb3JlaWduMyxcbiAgICAgJ0phdmFTY3JpcHRzL0RlZmF1bHRVSSc6IGZvcmVpZ240LFxuICAgICAnSmF2YVNjcmlwdHMvRW50aXR5L01vbnN0ZXIvTW9uc3RlckJhc2UnOiBmb3JlaWduNSxcbiAgICAgJ0phdmFTY3JpcHRzL0ZhY3RvcnkvRmFjX0ludGVyYWN0T2JqZWN0JzogZm9yZWlnbjYsXG4gICAgICdKYXZhU2NyaXB0cy9HYW1lQ29uc3QvRXZlbnRDb25zdCc6IGZvcmVpZ243LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdCc6IGZvcmVpZ244LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZVBsYXlNYWluJzogZm9yZWlnbjksXG4gICAgICdKYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uJzogZm9yZWlnbjEwLFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyQXR0cic6IGZvcmVpZ24xMSxcbiAgICAgJ0phdmFTY3JpcHRzL1BsYXllckJlaGF2aW9yJzogZm9yZWlnbjEyLFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyR3VuTWdyJzogZm9yZWlnbjEzLFxuICAgICAnSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwnOiBmb3JlaWduMTQsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vQ2FtZXJhQ29udHJvbGxlcic6IGZvcmVpZ24xNSxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzJzogZm9yZWlnbjE2LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzJzogZm9yZWlnbjE3LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFuaW1hdGlvbkNscyc6IGZvcmVpZ24xOCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25CYXNlQ2xzJzogZm9yZWlnbjE5LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscyc6IGZvcmVpZ24yMCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25HVUlDbHMnOiBmb3JlaWduMjEsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uTWFnYXppbmVDbHMnOiBmb3JlaWduMjIsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzJzogZm9yZWlnbjIzLFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblNvdW5kQ2xzJzogZm9yZWlnbjI0LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblRvb2wnOiBmb3JlaWduMjUsXG4gICAgICdKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUnOiBmb3JlaWduMjYsXG4gICAgICdKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9Nb25zdEluZm9VSV9nZW5lcmF0ZSc6IGZvcmVpZ24yNyxcbiAgICAgJ2J1aWxkJzogZm9yZWlnbjI4LFxufVxuIiwgIlxyXG4vL1x1NTE0M1x1N0QyMFx1NzY4NFx1NTdGQVx1N0M3QlxyXG5leHBvcnQgaW50ZXJmYWNlIElFbGVtZW50QmFzZXtcclxuXHRpZDpudW1iZXI7XHJcbn1cclxuLy9cdTkxNERcdTdGNkVcdTc2ODRcdTU3RkFcdTdDN0JcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0Jhc2U8VCBleHRlbmRzIElFbGVtZW50QmFzZT57XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0tFWTpzdHJpbmcgPSAnS2V5JzsvL1x1OEJGQlx1NTNENlx1OTUyRShcdTk2NjRcdTRFODZJRFx1NEU0Qlx1NTkxNlx1NzY4NFx1NTIyQlx1NTQwRFx1RkYwQ1x1NUUyNmtleVx1NzY4NFx1NUI1N1x1NkJCNVx1NUZDNVx1OTg3Qlx1NjYyRnN0cmluZ1x1N0M3Qlx1NTc4QilcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfTEFOR1VBR0U6c3RyaW5nID0gJ0xhbmd1YWdlJzsvL1x1NTE3M1x1ODA1NFx1OEJFRFx1OEEwMFx1ODg2OFx1NzY4NGlkXHU2MjE2a2V5KFx1NTk4Mlx1Njc5Q1x1NjcwOVx1OEZEOVx1NEUyQXRhZ1x1RkYwQ1x1NUJGQ1x1ODg2OFx1NURFNVx1NTE3N1x1ODk4MVx1NjI4QVx1NjU3MFx1NjM2RVx1NzUxRlx1NjIxMFx1NEUzQXN0cmluZ1x1N0M3Qlx1NTc4Qlx1RkYwQ1x1NTZFMFx1NEUzQVx1NEYxQVx1ODFFQVx1NTJBOFx1OEZEQlx1ODg0Q1x1NTAzQ1x1NzY4NFx1OEY2Q1x1NjM2MilcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfTUFJTkxBTkdVQUdFOnN0cmluZyA9ICdNYWluTGFuZ3VhZ2UnOy8vXHU0RTNCXHU4QkVEXHU4QTAwdGFnXHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0NISUxETEFOR1VBR0U6c3RyaW5nID0gJ0NoaWxkTGFuZ3VhZ2UnOy8vXHU1QjUwXHU4QkVEXHU4QTAwdGFnXHJcblxyXG5cdHByaXZhdGUgcmVhZG9ubHkgRUxFTUVOVEFSUjpBcnJheTxUPiA9IFtdO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgRUxFTUVOVE1BUDpNYXA8bnVtYmVyLCBUPiA9IG5ldyBNYXA8bnVtYmVyLCBUPigpO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgS0VZTUFQOk1hcDxudW1iZXIgfCBzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcblx0cHJpdmF0ZSBzdGF0aWMgbGFuZ3VhZ2VJbmRleDpudW1iZXIgPSAwXHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0TGFuZ3VhZ2U6KGtleTpzdHJpbmd8bnVtYmVyKT0+c3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXhjZWxEYXRhOkFycmF5PEFycmF5PGFueT4+KXtcclxuXHRcdGxldCBoZWFkZXJMaW5lOm51bWJlciA9IDI7Ly9cdTg4NjhcdTU5MzRcdTc2ODRcdTg4NENcdTY1NzBcclxuXHRcdHRoaXMuRUxFTUVOVEFSUiA9IG5ldyBBcnJheShleGNlbERhdGEubGVuZ3RoIC0gaGVhZGVyTGluZSk7XHJcblx0XHRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHR0aGlzLkVMRU1FTlRBUlJbaV0gPSB7fSBhcyBUXHJcblx0XHR9XHJcblx0XHRsZXQgY29sdW1uID0gZXhjZWxEYXRhWzBdLmxlbmd0aDsvL1x1NTIxN1x1NjU3MFxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IGNvbHVtbjsgaisrKXsvL1x1OTA0RFx1NTM4Nlx1NTQwNFx1NTIxN1xyXG5cdFx0XHRsZXQgbmFtZTpzdHJpbmcgPSBleGNlbERhdGFbMF1bal07XHJcblx0XHRcdGxldCB0YWdzOkFycmF5PHN0cmluZz4gPSBleGNlbERhdGFbMV1bal0uc3BsaXQoJ3wnKTtcclxuXHRcdFx0aWYodGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19DSElMRExBTkdVQUdFKSkgY29udGludWU7XHJcblx0XHRcdGxldCBqT2ZmZWN0Om51bWJlciA9IDA7Ly9cdTUyMTdcdTUwNEZcdTc5RkJcdTkxQ0ZcclxuXHRcdFx0aWYodGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19NQUlOTEFOR1VBR0UpKXtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBqICsgQ29uZmlnQmFzZS5sYW5ndWFnZUluZGV4O1xyXG5cdFx0XHRcdGxldCB0YXJnZXRUYWdzOkFycmF5PHN0cmluZz4gPSBleGNlbERhdGFbMV1baW5kZXhdLnNwbGl0KCd8Jyk7XHJcblx0XHRcdFx0aWYoaW5kZXggPCBjb2x1bW4gJiYgdGFyZ2V0VGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19DSElMRExBTkdVQUdFKSl7XHJcblx0XHRcdFx0XHRqT2ZmZWN0ID0gQ29uZmlnQmFzZS5sYW5ndWFnZUluZGV4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgaGFzVGFnX0tleTpib29sZWFuID0gdGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19LRVkpO1xyXG5cdFx0XHRsZXQgaGFzVGFnX0xhbmd1YWdlOmJvb2xlYW4gPSB0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0xBTkdVQUdFKTtcclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0bGV0IGVsZSA9IHRoaXMuRUxFTUVOVEFSUltpXTtcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBleGNlbERhdGFbaSArIGhlYWRlckxpbmVdW2ogKyBqT2ZmZWN0XTtcclxuXHRcdFx0XHRpZihqID09IDApey8vSURcclxuXHRcdFx0XHRcdHRoaXMuRUxFTUVOVE1BUC5zZXQodmFsdWUsIGVsZSk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpZihoYXNUYWdfS2V5KXtcclxuXHRcdFx0XHRcdFx0dGhpcy5LRVlNQVAuc2V0KHZhbHVlLCBleGNlbERhdGFbaSArIGhlYWRlckxpbmVdWzBdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKGhhc1RhZ19MYW5ndWFnZSl7XHJcblx0XHRcdFx0XHRcdGlmKENvbmZpZ0Jhc2UuZ2V0TGFuZ3VhZ2UgIT0gbnVsbCl7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBDb25maWdCYXNlLmdldExhbmd1YWdlKHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBcInVua25vd1wiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxlW25hbWVdID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly9cdThCQkVcdTdGNkVcdTgzQjdcdTUzRDZcdThCRURcdThBMDBcdTc2ODRcdTY1QjlcdTZDRDVcclxuXHRwdWJsaWMgc3RhdGljIGluaXRMYW5ndWFnZShsYW5ndWFnZUluZGV4Om51bWJlciwgZ2V0TGFuZ3VhZ2VGdW46KGtleTpzdHJpbmd8bnVtYmVyKT0+c3RyaW5nKXtcclxuXHRcdENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleCA9IGxhbmd1YWdlSW5kZXg7XHJcblx0XHRDb25maWdCYXNlLmdldExhbmd1YWdlID0gZ2V0TGFuZ3VhZ2VGdW47XHJcblx0XHRpZihDb25maWdCYXNlLmxhbmd1YWdlSW5kZXggPCAwKXtcclxuXHRcdFx0Q29uZmlnQmFzZS5sYW5ndWFnZUluZGV4ID0gQ29uZmlnQmFzZS5nZXRTeXN0ZW1MYW5ndWFnZUluZGV4KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vXHU4M0I3XHU1M0Q2XHU3Q0ZCXHU3RURGXHU4QkVEXHU4QTAwXHU3RDIyXHU1RjE1XHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0U3lzdGVtTGFuZ3VhZ2VJbmRleCgpOm51bWJlcntcclxuXHRcdGxldCBsYW5ndWFnZSA9IFV0aWwuTG9jYWxlVXRpbC5nZXREZWZhdWx0TG9jYWxlKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJlblwiKSkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdGlmICghIWxhbmd1YWdlLm1hdGNoKFwiemhcIikpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImphXCIpKSB7XHJcblx0XHRcdHJldHVybiAyO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJkZVwiKSkge1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIFx1NjgzOVx1NjM2RWlkXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU1MTQzXHU3RDIwXHJcblx0KiBAcGFyYW0gaWQgaWR8a2V5XHJcblx0KiBAcmV0dXJucyBFbGVtZW50XHJcblx0Ki9cclxuXHRwdWJsaWMgZ2V0RWxlbWVudChpZDpudW1iZXJ8c3RyaW5nKTogVCB7XHJcblx0XHRsZXQgZWxlID0gdGhpcy5FTEVNRU5UTUFQLmdldChOdW1iZXIoaWQpKSB8fCB0aGlzLkVMRU1FTlRNQVAuZ2V0KHRoaXMuS0VZTUFQLmdldChpZCkpO1xyXG5cdFx0aWYoZWxlID09IG51bGwpe1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiXHU5MTREXHU3RjZFXHU4ODY4XHU0RTJEXHU2MjdFXHU0RTBEXHU1MjMwXHU1MTQzXHU3RDIwIGlkOlwiICsgaWQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVsZTtcclxuXHR9XHJcblx0LyoqXHJcblx0KiBcdTY4MzlcdTYzNkVcdTVCNTdcdTZCQjVcdTU0MERcdTU0OENcdTVCNTdcdTZCQjVcdTUwM0NcdTY3RTVcdTYyN0VcdTRFMDBcdTRFMkFcdTUxNDNcdTdEMjBcclxuXHQqIEBwYXJhbSBmaWVsZE5hbWUgXHU1QjU3XHU2QkI1XHU1NDBEXHJcblx0KiBAcGFyYW0gZmllbGRWYWx1ZSBcdTVCNTdcdTZCQjVcdTUwM0NcclxuXHQqIEByZXR1cm5zIFx1N0IyQ1x1NEUwMFx1NEUyQVx1NjI3RVx1NTIzMFx1NzY4NEVsZW1lbnRcclxuXHQqL1xyXG5cdHB1YmxpYyBmaW5kRWxlbWVudChmaWVsZE5hbWU6c3RyaW5nLCBmaWVsZFZhbHVlOmFueSk6IFR7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UQVJSLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYodGhpcy5FTEVNRU5UQVJSW2ldW2ZpZWxkTmFtZV0gPT0gZmllbGRWYWx1ZSl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuRUxFTUVOVEFSUltpXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvKipcclxuXHQqIFx1NjgzOVx1NjM2RVx1NUI1N1x1NkJCNVx1NTQwRFx1NTQ4Q1x1NUI1N1x1NkJCNVx1NTAzQ1x1NjdFNVx1NjI3RVx1NEUwMFx1N0VDNFx1NTE0M1x1N0QyMFxyXG5cdCogQHBhcmFtIGZpZWxkTmFtZSBcdTVCNTdcdTZCQjVcdTU0MERcclxuXHQqIEBwYXJhbSBmaWVsZFZhbHVlIFx1NUI1N1x1NkJCNVx1NTAzQ1xyXG5cdCogQHJldHVybnMgXHU2MjQwXHU2NzA5XHU3QjI2XHU1NDA4XHU4OTgxXHU2QzQyXHU3Njg0RWxlbWVudFxyXG5cdCovXHJcblx0cHVibGljIGZpbmRFbGVtZW50cyhmaWVsZE5hbWU6c3RyaW5nLGZpZWxkVmFsdWU6YW55KTpBcnJheTxUPntcclxuXHRcdGxldCBhcnI6QXJyYXk8VD4gPSBbXTtcclxuXHRcdGZvcihsZXQgaSA9IDA7aSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7aSsrKXtcclxuXHRcdFx0aWYodGhpcy5FTEVNRU5UQVJSW2ldW2ZpZWxkTmFtZV0gPT0gZmllbGRWYWx1ZSl7XHJcblx0XHRcdFx0YXJyLnB1c2godGhpcy5FTEVNRU5UQVJSW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9XHJcblx0LyoqXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU1MTQzXHU3RDIwKi9cclxuXHRwdWJsaWMgZ2V0QWxsRWxlbWVudCgpOkFycmF5PFQ+e1xyXG5cdFx0cmV0dXJuIHRoaXMuRUxFTUVOVEFSUjtcclxuXHR9XHJcbn0iLCAiaW1wb3J0IHtDb25maWdCYXNlLCBJRWxlbWVudEJhc2V9IGZyb20gXCIuL0NvbmZpZ0Jhc2VcIjtcclxuaW1wb3J0IHtNb25zdGVyc0NvbmZpZ30gZnJvbSBcIi4vTW9uc3RlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29uZmlne1xyXG5cdHByaXZhdGUgc3RhdGljIGNvbmZpZ01hcDpNYXA8c3RyaW5nLCBDb25maWdCYXNlPElFbGVtZW50QmFzZT4+ID0gbmV3IE1hcCgpO1xyXG5cdC8qKlxyXG5cdCogXHU1OTFBXHU4QkVEXHU4QTAwXHU4QkJFXHU3RjZFXHJcblx0KiBAcGFyYW0gbGFuZ3VhZ2VJbmRleCBcdThCRURcdThBMDBcdTdEMjJcdTVGMTUoLTFcdTRFM0FcdTdDRkJcdTdFREZcdTlFRDhcdThCQTRcdThCRURcdThBMDApXHJcblx0KiBAcGFyYW0gZ2V0TGFuZ3VhZ2VGdW4gXHU2ODM5XHU2MzZFa2V5XHU4M0I3XHU1M0Q2XHU4QkVEXHU4QTAwXHU1MTg1XHU1QkI5XHU3Njg0XHU2NUI5XHU2Q0Q1XHJcblx0Ki9cclxuXHRwdWJsaWMgc3RhdGljIGluaXRMYW5ndWFnZShsYW5ndWFnZUluZGV4Om51bWJlciwgZ2V0TGFuZ3VhZ2VGdW46KGtleTpzdHJpbmd8bnVtYmVyKT0+c3RyaW5nKXtcclxuXHRcdENvbmZpZ0Jhc2UuaW5pdExhbmd1YWdlKGxhbmd1YWdlSW5kZXgsIGdldExhbmd1YWdlRnVuKTtcclxuXHRcdHRoaXMuY29uZmlnTWFwLmNsZWFyKCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnPFQgZXh0ZW5kcyBDb25maWdCYXNlPElFbGVtZW50QmFzZT4+KENvbmZpZ0NsYXNzOiB7IG5ldygpOiBUIH0pOiBUIHtcclxuXHRcdGlmICghdGhpcy5jb25maWdNYXAuaGFzKENvbmZpZ0NsYXNzLm5hbWUpKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnTWFwLnNldChDb25maWdDbGFzcy5uYW1lLCBuZXcgQ29uZmlnQ2xhc3MoKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWdNYXAuZ2V0KENvbmZpZ0NsYXNzLm5hbWUpIGFzIFQ7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IE1vbnN0ZXJzKCk6TW9uc3RlcnNDb25maWd7IHJldHVybiB0aGlzLmdldENvbmZpZyhNb25zdGVyc0NvbmZpZykgfTtcclxufSIsICJpbXBvcnQgeyBDb25maWdCYXNlLCBJRWxlbWVudEJhc2UgfSBmcm9tIFwiLi9Db25maWdCYXNlXCI7XHJcbmNvbnN0IEVYQ0VMREFUQTpBcnJheTxBcnJheTxhbnk+PiA9IFtbXCJpZFwiLFwibmFtZVwiLFwibWF4SFBcIixcImxldmVsXCIsXCJhdGtcIixcIm1vZGVsR3VpZFwiXSxbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFsxLFwiXHU4NzE4XHU4NkRCXCIsMTAwLDIsMSxcIjE5MjU2OVwiXSxbMixcIlx1NTE1NFx1NUI1MFwiLDIwMCwyLDEsXCIxMzgyNjhcIl0sWzMsXCJcdTlFOEJcdTlFN0ZcIiwzMDAsMiwxLFwiMTI2MDMwXCJdXTtcclxuZXhwb3J0IGludGVyZmFjZSBJTW9uc3RlcnNFbGVtZW50IGV4dGVuZHMgSUVsZW1lbnRCYXNle1xyXG4gXHQvKipcdTYwMkFcdTcyNjlJRCovXHJcblx0aWQ6bnVtYmVyXHJcblx0LyoqXHU2MDJBXHU3MjY5XHU1NDBEXHU1QjU3Ki9cclxuXHRuYW1lOnN0cmluZ1xyXG5cdC8qKlx1NjcwMFx1NTkyN1x1ODg0MFx1OTFDRiovXHJcblx0bWF4SFA6bnVtYmVyXHJcblx0LyoqXHU3QjQ5XHU3RUE3Ki9cclxuXHRsZXZlbDpudW1iZXJcclxuXHQvKipcdTY1M0JcdTUxRkJcdTUyOUIqL1xyXG5cdGF0azpudW1iZXJcclxuXHQvKipcdTk4ODRcdTUyMzZcdTRGNTNHdWlkKi9cclxuXHRtb2RlbEd1aWQ6c3RyaW5nXHJcbiB9IFxyXG5leHBvcnQgY2xhc3MgTW9uc3RlcnNDb25maWcgZXh0ZW5kcyBDb25maWdCYXNlPElNb25zdGVyc0VsZW1lbnQ+e1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcihFWENFTERBVEEpO1xyXG5cdH1cclxuXHJcbn0iLCAiXHVGRUZGaW1wb3J0IEludGVyYWN0QWN0b3IgZnJvbSBcIi4vSW50ZXJmYWNlL0lJbnRlcmFjdGlvblwiO1xyXG5cclxuQFVJLlVJQ2FsbE9ubHkoJycpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRGVmYXVsdCBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdENoYXJhY3RlcjogR2FtZXBsYXkuQ2hhcmFjdGVyO1xyXG5cclxuXHRJbnRlcmFjdEJ0bjogVUkuQnV0dG9uXHJcblx0TmVhckludGVyYWN0R3VpZCA6c3RyaW5nXHJcblx0LyogXHU4OUUzXHU2NzkwXHU4RDQ0XHU2RTkwSURcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgcmVzb2x2ZVN0cmluZyhhc3NldElkczogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBhc3NldElkQXJyYXk6IHN0cmluZ1tdID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgYXNzZXRJZDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgcyA9IGFzc2V0SWRzLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGEgb2Ygcykge1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZEFycmF5LnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWQgKz0gYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkQXJyYXkucHVzaChhc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0SWRBcnJheTtcclxuICAgIH1cclxuXHJcblx0LyogXHU1MjFEXHU1OUNCXHU1MzE2XHU4RDQ0XHU2RTkwICovXHJcblx0cHJpdmF0ZSBpbml0QXNzZXRzKGFzc2V0SWRzOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGxldCBhc3NldElkQXJyYXkgPSB0aGlzLnJlc29sdmVTdHJpbmcoYXNzZXRJZHMpO1xyXG5cdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBhc3NldElkQXJyYXkpIHtcclxuXHRcdFx0VXRpbC5Bc3NldFV0aWwuYXN5bmNEb3dubG9hZEFzc2V0KGVsZW1lbnQpXHJcblx0XHR9XHJcblx0fVxyXG5cdHByaXZhdGUgVHJ5SW50ZXJhY3QoKTp2b2lkIHtcclxuXHRcdGxldCBvYmo6R2FtZU9iamVjdCA9IEdhbWVPYmplY3QuZmluZCh0aGlzLk5lYXJJbnRlcmFjdEd1aWQpXHJcblx0XHRpZiAob2JqID09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgYSA9IG9iai5nZXRTY3JpcHRzKClcclxuXHRcdGxldCBhY3RvciA6IEludGVyYWN0QWN0b3IgPSA8SW50ZXJhY3RBY3Rvcj5vYmouZ2V0U2NyaXB0QnlOYW1lKFwiSUludGVyYWN0aW9uXCIpXHJcblx0XHRhY3Rvci5PbkludGVyYWN0KGdldEN1cnJlbnRQbGF5ZXIoKSwgMSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgU2hvd0ludGVyYWN0QnV0dG9uKGd1aWQgOnN0cmluZyk6dm9pZCB7XHJcblx0XHR0aGlzLkludGVyYWN0QnRuLnZpc2liaWxpdHkgPSBVSS5TbGF0ZVZpc2liaWxpdHkuVmlzaWJsZVxyXG5cdFx0dGhpcy5OZWFySW50ZXJhY3RHdWlkID0gZ3VpZFxyXG5cdH1cclxuXHRwcml2YXRlIEhpZGVJbnRlcmFjdEJ1dHRvbihndWlkOnN0cmluZyk6dm9pZHtcclxuXHRcdGlmICh0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPT0gZ3VpZCkge1xyXG5cdFx0XHR0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPSBcIlwiXHJcblx0XHRcdHRoaXMuSW50ZXJhY3RCdG4udmlzaWJpbGl0eSA9IFVJLlNsYXRlVmlzaWJpbGl0eS5Db2xsYXBzZWRcclxuXHRcdH1cclxuXHR9XHJcblx0LyoqIFx1NEVDNVx1NTcyOFx1NkUzOFx1NjIwRlx1NjVGNlx1OTVGNFx1NUJGOVx1OTc1RVx1NkEyMVx1Njc3Rlx1NUI5RVx1NEY4Qlx1OEMwM1x1NzUyOFx1NEUwMFx1NkIyMSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKSB7XHJcblx0XHQvL1x1NTIxRFx1NTlDQlx1NTMxNlx1NTJBOFx1NzUzQlx1OEQ0NFx1NkU5MCBcclxuXHRcdHRoaXMuaW5pdEFzc2V0cyhcIjk1Nzc3LDYxMjQ1XCIpXHJcblx0XHQvL1x1OEJCRVx1N0Y2RVx1ODBGRFx1NTQyNlx1NkJDRlx1NUUyN1x1ODlFNlx1NTNEMW9uVXBkYXRlXHJcblx0XHR0aGlzLmNhblVwZGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHQvL1x1NjI3RVx1NTIzMFx1NUJGOVx1NUU5NFx1NzY4NFx1OERGM1x1OERDM1x1NjMwOVx1OTRBRVxyXG4gICAgICAgIGNvbnN0IEp1bXBCdG4gPSB0aGlzLnVpV2lkZ2V0QmFzZS5maW5kQ2hpbGRCeVBhdGgoJ1Jvb3RDYW52YXMvQnV0dG9uX0p1bXAnKSBhcyBVSS5CdXR0b25cclxuXHRcdGNvbnN0IEF0dGFja0J0biA9IHRoaXMudWlXaWRnZXRCYXNlLmZpbmRDaGlsZEJ5UGF0aCgnUm9vdENhbnZhcy9CdXR0b25fQXR0YWNrJykgYXMgVUkuQnV0dG9uXHJcblx0XHR0aGlzLkludGVyYWN0QnRuID0gdGhpcy51aVdpZGdldEJhc2UuZmluZENoaWxkQnlQYXRoKCdSb290Q2FudmFzL0ludGVyYWN0QnRuJykgYXMgVUkuQnV0dG9uXHJcblx0XHR0aGlzLkludGVyYWN0QnRuLnZpc2liaWxpdHkgPSBVSS5TbGF0ZVZpc2liaWxpdHkuQ29sbGFwc2VkXHJcblx0XHRcclxuXHRcdEV2ZW50cy5hZGRMb2NhbExpc3RlbmVyKFwiY2xpZW50X3Nob3dfaW50ZXJhY3RfYnV0dG9uXCIsIChndWlkOiBzdHJpbmcpPT57XHJcblx0XHRcdHRoaXMuU2hvd0ludGVyYWN0QnV0dG9uKGd1aWQpXHJcblx0XHR9KTtcdFxyXG5cdFx0RXZlbnRzLmFkZExvY2FsTGlzdGVuZXIoXCJjbGllbnRfaGlkZV9pbnRlcmFjdF9idXR0b25cIiwgKGd1aWQ6IHN0cmluZyk9PntcclxuXHRcdFx0dGhpcy5IaWRlSW50ZXJhY3RCdXR0b24oZ3VpZClcclxuXHRcdH0pXHJcblx0XHQvL1x1NzBCOVx1NTFGQlx1OERGM1x1OERDM1x1NjMwOVx1OTRBRSxcdTVGMDJcdTZCNjVcdTgzQjdcdTUzRDZcdTRFQkFcdTcyNjlcdTU0MEVcdTYyNjdcdTg4NENcdThERjNcdThEQzNcclxuICAgICAgICBKdW1wQnRuLm9uUHJlc3NlZC5hZGQoKCk9PntcclxuXHRcdFx0aWYgKHRoaXMuQ2hhcmFjdGVyKSB7XHJcblx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIuanVtcCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdEdhbWVwbGF5LmFzeW5jR2V0Q3VycmVudFBsYXllcigpLnRoZW4oKHBsYXllcikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIgPSBwbGF5ZXIuY2hhcmFjdGVyO1xyXG5cdFx0XHRcdFx0Ly9cdTg5RDJcdTgyNzJcdTYyNjdcdTg4NENcdThERjNcdThEQzNcdTUyOUZcdTgwRkRcclxuXHRcdFx0XHRcdHRoaXMuQ2hhcmFjdGVyLmp1bXAoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU2NTNCXHU1MUZCXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIEF0dGFja0J0bi5vblByZXNzZWQuYWRkKCgpPT57XHJcblx0XHRcdFx0R2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKCkudGhlbigocGxheWVyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3RlciA9IHBsYXllci5jaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHQvL1x1OEJBOVx1NTJBOFx1NzUzQlx1NTNFQVx1NTcyOFx1NEUwQVx1NTM0QVx1OEVBQlx1NjRBRFx1NjUzRVxyXG5cdFx0XHRcdFx0bGV0IGFuaW0xID0gcGxheWVyLmNoYXJhY3Rlci5sb2FkQW5pbWF0aW9uKFwiNjEyNDVcIik7XHJcblx0XHRcdFx0XHRhbmltMS5zbG90ID0gR2FtZXBsYXkuQW5pbVNsb3QuVXBwZXI7XHJcblx0XHRcdFx0XHQvL1x1ODlEMlx1ODI3Mlx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG5cdFx0XHRcdFx0aWYoYW5pbTEuaXNQbGF5aW5nKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0YW5pbTEucGxheSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU0RUE0XHU0RTkyXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NEVBNFx1NEU5Mlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIHRoaXMuSW50ZXJhY3RCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0XHR0aGlzLlRyeUludGVyYWN0KClcclxuXHRcdH0pXHRcclxuXHRcdFxyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvblN0YXJ0XHU0RTRCXHU1NDBFIFxyXG5cdCAqIFx1NUJGOVx1NEU4RVVJXHU3Njg0XHU2ODM5XHU4MjgyXHU3MEI5XHU3Njg0XHU2REZCXHU1MkEwXHU2NENEXHU0RjVDXHVGRjBDXHU4RkRCXHU4ODRDXHU4QzAzXHU3NTI4XHJcblx0ICogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkU1XHU0RThCXHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1OTFBXHU2QjIxXHU4QzAzXHU3NTI4XHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uQWRkZWQoKSB7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvbkFkZGVkXHU0RTRCXHU1NDBFXHJcblx0ICogXHU1QkY5XHU0RThFVUlcdTc2ODRcdTY4MzlcdTgyODJcdTcwQjlcdTc2ODRcdTc5RkJcdTk2NjRcdTY0Q0RcdTRGNUNcdUZGMENcdThGREJcdTg4NENcdThDMDNcdTc1MjhcclxuXHQgKiBcdTZDRThcdTYxMEZcdUZGMUFcdThCRTVcdTRFOEJcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTU5MUFcdTZCMjFcdThDMDNcdTc1MjhcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25SZW1vdmVkKCkge1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENVSVx1NUJGOVx1OEM2MVx1NTE4RFx1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1OEMwM1x1NzUyOCBcclxuXHQqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEZEOVx1NEU0Qlx1NTQwRVVJXHU1QkY5XHU4QzYxXHU1REYyXHU3RUNGXHU4OEFCXHU5NTAwXHU2QkMxXHU0RTg2XHVGRjBDXHU5NzAwXHU4OTgxXHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU1QkY5XHU4QkU1XHU2NTg3XHU0RUY2XHU1NDhDVUlcdTc2RjhcdTUxNzNcdTVCRjlcdThDNjFcdTRFRTVcdTUzQ0FcdTVCNTBcdTVCRjlcdThDNjFcdTc2ODRcdTVGMTVcdTc1MjhcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIFx1NkJDRlx1NEUwMFx1NUUyN1x1OEMwM1x1NzUyOFxyXG5cdCogXHU5MDFBXHU4RkM3Y2FuVXBkYXRlXHU1M0VGXHU0RUU1XHU1RjAwXHU1NDJGXHU1MTczXHU5NUVEXHU4QzAzXHU3NTI4XHJcblx0KiBkdCBcdTRFMjRcdTVFMjdcdThDMDNcdTc1MjhcdTc2ODRcdTY1RjZcdTk1RjRcdTVERUVcdUZGMENcdTZCRUJcdTc5RDJcclxuXHQqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVXBkYXRlKGR0IDpudW1iZXIpIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU4QkJFXHU3RjZFXHU2NjNFXHU3OTNBXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25TaG93KC4uLnBhcmFtczphbnlbXSkge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdThCQkVcdTdGNkVcdTRFMERcdTY2M0VcdTc5M0FcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkhpZGUoKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NUY1M1x1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU2NjJGXHU1M0VGXHU0RUU1XHU2M0E1XHU2NTM2XHU0RThCXHU0RUY2XHU3Njg0XHU2NUY2XHU1MDE5XHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxVG91Y2hcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFOEJcdTRFRjZcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdTRFODZcclxuXHQgKiBcdTU5ODJcdTY3OUNcdTU5MDRcdTc0MDZcdTRFODZcdUZGMENcdTkwQTNcdTRFNDhcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NTNFRlx1NEVFNVx1NjNBNVx1NjUzNlx1OEZEOVx1NkIyMVRvdWNoXHU1NDBFXHU3RUVEXHU3Njg0TW92ZVx1NTQ4Q0VuZFx1NEU4Qlx1NEVGNlxyXG5cdCAqIFx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NTkwNFx1NzQwNlx1RkYwQ1x1OTBBM1x1NEU0OFx1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU1QzMxXHU2NUUwXHU2Q0Q1XHU2M0E1XHU2NTM2XHU4RkQ5XHU2QjIxVG91Y2hcdTU0MEVcdTdFRURcdTc2ODRNb3ZlXHU1NDhDRW5kXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0ZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1NTE4RFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU3OUZCXHU1MkE4XHU2NUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaE1vdmVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTc5QkJcdTVGMDBVSVx1NzU0Q1x1OTc2Mlx1NjVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIE9uVG91Y2hFbmRlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU1RjUzXHU1NzI4VUlcdTc1NENcdTk3NjJcdTRFMEFcdThDMDNcdTc1MjhkZXRlY3REcmFnL2RldGVjdERyYWdJZlByZXNzZWRcdTY1RjZcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQgKiBcdTUzRUZcdTRFRTVcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjZcdTc2ODRcdTVGMDBcdTU5Q0JcdTc1MUZcdTYyMTBcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFMDBcdTZCMjFcdTc1MUZcdTYyMTBcdTc2ODRcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjYgbmV3RHJhZ0Ryb3BcdTUzRUZcdTRFRTVcdTc1MUZcdTYyMTBcdTRFMDBcdTZCMjFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdEZXRlY3RlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCk6VUkuRHJhZ0Ryb3BPcGVyYXRpb24ge1xyXG5cdC8vXHRyZXR1cm4gdGhpcy5uZXdEcmFnRHJvcChudWxsKTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3RUNGXHU4RkM3XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ092ZXIoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU1NzI4XHU4RkQ5XHU0RTJBVUlcdTkxQ0FcdTY1M0VcdTVCOENcdTYyMTBcdTY1RjZcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJvcChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQsSW5EcmFnRHJvcE9wZXJhdGlvbjpVSS5EcmFnRHJvcE9wZXJhdGlvbik6Ym9vbGVhbiB7XHJcblx0Ly9cdHJldHVybiB0cnVlO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdThGREJcdTUxNjVcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0VudGVyKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NzlCQlx1NUYwMFx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnTGVhdmUoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSB7XHJcblx0Ly99XHJcblx0XHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHVGRjBDXHU2Q0ExXHU2NzA5XHU1QjhDXHU2MjEwXHU1QjhDXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU4MDBDXHU1M0Q2XHU2RDg4XHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnQ2FuY2VsbGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCkge1xyXG5cdC8vfVxyXG5cclxufVxyXG4iLCAiXHVGRUZGXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0ZXJCYXNlIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgSW50ZXJhY3RBY3RvciBmcm9tIFwiLi4vSW50ZXJmYWNlL0lJbnRlcmFjdGlvblwiO1xyXG5cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjX0ludGVyYWN0T2JqZWN0IGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgcHJpdmF0ZSBndWlkTGlzdDogTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj4gPSBuZXcgTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj47XHJcbiAgICBwcml2YXRlIGFjIDogSW50ZXJhY3RBY3RvcjtcclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgUGxheWVyQXR0ciBmcm9tIFwiLi9QbGF5ZXJBdHRyXCJcclxuXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5TWFpbiBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgdG90YWxQbGF5ZXJBdHRyczogTWFwPHN0cmluZywgUGxheWVyQXR0cj4gPSBuZXcgTWFwXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRzLmFkZFBsYXllckpvaW5lZExpc3RlbmVyKHRoaXMuT25QbGF5ZXJKb2luZWQuYmluZCh0aGlzKSlcclxuICAgICAgICBFdmVudHMuYWRkUGxheWVyTGVmdExpc3RlbmVyKHRoaXMuT25QbGF5ZXJMZWZ0LmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBPblBsYXllckpvaW5lZChwbGF5ZXI6R2FtZXBsYXkuUGxheWVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU3M0E5XHU1QkI2XHU1MkEwXHU1MTY1JyArIHBsYXllci5jaGFyYWN0ZXIuZ3VpZClcclxuICAgICAgICBsZXQgb2JqID0gYXdhaXQgQ29yZS5TY3JpcHQuc3Bhd25TY3JpcHQ8UGxheWVyQXR0cj4oUGxheWVyQXR0ciwgdHJ1ZSlcclxuICAgICAgICBvYmouSW5pdERhdGEocGxheWVyLmNoYXJhY3RlcilcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyQXR0cnMuc2V0KHBsYXllci5jaGFyYWN0ZXIuZ3VpZCwgb2JqKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTgxMUFcdTY3MkNcdTRFM0EnICsgb2JqKVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBPblBsYXllckxlZnQocGxheWVyOkdhbWVwbGF5LlBsYXllcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NzNBOVx1NUJCNlx1NzlCQlx1NUYwMCcgKyBwbGF5ZXIuY2hhcmFjdGVyLmd1aWQpXHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMudG90YWxQbGF5ZXJBdHRycy5nZXQocGxheWVyLmNoYXJhY3Rlci5ndWlkKVxyXG4gICAgICAgIG9iai5kZXN0cm95KClcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZGVsZXRlKHBsYXllci5jaGFyYWN0ZXIuZ3VpZClcclxuICAgIH1cclxufVxyXG4iLCAiXHVGRUZGLyoqXHU3M0E5XHU1QkI2XHU1QzVFXHU2MDI3XHU1NDBDXHU2QjY1XHU3QzdCXHVGRjBDXHU0RTE2XHU3NTRDXHU0RTJEXHU2QkNGXHU2NzA5XHU0RTAwXHU0RTJBXHU3M0E5XHU1QkI2XHVGRjBDXHU1QzMxXHU0RjFBXHU1NzI4XHU1QkY5XHU4QzYxXHU0RTBCXHU5NzYyXHU1MjFCXHU1RUZBXHU0RTAwXHU0RTJBXHU2QjY0XHU4MTFBXHU2NzJDXHU2NzY1XHU1QkY5XHU1RTk0XHU2QjY0XHU3M0E5XHU1QkI2ICovXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckF0dHIgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcblxyXG4gICAgcHVibGljIGNoYXJhY3RlcjpHYW1lcGxheS5DaGFyYWN0ZXJcclxuICAgIEBDb3JlLlByb3BlcnR5KHtkaXNwbGF5TmFtZTogJ1x1ODg0MFx1OTFDRicsIHJlcGxpY2F0ZWQgOiB0cnVlfSlcclxuICAgIHB1YmxpYyBocCA6IG51bWJlciA9IDEwMFxyXG4gICAgQENvcmUuUHJvcGVydHkoe2Rpc3BsYXlOYW1lOiAnXHU2NzAwXHU1OTI3XHU4ODQwXHU5MUNGJywgcmVwbGljYXRlZCA6IHRydWV9KVxyXG4gICAgcHVibGljIG1heEhwIDogbnVtYmVyXHJcbiAgICAvKiogXHU1RjUzXHU4MTFBXHU2NzJDXHU4OEFCXHU1QjlFXHU0RjhCXHU1NDBFXHVGRjBDXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU1RTI3XHU2NkY0XHU2NUIwXHU1MjREXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU1MjFCXHU1RUZBXHU2MjEwXHU1MjlGXHU4MTFBXHU2NzJDJylcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgSW5pdERhdGEoYyA6IEdhbWVwbGF5LkNoYXJhY3Rlcil7XHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmdDbGllbnQoKSl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNcclxuICAgICAgICB0aGlzLm1heEhwID0gMTAwXHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHBcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU3M0E5XHU1QkI2XHU1QzVFXHU2MDI3XHU4MTFBXHU2NzJDXHU1MjFEXHU1OUNCXHU1MzE2XHU1QjhDXHU2MjEwJylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1NDY4XHU2NzFGXHU1MUZEXHU2NTcwIFx1NkJDRlx1NUUyN1x1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU1MUZEXHU2NTcwXHU2MjY3XHU4ODRDXHU5NzAwXHU4OTgxXHU1QzA2dGhpcy51c2VVcGRhdGVcdThENEJcdTUwM0NcdTRFM0F0cnVlXHJcbiAgICAgKiBAcGFyYW0gZHQgXHU1RjUzXHU1MjREXHU1RTI3XHU0RTBFXHU0RTBBXHU0RTAwXHU1RTI3XHU3Njg0XHU1RUY2XHU4RkRGIC8gXHU3OUQyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgxMUFcdTY3MkNcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdTY3MDBcdTU0MEVcdTRFMDBcdTVFMjdcdTYyNjdcdTg4NENcdTVCOENcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG59IiwgIlx1RkVGRkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0QWN0b3IgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcbiAgICAvKipcclxuICAgICAqIFx1NEVBNFx1NEU5Mlx1NzI2OVx1NzY4NFx1NTczQVx1NjY2Rlx1NEUyRFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fT2JqZWN0OiBHYW1lT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBtX3RyaWdnZXI6IFRyaWdnZXI7XHJcbiAgICBwcml2YXRlIG1fZ3VpZDpzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX09iamVjdCA9IHRoaXMuZ2FtZU9iamVjdFxyXG4gICAgICAgIHRoaXMubV90cmlnZ2VyID0gPFRyaWdnZXI+dGhpcy5tX09iamVjdC5nZXRDaGlsZEJ5TmFtZShcIlRyaWdnZXJcIikgXHJcbiAgICAgICAgdGhpcy5tX2d1aWQgPSB0aGlzLm1fT2JqZWN0Lmd1aWQ7XHJcbiAgICAgICAgdGhpcy5tX3RyaWdnZXIub25FbnRlci5hZGQoZ28gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFx1NTIyNFx1NjVBRFx1OEZEQlx1NTE2NVx1NzhCMFx1NjQ5RVx1NTMzQVx1NTdERlx1NzY4NFx1NUJGOVx1OEM2MVx1NjYyRlx1NTQyNlx1NEUzQVx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICBpZiAoIShnbyBpbnN0YW5jZW9mIEdhbWVwbGF5LkNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx1NEUwRFx1NjYyRlx1ODlEMlx1ODI3Mlx1RkYwQ1x1NTA1Q1x1NkI2Mlx1NjI2N1x1ODg0Q1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgZ28gPSA8R2FtZXBsYXkuQ2hhcmFjdGVyPmdvXHJcbiAgICAgICAgICAgIGlmICghKGdvID09IGdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1OTc1RVx1NjcyQ1x1NTczMFx1NzNBOVx1NUJCNlx1NjNBN1x1NTIzNlx1NzY4NFx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoXCJjbGllbnRfc2hvd19pbnRlcmFjdF9idXR0b25cIiwgdGhpcy5tX2d1aWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1fdHJpZ2dlci5vbkxlYXZlLmFkZChnbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gXHU1MjI0XHU2NUFEXHU4RkRCXHU1MTY1XHU3OEIwXHU2NDlFXHU1MzNBXHU1N0RGXHU3Njg0XHU1QkY5XHU4QzYxXHU2NjJGXHU1NDI2XHU0RTNBXHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgIGlmICghKGdvIGluc3RhbmNlb2YgR2FtZXBsYXkuQ2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gXHU0RTBEXHU2NjJGXHU4OUQyXHU4MjcyXHVGRjBDXHU1MDVDXHU2QjYyXHU2MjY3XHU4ODRDXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ28gPSA8R2FtZXBsYXkuQ2hhcmFjdGVyPmdvXHJcbiAgICAgICAgICAgIGlmICghKGdvID09IGdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1OTc1RVx1NjcyQ1x1NTczMFx1NzNBOVx1NUJCNlx1NjNBN1x1NTIzNlx1NzY4NFx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoXCJjbGllbnRfaGlkZV9pbnRlcmFjdF9idXR0b25cIiwgdGhpcy5tX2d1aWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NEVBNFx1NEU5Mlx1NzI2OVx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSW5pdChndWlkIDogc3RyaW5nLCB0cmFuc2Zvcm0gOiBUcmFuc2Zvcm0pIDpzdHJpbmd7XHJcbiAgICAgICAgdGhpcy5tX09iamVjdCA9IEdhbWVPYmplY3Quc3Bhd24oe2d1aWQ6IGd1aWQsIHJlcGxpY2F0ZXMgOiB0cnVlLCB0cmFuc2Zvcm0gOiB0cmFuc2Zvcm19KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9ndWlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0NsaWVudCgpIDpib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHU1RjAwXHU1OUNCXHU0RUE0XHU0RTkyXHVGRjBDXHU3NTMxXHU1QkEyXHU2MjM3XHU3QUVGVUlcdTVDNDJcdTk3NjJcdTUzRDFcdThENzcqL1xyXG4gICAgcHVibGljIE9uSW50ZXJhY3QocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGlmICh0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSW50ZXJhY3RJbXBsZW1lbnQocGxheWVyLCBpbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5GdW5jdGlvbihDb3JlLlNlcnZlcilcclxuICAgIHByb3RlY3RlZCBJbnRlcmFjdEltcGxlbWVudChwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5Eb09uU2VydmVyKHBsYXllciwgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuRG9PbkNsaWVudChwbGF5ZXIsIGluZGV4KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1QkEyXHU2MjM3XHU3QUVGXHU4OUU2XHU1M0QxXHVGRjBDXHU1NzI4XHU1M0QxXHU3NTFGXHU0RUE0XHU0RTkyXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLkZ1bmN0aW9uKENvcmUuQ2xpZW50KVxyXG4gICAgcHJvdGVjdGVkIERvT25DbGllbnQocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTVCQTJcdTYyMzdcdTdBRUZcdTRFQTdcdTc1MUZcdTRFQTRcdTRFOTJcdUZGMENcdTczQTlcdTVCQjYnLCBwbGF5ZXIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NjcwRFx1NTJBMVx1N0FFRlx1ODlFNlx1NTNEMVx1RkYwQ1x1NTcyOFx1NTNEMVx1NzUxRlx1NEVBNFx1NEU5Mlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBAQ29yZS5GdW5jdGlvbihDb3JlLlNlcnZlcilcclxuICAgIHByb3RlY3RlZCBEb09uU2VydmVyKHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU2NzBEXHU1MkExXHU3QUVGXHU0RUE3XHU3NTFGXHU0RUE0XHU0RTkyXHVGRjBDXHU3M0E5XHU1QkI2JywgcGxheWVyKVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBQbGF5ZXJHdW5NZ3IgfSBmcm9tIFwiLi9QbGF5ZXJHdW5NZ3JcIlxyXG5pbXBvcnQgeyBDYW1lcmFDb250cm9sbGVyIH0gZnJvbSBcIi4vV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXJcIlxyXG5cclxuLyoqXHJcbiAqIFx1NjdBQVx1NjhCMFx1NkEyMVx1NTc1N1x1RkYxQVx1NzNBOVx1NUJCNlx1ODg0Q1x1NEUzQVx1NjgxMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXllckJlaGF2aW9yIHtcclxuICAgIHBsYXllcjogR2FtZXBsYXkuQ2hhcmFjdGVyXHJcbiAgICBzdGF0ZTogR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtXHJcbiAgICAvKipcdTRFMERcdTU0MENcdTgwNENcdTRFMUFcdTc2ODRcdTkxNERcdTkwMUYgKi9cclxuICAgIFNwZWVkU3RkQ29lZnQ6IG51bWJlclxyXG4gICAgLyoqXHU0RUJBXHU3MjY5XHU3OUZCXHU1MkE4XHU3MkI2XHU2MDAxXHU3Q0ZCXHU2NTcwICovXHJcbiAgICBjb2VmSW5lcnRpYTogbnVtYmVyXHJcbiAgICAvKipcdTRFQkFcdTcyNjlcdTUyQTBcdTkwMUZcdTVFQTZcdTdDRkJcdTY1NzAgKi9cclxuICAgIEluZXJQYXJhOiBudW1iZXJcclxuICAgIEd1bldlaWdodDogbnVtYmVyXHJcbiAgICBCZWhKdWRnZVRhYjogTWFwPHN0cmluZywgYm9vbGVhbj5cclxuICAgIGtleURvd25UYWI6IEFycmF5PHN0cmluZz5cclxuXHJcbiAgICAvLyBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEZcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxheWVyQmVoYXZpb3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoUGxheWVyQmVoYXZpb3IuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgUGxheWVyQmVoYXZpb3IuX2luc3RhbmNlID0gbmV3IFBsYXllckJlaGF2aW9yKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllckJlaGF2aW9yLl9pbnN0YW5jZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBCaW5kRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICAgIEV2ZW50cy5hZGRTZXJ2ZXJMaXN0ZW5lcihFdmVudENvbnN0LkNsaWVudEV2ZW50Lk9uRXF1aXBXZWFwb25FdmVudCwgdGhpcy5PbkVxdWlwV2VhcG9uRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICAgICAgRXZlbnRzLmFkZExvY2FsTGlzdGVuZXIoRXZlbnRDb25zdC5DbGllbnRFdmVudC5PbkVxdWlwV2VhcG9uRXZlbnQsIHRoaXMuT25FcXVpcFdlYXBvbkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgICAgIC8vRXZlbnRzLmFkZFNlcnZlckxpc3RlbmVyKEV2ZW50Q29uc3QuQ2xpZW50RXZlbnQuY2gsIHRoaXMuQ2hhbmdlT2NjRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBJbml0aWFsRGF0YVJlYWQoKSB7XHJcbiAgICAgICAgLyoqXHU3M0E5XHU1QkI2XHU4ODRDXHU0RTNBXHU1MjI0XHU2NUFEXHU1M0MyXHU2NTcwICovXHJcbiAgICAgICAgdGhpcy5CZWhKdWRnZVRhYiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPihbXHJcbiAgICAgICAgICAgIFtcIlJ1blwiLCBmYWxzZV0sXHJcbiAgICAgICAgICAgIFtcIkNyb3VjaFwiLCBmYWxzZV0sXHJcbiAgICAgICAgICAgIFtcIlF1aWNrbHlcIiwgZmFsc2VdLFxyXG4gICAgICAgICAgICBbXCJBaW1cIiwgZmFsc2VdLFxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5rZXlEb3duVGFiID0gW11cclxuICAgIH1cclxuICAgIHByaXZhdGUgSW5pdFBsYXllckF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubWF4SnVtcEhlaWdodCA9IDFcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU4OEM1XHU1OTA3XHU2N0FBXHU2NkY0XHU2NUIwXHU4REYzXHU4REMzXHU5MDFGXHU1RUE2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgT25FcXVpcFdlYXBvbkV2ZW50SGFuZGxlcigpIHtcclxuICAgICAgICBpZiAoUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1biA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMucGxheWVyLm1heEp1bXBIZWlnaHQgPSBcclxuICAgIH1cclxuICAgIHByaXZhdGUgQ2hhbmdlT2NjRXZlbnRIYW5kbGVyKG9jY0lkOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcdTczQTlcdTVCQjZcdTg4NENcdTRFM0FcdTUyMjRcdTY1QUQgKi9cclxuICAgIHByaXZhdGUgUGxheWVyQmVoYXZpb3JDaGFuZ2VkKF9iZWhhdmlvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQmVoSnVkZ2VUYWIuZ2V0KF9iZWhhdmlvcikpIHtcclxuICAgICAgICAgICAgdGhpcy5CZWhKdWRnZVRhYi5zZXQoX2JlaGF2aW9yLCBmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiLnNldChfYmVoYXZpb3IsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQmVoSnVkZ2VUYWIuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93blRhYi5wdXNoKGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHRoaXMua2V5RG93blRhYi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5RG93blRhYlswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUnVuJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5SdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleURvd25UYWIubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duVGFiLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDcm91Y2gnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5Dcm91Y2hSdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1F1aWNrbHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5RdWlja2x5UnVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdBaW0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5BaW1SdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlEb3duVGFiLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5RG93blRhYi5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUXVpY2tseSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlF1aWNrbHlDcm91Y2hSdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FpbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkFpbUNyb3VjaFJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2V5RG93blRhYiA9IFtdXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFBsYXllck1vZGVDaGFuZ2VkKG1vZGVOYW1lOiBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0pIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbW9kZU5hbWVcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIERpZmZEaXJlTW92ZW1lbnQoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU2NDQ3XHU2NzQ2XHU3Njg0XHU0RjREXHU3OUZCXHU1NzUwXHU2ODA3XHU1MjREXHU0RTAwXHU1RTI3XHU0RTNBZGlyZWN0aW9uRmFjdG9yLFx1NTQwRVx1NEUwMFx1NUUyN1x1NEUzQVx1NTM5Rlx1NzBCOVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBVcGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuRGlmZkRpcmVNb3ZlbWVudChkdClcclxuICAgICAgICB0aGlzLkNoYXJhY3RlclN0YXJ0SW5lcnRpYSgpXHJcbiAgICAgICAgLy9cdTY2RjRcdTY1QjBcdTkwMUZcdTVFQTZcclxuICAgICAgICBsZXQgc3BkOiBudW1iZXJcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5BaW1Dcm91Y2hSdW46XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkFpbVJ1bjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQ3JvdWNoUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5RdWlja2x5Q3JvdWNoUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5RdWlja2x5UnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLm1heFdhbGtTcGVlZCA9IHNwZCAqIHRoaXMuU3BlZWRTdGRDb2VmdCAqIHRoaXMuY29lZkluZXJ0aWEgKiB0aGlzLkd1bldlaWdodCAqIDFcclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIENoYXJhY3RlclN0YXJ0SW5lcnRpYSgpIHtcclxuICAgICAgICBpZihQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuKXtcclxuICAgICAgICAgICAgdGhpcy5HdW5XZWlnaHQgPSAxIC8gUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1bi5fY29uZmlnRGF0YS53ZWlnaHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFBsYXllckp1bXAoKSB7XHJcbiAgICAgICAgLy9cdTczQTlcdTVCQjZcdTVGNTNcdTUyNERcdTRFMERcdTU3MjhcdThERjNcdThEQzNcdTcyQjZcdTYwMDFcdTVFNzZcdTRFMTRcdTZDQTFcdTY3MDlcdTZCN0JcdTRFQTFcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuaXNKdW1waW5nKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmlzQ3JvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jcm91Y2goZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllckJlaGF2aW9yQ2hhbmdlZChcIkNyb3VjaFwiKVxyXG4gICAgICAgICAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5Dcm91Y2goKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFBsYXllckd1bk1nci5JbnN0YW5jZS5jdXJHdW4gJiYgUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1bi5faXNab29tSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuLk1lY2hhbmljYWxBaW1TdG9wKCkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQbGF5ZXJDcm91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5QbGF5ZXJCZWhhdmlvckNoYW5nZWQoXCJDcm91Y2hcIilcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuaXNDcm91Y2hpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jcm91Y2godHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY3JvdWNoKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLkNyb3VjaCgpXHJcbiAgICB9XHJcbiAgICBDcm91Y2hSZXNldCgpe1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLmlzQ3JvdWNoaW5nKXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBJbml0c2V0T3JSZXNldCgpe1xyXG4gICAgICAgIHRoaXMuQ3JvdWNoUmVzZXQoKVxyXG5cclxuICAgICAgICB0aGlzLkluaXRpYWxEYXRhUmVhZCgpXHJcbiAgICAgICAgdGhpcy5Jbml0UGxheWVyQXR0cmlidXRlcygpXHJcbiAgICAgICAgdGhpcy5QbGF5ZXJCZWhhdmlvckNoYW5nZWQoXCJSdW5cIilcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb24vV2VhcG9uQWNjZXNzb3J5QmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkFtbW9CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbi9XZWFwb25CYXNlQ2xzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJHdW5NZ3Ige1xyXG4gICAgcGxheWVyOkdhbWVwbGF5LkNoYXJhY3RlclxyXG5cclxuICAgIGN1ckd1bjpXZWFwb25CYXNlQ2xzXHJcbiAgICBtYWluR3VuOldlYXBvbkJhc2VDbHNcclxuICAgIGRlcHV0eUd1bjpXZWFwb25CYXNlQ2xzXHJcbiAgICBtaW5pR3VuOldlYXBvbkJhc2VDbHNcclxuICAgIHByb3AxOldlYXBvbkJhc2VDbHNcclxuICAgIHByb3AyOldlYXBvbkJhc2VDbHNcclxuXHJcbiAgICBwdWJsaWMgaGFkQWNjZXNzb3J5TGlzdDpSZWNvcmQ8c3RyaW5nLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzPlxyXG4gICAgcHVibGljIGhhZEFtbW9MaXN0OlJlY29yZDxzdHJpbmcsIFdlYXBvbkFtbW9CYXNlQ2xzPlxyXG5cclxuICAgIGNhblVwZGF0ZUd1biA9IHRydWVcclxuICAgIC8vIFx1NTM1NVx1NEY4Qlx1NkEyMVx1NUYwRlxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQbGF5ZXJHdW5NZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoUGxheWVyR3VuTWdyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFBsYXllckd1bk1nci5faW5zdGFuY2UgPSBuZXcgUGxheWVyR3VuTWdyKEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQbGF5ZXJHdW5NZ3IuX2luc3RhbmNlXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6R2FtZXBsYXkuQ2hhcmFjdGVyKXtcclxuICAgICAgICAvL1x1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5PbmUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oMSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5Ud28sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oMilcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5UaHJlZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkZvdXIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oNClcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5GaXZlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuWCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Ecm9wV2VhcG9uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5CLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2hhbmdlU2hvb3RNb2RlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5MZWZ0QWx0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBXHU5RjIwXHU2ODA3XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlJpZ2h0TW91c2VCdXR0b24sICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTUyMjRcdTY1QURcdTg4NDBcdTkxQ0ZcclxuXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmN1ckd1bil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckd1bi5NZWNoYW5pY2FsQWltU3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuUiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NTIyNFx1NjVBRFx1ODg0MFx1OTFDRlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VyR3VuKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyR3VuLkxvYWRNYWdhemluZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBJbnB1dFV0aWwub25LZXlQcmVzcyhLZXlzLlIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5VXAoS2V5cy5MZWZ0QWx0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU0RTBEXHU2NjNFXHU3OTNBXHU5RjIwXHU2ODA3XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5VXAoS2V5cy5MZWZ0QWx0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU1QzFEXHU4QkQ1XHU3OUJCXHU1RjAwXHU3Nzg0XHU1MUM2XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckd1bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJHdW4uTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBTd2l0Y2hXZWFwb24oaW5kZXg6bnVtYmVyKXtcclxuXHJcbiAgICB9XHJcbiAgICBDaGFuZ2VTaG9vdE1vZGUoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIERyb3BXZWFwb24oKXtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIjtcclxuaW1wb3J0IHsgVHdlZW5VdGlsIH0gZnJvbSBcIi4uL1Rvb2wvVHdlZW5VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQ29udHJvbGxlcntcclxuICAgIG1fY2FtZXJhOiBDYW1lcmFTeXN0ZW1cclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIG9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9jdXJyZW50SGVpZ2h0IDogbnVtYmVyXHJcbiAgICBtX3N1cHBvc2VkSGVpZ2h0IDogbnVtYmVyXHJcbiAgICBkZWx0YU9mZnNldCA6IFZlY3RvclxyXG4gICAgZmllbGRPZlZpZXcgOiBudW1iZXJcclxuICAgIGRlbHRhVGhldGEgOiBudW1iZXJcclxuICAgIGdhbW1hIDogbnVtYmVyXHJcbiAgICBkaXN0YW5jZSA6IG51bWJlclxyXG4gICAgZGVsdGFQaHkgOiBudW1iZXJcclxuICAgIHNoYWtlVGltZSA6IG51bWJlclxyXG4gICAgc2hha2VTdHJlbnRoIDogbnVtYmVyXHJcblxyXG4gICAgY3JvdWNoQ29udHJvbGxlciA6IFR3ZWVuVXRpbFxyXG4gICAgU2hha2VDb250cm9sbGVyIDogVHdlZW5VdGlsXHJcbiAgICAvLyBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEZcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FtZXJhQ29udHJvbGxlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChDYW1lcmFDb250cm9sbGVyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIENhbWVyYUNvbnRyb2xsZXIuX2luc3RhbmNlID0gbmV3IENhbWVyYUNvbnRyb2xsZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQ2FtZXJhQ29udHJvbGxlci5faW5zdGFuY2VcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JvdWNoQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwLjRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxIDogbnVtYmVyLCB0MiA6IG51bWJlciwgdDMgOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZEhlaWdodCA9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuY2Fwc3VsZUhhbGZIZWlnaHQgKiAyXHJcbiAgICAgICAgICAgICAgICBsZXQgZmluID0gdGhpcy5tX2N1cnJlbnRIZWlnaHQgKyAxMCAqIHQzICogKHRoaXMubV9zdXBwb3NlZEhlaWdodCAtIHRoaXMubV9jdXJyZW50SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRIZWlnaHQgPSBmaW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRIZWlnaHQgPSB0aGlzLm1fc3VwcG9zZWRIZWlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLlNoYWtlQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWtlVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDEgOiBudW1iZXIsIHQyIDogbnVtYmVyLCB0MyA6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YU9mZnNldCA9IG5ldyBWZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aCksXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aCksXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aClcclxuICAgICAgICAgICAgICAgICkubXVsdGlwbHkodDEgLyB0MilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YU9mZnNldCA9IG5ldyBWZWN0b3IoMCwgMCwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFVwZGF0ZShkdDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5jcm91Y2hDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuY3JvdWNoQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5TaGFrZUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5jcm91Y2hDb250cm9sbGVyLCBkdClcclxuICAgICAgICBpZih0aGlzLmRlbHRhUGh5ICE9IDApe1xyXG4gICAgICAgICAgICAvL0dhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIubG9va0F0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgQ3JvdWNoKCl7XHJcbiAgICAgICAgdGhpcy5jcm91Y2hDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5jcm91Y2hDb250cm9sbGVyKVxyXG4gICAgICAgIGlmKHRoaXMuZ3VuICYmIHRoaXMuZ3VuLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICB0aGlzLmd1bi5fY2FtZXJhQ29udHJvbC5Dcm91Y2goKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFNldE9mZnNldCgpe1xyXG4gICAgICAgIHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0ubG9jYXRpb24gPSB0aGlzLm9mZnNldC5hZGQoVmVjdG9yLnVwLm11bHRpcGx5KHRoaXMubV9jdXJyZW50SGVpZ2h0KSkuYWRkKHRoaXMuZGVsdGFPZmZzZXQpXHJcbiAgICB9XHJcbiAgICBDYW1lcmFTaGFrZShzdHJlbmd0aDpudW1iZXIsIHRpbWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnNoYWtlU3RyZW50aCA9IHN0cmVuZ3RoXHJcbiAgICAgICAgdGhpcy5zaGFrZVRpbWUgPSB0aW1lXHJcbiAgICAgICAgdGhpcy5TaGFrZUNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLlNoYWtlQ29udHJvbGxlcilcclxuICAgIH1cclxufSIsICJpbXBvcnQgeyBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQWNjZXNzb3J5QmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25DYW1lcmFDbHMgfSBmcm9tIFwiLi9XZWFwb25DYW1lcmFDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uTWFnYXppbmVDbHMgfSBmcm9tIFwiLi9XZWFwb25NYWdhemluZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25SZWNvaWxDbHMgfSBmcm9tIFwiLi9XZWFwb25SZWNvaWxDbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgV2VhcG9uVG9vbHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBJbml0V2VhcG9uQ29uZmlnKF93ZWFwb246V2VhcG9uQmFzZUNscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbk1hZ2F6aW5lQ29uZmlnKF9tYWdhemluZTpXZWFwb25NYWdhemluZUNscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvblJlY29pbENvbmZpZyhfcmVjb2lsOldlYXBvblJlY29pbENscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbkNhbWVyYUNvbmZpZyhfY2FtZXJhOldlYXBvbkNhbWVyYUNscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbkFjY2Vzc29yeUNvbmZpZyhfYWNjZXNzb3J5OldlYXBvbkFjY2Vzc29yeUJhc2VDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNoYWtlKF9zdHJlbmd0aDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiBfc3RyZW5ndGggKiAoTWF0aC5yYW5kb20oKSAtIDAuNSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1QzA2XHU0RTAwXHU0RTJBXHU1NDExXHU5MUNGXHVGRjBDXHU2MzA5XHU3MTY3XHU3RUQ5XHU1QjlBXHU3Njg0XHU2NUNCXHU4RjZDXHU4Rjc0XHVGRjBDXHU2NUNCXHU4RjZDXHU2MzA3XHU1QjlBXHU1RjI3XHU1RUE2XHU0RTRCXHU1NDBFXHU1Rjk3XHU1MjMwXHU0RTAwXHU0RTJBXHU2NUIwXHU3Njg0XHU1NDExXHU5MUNGXHJcbiAgICAgKiBAcGFyYW0gc291cmNlIFx1NkU5MFx1NTQxMVx1OTFDRlxyXG4gICAgICogQHBhcmFtIGF4aXMgXHU2NUNCXHU4RjZDXHU4Rjc0XHJcbiAgICAgKiBAcGFyYW0gYW5nbGUgXHU2NUNCXHU4RjZDXHU4OUQyXHU1RUE2XHU1MDNDXHJcbiAgICAgKiBAcmV0dXJucyBcdTdFRDNcdTY3OUNcdTU0MTFcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFJvdGF0ZVZlY3Rvcihzb3VyY2U6VmVjdG9yLCBheGlzIDogVmVjdG9yLCBhbmdsZSA6IG51bWJlcik6VmVjdG9ye1xyXG4gICAgICAgIGxldCBybyA9IHNvdXJjZS50b1JvdGF0aW9uKClcclxuICAgICAgICBsZXQgcXUgPSByby50b1F1YXRlcm5pb24oKVxyXG4gICAgICAgIGxldCBvdXRlciA6IFF1YXRlcm5pb25cclxuICAgICAgICBhbmdsZSA9IGFuZ2xlIFxyXG4gICAgICAgIFF1YXRlcm5pb24uZnJvbUF4aXNBbmdsZShheGlzLCBhbmdsZSwgb3V0ZXIpXHJcbiAgICAgICAgbGV0IHJlcyA6IFZlY3RvclxyXG4gICAgICAgIFF1YXRlcm5pb24ubXVsdGlwbHlWZWN0b3Ioc291cmNlLCBvdXRlciwgcmVzKVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU4RjkzXHU1MUZBXHU0RTA5XHU1MDBEXHU2ODA3XHU1MUM2XHU1REVFXHU0RTNBMSBcdTc2ODRcdTUyMDZcdTVFMDNcdTU3MjhcdUZGMDgtMVx1RkYwQyAxXHVGRjA5XHU0RTRCXHU5NUY0XHU3Njg0XHU2QjYzXHU2MDAxXHU1MjA2XHU1RTAzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHYXVzc1JhbmRvbSgpIDogbnVtYmVye1xyXG4gICAgICAgIGxldCB1ID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGxldCB2ID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGxldCB6ID0gTWF0aC5zcXJ0KC0yICogTWF0aC5sb2codSkpICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB2KVxyXG4gICAgICAgIHogPSAoIHogKyAzKSAvIDZcclxuICAgICAgICB6ID0geiAqIDIgLSAxXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHopID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gR2F1c3NSYW5kb20oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gelxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdBOTdcdTUxRkRcdTY1NzBcdUZGMENcdTU3MjhcdTVDMEZcdTRFOEVBXHU2NUY2XHU0RkREXHU2MzAxXHU1MzlGXHU1MDNDXHVGRjBDXHU1NzI4XHU1OTI3XHU0RThFQVx1NjVGNlx1OTAxMFx1NkUxMFx1OEQ4Qlx1OEZEMVx1NEU4RTFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFzeW1wdG90ZSh4IDogbnVtYmVyLCBBIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBBID0gQSB8fCAwLjRcclxuICAgICAgICBpZihBIDw9IDAgfHwgQSA+PSAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih4IDwgMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ggc2hvdWxkIGJlIHBvc2l0aXZlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeCA8PSBBKXtcclxuICAgICAgICAgICAgcmV0dXJuIHhcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDEgKyAoMyAqIEEgKiBBIC0gMiAqIEEpIC8geCArIChBICogQSAtIDIgKiBBICogQSAqIEEpIC8geCAvIHhcclxuICAgIH1cclxuICAgIC8qKlx1NTNDQ1x1OEZCOVx1NTNFRlx1NzUyOFx1NzY4NFx1N0E5N1x1NTFGRFx1NjU3MChcdTY2NkVcdTkwMUFcdTdBOTdcdTUxRkRcdTY1NzBcdTc2ODRcdTU5NDdcdTVFRjZcdTYyRDMpICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXN5bXRvdGVCaSh4IDogbnVtYmVyLCBBIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBBID0gQSB8fCAwLjRcclxuICAgICAgICBpZihBIDw9IDAgfHwgQSA+PSAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih4ID49IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gQXN5bXB0b3RlKHgsIEEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtQXN5bXB0b3RlKHgsIEEpXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gUmFuZG9tUm90YXRlKGRpcmVjdGlvbjogVmVjdG9yLCBtYXhTcHJlYWRBbmdsZTogbnVtYmVyKTpWZWN0b3Ige1xyXG4gICAgICAgIC8vIFx1NzUxRlx1NjIxMFx1OTY4Rlx1NjczQVx1NjI2OVx1NjU2M1x1ODlEMlxyXG4gICAgICAgIGNvbnN0IHNwcmVhZEFuZ2xlID0gR2F1c3NSYW5kb20oKSAqIG1heFNwcmVhZEFuZ2xlO1xyXG5cclxuICAgICAgICAvLyBcdTc1MUZcdTYyMTBcdTk2OEZcdTY3M0FcdTY1Q0JcdThGNkNcdTg5RDJcdTVFQTZcclxuICAgICAgICBjb25zdCByYW5kb21Sb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcclxuXHJcbiAgICAgICAgLy8gXHU4QkExXHU3Qjk3XHU5NjhGXHU2NzNBXHU3MEI5XHU3Njg0XHU1NzUwXHU2ODA3XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguc2luKHNwcmVhZEFuZ2xlKSAqIE1hdGguY29zKHJhbmRvbVJvdGF0aW9uKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5jb3Moc3ByZWFkQW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IHogPSBNYXRoLnNpbihzcHJlYWRBbmdsZSkgKiBNYXRoLnNpbihyYW5kb21Sb3RhdGlvbik7XHJcblxyXG4gICAgICAgIC8vIFx1NUMwNlx1OTY4Rlx1NjczQVx1NzBCOVx1NjVDQlx1OEY2Q1x1NTIzMFx1NjMwN1x1NUI5QVx1NjVCOVx1NTQxMVxyXG4gICAgICAgIGNvbnN0IGRpclogPSBkaXJlY3Rpb24uejtcclxuICAgICAgICBjb25zdCByb3RhdGVNYXRyaXggPSBbXHJcbiAgICAgICAgICAgIFtNYXRoLmNvcyhkaXJaKSwgLU1hdGguc2luKGRpclopLCAwXSxcclxuICAgICAgICAgICAgW01hdGguc2luKGRpclopLCBNYXRoLmNvcyhkaXJaKSwgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAxXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdGF0ZWRYID0gcm90YXRlTWF0cml4WzBdWzBdICogeCArIHJvdGF0ZU1hdHJpeFswXVsxXSAqIHkgKyByb3RhdGVNYXRyaXhbMF1bMl0gKiB6O1xyXG4gICAgICAgIGNvbnN0IHJvdGF0ZWRZID0gcm90YXRlTWF0cml4WzFdWzBdICogeCArIHJvdGF0ZU1hdHJpeFsxXVsxXSAqIHkgKyByb3RhdGVNYXRyaXhbMV1bMl0gKiB6O1xyXG4gICAgICAgIGNvbnN0IHJvdGF0ZWRaID0gcm90YXRlTWF0cml4WzJdWzBdICogeCArIHJvdGF0ZU1hdHJpeFsyXVsxXSAqIHkgKyByb3RhdGVNYXRyaXhbMl1bMl0gKiB6O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcihyb3RhdGVkWCwgcm90YXRlZFksIHJvdGF0ZWRaKTtcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBY2NlbGVyYXRlU2NhbGFyKHggOiBudW1iZXIsIF9saW5lYXJSYW5nZSA6IG51bWJlciwgX21heFNjYWxlIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBpZiAoX21heFNjYWxlIDw9IDEgfHwgX2xpbmVhclJhbmdlIDw9IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignXHU2NzAwXHU1OTI3XHU2QkQ0XHU0RjhCXHU1RkM1XHU5ODdCXHU1OTI3XHU0RThFMSwgXHU3RUJGXHU2MDI3XHU4MzAzXHU1NkY0XHU1RkM1XHU5ODdCXHU1OTI3XHU0RThFMCcpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NEY3Rlx1NzUyOFx1NTNDQ1x1OEZCOVx1NzY4NFx1NTFGRFx1NjU3MFx1NEVFNVx1NjUyRlx1NjMwMVx1OEQxRlx1NTAzQycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4IDw9IF9saW5lYXJSYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIH1lbHNlIGlmKHg+PV9tYXhTY2FsZSAqIF9saW5lYXJSYW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBfbWF4U2NhbGVcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLyBfbGluZWFyUmFuZ2UgKiB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEJpQWNjZWxlcmF0ZVNjYWxhcih4IDogbnVtYmVyLCBfbGluZWFyUmFuZ2UgOiBudW1iZXIsIF9tYXhTY2FsZSA6IG51bWJlcil7XHJcbiAgICAgICAgbGV0IHNpZ24gPSB4ID49IDAgPyAxIDogLTFcclxuICAgICAgICByZXR1cm4gQWNjZWxlcmF0ZVNjYWxhcihzaWduICogeCwgX2xpbmVhclJhbmdlLCBfbWF4U2NhbGUpXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVDdXJ2ZShfc3RhcnRQb2ludCA6IFZlY3RvciwgX3N0YXJ0VmVjIDogVmVjdG9yLCBfbGVuZ3RoIDogbnVtYmVyLCBfZHQgOiBudW1iZXIsIF9ncmF2aXR5IDogbnVtYmVyKXtcclxuICAgICAgICBfZ3Jhdml0eSA9IF9ncmF2aXR5ID8gX2dyYXZpdHkgOiAxXHJcbiAgICAgICAgbGV0IGN1cnZlOiBWZWN0b3JbXVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zWCA9IG5ldyBWZWN0b3IyKF9zdGFydFBvaW50LngsIF9zdGFydFBvaW50LnopLmFkZChuZXcgVmVjdG9yMihfc3RhcnRWZWMueCwgX3N0YXJ0VmVjLnopKS5tdWx0aXBseShfZHQgKiBpbmRleClcclxuICAgICAgICAgICAgbGV0IFBvc1kgPSBfc3RhcnRWZWMueSAqIF9kdCAqIGluZGV4IC0gMC41ICogOS44ICogX2dyYXZpdHkgKiAoX2R0ICogaW5kZXgpICogKF9kdCAqIGluZGV4KSArIF9zdGFydFBvaW50LnlcclxuICAgICAgICAgICAgY3VydmUucHVzaChuZXcgVmVjdG9yKHBvc1gueCwgUG9zWSwgcG9zWC55KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnZlXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0QXR0ZW51YXRpb25CeUd1bklkKF90eXBlOm51bWJlciwgX2d1bjpXZWFwb25CYXNlQ2xzLCBfZGlzOm51bWJlcik6bnVtYmVye1xyXG4gICAgICAgIGlmIChfdHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU1QjUwXHU1RjM5XHU5OERFXHU4ODRDXHU4REREXHU3OUJCXHU0RjI0XHU1QkIzXHU4ODcwXHU1MUNGXHJcbiAgICAgICAgICAgIGxldCBkaXNBdHRlbnVhdGlvbiA9IF9ndW4uX2NvbmZpZ0RhdGEuZGFtYWdlQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgbGV0IGxlbiA9IGRpc0F0dGVudWF0aW9uLmxlbmd0aFxyXG4gICAgICAgICAgICBpZihsZW4gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPj0gMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkaXNBdHRlbnVhdGlvbltpXS5EaXN0YW5jZSA8PSBfZGlzKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzQXR0ZW51YXRpb25baV0uQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH0gZWxzZSBpZihfdHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU3MjA2XHU3MEI4XHU4MzAzXHU1NkY0XHU0RjI0XHU1QkIzXHU4ODcwXHU1MUNGXHJcbiAgICAgICAgICAgIGxldCBleHBsb3Npb25BdHRlbnVhdGlvbiA9IF9ndW4uX2NvbmZpZ0RhdGEuZXhwbG9zaW9uRGFtYWdlQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgbGV0IGxlbiA9IGV4cGxvc2lvbkF0dGVudWF0aW9uLmxlbmd0aFxyXG4gICAgICAgICAgICBpZihsZW4gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPj0gMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZihleHBsb3Npb25BdHRlbnVhdGlvbltpXS5EaXN0YW5jZSA8PSBfZGlzKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwbG9zaW9uQXR0ZW51YXRpb25baV0uQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gX3NlbGYgXHU4MUVBXHU1REYxXHU3Njg0XHU4OUQyXHU4MjcyICBcclxuICAgICAqIEBwYXJhbSBfaXNIaXRTZWxmIFx1NjYyRlx1NTQyNlx1NTNFRlx1NEVFNVx1NTQ3RFx1NEUyRFx1ODFFQVx1NURGMVxyXG4gICAgICogQHBhcmFtIF9pc0hpdEZyaWVuZCBcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTU0N0RcdTRFMkRcdTk2MUZcdTUzQ0JcclxuICAgICAqIEBwYXJhbSBfZGlzIFx1NTM0QVx1NUY4NFxyXG4gICAgICogQHBhcmFtIF9hbmdsZSBcdTg5RDJcdTVFQTZcclxuICAgICAqIEBwYXJhbSBfcG9zIFx1NjhDMFx1NkQ0Qlx1NzY4NFx1NTM5Rlx1NzBCOVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRFbmVteUJ5UmFuZ2UoX3NlbGY6Q2hhcmFjdGVyLCBcclxuICAgICAgICBfaXNIaXRTZWxmOmJvb2xlYW4sIFxyXG4gICAgICAgIF9pc0hpdEZyaWVuZDpib29sZWFuLCBcclxuICAgICAgICBfZGlzOm51bWJlciwgXHJcbiAgICAgICAgX2FuZ2xlOm51bWJlciwgXHJcbiAgICAgICAgX3BvczpWZWN0b3IpOkNoYXJhY3Rlcltde1xyXG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA6IENoYXJhY3RlcltdXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyc1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldFdlYXBvbkFtbW9JZChfd2VhcG9uSWQgOiBudW1iZXIpIDogbnVtYmVye1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBjbGFzcyBUd2VlblV0aWx7XHJcblxyXG4gICAgU3RhcnRGdW5jdGlvbiA6ICh0OlR3ZWVuVXRpbCk9PnZvaWRcclxuICAgIFVwZGF0ZUZ1bmN0aW9uIDogKHQ6VHdlZW5VdGlsLCBkdCA6IG51bWJlcik9PnZvaWRcclxuICAgIFN0b3BGdW5jdGlvbiA6ICh0OlR3ZWVuVXRpbCk9PnZvaWRcclxuXHJcbiAgICB0b3RhbFRpbWU6bnVtYmVyXHJcbiAgICB0aW1lOm51bWJlclxyXG5cclxuICAgIGN1c3RvbURhdGEgOiBNYXA8c3RyaW5nLCBhbnk+XHJcbiAgICBpc1BsYXlpbmcgOiBib29sZWFuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2V0VG90YWxUaW1lOigpID0+IG51bWJlciwgXHJcbiAgICAgICAgdXBkYXRlIDogKHRpbWUxOm51bWJlcix0aW1lMjpudW1iZXIsdGltZTM6bnVtYmVyKT0+dm9pZCxcclxuICAgICAgICBjYWxsYmFjazooKT0+dm9pZCxcclxuICAgICAgICBzdGFydD86KCk9PnZvaWQpe1xyXG4gICAgICAgICAgICBzdGFydCA9IHN0YXJ0IHx8IGZ1bmN0aW9uKCkge31cclxuICAgICAgICAgICAgdGhpcy5TdGFydEZ1bmN0aW9uID0gKHQ6VHdlZW5VdGlsKT0+e1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgdC50b3RhbFRpbWUgPSBnZXRUb3RhbFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgdC50aW1lID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVGdW5jdGlvbiA9ICh0OlR3ZWVuVXRpbCwgZHQgOiBudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0LnRpbWUgKz0gZHRcclxuICAgICAgICAgICAgICAgIGlmKHQudGltZSA+PSB0LnRvdGFsVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5TdG9wRnVuY3Rpb24odClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZSh0LnRpbWUsdC50b3RhbFRpbWUsdC50aW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU3RvcEZ1bmN0aW9uID0gKHQ6VHdlZW5VdGlsKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNQbGF5aW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIlxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHN7XHJcbiAgICBwcml2YXRlIHdlYXBvbkFjY2Vzc29yeTogR2FtZU9iamVjdFxyXG4gICAgcHVibGljIGlkOm51bWJlclxyXG4gICAgcHJpdmF0ZSB1dWlkOiBzdHJpbmdcclxuICAgIHByaXZhdGUgYXR0YWNoZWRXZWFwb24gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBwdWJsaWMgY29uZmlnRGF0YTogR2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeUNvbmZpZ0RhdGFcclxuICAgIGNvbnN0cnVjdG9yKF9vYmo6IEdhbWVPYmplY3Qpe1xyXG4gICAgICAgIHRoaXMud2VhcG9uQWNjZXNzb3J5ID0gX29ialxyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRXZWFwb24gPSBudWxsXHJcbiAgICAgICAgV2VhcG9uVG9vbC5Jbml0V2VhcG9uQWNjZXNzb3J5Q29uZmlnKHRoaXMpXHJcbiAgICAgICAgdGhpcy5QaWNrU291bmQoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZShkdDpudW1iZXIpe1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBFcXVpcFRvV2VhcG9uKHdlYXBvbjogV2VhcG9uQmFzZUNscyl7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZFdlYXBvbiA9IHdlYXBvblxyXG4gICAgfVxyXG4gICAgcHVibGljIFVuRXF1aXBGcm9tV2VhcG9uKCl7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZFdlYXBvbiA9IG51bGxcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZXN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFBpY2tTb3VuZCgpe1xyXG5cclxuICAgIH1cclxufSIsICJleHBvcnQgY2xhc3MgV2VhcG9uQW1tb0Jhc2VDbHN7XHJcbiAgICBwdWJsaWMgY291bnQgOm51bWJlclxyXG4gICAgcHJpdmF0ZSBpZCA6bnVtYmVyXHJcbiAgICBwcml2YXRlIG9yZGVyIDpudW1iZXJcclxuICAgIHByaXZhdGUgcGlja1NvdW5kIDpzdHJpbmdcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyIDogQ2hhcmFjdGVyXHJcblxyXG4gICAgY29uc3R1cmN0b3IoaWQ6bnVtYmVyLGNvdW50Om51bWJlcixjaGFyYWN0ZXIgOiBDaGFyYWN0ZXIpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudFxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyXHJcblxyXG4gICAgICAgIHRoaXMuUGlja1NvdW5kKClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFBsYXllclBpY2tBbW1vKHdlYXBvbkFtbW8gOiBHYW1lT2JqZWN0LCBjb3VudCA6IG51bWJlcik6dm9pZHtcclxuICAgICAgICBpZih3ZWFwb25BbW1vKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gY291bnRcclxuICAgICAgICB0aGlzLlBpY2tTb3VuZCgpXHJcbiAgICB9ICAgICAgXHJcbiAgICBwcml2YXRlIFBsYXllckRyb3BBbW1vKGNvdW50OiBudW1iZXIpOmJvb2xlYW57XHJcbiAgICAgICAgbGV0IGlzRHJvcEFsbCA9IGZhbHNlXHJcbiAgICAgICAgaWYodGhpcy5jb3VudCA8PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvdW50ID49IHRoaXMuY291bnQpe1xyXG4gICAgICAgICAgICBpc0Ryb3BBbGwgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgLT0gY291bnRcclxuICAgICAgICBpZihpc0Ryb3BBbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNEcm9wQWxsXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUGxheWVyQ29uc3VtZUFtbW8oY291bnQgOiBudW1iZXIpOm51bWJlcntcclxuICAgICAgICBpZih0aGlzLmNvdW50IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMFxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3VudCA+IHRoaXMuY291bnQpe1xyXG4gICAgICAgICAgICBjb3VudCA9IHRoaXMuY291bnRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudCAtPSBjb3VudFxyXG4gICAgICAgIHJldHVybiBjb3VudFxyXG4gICAgfVxyXG4gICAgcHVibGljIFNldENvdW50KGNvdW50IDogbnVtYmVyKTp2b2lke1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBQaWNrU291bmQoKTp2b2lke1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uQW5pbWF0aW9uQ2xze1xyXG4gICAgZ3VuIDogV2VhcG9uQmFzZUNsc1xyXG4gICAgaWQgOiBudW1iZXJcclxuICAgIHBsYXllciA6IENoYXJhY3RlclxyXG4gICAgcmlnaHRBcm1Qb3NpdGlvbiA6IFZlY3RvclxyXG4gICAgbGVmdEFybVBvc2l0aW9uIDogVmVjdG9yXHJcbiAgICBjb25maWcgOiBHYW1lQ29uc3QuV2VhcG9uQW5pbWF0aW9uQ29uZmlnRGF0YVxyXG4gICAgc2hvdWxkZXJSYXlNaW5EaXN0YW5jZSA6IG51bWJlclxyXG4gICAgbm9TaG9vdGluZ1N0YXRlIDogYm9vbGVhblxyXG4gICAgbGF5ZXIgOiBudW1iZXJcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZShkdDpudW1iZXIpe1xyXG4gICAgICAgIC8vXHU1MkEwXHU5MDFGXHU4REQxXHU3MkI2XHU2MDAxXHU0RTBCXHU2NTM2XHU2N0FBLFx1NTE3Nlx1NEVENlx1NzJCNlx1NjAwMVx1NkI2M1x1NUUzOFx1NjMwMVx1NjdBQVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlc3RydWN0b3IoKXtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgeyBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQWNjZXNzb3J5QmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkFuaW1hdGlvbkNscyB9IGZyb20gXCIuL1dlYXBvbkFuaW1hdGlvbkNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkNhbWVyYUNscyB9IGZyb20gXCIuL1dlYXBvbkNhbWVyYUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkdVSUNscyB9IGZyb20gXCIuL1dlYXBvbkdVSUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbk1hZ2F6aW5lQ2xzIH0gZnJvbSBcIi4vV2VhcG9uTWFnYXppbmVDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25SZWNvaWxDbHMgfSBmcm9tIFwiLi9XZWFwb25SZWNvaWxDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Tb3VuZENscyB9IGZyb20gXCIuL1dlYXBvblNvdW5kQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIlxyXG50eXBlIEZpcmVNb2RlRW51bSA9IEdhbWVDb25zdC5GaXJlTW9kZUVudW1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWFwb25CYXNlQ2xzIHtcclxuXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTk4ODRcdTUyMzZcdTRGNTMqL1xyXG4gICAgcHVibGljIHByZWZhYjogR2FtZU9iamVjdFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY3QUFcdTY4QjBcdTkxNERcdTdGNkVJRFxyXG4gICAgICovXHJcbiAgICBpZDogbnVtYmVyXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTdFRDFcdTVCOUFcdTc2ODRcdTk1MUFcdTcwQjkgKi9cclxuICAgIHB1YmxpYyByb290OiBHYW1lT2JqZWN0XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTYyNDBcdTVDNUVcdTc2ODRcdTczQTlcdTVCQjZcdTg5RDJcdTgyNzIgKi9cclxuICAgIHB1YmxpYyBjaGFyYWN0ZXI6IENoYXJhY3RlclxyXG4gICAgLyoqXHU2N0FBXHU1M0UzXHU0RjREXHU3RjZFXHU3MEI5ICovXHJcbiAgICBwcml2YXRlIG11enpsZU9iajogR2FtZU9iamVjdFxyXG4gICAgLyoqXHU2N0FBXHU3QkExXHU2NUI5XHU1NDExICovXHJcbiAgICBwcml2YXRlIGRpcjogVmVjdG9yXHJcbiAgICAvKipcdTYyOTVcdTVGMzlcdTUzRTNcdTVCRjlcdThDNjEgKi9cclxuICAgIHByaXZhdGUgdG9zczogR2FtZU9iamVjdFxyXG5cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NjYyRlx1NTQyNlx1ODhBQlx1NjMwMVx1NjcwOSAqL1xyXG4gICAgX2lzZHJhdzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBfaXNab29tSW4gOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9jdXJTaG9vdE1vZGUgOiBGaXJlTW9kZUVudW0gPSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLkF1dG9cclxuICAgIHByaXZhdGUgX2hhc0p1c3RGaXJlZCA6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfZmlyZVdhaXQgOiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIF9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzQWxsb3dlZCA9IHRydWVcclxuICAgIHByaXZhdGUgX3dhc0FsbG93ZWRBbmRGaXJpbmcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNHb2luZ1RvUmVsb2FkTWFnYXppbmUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcmVsb2FkV2FpdCA9IDBcclxuICAgIHByaXZhdGUgX29uUmVsb2FkID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzSWdub3JpbmdTZWxmID0gdHJ1ZVxyXG4gICAgcHJpdmF0ZSBfaGFzRmlyZUNvbmRpdGlvbiA9IHRydWVcclxuICAgIHByaXZhdGUgX2ZpcmVDb25kaXRpb25TaWRlID0gMVxyXG4gICAgcHJpdmF0ZSBfaXNHb2luZ1RvUHVtcCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1B1bXBOZXh0VXBkYXRlID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3B1bXBXYWl0ID0gMFxyXG4gICAgcHJpdmF0ZSBfaXNQdW1waW5nID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzV2FpdGluZ1B1bXAgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfem9vbUluVHJ5UHVtcCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1dpdGhEcmF3aW5nID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3B1bXBNYWtlU2hlbGwgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICBwdWJsaWMgX3dlYXBvbkFjY2Vzc29yeUxpc3QgOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzPiA9IG5ldyBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzPigpXHJcbiAgICBcclxuICAgIHByaXZhdGUgX21hZ2F6aW5lOiBXZWFwb25NYWdhemluZUNsc1xyXG4gICAgIF9yZWNvaWwgOiBXZWFwb25SZWNvaWxDbHNcclxuICAgIF9jYW1lcmFDb250cm9sIDogV2VhcG9uQ2FtZXJhQ2xzXHJcbiAgICAgX3dlYXBvbkdVSTpXZWFwb25HVUlDbHNcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbkNvbnRyb2xsZXIgOiBXZWFwb25BbmltYXRpb25DbHNcclxuICAgIHByaXZhdGUgX3dlYXBvblNvdW5kIDogV2VhcG9uU291bmRDbHNcclxuICAgIHB1YmxpYyBlcnJvcjogbnVtYmVyXHJcblxyXG4gICAgcHVibGljIGdldCBfY29uZmlnRGF0YSgpIDogR2FtZUNvbnN0LldlYXBvbkNvbmZpZ0RhdGFcclxuXHJcbiAgICBwcml2YXRlIF9hdXRvRmlyZUFpbTpib29sZWFuXHJcbiAgICBjb25zdHJ1Y3RvcihfY2hhcmFjdGVyOkNoYXJhY3RlciwgX3Jvb3QgOiBHYW1lT2JqZWN0LCBfd2VhcG9uT2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgICB0aGlzLkVhcmx5SW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgdGhpcy5wcmVmYWIgPSBfd2VhcG9uT2JqXHJcbiAgICAgICAgdGhpcy5yb290ID0gX3Jvb3RcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IF9jaGFyYWN0ZXJcclxuICAgICAgICB0aGlzLl9tYWdhemluZSA9IG5ldyBXZWFwb25NYWdhemluZUNscyh0aGlzKVxyXG4gICAgICAgIHRoaXMuX3JlY29pbCA9IG5ldyBXZWFwb25SZWNvaWxDbHMoKVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wgPSBuZXcgV2VhcG9uQ2FtZXJhQ2xzKHRoaXMuX3JlY29pbClcclxuICAgICAgICB0aGlzLl93ZWFwb25HVUkgPSBuZXcgV2VhcG9uR1VJQ2xzKClcclxuICAgICAgICB0aGlzLl9hbmltYXRpb25Db250cm9sbGVyID0gbmV3IFdlYXBvbkFuaW1hdGlvbkNscygpXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uU291bmQgPSBuZXcgV2VhcG9uU291bmRDbHMoKVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuTGF0ZXJJbml0aWFsaXplKClcclxuICAgIH1cclxuICAgIC8qKlx1Njc5MFx1Njc4NFx1NTFGRFx1NjU3MFx1RkYwQ1x1OTcwMFx1ODk4MVx1NjI0Qlx1NTJBOFx1OEMwM1x1NzUyOCAqL1xyXG4gICAgcHVibGljIGRlc3RydWN0b3IoKSA6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuRWFybHlEZXN0cnVjdG9yKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5TZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIHRoaXMuX21hZ2F6aW5lLlJlY29yZGluZ0J1bGxldHNMZWZ0KHRydWUpXHJcbiAgICAgICAgdGhpcy5wcmVmYWIuc2V0VmlzaWJpbGl0eShUeXBlLlByb3BlcnR5U3RhdHVzLk9uKVxyXG4gICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLlVuRXF1aXBGcm9tV2VhcG9uKCkgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuY2xlYXIoKVxyXG4gICAgICAgIC8vXHU2NzkwXHU2Nzg0XHU2N0FBXHU0RTBBXHU3Njg0XHU4MUVBXHU2NzA5XHU3QzdCXHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5kZXN0cnVjdG9yKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5kZXN0cnVjdG9yKClcclxuICAgICAgICB0aGlzLl9hbmltYXRpb25Db250cm9sbGVyLmRlc3RydWN0b3IoKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uU291bmQuZGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgLy9cdTZFMDVcdTk2NjRcdTY3QUFcdTY4QjBcdTYyNDBcdTY3MDlcdTgwMDVcclxuICAgICAgICAvL3NlbGYuZ3VuLlBsYXllci5WYWx1ZSA9IG5pbFxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvKipcdTU3MjhcdTVCOUVcdTRGOEJcdTUzMTZcdTY3MDBcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NEMgKi9cclxuICAgIHByb3RlY3RlZCBFYXJseUluaXRpYWxpemUoKTp2b2lke1xyXG5cclxuICAgIH1cclxuICAgIC8qKlx1NUI5RVx1NEY4Qlx1NTMxNlx1NjcwMFx1NTQwRVx1NjI2N1x1ODg0QyAqL1xyXG4gICAgcHJvdGVjdGVkIExhdGVySW5pdGlhbGl6ZSgpOnZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBFYXJseURlc3RydWN0b3IoKTp2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTY2RjRcdTY1QjBcdTUxRkRcdTY1NzAgKi9cclxuICAgIHB1YmxpYyBVcGRhdGUoX2R0Om51bWJlcil7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzV2l0aERyYXdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc0dvaW5nVG9GaXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTgxRUFcdTUyQThcdTg4QzVcdTVGMzlcdTVGMDBcdTU0MkZcdTU0MEVcdUZGMENcdThGREJcdTg4NENcdTY4QzBcdTZENEIgKi9cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnRGF0YS5hdXRvUmVsb2FkKSB7XHJcbiAgICAgICAgICAgIC8vaWYodGhpcy5fbWFnYXppbmUuKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTRFMEFcdTRFMDBcdTVFMjdcdTVGMDBcdTcwNkJcdTRFODZcdTVFNzZcdTRFMTRcdTk3MDBcdTg5ODFcdTYyQzlcdTY3QUFcdTY4MTMsXHU1RTc2XHU0RTE0XHU1RjUzXHU1MjREXHU2Q0ExXHU2NzA5XHU1NzI4XHU4OEM1XHU1QjUwXHU1RjM5XHU1NDhDXHU2QjYzXHU1NzI4XHU2MkM5XHU2N0FBXHU2ODEzXHU3Njg0XHU4RkM3XHU3QTBCXHU0RTJEICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEucHVtcEFmdGVyRmlyZSAmJiB0aGlzLl9oYXNKdXN0RmlyZWQgJiYgIXRoaXMuX29uUmVsb2FkICYmICF0aGlzLl9pc1B1bXBpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzWm9vbUluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhaXRpbmdQdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVtcFN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fem9vbUluVHJ5UHVtcCAmJiB0aGlzLl9pc1dhaXRpbmdQdW1wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3pvb21JblRyeVB1bXAgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuUHVtcFN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU1MUM2XHU1OTA3XHU1NzI4XHU0RTBCXHU0RTAwXHU1RTI3XHU4RkRCXHU4ODRDXHU2MzYyXHU1RjM5XHU2NENEXHU0RjVDICovXHJcbiAgICAgICAgaWYodGhpcy5faXNHb2luZ1RvUmVsb2FkTWFnYXppbmUpe1xyXG4gICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vdGhpcy5fcmVsb2FkV2FpdCA9IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTUxQzZcdTU5MDdcdTU3MjhcdTRFMEJcdTRFMDBcdTVFMjdcdThGREJcdTg4NENcdTYyQzlcdTY3QUFcdTY4MTNcdTY0Q0RcdTRGNUMgKi9cclxuICAgICAgICBpZiAodGhpcy5faXNHb2luZ1RvUHVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1B1bXBOZXh0VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9wdW1wTWFrZVNoZWxsID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNQdW1waW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9wdW1wV2FpdCA9IDEgLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU4RkRCXHU4ODRDXHU1RjAwXHU1OUNCXHU1QzA0XHU1MUZCL1x1NTA1Q1x1NkI2Mlx1NUMwNFx1NTFGQi9cdTVGMDBcdTU5Q0JcdTYzNjJcdTVCNTBcdTVGMzlcdTc2ODRcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDEgKi9cclxuICAgICAgICBsZXQgaXNBbGxvd2VkQW5kRmlyaW5nID0gdGhpcy5faXNHb2luZ1RvRmlyZSAmJiB0aGlzLl9pc0FsbG93ZWRcclxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGlzQWxsb3dlZEFuZEZpcmluZyAmJiAhdGhpcy5fd2FzQWxsb3dlZEFuZEZpcmluZykge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRmlyZVN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0FsbG93ZWRBbmRGaXJpbmcgJiYgdGhpcy5fd2FzQWxsb3dlZEFuZEZpcmluZykge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRmlyZVN0b3BwZWQsIHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzR29pbmdUb1B1bXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb1B1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUHVtcFN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jb25maWdEYXRhLnJlbG9hZFdpdGhNYWdhemluZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50Lk1hZ2F6aW5lTG9hZFN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5CdWxsZXRMb2FkU3RhcnRlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1pvb21Jbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvUmVsb2FkTWFnYXppbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dhc0FsbG93ZWRBbmRGaXJpbmcgPSBpc0FsbG93ZWRBbmRGaXJpbmdcclxuXHJcbiAgICAgICAgdGhpcy5fZmlyZVdhaXQgLT0gX2R0XHJcbiAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCAtPSBfZHRcclxuICAgICAgICB0aGlzLl9wdW1wV2FpdCAtPSBfZHRcclxuICAgICAgICBpZiAodGhpcy5fcHVtcFdhaXQgPCAwLjggLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWQgJiYgdGhpcy5fcHVtcFdhaXQgPiAwICYmIHRoaXMuX2FpbUJlZm9yZVB1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9wdW1wV2FpdCA8IDAuNiAvIHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RTcGVlZCAmJiB0aGlzLl9wdW1wV2FpdCA+IDAgJiYgdGhpcy5faXNQdW1waW5nICYmICF0aGlzLl9wdW1wTWFrZVNoZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFrZUJ1bGxldFNoZWxsKClcclxuICAgICAgICAgICAgdGhpcy5fcHVtcE1ha2VTaGVsbCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU2OEMwXHU2N0U1XHU1RjUzXHU1MjREXHU2MzYyXHU1RjM5XHU2NENEXHU0RjVDXHU2NjJGXHU1NDI2XHU3RUQzXHU2NzVGICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0p1c3RGaXJlZCAmJiB0aGlzLl9jb25maWdEYXRhLmNhbkludGVycnVwdEJ1bGxldExvYWQpIHtcclxuICAgICAgICAgICAgLyoqXHU0RTBBXHU0RTAwXHU1RTI3XHU1RjAwXHU3MDZCXHU0RTg2XHVGRjBDXHU5NzAwXHU4OTgxXHU0RTJEXHU2NUFEXHU2MzYyXHU1RjM5XHU2NENEXHU0RjVDICovXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSAmJiB0aGlzLl9yZWxvYWRXYWl0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEucmVsb2FkV2l0aE1hZ2F6aW5lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSByZWxvYWRpbmcgdGhlIGVudGlyZSBtYWdhemluZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYWdhemluZS5Mb2FkTWFnYXppbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlJlbG9hZEZpbmlzaGVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50bHkgcmVsb2FkaW5nIG9uZSBidWxsZXQgYXQgYSB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFnYXppbmUuTG9hZE9uZUJ1bGxldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkJ1bGxldExvYWRlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWxvYWRlZCBvbmUgYnVsbGV0LCBjaGVjayBpZiB0aGUgbWFnYXppbmUgaXMgbm90IGZ1bGx5IGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYWdhemluZS5VcGRhdGVMb2FkUGVyY2VudGFnZSgpICE9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFnYXppbmUgaXMgbm90IGZ1bGx5IGxvYWRlZCwgY2hlY2sgaWYgaXQgY2FuIGNvbnRpbnVlIGxvYWRpbmcgYnVsbGV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFnYXppbmUuVXBkYXRlQ2FuTG9hZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4gY29udGludWUgbG9hZGluZyBidWxsZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0aGlzLl9jb25maWdEYXRhLmNhbkludGVycnVwdEJ1bGxldExvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWxvYWRXYWl0ID0gdGhpcy5fbWFnYXppbmUuR2V0TG9hZFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCBjb250aW51ZSBsb2FkaW5nIGJ1bGxldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlJlbG9hZEZpbmlzaGVkLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hZ2F6aW5lIGlzIGZ1bGx5IGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NjhDMFx1NjdFNVx1NUY1M1x1NTI0RFx1NjJDOVx1NjdBQVx1NjgxM1x1NjRDRFx1NEY1Q1x1NjYyRlx1NTQyNlx1N0VEM1x1Njc1RiAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1B1bXBOZXh0VXBkYXRlICYmIHRoaXMuX3B1bXBXYWl0IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHVtcE5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1B1bXBpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1dhaXRpbmdQdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUHVtcGVkLCB0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGlzLl9haW1CZWZvcmVQdW1wICYmICF0aGlzLl9hdXRvRmlyZUFpbSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9haW1CZWZvcmVQdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oYXNKdXN0RmlyZWQgPSBmYWxzZVxyXG4gICAgICAgIC8qKlx1NjhDMFx1NjdFNVx1NUYwMFx1NzA2Qlx1NzJCNlx1NjAwMSAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSAmJiB0aGlzLl9pc0FsbG93ZWQpIHtcclxuICAgICAgICAgICAgbGV0IGZpcmVEZWxheSA9IDEgLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWRcclxuICAgICAgICAgICAgbGV0IGRlbGF5ID0gMFxyXG4gICAgICAgICAgICBsZXQgaGFzRmlyZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLl9maXJlV2FpdCA8IDApe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSB0aGlzLl9jb25maWdEYXRhLmJ1bGxldFBlclNob290OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX21hZ2F6aW5lLmlzRW1wdHlMb2FkZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5GaXJlKGRlbGF5LCAhdGhpcy5fY29uZmlnRGF0YS5jb25zdW1lU2luZ2xlQnVsbGV0UGVyU2hvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0ZpcmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cy0tXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGhhc0ZpcmVkICYmIHRoaXMuX2NvbmZpZ0RhdGEuY29uc3VtZVNpbmdsZUJ1bGxldFBlclNob290KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbnN1bWUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaGFzRmlyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLl9jb25maWdEYXRhLnB1bXBBZnRlckZpcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1ha2VCdWxsZXRTaGVsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkZpcmVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRW1wdHlGaXJlLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsYXkgKz0gZmlyZURlbGF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maXJlV2FpdCArPSBmaXJlRGVsYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGhhc0ZpcmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29pbC5GaXJlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuSW5wdXRSZWNvaWwodGhpcy5fcmVjb2lsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHU0RTBEXHU1MTQxXHU4QkI4XHU1RjAwXHU2N0FBXHVGRjBDXHU1MjE5XHU1QzA2XHU2N0FBXHU0RTJEXHU1QjUwXHU1RjM5XHU4RkRFXHU1M0QxXHU1MjY5XHU0RjU5XHU1QjUwXHU1RjM5XHU2RTA1XHU5NkY2XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9pc0FsbG93ZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9cdTY4MzlcdTYzNkVcdTRFMERcdTU0MENcdTc2ODRcdTVGMDBcdTcwNkJcdTZBMjFcdTVGMEZcdThGREJcdTg4NENcdTY1NzBcdTYzNkVcdTkxQ0RcdTdGNkVcclxuICAgICAgICAgICAgaWYodGhpcy5fY3VyU2hvb3RNb2RlICE9IEdhbWVDb25zdC5GaXJlTW9kZUVudW0uQXV0byl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA8PSAwIHx8IHRoaXMuX21hZ2F6aW5lLmlzRW1wdHlMb2FkZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2N1clNob290TW9kZSA9PSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLlNpbmdsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPD0gMCA/IDAgOiB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZmlyZVdhaXQgPSBNYXRoLm1heCgwLCB0aGlzLl9maXJlV2FpdClcclxuICAgICAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCA9IE1hdGgubWF4KDAsIHRoaXMuX3JlbG9hZFdhaXQpXHJcbiAgICAgICAgICAgIHRoaXMuX3B1bXBXYWl0ID0gTWF0aC5tYXgoMCwgdGhpcy5fcHVtcFdhaXQpXHJcbiAgICAgICAgICAgIC8vXHU1MTc2XHU0RUQ2XHU2M0E3XHU1MjM2XHU3QzdCXHU3Njg0XHU2NkY0XHU2NUIwXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uQ29udHJvbGxlci5VcGRhdGUoX2R0KVxyXG4gICAgICAgICAgICB0aGlzLl9yZWNvaWwuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgdGhpcy5fbWFnYXppbmUuVXBkYXRlKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFNjYWxlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2N0FBXHU0RTBBXHU4OEM1XHU1OTA3XHU0RTAwXHU0RTJBXHU5MTREXHU0RUY2XHJcbiAgICAgKiBAcGFyYW0gYWNjZSBcdTkxNERcdTRFRjZcdTVCOUVcdTRGOEJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRXF1aXBBY2Nlc3NvcnkoYWNjZTpXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzKTogW2Jvb2xlYW4sIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHNdIHtcclxuICAgICAgICBsZXQgYWNjZUlkID0gYWNjZS5pZFxyXG4gICAgICAgIGxldCBjYW5CZUVxdWlwID0gZmFsc2VcclxuICAgICAgICB0aGlzLl9jb25maWdEYXRhLmNhbkJlRXF1aXBBY2Nlc3NvcnkuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBhY2NlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbkJlRXF1aXAgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghY2FuQmVFcXVpcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3JpZ2luQWNjZSA9IHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZ2V0KGFjY2UuY29uZmlnRGF0YS5sb2NhdGlvbilcclxuICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LnNldChhY2NlLmNvbmZpZ0RhdGEubG9jYXRpb24sIGFjY2UpXHJcbiAgICAgICAgYWNjZS5FcXVpcFRvV2VhcG9uKHRoaXMpXHJcbiAgICAgICAgcmV0dXJuIFt0cnVlLCBvcmlnaW5BY2NlXVxyXG4gICAgfVxyXG4gICAgcHVibGljIFVuRXF1aXBBY2Nlc3NvcnkoX2xvY2F0aW9uT3JDbHM6V2VhcG9uQWNjZXNzb3J5QmFzZUNscyB8IG51bWJlcik6IHZvaWR7XHJcbiAgICAgICAgaWYoX2xvY2F0aW9uT3JDbHMgaW5zdGFuY2VvZiBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzKXtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5kZWxldGUoX2xvY2F0aW9uT3JDbHMuY29uZmlnRGF0YS5sb2NhdGlvbilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5kZWxldGUoX2xvY2F0aW9uT3JDbHMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHU2MzYyXHU1RjM5XHU1OTM5LFx1NjM2Mlx1NUYzOVx1NTkzOVx1NzY4NFx1NzY4NFx1NjVGNlx1NTAxOVx1NEUwRFx1ODBGRFx1NjJDOVx1NjdBQVx1NjgxMyAqL1xyXG4gICAgcHVibGljIExvYWRNYWdhemluZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcgJiYgISB0aGlzLl9pc1B1bXBpbmcgJiYgdGhpcy5fbWFnYXppbmUuY2FuTG9hZGVkICYmICEgdGhpcy5fb25SZWxvYWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgUHVtcFN0YXJ0KCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcgJiYgIXRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvUHVtcCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IHRoaXMuX2lzWm9vbUluXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIE1ha2VCdWxsZXRTaGVsbCgpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgaWYodGhpcy50b3NzID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgUm90YXRpb24oMTgwICogTWF0aC5yYW5kb20oKSwgMCwgMTgwICogTWF0aC5yYW5kb20oKSlcclxuICAgICAgICBsZXQgb2JqID0gYXdhaXQgR2FtZU9ialBvb2wuZ2V0SW5zdGFuY2UoKS5hc3luY1NwYXduKHRoaXMuX2NvbmZpZ0RhdGEuYnVsbGV0U2hlbGwpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkTG9jYXRpb24odGhpcy50b3NzLmdldFdvcmxkTG9jYXRpb24oKSlcclxuICAgICAgICBvYmouc2V0V29ybGRSb3RhdGlvbih0ZW1wKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIE1ha2VGaXJlRWZmZWN0KCk6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICBsZXQgb2JqID1hd2FpdCBHYW1lT2JqUG9vbC5nZXRJbnN0YW5jZSgpLmFzeW5jU3Bhd24odGhpcy5fY29uZmlnRGF0YS5maXJlRWZmZWN0KVxyXG4gICAgICAgIG9iai5zZXRXb3JsZExvY2F0aW9uKHRoaXMubXV6emxlT2JqLmdldFdvcmxkTG9jYXRpb24oKSlcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlQnVsbGV0KGVuZE9iajpHYW1lT2JqZWN0LCBlbmRQb3M6VmVjdG9yLCBlbmROb3JtYWw6VmVjdG9yKXtcclxuICAgICAgICBpZighZW5kT2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZE9iaiBpbnN0YW5jZW9mIENoYXJhY3Rlcil7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JqID0gYXdhaXQgR2FtZU9ialBvb2wuZ2V0SW5zdGFuY2UoKS5hc3luY1NwYXduKHRoaXMuX2NvbmZpZ0RhdGEuYnVsbGV0SG9sZSlcclxuICAgICAgICBvYmouc2V0V29ybGRMb2NhdGlvbihlbmRQb3MpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkU2NhbGUobmV3IFZlY3RvcigwLjEsIDAuMSwgMC4xKSlcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlSGl0RWZmZWN0KGVuZFBvczpWZWN0b3IpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgbGV0IG9iaiA9IGF3YWl0IEdhbWVPYmpQb29sLmdldEluc3RhbmNlKCkuYXN5bmNTcGF3bih0aGlzLl9jb25maWdEYXRhLmhpdEVmZmVjdClcclxuICAgICAgICBvYmouc2V0V29ybGRMb2NhdGlvbihlbmRQb3MpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgSWdub3JlU2VsZihpZ25vcmU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5faXNJZ25vcmluZ1NlbGYgPSBpZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRGaXJlQ29uZGl0aW9uKHNpZGU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9oYXNGaXJlQ29uZGl0aW9uID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2ZpcmVDb25kaXRpb25TaWRlID0gc2lkZVxyXG4gICAgfVxyXG4gICAgcHVibGljIENhbmNlbEZpcmVDb25kaXRpb24oKXtcclxuICAgICAgICB0aGlzLl9oYXNGaXJlQ29uZGl0aW9uID0gZmFsc2VcclxuICAgIH1cclxuICAgIHB1YmxpYyBUcnlGaXJlT25lQnVsbGV0KCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IHRydWVcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9jdXJTaG9vdE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5TaW5nbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5SYXBpZGx5XzE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSB0aGlzLl9jb25maWdEYXRhLnJhcGlkbHlfMVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5GaXJlTW9kZUVudW0uUmFwaWRseV8yOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gdGhpcy5fY29uZmlnRGF0YS5yYXBpZGx5XzJcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFRyeUtlZXBGaXJlKCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3ICYmIHRoaXMuX2N1clNob290TW9kZSA9PSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLkF1dG8pe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBUcnlQdW1wKGI6Ym9vbGVhbil7XHJcbiAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5wdW1wQWZ0ZXJGaXJlICYmIHRoaXMuX2lzWm9vbUluICYmICF0aGlzLl9pc1B1bXBpbmcpe1xyXG4gICAgICAgICAgICAvL1x1NUYwMFx1NjdBQVx1NTQwRVx1ODk4MVx1NjJDOVx1NjgxM1x1NUU3Nlx1NEUxNFx1NzNCMFx1NTcyOFx1NjYyRlx1NUYwMFx1OTU1Q1x1NzJCNlx1NjAwMVxyXG4gICAgICAgICAgICB0aGlzLl96b29tSW5UcnlQdW1wID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighYil7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hdXRvRmlyZUFpbSA9IGJcclxuICAgIH1cclxuICAgIHB1YmxpYyBNZWNoYW5pY2FsQWltU3RhcnQoKTp2b2lkIHtcclxuICAgICAgICBpZih0aGlzLl9pc1pvb21JbiB8fCAhdGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEodGhpcy5jaGFyYWN0ZXIubW92ZW1lbnRTdGF0ZSA9PSBNb3ZlbWVudE1vZGUuV2FsaykgfHwgdGhpcy5faXNQdW1waW5nIHx8IHRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzWm9vbUluID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuTWVjaGFuaWNhbEFpbVN0YXJ0KClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5NZWNoYW5pY2FsQWltU3RhcnQoKVxyXG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkFpbUluLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgcHVibGljIE1lY2hhbmljYWxBaW1TdG9wKCk6dm9pZHtcclxuICAgICAgICBpZighKHRoaXMuX2lzWm9vbUluICYmIHRoaXMuX2lzZHJhdykpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNab29tSW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5BaW1PdXQsIHRoaXMpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgV2l0aGRyYXdXZWFwb24oKTp2b2lke1xyXG4gICAgICAgIGlmKCF0aGlzLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgaWYodGhpcy5faXNab29tSW4pe1xyXG4gICAgICAgICAgICB0aGlzLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5PblVuRXF1aXBXZWFwb24odHJ1ZSlcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5TZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIHRoaXMucHJlZmFiLnNldFZpc2liaWxpdHkoVHlwZS5Qcm9wZXJ0eVN0YXR1cy5PZmYpXHJcbiAgICAgICAgaWYodGhpcy5fb25SZWxvYWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9yZWxvYWRXYWl0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNkcmF3ID0gZmFsc2VcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5XaXRoRHJhd1dlYXBvbiwgdGhpcylcclxuICAgIH1cclxuICAgIHB1YmxpYyBEcmF3V2VhcG9uKCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNXaXRoRHJhd2luZyA9IHRydWVcclxuICAgICAgICB0aGlzLl9pc2RyYXcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuU2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuT25FcXVpcFdlYXBvbih0aGlzLCBudWxsKVxyXG4gICAgICAgIHRoaXMucHJlZmFiLnNldFZpc2liaWxpdHkoVHlwZS5Qcm9wZXJ0eVN0YXR1cy5PbilcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLl9pc1dhaXRpbmdQdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5QdW1wU3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzV2l0aERyYXdpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7ICAgICAgIFxyXG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkRyYXdXZWFwb24sIHRoaXMpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIENvbnN1bWUoKTp2b2lkIHtcclxuICAgICAgICB0aGlzLl9tYWdhemluZS5Db25zdW1lKCkoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIENoYW5nZVNob290TW9kZSgpOkdhbWVDb25zdC5GaXJlTW9kZUVudW0ge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyAmJiB0aGlzLl9pc0FsbG93ZWQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9jb25maWdEYXRhLnNob290TW9kZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIC8veVx1NjcwOVx1NTkxQVx1NzlDRFx1NUMwNFx1NTFGQlx1NkEyMVx1NUYwRlxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbmRleDpudW1iZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RNb2RlLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlID09IHRoaXMuX2N1clNob290TW9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5zaG9vdE1vZGVbbmV4dEluZGV4XSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJTaG9vdE1vZGUgPSB0aGlzLl9jb25maWdEYXRhLnNob290TW9kZVtuZXh0SW5kZXhdIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJTaG9vdE1vZGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmF5Q2FzdE9yaWdpbigpOlZlY3RvcntcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpLmFkZCh0aGlzLmNoYXJhY3Rlci5nZXRGb3J3YXJkVmVjdG9yKCkubXVsdGlwbHkoMC41KS5hZGQoKFZlY3Rvci51cC5tdWx0aXBseSh0aGlzLmNoYXJhY3Rlci5jYXBzdWxlSGFsZkhlaWdodCAqIDIgLSAwLjEpKSkpIFxyXG4gICAgfVxyXG4gICAgcHVibGljIFJheUNhc3RUYXJnZXQoKTpWZWN0b3J7XHJcbiAgICAgICAgbGV0IFtpbmZvLCBpc1RhcmdldF06W1ZlY3RvciwgYm9vbGVhbl0gPSB0aGlzLl9jYW1lcmFDb250cm9sLkdldFRhcmdldCgpXHJcbiAgICAgICAgaWYoaXNUYXJnZXQpe1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mb1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mby5tdWx0aXBseSh0aGlzLl9jb25maWdEYXRhLmRpc3RhbmNlKS5hZGQodGhpcy5tdXp6bGVPYmouZ2V0V29ybGRMb2NhdGlvbigpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgT3ZlcmxvYWRSYXlDYXN0KGRpcjpWZWN0b3IpOkdhbWVDb25zdC5XZWFwb25IaXRSZXN1bHR7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuUmF5Q2FzdE9yaWdpbigpLmFkZChkaXIubXVsdGlwbHkodGhpcy5fY29uZmlnRGF0YS5kaXN0YW5jZSkpXHJcbiAgICAgICAgbGV0IGluZm8gPSBHYW1lcGxheS5saW5lVHJhY2UodGhpcy5SYXlDYXN0T3JpZ2luKCksIHRhcmdldClcclxuICAgICAgICBsZXQgcmVzdWx0OkdhbWVDb25zdC5XZWFwb25IaXRSZXN1bHRcclxuICAgICAgICBpZihpbmZvLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1NTIyNFx1NUI5QVx1NTQ3RFx1NEUyRFx1NjYyRlx1OTc3Nlx1NUI1MFx1NjIxNlx1ODAwNVx1OTY5Q1x1Nzg4RFx1NzI2OVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGluZm8pIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbmZvLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW5mb1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIEdhbWVwbGF5LkNoYXJhY3RlciAmJiBlbGVtZW50LmdhbWVPYmplY3QgIT0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHU1NDdEXHU0RTJEXHU3Njg0XHU2NjJGXHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nYW1lT2JqZWN0LmdldENvbGxpc2lvbigpID09IFR5cGUuQ29sbGlzaW9uU3RhdHVzLk9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkhpdFBvaW50ID0gZWxlbWVudC5pbXBhY3RQb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXRPYmplY3QgPSBlbGVtZW50LmdhbWVPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0Tm9ybWFsID0gZWxlbWVudC5pbXBhY3ROb3JtYWxcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluZm8sIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbmZvW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmdhbWVPYmplY3QgaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU3M0E5XHU1QkI2XHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU4OEFCXHU1NDdEXHU0RTJEXHU1MjI0XHU2NUFEXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU3M0E5XHU1QkI2XHU2NjJGXHU1NDI2XHU1REYyXHU3RUNGXHU2QjdCXHU0RUExXHU3Njg0XHU1MjI0XHU2NUFEXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTUyMjRcdTVCOUFcdTU0N0RcdTRFMkRcdTczQTlcdTVCQjZcdTc2ODRcdTkwRThcdTRGNEQsXHU1MjI0XHU1QjlBXHU2MjEwXHU1MjlGXHU1NDBFXHU3NkY0XHU2M0E1XHU4RkQ0XHU1NkRFXHJcbiAgICAgICAgaW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIENhbGN1bGF0ZVJheUNhc3REaXJlY3Rpb24oKTpWZWN0b3J7XHJcbiAgICAgICAgbGV0IGRpciA9IHRoaXMuUmF5Q2FzdFRhcmdldCgpLnN1YnRyYWN0KHRoaXMuUmF5Q2FzdE9yaWdpbigpKS5ub3JtYWxpemVkXHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkNvbnRyb2xsZXIubm9TaG9vdGluZ1N0YXRlKSB7XHJcbiAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHU0RTNBXHU0RTBEXHU1M0VGXHU1QzA0XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgICAgICAgIGRpciA9IHRoaXMubXV6emxlT2JqLmZvcndhcmRWZWN0b3JcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzWm9vbUluICYmIHRoaXMuX2NvbmZpZ0RhdGEuYWNjdXJhdGVBaW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpclxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gV2VhcG9uVG9vbC5SYW5kb21Sb3RhdGUoZGlyLCB0aGlzLl9yZWNvaWwuX2N1cnJlbnRFcnJvcikgICAgIFxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIEZpcmUoZGVsYXk6bnVtYmVyLCBjb25zdW1lOmJvb2xlYW4pe1xyXG4gICAgICAgIGxldCBpc0ZyaWVuZCA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuQ2FsY3VsYXRlUmF5Q2FzdERpcmVjdGlvbigpXHJcbiAgICAgICAgbGV0IGhpdCA9IHRoaXMuT3ZlcmxvYWRSYXlDYXN0KGRpcmVjdGlvbilcclxuICAgICAgICB0aGlzLl9oYXNKdXN0RmlyZWQgPSB0cnVlXHJcbiAgICAgICAgaWYoIWlzRnJpZW5kICYmIGhpdCl7XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBoaXQuSGl0UG9pbnRcclxuICAgICAgICAgICAgbGV0IGVuZE5vcm0gPSBoaXQuSGl0Tm9ybWFsXHJcbiAgICAgICAgICAgIGxldCBlbmRPYmogPSBoaXQuSGl0T2JqZWN0XHJcbiAgICAgICAgICAgIGlmKGNvbnN1bWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db25zdW1lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihoaXQuSGl0T2JqZWN0ID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgZW5kUG9zID0gdGhpcy5SYXlDYXN0T3JpZ2luKCkuYWRkKGRpcmVjdGlvbi5tdWx0aXBseSh0aGlzLl9jb25maWdEYXRhLmRpc3RhbmNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLk1ha2VCdWxsZXQoZW5kT2JqLCBlbmRQb3MsIGVuZE5vcm0pXHJcbiAgICAgICAgICAgIGlmKGhpdC5Jc1RhcmdldCl7XHJcbiAgICAgICAgICAgICAgICBoaXQuRGFtYWdlID0gdGhpcy5fY29uZmlnRGF0YS5kYW1hZ2VcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlN1Y2Nlc3NmdWxseUhpdFRhcmdldCwgdGhpcywgaGl0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBEYW1hZ2UoaGl0IDogR2FtZUNvbnN0LldlYXBvbkhpdFJlc3VsdCl7XHJcbiAgICAgICAgbGV0IGhpdFBvcyA9IGhpdC5IaXRQb2ludFxyXG4gICAgICAgIGxldCBhdHRlbnVhdGlvbjpudW1iZXJcclxuICAgICAgICBpZihoaXRQb3MgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGF0dGVudWF0aW9uID0gMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgZGlzOm51bWJlciA9IGhpdFBvcy5zdWJ0cmFjdCh0aGlzLmNoYXJhY3Rlci5nZXRXb3JsZExvY2F0aW9uKCkpLm1hZ25pdHVkZVxyXG4gICAgICAgICAgICBhdHRlbnVhdGlvbiA9IFdlYXBvblRvb2wuR2V0QXR0ZW51YXRpb25CeUd1bklkKDEsIHRoaXMsIGRpcylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhbWFnZSA9IHRoaXMuX2NvbmZpZ0RhdGEuZGFtYWdlICsgYXR0ZW51YXRpb25cclxuICAgICAgICBkYW1hZ2UgPSBkYW1hZ2UgPD0gMCA/IDAgOiBkYW1hZ2VcclxuICAgICAgICBzd2l0Y2ggKGhpdC5IaXRQYXJ0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkhpdFBhcnRFbnVtLkxpbWI6XHJcbiAgICAgICAgICAgICAgICBkYW1hZ2UgPSBkYW1hZ2UgKiB0aGlzLl9jb25maWdEYXRhLmhpdExpbWJEYW1hZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuSGl0UGFydEVudW0uQm9keTpcclxuICAgICAgICAgICAgICAgIGRhbWFnZSA9IGRhbWFnZSAqIHRoaXMuX2NvbmZpZ0RhdGEuaGl0Qm9keURhbWFnZVJhdGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5IaXRQYXJ0RW51bS5IZWFkOlxyXG4gICAgICAgICAgICAgICAgZGFtYWdlID0gZGFtYWdlICogdGhpcy5fY29uZmlnRGF0YS5oaXRIZWFkRGFtYWdlUmF0ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGFtYWdlID4gMCl7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQbGF5ZXIgOiBDaGFyYWN0ZXIgXHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlN1Y2Nlc3NmdWxseUhpdCwgaGl0UG9zLCB0YXJnZXRQbGF5ZXIsIGRhbWFnZSwgaGl0LkhpdFBhcnQpXHJcbiAgICAgICAgICAgIC8vXHU0RjI0XHU1QkIzXHU1M0QxXHU4RDc3XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgUmVmcmVzaFNjYWxlcygpIHtcclxuICAgICAgICBsZXQgZmFjdG9yID0gMVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvblJlY29pbENscyB9IGZyb20gXCIuL1dlYXBvblJlY29pbENsc1wiO1xyXG5pbXBvcnQgeyBUd2VlblV0aWwgfSBmcm9tIFwiLi4vVG9vbC9Ud2VlblV0aWxcIjtcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIjtcclxuaW1wb3J0IHsgQ2FtZXJhQ29udHJvbGxlciB9IGZyb20gXCIuL0NhbWVyYUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25DYW1lcmFDbHN7XHJcbiAgICBndW5SZWNvaWwgOiBXZWFwb25SZWNvaWxDbHNcclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIG1fY2FtZXJhIDogQ2FtZXJhU3lzdGVtXHJcbiAgICBtX29yaWdpblpvb20gOiBudW1iZXJcclxuICAgIG1fc3VwcG9zZWRab29tIDogbnVtYmVyXHJcbiAgICBtX3NpZ2h0Wm9vbSA6IG51bWJlclxyXG4gICAgYWltVGltZSA6IG51bWJlclxyXG4gICAgbV9pc1pvb21JbiA6IGJvb2xlYW5cclxuICAgIG1fb3JpZ2luT2Zmc2V0IDogVmVjdG9yXHJcbiAgICBtX2FpbU9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9jdXJyZW50T2Zmc2V0IDogVmVjdG9yXHJcbiAgICBpc1VwZGF0aW5nIDogYm9vbGVhblxyXG4gICAgc2NyZWVuU2l6ZSA6IFZlY3RvcjJcclxuICAgIG1fc2Vuc2l0aXZpdHkgOiBudW1iZXJcclxuICAgIG1fb3JpZ2luRGlzdGFuY2UgOiBudW1iZXJcclxuICAgIGRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBtX2FpbURpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBtX2dhbW1hIDogbnVtYmVyXHJcbiAgICBkZWx0YVBoeSA6IG51bWJlclxyXG4gICAgZGVsdGFUaGV0YSA6IG51bWJlclxyXG4gICAgbV9kZWx0YUZPViA6IG51bWJlclxyXG4gICAgbV9sYXN0TW91c2VQb3MgOiBWZWN0b3IyXHJcbiAgICB2aWJyYXRpb25BbXBsIDogbnVtYmVyXHJcbiAgICBtX2JhY2tUaW1lIDogbnVtYmVyXHJcbiAgICBtX2p1bXBUb3RhbCA6IFZlY3RvcjJcclxuICAgIG1fYmFja1RvdGFsIDogbnVtYmVyXHJcbiAgICBlbmFibGVBc3Npc3RBaW0gOiBib29sZWFuXHJcbiAgICBhaW1FbmVteSA6IENoYXJhY3RlclxyXG4gICAgQWltaW5nSXNPdmVyIDogYm9vbGVhblxyXG4gICAgbV9qdW1wRm92UmF0ZVNjYWxlIDogbnVtYmVyXHJcbiAgICBtX2FpbVRpbWVSYXRlU2NhbGUgOiBudW1iZXJcclxuICAgIGxhc3Rab29tIDogbnVtYmVyXHJcbiAgICB0YXJnZXRDYWxsVGltZSA6IG51bWJlclxyXG4gICAgdGFyZ2V0UmV0dXJuIDogW1ZlY3RvciwgYm9vbGVhbl1cclxuICAgIG1fanVtcEZvdlJhdGVUYWJsZSA6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIG51bWJlcj5cclxuICAgIG1fYWltVGltZVJhdGVUYWJsZSA6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIG51bWJlcj5cclxuICAgIFxyXG4gICAgc2VsZlNwaW5Db250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAganVtcEZPVkNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBqdW1wQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIHJlY292ZXJDb250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAgYXNzaXN0QWltQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGFpbUNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBkZWFpbUNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcblxyXG4gICAgY29uZmlnRGF0YSA6IEdhbWVDb25zdC5XZWFwb25DYW1lcmFDb25maWdEYXRhXHJcblxyXG4gICAgY29uc3RydWN0b3IoX2d1blJlY29pbDpXZWFwb25SZWNvaWxDbHMpe1xyXG4gICAgICAgIFdlYXBvblRvb2wuSW5pdFdlYXBvbkNhbWVyYUNvbmZpZyh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ3VuUmVjb2lsID0gX2d1blJlY29pbFxyXG4gICAgICAgIHRoaXMuZ3VuID0gX2d1blJlY29pbC5ndW5cclxuICAgICAgICB0aGlzLm1fb3JpZ2luWm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLndhaXN0QWltRk9WXHJcbiAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgdGhpcy5tX3NpZ2h0Wm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLm1lY2hpbmljYWxBaW1GT1ZcclxuICAgICAgICB0aGlzLmFpbVRpbWUgPSB0aGlzLmd1bi5fY29uZmlnRGF0YS5haW1UaW1lXHJcbiAgICAgICAgLy90aGlzLm1fb3JpZ2luT2Zmc2V0ID0gXHU1MTY4XHU1QzQwXHU5MTREXHU3RjZFXHJcbiAgICAgICAgLy90aGlzLm1fYWltT2Zmc2V0ID0gXHU1MTY4XHU1QzQwXHU5MTREXHU3RjZFXHJcbiAgICAgICAgdGhpcy5tX2N1cnJlbnRPZmZzZXQgPSB0aGlzLm1fb3JpZ2luT2Zmc2V0XHJcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjcmVlblNpemUgPSBXaW5kb3dVdGlsLmdldFZpZXdwb3J0U2l6ZSgpXHJcbiAgICAgICAgLy90aGlzLm1fc2Vuc2l0aXZpdHkgPSBcclxuICAgICAgICAvL3RoaXMubV9vcmlnaW5EaXN0YW5jZSA9IFxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAvL3RoaXMubV9haW1EaXN0YW5jZSA9IFxyXG4gICAgICAgIHRoaXMubV9nYW1tYSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhUGh5ID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFUaGV0YSA9IDBcclxuICAgICAgICB0aGlzLm1fZGVsdGFGT1YgPSAwXHJcbiAgICAgICAgdGhpcy5tX2xhc3RNb3VzZVBvcyA9IG5ldyBWZWN0b3IyKClcclxuICAgICAgICB0aGlzLnZpYnJhdGlvbkFtcGwgPSAwXHJcbiAgICAgICAgdGhpcy5tX2JhY2tUaW1lID0gMFxyXG4gICAgICAgIHRoaXMubV9qdW1wVG90YWwgPSBWZWN0b3IyLnplcm9cclxuICAgICAgICB0aGlzLm1fYmFja1RvdGFsID0gMFxyXG4gICAgICAgIC8vdGhpcy5lbmFibGVBc3Npc3RBaW0gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYWltRW5lbXkgPSBudWxsXHJcbiAgICAgICAgdGhpcy5BaW1pbmdJc092ZXIgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlID0gMVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVNjYWxlID0gMVxyXG4gICAgICAgIC8qKnpcdThGNzRcdTY1Q0JcdThGNkNcdTUyQThcdTc1M0IgKi9cclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgIGxldCByZW1uUGhhc2UgPSAyICogTWF0aC5QSSAtIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicGhhc2VcIilcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMubV9iYWNrVGltZSwgcmVtblBoYXNlIC8gdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcix0MzpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZ2FtbWEgPSB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcIkFtcGxcIikgKiBNYXRoLmV4cCgtdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbkR1bXAgKiB0MSkgKiBcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAqIHQxKSArIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicGhhc2VcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2dhbW1hID0gMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmhhcyhcInBoYXNlXCIpfHwhdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5oYXMoXCJBbXBsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJwaGFzZVwiLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiQW1wbFwiLCB0aGlzLnZpYnJhdGlvbkFtcGwgKiBXZWFwb25Ub29sLkdhdXNzUmFuZG9tKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcEEgPSB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcIkFtcGxcIikgKiBNYXRoLmV4cCgtdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbkR1bXAgKiB0aGlzLnNlbGZTcGluQ29udHJvbGxlci50aW1lKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAwID0gdGVtcEEgKiB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgKiBcclxuICAgICAgICAgICAgICAgIE1hdGguY29zKHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAqIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLnRpbWUgKyB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInBoYXNlXCIpKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhICogdGhpcy52aWJyYXRpb25BbXBsICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UGhhc2UgPSBNYXRoLmF0YW4odGhpcy5tX2dhbW1hICogdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhIC8gKGRlbHRhICt0ZW1wMCkpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3QW1wbCA9IChkZWx0YSArIHRlbXAwKSAvIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAvIE1hdGguY29zKG5ld1BoYXNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJwaGFzZVwiLCBuZXdQaGFzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiQW1wbFwiLCBuZXdBbXBsKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC8qKlx1OERGM1x1NTJBOEZPVlx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ZFNwZWVkID0gdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIikgLyB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWVcclxuICAgICAgICAgICAgICAgIGlmIChzdGRTcGVlZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyICogdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lICtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIikgLSB0aGlzLm1fZGVsdGFGT1YpIC8gc3RkU3BlZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsZHQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKHQyIC10MSA+IDIgKiB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fZGVsdGFGT1YgKz0gZHQgKiB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwianVtcEZPVlwiKSAvIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fZGVsdGFGT1YgPSAodDIgLXQxKS8oMiAqIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZSkgKiB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwianVtcEZPVlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZGVsdGFGT1YgPSAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwianVtcEZPVlwiLCB0aGlzLkdldEp1bXBGT1YoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAvKipcdTY3QUFcdTUzRTNcdThERjNcdTUyQThcdTYwM0JcdTUyQThcdTc1M0IgKi9cclxuICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsZHQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IG9tZWdhID0gMC41ICogTWF0aC5QSSAvIHQyXHJcbiAgICAgICAgICAgICAgICBsZXQgcG93ZXIgPSBvbWVnYSAqIE1hdGguY29zKG9tZWdhICogKHQxIC0gMC41ICogZHQpKSAqIGR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSB0aGlzLmRlbHRhVGhldGEgKyBwb3dlciAqIHRoaXMubV9qdW1wVG90YWwueVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVBoeSA9IHRoaXMuZGVsdGFQaHkgKyBwb3dlciAqIHRoaXMubV9qdW1wVG90YWwueFxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIgLCB0aGlzLmp1bXBDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwidG90YWxcIikuc3VidHJhY3QodGhpcy5tX2p1bXBUb3RhbC5tdWx0aXBseShwb3dlcikpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgKz0gdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInRvdGFsXCIpLnlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFQaHkgKz0gdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInRvdGFsXCIpLnhcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCBuZXcgVmVjdG9yMigpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWltRW5lbXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1bi5fd2VhcG9uR1VJLkZpcmUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJlY292ZXJDb250cm9sbGVyLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlci5TdG9wRnVuY3Rpb24odGhpcy5yZWNvdmVyQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmp1bXBDb250cm9sbGVyLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMuanVtcENvbnRyb2xsZXIpICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIsIHRoaXMubV9qdW1wVG90YWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLyoqXHU2N0FBXHU1M0UzXHU1NkRFXHU1OTBEXHU2MDNCXHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX2JhY2tUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGxldCBBbXBsID0gdGhpcy5tX2JhY2tUb3RhbCAqIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wIC8gKDEgLSBNYXRoLmV4cCgtdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbkR1bXAgKiB0MikpXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGEgPSBBbXBsICogTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogKHQxIC0gMC41ICogZHQpKSAqIGR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSB0aGlzLmRlbHRhVGhldGEgLSBkZWx0YVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIsIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJ0b3RhbFwiKSArIGRlbHRhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIsIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLyoqXHU4Rjg1XHU3Nzg0XHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmd1bi5fY29uZmlnRGF0YS5hc3Npc3RBaW1UaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChfdDE6bnVtYmVyLF90MjpudW1iZXIsX2R0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5haW1FbmVteSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5HZXRBaW1Qb3ModGhpcy5haW1FbmVteSlcclxuICAgICAgICAgICAgICAgIC8vXHU1OTgyXHU2NzlDXHU1REYyXHU3RUNGXHU1NzI4XHU3Nzg0XHU3NzQwXHU0RUJBXHU0RTg2XHU1MjE5XHU1MDVDXHU2QjYyXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLm5vcm1hbGl6ZWRcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLkdldENhbWVyYVBvcygpXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gR2FtZXBsYXkubGluZVRyYWNlKHBvcy5hZGQoZGlyLm11bHRpcGx5KDAuNSkpLCBwb3MuYWRkKGRpci5tdWx0aXBseSh0aGlzLmd1bi5fY29uZmlnRGF0YS5kaXN0YW5jZSkpKVxyXG4gICAgICAgICAgICAgICAgcmVzLmZvckVhY2goKHYgLGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5nYW1lT2JqZWN0ID09IHRoaXMuYWltRW5lbXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiaXNDaGFuZ2VcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vXHU1OTgyXHU2NzlDXHU2MkM5XHU4RkM3XHU1OTM0XHU0RTg2XHU1MjE5XHU1MDVDXHU2QjYyXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLklzUmlnaHQodGFyZ2V0UG9zKSE9IHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImlzQ2hhbmdlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJpc0NoYW5nZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImlzQ2hhbmdlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFUaGV0YSArPSBfZHQgKiB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJvbWVnYVRoZXRhXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhUGh5ICs9IF9kdCAqIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcIm9tZWdhUGh5XCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5HZXRBaW1Qb3ModGhpcy5haW1FbmVteSlcclxuICAgICAgICAgICAgICAgIGxldCByZWxhdGl2ZVBvcyA9IHRhcmdldFBvcy5zdWJ0cmFjdCh0aGlzLkdldENhbWVyYVBvcygpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiaXNSaWdodFwiLCB0aGlzLklzUmlnaHQodGFyZ2V0UG9zKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzQ2hhbmdlXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRoZXRhVG90YWwgPSBNYXRoLmF0YW4ocmVsYXRpdmVQb3MueSAvIG5ldyBWZWN0b3IyKHJlbGF0aXZlUG9zLngsIHJlbGF0aXZlUG9zLnopLm1hZ25pdHVkZSktXHJcbiAgICAgICAgICAgICAgICAoOTAgLSBWZWN0b3IuYW5nbGUodGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLCBWZWN0b3IudXApKSAvIDE4MCAqIE1hdGguUElcclxuICAgICAgICAgICAgICAgIGxldCBwaHlUb3RhbCA9IFZlY3RvcjIuYW5nbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIocmVsYXRpdmVQb3MueCwgcmVsYXRpdmVQb3MueiksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIodGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLngsIHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS56KVxyXG4gICAgICAgICAgICAgICAgKSAqXHJcbiAgICAgICAgICAgICAgICBNYXRoLlBJIC8gMTgwICpcclxuICAgICAgICAgICAgICAgICh0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc1JpZ2h0XCIpID8gLTEgOiAxKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGlvID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltUmF0aW8gLyB0aGlzLmd1bi5fY29uZmlnRGF0YS5hc3Npc3RBaW1UaW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJvbWVnYVRoZXRhXCIsIHRoZXRhVG90YWwgKiByYXRpbylcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcIm9tZWdhUGh5XCIsIHBoeVRvdGFsICogcmF0aW8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLy9cdTVGMDBcdTk1NUNcdTYwM0JcdTUyQThcdTc1M0JcclxuICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuR2V0QWltVGltZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGxldCBwb3IgPSB0MSAvIHQyXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gKDEgLSBwb3IpICogdGhpcy5tX29yaWdpblpvb20gKyBwb3IgKiB0aGlzLmFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJzaWdodFpvb21cIilcclxuICAgICAgICAgICAgICAgIHBvciA9IE1hdGguc3FydCgxIC0gKCAxIC0gcG9yKSAqICggMSAtIHBvcikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9vcmlnaW5PZmZzZXQubXVsdGlwbHkoMSAtIHBvcikuYWRkKHRoaXMubV9haW1PZmZzZXQubXVsdGlwbHkocG9yKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSAoMS1wb3IpICogdGhpcy5tX29yaWdpbkRpc3RhbmNlICsgcG9yICogdGhpcy5tX2FpbURpc3RhbmNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZFpvb20gPSB0aGlzLmFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJzaWdodFpvb21cIilcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX2FpbU9mZnNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMubV9haW1EaXN0YW5jZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5BaW1pbmdJc092ZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVhaW1Db250cm9sbGVyLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFpbUNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lzWm9vbUluID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy9cdTY3MkNcdTU3MzBcdThCQkVcdTdGNkVcdTg5RDJcdTgyNzJcdTRFMERcdTUzRUZcdTg5QzFcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJzaWdodFpvb21cIiwgdGhpcy5HZXRTaWdodEZPVigpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSAgICAgICBcclxuICAgICAgICAvL1x1NTE3M1x1OTU1Q1x1NjAzQlx1NjVCOVx1NkNENVxyXG4gICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmd1bi5fY29uZmlnRGF0YS5zdG9wQWltVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9yID0gdDEgLyB0MlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9ICgxLXBvcikqdGhpcy5kZWFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJwcmVab29tXCIpK3Bvcip0aGlzLm1fb3JpZ2luWm9vbVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRPZmZzZXQgPSB0aGlzLm1fYWltT2Zmc2V0Lm11bHRpcGx5KDEgLSBwb3IpLmFkZCh0aGlzLm1fb3JpZ2luT2Zmc2V0Lm11bHRpcGx5KHBvcikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gKDEtcG9yKSp0aGlzLm1fYWltRGlzdGFuY2UrcG9yKnRoaXMubV9vcmlnaW5EaXN0YW5jZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX29yaWdpbk9mZnNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMubV9vcmlnaW5EaXN0YW5jZVxyXG4gICAgICAgICAgICAgICAgLy90b2RvIFx1NjcyQ1x1NTczMFx1OEJCRVx1N0Y2RVx1ODlEMlx1ODI3Mlx1NTNFRlx1ODlDMVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0UHJvcGVydGllcygpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWltQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWltQ29udHJvbGxlci5TdG9wRnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lzWm9vbUluID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwicHJlWm9vbVwiLCB0aGlzLm1fc3VwcG9zZWRab29tKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLkVuZEFsbCgpXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoZHQ6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNVcGRhdGluZyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlNldFByb3BlcnRpZXMoKVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVUYWJsZS5zZXQoaywgdi5jb25maWdEYXRhLmFpbVRpbWVSYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuZ3VuLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmZvckVhY2goKHYsIGspPT57XHJcbiAgICAgICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVRhYmxlLnNldChrLCB2LmNvbmZpZ0RhdGEuanVtcEZvdlJhdGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLnNlbGZTcGluQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5qdW1wRk9WQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmp1bXBGT1ZDb250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuanVtcENvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5yZWNvdmVyQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5kZWFpbUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5kZWFpbUNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmFpbUNvbnRyb2xsZXIsIGR0KVxyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hTY2FsZXMoKVxyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNldHRpbmdzKClcclxuICAgICAgICB0aGlzLmRlbHRhUGh5ID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFUaGV0YSA9IDBcclxuICAgIH1cclxuICAgIE9uRXF1aXBXZWFwb24oX2d1bkNvbnRyb2xsZXIgOiBXZWFwb25CYXNlQ2xzLCBpbmZvKSB7XHJcbiAgICAgICAgdGhpcy5ndW4gPSBfZ3VuQ29udHJvbGxlclxyXG4gICAgICAgIHRoaXMubV9jYW1lcmEgPSBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhbWVyYVN5c3RlbVxyXG4gICAgICAgIHRoaXMubGFzdFpvb20gPSB0aGlzLm1fY2FtZXJhLmNhbWVyYUZPVlxyXG4gICAgICAgIGxldCB0ID0gbmV3IFRyYW5zZm9ybSgpXHJcbiAgICAgICAgdC5yb3RhdGlvbiA9IHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0ucm90YXRpb25cclxuICAgICAgICB0LnNjYWxlID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybS5zY2FsZVxyXG4gICAgICAgIHQubG9jYXRpb24gPSBuZXcgVmVjdG9yKDAsIDAsIEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuY2Fwc3VsZUhhbGZIZWlnaHQgKiAyKS5hZGQodGhpcy5tX2N1cnJlbnRPZmZzZXQpXHJcbiAgICAgICAgdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybSA9IHRcclxuICAgICAgICB0aGlzLm1fc2lnaHRab29tID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEubWVjaGluaWNhbEFpbUZPVlxyXG4gICAgICAgIHRoaXMubV9vcmlnaW5ab29tID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEud2Fpc3RBaW1GT1ZcclxuICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmZpZWxkT2ZWaWV3ID0gdGhpcy5tX3NpZ2h0Wm9vbVxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IHRydWVcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmd1biA9IHRoaXMuZ3VuXHJcbiAgICB9XHJcbiAgICBJbnB1dFJlY29pbChfcmVjb2lsIDogV2VhcG9uUmVjb2lsQ2xzKXtcclxuICAgICAgICB0aGlzLm1fYmFja1RpbWUgPSB0aGlzLkdldEJhY2tUaW1lKClcclxuICAgICAgICBsZXQgdmVydCA9IF9yZWNvaWwuR2V0VmVydGljYWwoKSAqIE1hdGguUEkgLyAxODBcclxuICAgICAgICB0aGlzLm1fYmFja1RvdGFsID0gX3JlY29pbC5fY29uZmlnRGF0YS5iYWNrVG90YWwgKiB2ZXJ0XHJcbiAgICAgICAgdGhpcy52aWJyYXRpb25BbXBsID0gX3JlY29pbC5HZXRTZWxmU3BpblJhbmdlKCkgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgdGhpcy5tX2p1bXBUb3RhbCA9IG5ldyBWZWN0b3IyKF9yZWNvaWwuR2V0SG9yaXpvbnRhbCgpICogTWF0aC5QSSAvIDE4MCwgdmVydClcclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuc2VsZlNwaW5Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLnJlY292ZXJDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmp1bXBGT1ZDb250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgQ3JvdWNoKCl7XHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIpXHJcbiAgICB9XHJcbiAgICBNZWNoYW5pY2FsQWltU3RhcnQoKXtcclxuICAgICAgICB0aGlzLkFpbWluZ0lzT3ZlciA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5haW1Db250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgR2V0QXNzaXN0QWltRGlzKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faXNab29tSW4gPyB0aGlzLmd1bi5fY29uZmlnRGF0YS5hc3Npc3RBaW1EaXMxIDogdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltRGlzMFxyXG4gICAgfVxyXG4gICAgTWVjaGFuaWNhbEFpbVN0b3AoKXtcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgR2V0QWltVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5haW1UaW1lICsgdGhpcy5tX2FpbVRpbWVSYXRlU2NhbGVcclxuICAgIH1cclxuICAgIEdldEJhY2tUaW1lKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmd1bi5fcmVjb2lsLkdldFNoYWtlVGltZSgpXHJcbiAgICB9XHJcbiAgICBPblVuRXF1aXBXZWFwb24oX3VzZVN0YXRlQmVmb3JlIDogYm9vbGVhbil7XHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5maWVsZE9mVmlldyA9IHRoaXMubGFzdFpvb21cclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmd1biA9IG51bGxcclxuICAgICAgICB0aGlzLkVuZEFsbCgpXHJcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2VcclxuICAgIH1cclxuICAgIEdldEVuZW1pZXMoKTpBcnJheTxDaGFyYWN0ZXI+e1xyXG4gICAgICAgIGxldCByZXMgPSBuZXcgQXJyYXk8Q2hhcmFjdGVyPigpXHJcbiAgICAgICAgR2FtZXBsYXkuZ2V0QWxsUGxheWVycygpLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgSXNWaXNpYmxlKF9lbmVteTpDaGFyYWN0ZXIpOmJvb2xlYW57XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuR2V0Q2FtZXJhUG9zKClcclxuICAgICAgICBsZXQgcmVzID0gdHJ1ZVxyXG4gICAgICAgIGxldCByYXlDYXN0SGVhZCA9IEdhbWVwbGF5LmxpbmVUcmFjZShwb3MsIF9lbmVteS5nZXRXb3JsZExvY2F0aW9uKCkuYWRkKFZlY3Rvci51cC5tdWx0aXBseShfZW5lbXkuY2Fwc3VsZUhhbGZIZWlnaHQpKSlcclxuICAgICAgICByYXlDYXN0SGVhZC5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICBpZighKHYuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIENoYXJhY3RlcikgfHwgKHYuZ2FtZU9iamVjdCAhPSBfZW5lbXkgJiYgKHYuZ2FtZU9iamVjdCkgIT0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlcikpe1xyXG4gICAgICAgICAgICAgICAgcmVzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcbiAgICBFbmRBbGwoKSB7XHJcbiAgICAgICAgaWYodGhpcy5tX2lzWm9vbUluKXtcclxuICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5qdW1wRk9WQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuanVtcEZPVkNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuanVtcENvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5hc3Npc3RBaW1Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5kZWFpbUNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5haW1Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyKVxyXG5cclxuICAgIH1cclxuICAgIFJlZnJlc2hTZXR0aW5ncygpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFJlZnJlc2hTY2FsZXMoKSB7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLm1fanVtcEZvdlJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tX2FpbVRpbWVSYXRlVGFibGUuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICB9XHJcbiAgICBTZXRQcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZGVsdGFUaGV0YSArPSB0aGlzLmRlbHRhVGhldGFcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmRlbHRhUGh5ICs9IHRoaXMuZGVsdGFQaHlcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmdhbW1hID0gdGhpcy5tX2dhbW1hXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5maWVsZE9mVmlldyA9IHRoaXMubV9zdXBwb3NlZFpvb20gKyB0aGlzLm1fZGVsdGFGT1ZcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZVxyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2Uub2Zmc2V0ID0gdGhpcy5tX2N1cnJlbnRPZmZzZXRcclxuICAgIH1cclxuICAgIEdldFNpZ2h0Rk9WKCk6IG51bWJlciB7XHJcbiAgICAgICAgLy9cdTgyRTVcdTkxNERcdTRFRjZcdTRFMkRcdTY3MDlcdTRFMDBcdTRFMkFcdTkxNERcdTRFRjZcdThCQkVcdTdGNkVcdTRFODZcdTU5MjdcdTRFOEVcdTk2RjZcdTc2ODRcdTVGMDBcdTk1NUNGT1ZcdTUyMTlcdTc2RjRcdTYzQTVcdThGRDRcdTU2REVcdTZCNjRcdTY1NzBcdTUwM0MsXHU1NDI2XHU1MjE5XHU4RkQ0XHU1NkRFXHU2N0FBXHU2OEIwXHU4MUVBXHU4RUFCXHU3Njg0Rk9WXHJcbiAgICAgICAgbGV0IGZvdiA9IDBcclxuICAgICAgICB0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICBpZiAodi5jb25maWdEYXRhLmFpbUZvdlJhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3YgPSB2LmNvbmZpZ0RhdGEuYWltRm92UmF0ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChmb3YgIT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm92XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmd1bi5fY29uZmlnRGF0YS5tZWNoaW5pY2FsQWltRk9WXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgSXNSaWdodCh0YXJnZXRQb3M6IFZlY3Rvcik6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kb3QoVmVjdG9yLmNyb3NzKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSwgdGFyZ2V0UG9zLnN1YnRyYWN0KHRoaXMuR2V0Q2FtZXJhUG9zKCkpKSA+IDBcclxuICAgIH1cclxuICAgIElzVXAodGFyZ2V0UG9zOiBWZWN0b3IpOmJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZWxhdGl2ZVBvcyA9IHRhcmdldFBvcy5zdWJ0cmFjdCh0aGlzLkdldENhbWVyYVBvcygpKVxyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4ocmVsYXRpdmVQb3MueSAvIG5ldyBWZWN0b3IyKHJlbGF0aXZlUG9zLngsIHJlbGF0aXZlUG9zLnopLm1hZ25pdHVkZSkgPiAoOTAgLSBWZWN0b3IuYW5nbGUodGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLCBWZWN0b3IudXApICogTWF0aC5QSSAvIDE4MClcclxuICAgIH1cclxuICAgIERyYWdTdGFydCgpe1xyXG4gICAgICAgIHRoaXMubV9sYXN0TW91c2VQb3MgPSBVSS5nZXRNb3VzZVBvc2l0aW9uT25WaWV3cG9ydCgpXHJcbiAgICB9XHJcbiAgICBHZXRDYW1lcmFQb3MoKTpWZWN0b3Ige1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLm1fY2FtZXJhLmNhbWVyYVN5c3RlbVJlbGF0aXZlVHJhbnNmb3JtLmxvY2F0aW9uXHJcbiAgICAgICAgcmV0dXJuIEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpLmFkZChXZWFwb25Ub29sLlJvdGF0ZVZlY3RvcihvZmZzZXQsIFZlY3Rvci51cCwgR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5nZXRXb3JsZFJvdGF0aW9uKCkueikpXHJcbiAgICB9XHJcbiAgICBHZXRKdW1wRk9WKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YS5qdW1wRk9WICogdGhpcy5tX2p1bXBGb3ZSYXRlU2NhbGUgKiBcclxuICAgICAgICBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhbWVyYVN5c3RlbS5jYW1lcmFGT1YgLyB0aGlzLm1fb3JpZ2luWm9vbVxyXG4gICAgfVxyXG4gICAgR2V0QWltUG9zKGVuZW15OkNoYXJhY3Rlcik6IFZlY3RvciB7XHJcbiAgICAgICAgbGV0IHBvczE6VmVjdG9yXHJcbiAgICAgICAgbGV0IHBvczIgOlZlY3RvclxyXG4gICAgICAgIHBvczEgPSBlbmVteS5nZXRBcHBlYXJhbmNlPEh1bWFub2lkVjI+KCkuZ2V0U2xvdFdvcmxkUG9zaXRpb24oU2xvdFR5cGUuSGVhZClcclxuICAgICAgICBwb3MyID0gZW5lbXkuZ2V0QXBwZWFyYW5jZTxIdW1hbm9pZFYyPigpLmdldFNsb3RXb3JsZFBvc2l0aW9uKFNsb3RUeXBlLkJ1dHRvY2tzKVxyXG4gICAgICAgIHJldHVybiBwb3MxLm11bHRpcGx5KDIpLmFkZChwb3MyKS5kaXZpZGUoMylcclxuICAgIH1cclxuICAgIEdldFRhcmdldCgpOltWZWN0b3IsIGJvb2xlYW5de1xyXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0Q2FsbFRpbWUgJiYgVGltZVV0aWwuZWxhcHNlZFRpbWUoKSAtIHRoaXMudGFyZ2V0Q2FsbFRpbWUgPCAwLjAxKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0UmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkaXIgPSB0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCkubm9ybWFsaXplZFxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLkdldENhbWVyYVBvcygpXHJcbiAgICAgICAgbGV0IHJheWNhc3RBbGwgPSBHYW1lcGxheS5saW5lVHJhY2UocG9zLmFkZChkaXIubXVsdGlwbHkoMC41KSksIHBvcy5hZGQoZGlyLm11bHRpcGx5KHRoaXMuZ3VuLl9jb25maWdEYXRhLmRpc3RhbmNlKSkpXHJcbiAgICAgICAgdGhpcy5haW1FbmVteSA9IG51bGxcclxuICAgICAgICBpZih0aGlzLmVuYWJsZUFzc2lzdEFpbSl7XHJcbiAgICAgICAgICAgIGxldCBtaW5EaXMgPSB0aGlzLkdldEFzc2lzdEFpbURpcygpXHJcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGU6Q2hhcmFjdGVyXHJcbiAgICAgICAgICAgIHRoaXMuR2V0RW5lbWllcygpLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAvL1x1NjI3RVx1NTIzMFx1NjcwMFx1OEZEMVx1NzY4NFx1NEVCQVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHYpXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RGlzID0gdGFyZ2V0UG9zLnN1YnRyYWN0KHBvcykubWFnbml0dWRlXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBWZWN0b3IuYW5nbGUoZGlyLCB0YXJnZXRQb3Muc3VidHJhY3QocG9zKSlcclxuICAgICAgICAgICAgICAgIGxldCBhaW1EaXMgPSB0YXJnZXREaXMgKiBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApXHJcbiAgICAgICAgICAgICAgICBpZihhbmdsZSA8IDMwICYmIGFpbURpcyA8PSBtaW5EaXMgJiYgdGhpcy5Jc1Zpc2libGUodikpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZSA9IHZcclxuICAgICAgICAgICAgICAgICAgICBtaW5EaXMgPSBhaW1EaXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5haW1FbmVteSA9IGNhbmRpZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluYWxQb2ludFxyXG4gICAgICAgIGxldCBpXHJcbiAgICAgICAgcmF5Y2FzdEFsbC5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICBpZighKHYgaW5zdGFuY2VvZiBDaGFyYWN0ZXIpKXtcclxuICAgICAgICAgICAgICAgIGZpbmFsUG9pbnQgPSB2LmltcGFjdFBvaW50XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZmluYWxQb2ludCl7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UmV0dXJuID0gW2ZpbmFsUG9pbnQsIHRydWVdXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UmV0dXJuID0gW2RpciwgZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2FsbFRpbWUgPSBUaW1lVXRpbC5lbGFwc2VkVGltZSgpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0UmV0dXJuXHJcbiAgICB9XHJcbiAgICBHZXRTZW5zaXRpdml0eSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2NhbWVyYS5jYW1lcmFGT1YgLyA2MCAqIHRoaXMubV9zZW5zaXRpdml0eVxyXG4gICAgfVxyXG4gICAgRHJhZ0hvbGQoKXtcclxuICAgICAgICBsZXQgdGVtcCA9IFVJLmdldE1vdXNlUG9zaXRpb25PblZpZXdwb3J0KClcclxuICAgICAgICBpZighdGhpcy5tX2xhc3RNb3VzZVBvcyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlbHRhUGh5ICs9ICh0ZW1wLnggLSB0aGlzLm1fbGFzdE1vdXNlUG9zLngpICogdGhpcy5zY3JlZW5TaXplLnggKiB0aGlzLkdldFNlbnNpdGl2aXR5KClcclxuICAgICAgICB0aGlzLmRlbHRhVGhldGEgKz0gKHRlbXAueSAtIHRoaXMubV9sYXN0TW91c2VQb3MueSkgKiB0aGlzLnNjcmVlblNpemUueSAqIHRoaXMuR2V0U2Vuc2l0aXZpdHkoKVxyXG4gICAgICAgIHRoaXMubV9sYXN0TW91c2VQb3MgPSB0ZW1wXHJcbiAgICB9XHJcbiAgICBEcmFnRW5kKCk6dm9pZHtcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gbnVsbFxyXG4gICAgfVxyXG5cclxufSIsICJleHBvcnQgY2xhc3MgV2VhcG9uR1VJQ2xze1xyXG5cclxufSIsICJpbXBvcnQgeyBXZWFwb25BbW1vQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFtbW9CYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCI7XHJcbi8qKlx1NjdBQVx1NjhCMFx1NkEyMVx1NTc1N1x1RkYxQVx1NUYzOVx1NTkzOVx1NTdGQVx1N0M3QiAqL1xyXG5leHBvcnQgY2xhc3MgV2VhcG9uTWFnYXppbmVDbHN7XHJcbiAgICBwcml2YXRlIHdlYXBvbiA6IFdlYXBvbkJhc2VDbHNcclxuICAgIHByaXZhdGUgaWQgOiBudW1iZXJcclxuICAgIHByaXZhdGUgbGVmdEFtbW8gOiBudW1iZXJcclxuICAgIHByaXZhdGUgYW1tb0ludmVudG9yeSA6IFdlYXBvbkFtbW9CYXNlQ2xzXHJcbiAgICBwcml2YXRlIGxvYWRQZXJjZW50YWdlIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGlzRnVsbHlMb2FkZWQgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgaXNFbXB0eUxvYWRlZCA6IGJvb2xlYW5cclxuICAgIHB1YmxpYyBjYW5Mb2FkZWQgOiBib29sZWFuXHJcbiAgICBwcml2YXRlIGxvYWRUaW1lUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBsb2FkVGltZVJhdGVTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBtYXhBbW1vUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBtYXhBbW1vUmF0ZVNjYWxlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHByZU1heEFtbW8gOiBudW1iZXJcclxuXHJcbiAgICBwcml2YXRlIF9jb25maWdEYXRhOiBHYW1lQ29uc3QuV2VhcG9uTWFnYXppbmVDb25maWdEYXRhXHJcblxyXG4gICAgY29uc3RydWN0b3Iod2VhcG9uIDogV2VhcG9uQmFzZUNscyl7XHJcbiAgICAgICAgV2VhcG9uVG9vbC5Jbml0V2VhcG9uTWFnYXppbmVDb25maWcodGhpcylcclxuICAgICAgICAvL3RoaXMubGVmdEFtbW8gPSBfZ3VuLmd1bi5BbW1vTGVmdC5WYWx1ZVxyXG4gICAgICAgIGxldCBtb3ZlQW1tbyA9IHRoaXMubGVmdEFtbW8gLSB0aGlzLl9jb25maWdEYXRhLm1heE51bVxyXG4gICAgICAgIGlmIChtb3ZlQW1tbyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyA9IHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW92ZUFtbW8gPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFVwZGF0ZUZ1bGx5TG9hZGVkKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5pc0Z1bGx5TG9hZGVkID0gdGhpcy5sZWZ0QW1tbyA+PSB0aGlzLkdldE1heEFtbW8oKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnVsbHlMb2FkZWRcclxuICAgIH1cclxuICAgIHByaXZhdGUgVXBkYXRlRW1wdHlMb2FkZWQoKTpib29sZWFue1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eUxvYWRlZCA9IHRoaXMubGVmdEFtbW8gPD0gMCBcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5TG9hZGVkXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVXBkYXRlQ2FuTG9hZCgpOmJvb2xlYW57XHJcbiAgICAgICAgdGhpcy5jYW5Mb2FkZWQgPSAhdGhpcy5pc0Z1bGx5TG9hZGVkICYmIHRoaXMuYW1tb0ludmVudG9yeSAmJiB0aGlzLmFtbW9JbnZlbnRvcnkuY291bnQgPiAwXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuTG9hZGVkXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVXBkYXRlTG9hZFBlcmNlbnRhZ2UoKTpudW1iZXJ7XHJcbiAgICAgICAgdGhpcy5sb2FkUGVyY2VudGFnZSA9IE1hdGguZmxvb3IodGhpcy5sZWZ0QW1tbyAvIHRoaXMuR2V0TWF4QW1tbygpICogMTAwKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRQZXJjZW50YWdlXHJcbiAgICB9XHJcbiAgICBDb25zdW1lKCk6RnVuY3Rpb257XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGVmdEFtbW8gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRBbW1vIC09IDFcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIExvYWRPbmVCdWxsZXQoKTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuY2FuTG9hZGVkKXtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyArPSAxXHJcbiAgICAgICAgICAgIC8vc2VsZi5tX2FtbW9JbnZlbnRvcnk6UGxheWVyQ29uc3VtZUFtbW8oMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTG9hZE1hZ2F6aW5lKCk6dm9pZHtcclxuICAgICAgICBpZiAodGhpcy5jYW5Mb2FkZWQpIHtcclxuICAgICAgICAgICAgbGV0IGFkZGl0aW9uID0gdGhpcy5HZXRNYXhBbW1vKCkgLSB0aGlzLmxlZnRBbW1vXHJcbiAgICAgICAgICAgIC8vYWRkaXRpb24gPSBzZWxmLm1fYW1tb0ludmVudG9yeTpQbGF5ZXJDb25zdW1lQW1tbyhhZGRpdGlvbilcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyArPSBhZGRpdGlvblxyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUZ1bGx5TG9hZGVkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTUzNzhcdThGN0QvXHU2NkY0XHU2MzYyXHU1NDBFLFx1OTcwMFx1ODk4MVx1NUMwNlx1NjdBQVx1NjhCMFx1NzY4NFx1NUI1MFx1NUYzOVx1NjZGNFx1NjVCMFx1NTcyOFx1OTE0RFx1NEVGNlx1NzY4NFx1ODI4Mlx1NzBCOVx1NEUwQiAqL1xyXG4gICAgUmVjb3JkaW5nQnVsbGV0c0xlZnQoX2lzQmFja1RvQnVsbGV0SW52ZW50b3J5OmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKF9pc0JhY2tUb0J1bGxldEludmVudG9yeSAmJiB0aGlzLmFtbW9JbnZlbnRvcnkpe1xyXG4gICAgICAgICAgICB0aGlzLmFtbW9JbnZlbnRvcnkuY291bnQgKz0gdGhpcy5sZWZ0QW1tb1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRBbW1vID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLnByZU1heEFtbW8gPiB0aGlzLkdldE1heEFtbW8oKSl7XHJcbiAgICAgICAgICAgIC8qKlx1OEZEOVx1NEUwMFx1NUUyN1x1NTM3OFx1NEUwQlx1NEU4Nlx1NjI2OVx1NUJCOVx1NUYzOVx1NTkzOSxcdTk3MDBcdTg5ODFcdTVGM0FcdTg4NENcdTUxQ0ZcdTVDMTFcdTVGNTNcdTUyNERcdTc2ODRcdTVCNTBcdTVGMzkgKi9cclxuICAgICAgICAgICAgaWYodGhpcy5HZXRNYXhBbW1vKCkgPCB0aGlzLmxlZnRBbW1vKXtcclxuICAgICAgICAgICAgICAgIGxldCBkZWx0YUFtbW8gPSB0aGlzLmxlZnRBbW1vIC0gdGhpcy5HZXRNYXhBbW1vKClcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gLT0gZGVsdGFBbW1vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtbW9JbnZlbnRvcnkuY291bnQgKz0gZGVsdGFBbW1vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVNYXhBbW1vID0gdGhpcy5HZXRNYXhBbW1vKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUZ1bGx5TG9hZGVkKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUVtcHR5TG9hZGVkKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUNhbkxvYWQoKVxyXG4gICAgICAgIHRoaXMuVXBkYXRlTG9hZFBlcmNlbnRhZ2UoKVxyXG4gICAgICAgIC8qKlx1NUMwNlx1NUY1M1x1NTI0RFx1NzY4NFx1NTI2OVx1NEY1OVx1NUI1MFx1NUYzOVx1NjZGNFx1NjVCMFx1NTIzMFx1NTczQVx1NjY2Rlx1NEUyRFx1NzY4NFx1ODI4Mlx1NzBCOVx1NEUwQSAqL1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRUaW1lUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLm1heEFtbW9SYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMud2VhcG9uLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVUYWJsZS5zZXQoaywgdi5jb25maWdEYXRhLm1hZ2F6aW5lTG9hZFRpbWVSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLm1heEFtbW9SYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5tYXhBbW1vUmF0ZS5nZXQodGhpcy53ZWFwb24uaWQpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNjYWxlcygpXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFJlZnJlc2hTY2FsZXMoKTp2b2lke1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVUYWJsZS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLm1heEFtbW9SYXRlVGFibGUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubWF4QW1tb1JhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldExvYWRUaW1lKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLmxvYWRUaW1lICogdGhpcy5sb2FkVGltZVJhdGVTY2FsZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBHZXRNYXhBbW1vKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhBbW1vUmF0ZVNjYWxlICsgdGhpcy5fY29uZmlnRGF0YS5tYXhOdW0gPiAwID8gdGhpcy5tYXhBbW1vUmF0ZVNjYWxlICsgdGhpcy5fY29uZmlnRGF0YS5tYXhOdW0gOiAxXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCJcclxudHlwZSBSYXRlU3RydWN0ID0ge1xyXG4gICAgTW92ZTpudW1iZXJcclxuICAgIENyb3VjaDpudW1iZXJcclxufVxyXG5leHBvcnQgY2xhc3MgV2VhcG9uUmVjb2lsQ2xze1xyXG4gICAgcHJpdmF0ZSBpZCA6IG51bWJlclxyXG4gICAgZ3VuIDogV2VhcG9uQmFzZUNsc1xyXG4gICAgcHJpdmF0ZSBfdmVydGljYWxTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfaG9yaXpvbnRhbFNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9taW5FcnJvclNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9tYXhFcnJvclNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9yZWNvdmVyUmF0ZVNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9zZWxmU3BpblJhbmdlUmF0ZVNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBcclxuICAgIHByaXZhdGUgX3Vuc3RhYmlsaXR5OiBudW1iZXIgPSAwXHJcbiAgICBfY3VycmVudEVycm9yOiBudW1iZXIgPSAwXHJcblxyXG4gICAgcHJpdmF0ZSBfaG9yaXpvbnRhbFJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfbWluRXJyb3JSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF9tYXhFcnJvclJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuICAgIHByaXZhdGUgX3JlY292ZXJSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF9zZWxmU3BpblJhbmdlUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG5cclxuICAgIHByaXZhdGUgX2xhc3RQb3MgOiBWZWN0b3JcclxuICAgIF9jb25maWdEYXRhIDogR2FtZUNvbnN0LldlYXBvblJlY29pbENvbmZpZ0RhdGFcclxuXHJcbiAgICBkaWZGdW5jdGlvbihfdW5zdGFiaWxpdHk6bnVtYmVyKSB7XHJcbiAgICAgICAgX3Vuc3RhYmlsaXR5ID0gX3Vuc3RhYmlsaXR5IHx8IHRoaXMuX3Vuc3RhYmlsaXR5XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuZGlmZnVzZUZ1bmN0aW9uID09PSBHYW1lQ29uc3QuRGlmZnVzZUZ1bmN0aW9uRW51bS5MaW5lYXIpIHtcclxuICAgICAgICAgICAgLy8gTGluZWFyIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJldHVybiBfdW5zdGFiaWxpdHlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuZGlmZnVzZUZ1bmN0aW9uID09PSBHYW1lQ29uc3QuRGlmZnVzZUZ1bmN0aW9uRW51bS5TcXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoX3Vuc3RhYmlsaXR5KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnRGF0YS5kaWZmdXNlRnVuY3Rpb24gPT09IEdhbWVDb25zdC5EaWZmdXNlRnVuY3Rpb25FbnVtLlNxdWFyZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3Vuc3RhYmlsaXR5ICogX3Vuc3RhYmlsaXR5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKF9kdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRGVjcmVhc2UgcmVjb2lsXHJcbiAgICAgICAgdGhpcy5fdW5zdGFiaWxpdHkgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgdGhpcy5fdW5zdGFiaWxpdHkgLSB0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VSZWNvdmVyUmF0ZSAqIF9kdCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgaW5mbHVlbmNlIGZhY3RvcnNcclxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVRhYmxlLmNsZWFyKClcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgTW92ZW1lbnQgYW5kIGp1bXBpbmdcclxuICAgICAgICBjb25zdCBjdXJQb3MgPSB0aGlzLmd1bi5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjdXJQb3Muc3VidHJhY3QodGhpcy5fbGFzdFBvcykubWFnbml0dWRlID4gMC41ICogX2R0IHx8XHJcbiAgICAgICAgICAgIHRoaXMuZ3VuLmNoYXJhY3Rlci5pc0p1bXBpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuc2V0KCdNb3ZlJywgdGhpcy5fY29uZmlnRGF0YS5qdW1wRXJyb3JTY2FsZSlcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuc2V0KCdNb3ZlJywgdGhpcy5fY29uZmlnRGF0YS5qdW1wRXJyb3JTY2FsZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5kZWxldGUoJ01vdmUnKVxyXG4gICAgICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5kZWxldGUoJ01vdmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sYXN0UG9zID0gY3VyUG9zXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGNyb3VjaGluZ1xyXG4gICAgICAgIGlmICh0aGlzLmd1bi5jaGFyYWN0ZXIuY3JvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLnNldCgnQ3JvdWNoJywgdGhpcy5fY29uZmlnRGF0YS5jcm91Y2hFcnJvclNjYWxlKVxyXG4gICAgICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5zZXQoJ0Nyb3VjaCcsIHRoaXMuX2NvbmZpZ0RhdGEuY3JvdWNoRXJyb3JTY2FsZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5kZWxldGUoJ0Nyb3VjaCcpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLmRlbGV0ZSgnQ3JvdWNoJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZ3VuLl93ZWFwb25BY2Nlc3NvcnlMaXN0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ob3Jpem9udGFsUmF0ZVRhYmxlLnNldChrLCB2Lmhvcml6b250YWxKdW1wUmFuZ2VSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl92ZXJ0aWNhbFJhdGVUYWJsZS5zZXQoaywgdi52ZXJ0aWNhbEp1bXBBbmdsZVJhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLnNldChrLCB2Lm1pbkVycm9yUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuc2V0KGssIHYubWF4RXJyb3JSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVRhYmxlLnNldChrLCB2Lmd1blJlY292ZXJSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVRhYmxlLnNldChrLCB2LnNlbGZTcGluUmFuZ2VSYXRlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGVycm9yXHJcbiAgICAgICAgdGhpcy5ndW4uZXJyb3IgPSB0aGlzLkdldERpZmZ1c2UoX2R0KVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgaW5mbHVlbmNlIGZhY3RvciBtYWduaXR1ZGVzXHJcbiAgICAgICAgdGhpcy5SZWZyZXNoU2NhbGVzKClcclxuICAgIH1cclxuICAgIEdldFZlcnRpY2FsKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fY29uZmlnRGF0YS52ZXJ0aWNhbEp1bXBBbmdsZSArIHRoaXMuX2NvbmZpZ0RhdGEudmVydGljYWxKdW1wUmFuZ2UgKiBXZWFwb25Ub29sLkdhdXNzUmFuZG9tKCkpICogdGhpcy5fdmVydGljYWxTY2FsZVxyXG4gICAgfVxyXG4gICAgR2V0SG9yaXpvbnRhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3Jpem9udGFsU2NhbGUgKiB0aGlzLl9jb25maWdEYXRhLmhvcml6b250YWxKdW1wUmFuZ2UgKiBXZWFwb25Ub29sLkdhdXNzUmFuZG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0TWluRXJyb3IoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5taW5FcnJvciAqIHRoaXMuX21pbkVycm9yU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0TWF4RXJyb3IoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5tYXhFcnJvciAqIHRoaXMuX21heEVycm9yU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0U2hha2VUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEuZ3VuUmVjb2lsIC8gKHRoaXMuX2NvbmZpZ0RhdGEuZ3VuUmVjb3ZlclJhdGUgKiB0aGlzLl9yZWNvdmVyUmF0ZVNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRTZWxmU3BpblJhbmdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEuc2VsZlNwaW5SYW5nZSAqIHRoaXMuX3NlbGZTcGluUmFuZ2VSYXRlU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgRmlyZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl91bnN0YWJpbGl0eSA9IE1hdGgubWluKDEuMCwgdGhpcy5fdW5zdGFiaWxpdHkgKyB0aGlzLl9jb25maWdEYXRhLmd1blJlY29pbCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0RGlmZnVzZShfZHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHRvYmUgPSB0aGlzLkdldE1pbkVycm9yKCkgKyB0aGlzLmRpZkZ1bmN0aW9uKG51bGwpICogKHRoaXMuR2V0TWF4RXJyb3IoKSAtIHRoaXMuR2V0TWluRXJyb3IoKSlcclxuICAgICAgICB0aGlzLl9jdXJyZW50RXJyb3IgKz0gX2R0ICogMTAgKiAodG9iZSAtIHRoaXMuX2N1cnJlbnRFcnJvcilcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEVycm9yXHJcbiAgICB9XHJcbiAgICBHZXRTaGFrZUludGVuc2l0eSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5zaGFrZUludGVuc2l0eVxyXG4gICAgfVxyXG5cclxuICAgIFJlZnJlc2hTY2FsZXMoKSB7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX21pbkVycm9yU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fbWF4RXJyb3JTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX3JlY292ZXJSYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICB9XHJcbiAgICBcclxufSIsICJleHBvcnQgY2xhc3MgV2VhcG9uU291bmRDbHN7XHJcblxyXG59IiwgIlx1RkVGRlxyXG4vKipcclxuICogQVVUTyBHRU5FUkFURSBCWSBVSSBFRElUT1IuXHJcbiAqIFdBUk5JTkc6IERPIE5PVCBNT0RJRlkgVEhJUyBGSUxFLE1BWSBDQVVTRSBDT0RFIExPU1QuXHJcbiAqIEFVVEhPUjogXHU2MjY3XHU3QjE0XHU3RUNGXHU1RTc0XHJcbiAqIFVJOiBVSS9EZWZhdWx0VUkudWlcclxuICogVElNRTogMjAyMy4wOC4wNS0wMC4yOS4yOVxyXG4qL1xyXG5cclxuXHJcblxyXG5AVUkuVUlDYWxsT25seSgnVUkvRGVmYXVsdFVJLnVpJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFVJX0dlbmVyYXRlIGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0XHJcblxyXG4gXHJcblx0LyoqXHJcblx0KiBvblN0YXJ0IFx1NEU0Qlx1NTI0RFx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uQXdha2UoKSB7XHJcblx0fVxyXG5cdCBcclxufVxyXG4gIiwgIlx1RkVGRlxyXG4vKipcclxuICogQVVUTyBHRU5FUkFURSBCWSBVSSBFRElUT1IuXHJcbiAqIFdBUk5JTkc6IERPIE5PVCBNT0RJRlkgVEhJUyBGSUxFLE1BWSBDQVVTRSBDT0RFIExPU1QuXHJcbiAqIEFVVEhPUjogXHU2MjY3XHU3QjE0XHU3RUNGXHU1RTc0XHJcbiAqIFVJOiBVSS9Nb25zdEluZm9VSS51aVxyXG4gKiBUSU1FOiAyMDIzLjA4LjA1LTAwLjI5LjI5XHJcbiovXHJcblxyXG5cclxuXHJcbkBVSS5VSUNhbGxPbmx5KCdVSS9Nb25zdEluZm9VSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0SW5mb1VJX0dlbmVyYXRlIGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0XHJcblxyXG4gXHJcblx0LyoqXHJcblx0KiBvblN0YXJ0IFx1NEU0Qlx1NTI0RFx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uQXdha2UoKSB7XHJcblx0fVxyXG5cdCBcclxufVxyXG4gIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFNTyxJQUFNLGNBQU4sTUFBd0M7QUFBQSxFQU03QixhQUFzQixDQUFDO0FBQUEsRUFDdkIsYUFBNEIsb0JBQUksSUFBZTtBQUFBLEVBQy9DLFNBQXNDLG9CQUFJLElBQUk7QUFBQSxFQUl4RCxZQUFZLFdBQTRCO0FBQzlDLFFBQUksYUFBb0I7QUFDeEIsU0FBSyxhQUFhLElBQUksTUFBTSxVQUFVLFNBQVMsVUFBVTtBQUV6RCxhQUFRLElBQUksR0FBRyxJQUFJLEtBQUssV0FBVyxRQUFRLEtBQUk7QUFDOUMsV0FBSyxXQUFXLEtBQUssQ0FBQztBQUFBLElBQ3ZCO0FBQ0EsUUFBSSxTQUFTLFVBQVUsR0FBRztBQUMxQixh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SyxZQUFZLFNBQVM7QUFDdkMsYUFBUyxVQUFVLElBQUksSUFBSTtBQUMzQixZQUFRLElBQUk7QUFBQSxXQUNILFVBQVUsWUFBWTtBQUN2QixpQkFBUyxTQUFTLEtBQUssWUFBWTtBQUNuQztBQUFBLFdBQ0MsVUFBVSxZQUFZO0FBQ3ZCLGlCQUFTLFNBQVMsS0FBSyxZQUFZO0FBQ25DO0FBQUEsV0FDQyxVQUFVLFlBQVk7QUFDdkIsaUJBQVMsU0FBUyxLQUFLLFlBQVk7QUFDbkM7QUFBQTtBQUVBO0FBQUE7QUFFUixRQUFHLFNBQVMsR0FBRTtBQUNWLFVBQUk7QUFDSixhQUFPLGNBQWMsVUFBVSxpQkFBaUIsaUJBQWlCLFFBQVEsY0FBYyxRQUFRLElBQUksT0FBTztBQUFBLElBRzlHO0FBQUEsRUFDSjtBQUFBLEVBQ1EsZ0JBQWdCO0FBQ3BCLFFBQUksU0FBUztBQUFBLEVBRWpCO0FBSUo7OztBTTFvQkE7QUFBQTtBQUFBO0FBQUE7QUFZQSxJQUFxQixxQkFBckIsY0FBZ0QsR0FBRyxXQUFXO0FBQUEsRUFPbkQsVUFBVTtBQUFBLEVBQ3BCO0FBRUQ7QUFWcUIscUJBQXJCO0FBQUEsRUFEQyxHQUFHLFdBQVcsaUJBQWlCO0FBQUEsR0FDWDs7O0FDWnJCO0FBQUE7QUFBQTtBQUFBO0FBWUEsSUFBcUIsdUJBQXJCLGNBQWtELEdBQUcsV0FBVztBQUFBLEVBT3JELFVBQVU7QUFBQSxFQUNwQjtBQUVEO0FBVnFCLHVCQUFyQjtBQUFBLEVBREMsR0FBRyxXQUFXLG1CQUFtQjtBQUFBLEdBQ2I7OztBekJlckIsZ0JBQTJCO0FBRXBCLElBQU0sY0FBYztBQUFBLEVBQ3RCLGlDQUFpQztBQUFBLEVBQ2pDLGlDQUFpQztBQUFBLEVBQ2pDLCtCQUErQjtBQUFBLEVBQy9CLHlCQUF5QjtBQUFBLEVBQ3pCLDBDQUEwQztBQUFBLEVBQzFDLDBDQUEwQztBQUFBLEVBQzFDLG9DQUFvQztBQUFBLEVBQ3BDLG1DQUFtQztBQUFBLEVBQ25DLDRCQUE0QjtBQUFBLEVBQzVCLHNDQUFzQztBQUFBLEVBQ3RDLDBCQUEwQjtBQUFBLEVBQzFCLDhCQUE4QjtBQUFBLEVBQzlCLDRCQUE0QjtBQUFBLEVBQzVCLDhCQUE4QjtBQUFBLEVBQzlCLHVDQUF1QztBQUFBLEVBQ3ZDLDZDQUE2QztBQUFBLEVBQzdDLHdDQUF3QztBQUFBLEVBQ3hDLHlDQUF5QztBQUFBLEVBQ3pDLG9DQUFvQztBQUFBLEVBQ3BDLHNDQUFzQztBQUFBLEVBQ3RDLG1DQUFtQztBQUFBLEVBQ25DLHdDQUF3QztBQUFBLEVBQ3hDLHNDQUFzQztBQUFBLEVBQ3RDLHFDQUFxQztBQUFBLEVBQ3JDLGlDQUFpQztBQUFBLEVBQ2pDLDhDQUE4QztBQUFBLEVBQzlDLGdEQUFnRDtBQUFBLEVBQ2hELFNBQVM7QUFDZDsiLAogICJuYW1lcyI6IFsiV2VhcG9uVG9vbCJdCn0K
