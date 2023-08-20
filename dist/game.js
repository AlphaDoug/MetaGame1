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
var GamePlayMain = class extends Core.Script {
  onStart() {
    Events.addPlayerJoinedListener(this.OnPlayerJoined.bind(this));
    Events.addPlayerLeftListener(this.OnPlayerLeft.bind(this));
  }
  OnPlayerJoined(player) {
    console.log("\u73A9\u5BB6\u52A0\u5165" + player.character.guid);
    let obj = GameObject.spawn({ guid: "419E9A8A411721D818EACAAEFF979263", replicates: true });
    console.log("\u811A\u672C\u4E3A" + obj);
  }
  OnPlayerLeft(player) {
    console.log("\u73A9\u5BB6\u79BB\u5F00" + player.character.characterName);
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
    this.maxHp = 100;
    this.hp = this.maxHp;
    let s = this.character.characterName;
  }
  InitData(c) {
    if (this.isRunningClient()) {
      return;
    }
    this.character = c;
    this.maxHp = 100;
    this.hp = this.maxHp;
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
};
var PlayerBehavior = _PlayerBehavior;
__publicField(PlayerBehavior, "_instance");

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
};
var CameraController = _CameraController;
__publicField(CameraController, "_instance");

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0V2ZW50Q29uc3QudHMiLCAiSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdC50cyIsICJidWlsZC50cyIsICI8c3RkaW4+IiwgIkphdmFTY3JpcHRzL0NvbmZpZy9Db25maWdCYXNlLnRzIiwgIkphdmFTY3JpcHRzL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwgIkphdmFTY3JpcHRzL0NvbmZpZy9Nb25zdGVycy50cyIsICJKYXZhU2NyaXB0cy9EZWZhdWx0VUkudHMiLCAiSmF2YVNjcmlwdHMvRW50aXR5L01vbnN0ZXIvTW9uc3RlckJhc2UudHMiLCAiSmF2YVNjcmlwdHMvRmFjdG9yeS9GYWNfSW50ZXJhY3RPYmplY3QudHMiLCAiSmF2YVNjcmlwdHMvR2FtZVBsYXlNYWluLnRzIiwgIkphdmFTY3JpcHRzL0ludGVyZmFjZS9JSW50ZXJhY3Rpb24udHMiLCAiSmF2YVNjcmlwdHMvUGxheWVyQXR0ci50cyIsICJKYXZhU2NyaXB0cy9QbGF5ZXJCZWhhdmlvci50cyIsICJKYXZhU2NyaXB0cy9QbGF5ZXJHdW5NZ3IudHMiLCAiSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXIudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblRvb2wudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscy50cyIsICJKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUudHMiLCAiSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImRlY2xhcmUgbmFtZXNwYWNlIEV2ZW50Q29uc3R7XHJcbiAgICBlbnVtIENsaWVudEV2ZW50IHtcclxuICAgICAgICBQbGF5ZXJCZUhpdEV2ZW50ID0gXCJQbGF5ZXJCZUhpdEV2ZW50XCIsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkV2ZW50ID0gXCJQbGF5ZXJOZWFyV2VhcG9uRXZlbnRcIixcclxuICAgICAgICBQbGF5ZXJGYXJXZWFwb25FdmVudCA9ICdQbGF5ZXJGYXJXZWFwb25FdmVudCcsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkFjY2Vzc29yeUV2ZW50ID0gJ1BsYXllck5lYXJXZWFwb25BY2Nlc3NvcnlFdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQgPSAnUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQnLFxyXG4gICAgICAgIFBsYXllck5lYXJBbW1vRXZlbnQgPSAnUGxheWVyTmVhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyQW1tb0V2ZW50ID0gJ1BsYXllckZhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRGllRXZlbnQgPSAnUGxheWVyRGllRXZlbnQnLFxyXG4gICAgICAgIENyZWF0ZUFsbFVuaXRFdmVudCA9ICdDcmVhdGVBbGxVbml0RXZlbnQnLFxyXG4gICAgICAgIFNldHRpbmdBc3NBaW1SZWZyZXNoRXZlbnQgPSAnU2V0dGluZ0Fzc0FpbVJlZnJlc2hFdmVudCcsXHJcbiAgICAgICAgU3luY0RhdGFFdmVudCA9ICdTeW5jRGF0YUV2ZW50JyxcclxuICAgICAgICBPbkVxdWlwV2VhcG9uRXZlbnQgPSAnT25FcXVpcFdlYXBvbkV2ZW50JyxcclxuICAgICAgICBTZXR0aW5nUmVhZHlFdmVudCA9ICdTZXR0aW5nUmVhZHlFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQ3JlYXRlZEV2ZW50ID0gJ1dlYXBvbk9iakNyZWF0ZWRFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQgPSAnV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQnXHJcbiAgICB9XHJcbiAgICBlbnVtIFNlcnZlckV2ZW50IHtcclxuICAgICAgICBXZWFwb25IaXRQbGF5ZXJFdmVudCA9J1dlYXBvbkhpdFBsYXllckV2ZW50JyxcclxuICAgICAgICBDcmVhdGVBbW1vRXZlbnQgPSdDcmVhdGVBbW1vRXZlbnQnLFxyXG4gICAgICAgIERlc3Ryb3lBbW1vRXZlbnQgPSdEZXN0cm95QW1tb0V2ZW50JyxcclxuICAgICAgICBQbGF5ZXJQaWNrQW1tb0V2ZW50ID0gJ1BsYXllclBpY2tBbW1vRXZlbnQnLFxyXG4gICAgICAgIFBsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50ID0gJ1BsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50JyxcclxuICAgICAgICBQbGF5ZXJEYXRhTW9kaWZpRXZlbnQgPSAnUGxheWVyRGF0YU1vZGlmaUV2ZW50JyxcclxuICAgICAgICBTeW5jQW5kU2F2ZUV2ZW50ID0gJ1N5bmNBbmRTYXZlRXZlbnQnLFxyXG4gICAgICAgIFdlYXBvbk9iakNyZWF0ZWRFdmVudCA9ICdXZWFwb25PYmpDcmVhdGVkRXZlbnQnXHJcbiAgICB9XHJcbn0iLCAiZGVjbGFyZSBuYW1lc3BhY2UgR2FtZUNvbnN0e1xyXG4gICAgZW51bSBMb2NhbFdlYXBvbkV2ZW50IHtcclxuICAgICAgICBQaWNrV2VhcG9uID0gJ1BpY2tXZWFwb24nLFxyXG4gICAgICAgIERyYXdXZWFwb24gPSAnRHJhd1dlYXBvbicsXHJcbiAgICAgICAgV2l0aERyYXdXZWFwb24gPSAnV2l0aERyYXdXZWFwb24nLFxyXG4gICAgICAgIE1hZ2F6aW5lTG9hZFN0YXJ0ZWQgPSAnTWFnYXppbmVMb2FkU3RhcnRlZCcsXHJcbiAgICAgICAgRnVsbHlMb2FkZWQgPSAnRnVsbHlMb2FkZWQnLFxyXG4gICAgICAgIEJ1bGxldExvYWRTdGFydGVkID0gJ0J1bGxldExvYWRTdGFydGVkJyxcclxuICAgICAgICBCdWxsZXRMb2FkZWQgPSAnQnVsbGV0TG9hZGVkJyxcclxuICAgICAgICBSZWxvYWRGaW5pc2hlZCA9ICdSZWxvYWRGaW5pc2hlZCcsXHJcbiAgICAgICAgUHVtcFN0YXJ0ZWQgPSAnUHVtcFN0YXJ0ZWQnLFxyXG4gICAgICAgIFB1bXBlZCA9ICdQdW1wZWQnLFxyXG4gICAgICAgIEZpcmVkID0gJ0ZpcmVkJyxcclxuICAgICAgICBFbXB0eUZpcmUgPSAnRW1wdHlGaXJlJyxcclxuICAgICAgICBGaXJlU3RhcnRlZCA9ICdGaXJlU3RhcnRlZCcsXHJcbiAgICAgICAgRmlyZVN0b3BwZWQgPSAnRmlyZVN0b3BwZWQnLFxyXG4gICAgICAgIFN1Y2Nlc3NmdWxseUhpdCA9ICdTdWNjZXNzZnVsbHlIaXQnLFxyXG4gICAgICAgIFN1Y2Nlc3NmdWxseUhpdFRhcmdldCA9ICdTdWNjZXNzZnVsbHlIaXRUYXJnZXQnLFxyXG4gICAgICAgIEFpbUluID0gJ0FpbUluJyxcclxuICAgICAgICBBaW1PdXQgPSAnQWltT3V0JyxcclxuICAgIH1cclxuICAgIGVudW0gR3VuTW9kZUVudW0ge1xyXG4gICAgICAgIFNuaXBlclJpZmxlID0gMSwgXHJcbiAgICAgICAgQXNzYXVsdFJpZmxlID0gMiwgXHJcbiAgICAgICAgU3ViTWFjaGluZUd1biA9IDMsXHJcbiAgICAgICAgU2hvdEd1biA9IDQsIFxyXG4gICAgICAgIFBpc3RvbCA9IDUsIFxyXG4gICAgICAgIE1lbGVlV2VhcG9uID0gNiwgXHJcbiAgICAgICAgVGhyb3duV2VhcG9uID0gNywgXHJcbiAgICAgICAgUm9ja2V0TGF1bmNoZXIgPSA4LCBcclxuICAgICAgICBPdGhlciA9IDksIFxyXG4gICAgICAgIFRyYWlsaW5nR3VuID0gMTBcclxuICAgIH1cclxuICAgIGVudW0gSGl0UGFydEVudW17XHJcbiAgICAgICAgTm9uZSA9IDAsXHJcbiAgICAgICAgSGVhZCA9IDEsXHJcbiAgICAgICAgQm9keSA9IDIsXHJcbiAgICAgICAgTGltYiA9IDMsXHJcbiAgICAgICAgRm9ydCA9IDRcclxuICAgIH1cclxuICAgIGVudW0gRmlyZU1vZGVFbnVte1xyXG4gICAgICAgIEF1dG8gPSAxLCBcclxuICAgICAgICBSYXBpZGx5XzEgPSAyLCBcclxuICAgICAgICBSYXBpZGx5XzIgPSAzLCBcclxuICAgICAgICBTaW5nbGUgPSA0IFxyXG4gICAgfVxyXG4gICAgZW51bSBEaWZmdXNlRnVuY3Rpb25FbnVte1xyXG4gICAgICAgIExpbmVhciA9IDEsXHJcbiAgICAgICAgU3FydCA9IDIsXHJcbiAgICAgICAgU3F1YXJlID0gM1xyXG4gICAgfVxyXG4gICAgZW51bSBDYW5CZUVxdWlwUG9zaXRpb25FbnVte1xyXG4gICAgICAgIE1haW5PckRlcHV0eSA9IDEsXHJcbiAgICAgICAgTWluaSA9IDIsXHJcbiAgICAgICAgUHJvcCA9IDNcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1OTE0RFx1NEVGNlx1N0M3Qlx1NTc4QiAqL1xyXG4gICAgZW51bSBXZWFwb25BY2Nlc3NvcnlUeXBlRW51bXtcclxuICAgICAgICBNdXp6bGUgPSAxLFxyXG4gICAgICAgIEdyaXAgPSAyLFxyXG4gICAgICAgIE1hZ2F6aW5lID0gMyxcclxuICAgICAgICBCdXR0ID0gNCxcclxuICAgICAgICBTaWdodCA9IDVcclxuICAgIH1cclxuICAgIGVudW0gVW5pdFR5cGVFbnVte1xyXG4gICAgICAgIFdlYXBvbiA9IDEsXHJcbiAgICAgICAgQWNjZXNzb3J5ID0gMixcclxuICAgICAgICBBbW1vID0gM1xyXG4gICAgfVxyXG4gICAgZW51bSBPYmplY3RUeXBlRW51bXtcclxuICAgICAgICBIb2xlID0gMSxcclxuICAgICAgICBGaXJlRWZmID0gMixcclxuICAgICAgICBIaXRFZmYgPSAzLFxyXG4gICAgICAgIFNoZWxsID0gNCxcclxuICAgICAgICBTb3VuZCA9IDVcclxuICAgIH1cclxuICAgIGVudW0gUGxheWVyQWN0aW9uTW9kZUVudW17XHJcbiAgICAgICAgUnVuID0gMSwgXHJcbiAgICAgICAgUXVpY2tseVJ1biA9IDIsIFxyXG4gICAgICAgIEFpbVJ1biA9IDMsIFxyXG4gICAgICAgIENyb3VjaFJ1biA9IDQsIFxyXG4gICAgICAgIFF1aWNrbHlDcm91Y2hSdW4gPSA1LCBcclxuICAgICAgICBBaW1Dcm91Y2hSdW4gPSA2IFxyXG4gICAgfVxyXG59XHJcbmRlY2xhcmUgbmFtZXNwYWNlIEdhbWVDb25zdHtcclxuICAgIHR5cGUgRGFtYWdlQXR0ZW51YXRpb24gPSB7XHJcbiAgICAgICAgRGlzdGFuY2U6IG51bWJlcjtcclxuICAgICAgICBBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgQm9uZVdlaWdodCA9IHtcclxuXHJcbiAgICB9XHJcbiAgICB0eXBlIFdlYXBvbkhpdFJlc3VsdCA9IHtcclxuICAgICAgICBIaXRQb2ludCA6IFZlY3RvclxyXG4gICAgICAgIEhpdE9iamVjdCA6IEdhbWVPYmplY3RcclxuICAgICAgICBIaXROb3JtYWwgOiBWZWN0b3JcclxuICAgICAgICBIaXRQYXJ0IDogSGl0UGFydEVudW1cclxuICAgICAgICBJc1RhcmdldCA6IGJvb2xlYW5cclxuICAgICAgICBEYW1hZ2UgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1OTE0RFx1N0Y2RVx1OTc1OVx1NjAwMVx1NUM1RVx1NjAyNyAqL1xyXG4gICAgdHlwZSBXZWFwb25Db25maWdEYXRhID0ge1xyXG4gICAgICAgIG5hbWUgOiBzdHJpbmdcclxuICAgICAgICBkZXMgOiBzdHJpbmdcclxuICAgICAgICBpY29uIDogc3RyaW5nXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uIDogc3RyaW5nXHJcbiAgICAgICAgb3JkZXIgOiBudW1iZXJcclxuICAgICAgICBkZWZhdWx0QWltSW1nIDogc3RyaW5nXHJcbiAgICAgICAgd2Fpc3RBaW1Nb2RlIDogc3RyaW5nXHJcbiAgICAgICAgcmVjb2lsSWQgOiBudW1iZXJcclxuICAgICAgICBhbmltYXRpb25JZCA6IG51bWJlclxyXG4gICAgICAgIGJhblNob290IDogYm9vbGVhblxyXG4gICAgICAgIGlzSGl0U2VsZiA6IGJvb2xlYW5cclxuICAgICAgICBpc0hpdEZyaWVuZCA6IGJvb2xlYW5cclxuICAgICAgICBjYW5CZUVxdWlwQWNjZXNzb3J5IDogbnVtYmVyW11cclxuICAgICAgICBkYW1hZ2UgOiBudW1iZXJcclxuICAgICAgICBtYWdhemluZVVzZWQgOiBudW1iZXJcclxuICAgICAgICBoaXRIZWFkRGFtYWdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGhpdEJvZHlEYW1hZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgaGl0TGltYkRhbWFnZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBkaXN0YW5jZSA6IG51bWJlclxyXG4gICAgICAgIGJ1bGxldE5hbWUgOiBzdHJpbmdcclxuICAgICAgICBidWxsZXRIb2xlIDogc3RyaW5nXHJcbiAgICAgICAgYnVsbGV0U2hlbGwgOiBzdHJpbmdcclxuICAgICAgICBhdXRvUmVsb2FkIDogYm9vbGVhblxyXG4gICAgICAgIG1lY2hpbmljYWxBaW1GT1YgOiBudW1iZXJcclxuICAgICAgICB3YWlzdEFpbUZPViA6IG51bWJlclxyXG4gICAgICAgIHNob290U3BlZWQgOiBudW1iZXJcclxuICAgICAgICBidWxsZXRQZXJTaG9vdCA6IG51bWJlclxyXG4gICAgICAgIGNvbnN1bWVTaW5nbGVCdWxsZXRQZXJTaG9vdCA6IG51bWJlclxyXG4gICAgICAgIHNob290TW9kZSA6IEZpcmVNb2RlRW51bVtdXHJcbiAgICAgICAgZGVmYXVsdFNob290TW9kZSA6IEZpcmVNb2RlRW51bVxyXG4gICAgICAgIHJhcGlkbHlfMSA6IG51bWJlclxyXG4gICAgICAgIHJhcGlkbHlfMiA6IG51bWJlclxyXG4gICAgICAgIGd1bk1vZGUgOiBHdW5Nb2RlRW51bVxyXG4gICAgICAgIGFjY3VyYXRlQWltIDogYm9vbGVhblxyXG4gICAgICAgIGNhbkJlRXF1aXBQb3NpdGlvbiA6IENhbkJlRXF1aXBQb3NpdGlvbkVudW1cclxuICAgICAgICBhaW1UaW1lIDogbnVtYmVyXHJcbiAgICAgICAgc3RvcEFpbVRpbWUgOiBudW1iZXJcclxuICAgICAgICBhc3Npc3RBaW1UaW1lIDogbnVtYmVyXHJcbiAgICAgICAgYXNzaXN0QWltRGlzMCA6IG51bWJlclxyXG4gICAgICAgIGFzc2lzdEFpbURpczEgOiBudW1iZXJcclxuICAgICAgICBhc3Npc3RBaW1SYXRpbyA6IG51bWJlclxyXG4gICAgICAgIHJlbG9hZFdpdGhNYWdhemluZXMgOiBib29sZWFuXHJcbiAgICAgICAgY2FuSW50ZXJydXB0QnVsbGV0TG9hZCA6IGJvb2xlYW5cclxuICAgICAgICBoaXRFZmZlY3QgOiBzdHJpbmdcclxuICAgICAgICBmaXJlRWZmZWN0IDogc3RyaW5nXHJcbiAgICAgICAgYnVsbGV0U3BlZWQgOiBudW1iZXJcclxuICAgICAgICBkYW1hZ2VBdHRlbnVhdGlvbiA6IERhbWFnZUF0dGVudWF0aW9uW11cclxuICAgICAgICBleHBsb3Npb25EYW1hZ2VBdHRlbnVhdGlvbiA6IERhbWFnZUF0dGVudWF0aW9uW11cclxuICAgICAgICBjaGFyYWN0ZXJBbmltYXRpb25Nb2RlIDogbnVtYmVyXHJcbiAgICAgICAgcHVtcEFmdGVyRmluYWxMb2FkIDogYm9vbGVhblxyXG4gICAgICAgIHB1bXBBZnRlckZpcmUgOiBib29sZWFuXHJcbiAgICAgICAgYm9uZVdlaWdodCA6IEJvbmVXZWlnaHRcclxuICAgICAgICBkYW1hZ2VSZXNwb25zZVdhaXRUaW1lIDogbnVtYmVyXHJcbiAgICAgICAgZ3Jhdml0eVNjYWxlIDogbnVtYmVyXHJcbiAgICAgICAgZXhwbG9zaW9uUmFuZ2UgOiBudW1iZXJcclxuICAgICAgICB3ZWlnaHQgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NUYzOVx1NTkzOVx1OTE0RFx1N0Y2RVx1OTc1OVx1NjAwMVx1NUM1RVx1NjAyNyAqL1xyXG4gICAgdHlwZSBXZWFwb25NYWdhemluZUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbWF0Y2hBbW1vIDogbnVtYmVyXHJcbiAgICAgICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIG1heE51bSA6IG51bWJlclxyXG4gICAgICAgIGxvYWRUaW1lIDogbnVtYmVyXHJcbiAgICAgICAgYW1tb05hbWUgOiBzdHJpbmdcclxuICAgICAgICBhbW1vRGVzIDogc3RyaW5nXHJcbiAgICAgICAgYW1tb0ljb24gOiBzdHJpbmdcclxuICAgICAgICBhbW1vSGl0VGV4dHVyZSA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9Nb2RlbCA6IHN0cmluZ1xyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5MTREXHU0RUY2XHU5MTREXHU3RjZFXHU5NzU5XHU2MDAxXHU1QzVFXHU2MDI3ICovXHJcbiAgICB0eXBlIFdlYXBvbkFjY2Vzc29yeUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGRlcyA6IHN0cmluZ1xyXG4gICAgICAgIGljb24gOiBzdHJpbmdcclxuICAgICAgICBsb2NhdGlvbiA6IEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bVxyXG4gICAgICAgIG9yZGVyIDogbnVtYmVyXHJcbiAgICAgICAgbW9kZWwgOiBzdHJpbmdcclxuICAgICAgICBpc1NpbGVuY2VyIDogYm9vbGVhblxyXG4gICAgICAgIGFpbUZvdlJhdGUgOiBudW1iZXIgXHJcbiAgICAgICAgbWluRXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgbWF4RXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuUmVjb3ZlclJhdGUgOiBudW1iZXJcclxuICAgICAgICB2ZXJ0aWNhbEp1bXBBbmdsZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBob3Jpem9udGFsSnVtcFJhbmdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIHNlbGZTcGluUmFuZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAganVtcEZvdlJhdGUgOiBudW1iZXJcclxuICAgICAgICBidWxsZXRTcGVlZFJhdGUgOiBudW1iZXJcclxuICAgICAgICBtYWdhemluZUxvYWRUaW1lUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIG1heEFtbW9SYXRlIDogTWFwPG51bWJlciwgbnVtYmVyPlxyXG4gICAgICAgIGFpbVRpbWVSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgcGlja1NvdW5kIDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTc2RjhcdTY3M0FcdTc2RjhcdTUxNzNcdTc2ODRcdTkxNERcdTdGNkUgKi9cclxuICAgIHR5cGUgV2VhcG9uQ2FtZXJhQ29uZmlnRGF0YSA9IHtcclxuICAgICAgICB2aWJyYXRpb25EdW1wIDogbnVtYmVyXHJcbiAgICAgICAgdmlicmF0aW9uT21lZ2EgOiBudW1iZXJcclxuICAgICAgICBqdW1wVGltZSA6IG51bWJlclxyXG4gICAgICAgIGp1bXBGT1YgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NTQwRVx1NTc1MFx1NTI5Qlx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgdHlwZSBXZWFwb25SZWNvaWxDb25maWdEYXRhID0ge1xyXG4gICAgICAgIG1pbkVycm9yIDogbnVtYmVyXHJcbiAgICAgICAgbWF4RXJyb3IgOiBudW1iZXJcclxuICAgICAgICBndW5SZWNvaWwgOiBudW1iZXJcclxuICAgICAgICBndW5SZWNvdmVyUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGRpZmZ1c2VSZWNvdmVyUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIHZlcnRpY2FsSnVtcEFuZ2xlIDogbnVtYmVyXHJcbiAgICAgICAgYmFja1RvdGFsIDogbnVtYmVyXHJcbiAgICAgICAgaG9yaXpvbnRhbEp1bXBSYW5nZSA6IG51bWJlclxyXG4gICAgICAgIHZlcnRpY2FsSnVtcFJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgc2VsZlNwaW5SYW5nZSA6IG51bWJlclxyXG4gICAgICAgIHNlbGZTcGluTWF4IDogbnVtYmVyXHJcblxyXG4gICAgICAgIHVpSnVtcEFtcGwgOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBNYXggOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBEdW1wIDogbnVtYmVyXHJcbiAgICAgICAgdWlKdW1wT21lZ2EgOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBBbmdsZSA6IG51bWJlclxyXG5cclxuICAgICAgICBzaGFrZUludGVuc2l0eSA6IG51bWJlclxyXG4gICAgICAgIGRpZmZ1c2VGdW5jdGlvbiA6IERpZmZ1c2VGdW5jdGlvbkVudW1cclxuICAgICAgICBqdW1wRXJyb3JTY2FsZSA6IG51bWJlclxyXG4gICAgICAgIGNyb3VjaEVycm9yU2NhbGUgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NTJBOFx1NzUzQlx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgdHlwZSBXZWFwb25BbmltYXRpb25Db25maWdEYXRhID0ge1xyXG4gICAgICAgIGd1bmlkIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuRXZuZXQgOiBudW1iZXJcclxuICAgICAgICBpc0xvb3AgOiBib29sZWFuXHJcbiAgICAgICAgVHJhbnNpdGlvbkR1cmF0aW9uIDogbnVtYmVyXHJcbiAgICAgICAgQW5pbWF0aW9uTmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIERldGFpbCA6IHN0cmluZ1xyXG4gICAgICAgIFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgV2VpZ2h0IDogbnVtYmVyXHJcbiAgICAgICAgQ292ZXJwbGF5IDogbnVtYmVyXHJcbiAgICAgICAgR3VuTmFtZSA6IHN0cmluZ1xyXG4gICAgfVxyXG59IiwgIiIsICJpbXBvcnQgKiBhcyBmb3JlaWduMSBmcm9tICcuL0phdmFTY3JpcHRzL0NvbmZpZy9Db25maWdCYXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yIGZyb20gJy4vSmF2YVNjcmlwdHMvQ29uZmlnL0dhbWVDb25maWcnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvTW9uc3RlcnMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjQgZnJvbSAnLi9KYXZhU2NyaXB0cy9EZWZhdWx0VUknO1xuaW1wb3J0ICogYXMgZm9yZWlnbjUgZnJvbSAnLi9KYXZhU2NyaXB0cy9FbnRpdHkvTW9uc3Rlci9Nb25zdGVyQmFzZSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNiBmcm9tICcuL0phdmFTY3JpcHRzL0ZhY3RvcnkvRmFjX0ludGVyYWN0T2JqZWN0JztcbmltcG9ydCAqIGFzIGZvcmVpZ243IGZyb20gJy4vSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0V2ZW50Q29uc3QnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjggZnJvbSAnLi9KYXZhU2NyaXB0cy9HYW1lQ29uc3QvR2FtZUNvbnN0JztcbmltcG9ydCAqIGFzIGZvcmVpZ245IGZyb20gJy4vSmF2YVNjcmlwdHMvR2FtZVBsYXlNYWluJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xMCBmcm9tICcuL0phdmFTY3JpcHRzL0ludGVyZmFjZS9JSW50ZXJhY3Rpb24nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjExIGZyb20gJy4vSmF2YVNjcmlwdHMvUGxheWVyQXR0cic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTIgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJCZWhhdmlvcic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTMgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJHdW5NZ3InO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE0IGZyb20gJy4vSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE1IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE2IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE3IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xOCBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE5IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIwIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjEgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yMiBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yNCBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjUgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uVG9vbCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjYgZnJvbSAnLi9KYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI3IGZyb20gJy4vSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI4IGZyb20gJy4vYnVpbGQnO1xuXG5leHBvcnQgY29uc3QgTVdNb2R1bGVNYXAgPSB7IFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UnOiBmb3JlaWduMSxcbiAgICAgJ0phdmFTY3JpcHRzL0NvbmZpZy9HYW1lQ29uZmlnJzogZm9yZWlnbjIsXG4gICAgICdKYXZhU2NyaXB0cy9Db25maWcvTW9uc3RlcnMnOiBmb3JlaWduMyxcbiAgICAgJ0phdmFTY3JpcHRzL0RlZmF1bHRVSSc6IGZvcmVpZ240LFxuICAgICAnSmF2YVNjcmlwdHMvRW50aXR5L01vbnN0ZXIvTW9uc3RlckJhc2UnOiBmb3JlaWduNSxcbiAgICAgJ0phdmFTY3JpcHRzL0ZhY3RvcnkvRmFjX0ludGVyYWN0T2JqZWN0JzogZm9yZWlnbjYsXG4gICAgICdKYXZhU2NyaXB0cy9HYW1lQ29uc3QvRXZlbnRDb25zdCc6IGZvcmVpZ243LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdCc6IGZvcmVpZ244LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZVBsYXlNYWluJzogZm9yZWlnbjksXG4gICAgICdKYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uJzogZm9yZWlnbjEwLFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyQXR0cic6IGZvcmVpZ24xMSxcbiAgICAgJ0phdmFTY3JpcHRzL1BsYXllckJlaGF2aW9yJzogZm9yZWlnbjEyLFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyR3VuTWdyJzogZm9yZWlnbjEzLFxuICAgICAnSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwnOiBmb3JlaWduMTQsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vQ2FtZXJhQ29udHJvbGxlcic6IGZvcmVpZ24xNSxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzJzogZm9yZWlnbjE2LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzJzogZm9yZWlnbjE3LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFuaW1hdGlvbkNscyc6IGZvcmVpZ24xOCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25CYXNlQ2xzJzogZm9yZWlnbjE5LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscyc6IGZvcmVpZ24yMCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25HVUlDbHMnOiBmb3JlaWduMjEsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uTWFnYXppbmVDbHMnOiBmb3JlaWduMjIsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzJzogZm9yZWlnbjIzLFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblNvdW5kQ2xzJzogZm9yZWlnbjI0LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblRvb2wnOiBmb3JlaWduMjUsXG4gICAgICdKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUnOiBmb3JlaWduMjYsXG4gICAgICdKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9Nb25zdEluZm9VSV9nZW5lcmF0ZSc6IGZvcmVpZ24yNyxcbiAgICAgJ2J1aWxkJzogZm9yZWlnbjI4LFxufVxuIiwgIlxyXG4vL1x1NTE0M1x1N0QyMFx1NzY4NFx1NTdGQVx1N0M3QlxyXG5leHBvcnQgaW50ZXJmYWNlIElFbGVtZW50QmFzZXtcclxuXHRpZDpudW1iZXI7XHJcbn1cclxuLy9cdTkxNERcdTdGNkVcdTc2ODRcdTU3RkFcdTdDN0JcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0Jhc2U8VCBleHRlbmRzIElFbGVtZW50QmFzZT57XHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0tFWTpzdHJpbmcgPSAnS2V5JzsvL1x1OEJGQlx1NTNENlx1OTUyRShcdTk2NjRcdTRFODZJRFx1NEU0Qlx1NTkxNlx1NzY4NFx1NTIyQlx1NTQwRFx1RkYwQ1x1NUUyNmtleVx1NzY4NFx1NUI1N1x1NkJCNVx1NUZDNVx1OTg3Qlx1NjYyRnN0cmluZ1x1N0M3Qlx1NTc4QilcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfTEFOR1VBR0U6c3RyaW5nID0gJ0xhbmd1YWdlJzsvL1x1NTE3M1x1ODA1NFx1OEJFRFx1OEEwMFx1ODg2OFx1NzY4NGlkXHU2MjE2a2V5KFx1NTk4Mlx1Njc5Q1x1NjcwOVx1OEZEOVx1NEUyQXRhZ1x1RkYwQ1x1NUJGQ1x1ODg2OFx1NURFNVx1NTE3N1x1ODk4MVx1NjI4QVx1NjU3MFx1NjM2RVx1NzUxRlx1NjIxMFx1NEUzQXN0cmluZ1x1N0M3Qlx1NTc4Qlx1RkYwQ1x1NTZFMFx1NEUzQVx1NEYxQVx1ODFFQVx1NTJBOFx1OEZEQlx1ODg0Q1x1NTAzQ1x1NzY4NFx1OEY2Q1x1NjM2MilcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfTUFJTkxBTkdVQUdFOnN0cmluZyA9ICdNYWluTGFuZ3VhZ2UnOy8vXHU0RTNCXHU4QkVEXHU4QTAwdGFnXHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0NISUxETEFOR1VBR0U6c3RyaW5nID0gJ0NoaWxkTGFuZ3VhZ2UnOy8vXHU1QjUwXHU4QkVEXHU4QTAwdGFnXHJcblxyXG5cdHByaXZhdGUgcmVhZG9ubHkgRUxFTUVOVEFSUjpBcnJheTxUPiA9IFtdO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgRUxFTUVOVE1BUDpNYXA8bnVtYmVyLCBUPiA9IG5ldyBNYXA8bnVtYmVyLCBUPigpO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgS0VZTUFQOk1hcDxudW1iZXIgfCBzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XHJcblx0cHJpdmF0ZSBzdGF0aWMgbGFuZ3VhZ2VJbmRleDpudW1iZXIgPSAwXHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0TGFuZ3VhZ2U6KGtleTpzdHJpbmd8bnVtYmVyKT0+c3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXhjZWxEYXRhOkFycmF5PEFycmF5PGFueT4+KXtcclxuXHRcdGxldCBoZWFkZXJMaW5lOm51bWJlciA9IDI7Ly9cdTg4NjhcdTU5MzRcdTc2ODRcdTg4NENcdTY1NzBcclxuXHRcdHRoaXMuRUxFTUVOVEFSUiA9IG5ldyBBcnJheShleGNlbERhdGEubGVuZ3RoIC0gaGVhZGVyTGluZSk7XHJcblx0XHRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHR0aGlzLkVMRU1FTlRBUlJbaV0gPSB7fSBhcyBUXHJcblx0XHR9XHJcblx0XHRsZXQgY29sdW1uID0gZXhjZWxEYXRhWzBdLmxlbmd0aDsvL1x1NTIxN1x1NjU3MFxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IGNvbHVtbjsgaisrKXsvL1x1OTA0RFx1NTM4Nlx1NTQwNFx1NTIxN1xyXG5cdFx0XHRsZXQgbmFtZTpzdHJpbmcgPSBleGNlbERhdGFbMF1bal07XHJcblx0XHRcdGxldCB0YWdzOkFycmF5PHN0cmluZz4gPSBleGNlbERhdGFbMV1bal0uc3BsaXQoJ3wnKTtcclxuXHRcdFx0aWYodGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19DSElMRExBTkdVQUdFKSkgY29udGludWU7XHJcblx0XHRcdGxldCBqT2ZmZWN0Om51bWJlciA9IDA7Ly9cdTUyMTdcdTUwNEZcdTc5RkJcdTkxQ0ZcclxuXHRcdFx0aWYodGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19NQUlOTEFOR1VBR0UpKXtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBqICsgQ29uZmlnQmFzZS5sYW5ndWFnZUluZGV4O1xyXG5cdFx0XHRcdGxldCB0YXJnZXRUYWdzOkFycmF5PHN0cmluZz4gPSBleGNlbERhdGFbMV1baW5kZXhdLnNwbGl0KCd8Jyk7XHJcblx0XHRcdFx0aWYoaW5kZXggPCBjb2x1bW4gJiYgdGFyZ2V0VGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19DSElMRExBTkdVQUdFKSl7XHJcblx0XHRcdFx0XHRqT2ZmZWN0ID0gQ29uZmlnQmFzZS5sYW5ndWFnZUluZGV4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgaGFzVGFnX0tleTpib29sZWFuID0gdGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19LRVkpO1xyXG5cdFx0XHRsZXQgaGFzVGFnX0xhbmd1YWdlOmJvb2xlYW4gPSB0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0xBTkdVQUdFKTtcclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0bGV0IGVsZSA9IHRoaXMuRUxFTUVOVEFSUltpXTtcclxuXHRcdFx0XHRsZXQgdmFsdWUgPSBleGNlbERhdGFbaSArIGhlYWRlckxpbmVdW2ogKyBqT2ZmZWN0XTtcclxuXHRcdFx0XHRpZihqID09IDApey8vSURcclxuXHRcdFx0XHRcdHRoaXMuRUxFTUVOVE1BUC5zZXQodmFsdWUsIGVsZSk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpZihoYXNUYWdfS2V5KXtcclxuXHRcdFx0XHRcdFx0dGhpcy5LRVlNQVAuc2V0KHZhbHVlLCBleGNlbERhdGFbaSArIGhlYWRlckxpbmVdWzBdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKGhhc1RhZ19MYW5ndWFnZSl7XHJcblx0XHRcdFx0XHRcdGlmKENvbmZpZ0Jhc2UuZ2V0TGFuZ3VhZ2UgIT0gbnVsbCl7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBDb25maWdCYXNlLmdldExhbmd1YWdlKHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBcInVua25vd1wiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxlW25hbWVdID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly9cdThCQkVcdTdGNkVcdTgzQjdcdTUzRDZcdThCRURcdThBMDBcdTc2ODRcdTY1QjlcdTZDRDVcclxuXHRwdWJsaWMgc3RhdGljIGluaXRMYW5ndWFnZShsYW5ndWFnZUluZGV4Om51bWJlciwgZ2V0TGFuZ3VhZ2VGdW46KGtleTpzdHJpbmd8bnVtYmVyKT0+c3RyaW5nKXtcclxuXHRcdENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleCA9IGxhbmd1YWdlSW5kZXg7XHJcblx0XHRDb25maWdCYXNlLmdldExhbmd1YWdlID0gZ2V0TGFuZ3VhZ2VGdW47XHJcblx0XHRpZihDb25maWdCYXNlLmxhbmd1YWdlSW5kZXggPCAwKXtcclxuXHRcdFx0Q29uZmlnQmFzZS5sYW5ndWFnZUluZGV4ID0gQ29uZmlnQmFzZS5nZXRTeXN0ZW1MYW5ndWFnZUluZGV4KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vXHU4M0I3XHU1M0Q2XHU3Q0ZCXHU3RURGXHU4QkVEXHU4QTAwXHU3RDIyXHU1RjE1XHJcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0U3lzdGVtTGFuZ3VhZ2VJbmRleCgpOm51bWJlcntcclxuXHRcdGxldCBsYW5ndWFnZSA9IFV0aWwuTG9jYWxlVXRpbC5nZXREZWZhdWx0TG9jYWxlKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJlblwiKSkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdGlmICghIWxhbmd1YWdlLm1hdGNoKFwiemhcIikpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImphXCIpKSB7XHJcblx0XHRcdHJldHVybiAyO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJkZVwiKSkge1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIFx1NjgzOVx1NjM2RWlkXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU1MTQzXHU3RDIwXHJcblx0KiBAcGFyYW0gaWQgaWR8a2V5XHJcblx0KiBAcmV0dXJucyBFbGVtZW50XHJcblx0Ki9cclxuXHRwdWJsaWMgZ2V0RWxlbWVudChpZDpudW1iZXJ8c3RyaW5nKTogVCB7XHJcblx0XHRsZXQgZWxlID0gdGhpcy5FTEVNRU5UTUFQLmdldChOdW1iZXIoaWQpKSB8fCB0aGlzLkVMRU1FTlRNQVAuZ2V0KHRoaXMuS0VZTUFQLmdldChpZCkpO1xyXG5cdFx0aWYoZWxlID09IG51bGwpe1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiXHU5MTREXHU3RjZFXHU4ODY4XHU0RTJEXHU2MjdFXHU0RTBEXHU1MjMwXHU1MTQzXHU3RDIwIGlkOlwiICsgaWQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVsZTtcclxuXHR9XHJcblx0LyoqXHJcblx0KiBcdTY4MzlcdTYzNkVcdTVCNTdcdTZCQjVcdTU0MERcdTU0OENcdTVCNTdcdTZCQjVcdTUwM0NcdTY3RTVcdTYyN0VcdTRFMDBcdTRFMkFcdTUxNDNcdTdEMjBcclxuXHQqIEBwYXJhbSBmaWVsZE5hbWUgXHU1QjU3XHU2QkI1XHU1NDBEXHJcblx0KiBAcGFyYW0gZmllbGRWYWx1ZSBcdTVCNTdcdTZCQjVcdTUwM0NcclxuXHQqIEByZXR1cm5zIFx1N0IyQ1x1NEUwMFx1NEUyQVx1NjI3RVx1NTIzMFx1NzY4NEVsZW1lbnRcclxuXHQqL1xyXG5cdHB1YmxpYyBmaW5kRWxlbWVudChmaWVsZE5hbWU6c3RyaW5nLCBmaWVsZFZhbHVlOmFueSk6IFR7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UQVJSLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYodGhpcy5FTEVNRU5UQVJSW2ldW2ZpZWxkTmFtZV0gPT0gZmllbGRWYWx1ZSl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuRUxFTUVOVEFSUltpXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvKipcclxuXHQqIFx1NjgzOVx1NjM2RVx1NUI1N1x1NkJCNVx1NTQwRFx1NTQ4Q1x1NUI1N1x1NkJCNVx1NTAzQ1x1NjdFNVx1NjI3RVx1NEUwMFx1N0VDNFx1NTE0M1x1N0QyMFxyXG5cdCogQHBhcmFtIGZpZWxkTmFtZSBcdTVCNTdcdTZCQjVcdTU0MERcclxuXHQqIEBwYXJhbSBmaWVsZFZhbHVlIFx1NUI1N1x1NkJCNVx1NTAzQ1xyXG5cdCogQHJldHVybnMgXHU2MjQwXHU2NzA5XHU3QjI2XHU1NDA4XHU4OTgxXHU2QzQyXHU3Njg0RWxlbWVudFxyXG5cdCovXHJcblx0cHVibGljIGZpbmRFbGVtZW50cyhmaWVsZE5hbWU6c3RyaW5nLGZpZWxkVmFsdWU6YW55KTpBcnJheTxUPntcclxuXHRcdGxldCBhcnI6QXJyYXk8VD4gPSBbXTtcclxuXHRcdGZvcihsZXQgaSA9IDA7aSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7aSsrKXtcclxuXHRcdFx0aWYodGhpcy5FTEVNRU5UQVJSW2ldW2ZpZWxkTmFtZV0gPT0gZmllbGRWYWx1ZSl7XHJcblx0XHRcdFx0YXJyLnB1c2godGhpcy5FTEVNRU5UQVJSW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9XHJcblx0LyoqXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU1MTQzXHU3RDIwKi9cclxuXHRwdWJsaWMgZ2V0QWxsRWxlbWVudCgpOkFycmF5PFQ+e1xyXG5cdFx0cmV0dXJuIHRoaXMuRUxFTUVOVEFSUjtcclxuXHR9XHJcbn0iLCAiaW1wb3J0IHtDb25maWdCYXNlLCBJRWxlbWVudEJhc2V9IGZyb20gXCIuL0NvbmZpZ0Jhc2VcIjtcclxuaW1wb3J0IHtNb25zdGVyc0NvbmZpZ30gZnJvbSBcIi4vTW9uc3RlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29uZmlne1xyXG5cdHByaXZhdGUgc3RhdGljIGNvbmZpZ01hcDpNYXA8c3RyaW5nLCBDb25maWdCYXNlPElFbGVtZW50QmFzZT4+ID0gbmV3IE1hcCgpO1xyXG5cdC8qKlxyXG5cdCogXHU1OTFBXHU4QkVEXHU4QTAwXHU4QkJFXHU3RjZFXHJcblx0KiBAcGFyYW0gbGFuZ3VhZ2VJbmRleCBcdThCRURcdThBMDBcdTdEMjJcdTVGMTUoLTFcdTRFM0FcdTdDRkJcdTdFREZcdTlFRDhcdThCQTRcdThCRURcdThBMDApXHJcblx0KiBAcGFyYW0gZ2V0TGFuZ3VhZ2VGdW4gXHU2ODM5XHU2MzZFa2V5XHU4M0I3XHU1M0Q2XHU4QkVEXHU4QTAwXHU1MTg1XHU1QkI5XHU3Njg0XHU2NUI5XHU2Q0Q1XHJcblx0Ki9cclxuXHRwdWJsaWMgc3RhdGljIGluaXRMYW5ndWFnZShsYW5ndWFnZUluZGV4Om51bWJlciwgZ2V0TGFuZ3VhZ2VGdW46KGtleTpzdHJpbmd8bnVtYmVyKT0+c3RyaW5nKXtcclxuXHRcdENvbmZpZ0Jhc2UuaW5pdExhbmd1YWdlKGxhbmd1YWdlSW5kZXgsIGdldExhbmd1YWdlRnVuKTtcclxuXHRcdHRoaXMuY29uZmlnTWFwLmNsZWFyKCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0Q29uZmlnPFQgZXh0ZW5kcyBDb25maWdCYXNlPElFbGVtZW50QmFzZT4+KENvbmZpZ0NsYXNzOiB7IG5ldygpOiBUIH0pOiBUIHtcclxuXHRcdGlmICghdGhpcy5jb25maWdNYXAuaGFzKENvbmZpZ0NsYXNzLm5hbWUpKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnTWFwLnNldChDb25maWdDbGFzcy5uYW1lLCBuZXcgQ29uZmlnQ2xhc3MoKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWdNYXAuZ2V0KENvbmZpZ0NsYXNzLm5hbWUpIGFzIFQ7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IE1vbnN0ZXJzKCk6TW9uc3RlcnNDb25maWd7IHJldHVybiB0aGlzLmdldENvbmZpZyhNb25zdGVyc0NvbmZpZykgfTtcclxufSIsICJpbXBvcnQgeyBDb25maWdCYXNlLCBJRWxlbWVudEJhc2UgfSBmcm9tIFwiLi9Db25maWdCYXNlXCI7XHJcbmNvbnN0IEVYQ0VMREFUQTpBcnJheTxBcnJheTxhbnk+PiA9IFtbXCJpZFwiLFwibmFtZVwiLFwibWF4SFBcIixcImxldmVsXCIsXCJhdGtcIixcIm1vZGVsR3VpZFwiXSxbXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFsxLFwiXHU4NzE4XHU4NkRCXCIsMTAwLDIsMSxcIjE5MjU2OVwiXSxbMixcIlx1NTE1NFx1NUI1MFwiLDIwMCwyLDEsXCIxMzgyNjhcIl0sWzMsXCJcdTlFOEJcdTlFN0ZcIiwzMDAsMiwxLFwiMTI2MDMwXCJdXTtcclxuZXhwb3J0IGludGVyZmFjZSBJTW9uc3RlcnNFbGVtZW50IGV4dGVuZHMgSUVsZW1lbnRCYXNle1xyXG4gXHQvKipcdTYwMkFcdTcyNjlJRCovXHJcblx0aWQ6bnVtYmVyXHJcblx0LyoqXHU2MDJBXHU3MjY5XHU1NDBEXHU1QjU3Ki9cclxuXHRuYW1lOnN0cmluZ1xyXG5cdC8qKlx1NjcwMFx1NTkyN1x1ODg0MFx1OTFDRiovXHJcblx0bWF4SFA6bnVtYmVyXHJcblx0LyoqXHU3QjQ5XHU3RUE3Ki9cclxuXHRsZXZlbDpudW1iZXJcclxuXHQvKipcdTY1M0JcdTUxRkJcdTUyOUIqL1xyXG5cdGF0azpudW1iZXJcclxuXHQvKipcdTk4ODRcdTUyMzZcdTRGNTNHdWlkKi9cclxuXHRtb2RlbEd1aWQ6c3RyaW5nXHJcbiB9IFxyXG5leHBvcnQgY2xhc3MgTW9uc3RlcnNDb25maWcgZXh0ZW5kcyBDb25maWdCYXNlPElNb25zdGVyc0VsZW1lbnQ+e1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcihFWENFTERBVEEpO1xyXG5cdH1cclxuXHJcbn0iLCAiXHVGRUZGaW1wb3J0IEludGVyYWN0QWN0b3IgZnJvbSBcIi4vSW50ZXJmYWNlL0lJbnRlcmFjdGlvblwiO1xyXG5cclxuQFVJLlVJQ2FsbE9ubHkoJycpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRGVmYXVsdCBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdENoYXJhY3RlcjogR2FtZXBsYXkuQ2hhcmFjdGVyO1xyXG5cclxuXHRJbnRlcmFjdEJ0bjogVUkuQnV0dG9uXHJcblx0TmVhckludGVyYWN0R3VpZCA6c3RyaW5nXHJcblx0LyogXHU4OUUzXHU2NzkwXHU4RDQ0XHU2RTkwSURcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgcmVzb2x2ZVN0cmluZyhhc3NldElkczogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBhc3NldElkQXJyYXk6IHN0cmluZ1tdID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgYXNzZXRJZDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgcyA9IGFzc2V0SWRzLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGEgb2Ygcykge1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZEFycmF5LnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWQgKz0gYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkQXJyYXkucHVzaChhc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0SWRBcnJheTtcclxuICAgIH1cclxuXHJcblx0LyogXHU1MjFEXHU1OUNCXHU1MzE2XHU4RDQ0XHU2RTkwICovXHJcblx0cHJpdmF0ZSBpbml0QXNzZXRzKGFzc2V0SWRzOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGxldCBhc3NldElkQXJyYXkgPSB0aGlzLnJlc29sdmVTdHJpbmcoYXNzZXRJZHMpO1xyXG5cdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBhc3NldElkQXJyYXkpIHtcclxuXHRcdFx0VXRpbC5Bc3NldFV0aWwuYXN5bmNEb3dubG9hZEFzc2V0KGVsZW1lbnQpXHJcblx0XHR9XHJcblx0fVxyXG5cdHByaXZhdGUgVHJ5SW50ZXJhY3QoKTp2b2lkIHtcclxuXHRcdGxldCBvYmo6R2FtZU9iamVjdCA9IEdhbWVPYmplY3QuZmluZCh0aGlzLk5lYXJJbnRlcmFjdEd1aWQpXHJcblx0XHRpZiAob2JqID09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgYSA9IG9iai5nZXRTY3JpcHRzKClcclxuXHRcdGxldCBhY3RvciA6IEludGVyYWN0QWN0b3IgPSA8SW50ZXJhY3RBY3Rvcj5vYmouZ2V0U2NyaXB0QnlOYW1lKFwiSUludGVyYWN0aW9uXCIpXHJcblx0XHRhY3Rvci5PbkludGVyYWN0KGdldEN1cnJlbnRQbGF5ZXIoKSwgMSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgU2hvd0ludGVyYWN0QnV0dG9uKGd1aWQgOnN0cmluZyk6dm9pZCB7XHJcblx0XHR0aGlzLkludGVyYWN0QnRuLnZpc2liaWxpdHkgPSBVSS5TbGF0ZVZpc2liaWxpdHkuVmlzaWJsZVxyXG5cdFx0dGhpcy5OZWFySW50ZXJhY3RHdWlkID0gZ3VpZFxyXG5cdH1cclxuXHRwcml2YXRlIEhpZGVJbnRlcmFjdEJ1dHRvbihndWlkOnN0cmluZyk6dm9pZHtcclxuXHRcdGlmICh0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPT0gZ3VpZCkge1xyXG5cdFx0XHR0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPSBcIlwiXHJcblx0XHRcdHRoaXMuSW50ZXJhY3RCdG4udmlzaWJpbGl0eSA9IFVJLlNsYXRlVmlzaWJpbGl0eS5Db2xsYXBzZWRcclxuXHRcdH1cclxuXHR9XHJcblx0LyoqIFx1NEVDNVx1NTcyOFx1NkUzOFx1NjIwRlx1NjVGNlx1OTVGNFx1NUJGOVx1OTc1RVx1NkEyMVx1Njc3Rlx1NUI5RVx1NEY4Qlx1OEMwM1x1NzUyOFx1NEUwMFx1NkIyMSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKSB7XHJcblx0XHQvL1x1NTIxRFx1NTlDQlx1NTMxNlx1NTJBOFx1NzUzQlx1OEQ0NFx1NkU5MCBcclxuXHRcdHRoaXMuaW5pdEFzc2V0cyhcIjk1Nzc3LDYxMjQ1XCIpXHJcblx0XHQvL1x1OEJCRVx1N0Y2RVx1ODBGRFx1NTQyNlx1NkJDRlx1NUUyN1x1ODlFNlx1NTNEMW9uVXBkYXRlXHJcblx0XHR0aGlzLmNhblVwZGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHQvL1x1NjI3RVx1NTIzMFx1NUJGOVx1NUU5NFx1NzY4NFx1OERGM1x1OERDM1x1NjMwOVx1OTRBRVxyXG4gICAgICAgIGNvbnN0IEp1bXBCdG4gPSB0aGlzLnVpV2lkZ2V0QmFzZS5maW5kQ2hpbGRCeVBhdGgoJ1Jvb3RDYW52YXMvQnV0dG9uX0p1bXAnKSBhcyBVSS5CdXR0b25cclxuXHRcdGNvbnN0IEF0dGFja0J0biA9IHRoaXMudWlXaWRnZXRCYXNlLmZpbmRDaGlsZEJ5UGF0aCgnUm9vdENhbnZhcy9CdXR0b25fQXR0YWNrJykgYXMgVUkuQnV0dG9uXHJcblx0XHR0aGlzLkludGVyYWN0QnRuID0gdGhpcy51aVdpZGdldEJhc2UuZmluZENoaWxkQnlQYXRoKCdSb290Q2FudmFzL0ludGVyYWN0QnRuJykgYXMgVUkuQnV0dG9uXHJcblx0XHR0aGlzLkludGVyYWN0QnRuLnZpc2liaWxpdHkgPSBVSS5TbGF0ZVZpc2liaWxpdHkuQ29sbGFwc2VkXHJcblx0XHRcclxuXHRcdEV2ZW50cy5hZGRMb2NhbExpc3RlbmVyKFwiY2xpZW50X3Nob3dfaW50ZXJhY3RfYnV0dG9uXCIsIChndWlkOiBzdHJpbmcpPT57XHJcblx0XHRcdHRoaXMuU2hvd0ludGVyYWN0QnV0dG9uKGd1aWQpXHJcblx0XHR9KTtcdFxyXG5cdFx0RXZlbnRzLmFkZExvY2FsTGlzdGVuZXIoXCJjbGllbnRfaGlkZV9pbnRlcmFjdF9idXR0b25cIiwgKGd1aWQ6IHN0cmluZyk9PntcclxuXHRcdFx0dGhpcy5IaWRlSW50ZXJhY3RCdXR0b24oZ3VpZClcclxuXHRcdH0pXHJcblx0XHQvL1x1NzBCOVx1NTFGQlx1OERGM1x1OERDM1x1NjMwOVx1OTRBRSxcdTVGMDJcdTZCNjVcdTgzQjdcdTUzRDZcdTRFQkFcdTcyNjlcdTU0MEVcdTYyNjdcdTg4NENcdThERjNcdThEQzNcclxuICAgICAgICBKdW1wQnRuLm9uUHJlc3NlZC5hZGQoKCk9PntcclxuXHRcdFx0aWYgKHRoaXMuQ2hhcmFjdGVyKSB7XHJcblx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIuanVtcCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdEdhbWVwbGF5LmFzeW5jR2V0Q3VycmVudFBsYXllcigpLnRoZW4oKHBsYXllcikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIgPSBwbGF5ZXIuY2hhcmFjdGVyO1xyXG5cdFx0XHRcdFx0Ly9cdTg5RDJcdTgyNzJcdTYyNjdcdTg4NENcdThERjNcdThEQzNcdTUyOUZcdTgwRkRcclxuXHRcdFx0XHRcdHRoaXMuQ2hhcmFjdGVyLmp1bXAoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU2NTNCXHU1MUZCXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIEF0dGFja0J0bi5vblByZXNzZWQuYWRkKCgpPT57XHJcblx0XHRcdFx0R2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKCkudGhlbigocGxheWVyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3RlciA9IHBsYXllci5jaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHQvL1x1OEJBOVx1NTJBOFx1NzUzQlx1NTNFQVx1NTcyOFx1NEUwQVx1NTM0QVx1OEVBQlx1NjRBRFx1NjUzRVxyXG5cdFx0XHRcdFx0bGV0IGFuaW0xID0gcGxheWVyLmNoYXJhY3Rlci5sb2FkQW5pbWF0aW9uKFwiNjEyNDVcIik7XHJcblx0XHRcdFx0XHRhbmltMS5zbG90ID0gR2FtZXBsYXkuQW5pbVNsb3QuVXBwZXI7XHJcblx0XHRcdFx0XHQvL1x1ODlEMlx1ODI3Mlx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG5cdFx0XHRcdFx0aWYoYW5pbTEuaXNQbGF5aW5nKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0YW5pbTEucGxheSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU0RUE0XHU0RTkyXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NEVBNFx1NEU5Mlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIHRoaXMuSW50ZXJhY3RCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0XHR0aGlzLlRyeUludGVyYWN0KClcclxuXHRcdH0pXHRcclxuXHRcdFxyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvblN0YXJ0XHU0RTRCXHU1NDBFIFxyXG5cdCAqIFx1NUJGOVx1NEU4RVVJXHU3Njg0XHU2ODM5XHU4MjgyXHU3MEI5XHU3Njg0XHU2REZCXHU1MkEwXHU2NENEXHU0RjVDXHVGRjBDXHU4RkRCXHU4ODRDXHU4QzAzXHU3NTI4XHJcblx0ICogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkU1XHU0RThCXHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1OTFBXHU2QjIxXHU4QzAzXHU3NTI4XHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uQWRkZWQoKSB7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvbkFkZGVkXHU0RTRCXHU1NDBFXHJcblx0ICogXHU1QkY5XHU0RThFVUlcdTc2ODRcdTY4MzlcdTgyODJcdTcwQjlcdTc2ODRcdTc5RkJcdTk2NjRcdTY0Q0RcdTRGNUNcdUZGMENcdThGREJcdTg4NENcdThDMDNcdTc1MjhcclxuXHQgKiBcdTZDRThcdTYxMEZcdUZGMUFcdThCRTVcdTRFOEJcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTU5MUFcdTZCMjFcdThDMDNcdTc1MjhcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25SZW1vdmVkKCkge1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENVSVx1NUJGOVx1OEM2MVx1NTE4RFx1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1OEMwM1x1NzUyOCBcclxuXHQqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEZEOVx1NEU0Qlx1NTQwRVVJXHU1QkY5XHU4QzYxXHU1REYyXHU3RUNGXHU4OEFCXHU5NTAwXHU2QkMxXHU0RTg2XHVGRjBDXHU5NzAwXHU4OTgxXHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU1QkY5XHU4QkU1XHU2NTg3XHU0RUY2XHU1NDhDVUlcdTc2RjhcdTUxNzNcdTVCRjlcdThDNjFcdTRFRTVcdTUzQ0FcdTVCNTBcdTVCRjlcdThDNjFcdTc2ODRcdTVGMTVcdTc1MjhcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIFx1NkJDRlx1NEUwMFx1NUUyN1x1OEMwM1x1NzUyOFxyXG5cdCogXHU5MDFBXHU4RkM3Y2FuVXBkYXRlXHU1M0VGXHU0RUU1XHU1RjAwXHU1NDJGXHU1MTczXHU5NUVEXHU4QzAzXHU3NTI4XHJcblx0KiBkdCBcdTRFMjRcdTVFMjdcdThDMDNcdTc1MjhcdTc2ODRcdTY1RjZcdTk1RjRcdTVERUVcdUZGMENcdTZCRUJcdTc5RDJcclxuXHQqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVXBkYXRlKGR0IDpudW1iZXIpIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU4QkJFXHU3RjZFXHU2NjNFXHU3OTNBXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25TaG93KC4uLnBhcmFtczphbnlbXSkge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdThCQkVcdTdGNkVcdTRFMERcdTY2M0VcdTc5M0FcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkhpZGUoKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NUY1M1x1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU2NjJGXHU1M0VGXHU0RUU1XHU2M0E1XHU2NTM2XHU0RThCXHU0RUY2XHU3Njg0XHU2NUY2XHU1MDE5XHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxVG91Y2hcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFOEJcdTRFRjZcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdTRFODZcclxuXHQgKiBcdTU5ODJcdTY3OUNcdTU5MDRcdTc0MDZcdTRFODZcdUZGMENcdTkwQTNcdTRFNDhcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NTNFRlx1NEVFNVx1NjNBNVx1NjUzNlx1OEZEOVx1NkIyMVRvdWNoXHU1NDBFXHU3RUVEXHU3Njg0TW92ZVx1NTQ4Q0VuZFx1NEU4Qlx1NEVGNlxyXG5cdCAqIFx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NTkwNFx1NzQwNlx1RkYwQ1x1OTBBM1x1NEU0OFx1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU1QzMxXHU2NUUwXHU2Q0Q1XHU2M0E1XHU2NTM2XHU4RkQ5XHU2QjIxVG91Y2hcdTU0MEVcdTdFRURcdTc2ODRNb3ZlXHU1NDhDRW5kXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0ZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1NTE4RFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU3OUZCXHU1MkE4XHU2NUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaE1vdmVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTc5QkJcdTVGMDBVSVx1NzU0Q1x1OTc2Mlx1NjVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIE9uVG91Y2hFbmRlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU1RjUzXHU1NzI4VUlcdTc1NENcdTk3NjJcdTRFMEFcdThDMDNcdTc1MjhkZXRlY3REcmFnL2RldGVjdERyYWdJZlByZXNzZWRcdTY1RjZcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQgKiBcdTUzRUZcdTRFRTVcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjZcdTc2ODRcdTVGMDBcdTU5Q0JcdTc1MUZcdTYyMTBcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFMDBcdTZCMjFcdTc1MUZcdTYyMTBcdTc2ODRcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjYgbmV3RHJhZ0Ryb3BcdTUzRUZcdTRFRTVcdTc1MUZcdTYyMTBcdTRFMDBcdTZCMjFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdEZXRlY3RlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCk6VUkuRHJhZ0Ryb3BPcGVyYXRpb24ge1xyXG5cdC8vXHRyZXR1cm4gdGhpcy5uZXdEcmFnRHJvcChudWxsKTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3RUNGXHU4RkM3XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ092ZXIoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU1NzI4XHU4RkQ5XHU0RTJBVUlcdTkxQ0FcdTY1M0VcdTVCOENcdTYyMTBcdTY1RjZcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJvcChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQsSW5EcmFnRHJvcE9wZXJhdGlvbjpVSS5EcmFnRHJvcE9wZXJhdGlvbik6Ym9vbGVhbiB7XHJcblx0Ly9cdHJldHVybiB0cnVlO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdThGREJcdTUxNjVcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0VudGVyKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NzlCQlx1NUYwMFx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnTGVhdmUoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSB7XHJcblx0Ly99XHJcblx0XHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHVGRjBDXHU2Q0ExXHU2NzA5XHU1QjhDXHU2MjEwXHU1QjhDXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU4MDBDXHU1M0Q2XHU2RDg4XHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnQ2FuY2VsbGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCkge1xyXG5cdC8vfVxyXG5cclxufVxyXG4iLCAiXHVGRUZGXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0ZXJCYXNlIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgSW50ZXJhY3RBY3RvciBmcm9tIFwiLi4vSW50ZXJmYWNlL0lJbnRlcmFjdGlvblwiO1xyXG5cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjX0ludGVyYWN0T2JqZWN0IGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgcHJpdmF0ZSBndWlkTGlzdDogTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj4gPSBuZXcgTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj47XHJcbiAgICBwcml2YXRlIGFjIDogSW50ZXJhY3RBY3RvcjtcclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZAQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheU1haW4gZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudHMuYWRkUGxheWVySm9pbmVkTGlzdGVuZXIodGhpcy5PblBsYXllckpvaW5lZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIEV2ZW50cy5hZGRQbGF5ZXJMZWZ0TGlzdGVuZXIodGhpcy5PblBsYXllckxlZnQuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uUGxheWVySm9pbmVkKHBsYXllcjpHYW1lcGxheS5QbGF5ZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTczQTlcdTVCQjZcdTUyQTBcdTUxNjUnICsgcGxheWVyLmNoYXJhY3Rlci5ndWlkKVxyXG4gICAgICAgIGxldCBvYmogPSBHYW1lT2JqZWN0LnNwYXduKHsgZ3VpZCA6ICc0MTlFOUE4QTQxMTcyMUQ4MThFQUNBQUVGRjk3OTI2MycsIHJlcGxpY2F0ZXMgOiB0cnVlfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU4MTFBXHU2NzJDXHU0RTNBJyArIG9iailcclxuICAgIH1cclxuICAgIHByaXZhdGUgT25QbGF5ZXJMZWZ0KHBsYXllcjpHYW1lcGxheS5QbGF5ZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTczQTlcdTVCQjZcdTc5QkJcdTVGMDAnICsgcGxheWVyLmNoYXJhY3Rlci5jaGFyYWN0ZXJOYW1lKVxyXG5cclxuICAgIH1cclxufVxyXG4iLCAiXHVGRUZGQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RBY3RvciBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuICAgIC8qKlxyXG4gICAgICogXHU0RUE0XHU0RTkyXHU3MjY5XHU3Njg0XHU1NzNBXHU2NjZGXHU0RTJEXHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV9PYmplY3Q6IEdhbWVPYmplY3Q7XHJcbiAgICBwcml2YXRlIG1fdHJpZ2dlcjogVHJpZ2dlcjtcclxuICAgIHByaXZhdGUgbV9ndWlkOnN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fT2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0XHJcbiAgICAgICAgdGhpcy5tX3RyaWdnZXIgPSA8VHJpZ2dlcj50aGlzLm1fT2JqZWN0LmdldENoaWxkQnlOYW1lKFwiVHJpZ2dlclwiKSBcclxuICAgICAgICB0aGlzLm1fZ3VpZCA9IHRoaXMubV9PYmplY3QuZ3VpZDtcclxuICAgICAgICB0aGlzLm1fdHJpZ2dlci5vbkVudGVyLmFkZChnbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gXHU1MjI0XHU2NUFEXHU4RkRCXHU1MTY1XHU3OEIwXHU2NDlFXHU1MzNBXHU1N0RGXHU3Njg0XHU1QkY5XHU4QzYxXHU2NjJGXHU1NDI2XHU0RTNBXHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgIGlmICghKGdvIGluc3RhbmNlb2YgR2FtZXBsYXkuQ2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gXHU0RTBEXHU2NjJGXHU4OUQyXHU4MjcyXHVGRjBDXHU1MDVDXHU2QjYyXHU2MjY3XHU4ODRDXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBnbyA9IDxHYW1lcGxheS5DaGFyYWN0ZXI+Z29cclxuICAgICAgICAgICAgaWYgKCEoZ28gPT0gZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU5NzVFXHU2NzJDXHU1NzMwXHU3M0E5XHU1QkI2XHU2M0E3XHU1MjM2XHU3Njg0XHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChcImNsaWVudF9zaG93X2ludGVyYWN0X2J1dHRvblwiLCB0aGlzLm1fZ3VpZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV90cmlnZ2VyLm9uTGVhdmUuYWRkKGdvID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBcdTUyMjRcdTY1QURcdThGREJcdTUxNjVcdTc4QjBcdTY0OUVcdTUzM0FcdTU3REZcdTc2ODRcdTVCRjlcdThDNjFcdTY2MkZcdTU0MjZcdTRFM0FcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgaWYgKCEoZ28gaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdTRFMERcdTY2MkZcdTg5RDJcdTgyNzJcdUZGMENcdTUwNUNcdTZCNjJcdTYyNjdcdTg4NENcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbyA9IDxHYW1lcGxheS5DaGFyYWN0ZXI+Z29cclxuICAgICAgICAgICAgaWYgKCEoZ28gPT0gZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU5NzVFXHU2NzJDXHU1NzMwXHU3M0E5XHU1QkI2XHU2M0E3XHU1MjM2XHU3Njg0XHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChcImNsaWVudF9oaWRlX2ludGVyYWN0X2J1dHRvblwiLCB0aGlzLm1fZ3VpZClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUE0XHU0RTkyXHU3MjY5XHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJbml0KGd1aWQgOiBzdHJpbmcsIHRyYW5zZm9ybSA6IFRyYW5zZm9ybSkgOnN0cmluZ3tcclxuICAgICAgICB0aGlzLm1fT2JqZWN0ID0gR2FtZU9iamVjdC5zcGF3bih7Z3VpZDogZ3VpZCwgcmVwbGljYXRlcyA6IHRydWUsIHRyYW5zZm9ybSA6IHRyYW5zZm9ybX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tX2d1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzQ2xpZW50KCkgOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCk7XHJcbiAgICB9XHJcbiAgICAvKipcdTVGMDBcdTU5Q0JcdTRFQTRcdTRFOTJcdUZGMENcdTc1MzFcdTVCQTJcdTYyMzdcdTdBRUZVSVx1NUM0Mlx1OTc2Mlx1NTNEMVx1OEQ3NyovXHJcbiAgICBwdWJsaWMgT25JbnRlcmFjdChwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgaWYgKHRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5JbnRlcmFjdEltcGxlbWVudChwbGF5ZXIsIGluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLkZ1bmN0aW9uKENvcmUuU2VydmVyKVxyXG4gICAgcHJvdGVjdGVkIEludGVyYWN0SW1wbGVtZW50KHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICB0aGlzLkRvT25TZXJ2ZXIocGxheWVyLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5Eb09uQ2xpZW50KHBsYXllciwgaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTJcdTYyMzdcdTdBRUZcdTg5RTZcdTUzRDFcdUZGMENcdTU3MjhcdTUzRDFcdTc1MUZcdTRFQTRcdTRFOTJcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgQENvcmUuRnVuY3Rpb24oQ29yZS5DbGllbnQpXHJcbiAgICBwcm90ZWN0ZWQgRG9PbkNsaWVudChwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NUJBMlx1NjIzN1x1N0FFRlx1NEVBN1x1NzUxRlx1NEVBNFx1NEU5Mlx1RkYwQ1x1NzNBOVx1NUJCNicsIHBsYXllcilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU2NzBEXHU1MkExXHU3QUVGXHU4OUU2XHU1M0QxXHVGRjBDXHU1NzI4XHU1M0QxXHU3NTFGXHU0RUE0XHU0RTkyXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLkZ1bmN0aW9uKENvcmUuU2VydmVyKVxyXG4gICAgcHJvdGVjdGVkIERvT25TZXJ2ZXIocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3MERcdTUyQTFcdTdBRUZcdTRFQTdcdTc1MUZcdTRFQTRcdTRFOTJcdUZGMENcdTczQTlcdTVCQjYnLCBwbGF5ZXIpXHJcbiAgICB9XHJcbn1cclxuIiwgIlx1RkVGRi8qKlx1NzNBOVx1NUJCNlx1NUM1RVx1NjAyN1x1NTQwQ1x1NkI2NVx1N0M3Qlx1RkYwQ1x1NEUxNlx1NzU0Q1x1NEUyRFx1NkJDRlx1NjcwOVx1NEUwMFx1NEUyQVx1NzNBOVx1NUJCNlx1RkYwQ1x1NUMzMVx1NEYxQVx1NTcyOFx1NUJGOVx1OEM2MVx1NEUwQlx1OTc2Mlx1NTIxQlx1NUVGQVx1NEUwMFx1NEUyQVx1NkI2NFx1ODExQVx1NjcyQ1x1Njc2NVx1NUJGOVx1NUU5NFx1NkI2NFx1NzNBOVx1NUJCNiAqL1xyXG5AQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBdHRyIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG5cclxuICAgIHB1YmxpYyBjaGFyYWN0ZXI6R2FtZXBsYXkuQ2hhcmFjdGVyXHJcbiAgICBAQ29yZS5Qcm9wZXJ0eSh7ZGlzcGxheU5hbWU6ICdcdTg4NDBcdTkxQ0YnLCByZXBsaWNhdGVkIDogdHJ1ZX0pXHJcbiAgICBwdWJsaWMgaHAgOiBudW1iZXIgPSAxMDBcclxuICAgIEBDb3JlLlByb3BlcnR5KHtkaXNwbGF5TmFtZTogJ1x1NjcwMFx1NTkyN1x1ODg0MFx1OTFDRicsIHJlcGxpY2F0ZWQgOiB0cnVlfSlcclxuICAgIHB1YmxpYyBtYXhIcCA6IG51bWJlclxyXG4gICAgLyoqIFx1NUY1M1x1ODExQVx1NjcyQ1x1ODhBQlx1NUI5RVx1NEY4Qlx1NTQwRVx1RkYwQ1x1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NUUyN1x1NjZGNFx1NjVCMFx1NTI0RFx1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXhIcCA9IDEwMFxyXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwXHJcbiAgICAgICAgbGV0IHMgPSB0aGlzLmNoYXJhY3Rlci5jaGFyYWN0ZXJOYW1lXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgSW5pdERhdGEoYyA6IEdhbWVwbGF5LkNoYXJhY3Rlcil7XHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmdDbGllbnQoKSl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNcclxuICAgICAgICB0aGlzLm1heEhwID0gMTAwXHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHBcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1NDY4XHU2NzFGXHU1MUZEXHU2NTcwIFx1NkJDRlx1NUUyN1x1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU1MUZEXHU2NTcwXHU2MjY3XHU4ODRDXHU5NzAwXHU4OTgxXHU1QzA2dGhpcy51c2VVcGRhdGVcdThENEJcdTUwM0NcdTRFM0F0cnVlXHJcbiAgICAgKiBAcGFyYW0gZHQgXHU1RjUzXHU1MjREXHU1RTI3XHU0RTBFXHU0RTBBXHU0RTAwXHU1RTI3XHU3Njg0XHU1RUY2XHU4RkRGIC8gXHU3OUQyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgxMUFcdTY3MkNcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdTY3MDBcdTU0MEVcdTRFMDBcdTVFMjdcdTYyNjdcdTg4NENcdTVCOENcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFBsYXllckd1bk1nciB9IGZyb20gXCIuL1BsYXllckd1bk1nclwiXHJcblxyXG4vKipcclxuICogXHU2N0FBXHU2OEIwXHU2QTIxXHU1NzU3XHVGRjFBXHU3M0E5XHU1QkI2XHU4ODRDXHU0RTNBXHU2ODExXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxheWVyQmVoYXZpb3Ige1xyXG4gICAgcGxheWVyOkdhbWVwbGF5LkNoYXJhY3RlclxyXG4gICAgc3RhdGUgOiBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW1cclxuICAgIC8qKlx1NEUwRFx1NTQwQ1x1ODA0Q1x1NEUxQVx1NzY4NFx1OTE0RFx1OTAxRiAqL1xyXG4gICAgU3BlZWRTdGRDb2VmdDpudW1iZXJcclxuICAgIC8qKlx1NEVCQVx1NzI2OVx1NzlGQlx1NTJBOFx1NzJCNlx1NjAwMVx1N0NGQlx1NjU3MCAqL1xyXG4gICAgY29lZkluZXJ0aWE6bnVtYmVyXHJcbiAgICAvKipcdTRFQkFcdTcyNjlcdTUyQTBcdTkwMUZcdTVFQTZcdTdDRkJcdTY1NzAgKi9cclxuICAgIEluZXJQYXJhOm51bWJlclxyXG4gICAgR3VuV2VpZ2h0Om51bWJlclxyXG4gICAgQmVoSnVkZ2VUYWI6TWFwPHN0cmluZywgYm9vbGVhbj5cclxuICAgIGtleURvd25UYWI6QXJyYXk8c3RyaW5nPlxyXG5cclxuICAgIC8vIFx1NTM1NVx1NEY4Qlx1NkEyMVx1NUYwRlxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQbGF5ZXJCZWhhdmlvcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJCZWhhdmlvci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBQbGF5ZXJCZWhhdmlvci5faW5zdGFuY2UgPSBuZXcgUGxheWVyQmVoYXZpb3IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxheWVyQmVoYXZpb3IuX2luc3RhbmNlXHJcbiAgICB9ICAgXHJcbiAgICBwcml2YXRlIEJpbmRFdmVudEhhbmRsZXIoKXtcclxuICAgICAgICBFdmVudHMuYWRkU2VydmVyTGlzdGVuZXIoRXZlbnRDb25zdC5DbGllbnRFdmVudC5PbkVxdWlwV2VhcG9uRXZlbnQsIHRoaXMuT25FcXVpcFdlYXBvbkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgICAgIEV2ZW50cy5hZGRMb2NhbExpc3RlbmVyKEV2ZW50Q29uc3QuQ2xpZW50RXZlbnQuT25FcXVpcFdlYXBvbkV2ZW50LCB0aGlzLk9uRXF1aXBXZWFwb25FdmVudEhhbmRsZXIuYmluZCh0aGlzKSlcclxuICAgICAgICAvL0V2ZW50cy5hZGRTZXJ2ZXJMaXN0ZW5lcihFdmVudENvbnN0LkNsaWVudEV2ZW50LmNoLCB0aGlzLkNoYW5nZU9jY0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgfSBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBJbml0aWFsRGF0YVJlYWQoKXtcclxuICAgICAgICAvKipcdTczQTlcdTVCQjZcdTg4NENcdTRFM0FcdTUyMjRcdTY1QURcdTUzQzJcdTY1NzAgKi9cclxuICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KFtcclxuICAgICAgICAgICAgW1wiUnVuXCIsIGZhbHNlXSxcclxuICAgICAgICAgICAgW1wiQ3JvdWNoXCIsIGZhbHNlXSxcclxuICAgICAgICAgICAgW1wiUXVpY2tseVwiLCBmYWxzZV0sXHJcbiAgICAgICAgICAgIFtcIkFpbVwiLCBmYWxzZV0sXHJcbiAgICAgICAgXSlcclxuICAgICAgICB0aGlzLmtleURvd25UYWIgPSBbXVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBJbml0UGxheWVyQXR0cmlidXRlcygpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1heEp1bXBIZWlnaHQgPSAxXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1ODhDNVx1NTkwN1x1NjdBQVx1NjZGNFx1NjVCMFx1OERGM1x1OERDM1x1OTAxRlx1NUVBNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIE9uRXF1aXBXZWFwb25FdmVudEhhbmRsZXIoKXtcclxuICAgICAgICBpZihQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnBsYXllci5tYXhKdW1wSGVpZ2h0ID0gXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIENoYW5nZU9jY0V2ZW50SGFuZGxlcihvY2NJZDpudW1iZXIpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLyoqXHU3M0E5XHU1QkI2XHU4ODRDXHU0RTNBXHU1MjI0XHU2NUFEICovXHJcbiAgICBwcml2YXRlIFBsYXllckJlaGF2aW9yQ2hhbmdlZChfYmVoYXZpb3IgOiBzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRoaXMuQmVoSnVkZ2VUYWIuZ2V0KF9iZWhhdmlvcikpe1xyXG4gICAgICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiLnNldChfYmVoYXZpb3IsIGZhbHNlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiLnNldChfYmVoYXZpb3IsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQmVoSnVkZ2VUYWIuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25UYWIucHVzaChrZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHRoaXMua2V5RG93blRhYi5sZW5ndGggPT0gMSl7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5rZXlEb3duVGFiWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdSdW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlJ1bilcclxuICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmtleURvd25UYWIubGVuZ3RoID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmtleURvd25UYWIuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Nyb3VjaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkNyb3VjaFJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUXVpY2tseSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlF1aWNrbHlSdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FpbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkFpbVJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5rZXlEb3duVGFiLmxlbmd0aCA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duVGFiLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdRdWlja2x5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUXVpY2tseUNyb3VjaFJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQWltJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQWltQ3JvdWNoUnVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZXlEb3duVGFiID0gW11cclxuICAgIH1cclxuICAgIHByaXZhdGUgUGxheWVyTW9kZUNoYW5nZWQobW9kZU5hbWUgOiBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0pe1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBtb2RlTmFtZVxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb24vV2VhcG9uQWNjZXNzb3J5QmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkFtbW9CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbi9XZWFwb25CYXNlQ2xzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJHdW5NZ3Ige1xyXG4gICAgcGxheWVyOkdhbWVwbGF5LkNoYXJhY3RlclxyXG5cclxuICAgIGN1ckd1bjpXZWFwb25CYXNlQ2xzXHJcbiAgICBtYWluR3VuOldlYXBvbkJhc2VDbHNcclxuICAgIGRlcHV0eUd1bjpXZWFwb25CYXNlQ2xzXHJcbiAgICBtaW5pR3VuOldlYXBvbkJhc2VDbHNcclxuICAgIHByb3AxOldlYXBvbkJhc2VDbHNcclxuICAgIHByb3AyOldlYXBvbkJhc2VDbHNcclxuXHJcbiAgICBwdWJsaWMgaGFkQWNjZXNzb3J5TGlzdDpSZWNvcmQ8c3RyaW5nLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzPlxyXG4gICAgcHVibGljIGhhZEFtbW9MaXN0OlJlY29yZDxzdHJpbmcsIFdlYXBvbkFtbW9CYXNlQ2xzPlxyXG5cclxuICAgIGNhblVwZGF0ZUd1biA9IHRydWVcclxuICAgIC8vIFx1NTM1NVx1NEY4Qlx1NkEyMVx1NUYwRlxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQbGF5ZXJHdW5NZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoUGxheWVyR3VuTWdyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFBsYXllckd1bk1nci5faW5zdGFuY2UgPSBuZXcgUGxheWVyR3VuTWdyKEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQbGF5ZXJHdW5NZ3IuX2luc3RhbmNlXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6R2FtZXBsYXkuQ2hhcmFjdGVyKXtcclxuICAgICAgICAvL1x1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5PbmUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oMSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5Ud28sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oMilcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5UaHJlZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkZvdXIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oNClcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5GaXZlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuWCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Ecm9wV2VhcG9uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5CLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuQ2hhbmdlU2hvb3RNb2RlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5MZWZ0QWx0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBXHU5RjIwXHU2ODA3XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlJpZ2h0TW91c2VCdXR0b24sICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTUyMjRcdTY1QURcdTg4NDBcdTkxQ0ZcclxuXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmN1ckd1bil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckd1bi5NZWNoYW5pY2FsQWltU3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuUiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NTIyNFx1NjVBRFx1ODg0MFx1OTFDRlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VyR3VuKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyR3VuLkxvYWRNYWdhemluZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBJbnB1dFV0aWwub25LZXlQcmVzcyhLZXlzLlIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5VXAoS2V5cy5MZWZ0QWx0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU0RTBEXHU2NjNFXHU3OTNBXHU5RjIwXHU2ODA3XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5VXAoS2V5cy5MZWZ0QWx0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU1QzFEXHU4QkQ1XHU3OUJCXHU1RjAwXHU3Nzg0XHU1MUM2XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1ckd1bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJHdW4uTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBTd2l0Y2hXZWFwb24oaW5kZXg6bnVtYmVyKXtcclxuXHJcbiAgICB9XHJcbiAgICBDaGFuZ2VTaG9vdE1vZGUoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIERyb3BXZWFwb24oKXtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBjbGFzcyBUd2VlblV0aWx7XHJcblxyXG4gICAgU3RhcnRGdW5jdGlvbiA6ICh0OlR3ZWVuVXRpbCk9PnZvaWRcclxuICAgIFVwZGF0ZUZ1bmN0aW9uIDogKHQ6VHdlZW5VdGlsLCBkdCA6IG51bWJlcik9PnZvaWRcclxuICAgIFN0b3BGdW5jdGlvbiA6ICh0OlR3ZWVuVXRpbCk9PnZvaWRcclxuXHJcbiAgICB0b3RhbFRpbWU6bnVtYmVyXHJcbiAgICB0aW1lOm51bWJlclxyXG5cclxuICAgIGN1c3RvbURhdGEgOiBNYXA8c3RyaW5nLCBhbnk+XHJcbiAgICBpc1BsYXlpbmcgOiBib29sZWFuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2V0VG90YWxUaW1lOigpID0+IG51bWJlciwgXHJcbiAgICAgICAgdXBkYXRlIDogKHRpbWUxOm51bWJlcix0aW1lMjpudW1iZXIsdGltZTM6bnVtYmVyKT0+dm9pZCxcclxuICAgICAgICBjYWxsYmFjazooKT0+dm9pZCxcclxuICAgICAgICBzdGFydD86KCk9PnZvaWQpe1xyXG4gICAgICAgICAgICBzdGFydCA9IHN0YXJ0IHx8IGZ1bmN0aW9uKCkge31cclxuICAgICAgICAgICAgdGhpcy5TdGFydEZ1bmN0aW9uID0gKHQ6VHdlZW5VdGlsKT0+e1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgdC50b3RhbFRpbWUgPSBnZXRUb3RhbFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgdC50aW1lID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVGdW5jdGlvbiA9ICh0OlR3ZWVuVXRpbCwgZHQgOiBudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0LnRpbWUgKz0gZHRcclxuICAgICAgICAgICAgICAgIGlmKHQudGltZSA+PSB0LnRvdGFsVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5TdG9wRnVuY3Rpb24odClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZSh0LnRpbWUsdC50b3RhbFRpbWUsdC50aW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU3RvcEZ1bmN0aW9uID0gKHQ6VHdlZW5VdGlsKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNQbGF5aW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIjtcclxuaW1wb3J0IHsgVHdlZW5VdGlsIH0gZnJvbSBcIi4uL1Rvb2wvVHdlZW5VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQ29udHJvbGxlcntcclxuICAgIG1fY2FtZXJhOiBDYW1lcmFTeXN0ZW1cclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIG9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9jdXJyZW50SGVpZ2h0IDogbnVtYmVyXHJcbiAgICBtX3N1cHBvc2VkSGVpZ2h0IDogbnVtYmVyXHJcbiAgICBkZWx0YU9mZnNldCA6IFZlY3RvclxyXG4gICAgZmllbGRPZlZpZXcgOiBudW1iZXJcclxuICAgIGRlbHRhVGhldGEgOiBudW1iZXJcclxuICAgIGdhbW1hIDogbnVtYmVyXHJcbiAgICBkaXN0YW5jZSA6IG51bWJlclxyXG4gICAgZGVsdGFQaHkgOiBudW1iZXJcclxuICAgIHNoYWtlVGltZSA6IG51bWJlclxyXG4gICAgc2hha2VTdHJlbnRoIDogbnVtYmVyXHJcblxyXG4gICAgY3JvdWNoQ29udHJvbGxlciA6IFR3ZWVuVXRpbFxyXG4gICAgU2hha2VDb250cm9sbGVyIDogVHdlZW5VdGlsXHJcbiAgICAvLyBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEZcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FtZXJhQ29udHJvbGxlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChDYW1lcmFDb250cm9sbGVyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIENhbWVyYUNvbnRyb2xsZXIuX2luc3RhbmNlID0gbmV3IENhbWVyYUNvbnRyb2xsZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQ2FtZXJhQ29udHJvbGxlci5faW5zdGFuY2VcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JvdWNoQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwLjRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxIDogbnVtYmVyLCB0MiA6IG51bWJlciwgdDMgOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZEhlaWdodCA9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuY2Fwc3VsZUhhbGZIZWlnaHQgKiAyXHJcbiAgICAgICAgICAgICAgICBsZXQgZmluID0gdGhpcy5tX2N1cnJlbnRIZWlnaHQgKyAxMCAqIHQzICogKHRoaXMubV9zdXBwb3NlZEhlaWdodCAtIHRoaXMubV9jdXJyZW50SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRIZWlnaHQgPSBmaW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRIZWlnaHQgPSB0aGlzLm1fc3VwcG9zZWRIZWlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLlNoYWtlQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWtlVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDEgOiBudW1iZXIsIHQyIDogbnVtYmVyLCB0MyA6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YU9mZnNldCA9IG5ldyBWZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aCksXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aCksXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aClcclxuICAgICAgICAgICAgICAgICkubXVsdGlwbHkodDEgLyB0MilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YU9mZnNldCA9IG5ldyBWZWN0b3IoMCwgMCwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFVwZGF0ZShkdDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5jcm91Y2hDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuY3JvdWNoQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5TaGFrZUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5jcm91Y2hDb250cm9sbGVyLCBkdClcclxuICAgICAgICBpZih0aGlzLmRlbHRhUGh5ICE9IDApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uQ2FtZXJhQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQ2FtZXJhQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvbk1hZ2F6aW5lQ2xzIH0gZnJvbSBcIi4vV2VhcG9uTWFnYXppbmVDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uUmVjb2lsQ2xzIH0gZnJvbSBcIi4vV2VhcG9uUmVjb2lsQ2xzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFdlYXBvblRvb2x7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbkNvbmZpZyhfd2VhcG9uOldlYXBvbkJhc2VDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25NYWdhemluZUNvbmZpZyhfbWFnYXppbmU6V2VhcG9uTWFnYXppbmVDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25SZWNvaWxDb25maWcoX3JlY29pbDpXZWFwb25SZWNvaWxDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25DYW1lcmFDb25maWcoX2NhbWVyYTpXZWFwb25DYW1lcmFDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25BY2Nlc3NvcnlDb25maWcoX2FjY2Vzc29yeTpXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTaGFrZShfc3RyZW5ndGg6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gX3N0cmVuZ3RoICogKE1hdGgucmFuZG9tKCkgLSAwLjUpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NUMwNlx1NEUwMFx1NEUyQVx1NTQxMVx1OTFDRlx1RkYwQ1x1NjMwOVx1NzE2N1x1N0VEOVx1NUI5QVx1NzY4NFx1NjVDQlx1OEY2Q1x1OEY3NFx1RkYwQ1x1NjVDQlx1OEY2Q1x1NjMwN1x1NUI5QVx1NUYyN1x1NUVBNlx1NEU0Qlx1NTQwRVx1NUY5N1x1NTIzMFx1NEUwMFx1NEUyQVx1NjVCMFx1NzY4NFx1NTQxMVx1OTFDRlxyXG4gICAgICogQHBhcmFtIHNvdXJjZSBcdTZFOTBcdTU0MTFcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBheGlzIFx1NjVDQlx1OEY2Q1x1OEY3NFxyXG4gICAgICogQHBhcmFtIGFuZ2xlIFx1NjVDQlx1OEY2Q1x1ODlEMlx1NUVBNlx1NTAzQ1xyXG4gICAgICogQHJldHVybnMgXHU3RUQzXHU2NzlDXHU1NDExXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBSb3RhdGVWZWN0b3Ioc291cmNlOlZlY3RvciwgYXhpcyA6IFZlY3RvciwgYW5nbGUgOiBudW1iZXIpOlZlY3RvcntcclxuICAgICAgICBsZXQgcm8gPSBzb3VyY2UudG9Sb3RhdGlvbigpXHJcbiAgICAgICAgbGV0IHF1ID0gcm8udG9RdWF0ZXJuaW9uKClcclxuICAgICAgICBsZXQgb3V0ZXIgOiBRdWF0ZXJuaW9uXHJcbiAgICAgICAgYW5nbGUgPSBhbmdsZSBcclxuICAgICAgICBRdWF0ZXJuaW9uLmZyb21BeGlzQW5nbGUoYXhpcywgYW5nbGUsIG91dGVyKVxyXG4gICAgICAgIGxldCByZXMgOiBWZWN0b3JcclxuICAgICAgICBRdWF0ZXJuaW9uLm11bHRpcGx5VmVjdG9yKHNvdXJjZSwgb3V0ZXIsIHJlcylcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1OEY5M1x1NTFGQVx1NEUwOVx1NTAwRFx1NjgwN1x1NTFDNlx1NURFRVx1NEUzQTEgXHU3Njg0XHU1MjA2XHU1RTAzXHU1NzI4XHVGRjA4LTFcdUZGMEMgMVx1RkYwOVx1NEU0Qlx1OTVGNFx1NzY4NFx1NkI2M1x1NjAwMVx1NTIwNlx1NUUwM1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2F1c3NSYW5kb20oKSA6IG51bWJlcntcclxuICAgICAgICBsZXQgdSA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICBsZXQgdiA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICBsZXQgeiA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHUpKSAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogdilcclxuICAgICAgICB6ID0gKCB6ICsgMykgLyA2XHJcbiAgICAgICAgeiA9IHogKiAyIC0gMVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh6KSA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEdhdXNzUmFuZG9tKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHpcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QTk3XHU1MUZEXHU2NTcwXHVGRjBDXHU1NzI4XHU1QzBGXHU0RThFQVx1NjVGNlx1NEZERFx1NjMwMVx1NTM5Rlx1NTAzQ1x1RkYwQ1x1NTcyOFx1NTkyN1x1NEU4RUFcdTY1RjZcdTkwMTBcdTZFMTBcdThEOEJcdThGRDFcdTRFOEUxXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBc3ltcHRvdGUoeCA6IG51bWJlciwgQSA6IG51bWJlcikgOiBudW1iZXJ7XHJcbiAgICAgICAgQSA9IEEgfHwgMC40XHJcbiAgICAgICAgaWYoQSA8PSAwIHx8IEEgPj0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeCA8IDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd4IHNob3VsZCBiZSBwb3NpdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHggPD0gQSl7XHJcbiAgICAgICAgICAgIHJldHVybiB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAxICsgKDMgKiBBICogQSAtIDIgKiBBKSAvIHggKyAoQSAqIEEgLSAyICogQSAqIEEgKiBBKSAvIHggLyB4XHJcbiAgICB9XHJcbiAgICAvKipcdTUzQ0NcdThGQjlcdTUzRUZcdTc1MjhcdTc2ODRcdTdBOTdcdTUxRkRcdTY1NzAoXHU2NjZFXHU5MDFBXHU3QTk3XHU1MUZEXHU2NTcwXHU3Njg0XHU1OTQ3XHU1RUY2XHU2MkQzKSAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFzeW10b3RlQmkoeCA6IG51bWJlciwgQSA6IG51bWJlcikgOiBudW1iZXJ7XHJcbiAgICAgICAgQSA9IEEgfHwgMC40XHJcbiAgICAgICAgaWYoQSA8PSAwIHx8IEEgPj0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeCA+PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIEFzeW1wdG90ZSh4LCBBKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLUFzeW1wdG90ZSh4LCBBKVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFJhbmRvbVJvdGF0ZShkaXJlY3Rpb246IFZlY3RvciwgbWF4U3ByZWFkQW5nbGU6IG51bWJlcik6VmVjdG9yIHtcclxuICAgICAgICAvLyBcdTc1MUZcdTYyMTBcdTk2OEZcdTY3M0FcdTYyNjlcdTY1NjNcdTg5RDJcclxuICAgICAgICBjb25zdCBzcHJlYWRBbmdsZSA9IEdhdXNzUmFuZG9tKCkgKiBtYXhTcHJlYWRBbmdsZTtcclxuXHJcbiAgICAgICAgLy8gXHU3NTFGXHU2MjEwXHU5NjhGXHU2NzNBXHU2NUNCXHU4RjZDXHU4OUQyXHU1RUE2XHJcbiAgICAgICAgY29uc3QgcmFuZG9tUm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XHJcblxyXG4gICAgICAgIC8vIFx1OEJBMVx1N0I5N1x1OTY4Rlx1NjczQVx1NzBCOVx1NzY4NFx1NTc1MFx1NjgwN1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnNpbihzcHJlYWRBbmdsZSkgKiBNYXRoLmNvcyhyYW5kb21Sb3RhdGlvbik7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguY29zKHNwcmVhZEFuZ2xlKTtcclxuICAgICAgICBjb25zdCB6ID0gTWF0aC5zaW4oc3ByZWFkQW5nbGUpICogTWF0aC5zaW4ocmFuZG9tUm90YXRpb24pO1xyXG5cclxuICAgICAgICAvLyBcdTVDMDZcdTk2OEZcdTY3M0FcdTcwQjlcdTY1Q0JcdThGNkNcdTUyMzBcdTYzMDdcdTVCOUFcdTY1QjlcdTU0MTFcclxuICAgICAgICBjb25zdCBkaXJaID0gZGlyZWN0aW9uLno7XHJcbiAgICAgICAgY29uc3Qgcm90YXRlTWF0cml4ID0gW1xyXG4gICAgICAgICAgICBbTWF0aC5jb3MoZGlyWiksIC1NYXRoLnNpbihkaXJaKSwgMF0sXHJcbiAgICAgICAgICAgIFtNYXRoLnNpbihkaXJaKSwgTWF0aC5jb3MoZGlyWiksIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMV1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCByb3RhdGVkWCA9IHJvdGF0ZU1hdHJpeFswXVswXSAqIHggKyByb3RhdGVNYXRyaXhbMF1bMV0gKiB5ICsgcm90YXRlTWF0cml4WzBdWzJdICogejtcclxuICAgICAgICBjb25zdCByb3RhdGVkWSA9IHJvdGF0ZU1hdHJpeFsxXVswXSAqIHggKyByb3RhdGVNYXRyaXhbMV1bMV0gKiB5ICsgcm90YXRlTWF0cml4WzFdWzJdICogejtcclxuICAgICAgICBjb25zdCByb3RhdGVkWiA9IHJvdGF0ZU1hdHJpeFsyXVswXSAqIHggKyByb3RhdGVNYXRyaXhbMl1bMV0gKiB5ICsgcm90YXRlTWF0cml4WzJdWzJdICogejtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3Iocm90YXRlZFgsIHJvdGF0ZWRZLCByb3RhdGVkWik7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQWNjZWxlcmF0ZVNjYWxhcih4IDogbnVtYmVyLCBfbGluZWFyUmFuZ2UgOiBudW1iZXIsIF9tYXhTY2FsZSA6IG51bWJlcikgOiBudW1iZXJ7XHJcbiAgICAgICAgaWYgKF9tYXhTY2FsZSA8PSAxIHx8IF9saW5lYXJSYW5nZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NjcwMFx1NTkyN1x1NkJENFx1NEY4Qlx1NUZDNVx1OTg3Qlx1NTkyN1x1NEU4RTEsIFx1N0VCRlx1NjAyN1x1ODMwM1x1NTZGNFx1NUZDNVx1OTg3Qlx1NTkyN1x1NEU4RTAnKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4IDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdcdTRGN0ZcdTc1MjhcdTUzQ0NcdThGQjlcdTc2ODRcdTUxRkRcdTY1NzBcdTRFRTVcdTY1MkZcdTYzMDFcdThEMUZcdTUwM0MnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA8PSBfbGluZWFyUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICB9ZWxzZSBpZih4Pj1fbWF4U2NhbGUgKiBfbGluZWFyUmFuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gX21heFNjYWxlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC8gX2xpbmVhclJhbmdlICogeFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBCaUFjY2VsZXJhdGVTY2FsYXIoeCA6IG51bWJlciwgX2xpbmVhclJhbmdlIDogbnVtYmVyLCBfbWF4U2NhbGUgOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBzaWduID0geCA+PSAwID8gMSA6IC0xXHJcbiAgICAgICAgcmV0dXJuIEFjY2VsZXJhdGVTY2FsYXIoc2lnbiAqIHgsIF9saW5lYXJSYW5nZSwgX21heFNjYWxlKVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRlQ3VydmUoX3N0YXJ0UG9pbnQgOiBWZWN0b3IsIF9zdGFydFZlYyA6IFZlY3RvciwgX2xlbmd0aCA6IG51bWJlciwgX2R0IDogbnVtYmVyLCBfZ3Jhdml0eSA6IG51bWJlcil7XHJcbiAgICAgICAgX2dyYXZpdHkgPSBfZ3Jhdml0eSA/IF9ncmF2aXR5IDogMVxyXG4gICAgICAgIGxldCBjdXJ2ZTogVmVjdG9yW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IF9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBuZXcgVmVjdG9yMihfc3RhcnRQb2ludC54LCBfc3RhcnRQb2ludC56KS5hZGQobmV3IFZlY3RvcjIoX3N0YXJ0VmVjLngsIF9zdGFydFZlYy56KSkubXVsdGlwbHkoX2R0ICogaW5kZXgpXHJcbiAgICAgICAgICAgIGxldCBQb3NZID0gX3N0YXJ0VmVjLnkgKiBfZHQgKiBpbmRleCAtIDAuNSAqIDkuOCAqIF9ncmF2aXR5ICogKF9kdCAqIGluZGV4KSAqIChfZHQgKiBpbmRleCkgKyBfc3RhcnRQb2ludC55XHJcbiAgICAgICAgICAgIGN1cnZlLnB1c2gobmV3IFZlY3Rvcihwb3NYLngsIFBvc1ksIHBvc1gueSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJ2ZVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldEF0dGVudWF0aW9uQnlHdW5JZChfdHlwZTpudW1iZXIsIF9ndW46V2VhcG9uQmFzZUNscywgX2RpczpudW1iZXIpOm51bWJlcntcclxuICAgICAgICBpZiAoX3R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NUI1MFx1NUYzOVx1OThERVx1ODg0Q1x1OERERFx1NzlCQlx1NEYyNFx1NUJCM1x1ODg3MFx1NTFDRlxyXG4gICAgICAgICAgICBsZXQgZGlzQXR0ZW51YXRpb24gPSBfZ3VuLl9jb25maWdEYXRhLmRhbWFnZUF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBkaXNBdHRlbnVhdGlvbi5sZW5ndGhcclxuICAgICAgICAgICAgaWYobGVuID09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVuOyBpID49IDE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZGlzQXR0ZW51YXRpb25baV0uRGlzdGFuY2UgPD0gX2Rpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc0F0dGVudWF0aW9uW2ldLkF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9IGVsc2UgaWYoX3R5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NzIwNlx1NzBCOFx1ODMwM1x1NTZGNFx1NEYyNFx1NUJCM1x1ODg3MFx1NTFDRlxyXG4gICAgICAgICAgICBsZXQgZXhwbG9zaW9uQXR0ZW51YXRpb24gPSBfZ3VuLl9jb25maWdEYXRhLmV4cGxvc2lvbkRhbWFnZUF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBleHBsb3Npb25BdHRlbnVhdGlvbi5sZW5ndGhcclxuICAgICAgICAgICAgaWYobGVuID09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVuOyBpID49IDE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZXhwbG9zaW9uQXR0ZW51YXRpb25baV0uRGlzdGFuY2UgPD0gX2Rpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cGxvc2lvbkF0dGVudWF0aW9uW2ldLkF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIF9zZWxmIFx1ODFFQVx1NURGMVx1NzY4NFx1ODlEMlx1ODI3MiAgXHJcbiAgICAgKiBAcGFyYW0gX2lzSGl0U2VsZiBcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTU0N0RcdTRFMkRcdTgxRUFcdTVERjFcclxuICAgICAqIEBwYXJhbSBfaXNIaXRGcmllbmQgXHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU1NDdEXHU0RTJEXHU5NjFGXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gX2RpcyBcdTUzNEFcdTVGODRcclxuICAgICAqIEBwYXJhbSBfYW5nbGUgXHU4OUQyXHU1RUE2XHJcbiAgICAgKiBAcGFyYW0gX3BvcyBcdTY4QzBcdTZENEJcdTc2ODRcdTUzOUZcdTcwQjlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0RW5lbXlCeVJhbmdlKF9zZWxmOkNoYXJhY3RlciwgXHJcbiAgICAgICAgX2lzSGl0U2VsZjpib29sZWFuLCBcclxuICAgICAgICBfaXNIaXRGcmllbmQ6Ym9vbGVhbiwgXHJcbiAgICAgICAgX2RpczpudW1iZXIsIFxyXG4gICAgICAgIF9hbmdsZTpudW1iZXIsIFxyXG4gICAgICAgIF9wb3M6VmVjdG9yKTpDaGFyYWN0ZXJbXXtcclxuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgOiBDaGFyYWN0ZXJbXVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnNcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRXZWFwb25BbW1vSWQoX3dlYXBvbklkIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCJcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xze1xyXG4gICAgcHJpdmF0ZSB3ZWFwb25BY2Nlc3Nvcnk6IEdhbWVPYmplY3RcclxuICAgIHB1YmxpYyBpZDpudW1iZXJcclxuICAgIHByaXZhdGUgdXVpZDogc3RyaW5nXHJcbiAgICBwcml2YXRlIGF0dGFjaGVkV2VhcG9uIDogV2VhcG9uQmFzZUNsc1xyXG4gICAgcHVibGljIGNvbmZpZ0RhdGE6IEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlDb25maWdEYXRhXHJcbiAgICBjb25zdHJ1Y3Rvcihfb2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgICB0aGlzLndlYXBvbkFjY2Vzc29yeSA9IF9vYmpcclxuICAgICAgICB0aGlzLmF0dGFjaGVkV2VhcG9uID0gbnVsbFxyXG4gICAgICAgIFdlYXBvblRvb2wuSW5pdFdlYXBvbkFjY2Vzc29yeUNvbmZpZyh0aGlzKVxyXG4gICAgICAgIHRoaXMuUGlja1NvdW5kKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBVcGRhdGUoZHQ6bnVtYmVyKXtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRXF1aXBUb1dlYXBvbih3ZWFwb246IFdlYXBvbkJhc2VDbHMpe1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRXZWFwb24gPSB3ZWFwb25cclxuICAgIH1cclxuICAgIHB1YmxpYyBVbkVxdWlwRnJvbVdlYXBvbigpe1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRXZWFwb24gPSBudWxsXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVzdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBQaWNrU291bmQoKXtcclxuXHJcbiAgICB9XHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvbkFtbW9CYXNlQ2xze1xyXG4gICAgcHVibGljIGNvdW50IDpudW1iZXJcclxuICAgIHByaXZhdGUgaWQgOm51bWJlclxyXG4gICAgcHJpdmF0ZSBvcmRlciA6bnVtYmVyXHJcbiAgICBwcml2YXRlIHBpY2tTb3VuZCA6c3RyaW5nXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlciA6IENoYXJhY3RlclxyXG5cclxuICAgIGNvbnN0dXJjdG9yKGlkOm51bWJlcixjb3VudDpudW1iZXIsY2hhcmFjdGVyIDogQ2hhcmFjdGVyKXtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnRcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxyXG5cclxuICAgICAgICB0aGlzLlBpY2tTb3VuZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQbGF5ZXJQaWNrQW1tbyh3ZWFwb25BbW1vIDogR2FtZU9iamVjdCwgY291bnQgOiBudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgaWYod2VhcG9uQW1tbyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ICs9IGNvdW50XHJcbiAgICAgICAgdGhpcy5QaWNrU291bmQoKVxyXG4gICAgfSAgICAgIFxyXG4gICAgcHJpdmF0ZSBQbGF5ZXJEcm9wQW1tbyhjb3VudDogbnVtYmVyKTpib29sZWFue1xyXG4gICAgICAgIGxldCBpc0Ryb3BBbGwgPSBmYWxzZVxyXG4gICAgICAgIGlmKHRoaXMuY291bnQgPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3VudCA+PSB0aGlzLmNvdW50KXtcclxuICAgICAgICAgICAgaXNEcm9wQWxsID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50IC09IGNvdW50XHJcbiAgICAgICAgaWYoaXNEcm9wQWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzRHJvcEFsbFxyXG4gICAgfVxyXG4gICAgcHVibGljIFBsYXllckNvbnN1bWVBbW1vKGNvdW50IDogbnVtYmVyKTpudW1iZXJ7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudCA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDBcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY291bnQgPiB0aGlzLmNvdW50KXtcclxuICAgICAgICAgICAgY291bnQgPSB0aGlzLmNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgLT0gY291bnRcclxuICAgICAgICByZXR1cm4gY291bnRcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRDb3VudChjb3VudCA6IG51bWJlcik6dm9pZHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnRcclxuICAgIH1cclxuICAgIHByaXZhdGUgUGlja1NvdW5kKCk6dm9pZHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbkFuaW1hdGlvbkNsc3tcclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIGlkIDogbnVtYmVyXHJcbiAgICBwbGF5ZXIgOiBDaGFyYWN0ZXJcclxuICAgIHJpZ2h0QXJtUG9zaXRpb24gOiBWZWN0b3JcclxuICAgIGxlZnRBcm1Qb3NpdGlvbiA6IFZlY3RvclxyXG4gICAgY29uZmlnIDogR2FtZUNvbnN0LldlYXBvbkFuaW1hdGlvbkNvbmZpZ0RhdGFcclxuICAgIHNob3VsZGVyUmF5TWluRGlzdGFuY2UgOiBudW1iZXJcclxuICAgIG5vU2hvb3RpbmdTdGF0ZSA6IGJvb2xlYW5cclxuICAgIGxheWVyIDogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoZHQ6bnVtYmVyKXtcclxuICAgICAgICAvL1x1NTJBMFx1OTAxRlx1OEREMVx1NzJCNlx1NjAwMVx1NEUwQlx1NjUzNlx1NjdBQSxcdTUxNzZcdTRFRDZcdTcyQjZcdTYwMDFcdTZCNjNcdTVFMzhcdTYzMDFcdTY3QUFcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25BbmltYXRpb25DbHMgfSBmcm9tIFwiLi9XZWFwb25BbmltYXRpb25DbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25DYW1lcmFDbHMgfSBmcm9tIFwiLi9XZWFwb25DYW1lcmFDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25HVUlDbHMgfSBmcm9tIFwiLi9XZWFwb25HVUlDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25NYWdhemluZUNscyB9IGZyb20gXCIuL1dlYXBvbk1hZ2F6aW5lQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uUmVjb2lsQ2xzIH0gZnJvbSBcIi4vV2VhcG9uUmVjb2lsQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uU291bmRDbHMgfSBmcm9tIFwiLi9XZWFwb25Tb3VuZENsc1wiXHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCJcclxudHlwZSBGaXJlTW9kZUVudW0gPSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2VhcG9uQmFzZUNscyB7XHJcblxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5ODg0XHU1MjM2XHU0RjUzKi9cclxuICAgIHB1YmxpYyBwcmVmYWI6IEdhbWVPYmplY3RcclxuICAgIC8qKlxyXG4gICAgICogXHU2N0FBXHU2OEIwXHU5MTREXHU3RjZFSURcclxuICAgICAqL1xyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU3RUQxXHU1QjlBXHU3Njg0XHU5NTFBXHU3MEI5ICovXHJcbiAgICBwdWJsaWMgcm9vdDogR2FtZU9iamVjdFxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU2MjQwXHU1QzVFXHU3Njg0XHU3M0E5XHU1QkI2XHU4OUQyXHU4MjcyICovXHJcbiAgICBwdWJsaWMgY2hhcmFjdGVyOiBDaGFyYWN0ZXJcclxuICAgIC8qKlx1NjdBQVx1NTNFM1x1NEY0RFx1N0Y2RVx1NzBCOSAqL1xyXG4gICAgcHJpdmF0ZSBtdXp6bGVPYmo6IEdhbWVPYmplY3RcclxuICAgIC8qKlx1NjdBQVx1N0JBMVx1NjVCOVx1NTQxMSAqL1xyXG4gICAgcHJpdmF0ZSBkaXI6IFZlY3RvclxyXG4gICAgLyoqXHU2Mjk1XHU1RjM5XHU1M0UzXHU1QkY5XHU4QzYxICovXHJcbiAgICBwcml2YXRlIHRvc3M6IEdhbWVPYmplY3RcclxuXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTY2MkZcdTU0MjZcdTg4QUJcdTYzMDFcdTY3MDkgKi9cclxuICAgIHByaXZhdGUgX2lzZHJhdzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1pvb21JbiA6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcmFwaWRseVJlbWFpbmluZ0J1bGxldHM6IG51bWJlciA9IDFcclxuICAgIHByaXZhdGUgX2N1clNob290TW9kZSA6IEZpcmVNb2RlRW51bSA9IEdhbWVDb25zdC5GaXJlTW9kZUVudW0uQXV0b1xyXG4gICAgcHJpdmF0ZSBfaGFzSnVzdEZpcmVkIDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9maXJlV2FpdCA6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNGaXJpbmdPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNBbGxvd2VkID0gdHJ1ZVxyXG4gICAgcHJpdmF0ZSBfd2FzQWxsb3dlZEFuZEZpcmluZyA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9yZWxvYWRXYWl0ID0gMFxyXG4gICAgcHJpdmF0ZSBfb25SZWxvYWQgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNJZ25vcmluZ1NlbGYgPSB0cnVlXHJcbiAgICBwcml2YXRlIF9oYXNGaXJlQ29uZGl0aW9uID0gdHJ1ZVxyXG4gICAgcHJpdmF0ZSBfZmlyZUNvbmRpdGlvblNpZGUgPSAxXHJcbiAgICBwcml2YXRlIF9pc0dvaW5nVG9QdW1wID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzUHVtcE5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcHVtcFdhaXQgPSAwXHJcbiAgICBwcml2YXRlIF9pc1B1bXBpbmcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNXYWl0aW5nUHVtcCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF96b29tSW5UcnlQdW1wID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzV2l0aERyYXdpbmcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcHVtcE1ha2VTaGVsbCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9haW1CZWZvcmVQdW1wID0gZmFsc2VcclxuICAgIHB1YmxpYyBfd2VhcG9uQWNjZXNzb3J5TGlzdCA6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHM+ID0gbmV3IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHM+KClcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbWFnYXppbmU6IFdlYXBvbk1hZ2F6aW5lQ2xzXHJcbiAgICAgX3JlY29pbCA6IFdlYXBvblJlY29pbENsc1xyXG4gICAgcHJpdmF0ZSBfY2FtZXJhQ29udHJvbCA6IFdlYXBvbkNhbWVyYUNsc1xyXG4gICAgIF93ZWFwb25HVUk6V2VhcG9uR1VJQ2xzXHJcbiAgICBwcml2YXRlIF9hbmltYXRpb25Db250cm9sbGVyIDogV2VhcG9uQW5pbWF0aW9uQ2xzXHJcbiAgICBwcml2YXRlIF93ZWFwb25Tb3VuZCA6IFdlYXBvblNvdW5kQ2xzXHJcbiAgICBwdWJsaWMgZXJyb3I6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBnZXQgX2NvbmZpZ0RhdGEoKSA6IEdhbWVDb25zdC5XZWFwb25Db25maWdEYXRhXHJcblxyXG4gICAgcHJpdmF0ZSBfYXV0b0ZpcmVBaW06Ym9vbGVhblxyXG4gICAgY29uc3RydWN0b3IoX2NoYXJhY3RlcjpDaGFyYWN0ZXIsIF9yb290IDogR2FtZU9iamVjdCwgX3dlYXBvbk9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgICAgdGhpcy5FYXJseUluaXRpYWxpemUoKVxyXG4gICAgICAgIHRoaXMucHJlZmFiID0gX3dlYXBvbk9ialxyXG4gICAgICAgIHRoaXMucm9vdCA9IF9yb290XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBfY2hhcmFjdGVyXHJcbiAgICAgICAgdGhpcy5fbWFnYXppbmUgPSBuZXcgV2VhcG9uTWFnYXppbmVDbHModGhpcylcclxuICAgICAgICB0aGlzLl9yZWNvaWwgPSBuZXcgV2VhcG9uUmVjb2lsQ2xzKClcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sID0gbmV3IFdlYXBvbkNhbWVyYUNscyh0aGlzLl9yZWNvaWwpXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uR1VJID0gbmV3IFdlYXBvbkdVSUNscygpXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBXZWFwb25BbmltYXRpb25DbHMoKVxyXG4gICAgICAgIHRoaXMuX3dlYXBvblNvdW5kID0gbmV3IFdlYXBvblNvdW5kQ2xzKClcclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLkxhdGVySW5pdGlhbGl6ZSgpXHJcbiAgICB9XHJcbiAgICAvKipcdTY3OTBcdTY3ODRcdTUxRkRcdTY1NzBcdUZGMENcdTk3MDBcdTg5ODFcdTYyNEJcdTUyQThcdThDMDNcdTc1MjggKi9cclxuICAgIHB1YmxpYyBkZXN0cnVjdG9yKCkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkVhcmx5RGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuU2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICB0aGlzLl9tYWdhemluZS5SZWNvcmRpbmdCdWxsZXRzTGVmdCh0cnVlKVxyXG4gICAgICAgIHRoaXMucHJlZmFiLnNldFZpc2liaWxpdHkoVHlwZS5Qcm9wZXJ0eVN0YXR1cy5PbilcclxuICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5VbkVxdWlwRnJvbVdlYXBvbigpICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmNsZWFyKClcclxuICAgICAgICAvL1x1Njc5MFx1Njc4NFx1NjdBQVx1NEUwQVx1NzY4NFx1ODFFQVx1NjcwOVx1N0M3QlxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuZGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuZGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uQ29udHJvbGxlci5kZXN0cnVjdG9yKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvblNvdW5kLmRlc3RydWN0b3IoKVxyXG4gICAgICAgIC8vXHU2RTA1XHU5NjY0XHU2N0FBXHU2OEIwXHU2MjQwXHU2NzA5XHU4MDA1XHJcbiAgICAgICAgLy9zZWxmLmd1bi5QbGF5ZXIuVmFsdWUgPSBuaWxcclxuXHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHU1NzI4XHU1QjlFXHU0RjhCXHU1MzE2XHU2NzAwXHU1RjAwXHU1OUNCXHU2MjY3XHU4ODRDICovXHJcbiAgICBwcm90ZWN0ZWQgRWFybHlJbml0aWFsaXplKCk6dm9pZHtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcdTVCOUVcdTRGOEJcdTUzMTZcdTY3MDBcdTU0MEVcdTYyNjdcdTg4NEMgKi9cclxuICAgIHByb3RlY3RlZCBMYXRlckluaXRpYWxpemUoKTp2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgRWFybHlEZXN0cnVjdG9yKCk6dm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU2NkY0XHU2NUIwXHU1MUZEXHU2NTcwICovXHJcbiAgICBwdWJsaWMgVXBkYXRlKF9kdDpudW1iZXIpe1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1dpdGhEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faXNHb2luZ1RvRmlyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU4MUVBXHU1MkE4XHU4OEM1XHU1RjM5XHU1RjAwXHU1NDJGXHU1NDBFXHVGRjBDXHU4RkRCXHU4ODRDXHU2OEMwXHU2RDRCICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuYXV0b1JlbG9hZCkge1xyXG4gICAgICAgICAgICAvL2lmKHRoaXMuX21hZ2F6aW5lLilcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU0RTBBXHU0RTAwXHU1RTI3XHU1RjAwXHU3MDZCXHU0RTg2XHU1RTc2XHU0RTE0XHU5NzAwXHU4OTgxXHU2MkM5XHU2N0FBXHU2ODEzLFx1NUU3Nlx1NEUxNFx1NUY1M1x1NTI0RFx1NkNBMVx1NjcwOVx1NTcyOFx1ODhDNVx1NUI1MFx1NUYzOVx1NTQ4Q1x1NkI2M1x1NTcyOFx1NjJDOVx1NjdBQVx1NjgxM1x1NzY4NFx1OEZDN1x1N0EwQlx1NEUyRCAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLnB1bXBBZnRlckZpcmUgJiYgdGhpcy5faGFzSnVzdEZpcmVkICYmICF0aGlzLl9vblJlbG9hZCAmJiAhdGhpcy5faXNQdW1waW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1pvb21Jbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nUHVtcCA9IHRydWVcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1bXBTdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21JblRyeVB1bXAgJiYgdGhpcy5faXNXYWl0aW5nUHVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl96b29tSW5UcnlQdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLlB1bXBTdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NTFDNlx1NTkwN1x1NTcyOFx1NEUwQlx1NEUwMFx1NUUyN1x1OEZEQlx1ODg0Q1x1NjM2Mlx1NUYzOVx1NjRDRFx1NEY1QyAqL1xyXG4gICAgICAgIGlmKHRoaXMuX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lKXtcclxuICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAvL3RoaXMuX3JlbG9hZFdhaXQgPSBcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU1MUM2XHU1OTA3XHU1NzI4XHU0RTBCXHU0RTAwXHU1RTI3XHU4RkRCXHU4ODRDXHU2MkM5XHU2N0FBXHU2ODEzXHU2NENEXHU0RjVDICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzR29pbmdUb1B1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5faXNQdW1wTmV4dFVwZGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5fcHVtcE1ha2VTaGVsbCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHVtcGluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5fcHVtcFdhaXQgPSAxIC8gdGhpcy5fY29uZmlnRGF0YS5zaG9vdFNwZWVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1OEZEQlx1ODg0Q1x1NUYwMFx1NTlDQlx1NUMwNFx1NTFGQi9cdTUwNUNcdTZCNjJcdTVDMDRcdTUxRkIvXHU1RjAwXHU1OUNCXHU2MzYyXHU1QjUwXHU1RjM5XHU3Njg0XHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxICovXHJcbiAgICAgICAgbGV0IGlzQWxsb3dlZEFuZEZpcmluZyA9IHRoaXMuX2lzR29pbmdUb0ZpcmUgJiYgdGhpcy5faXNBbGxvd2VkXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0FsbG93ZWRBbmRGaXJpbmcgJiYgIXRoaXMuX3dhc0FsbG93ZWRBbmRGaXJpbmcpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkZpcmVTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNBbGxvd2VkQW5kRmlyaW5nICYmIHRoaXMuX3dhc0FsbG93ZWRBbmRGaXJpbmcpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkZpcmVTdG9wcGVkLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0dvaW5nVG9QdW1wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9QdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlB1bXBTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5yZWxvYWRXaXRoTWFnYXppbmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5NYWdhemluZUxvYWRTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuQnVsbGV0TG9hZFN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNab29tSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93YXNBbGxvd2VkQW5kRmlyaW5nID0gaXNBbGxvd2VkQW5kRmlyaW5nXHJcblxyXG4gICAgICAgIHRoaXMuX2ZpcmVXYWl0IC09IF9kdFxyXG4gICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgLT0gX2R0XHJcbiAgICAgICAgdGhpcy5fcHVtcFdhaXQgLT0gX2R0XHJcbiAgICAgICAgaWYgKHRoaXMuX3B1bXBXYWl0IDwgMC44IC8gdGhpcy5fY29uZmlnRGF0YS5zaG9vdFNwZWVkICYmIHRoaXMuX3B1bXBXYWl0ID4gMCAmJiB0aGlzLl9haW1CZWZvcmVQdW1wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcHVtcFdhaXQgPCAwLjYgLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWQgJiYgdGhpcy5fcHVtcFdhaXQgPiAwICYmIHRoaXMuX2lzUHVtcGluZyAmJiAhdGhpcy5fcHVtcE1ha2VTaGVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLk1ha2VCdWxsZXRTaGVsbCgpXHJcbiAgICAgICAgICAgIHRoaXMuX3B1bXBNYWtlU2hlbGwgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NjhDMFx1NjdFNVx1NUY1M1x1NTI0RFx1NjM2Mlx1NUYzOVx1NjRDRFx1NEY1Q1x1NjYyRlx1NTQyNlx1N0VEM1x1Njc1RiAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNKdXN0RmlyZWQgJiYgdGhpcy5fY29uZmlnRGF0YS5jYW5JbnRlcnJ1cHRCdWxsZXRMb2FkKSB7XHJcbiAgICAgICAgICAgIC8qKlx1NEUwQVx1NEUwMFx1NUUyN1x1NUYwMFx1NzA2Qlx1NEU4Nlx1RkYwQ1x1OTcwMFx1ODk4MVx1NEUyRFx1NjVBRFx1NjM2Mlx1NUYzOVx1NjRDRFx1NEY1QyAqL1xyXG4gICAgICAgICAgICB0aGlzLl9yZWxvYWRXYWl0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgJiYgdGhpcy5fcmVsb2FkV2FpdCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLnJlbG9hZFdpdGhNYWdhemluZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50bHkgcmVsb2FkaW5nIHRoZSBlbnRpcmUgbWFnYXppbmVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFnYXppbmUuTG9hZE1hZ2F6aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5IHJlbG9hZGluZyBvbmUgYnVsbGV0IGF0IGEgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hZ2F6aW5lLkxvYWRPbmVCdWxsZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5CdWxsZXRMb2FkZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVsb2FkZWQgb25lIGJ1bGxldCwgY2hlY2sgaWYgdGhlIG1hZ2F6aW5lIGlzIG5vdCBmdWxseSBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFnYXppbmUuVXBkYXRlTG9hZFBlcmNlbnRhZ2UoKSAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hZ2F6aW5lIGlzIG5vdCBmdWxseSBsb2FkZWQsIGNoZWNrIGlmIGl0IGNhbiBjb250aW51ZSBsb2FkaW5nIGJ1bGxldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hZ2F6aW5lLlVwZGF0ZUNhbkxvYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuIGNvbnRpbnVlIGxvYWRpbmcgYnVsbGV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdGhpcy5fY29uZmlnRGF0YS5jYW5JbnRlcnJ1cHRCdWxsZXRMb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCA9IHRoaXMuX21hZ2F6aW5lLkdldExvYWRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW5ub3QgY29udGludWUgbG9hZGluZyBidWxsZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWdhemluZSBpcyBmdWxseSBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUmVsb2FkRmluaXNoZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTY4QzBcdTY3RTVcdTVGNTNcdTUyNERcdTYyQzlcdTY3QUFcdTY4MTNcdTY0Q0RcdTRGNUNcdTY2MkZcdTU0MjZcdTdFRDNcdTY3NUYgKi9cclxuICAgICAgICBpZiAodGhpcy5faXNQdW1wTmV4dFVwZGF0ZSAmJiB0aGlzLl9wdW1wV2FpdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1B1bXBOZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNQdW1waW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlB1bXBlZCwgdGhpcylcclxuICAgICAgICAgICAgaWYodGhpcy5fYWltQmVmb3JlUHVtcCAmJiAhdGhpcy5fYXV0b0ZpcmVBaW0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLk1lY2hhbmljYWxBaW1TdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGFzSnVzdEZpcmVkID0gZmFsc2VcclxuICAgICAgICAvKipcdTY4QzBcdTY3RTVcdTVGMDBcdTcwNkJcdTcyQjZcdTYwMDEgKi9cclxuICAgICAgICBpZiAodGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgJiYgdGhpcy5faXNBbGxvd2VkKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJlRGVsYXkgPSAxIC8gdGhpcy5fY29uZmlnRGF0YS5zaG9vdFNwZWVkXHJcbiAgICAgICAgICAgIGxldCBkZWxheSA9IDBcclxuICAgICAgICAgICAgbGV0IGhhc0ZpcmVkID0gZmFsc2VcclxuICAgICAgICAgICAgd2hpbGUodGhpcy5fZmlyZVdhaXQgPCAwKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gdGhpcy5fY29uZmlnRGF0YS5idWxsZXRQZXJTaG9vdDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9tYWdhemluZS5pc0VtcHR5TG9hZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuRmlyZShkZWxheSwgIXRoaXMuX2NvbmZpZ0RhdGEuY29uc3VtZVNpbmdsZUJ1bGxldFBlclNob290KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNGaXJlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMtLVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihoYXNGaXJlZCAmJiB0aGlzLl9jb25maWdEYXRhLmNvbnN1bWVTaW5nbGVCdWxsZXRQZXJTaG9vdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db25zdW1lKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGhhc0ZpcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5fY29uZmlnRGF0YS5wdW1wQWZ0ZXJGaXJlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NYWtlQnVsbGV0U2hlbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5GaXJlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkVtcHR5RmlyZSwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlbGF5ICs9IGZpcmVEZWxheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlyZVdhaXQgKz0gZmlyZURlbGF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihoYXNGaXJlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvaWwuRmlyZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLklucHV0UmVjb2lsKHRoaXMuX3JlY29pbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1NEUwRFx1NTE0MVx1OEJCOFx1NUYwMFx1NjdBQVx1RkYwQ1x1NTIxOVx1NUMwNlx1NjdBQVx1NEUyRFx1NUI1MFx1NUYzOVx1OEZERVx1NTNEMVx1NTI2OVx1NEY1OVx1NUI1MFx1NUYzOVx1NkUwNVx1OTZGNlxyXG4gICAgICAgICAgICBpZighdGhpcy5faXNBbGxvd2VkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHU2ODM5XHU2MzZFXHU0RTBEXHU1NDBDXHU3Njg0XHU1RjAwXHU3MDZCXHU2QTIxXHU1RjBGXHU4RkRCXHU4ODRDXHU2NTcwXHU2MzZFXHU5MUNEXHU3RjZFXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2N1clNob290TW9kZSAhPSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLkF1dG8pe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPD0gMCB8fCB0aGlzLl9tYWdhemluZS5pc0VtcHR5TG9hZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jdXJTaG9vdE1vZGUgPT0gR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5TaW5nbGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzIDw9IDAgPyAwIDogdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHNcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVXYWl0ID0gTWF0aC5tYXgoMCwgdGhpcy5fZmlyZVdhaXQpXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgPSBNYXRoLm1heCgwLCB0aGlzLl9yZWxvYWRXYWl0KVxyXG4gICAgICAgICAgICB0aGlzLl9wdW1wV2FpdCA9IE1hdGgubWF4KDAsIHRoaXMuX3B1bXBXYWl0KVxyXG4gICAgICAgICAgICAvL1x1NTE3Nlx1NEVENlx1NjNBN1x1NTIzNlx1N0M3Qlx1NzY4NFx1NjZGNFx1NjVCMFxyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLlVwZGF0ZShfZHQpXHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbkNvbnRyb2xsZXIuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgdGhpcy5fcmVjb2lsLlVwZGF0ZShfZHQpXHJcbiAgICAgICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLlVwZGF0ZShfZHQpXHJcbiAgICAgICAgICAgIHRoaXMuX21hZ2F6aW5lLlVwZGF0ZSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hTY2FsZXMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjdBQVx1NEUwQVx1ODhDNVx1NTkwN1x1NEUwMFx1NEUyQVx1OTE0RFx1NEVGNlxyXG4gICAgICogQHBhcmFtIGFjY2UgXHU5MTREXHU0RUY2XHU1QjlFXHU0RjhCXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIEVxdWlwQWNjZXNzb3J5KGFjY2U6V2VhcG9uQWNjZXNzb3J5QmFzZUNscyk6IFtib29sZWFuLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXSB7XHJcbiAgICAgICAgbGV0IGFjY2VJZCA9IGFjY2UuaWRcclxuICAgICAgICBsZXQgY2FuQmVFcXVpcCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5fY29uZmlnRGF0YS5jYW5CZUVxdWlwQWNjZXNzb3J5LmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gYWNjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5CZUVxdWlwID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoIWNhbkJlRXF1aXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9yaWdpbkFjY2UgPSB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmdldChhY2NlLmNvbmZpZ0RhdGEubG9jYXRpb24pXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5zZXQoYWNjZS5jb25maWdEYXRhLmxvY2F0aW9uLCBhY2NlKVxyXG4gICAgICAgIGFjY2UuRXF1aXBUb1dlYXBvbih0aGlzKVxyXG4gICAgICAgIHJldHVybiBbdHJ1ZSwgb3JpZ2luQWNjZV1cclxuICAgIH1cclxuICAgIHB1YmxpYyBVbkVxdWlwQWNjZXNzb3J5KF9sb2NhdGlvbk9yQ2xzOldlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfCBudW1iZXIpOiB2b2lke1xyXG4gICAgICAgIGlmKF9sb2NhdGlvbk9yQ2xzIGluc3RhbmNlb2YgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyl7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZGVsZXRlKF9sb2NhdGlvbk9yQ2xzLmNvbmZpZ0RhdGEubG9jYXRpb24pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZGVsZXRlKF9sb2NhdGlvbk9yQ2xzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlx1NjM2Mlx1NUYzOVx1NTkzOSxcdTYzNjJcdTVGMzlcdTU5MzlcdTc2ODRcdTc2ODRcdTY1RjZcdTUwMTlcdTRFMERcdTgwRkRcdTYyQzlcdTY3QUFcdTY4MTMgKi9cclxuICAgIHB1YmxpYyBMb2FkTWFnYXppbmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3ICYmICEgdGhpcy5faXNQdW1waW5nICYmIHRoaXMuX21hZ2F6aW5lLmNhbkxvYWRlZCAmJiAhIHRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvUmVsb2FkTWFnYXppbmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIFB1bXBTdGFydCgpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3ICYmICF0aGlzLl9vblJlbG9hZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb1B1bXAgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2FpbUJlZm9yZVB1bXAgPSB0aGlzLl9pc1pvb21JblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlQnVsbGV0U2hlbGwoKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGlmKHRoaXMudG9zcyA9PSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZW1wID0gbmV3IFJvdGF0aW9uKDE4MCAqIE1hdGgucmFuZG9tKCksIDAsIDE4MCAqIE1hdGgucmFuZG9tKCkpXHJcbiAgICAgICAgbGV0IG9iaiA9IGF3YWl0IEdhbWVPYmpQb29sLmdldEluc3RhbmNlKCkuYXN5bmNTcGF3bih0aGlzLl9jb25maWdEYXRhLmJ1bGxldFNoZWxsKVxyXG4gICAgICAgIG9iai5zZXRXb3JsZExvY2F0aW9uKHRoaXMudG9zcy5nZXRXb3JsZExvY2F0aW9uKCkpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkUm90YXRpb24odGVtcClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlRmlyZUVmZmVjdCgpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgbGV0IG9iaiA9YXdhaXQgR2FtZU9ialBvb2wuZ2V0SW5zdGFuY2UoKS5hc3luY1NwYXduKHRoaXMuX2NvbmZpZ0RhdGEuZmlyZUVmZmVjdClcclxuICAgICAgICBvYmouc2V0V29ybGRMb2NhdGlvbih0aGlzLm11enpsZU9iai5nZXRXb3JsZExvY2F0aW9uKCkpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgTWFrZUJ1bGxldChlbmRPYmo6R2FtZU9iamVjdCwgZW5kUG9zOlZlY3RvciwgZW5kTm9ybWFsOlZlY3Rvcil7XHJcbiAgICAgICAgaWYoIWVuZE9iail7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmRPYmogaW5zdGFuY2VvZiBDaGFyYWN0ZXIpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9iaiA9IGF3YWl0IEdhbWVPYmpQb29sLmdldEluc3RhbmNlKCkuYXN5bmNTcGF3bih0aGlzLl9jb25maWdEYXRhLmJ1bGxldEhvbGUpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkTG9jYXRpb24oZW5kUG9zKVxyXG4gICAgICAgIG9iai5zZXRXb3JsZFNjYWxlKG5ldyBWZWN0b3IoMC4xLCAwLjEsIDAuMSkpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgTWFrZUhpdEVmZmVjdChlbmRQb3M6VmVjdG9yKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGxldCBvYmogPSBhd2FpdCBHYW1lT2JqUG9vbC5nZXRJbnN0YW5jZSgpLmFzeW5jU3Bhd24odGhpcy5fY29uZmlnRGF0YS5oaXRFZmZlY3QpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkTG9jYXRpb24oZW5kUG9zKVxyXG4gICAgfVxyXG4gICAgcHVibGljIElnbm9yZVNlbGYoaWdub3JlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX2lzSWdub3JpbmdTZWxmID0gaWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0RmlyZUNvbmRpdGlvbihzaWRlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5faGFzRmlyZUNvbmRpdGlvbiA9IHRydWVcclxuICAgICAgICB0aGlzLl9maXJlQ29uZGl0aW9uU2lkZSA9IHNpZGVcclxuICAgIH1cclxuICAgIHB1YmxpYyBDYW5jZWxGaXJlQ29uZGl0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5faGFzRmlyZUNvbmRpdGlvbiA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVHJ5RmlyZU9uZUJ1bGxldCgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fY3VyU2hvb3RNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5GaXJlTW9kZUVudW0uU2luZ2xlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5GaXJlTW9kZUVudW0uUmFwaWRseV8xOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gdGhpcy5fY29uZmlnRGF0YS5yYXBpZGx5XzFcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLlJhcGlkbHlfMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IHRoaXMuX2NvbmZpZ0RhdGEucmFwaWRseV8yXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBUcnlLZWVwRmlyZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyAmJiB0aGlzLl9jdXJTaG9vdE1vZGUgPT0gR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5BdXRvKXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVHJ5UHVtcChiOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKHRoaXMuX2NvbmZpZ0RhdGEucHVtcEFmdGVyRmlyZSAmJiB0aGlzLl9pc1pvb21JbiAmJiAhdGhpcy5faXNQdW1waW5nKXtcclxuICAgICAgICAgICAgLy9cdTVGMDBcdTY3QUFcdTU0MEVcdTg5ODFcdTYyQzlcdTY4MTNcdTVFNzZcdTRFMTRcdTczQjBcdTU3MjhcdTY2MkZcdTVGMDBcdTk1NUNcdTcyQjZcdTYwMDFcclxuICAgICAgICAgICAgdGhpcy5fem9vbUluVHJ5UHVtcCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWIpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYXV0b0ZpcmVBaW0gPSBiXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTWVjaGFuaWNhbEFpbVN0YXJ0KCk6dm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5faXNab29tSW4gfHwgIXRoaXMuX2lzZHJhdyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKHRoaXMuY2hhcmFjdGVyLm1vdmVtZW50U3RhdGUgPT0gTW92ZW1lbnRNb2RlLldhbGspIHx8IHRoaXMuX2lzUHVtcGluZyB8fCB0aGlzLl9vblJlbG9hZCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc1pvb21JbiA9IHRydWVcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLk1lY2hhbmljYWxBaW1TdGFydCgpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuTWVjaGFuaWNhbEFpbVN0YXJ0KClcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5BaW1JbiwgdGhpcylcclxuICAgIH1cclxuICAgIHB1YmxpYyBNZWNoYW5pY2FsQWltU3RvcCgpOnZvaWR7XHJcbiAgICAgICAgaWYoISh0aGlzLl9pc1pvb21JbiAmJiB0aGlzLl9pc2RyYXcpKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzWm9vbUluID0gZmFsc2VcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuQWltT3V0LCB0aGlzKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFdpdGhkcmF3V2VhcG9uKCk6dm9pZHtcclxuICAgICAgICBpZighdGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FpbUJlZm9yZVB1bXAgPSBmYWxzZVxyXG4gICAgICAgIGlmKHRoaXMuX2lzWm9vbUluKXtcclxuICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuT25VbkVxdWlwV2VhcG9uKHRydWUpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuU2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICB0aGlzLnByZWZhYi5zZXRWaXNpYmlsaXR5KFR5cGUuUHJvcGVydHlTdGF0dXMuT2ZmKVxyXG4gICAgICAgIGlmKHRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCA9IDBcclxuICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWVcclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUmVsb2FkRmluaXNoZWQsIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzZHJhdyA9IGZhbHNlXHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuV2l0aERyYXdXZWFwb24sIHRoaXMpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRHJhd1dlYXBvbigpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzV2l0aERyYXdpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5faXNkcmF3ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2FpbUJlZm9yZVB1bXAgPSBmYWxzZVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLlNldFZpc2libGUodHJ1ZSlcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLk9uRXF1aXBXZWFwb24odGhpcywgbnVsbClcclxuICAgICAgICB0aGlzLnByZWZhYi5zZXRWaXNpYmlsaXR5KFR5cGUuUHJvcGVydHlTdGF0dXMuT24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5faXNXYWl0aW5nUHVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMuUHVtcFN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dpdGhEcmF3aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApOyAgICAgICBcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5EcmF3V2VhcG9uLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDb25zdW1lKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWFnYXppbmUuQ29uc3VtZSgpKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBDaGFuZ2VTaG9vdE1vZGUoKTpHYW1lQ29uc3QuRmlyZU1vZGVFbnVtIHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcgJiYgdGhpcy5faXNBbGxvd2VkKXtcclxuICAgICAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5zaG9vdE1vZGUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAvL3lcdTY3MDlcdTU5MUFcdTc5Q0RcdTVDMDRcdTUxRkJcdTZBMjFcdTVGMEZcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0SW5kZXg6bnVtYmVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdEYXRhLnNob290TW9kZS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PSB0aGlzLl9jdXJTaG9vdE1vZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RNb2RlW25leHRJbmRleF0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyU2hvb3RNb2RlID0gdGhpcy5fY29uZmlnRGF0YS5zaG9vdE1vZGVbbmV4dEluZGV4XSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VyU2hvb3RNb2RlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFJheUNhc3RPcmlnaW4oKTpWZWN0b3J7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKS5hZGQodGhpcy5jaGFyYWN0ZXIuZ2V0Rm9yd2FyZFZlY3RvcigpLm11bHRpcGx5KDAuNSkuYWRkKChWZWN0b3IudXAubXVsdGlwbHkodGhpcy5jaGFyYWN0ZXIuY2Fwc3VsZUhhbGZIZWlnaHQgKiAyIC0gMC4xKSkpKSBcclxuICAgIH1cclxuICAgIHB1YmxpYyBSYXlDYXN0VGFyZ2V0KCk6VmVjdG9ye1xyXG4gICAgICAgIGxldCBbaW5mbywgaXNUYXJnZXRdOltWZWN0b3IsIGJvb2xlYW5dID0gdGhpcy5fY2FtZXJhQ29udHJvbC5HZXRUYXJnZXQoKVxyXG4gICAgICAgIGlmKGlzVGFyZ2V0KXtcclxuICAgICAgICAgICAgcmV0dXJuIGluZm9cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGluZm8ubXVsdGlwbHkodGhpcy5fY29uZmlnRGF0YS5kaXN0YW5jZSkuYWRkKHRoaXMubXV6emxlT2JqLmdldFdvcmxkTG9jYXRpb24oKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIE92ZXJsb2FkUmF5Q2FzdChkaXI6VmVjdG9yKTpHYW1lQ29uc3QuV2VhcG9uSGl0UmVzdWx0e1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLlJheUNhc3RPcmlnaW4oKS5hZGQoZGlyLm11bHRpcGx5KHRoaXMuX2NvbmZpZ0RhdGEuZGlzdGFuY2UpKVxyXG4gICAgICAgIGxldCBpbmZvID0gR2FtZXBsYXkubGluZVRyYWNlKHRoaXMuUmF5Q2FzdE9yaWdpbigpLCB0YXJnZXQpXHJcbiAgICAgICAgbGV0IHJlc3VsdDpHYW1lQ29uc3QuV2VhcG9uSGl0UmVzdWx0XHJcbiAgICAgICAgaWYoaW5mby5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTUyMjRcdTVCOUFcdTU0N0RcdTRFMkRcdTY2MkZcdTk3NzZcdTVCNTBcdTYyMTZcdTgwMDVcdTk2OUNcdTc4OERcdTcyNjlcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5mbywga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGluZm9ba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmdhbWVPYmplY3QgaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIgJiYgZWxlbWVudC5nYW1lT2JqZWN0ICE9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1NTQ3RFx1NEUyRFx1NzY4NFx1NjYyRlx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2FtZU9iamVjdC5nZXRDb2xsaXNpb24oKSA9PSBUeXBlLkNvbGxpc2lvblN0YXR1cy5Pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXRQb2ludCA9IGVsZW1lbnQuaW1wYWN0UG9pbnRcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0T2JqZWN0ID0gZWxlbWVudC5nYW1lT2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkhpdE5vcm1hbCA9IGVsZW1lbnQuaW1wYWN0Tm9ybWFsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGluZm8pIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbmZvLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW5mb1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5nYW1lT2JqZWN0IGluc3RhbmNlb2YgR2FtZXBsYXkuQ2hhcmFjdGVyKXtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzNBOVx1NUJCNlx1NjYyRlx1NTQyNlx1NTNFRlx1NEVFNVx1ODhBQlx1NTQ3RFx1NEUyRFx1NTIyNFx1NjVBRFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzNBOVx1NUJCNlx1NjYyRlx1NTQyNlx1NURGMlx1N0VDRlx1NkI3Qlx1NEVBMVx1NzY4NFx1NTIyNFx1NjVBRFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU1MjI0XHU1QjlBXHU1NDdEXHU0RTJEXHU3M0E5XHU1QkI2XHU3Njg0XHU5MEU4XHU0RjRELFx1NTIyNFx1NUI5QVx1NjIxMFx1NTI5Rlx1NTQwRVx1NzZGNFx1NjNBNVx1OEZENFx1NTZERVxyXG4gICAgICAgIGluZm8uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBDYWxjdWxhdGVSYXlDYXN0RGlyZWN0aW9uKCk6VmVjdG9ye1xyXG4gICAgICAgIGxldCBkaXIgPSB0aGlzLlJheUNhc3RUYXJnZXQoKS5zdWJ0cmFjdCh0aGlzLlJheUNhc3RPcmlnaW4oKSkubm9ybWFsaXplZFxyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb25Db250cm9sbGVyLm5vU2hvb3RpbmdTdGF0ZSkge1xyXG4gICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1NEUzQVx1NEUwRFx1NTNFRlx1NUMwNFx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICAgICAgICBkaXIgPSB0aGlzLm11enpsZU9iai5mb3J3YXJkVmVjdG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc1pvb21JbiAmJiB0aGlzLl9jb25maWdEYXRhLmFjY3VyYXRlQWltKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFdlYXBvblRvb2wuUmFuZG9tUm90YXRlKGRpciwgdGhpcy5fcmVjb2lsLl9jdXJyZW50RXJyb3IpICAgICBcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBGaXJlKGRlbGF5Om51bWJlciwgY29uc3VtZTpib29sZWFuKXtcclxuICAgICAgICBsZXQgaXNGcmllbmQgPSBmYWxzZVxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLkNhbGN1bGF0ZVJheUNhc3REaXJlY3Rpb24oKVxyXG4gICAgICAgIGxldCBoaXQgPSB0aGlzLk92ZXJsb2FkUmF5Q2FzdChkaXJlY3Rpb24pXHJcbiAgICAgICAgdGhpcy5faGFzSnVzdEZpcmVkID0gdHJ1ZVxyXG4gICAgICAgIGlmKCFpc0ZyaWVuZCAmJiBoaXQpe1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gaGl0LkhpdFBvaW50XHJcbiAgICAgICAgICAgIGxldCBlbmROb3JtID0gaGl0LkhpdE5vcm1hbFxyXG4gICAgICAgICAgICBsZXQgZW5kT2JqID0gaGl0LkhpdE9iamVjdFxyXG4gICAgICAgICAgICBpZihjb25zdW1lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29uc3VtZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaGl0LkhpdE9iamVjdCA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGVuZFBvcyA9IHRoaXMuUmF5Q2FzdE9yaWdpbigpLmFkZChkaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5fY29uZmlnRGF0YS5kaXN0YW5jZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5NYWtlQnVsbGV0KGVuZE9iaiwgZW5kUG9zLCBlbmROb3JtKVxyXG4gICAgICAgICAgICBpZihoaXQuSXNUYXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgaGl0LkRhbWFnZSA9IHRoaXMuX2NvbmZpZ0RhdGEuZGFtYWdlXHJcbiAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5TdWNjZXNzZnVsbHlIaXRUYXJnZXQsIHRoaXMsIGhpdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgRGFtYWdlKGhpdCA6IEdhbWVDb25zdC5XZWFwb25IaXRSZXN1bHQpe1xyXG4gICAgICAgIGxldCBoaXRQb3MgPSBoaXQuSGl0UG9pbnRcclxuICAgICAgICBsZXQgYXR0ZW51YXRpb246bnVtYmVyXHJcbiAgICAgICAgaWYoaGl0UG9zID09IG51bGwpe1xyXG4gICAgICAgICAgICBhdHRlbnVhdGlvbiA9IDBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGRpczpudW1iZXIgPSBoaXRQb3Muc3VidHJhY3QodGhpcy5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpKS5tYWduaXR1ZGVcclxuICAgICAgICAgICAgYXR0ZW51YXRpb24gPSBXZWFwb25Ub29sLkdldEF0dGVudWF0aW9uQnlHdW5JZCgxLCB0aGlzLCBkaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLl9jb25maWdEYXRhLmRhbWFnZSArIGF0dGVudWF0aW9uXHJcbiAgICAgICAgZGFtYWdlID0gZGFtYWdlIDw9IDAgPyAwIDogZGFtYWdlXHJcbiAgICAgICAgc3dpdGNoIChoaXQuSGl0UGFydCkge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5IaXRQYXJ0RW51bS5MaW1iOlxyXG4gICAgICAgICAgICAgICAgZGFtYWdlID0gZGFtYWdlICogdGhpcy5fY29uZmlnRGF0YS5oaXRMaW1iRGFtYWdlUmF0ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkhpdFBhcnRFbnVtLkJvZHk6XHJcbiAgICAgICAgICAgICAgICBkYW1hZ2UgPSBkYW1hZ2UgKiB0aGlzLl9jb25maWdEYXRhLmhpdEJvZHlEYW1hZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuSGl0UGFydEVudW0uSGVhZDpcclxuICAgICAgICAgICAgICAgIGRhbWFnZSA9IGRhbWFnZSAqIHRoaXMuX2NvbmZpZ0RhdGEuaGl0SGVhZERhbWFnZVJhdGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRhbWFnZSA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UGxheWVyIDogQ2hhcmFjdGVyIFxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5TdWNjZXNzZnVsbHlIaXQsIGhpdFBvcywgdGFyZ2V0UGxheWVyLCBkYW1hZ2UsIGhpdC5IaXRQYXJ0KVxyXG4gICAgICAgICAgICAvL1x1NEYyNFx1NUJCM1x1NTNEMVx1OEQ3N1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFJlZnJlc2hTY2FsZXMoKSB7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDFcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25SZWNvaWxDbHMgfSBmcm9tIFwiLi9XZWFwb25SZWNvaWxDbHNcIjtcclxuaW1wb3J0IHsgVHdlZW5VdGlsIH0gZnJvbSBcIi4uL1Rvb2wvVHdlZW5VdGlsXCI7XHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCI7XHJcbmltcG9ydCB7IENhbWVyYUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9DYW1lcmFDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uQ2FtZXJhQ2xze1xyXG4gICAgZ3VuUmVjb2lsIDogV2VhcG9uUmVjb2lsQ2xzXHJcbiAgICBndW4gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBtX2NhbWVyYSA6IENhbWVyYVN5c3RlbVxyXG4gICAgbV9vcmlnaW5ab29tIDogbnVtYmVyXHJcbiAgICBtX3N1cHBvc2VkWm9vbSA6IG51bWJlclxyXG4gICAgbV9zaWdodFpvb20gOiBudW1iZXJcclxuICAgIGFpbVRpbWUgOiBudW1iZXJcclxuICAgIG1faXNab29tSW4gOiBib29sZWFuXHJcbiAgICBtX29yaWdpbk9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9haW1PZmZzZXQgOiBWZWN0b3JcclxuICAgIG1fY3VycmVudE9mZnNldCA6IFZlY3RvclxyXG4gICAgaXNVcGRhdGluZyA6IGJvb2xlYW5cclxuICAgIHNjcmVlblNpemUgOiBWZWN0b3IyXHJcbiAgICBtX3NlbnNpdGl2aXR5IDogbnVtYmVyXHJcbiAgICBtX29yaWdpbkRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBkaXN0YW5jZSA6IG51bWJlclxyXG4gICAgbV9haW1EaXN0YW5jZSA6IG51bWJlclxyXG4gICAgbV9nYW1tYSA6IG51bWJlclxyXG4gICAgZGVsdGFQaHkgOiBudW1iZXJcclxuICAgIGRlbHRhVGhldGEgOiBudW1iZXJcclxuICAgIG1fZGVsdGFGT1YgOiBudW1iZXJcclxuICAgIG1fbGFzdE1vdXNlUG9zIDogVmVjdG9yMlxyXG4gICAgdmlicmF0aW9uQW1wbCA6IG51bWJlclxyXG4gICAgbV9iYWNrVGltZSA6IG51bWJlclxyXG4gICAgbV9qdW1wVG90YWwgOiBWZWN0b3IyXHJcbiAgICBtX2JhY2tUb3RhbCA6IG51bWJlclxyXG4gICAgZW5hYmxlQXNzaXN0QWltIDogYm9vbGVhblxyXG4gICAgYWltRW5lbXkgOiBDaGFyYWN0ZXJcclxuICAgIEFpbWluZ0lzT3ZlciA6IGJvb2xlYW5cclxuICAgIG1fanVtcEZvdlJhdGVTY2FsZSA6IG51bWJlclxyXG4gICAgbV9haW1UaW1lUmF0ZVNjYWxlIDogbnVtYmVyXHJcbiAgICBsYXN0Wm9vbSA6IG51bWJlclxyXG4gICAgdGFyZ2V0Q2FsbFRpbWUgOiBudW1iZXJcclxuICAgIHRhcmdldFJldHVybiA6IFtWZWN0b3IsIGJvb2xlYW5dXHJcbiAgICBtX2p1bXBGb3ZSYXRlVGFibGUgOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+XHJcbiAgICBtX2FpbVRpbWVSYXRlVGFibGUgOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+XHJcbiAgICBcclxuICAgIHNlbGZTcGluQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGp1bXBGT1ZDb250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAganVtcENvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICByZWNvdmVyQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGFzc2lzdEFpbUNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBhaW1Db250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAgZGVhaW1Db250cm9sbGVyOlR3ZWVuVXRpbFxyXG5cclxuICAgIGNvbmZpZ0RhdGEgOiBHYW1lQ29uc3QuV2VhcG9uQ2FtZXJhQ29uZmlnRGF0YVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9ndW5SZWNvaWw6V2VhcG9uUmVjb2lsQ2xzKXtcclxuICAgICAgICBXZWFwb25Ub29sLkluaXRXZWFwb25DYW1lcmFDb25maWcodGhpcylcclxuICAgICAgICB0aGlzLmd1blJlY29pbCA9IF9ndW5SZWNvaWxcclxuICAgICAgICB0aGlzLmd1biA9IF9ndW5SZWNvaWwuZ3VuXHJcbiAgICAgICAgdGhpcy5tX29yaWdpblpvb20gPSB0aGlzLmd1bi5fY29uZmlnRGF0YS53YWlzdEFpbUZPVlxyXG4gICAgICAgIHRoaXMubV9zdXBwb3NlZFpvb20gPSB0aGlzLm1fb3JpZ2luWm9vbVxyXG4gICAgICAgIHRoaXMubV9zaWdodFpvb20gPSB0aGlzLmd1bi5fY29uZmlnRGF0YS5tZWNoaW5pY2FsQWltRk9WXHJcbiAgICAgICAgdGhpcy5haW1UaW1lID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYWltVGltZVxyXG4gICAgICAgIC8vdGhpcy5tX29yaWdpbk9mZnNldCA9IFx1NTE2OFx1NUM0MFx1OTE0RFx1N0Y2RVxyXG4gICAgICAgIC8vdGhpcy5tX2FpbU9mZnNldCA9IFx1NTE2OFx1NUM0MFx1OTE0RFx1N0Y2RVxyXG4gICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX29yaWdpbk9mZnNldFxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zY3JlZW5TaXplID0gV2luZG93VXRpbC5nZXRWaWV3cG9ydFNpemUoKVxyXG4gICAgICAgIC8vdGhpcy5tX3NlbnNpdGl2aXR5ID0gXHJcbiAgICAgICAgLy90aGlzLm1fb3JpZ2luRGlzdGFuY2UgPSBcclxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5tX29yaWdpbkRpc3RhbmNlXHJcbiAgICAgICAgLy90aGlzLm1fYWltRGlzdGFuY2UgPSBcclxuICAgICAgICB0aGlzLm1fZ2FtbWEgPSAwXHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSAwXHJcbiAgICAgICAgdGhpcy5tX2RlbHRhRk9WID0gMFxyXG4gICAgICAgIHRoaXMubV9sYXN0TW91c2VQb3MgPSBuZXcgVmVjdG9yMigpXHJcbiAgICAgICAgdGhpcy52aWJyYXRpb25BbXBsID0gMFxyXG4gICAgICAgIHRoaXMubV9iYWNrVGltZSA9IDBcclxuICAgICAgICB0aGlzLm1fanVtcFRvdGFsID0gVmVjdG9yMi56ZXJvXHJcbiAgICAgICAgdGhpcy5tX2JhY2tUb3RhbCA9IDBcclxuICAgICAgICAvL3RoaXMuZW5hYmxlQXNzaXN0QWltID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFpbUVuZW15ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuQWltaW5nSXNPdmVyID0gZmFsc2VcclxuICAgICAgICB0aGlzLm1fanVtcEZvdlJhdGVTY2FsZSA9IDFcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVTY2FsZSA9IDFcclxuICAgICAgICAvKip6XHU4Rjc0XHU2NUNCXHU4RjZDXHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgcmVtblBoYXNlID0gMiAqIE1hdGguUEkgLSB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInBoYXNlXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLm1fYmFja1RpbWUsIHJlbW5QaGFzZSAvIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsdDM6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2dhbW1hID0gdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJBbXBsXCIpICogTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogdDEpICogXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNpbih0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgKiB0MSkgKyB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInBoYXNlXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9nYW1tYSA9IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5oYXMoXCJwaGFzZVwiKXx8IXRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuaGFzKFwiQW1wbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwicGhhc2VcIiwgMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcIkFtcGxcIiwgdGhpcy52aWJyYXRpb25BbXBsICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBBID0gdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJBbXBsXCIpICogTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIudGltZSlcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wMCA9IHRlbXBBICogdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhICogXHJcbiAgICAgICAgICAgICAgICBNYXRoLmNvcyh0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgKiB0aGlzLnNlbGZTcGluQ29udHJvbGxlci50aW1lICsgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJwaGFzZVwiKSlcclxuICAgICAgICAgICAgICAgIGxldCBkZWx0YSA9IHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAqIHRoaXMudmlicmF0aW9uQW1wbCAqIFdlYXBvblRvb2wuR2F1c3NSYW5kb20oKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1BoYXNlID0gTWF0aC5hdGFuKHRoaXMubV9nYW1tYSAqIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAvIChkZWx0YSArdGVtcDApKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0FtcGwgPSAoZGVsdGEgKyB0ZW1wMCkgLyB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgLyBNYXRoLmNvcyhuZXdQaGFzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwicGhhc2VcIiwgbmV3UGhhc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcIkFtcGxcIiwgbmV3QW1wbClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvKipcdThERjNcdTUyQThGT1ZcdTUyQThcdTc1M0IgKi9cclxuICAgICAgICB0aGlzLmp1bXBGT1ZDb250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBzdGRTcGVlZCA9IHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJqdW1wRk9WXCIpIC8gdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RkU3BlZWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMiAqIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZSArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJqdW1wRk9WXCIpIC0gdGhpcy5tX2RlbHRhRk9WKSAvIHN0ZFNwZWVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGlmICh0MiAtdDEgPiAyICogdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2RlbHRhRk9WICs9IGR0ICogdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIikgLyB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2RlbHRhRk9WID0gKHQyIC10MSkvKDIgKiB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWUpICogdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2RlbHRhRk9WID0gMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImp1bXBGT1ZcIiwgdGhpcy5HZXRKdW1wRk9WKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLyoqXHU2N0FBXHU1M0UzXHU4REYzXHU1MkE4XHU2MDNCXHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGxldCBvbWVnYSA9IDAuNSAqIE1hdGguUEkgLyB0MlxyXG4gICAgICAgICAgICAgICAgbGV0IHBvd2VyID0gb21lZ2EgKiBNYXRoLmNvcyhvbWVnYSAqICh0MSAtIDAuNSAqIGR0KSkgKiBkdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVRoZXRhID0gdGhpcy5kZWx0YVRoZXRhICsgcG93ZXIgKiB0aGlzLm1fanVtcFRvdGFsLnlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFQaHkgPSB0aGlzLmRlbHRhUGh5ICsgcG93ZXIgKiB0aGlzLm1fanVtcFRvdGFsLnhcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiICwgdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInRvdGFsXCIpLnN1YnRyYWN0KHRoaXMubV9qdW1wVG90YWwubXVsdGlwbHkocG93ZXIpKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVRoZXRhICs9IHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJ0b3RhbFwiKS55XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhUGh5ICs9IHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJ0b3RhbFwiKS54XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwidG90YWxcIiwgbmV3IFZlY3RvcjIoKSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFpbUVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5hc3Npc3RBaW1Db250cm9sbGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkdVSS5GaXJlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZWNvdmVyQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qdW1wQ29udHJvbGxlci5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCB0aGlzLm1fanVtcFRvdGFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8qKlx1NjdBQVx1NTNFM1x1NTZERVx1NTkwRFx1NjAzQlx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9iYWNrVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgQW1wbCA9IHRoaXMubV9iYWNrVG90YWwgKiB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAvICgxIC0gTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogdDIpKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gQW1wbCAqIE1hdGguZXhwKC10aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAqICh0MSAtIDAuNSAqIGR0KSkgKiBkdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVRoZXRhID0gdGhpcy5kZWx0YVRoZXRhIC0gZGVsdGFcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCB0aGlzLnJlY292ZXJDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwidG90YWxcIikgKyBkZWx0YSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8qKlx1OEY4NVx1Nzc4NFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoX3QxOm51bWJlcixfdDI6bnVtYmVyLF9kdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWltRW5lbXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHRoaXMuYWltRW5lbXkpXHJcbiAgICAgICAgICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NURGMlx1N0VDRlx1NTcyOFx1Nzc4NFx1Nzc0MFx1NEVCQVx1NEU4Nlx1NTIxOVx1NTA1Q1x1NkI2MlxyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS5ub3JtYWxpemVkXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRDYW1lcmFQb3MoKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IEdhbWVwbGF5LmxpbmVUcmFjZShwb3MuYWRkKGRpci5tdWx0aXBseSgwLjUpKSwgcG9zLmFkZChkaXIubXVsdGlwbHkodGhpcy5ndW4uX2NvbmZpZ0RhdGEuZGlzdGFuY2UpKSlcclxuICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKCh2ICxrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuZ2FtZU9iamVjdCA9PSB0aGlzLmFpbUVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzQ2hhbmdlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NjJDOVx1OEZDN1x1NTkzNFx1NEU4Nlx1NTIxOVx1NTA1Q1x1NkI2MlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5Jc1JpZ2h0KHRhcmdldFBvcykhPSB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc0NoYW5nZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiaXNDaGFuZ2VcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc0NoYW5nZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgKz0gX2R0ICogdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwib21lZ2FUaGV0YVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVBoeSArPSBfZHQgKiB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJvbWVnYVBoeVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHRoaXMuYWltRW5lbXkpXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSB0YXJnZXRQb3Muc3VidHJhY3QodGhpcy5HZXRDYW1lcmFQb3MoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzUmlnaHRcIiwgdGhpcy5Jc1JpZ2h0KHRhcmdldFBvcykpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJpc0NoYW5nZVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGxldCB0aGV0YVRvdGFsID0gTWF0aC5hdGFuKHJlbGF0aXZlUG9zLnkgLyBuZXcgVmVjdG9yMihyZWxhdGl2ZVBvcy54LCByZWxhdGl2ZVBvcy56KS5tYWduaXR1ZGUpLVxyXG4gICAgICAgICAgICAgICAgKDkwIC0gVmVjdG9yLmFuZ2xlKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSkgLyAxODAgKiBNYXRoLlBJXHJcbiAgICAgICAgICAgICAgICBsZXQgcGh5VG90YWwgPSBWZWN0b3IyLmFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKHJlbGF0aXZlUG9zLngsIHJlbGF0aXZlUG9zLnopLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS54LCB0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCkueilcclxuICAgICAgICAgICAgICAgICkgKlxyXG4gICAgICAgICAgICAgICAgTWF0aC5QSSAvIDE4MCAqXHJcbiAgICAgICAgICAgICAgICAodGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwiaXNSaWdodFwiKSA/IC0xIDogMSlcclxuICAgICAgICAgICAgICAgIGxldCByYXRpbyA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLmFzc2lzdEFpbVJhdGlvIC8gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltVGltZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwib21lZ2FUaGV0YVwiLCB0aGV0YVRvdGFsICogcmF0aW8pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJvbWVnYVBoeVwiLCBwaHlUb3RhbCAqIHJhdGlvKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vXHU1RjAwXHU5NTVDXHU2MDNCXHU1MkE4XHU3NTNCXHJcbiAgICAgICAgdGhpcy5haW1Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdldEFpbVRpbWUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9yID0gdDEgLyB0MlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9ICgxIC0gcG9yKSAqIHRoaXMubV9vcmlnaW5ab29tICsgcG9yICogdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwic2lnaHRab29tXCIpXHJcbiAgICAgICAgICAgICAgICBwb3IgPSBNYXRoLnNxcnQoMSAtICggMSAtIHBvcikgKiAoIDEgLSBwb3IpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRPZmZzZXQgPSB0aGlzLm1fb3JpZ2luT2Zmc2V0Lm11bHRpcGx5KDEgLSBwb3IpLmFkZCh0aGlzLm1fYWltT2Zmc2V0Lm11bHRpcGx5KHBvcikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gKDEtcG9yKSAqIHRoaXMubV9vcmlnaW5EaXN0YW5jZSArIHBvciAqIHRoaXMubV9haW1EaXN0YW5jZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwic2lnaHRab29tXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9haW1PZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fYWltRGlzdGFuY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuQWltaW5nSXNPdmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRlYWltQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmRlYWltQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9pc1pvb21JbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vXHU2NzJDXHU1NzMwXHU4QkJFXHU3RjZFXHU4OUQyXHU4MjcyXHU0RTBEXHU1M0VGXHU4OUMxXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwic2lnaHRab29tXCIsIHRoaXMuR2V0U2lnaHRGT1YoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkgICAgICAgXHJcbiAgICAgICAgLy9cdTUxNzNcdTk1NUNcdTYwM0JcdTY1QjlcdTZDRDVcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuc3RvcEFpbVRpbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsZHQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvciA9IHQxIC8gdDJcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZFpvb20gPSAoMS1wb3IpKnRoaXMuZGVhaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicHJlWm9vbVwiKStwb3IqdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX2FpbU9mZnNldC5tdWx0aXBseSgxIC0gcG9yKS5hZGQodGhpcy5tX29yaWdpbk9mZnNldC5tdWx0aXBseShwb3IpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9ICgxLXBvcikqdGhpcy5tX2FpbURpc3RhbmNlK3Bvcip0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9vcmlnaW5PZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAgICAgICAgIC8vdG9kbyBcdTY3MkNcdTU3MzBcdThCQkVcdTdGNkVcdTg5RDJcdTgyNzJcdTUzRUZcdTg5QzFcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFByb3BlcnRpZXMoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFpbUNvbnRyb2xsZXIuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9pc1pvb21JbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInByZVpvb21cIiwgdGhpcy5tX3N1cHBvc2VkWm9vbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5FbmRBbGwoKVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKGR0Om51bWJlcikge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzVXBkYXRpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZXRQcm9wZXJ0aWVzKClcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgdGhpcy5tX2FpbVRpbWVSYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5haW1UaW1lUmF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm1fanVtcEZvdlJhdGVUYWJsZS5zZXQoaywgdi5jb25maWdEYXRhLmp1bXBGb3ZSYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5qdW1wRk9WQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLnJlY292ZXJDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyLCBkdClcclxuXHJcbiAgICAgICAgdGhpcy5SZWZyZXNoU2NhbGVzKClcclxuICAgICAgICB0aGlzLlJlZnJlc2hTZXR0aW5ncygpXHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSAwXHJcbiAgICB9XHJcbiAgICBPbkVxdWlwV2VhcG9uKF9ndW5Db250cm9sbGVyIDogV2VhcG9uQmFzZUNscywgaW5mbykge1xyXG4gICAgICAgIHRoaXMuZ3VuID0gX2d1bkNvbnRyb2xsZXJcclxuICAgICAgICB0aGlzLm1fY2FtZXJhID0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5jYW1lcmFTeXN0ZW1cclxuICAgICAgICB0aGlzLmxhc3Rab29tID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFGT1ZcclxuICAgICAgICBsZXQgdCA9IG5ldyBUcmFuc2Zvcm0oKVxyXG4gICAgICAgIHQucm90YXRpb24gPSB0aGlzLm1fY2FtZXJhLmNhbWVyYVN5c3RlbVJlbGF0aXZlVHJhbnNmb3JtLnJvdGF0aW9uXHJcbiAgICAgICAgdC5zY2FsZSA9IHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0uc2NhbGVcclxuICAgICAgICB0LmxvY2F0aW9uID0gbmV3IFZlY3RvcigwLCAwLCBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhcHN1bGVIYWxmSGVpZ2h0ICogMikuYWRkKHRoaXMubV9jdXJyZW50T2Zmc2V0KVxyXG4gICAgICAgIHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0gPSB0XHJcbiAgICAgICAgdGhpcy5tX3NpZ2h0Wm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLm1lY2hpbmljYWxBaW1GT1ZcclxuICAgICAgICB0aGlzLm1fb3JpZ2luWm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLndhaXN0QWltRk9WXHJcbiAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5maWVsZE9mVmlldyA9IHRoaXMubV9zaWdodFpvb21cclxuICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSB0cnVlXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5ndW4gPSB0aGlzLmd1blxyXG4gICAgfVxyXG4gICAgSW5wdXRSZWNvaWwoX3JlY29pbCA6IFdlYXBvblJlY29pbENscyl7XHJcbiAgICAgICAgdGhpcy5tX2JhY2tUaW1lID0gdGhpcy5HZXRCYWNrVGltZSgpXHJcbiAgICAgICAgbGV0IHZlcnQgPSBfcmVjb2lsLkdldFZlcnRpY2FsKCkgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgdGhpcy5tX2JhY2tUb3RhbCA9IF9yZWNvaWwuX2NvbmZpZ0RhdGEuYmFja1RvdGFsICogdmVydFxyXG4gICAgICAgIHRoaXMudmlicmF0aW9uQW1wbCA9IF9yZWNvaWwuR2V0U2VsZlNwaW5SYW5nZSgpICogTWF0aC5QSSAvIDE4MFxyXG4gICAgICAgIHRoaXMubV9qdW1wVG90YWwgPSBuZXcgVmVjdG9yMihfcmVjb2lsLkdldEhvcml6b250YWwoKSAqIE1hdGguUEkgLyAxODAsIHZlcnQpXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLnNlbGZTcGluQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5qdW1wQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLnJlY292ZXJDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5yZWNvdmVyQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5qdW1wRk9WQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIENyb3VjaCgpe1xyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5TdG9wRnVuY3Rpb24odGhpcy5hc3Npc3RBaW1Db250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgTWVjaGFuaWNhbEFpbVN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5BaW1pbmdJc092ZXIgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIEdldEFzc2lzdEFpbURpcygpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lzWm9vbUluID8gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltRGlzMSA6IHRoaXMuZ3VuLl9jb25maWdEYXRhLmFzc2lzdEFpbURpczBcclxuICAgIH1cclxuICAgIE1lY2hhbmljYWxBaW1TdG9wKCl7XHJcbiAgICAgICAgdGhpcy5kZWFpbUNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmRlYWltQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIEdldEFpbVRpbWUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWltVGltZSArIHRoaXMubV9haW1UaW1lUmF0ZVNjYWxlXHJcbiAgICB9XHJcbiAgICBHZXRCYWNrVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5ndW4uX3JlY29pbC5HZXRTaGFrZVRpbWUoKVxyXG4gICAgfVxyXG4gICAgT25VbkVxdWlwV2VhcG9uKF91c2VTdGF0ZUJlZm9yZSA6IGJvb2xlYW4pe1xyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZmllbGRPZlZpZXcgPSB0aGlzLmxhc3Rab29tXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5ndW4gPSBudWxsXHJcbiAgICAgICAgdGhpcy5FbmRBbGwoKVxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBHZXRFbmVtaWVzKCk6QXJyYXk8Q2hhcmFjdGVyPntcclxuICAgICAgICBsZXQgcmVzID0gbmV3IEFycmF5PENoYXJhY3Rlcj4oKVxyXG4gICAgICAgIEdhbWVwbGF5LmdldEFsbFBsYXllcnMoKS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIElzVmlzaWJsZShfZW5lbXk6Q2hhcmFjdGVyKTpib29sZWFue1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLkdldENhbWVyYVBvcygpXHJcbiAgICAgICAgbGV0IHJlcyA9IHRydWVcclxuICAgICAgICBsZXQgcmF5Q2FzdEhlYWQgPSBHYW1lcGxheS5saW5lVHJhY2UocG9zLCBfZW5lbXkuZ2V0V29ybGRMb2NhdGlvbigpLmFkZChWZWN0b3IudXAubXVsdGlwbHkoX2VuZW15LmNhcHN1bGVIYWxmSGVpZ2h0KSkpXHJcbiAgICAgICAgcmF5Q2FzdEhlYWQuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgaWYoISh2LmdhbWVPYmplY3QgaW5zdGFuY2VvZiBDaGFyYWN0ZXIpIHx8ICh2LmdhbWVPYmplY3QgIT0gX2VuZW15ICYmICh2LmdhbWVPYmplY3QpICE9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpKXtcclxuICAgICAgICAgICAgICAgIHJlcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgRW5kQWxsKCkge1xyXG4gICAgICAgIGlmKHRoaXMubV9pc1pvb21Jbil7XHJcbiAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuc2VsZlNwaW5Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLmp1bXBGT1ZDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLnJlY292ZXJDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuXHJcbiAgICB9XHJcbiAgICBSZWZyZXNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBSZWZyZXNoU2NhbGVzKCkge1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlVGFibGUuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspPT57XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgU2V0UHJvcGVydGllcygpIHtcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmRlbHRhVGhldGEgKz0gdGhpcy5kZWx0YVRoZXRhXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5kZWx0YVBoeSArPSB0aGlzLmRlbHRhUGh5XHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5nYW1tYSA9IHRoaXMubV9nYW1tYVxyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZmllbGRPZlZpZXcgPSB0aGlzLm1fc3VwcG9zZWRab29tICsgdGhpcy5tX2RlbHRhRk9WXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2VcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLm9mZnNldCA9IHRoaXMubV9jdXJyZW50T2Zmc2V0XHJcbiAgICB9XHJcbiAgICBHZXRTaWdodEZPVigpOiBudW1iZXIge1xyXG4gICAgICAgIC8vXHU4MkU1XHU5MTREXHU0RUY2XHU0RTJEXHU2NzA5XHU0RTAwXHU0RTJBXHU5MTREXHU0RUY2XHU4QkJFXHU3RjZFXHU0RTg2XHU1OTI3XHU0RThFXHU5NkY2XHU3Njg0XHU1RjAwXHU5NTVDRk9WXHU1MjE5XHU3NkY0XHU2M0E1XHU4RkQ0XHU1NkRFXHU2QjY0XHU2NTcwXHU1MDNDLFx1NTQyNlx1NTIxOVx1OEZENFx1NTZERVx1NjdBQVx1NjhCMFx1ODFFQVx1OEVBQlx1NzY4NEZPVlxyXG4gICAgICAgIGxldCBmb3YgPSAwXHJcbiAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgaWYgKHYuY29uZmlnRGF0YS5haW1Gb3ZSYXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm92ID0gdi5jb25maWdEYXRhLmFpbUZvdlJhdGVcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZm92ICE9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEubWVjaGluaWNhbEFpbUZPVlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIElzUmlnaHQodGFyZ2V0UG9zOiBWZWN0b3IpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IuZG90KFZlY3Rvci5jcm9zcyh0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCksIFZlY3Rvci51cCksIHRhcmdldFBvcy5zdWJ0cmFjdCh0aGlzLkdldENhbWVyYVBvcygpKSkgPiAwXHJcbiAgICB9XHJcbiAgICBJc1VwKHRhcmdldFBvczogVmVjdG9yKTpib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSB0YXJnZXRQb3Muc3VidHJhY3QodGhpcy5HZXRDYW1lcmFQb3MoKSlcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuKHJlbGF0aXZlUG9zLnkgLyBuZXcgVmVjdG9yMihyZWxhdGl2ZVBvcy54LCByZWxhdGl2ZVBvcy56KS5tYWduaXR1ZGUpID4gKDkwIC0gVmVjdG9yLmFuZ2xlKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSAqIE1hdGguUEkgLyAxODApXHJcbiAgICB9XHJcbiAgICBEcmFnU3RhcnQoKXtcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gVUkuZ2V0TW91c2VQb3NpdGlvbk9uVmlld3BvcnQoKVxyXG4gICAgfVxyXG4gICAgR2V0Q2FtZXJhUG9zKCk6VmVjdG9yIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybS5sb2NhdGlvblxyXG4gICAgICAgIHJldHVybiBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKS5hZGQoV2VhcG9uVG9vbC5Sb3RhdGVWZWN0b3Iob2Zmc2V0LCBWZWN0b3IudXAsIEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuZ2V0V29ybGRSb3RhdGlvbigpLnopKVxyXG4gICAgfVxyXG4gICAgR2V0SnVtcEZPVigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ0RhdGEuanVtcEZPViAqIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlICogXHJcbiAgICAgICAgR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5jYW1lcmFTeXN0ZW0uY2FtZXJhRk9WIC8gdGhpcy5tX29yaWdpblpvb21cclxuICAgIH1cclxuICAgIEdldEFpbVBvcyhlbmVteTpDaGFyYWN0ZXIpOiBWZWN0b3Ige1xyXG4gICAgICAgIGxldCBwb3MxOlZlY3RvclxyXG4gICAgICAgIGxldCBwb3MyIDpWZWN0b3JcclxuICAgICAgICBwb3MxID0gZW5lbXkuZ2V0QXBwZWFyYW5jZTxIdW1hbm9pZFYyPigpLmdldFNsb3RXb3JsZFBvc2l0aW9uKFNsb3RUeXBlLkhlYWQpXHJcbiAgICAgICAgcG9zMiA9IGVuZW15LmdldEFwcGVhcmFuY2U8SHVtYW5vaWRWMj4oKS5nZXRTbG90V29ybGRQb3NpdGlvbihTbG90VHlwZS5CdXR0b2NrcylcclxuICAgICAgICByZXR1cm4gcG9zMS5tdWx0aXBseSgyKS5hZGQocG9zMikuZGl2aWRlKDMpXHJcbiAgICB9XHJcbiAgICBHZXRUYXJnZXQoKTpbVmVjdG9yLCBib29sZWFuXXtcclxuICAgICAgICBpZih0aGlzLnRhcmdldENhbGxUaW1lICYmIFRpbWVVdGlsLmVsYXBzZWRUaW1lKCkgLSB0aGlzLnRhcmdldENhbGxUaW1lIDwgMC4wMSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldFJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGlyID0gdGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLm5vcm1hbGl6ZWRcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRDYW1lcmFQb3MoKVxyXG4gICAgICAgIGxldCByYXljYXN0QWxsID0gR2FtZXBsYXkubGluZVRyYWNlKHBvcy5hZGQoZGlyLm11bHRpcGx5KDAuNSkpLCBwb3MuYWRkKGRpci5tdWx0aXBseSh0aGlzLmd1bi5fY29uZmlnRGF0YS5kaXN0YW5jZSkpKVxyXG4gICAgICAgIHRoaXMuYWltRW5lbXkgPSBudWxsXHJcbiAgICAgICAgaWYodGhpcy5lbmFibGVBc3Npc3RBaW0pe1xyXG4gICAgICAgICAgICBsZXQgbWluRGlzID0gdGhpcy5HZXRBc3Npc3RBaW1EaXMoKVxyXG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlOkNoYXJhY3RlclxyXG4gICAgICAgICAgICB0aGlzLkdldEVuZW1pZXMoKS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyN0VcdTUyMzBcdTY3MDBcdThGRDFcdTc2ODRcdTRFQkFcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLkdldEFpbVBvcyh2KVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldERpcyA9IHRhcmdldFBvcy5zdWJ0cmFjdChwb3MpLm1hZ25pdHVkZVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gVmVjdG9yLmFuZ2xlKGRpciwgdGFyZ2V0UG9zLnN1YnRyYWN0KHBvcykpXHJcbiAgICAgICAgICAgICAgICBsZXQgYWltRGlzID0gdGFyZ2V0RGlzICogTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgICAgICAgICAgICAgaWYoYW5nbGUgPCAzMCAmJiBhaW1EaXMgPD0gbWluRGlzICYmIHRoaXMuSXNWaXNpYmxlKHYpKXtcclxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSB2XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGlzID0gYWltRGlzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWltRW5lbXkgPSBjYW5kaWRhdGVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbmFsUG9pbnRcclxuICAgICAgICBsZXQgaVxyXG4gICAgICAgIHJheWNhc3RBbGwuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgaWYoISh2IGluc3RhbmNlb2YgQ2hhcmFjdGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmaW5hbFBvaW50ID0gdi5pbXBhY3RQb2ludFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGZpbmFsUG9pbnQpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJldHVybiA9IFtmaW5hbFBvaW50LCB0cnVlXVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJldHVybiA9IFtkaXIsIGZhbHNlXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldENhbGxUaW1lID0gVGltZVV0aWwuZWxhcHNlZFRpbWUoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFJldHVyblxyXG4gICAgfVxyXG4gICAgR2V0U2Vuc2l0aXZpdHkoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9jYW1lcmEuY2FtZXJhRk9WIC8gNjAgKiB0aGlzLm1fc2Vuc2l0aXZpdHlcclxuICAgIH1cclxuICAgIERyYWdIb2xkKCl7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBVSS5nZXRNb3VzZVBvc2l0aW9uT25WaWV3cG9ydCgpXHJcbiAgICAgICAgaWYoIXRoaXMubV9sYXN0TW91c2VQb3Mpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSArPSAodGVtcC54IC0gdGhpcy5tX2xhc3RNb3VzZVBvcy54KSAqIHRoaXMuc2NyZWVuU2l6ZS54ICogdGhpcy5HZXRTZW5zaXRpdml0eSgpXHJcbiAgICAgICAgdGhpcy5kZWx0YVRoZXRhICs9ICh0ZW1wLnkgLSB0aGlzLm1fbGFzdE1vdXNlUG9zLnkpICogdGhpcy5zY3JlZW5TaXplLnkgKiB0aGlzLkdldFNlbnNpdGl2aXR5KClcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gdGVtcFxyXG4gICAgfVxyXG4gICAgRHJhZ0VuZCgpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5tX2xhc3RNb3VzZVBvcyA9IG51bGxcclxuICAgIH1cclxuXHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvbkdVSUNsc3tcclxuXHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQW1tb0Jhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BbW1vQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiO1xyXG4vKipcdTY3QUFcdTY4QjBcdTZBMjFcdTU3NTdcdUZGMUFcdTVGMzlcdTU5MzlcdTU3RkFcdTdDN0IgKi9cclxuZXhwb3J0IGNsYXNzIFdlYXBvbk1hZ2F6aW5lQ2xze1xyXG4gICAgcHJpdmF0ZSB3ZWFwb24gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBwcml2YXRlIGlkIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGxlZnRBbW1vIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGFtbW9JbnZlbnRvcnkgOiBXZWFwb25BbW1vQmFzZUNsc1xyXG4gICAgcHJpdmF0ZSBsb2FkUGVyY2VudGFnZSA6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpc0Z1bGx5TG9hZGVkIDogYm9vbGVhblxyXG4gICAgcHVibGljIGlzRW1wdHlMb2FkZWQgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY2FuTG9hZGVkIDogYm9vbGVhblxyXG4gICAgcHJpdmF0ZSBsb2FkVGltZVJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPjtcclxuICAgIHByaXZhdGUgbG9hZFRpbWVSYXRlU2NhbGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbWF4QW1tb1JhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPjtcclxuICAgIHByaXZhdGUgbWF4QW1tb1JhdGVTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwcmVNYXhBbW1vIDogbnVtYmVyXHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnRGF0YTogR2FtZUNvbnN0LldlYXBvbk1hZ2F6aW5lQ29uZmlnRGF0YVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdlYXBvbiA6IFdlYXBvbkJhc2VDbHMpe1xyXG4gICAgICAgIFdlYXBvblRvb2wuSW5pdFdlYXBvbk1hZ2F6aW5lQ29uZmlnKHRoaXMpXHJcbiAgICAgICAgLy90aGlzLmxlZnRBbW1vID0gX2d1bi5ndW4uQW1tb0xlZnQuVmFsdWVcclxuICAgICAgICBsZXQgbW92ZUFtbW8gPSB0aGlzLmxlZnRBbW1vIC0gdGhpcy5fY29uZmlnRGF0YS5tYXhOdW1cclxuICAgICAgICBpZiAobW92ZUFtbW8gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gPSB0aGlzLl9jb25maWdEYXRhLm1heE51bVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vdmVBbW1vID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLlVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBVcGRhdGVGdWxseUxvYWRlZCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaXNGdWxseUxvYWRlZCA9IHRoaXMubGVmdEFtbW8gPj0gdGhpcy5HZXRNYXhBbW1vKClcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0Z1bGx5TG9hZGVkXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFVwZGF0ZUVtcHR5TG9hZGVkKCk6Ym9vbGVhbntcclxuICAgICAgICB0aGlzLmlzRW1wdHlMb2FkZWQgPSB0aGlzLmxlZnRBbW1vIDw9IDAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eUxvYWRlZFxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZUNhbkxvYWQoKTpib29sZWFue1xyXG4gICAgICAgIHRoaXMuY2FuTG9hZGVkID0gIXRoaXMuaXNGdWxseUxvYWRlZCAmJiB0aGlzLmFtbW9JbnZlbnRvcnkgJiYgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ID4gMFxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkxvYWRlZFxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZUxvYWRQZXJjZW50YWdlKCk6bnVtYmVye1xyXG4gICAgICAgIHRoaXMubG9hZFBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKHRoaXMubGVmdEFtbW8gLyB0aGlzLkdldE1heEFtbW8oKSAqIDEwMClcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkUGVyY2VudGFnZVxyXG4gICAgfVxyXG4gICAgQ29uc3VtZSgpOkZ1bmN0aW9ue1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRBbW1vID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyAtPSAxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBMb2FkT25lQnVsbGV0KCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLmNhbkxvYWRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gKz0gMVxyXG4gICAgICAgICAgICAvL3NlbGYubV9hbW1vSW52ZW50b3J5OlBsYXllckNvbnN1bWVBbW1vKDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIExvYWRNYWdhemluZSgpOnZvaWR7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBhZGRpdGlvbiA9IHRoaXMuR2V0TWF4QW1tbygpIC0gdGhpcy5sZWZ0QW1tb1xyXG4gICAgICAgICAgICAvL2FkZGl0aW9uID0gc2VsZi5tX2FtbW9JbnZlbnRvcnk6UGxheWVyQ29uc3VtZUFtbW8oYWRkaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gKz0gYWRkaXRpb25cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVGdWxseUxvYWRlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU1Mzc4XHU4RjdEL1x1NjZGNFx1NjM2Mlx1NTQwRSxcdTk3MDBcdTg5ODFcdTVDMDZcdTY3QUFcdTY4QjBcdTc2ODRcdTVCNTBcdTVGMzlcdTY2RjRcdTY1QjBcdTU3MjhcdTkxNERcdTRFRjZcdTc2ODRcdTgyODJcdTcwQjlcdTRFMEIgKi9cclxuICAgIFJlY29yZGluZ0J1bGxldHNMZWZ0KF9pc0JhY2tUb0J1bGxldEludmVudG9yeTpib29sZWFuKXtcclxuICAgICAgICBpZihfaXNCYWNrVG9CdWxsZXRJbnZlbnRvcnkgJiYgdGhpcy5hbW1vSW52ZW50b3J5KXtcclxuICAgICAgICAgICAgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ICs9IHRoaXMubGVmdEFtbW9cclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5VcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5wcmVNYXhBbW1vID4gdGhpcy5HZXRNYXhBbW1vKCkpe1xyXG4gICAgICAgICAgICAvKipcdThGRDlcdTRFMDBcdTVFMjdcdTUzNzhcdTRFMEJcdTRFODZcdTYyNjlcdTVCQjlcdTVGMzlcdTU5MzksXHU5NzAwXHU4OTgxXHU1RjNBXHU4ODRDXHU1MUNGXHU1QzExXHU1RjUzXHU1MjREXHU3Njg0XHU1QjUwXHU1RjM5ICovXHJcbiAgICAgICAgICAgIGlmKHRoaXMuR2V0TWF4QW1tbygpIDwgdGhpcy5sZWZ0QW1tbyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGFBbW1vID0gdGhpcy5sZWZ0QW1tbyAtIHRoaXMuR2V0TWF4QW1tbygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRBbW1vIC09IGRlbHRhQW1tb1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ICs9IGRlbHRhQW1tb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJlTWF4QW1tbyA9IHRoaXMuR2V0TWF4QW1tbygpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVGdWxseUxvYWRlZCgpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVFbXB0eUxvYWRlZCgpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVDYW5Mb2FkKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUxvYWRQZXJjZW50YWdlKClcclxuICAgICAgICAvKipcdTVDMDZcdTVGNTNcdTUyNERcdTc2ODRcdTUyNjlcdTRGNTlcdTVCNTBcdTVGMzlcdTY2RjRcdTY1QjBcdTUyMzBcdTU3M0FcdTY2NkZcdTRFMkRcdTc2ODRcdTgyODJcdTcwQjlcdTRFMEEgKi9cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLndlYXBvbi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRpbWVSYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5tYWdhemluZUxvYWRUaW1lUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLnNldChrLCB2LmNvbmZpZ0RhdGEubWF4QW1tb1JhdGUuZ2V0KHRoaXMud2VhcG9uLmlkKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hTY2FsZXMoKVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBSZWZyZXNoU2NhbGVzKCk6dm9pZHtcclxuICAgICAgICBsZXQgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWVSYXRlVGFibGUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWVSYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1heEFtbW9SYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRMb2FkVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5sb2FkVGltZSAqIHRoaXMubG9hZFRpbWVSYXRlU2NhbGVcclxuICAgIH1cclxuICAgIHByaXZhdGUgR2V0TWF4QW1tbygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4QW1tb1JhdGVTY2FsZSArIHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtID4gMCA/IHRoaXMubWF4QW1tb1JhdGVTY2FsZSArIHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtIDogMVxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiXHJcbnR5cGUgUmF0ZVN0cnVjdCA9IHtcclxuICAgIE1vdmU6bnVtYmVyXHJcbiAgICBDcm91Y2g6bnVtYmVyXHJcbn1cclxuZXhwb3J0IGNsYXNzIFdlYXBvblJlY29pbENsc3tcclxuICAgIHByaXZhdGUgaWQgOiBudW1iZXJcclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsU2NhbGU6IG51bWJlciA9IDFcclxuICAgIHByaXZhdGUgX2hvcml6b250YWxTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfbWluRXJyb3JTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfbWF4RXJyb3JTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfcmVjb3ZlclJhdGVTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfc2VsZlNwaW5SYW5nZVJhdGVTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF91bnN0YWJpbGl0eTogbnVtYmVyID0gMFxyXG4gICAgX2N1cnJlbnRFcnJvcjogbnVtYmVyID0gMFxyXG5cclxuICAgIHByaXZhdGUgX2hvcml6b250YWxSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF92ZXJ0aWNhbFJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuICAgIHByaXZhdGUgX21pbkVycm9yUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfbWF4RXJyb3JSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF9yZWNvdmVyUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfc2VsZlNwaW5SYW5nZVJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuXHJcbiAgICBwcml2YXRlIF9sYXN0UG9zIDogVmVjdG9yXHJcbiAgICBfY29uZmlnRGF0YSA6IEdhbWVDb25zdC5XZWFwb25SZWNvaWxDb25maWdEYXRhXHJcblxyXG4gICAgZGlmRnVuY3Rpb24oX3Vuc3RhYmlsaXR5Om51bWJlcikge1xyXG4gICAgICAgIF91bnN0YWJpbGl0eSA9IF91bnN0YWJpbGl0eSB8fCB0aGlzLl91bnN0YWJpbGl0eVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VGdW5jdGlvbiA9PT0gR2FtZUNvbnN0LkRpZmZ1c2VGdW5jdGlvbkVudW0uTGluZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIExpbmVhciBmdW5jdGlvblxyXG4gICAgICAgICAgICByZXR1cm4gX3Vuc3RhYmlsaXR5XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VGdW5jdGlvbiA9PT0gR2FtZUNvbnN0LkRpZmZ1c2VGdW5jdGlvbkVudW0uU3FydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KF91bnN0YWJpbGl0eSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuZGlmZnVzZUZ1bmN0aW9uID09PSBHYW1lQ29uc3QuRGlmZnVzZUZ1bmN0aW9uRW51bS5TcXVhcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF91bnN0YWJpbGl0eSAqIF91bnN0YWJpbGl0eVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFVwZGF0ZShfZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIERlY3JlYXNlIHJlY29pbFxyXG4gICAgICAgIHRoaXMuX3Vuc3RhYmlsaXR5ID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIHRoaXMuX3Vuc3RhYmlsaXR5IC0gdGhpcy5fY29uZmlnRGF0YS5kaWZmdXNlUmVjb3ZlclJhdGUgKiBfZHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGluZmx1ZW5jZSBmYWN0b3JzXHJcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5jbGVhcigpXHJcblxyXG4gICAgICAgIC8vIENoZWNrIE1vdmVtZW50IGFuZCBqdW1waW5nXHJcbiAgICAgICAgY29uc3QgY3VyUG9zID0gdGhpcy5ndW4uY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3VyUG9zLnN1YnRyYWN0KHRoaXMuX2xhc3RQb3MpLm1hZ25pdHVkZSA+IDAuNSAqIF9kdCB8fFxyXG4gICAgICAgICAgICB0aGlzLmd1bi5jaGFyYWN0ZXIuaXNKdW1waW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLnNldCgnTW92ZScsIHRoaXMuX2NvbmZpZ0RhdGEuanVtcEVycm9yU2NhbGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLnNldCgnTW92ZScsIHRoaXMuX2NvbmZpZ0RhdGEuanVtcEVycm9yU2NhbGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuZGVsZXRlKCdNb3ZlJylcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuZGVsZXRlKCdNb3ZlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGFzdFBvcyA9IGN1clBvc1xyXG5cclxuICAgICAgICAvLyBDaGVjayBjcm91Y2hpbmdcclxuICAgICAgICBpZiAodGhpcy5ndW4uY2hhcmFjdGVyLmNyb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5zZXQoJ0Nyb3VjaCcsIHRoaXMuX2NvbmZpZ0RhdGEuY3JvdWNoRXJyb3JTY2FsZSlcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuc2V0KCdDcm91Y2gnLCB0aGlzLl9jb25maWdEYXRhLmNyb3VjaEVycm9yU2NhbGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuZGVsZXRlKCdDcm91Y2gnKVxyXG4gICAgICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5kZWxldGUoJ0Nyb3VjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5zZXQoaywgdi5ob3Jpem9udGFsSnVtcFJhbmdlUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuc2V0KGssIHYudmVydGljYWxKdW1wQW5nbGVSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5zZXQoaywgdi5taW5FcnJvclJhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLnNldChrLCB2Lm1heEVycm9yUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5zZXQoaywgdi5ndW5SZWNvdmVyUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5zZXQoaywgdi5zZWxmU3BpblJhbmdlUmF0ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBlcnJvclxyXG4gICAgICAgIHRoaXMuZ3VuLmVycm9yID0gdGhpcy5HZXREaWZmdXNlKF9kdClcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGluZmx1ZW5jZSBmYWN0b3IgbWFnbml0dWRlc1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNjYWxlcygpXHJcbiAgICB9XHJcbiAgICBHZXRWZXJ0aWNhbCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gKHRoaXMuX2NvbmZpZ0RhdGEudmVydGljYWxKdW1wQW5nbGUgKyB0aGlzLl9jb25maWdEYXRhLnZlcnRpY2FsSnVtcFJhbmdlICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpKSAqIHRoaXMuX3ZlcnRpY2FsU2NhbGVcclxuICAgIH1cclxuICAgIEdldEhvcml6b250YWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9yaXpvbnRhbFNjYWxlICogdGhpcy5fY29uZmlnRGF0YS5ob3Jpem9udGFsSnVtcFJhbmdlICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1pbkVycm9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEubWluRXJyb3IgKiB0aGlzLl9taW5FcnJvclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1heEVycm9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEubWF4RXJyb3IgKiB0aGlzLl9tYXhFcnJvclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFNoYWtlVGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLmd1blJlY29pbCAvICh0aGlzLl9jb25maWdEYXRhLmd1blJlY292ZXJSYXRlICogdGhpcy5fcmVjb3ZlclJhdGVTY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0U2VsZlNwaW5SYW5nZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLnNlbGZTcGluUmFuZ2UgKiB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEZpcmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdW5zdGFiaWxpdHkgPSBNYXRoLm1pbigxLjAsIHRoaXMuX3Vuc3RhYmlsaXR5ICsgdGhpcy5fY29uZmlnRGF0YS5ndW5SZWNvaWwpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldERpZmZ1c2UoX2R0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCB0b2JlID0gdGhpcy5HZXRNaW5FcnJvcigpICsgdGhpcy5kaWZGdW5jdGlvbihudWxsKSAqICh0aGlzLkdldE1heEVycm9yKCkgLSB0aGlzLkdldE1pbkVycm9yKCkpXHJcbiAgICAgICAgdGhpcy5fY3VycmVudEVycm9yICs9IF9kdCAqIDEwICogKHRvYmUgLSB0aGlzLl9jdXJyZW50RXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRFcnJvclxyXG4gICAgfVxyXG4gICAgR2V0U2hha2VJbnRlbnNpdHkoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEuc2hha2VJbnRlbnNpdHlcclxuICAgIH1cclxuXHJcbiAgICBSZWZyZXNoU2NhbGVzKCkge1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9taW5FcnJvclNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX3NlbGZTcGluUmFuZ2VSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvblNvdW5kQ2xze1xyXG5cclxufSIsICJcdUZFRkZcclxuLyoqXHJcbiAqIEFVVE8gR0VORVJBVEUgQlkgVUkgRURJVE9SLlxyXG4gKiBXQVJOSU5HOiBETyBOT1QgTU9ESUZZIFRISVMgRklMRSxNQVkgQ0FVU0UgQ09ERSBMT1NULlxyXG4gKiBBVVRIT1I6IFx1NjI2N1x1N0IxNFx1N0VDRlx1NUU3NFxyXG4gKiBVSTogVUkvRGVmYXVsdFVJLnVpXHJcbiAqIFRJTUU6IDIwMjMuMDguMDUtMDAuMjkuMjlcclxuKi9cclxuXHJcblxyXG5cclxuQFVJLlVJQ2FsbE9ubHkoJ1VJL0RlZmF1bHRVSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRVSV9HZW5lcmF0ZSBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdFxyXG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICIsICJcdUZFRkZcclxuLyoqXHJcbiAqIEFVVE8gR0VORVJBVEUgQlkgVUkgRURJVE9SLlxyXG4gKiBXQVJOSU5HOiBETyBOT1QgTU9ESUZZIFRISVMgRklMRSxNQVkgQ0FVU0UgQ09ERSBMT1NULlxyXG4gKiBBVVRIT1I6IFx1NjI2N1x1N0IxNFx1N0VDRlx1NUU3NFxyXG4gKiBVSTogVUkvTW9uc3RJbmZvVUkudWlcclxuICogVElNRTogMjAyMy4wOC4wNS0wMC4yOS4yOVxyXG4qL1xyXG5cclxuXHJcblxyXG5AVUkuVUlDYWxsT25seSgnVUkvTW9uc3RJbmZvVUkudWknKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25zdEluZm9VSV9HZW5lcmF0ZSBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdFxyXG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBTU8sSUFBTSxjQUFOLE1BQXdDO0FBQUEsRUFNN0IsYUFBc0IsQ0FBQztBQUFBLEVBQ3ZCLGFBQTRCLG9CQUFJLElBQWU7QUFBQSxFQUMvQyxTQUFzQyxvQkFBSSxJQUFJO0FBQUEsRUFJeEQsWUFBWSxXQUE0QjtBQUM5QyxRQUFJLGFBQW9CO0FBQ3hCLFNBQUssYUFBYSxJQUFJLE1BQU0sVUFBVSxTQUFTLFVBQVU7QUFFekQsYUFBUSxJQUFJLEdBQUcsSUFBSSxLQUFLLFdBQVcsUUFBUSxLQUFJO0FBQzlDLFdBQUssV0FBVyxLQUFLLENBQUM7QUFBQSxJQUN2QjtBQUNBLFFBQUksU0FBUyxVQUFVLEdBQUc7QUFDMUIsYUFBUSxJQUFJLEdBQUcsSUFBSSxRQUFRLEtBQUk7QUFDOUIsVUFBSSxPQUFjLFVBQVUsR0FBRztBQUMvQixVQUFJLE9BQXFCLFVBQVUsR0FB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
