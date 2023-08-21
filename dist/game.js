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

// JavaScripts/Client/ClientBase.ts
var ClientBase_exports = {};
__export(ClientBase_exports, {
  default: () => Client
});

// JavaScripts/GameConst/EventConst.ts
var EventConst_exports = {};
__export(EventConst_exports, {
  EventConst: () => EventConst2
});
var EventConst2;
((EventConst3) => {
  let ClientEvent;
  ((ClientEvent2) => {
    ClientEvent2["PlayerBeHitEvent"] = "PlayerBeHitEvent";
    ClientEvent2["PlayerNearWeaponEvent"] = "PlayerNearWeaponEvent";
    ClientEvent2["PlayerFarWeaponEvent"] = "PlayerFarWeaponEvent";
    ClientEvent2["PlayerNearWeaponAccessoryEvent"] = "PlayerNearWeaponAccessoryEvent";
    ClientEvent2["PlayerFarWeaponAccessoryEvent"] = "PlayerFarWeaponAccessoryEvent";
    ClientEvent2["PlayerNearAmmoEvent"] = "PlayerNearAmmoEvent";
    ClientEvent2["PlayerFarAmmoEvent"] = "PlayerFarAmmoEvent";
    ClientEvent2["PlayerDieEvent"] = "PlayerDieEvent";
    ClientEvent2["CreateAllUnitEvent"] = "CreateAllUnitEvent";
    ClientEvent2["SettingAssAimRefreshEvent"] = "SettingAssAimRefreshEvent";
    ClientEvent2["SyncDataEvent"] = "SyncDataEvent";
    ClientEvent2["OnEquipWeaponEvent"] = "OnEquipWeaponEvent";
    ClientEvent2["SettingReadyEvent"] = "SettingReadyEvent";
    ClientEvent2["WeaponObjCreatedEvent"] = "WeaponObjCreatedEvent";
    ClientEvent2["WeaponObjActiveChangeEvent"] = "WeaponObjActiveChangeEvent";
    ClientEvent2["PlayerAddSuccessedEvent"] = "PlayerAddSuccessedEvent";
  })(ClientEvent = EventConst3.ClientEvent || (EventConst3.ClientEvent = {}));
  let ServerEvent;
  ((ServerEvent2) => {
    ServerEvent2["WeaponHitPlayerEvent"] = "WeaponHitPlayerEvent";
    ServerEvent2["CreateAmmoEvent"] = "CreateAmmoEvent";
    ServerEvent2["DestroyAmmoEvent"] = "DestroyAmmoEvent";
    ServerEvent2["PlayerPickAmmoEvent"] = "PlayerPickAmmoEvent";
    ServerEvent2["PlayerEventCreateOverEvent"] = "PlayerEventCreateOverEvent";
    ServerEvent2["PlayerDataModifiEvent"] = "PlayerDataModifiEvent";
    ServerEvent2["SyncAndSaveEvent"] = "SyncAndSaveEvent";
    ServerEvent2["WeaponObjCreatedEvent"] = "WeaponObjCreatedEvent";
  })(ServerEvent = EventConst3.ServerEvent || (EventConst3.ServerEvent = {}));
})(EventConst2 || (EventConst2 = {}));

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
  static async Instance() {
    if (_PlayerGunMgr._instance == null) {
      let player = await Gameplay.asyncGetCurrentPlayer();
      _PlayerGunMgr._instance = new _PlayerGunMgr(player.character);
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
      let a = this.GetLocalAttr();
      if (a.hp <= 0) {
        return;
      }
      if (this.curGun) {
        this.curGun.MechanicalAimStart();
      }
    });
    InputUtil.onKeyDown(Keys.R, () => {
      let a = this.GetLocalAttr();
      if (a.hp <= 0) {
        return;
      }
      this.curGun = this.mainGun;
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
    let a = this.GetLocalAttr();
    if (a.hp <= 0) {
      return;
    }
  }
  ChangeShootMode() {
    let a = this.GetLocalAttr();
    if (a.hp <= 0) {
      return;
    }
  }
  DropWeapon() {
    let a = this.GetLocalAttr();
    if (a.hp <= 0) {
      return;
    }
  }
  GetLocalAttr() {
    return Client.mInstance.GetPlayerAttr(getCurrentPlayer().character.guid);
  }
  GetOtherAttr(guid) {
    return Client.mInstance.GetPlayerAttr(guid);
  }
};
var PlayerGunMgr = _PlayerGunMgr;
__publicField(PlayerGunMgr, "_instance");

// JavaScripts/Modules/Player/PlayerClient.ts
var PlayerClient_exports = {};
__export(PlayerClient_exports, {
  PlayerClient: () => PlayerClient
});
var PlayerClient = class extends ModuleC {
  onAwake() {
    console.log("PlayerClientonAwake");
  }
  onStart() {
    console.log("PlayerClientonStart");
  }
};

// JavaScripts/Modules/Player/PlayerData.ts
var PlayerData_exports = {};
__export(PlayerData_exports, {
  PlayerData: () => PlayerData
});
var PlayerData = class extends Subdata {
  hp = 100;
  onhpChange = new Action();
  changeGold(deltaNum) {
    this.syncToClient();
    this.hp += deltaNum;
    this.onhpChange.call(this.hp);
  }
};

// JavaScripts/Modules/Player/PlayerServer.ts
var PlayerServer_exports = {};
__export(PlayerServer_exports, {
  PlayerServer: () => PlayerServer
});
var PlayerServer = class extends ModuleS {
  onStart() {
    console.log("PlayerServer");
  }
};

// JavaScripts/Client/ClientBase.ts
var Client = class extends Core.Script {
  totalPlayerAttrs = /* @__PURE__ */ new Map();
  mPlayerGunMgr;
  constructor(data) {
    super(data);
    Events.addServerListener(EventConst2.ClientEvent.PlayerAddSuccessedEvent, this.OnPlayerSuccessAdded.bind(this));
    Client.mInstance = this;
  }
  async onStart() {
    this.registerModule();
    this.mPlayerGunMgr = await PlayerGunMgr.Instance();
  }
  onUpdate(dt) {
  }
  onDestroy() {
  }
  registerModule() {
    ModuleManager.getInstance().registerModule(PlayerServer, PlayerClient, PlayerData);
  }
  async OnPlayerSuccessAdded(c_guid, ins_guid) {
    console.log("OnPlayerSuccessAdded   ", c_guid, "  ", ins_guid);
    let s = await ScriptManager.asyncFindScript(ins_guid);
    console.log(s);
    this.totalPlayerAttrs.set(c_guid, s);
  }
  GetPlayerAttr(guid) {
    if (guid instanceof Gameplay.Player) {
      guid = guid.character.guid;
      return this.totalPlayerAttrs.get(guid);
    } else {
      return this.totalPlayerAttrs.get(guid);
    }
  }
};
__publicField(Client, "mInstance");
Client = __decorateClass([
  Core.Class
], Client);

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
var foreign9 = __toESM(require_GameConst());

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
    console.log("\u521B\u5EFA\u6210\u529F\u811A\u672C" + this.guid);
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

// JavaScripts/PlayerBehavior.ts
var PlayerBehavior_exports = {};
__export(PlayerBehavior_exports, {
  PlayerBehavior: () => PlayerBehavior
});

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

// JavaScripts/Server/ServerBase.ts
var ServerBase_exports = {};
__export(ServerBase_exports, {
  default: () => ServerBase
});
var ServerBase = class extends Core.Script {
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
    console.log("\u811A\u672C\u4E3A" + obj.guid);
    Events.dispatchToAllClient(EventConst2.ClientEvent.PlayerAddSuccessedEvent, player.character.guid, obj.guid);
  }
  OnPlayerLeft(player) {
    console.log("\u73A9\u5BB6\u79BB\u5F00" + player.character.guid);
    let obj = this.totalPlayerAttrs.get(player.character.guid);
    obj.destroy();
    this.totalPlayerAttrs.delete(player.character.guid);
  }
  GetPlayerAttr(guid) {
    if (guid instanceof Gameplay.Player) {
      guid = guid.character.guid;
      return this.totalPlayerAttrs.get(guid);
    } else {
      return this.totalPlayerAttrs.get(guid);
    }
  }
};
ServerBase = __decorateClass([
  Core.Class
], ServerBase);

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
var foreign32 = __toESM(require_build());
var MWModuleMap = {
  "JavaScripts/Client/ClientBase": ClientBase_exports,
  "JavaScripts/Config/ConfigBase": ConfigBase_exports,
  "JavaScripts/Config/GameConfig": GameConfig_exports,
  "JavaScripts/Config/Monsters": Monsters_exports,
  "JavaScripts/DefaultUI": DefaultUI_exports,
  "JavaScripts/Entity/Monster/MonsterBase": MonsterBase_exports,
  "JavaScripts/Factory/Fac_InteractObject": Fac_InteractObject_exports,
  "JavaScripts/GameConst/EventConst": EventConst_exports,
  "JavaScripts/GameConst/GameConst": foreign9,
  "JavaScripts/Interface/IInteraction": IInteraction_exports,
  "JavaScripts/Modules/Player/PlayerClient": PlayerClient_exports,
  "JavaScripts/Modules/Player/PlayerData": PlayerData_exports,
  "JavaScripts/Modules/Player/PlayerServer": PlayerServer_exports,
  "JavaScripts/PlayerAttr": PlayerAttr_exports,
  "JavaScripts/PlayerBehavior": PlayerBehavior_exports,
  "JavaScripts/PlayerGunMgr": PlayerGunMgr_exports,
  "JavaScripts/Server/ServerBase": ServerBase_exports,
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
  "build": foreign32
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdC50cyIsICJidWlsZC50cyIsICI8c3RkaW4+IiwgIkphdmFTY3JpcHRzL0NsaWVudC9DbGllbnRCYXNlLnRzIiwgIkphdmFTY3JpcHRzL0dhbWVDb25zdC9FdmVudENvbnN0LnRzIiwgIkphdmFTY3JpcHRzL1BsYXllckd1bk1nci50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJDbGllbnQudHMiLCAiSmF2YVNjcmlwdHMvTW9kdWxlcy9QbGF5ZXIvUGxheWVyRGF0YS50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXIudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL0dhbWVDb25maWcudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL01vbnN0ZXJzLnRzIiwgIkphdmFTY3JpcHRzL0RlZmF1bHRVSS50cyIsICJKYXZhU2NyaXB0cy9FbnRpdHkvTW9uc3Rlci9Nb25zdGVyQmFzZS50cyIsICJKYXZhU2NyaXB0cy9GYWN0b3J5L0ZhY19JbnRlcmFjdE9iamVjdC50cyIsICJKYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uLnRzIiwgIkphdmFTY3JpcHRzL1BsYXllckF0dHIudHMiLCAiSmF2YVNjcmlwdHMvUGxheWVyQmVoYXZpb3IudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXIudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblRvb2wudHMiLCAiSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwudHMiLCAiSmF2YVNjcmlwdHMvU2VydmVyL1NlcnZlckJhc2UudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscy50cyIsICJKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUudHMiLCAiSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImRlY2xhcmUgbmFtZXNwYWNlIEdhbWVDb25zdHtcclxuICAgIGV4cG9ydCBlbnVtIExvY2FsV2VhcG9uRXZlbnQge1xyXG4gICAgICAgIFBpY2tXZWFwb24gPSAnUGlja1dlYXBvbicsXHJcbiAgICAgICAgRHJhd1dlYXBvbiA9ICdEcmF3V2VhcG9uJyxcclxuICAgICAgICBXaXRoRHJhd1dlYXBvbiA9ICdXaXRoRHJhd1dlYXBvbicsXHJcbiAgICAgICAgTWFnYXppbmVMb2FkU3RhcnRlZCA9ICdNYWdhemluZUxvYWRTdGFydGVkJyxcclxuICAgICAgICBGdWxseUxvYWRlZCA9ICdGdWxseUxvYWRlZCcsXHJcbiAgICAgICAgQnVsbGV0TG9hZFN0YXJ0ZWQgPSAnQnVsbGV0TG9hZFN0YXJ0ZWQnLFxyXG4gICAgICAgIEJ1bGxldExvYWRlZCA9ICdCdWxsZXRMb2FkZWQnLFxyXG4gICAgICAgIFJlbG9hZEZpbmlzaGVkID0gJ1JlbG9hZEZpbmlzaGVkJyxcclxuICAgICAgICBQdW1wU3RhcnRlZCA9ICdQdW1wU3RhcnRlZCcsXHJcbiAgICAgICAgUHVtcGVkID0gJ1B1bXBlZCcsXHJcbiAgICAgICAgRmlyZWQgPSAnRmlyZWQnLFxyXG4gICAgICAgIEVtcHR5RmlyZSA9ICdFbXB0eUZpcmUnLFxyXG4gICAgICAgIEZpcmVTdGFydGVkID0gJ0ZpcmVTdGFydGVkJyxcclxuICAgICAgICBGaXJlU3RvcHBlZCA9ICdGaXJlU3RvcHBlZCcsXHJcbiAgICAgICAgU3VjY2Vzc2Z1bGx5SGl0ID0gJ1N1Y2Nlc3NmdWxseUhpdCcsXHJcbiAgICAgICAgU3VjY2Vzc2Z1bGx5SGl0VGFyZ2V0ID0gJ1N1Y2Nlc3NmdWxseUhpdFRhcmdldCcsXHJcbiAgICAgICAgQWltSW4gPSAnQWltSW4nLFxyXG4gICAgICAgIEFpbU91dCA9ICdBaW1PdXQnLFxyXG4gICAgfVxyXG4gICAgZW51bSBHdW5Nb2RlRW51bSB7XHJcbiAgICAgICAgU25pcGVyUmlmbGUgPSAxLCBcclxuICAgICAgICBBc3NhdWx0UmlmbGUgPSAyLCBcclxuICAgICAgICBTdWJNYWNoaW5lR3VuID0gMyxcclxuICAgICAgICBTaG90R3VuID0gNCwgXHJcbiAgICAgICAgUGlzdG9sID0gNSwgXHJcbiAgICAgICAgTWVsZWVXZWFwb24gPSA2LCBcclxuICAgICAgICBUaHJvd25XZWFwb24gPSA3LCBcclxuICAgICAgICBSb2NrZXRMYXVuY2hlciA9IDgsIFxyXG4gICAgICAgIE90aGVyID0gOSwgXHJcbiAgICAgICAgVHJhaWxpbmdHdW4gPSAxMFxyXG4gICAgfVxyXG4gICAgZW51bSBIaXRQYXJ0RW51bXtcclxuICAgICAgICBOb25lID0gMCxcclxuICAgICAgICBIZWFkID0gMSxcclxuICAgICAgICBCb2R5ID0gMixcclxuICAgICAgICBMaW1iID0gMyxcclxuICAgICAgICBGb3J0ID0gNFxyXG4gICAgfVxyXG4gICAgZW51bSBGaXJlTW9kZUVudW17XHJcbiAgICAgICAgQXV0byA9IDEsIFxyXG4gICAgICAgIFJhcGlkbHlfMSA9IDIsIFxyXG4gICAgICAgIFJhcGlkbHlfMiA9IDMsIFxyXG4gICAgICAgIFNpbmdsZSA9IDQgXHJcbiAgICB9XHJcbiAgICBlbnVtIERpZmZ1c2VGdW5jdGlvbkVudW17XHJcbiAgICAgICAgTGluZWFyID0gMSxcclxuICAgICAgICBTcXJ0ID0gMixcclxuICAgICAgICBTcXVhcmUgPSAzXHJcbiAgICB9XHJcbiAgICBlbnVtIENhbkJlRXF1aXBQb3NpdGlvbkVudW17XHJcbiAgICAgICAgTWFpbk9yRGVwdXR5ID0gMSxcclxuICAgICAgICBNaW5pID0gMixcclxuICAgICAgICBQcm9wID0gM1xyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5MTREXHU0RUY2XHU3QzdCXHU1NzhCICovXHJcbiAgICBlbnVtIFdlYXBvbkFjY2Vzc29yeVR5cGVFbnVte1xyXG4gICAgICAgIE11enpsZSA9IDEsXHJcbiAgICAgICAgR3JpcCA9IDIsXHJcbiAgICAgICAgTWFnYXppbmUgPSAzLFxyXG4gICAgICAgIEJ1dHQgPSA0LFxyXG4gICAgICAgIFNpZ2h0ID0gNVxyXG4gICAgfVxyXG4gICAgZW51bSBVbml0VHlwZUVudW17XHJcbiAgICAgICAgV2VhcG9uID0gMSxcclxuICAgICAgICBBY2Nlc3NvcnkgPSAyLFxyXG4gICAgICAgIEFtbW8gPSAzXHJcbiAgICB9XHJcbiAgICBlbnVtIE9iamVjdFR5cGVFbnVte1xyXG4gICAgICAgIEhvbGUgPSAxLFxyXG4gICAgICAgIEZpcmVFZmYgPSAyLFxyXG4gICAgICAgIEhpdEVmZiA9IDMsXHJcbiAgICAgICAgU2hlbGwgPSA0LFxyXG4gICAgICAgIFNvdW5kID0gNVxyXG4gICAgfVxyXG4gICAgZW51bSBQbGF5ZXJBY3Rpb25Nb2RlRW51bXtcclxuICAgICAgICBSdW4gPSAxLCBcclxuICAgICAgICBRdWlja2x5UnVuID0gMiwgXHJcbiAgICAgICAgQWltUnVuID0gMywgXHJcbiAgICAgICAgQ3JvdWNoUnVuID0gNCwgXHJcbiAgICAgICAgUXVpY2tseUNyb3VjaFJ1biA9IDUsIFxyXG4gICAgICAgIEFpbUNyb3VjaFJ1biA9IDYgXHJcbiAgICB9XHJcbn1cclxuZGVjbGFyZSBuYW1lc3BhY2UgR2FtZUNvbnN0e1xyXG4gICAgdHlwZSBEYW1hZ2VBdHRlbnVhdGlvbiA9IHtcclxuICAgICAgICBEaXN0YW5jZTogbnVtYmVyO1xyXG4gICAgICAgIEF0dGVudWF0aW9uOiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBCb25lV2VpZ2h0ID0ge1xyXG5cclxuICAgIH1cclxuICAgIHR5cGUgV2VhcG9uSGl0UmVzdWx0ID0ge1xyXG4gICAgICAgIEhpdFBvaW50IDogVmVjdG9yXHJcbiAgICAgICAgSGl0T2JqZWN0IDogR2FtZU9iamVjdFxyXG4gICAgICAgIEhpdE5vcm1hbCA6IFZlY3RvclxyXG4gICAgICAgIEhpdFBhcnQgOiBIaXRQYXJ0RW51bVxyXG4gICAgICAgIElzVGFyZ2V0IDogYm9vbGVhblxyXG4gICAgICAgIERhbWFnZSA6IG51bWJlclxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5MTREXHU3RjZFXHU5NzU5XHU2MDAxXHU1QzVFXHU2MDI3ICovXHJcbiAgICB0eXBlIFdlYXBvbkNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGRlcyA6IHN0cmluZ1xyXG4gICAgICAgIGljb24gOiBzdHJpbmdcclxuICAgICAgICBzZWxlY3RlZEljb24gOiBzdHJpbmdcclxuICAgICAgICBvcmRlciA6IG51bWJlclxyXG4gICAgICAgIGRlZmF1bHRBaW1JbWcgOiBzdHJpbmdcclxuICAgICAgICB3YWlzdEFpbU1vZGUgOiBzdHJpbmdcclxuICAgICAgICByZWNvaWxJZCA6IG51bWJlclxyXG4gICAgICAgIGFuaW1hdGlvbklkIDogbnVtYmVyXHJcbiAgICAgICAgYmFuU2hvb3QgOiBib29sZWFuXHJcbiAgICAgICAgaXNIaXRTZWxmIDogYm9vbGVhblxyXG4gICAgICAgIGlzSGl0RnJpZW5kIDogYm9vbGVhblxyXG4gICAgICAgIGNhbkJlRXF1aXBBY2Nlc3NvcnkgOiBudW1iZXJbXVxyXG4gICAgICAgIGRhbWFnZSA6IG51bWJlclxyXG4gICAgICAgIG1hZ2F6aW5lVXNlZCA6IG51bWJlclxyXG4gICAgICAgIGhpdEhlYWREYW1hZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgaGl0Qm9keURhbWFnZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBoaXRMaW1iRGFtYWdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICAgICAgYnVsbGV0TmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGJ1bGxldEhvbGUgOiBzdHJpbmdcclxuICAgICAgICBidWxsZXRTaGVsbCA6IHN0cmluZ1xyXG4gICAgICAgIGF1dG9SZWxvYWQgOiBib29sZWFuXHJcbiAgICAgICAgbWVjaGluaWNhbEFpbUZPViA6IG51bWJlclxyXG4gICAgICAgIHdhaXN0QWltRk9WIDogbnVtYmVyXHJcbiAgICAgICAgc2hvb3RTcGVlZCA6IG51bWJlclxyXG4gICAgICAgIGJ1bGxldFBlclNob290IDogbnVtYmVyXHJcbiAgICAgICAgY29uc3VtZVNpbmdsZUJ1bGxldFBlclNob290IDogbnVtYmVyXHJcbiAgICAgICAgc2hvb3RNb2RlIDogRmlyZU1vZGVFbnVtW11cclxuICAgICAgICBkZWZhdWx0U2hvb3RNb2RlIDogRmlyZU1vZGVFbnVtXHJcbiAgICAgICAgcmFwaWRseV8xIDogbnVtYmVyXHJcbiAgICAgICAgcmFwaWRseV8yIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuTW9kZSA6IEd1bk1vZGVFbnVtXHJcbiAgICAgICAgYWNjdXJhdGVBaW0gOiBib29sZWFuXHJcbiAgICAgICAgY2FuQmVFcXVpcFBvc2l0aW9uIDogQ2FuQmVFcXVpcFBvc2l0aW9uRW51bVxyXG4gICAgICAgIGFpbVRpbWUgOiBudW1iZXJcclxuICAgICAgICBzdG9wQWltVGltZSA6IG51bWJlclxyXG4gICAgICAgIGFzc2lzdEFpbVRpbWUgOiBudW1iZXJcclxuICAgICAgICBhc3Npc3RBaW1EaXMwIDogbnVtYmVyXHJcbiAgICAgICAgYXNzaXN0QWltRGlzMSA6IG51bWJlclxyXG4gICAgICAgIGFzc2lzdEFpbVJhdGlvIDogbnVtYmVyXHJcbiAgICAgICAgcmVsb2FkV2l0aE1hZ2F6aW5lcyA6IGJvb2xlYW5cclxuICAgICAgICBjYW5JbnRlcnJ1cHRCdWxsZXRMb2FkIDogYm9vbGVhblxyXG4gICAgICAgIGhpdEVmZmVjdCA6IHN0cmluZ1xyXG4gICAgICAgIGZpcmVFZmZlY3QgOiBzdHJpbmdcclxuICAgICAgICBidWxsZXRTcGVlZCA6IG51bWJlclxyXG4gICAgICAgIGRhbWFnZUF0dGVudWF0aW9uIDogRGFtYWdlQXR0ZW51YXRpb25bXVxyXG4gICAgICAgIGV4cGxvc2lvbkRhbWFnZUF0dGVudWF0aW9uIDogRGFtYWdlQXR0ZW51YXRpb25bXVxyXG4gICAgICAgIGNoYXJhY3RlckFuaW1hdGlvbk1vZGUgOiBudW1iZXJcclxuICAgICAgICBwdW1wQWZ0ZXJGaW5hbExvYWQgOiBib29sZWFuXHJcbiAgICAgICAgcHVtcEFmdGVyRmlyZSA6IGJvb2xlYW5cclxuICAgICAgICBib25lV2VpZ2h0IDogQm9uZVdlaWdodFxyXG4gICAgICAgIGRhbWFnZVJlc3BvbnNlV2FpdFRpbWUgOiBudW1iZXJcclxuICAgICAgICBncmF2aXR5U2NhbGUgOiBudW1iZXJcclxuICAgICAgICBleHBsb3Npb25SYW5nZSA6IG51bWJlclxyXG4gICAgICAgIHdlaWdodCA6IG51bWJlclxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU1RjM5XHU1OTM5XHU5MTREXHU3RjZFXHU5NzU5XHU2MDAxXHU1QzVFXHU2MDI3ICovXHJcbiAgICB0eXBlIFdlYXBvbk1hZ2F6aW5lQ29uZmlnRGF0YSA9IHtcclxuICAgICAgICBtYXRjaEFtbW8gOiBudW1iZXJcclxuICAgICAgICBuYW1lIDogc3RyaW5nXHJcbiAgICAgICAgbWF4TnVtIDogbnVtYmVyXHJcbiAgICAgICAgbG9hZFRpbWUgOiBudW1iZXJcclxuICAgICAgICBhbW1vTmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9EZXMgOiBzdHJpbmdcclxuICAgICAgICBhbW1vSWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9IaXRUZXh0dXJlIDogc3RyaW5nXHJcbiAgICAgICAgYW1tb01vZGVsIDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTkxNERcdTRFRjZcdTkxNERcdTdGNkVcdTk3NTlcdTYwMDFcdTVDNUVcdTYwMjcgKi9cclxuICAgIHR5cGUgV2VhcG9uQWNjZXNzb3J5Q29uZmlnRGF0YSA9IHtcclxuICAgICAgICBuYW1lIDogc3RyaW5nXHJcbiAgICAgICAgZGVzIDogc3RyaW5nXHJcbiAgICAgICAgaWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIGxvY2F0aW9uIDogR2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtXHJcbiAgICAgICAgb3JkZXIgOiBudW1iZXJcclxuICAgICAgICBtb2RlbCA6IHN0cmluZ1xyXG4gICAgICAgIGlzU2lsZW5jZXIgOiBib29sZWFuXHJcbiAgICAgICAgYWltRm92UmF0ZSA6IG51bWJlciBcclxuICAgICAgICBtaW5FcnJvclJhdGUgOiBudW1iZXJcclxuICAgICAgICBtYXhFcnJvclJhdGUgOiBudW1iZXJcclxuICAgICAgICBndW5SZWNvdmVyUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIHZlcnRpY2FsSnVtcEFuZ2xlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGhvcml6b250YWxKdW1wUmFuZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgc2VsZlNwaW5SYW5nZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBqdW1wRm92UmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGJ1bGxldFNwZWVkUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIG1hZ2F6aW5lTG9hZFRpbWVSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgbWF4QW1tb1JhdGUgOiBNYXA8bnVtYmVyLCBudW1iZXI+XHJcbiAgICAgICAgYWltVGltZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBwaWNrU291bmQgOiBzdHJpbmdcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NzZGOFx1NjczQVx1NzZGOFx1NTE3M1x1NzY4NFx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgdHlwZSBXZWFwb25DYW1lcmFDb25maWdEYXRhID0ge1xyXG4gICAgICAgIHZpYnJhdGlvbkR1bXAgOiBudW1iZXJcclxuICAgICAgICB2aWJyYXRpb25PbWVnYSA6IG51bWJlclxyXG4gICAgICAgIGp1bXBUaW1lIDogbnVtYmVyXHJcbiAgICAgICAganVtcEZPViA6IG51bWJlclxyXG4gICAgfVxyXG4gICAgLyoqXHU1NDBFXHU1NzUwXHU1MjlCXHU5MTREXHU3RjZFICovXHJcbiAgICB0eXBlIFdlYXBvblJlY29pbENvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbWluRXJyb3IgOiBudW1iZXJcclxuICAgICAgICBtYXhFcnJvciA6IG51bWJlclxyXG4gICAgICAgIGd1blJlY29pbCA6IG51bWJlclxyXG4gICAgICAgIGd1blJlY292ZXJSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZGlmZnVzZVJlY292ZXJSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgdmVydGljYWxKdW1wQW5nbGUgOiBudW1iZXJcclxuICAgICAgICBiYWNrVG90YWwgOiBudW1iZXJcclxuICAgICAgICBob3Jpem9udGFsSnVtcFJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgdmVydGljYWxKdW1wUmFuZ2UgOiBudW1iZXJcclxuICAgICAgICBzZWxmU3BpblJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgc2VsZlNwaW5NYXggOiBudW1iZXJcclxuXHJcbiAgICAgICAgdWlKdW1wQW1wbCA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcE1heCA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcER1bXAgOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBPbWVnYSA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcEFuZ2xlIDogbnVtYmVyXHJcblxyXG4gICAgICAgIHNoYWtlSW50ZW5zaXR5IDogbnVtYmVyXHJcbiAgICAgICAgZGlmZnVzZUZ1bmN0aW9uIDogRGlmZnVzZUZ1bmN0aW9uRW51bVxyXG4gICAgICAgIGp1bXBFcnJvclNjYWxlIDogbnVtYmVyXHJcbiAgICAgICAgY3JvdWNoRXJyb3JTY2FsZSA6IG51bWJlclxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU1MkE4XHU3NTNCXHU5MTREXHU3RjZFICovXHJcbiAgICB0eXBlIFdlYXBvbkFuaW1hdGlvbkNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgZ3VuaWQgOiBudW1iZXJcclxuICAgICAgICBndW5Fdm5ldCA6IG51bWJlclxyXG4gICAgICAgIGlzTG9vcCA6IGJvb2xlYW5cclxuICAgICAgICBUcmFuc2l0aW9uRHVyYXRpb24gOiBudW1iZXJcclxuICAgICAgICBBbmltYXRpb25OYW1lIDogc3RyaW5nXHJcbiAgICAgICAgRGV0YWlsIDogc3RyaW5nXHJcbiAgICAgICAgU3BlZWQgOiBudW1iZXJcclxuICAgICAgICBXZWlnaHQgOiBudW1iZXJcclxuICAgICAgICBDb3ZlcnBsYXkgOiBudW1iZXJcclxuICAgICAgICBHdW5OYW1lIDogc3RyaW5nXHJcbiAgICB9XHJcbn0iLCAiIiwgImltcG9ydCAqIGFzIGZvcmVpZ24xIGZyb20gJy4vSmF2YVNjcmlwdHMvQ2xpZW50L0NsaWVudEJhc2UnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvQ29uZmlnQmFzZSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMyBmcm9tICcuL0phdmFTY3JpcHRzL0NvbmZpZy9HYW1lQ29uZmlnJztcbmltcG9ydCAqIGFzIGZvcmVpZ240IGZyb20gJy4vSmF2YVNjcmlwdHMvQ29uZmlnL01vbnN0ZXJzJztcbmltcG9ydCAqIGFzIGZvcmVpZ241IGZyb20gJy4vSmF2YVNjcmlwdHMvRGVmYXVsdFVJJztcbmltcG9ydCAqIGFzIGZvcmVpZ242IGZyb20gJy4vSmF2YVNjcmlwdHMvRW50aXR5L01vbnN0ZXIvTW9uc3RlckJhc2UnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjcgZnJvbSAnLi9KYXZhU2NyaXB0cy9GYWN0b3J5L0ZhY19JbnRlcmFjdE9iamVjdCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduOCBmcm9tICcuL0phdmFTY3JpcHRzL0dhbWVDb25zdC9FdmVudENvbnN0JztcbmltcG9ydCAqIGFzIGZvcmVpZ245IGZyb20gJy4vSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTAgZnJvbSAnLi9KYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xMSBmcm9tICcuL0phdmFTY3JpcHRzL01vZHVsZXMvUGxheWVyL1BsYXllckNsaWVudCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTIgZnJvbSAnLi9KYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJEYXRhJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xMyBmcm9tICcuL0phdmFTY3JpcHRzL01vZHVsZXMvUGxheWVyL1BsYXllclNlcnZlcic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTQgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJBdHRyJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xNSBmcm9tICcuL0phdmFTY3JpcHRzL1BsYXllckJlaGF2aW9yJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xNiBmcm9tICcuL0phdmFTY3JpcHRzL1BsYXllckd1bk1ncic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTcgZnJvbSAnLi9KYXZhU2NyaXB0cy9TZXJ2ZXIvU2VydmVyQmFzZSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTggZnJvbSAnLi9KYXZhU2NyaXB0cy9Ub29sL1R3ZWVuVXRpbCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTkgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vQ2FtZXJhQ29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjAgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQWNjZXNzb3J5QmFzZUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjEgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQW1tb0Jhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIyIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFuaW1hdGlvbkNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQmFzZUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjQgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQ2FtZXJhQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yNSBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25HVUlDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI2IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbk1hZ2F6aW5lQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yNyBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25SZWNvaWxDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI4IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblNvdW5kQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yOSBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Ub29sJztcbmltcG9ydCAqIGFzIGZvcmVpZ24zMCBmcm9tICcuL0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL0RlZmF1bHRVSV9nZW5lcmF0ZSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMzEgZnJvbSAnLi9KYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9Nb25zdEluZm9VSV9nZW5lcmF0ZSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMzIgZnJvbSAnLi9idWlsZCc7XG5cbmV4cG9ydCBjb25zdCBNV01vZHVsZU1hcCA9IHsgXG4gICAgICdKYXZhU2NyaXB0cy9DbGllbnQvQ2xpZW50QmFzZSc6IGZvcmVpZ24xLFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UnOiBmb3JlaWduMixcbiAgICAgJ0phdmFTY3JpcHRzL0NvbmZpZy9HYW1lQ29uZmlnJzogZm9yZWlnbjMsXG4gICAgICdKYXZhU2NyaXB0cy9Db25maWcvTW9uc3RlcnMnOiBmb3JlaWduNCxcbiAgICAgJ0phdmFTY3JpcHRzL0RlZmF1bHRVSSc6IGZvcmVpZ241LFxuICAgICAnSmF2YVNjcmlwdHMvRW50aXR5L01vbnN0ZXIvTW9uc3RlckJhc2UnOiBmb3JlaWduNixcbiAgICAgJ0phdmFTY3JpcHRzL0ZhY3RvcnkvRmFjX0ludGVyYWN0T2JqZWN0JzogZm9yZWlnbjcsXG4gICAgICdKYXZhU2NyaXB0cy9HYW1lQ29uc3QvRXZlbnRDb25zdCc6IGZvcmVpZ244LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdCc6IGZvcmVpZ245LFxuICAgICAnSmF2YVNjcmlwdHMvSW50ZXJmYWNlL0lJbnRlcmFjdGlvbic6IGZvcmVpZ24xMCxcbiAgICAgJ0phdmFTY3JpcHRzL01vZHVsZXMvUGxheWVyL1BsYXllckNsaWVudCc6IGZvcmVpZ24xMSxcbiAgICAgJ0phdmFTY3JpcHRzL01vZHVsZXMvUGxheWVyL1BsYXllckRhdGEnOiBmb3JlaWduMTIsXG4gICAgICdKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXInOiBmb3JlaWduMTMsXG4gICAgICdKYXZhU2NyaXB0cy9QbGF5ZXJBdHRyJzogZm9yZWlnbjE0LFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyQmVoYXZpb3InOiBmb3JlaWduMTUsXG4gICAgICdKYXZhU2NyaXB0cy9QbGF5ZXJHdW5NZ3InOiBmb3JlaWduMTYsXG4gICAgICdKYXZhU2NyaXB0cy9TZXJ2ZXIvU2VydmVyQmFzZSc6IGZvcmVpZ24xNyxcbiAgICAgJ0phdmFTY3JpcHRzL1Rvb2wvVHdlZW5VdGlsJzogZm9yZWlnbjE4LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXInOiBmb3JlaWduMTksXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQWNjZXNzb3J5QmFzZUNscyc6IGZvcmVpZ24yMCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbW1vQmFzZUNscyc6IGZvcmVpZ24yMSxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMnOiBmb3JlaWduMjIsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQmFzZUNscyc6IGZvcmVpZ24yMyxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25DYW1lcmFDbHMnOiBmb3JlaWduMjQsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzJzogZm9yZWlnbjI1LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbk1hZ2F6aW5lQ2xzJzogZm9yZWlnbjI2LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblJlY29pbENscyc6IGZvcmVpZ24yNyxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscyc6IGZvcmVpZ24yOCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Ub29sJzogZm9yZWlnbjI5LFxuICAgICAnSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvRGVmYXVsdFVJX2dlbmVyYXRlJzogZm9yZWlnbjMwLFxuICAgICAnSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUnOiBmb3JlaWduMzEsXG4gICAgICdidWlsZCc6IGZvcmVpZ24zMixcbn1cbiIsICJcdUZFRkZpbXBvcnQgeyBFdmVudENvbnN0IH0gZnJvbSBcIi4uL0dhbWVDb25zdC9FdmVudENvbnN0XCI7XHJcbmltcG9ydCBQbGF5ZXJBdHRyIGZyb20gXCIuLi9QbGF5ZXJBdHRyXCI7XHJcbmltcG9ydCB7IFBsYXllckd1bk1nciB9IGZyb20gXCIuLi9QbGF5ZXJHdW5NZ3JcIjtcclxuaW1wb3J0IHsgUGxheWVyQ2xpZW50IH0gZnJvbSBcIi4vLi4vTW9kdWxlcy9QbGF5ZXIvUGxheWVyQ2xpZW50XCI7XHJcbmltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi8uLi9Nb2R1bGVzL1BsYXllci9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZlciB9IGZyb20gXCIuLy4uL01vZHVsZXMvUGxheWVyL1BsYXllclNlcnZlclwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NkUzOFx1NjIwRlx1NUJBMlx1NjIzN1x1N0FFRlx1NEUzQlx1ODExQVx1NjcyQ1xyXG4gKi9cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgcHJpdmF0ZSB0b3RhbFBsYXllckF0dHJzOiBNYXA8c3RyaW5nLCBQbGF5ZXJBdHRyPiA9IG5ldyBNYXBcclxuICAgIG1QbGF5ZXJHdW5NZ3I6IFBsYXllckd1bk1nclxyXG4gICAgc3RhdGljIG1JbnN0YW5jZTogQ2xpZW50XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcclxuICAgICAgICBzdXBlcihkYXRhKVxyXG4gICAgICAgIEV2ZW50cy5hZGRTZXJ2ZXJMaXN0ZW5lcihFdmVudENvbnN0LkNsaWVudEV2ZW50LlBsYXllckFkZFN1Y2Nlc3NlZEV2ZW50LCB0aGlzLk9uUGxheWVyU3VjY2Vzc0FkZGVkLmJpbmQodGhpcykpXHJcbiAgICAgICAgQ2xpZW50Lm1JbnN0YW5jZSA9IHRoaXNcclxuICAgIH1cclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBhc3luYyBvblN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNb2R1bGUoKVxyXG4gICAgICAgIHRoaXMubVBsYXllckd1bk1nciA9IGF3YWl0IFBsYXllckd1bk1nci5JbnN0YW5jZSgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1NDY4XHU2NzFGXHU1MUZEXHU2NTcwIFx1NkJDRlx1NUUyN1x1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU1MUZEXHU2NTcwXHU2MjY3XHU4ODRDXHU5NzAwXHU4OTgxXHU1QzA2dGhpcy51c2VVcGRhdGVcdThENEJcdTUwM0NcdTRFM0F0cnVlXHJcbiAgICAgKiBAcGFyYW0gZHQgXHU1RjUzXHU1MjREXHU1RTI3XHU0RTBFXHU0RTBBXHU0RTAwXHU1RTI3XHU3Njg0XHU1RUY2XHU4RkRGIC8gXHU3OUQyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgxMUFcdTY3MkNcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdTY3MDBcdTU0MEVcdTRFMDBcdTVFMjdcdTYyNjdcdTg4NENcdTVCOENcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAgIC8qKiBcdTZDRThcdTUxOENcdTZBMjFcdTU3NTcgKi9cclxuICAgIHByb3RlY3RlZCByZWdpc3Rlck1vZHVsZSgpIHtcclxuICAgICAgICBNb2R1bGVNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVnaXN0ZXJNb2R1bGUoUGxheWVyU2VydmVyLCBQbGF5ZXJDbGllbnQsIFBsYXllckRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgT25QbGF5ZXJTdWNjZXNzQWRkZWQoY19ndWlkIDogc3RyaW5nLCBpbnNfZ3VpZCA6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09uUGxheWVyU3VjY2Vzc0FkZGVkICAgJywgY19ndWlkLFwiICBcIiwgaW5zX2d1aWQpXHJcbiAgICAgICAgbGV0IHMgPSBhd2FpdCBTY3JpcHRNYW5hZ2VyLmFzeW5jRmluZFNjcmlwdChpbnNfZ3VpZCkgYXMgUGxheWVyQXR0clxyXG4gICAgICAgIGNvbnNvbGUubG9nKHMpXHJcbiAgICAgICAgdGhpcy50b3RhbFBsYXllckF0dHJzLnNldChjX2d1aWQsIHMpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0UGxheWVyQXR0cihndWlkOnN0cmluZ3xHYW1lcGxheS5QbGF5ZXIpOlBsYXllckF0dHJ7XHJcbiAgICAgICAgaWYgKGd1aWQgaW5zdGFuY2VvZiBHYW1lcGxheS5QbGF5ZXIpIHtcclxuICAgICAgICAgICAgZ3VpZCA9IGd1aWQuY2hhcmFjdGVyLmd1aWRcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxQbGF5ZXJBdHRycy5nZXQoZ3VpZClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxQbGF5ZXJBdHRycy5nZXQoZ3VpZClcclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9XHJcbn0iLCAiZXhwb3J0IG5hbWVzcGFjZSBFdmVudENvbnN0e1xyXG4gICAgZXhwb3J0IGVudW0gQ2xpZW50RXZlbnQge1xyXG4gICAgICAgIFBsYXllckJlSGl0RXZlbnQgPSBcIlBsYXllckJlSGl0RXZlbnRcIixcclxuICAgICAgICBQbGF5ZXJOZWFyV2VhcG9uRXZlbnQgPSBcIlBsYXllck5lYXJXZWFwb25FdmVudFwiLFxyXG4gICAgICAgIFBsYXllckZhcldlYXBvbkV2ZW50ID0gJ1BsYXllckZhcldlYXBvbkV2ZW50JyxcclxuICAgICAgICBQbGF5ZXJOZWFyV2VhcG9uQWNjZXNzb3J5RXZlbnQgPSAnUGxheWVyTmVhcldlYXBvbkFjY2Vzc29yeUV2ZW50JyxcclxuICAgICAgICBQbGF5ZXJGYXJXZWFwb25BY2Nlc3NvcnlFdmVudCA9ICdQbGF5ZXJGYXJXZWFwb25BY2Nlc3NvcnlFdmVudCcsXHJcbiAgICAgICAgUGxheWVyTmVhckFtbW9FdmVudCA9ICdQbGF5ZXJOZWFyQW1tb0V2ZW50JyxcclxuICAgICAgICBQbGF5ZXJGYXJBbW1vRXZlbnQgPSAnUGxheWVyRmFyQW1tb0V2ZW50JyxcclxuICAgICAgICBQbGF5ZXJEaWVFdmVudCA9ICdQbGF5ZXJEaWVFdmVudCcsXHJcbiAgICAgICAgQ3JlYXRlQWxsVW5pdEV2ZW50ID0gJ0NyZWF0ZUFsbFVuaXRFdmVudCcsXHJcbiAgICAgICAgU2V0dGluZ0Fzc0FpbVJlZnJlc2hFdmVudCA9ICdTZXR0aW5nQXNzQWltUmVmcmVzaEV2ZW50JyxcclxuICAgICAgICBTeW5jRGF0YUV2ZW50ID0gJ1N5bmNEYXRhRXZlbnQnLFxyXG4gICAgICAgIE9uRXF1aXBXZWFwb25FdmVudCA9ICdPbkVxdWlwV2VhcG9uRXZlbnQnLFxyXG4gICAgICAgIFNldHRpbmdSZWFkeUV2ZW50ID0gJ1NldHRpbmdSZWFkeUV2ZW50JyxcclxuICAgICAgICBXZWFwb25PYmpDcmVhdGVkRXZlbnQgPSAnV2VhcG9uT2JqQ3JlYXRlZEV2ZW50JyxcclxuICAgICAgICBXZWFwb25PYmpBY3RpdmVDaGFuZ2VFdmVudCA9ICdXZWFwb25PYmpBY3RpdmVDaGFuZ2VFdmVudCcsXHJcbiAgICAgICAgUGxheWVyQWRkU3VjY2Vzc2VkRXZlbnQgPSAnUGxheWVyQWRkU3VjY2Vzc2VkRXZlbnQnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gU2VydmVyRXZlbnQge1xyXG4gICAgICAgIFdlYXBvbkhpdFBsYXllckV2ZW50ID0nV2VhcG9uSGl0UGxheWVyRXZlbnQnLFxyXG4gICAgICAgIENyZWF0ZUFtbW9FdmVudCA9J0NyZWF0ZUFtbW9FdmVudCcsXHJcbiAgICAgICAgRGVzdHJveUFtbW9FdmVudCA9J0Rlc3Ryb3lBbW1vRXZlbnQnLFxyXG4gICAgICAgIFBsYXllclBpY2tBbW1vRXZlbnQgPSAnUGxheWVyUGlja0FtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRXZlbnRDcmVhdGVPdmVyRXZlbnQgPSAnUGxheWVyRXZlbnRDcmVhdGVPdmVyRXZlbnQnLFxyXG4gICAgICAgIFBsYXllckRhdGFNb2RpZmlFdmVudCA9ICdQbGF5ZXJEYXRhTW9kaWZpRXZlbnQnLFxyXG4gICAgICAgIFN5bmNBbmRTYXZlRXZlbnQgPSAnU3luY0FuZFNhdmVFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQ3JlYXRlZEV2ZW50ID0gJ1dlYXBvbk9iakNyZWF0ZWRFdmVudCdcclxuICAgIH1cclxufSIsICJpbXBvcnQgQ2xpZW50QmFzZSBmcm9tIFwiLi9DbGllbnQvQ2xpZW50QmFzZVwiXHJcbmltcG9ydCBQbGF5ZXJBdHRyIGZyb20gXCIuL1BsYXllckF0dHJcIlxyXG5pbXBvcnQgeyBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25BbW1vQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbi9XZWFwb25BbW1vQmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb24vV2VhcG9uQmFzZUNsc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyR3VuTWdyIHtcclxuICAgIHBsYXllcjpHYW1lcGxheS5DaGFyYWN0ZXJcclxuXHJcbiAgICBjdXJHdW46V2VhcG9uQmFzZUNsc1xyXG4gICAgbWFpbkd1bjpXZWFwb25CYXNlQ2xzXHJcbiAgICBkZXB1dHlHdW46V2VhcG9uQmFzZUNsc1xyXG4gICAgbWluaUd1bjpXZWFwb25CYXNlQ2xzXHJcbiAgICBwcm9wMTpXZWFwb25CYXNlQ2xzXHJcbiAgICBwcm9wMjpXZWFwb25CYXNlQ2xzXHJcblxyXG4gICAgcHVibGljIGhhZEFjY2Vzc29yeUxpc3Q6UmVjb3JkPHN0cmluZywgV2VhcG9uQWNjZXNzb3J5QmFzZUNscz5cclxuICAgIHB1YmxpYyBoYWRBbW1vTGlzdDpSZWNvcmQ8c3RyaW5nLCBXZWFwb25BbW1vQmFzZUNscz5cclxuXHJcbiAgICBjYW5VcGRhdGVHdW4gPSB0cnVlXHJcbiAgICAvLyBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEZcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxheWVyR3VuTWdyO1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoUGxheWVyR3VuTWdyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBhd2FpdCBHYW1lcGxheS5hc3luY0dldEN1cnJlbnRQbGF5ZXIoKVxyXG4gICAgICAgICAgICBQbGF5ZXJHdW5NZ3IuX2luc3RhbmNlID0gbmV3IFBsYXllckd1bk1ncihwbGF5ZXIuY2hhcmFjdGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxheWVyR3VuTWdyLl9pbnN0YW5jZVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocGxheWVyOkdhbWVwbGF5LkNoYXJhY3Rlcil7XHJcbiAgICAgICAgLy9cdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuT25lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuVHdvLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuVGhyZWUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oMylcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5Gb3VyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuRml2ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbig1KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlgsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oMClcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5HLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJvcFdlYXBvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuQiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkNoYW5nZVNob290TW9kZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuTGVmdEFsdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NjYzRVx1NzkzQVx1OUYyMFx1NjgwN1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5SaWdodE1vdXNlQnV0dG9uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU1MjI0XHU2NUFEXHU4ODQwXHU5MUNGXHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgICAgICBpZihhLmhwIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5jdXJHdW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJHdW4uTWVjaGFuaWNhbEFpbVN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLkdldExvY2FsQXR0cigpXHJcbiAgICAgICAgICAgIGlmKGEuaHAgPD0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1ckd1biA9IHRoaXMubWFpbkd1blxyXG4gICAgICAgICAgICAvL1x1NTIyNFx1NjVBRFx1ODg0MFx1OTFDRlxyXG4gICAgICAgICAgICBpZih0aGlzLmN1ckd1bil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckd1bi5Mb2FkTWFnYXppbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5UHJlc3MoS2V5cy5SLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIElucHV0VXRpbC5vbktleVVwKEtleXMuTGVmdEFsdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NEUwRFx1NjYzRVx1NzkzQVx1OUYyMFx1NjgwN1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleVVwKEtleXMuTGVmdEFsdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NUMxRFx1OEJENVx1NzlCQlx1NUYwMFx1Nzc4NFx1NTFDNlxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJHdW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyR3VuLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgU3dpdGNoV2VhcG9uKGluZGV4Om51bWJlcil7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLkdldExvY2FsQXR0cigpXHJcbiAgICAgICAgaWYoYS5ocCA8PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2hhbmdlU2hvb3RNb2RlKCl7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLkdldExvY2FsQXR0cigpXHJcbiAgICAgICAgaWYoYS5ocCA8PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgRHJvcFdlYXBvbigpe1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgIGlmKGEuaHAgPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEdldExvY2FsQXR0cigpOlBsYXllckF0dHJ7XHJcbiAgICAgICAgcmV0dXJuIENsaWVudEJhc2UubUluc3RhbmNlLkdldFBsYXllckF0dHIoZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5ndWlkKVxyXG4gICAgfVxyXG4gICAgR2V0T3RoZXJBdHRyKGd1aWQ6c3RyaW5nKTpQbGF5ZXJBdHRye1xyXG4gICAgICAgIHJldHVybiBDbGllbnRCYXNlLm1JbnN0YW5jZS5HZXRQbGF5ZXJBdHRyKGd1aWQpXHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZlciB9IGZyb20gXCIuL1BsYXllclNlcnZlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckNsaWVudCBleHRlbmRzIE1vZHVsZUM8UGxheWVyU2VydmVyLCBQbGF5ZXJEYXRhPiB7XHJcbiAgICBwcm90ZWN0ZWQgb25Bd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyQ2xpZW50b25Bd2FrZScpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyQ2xpZW50b25TdGFydCcpXHJcbiAgICB9XHJcbn0iLCAiZXhwb3J0IGNsYXNzIFBsYXllckRhdGEgZXh0ZW5kcyBTdWJkYXRhIHtcclxuXHJcbiAgICBwdWJsaWMgaHA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICAvKiogXHU5MUQxXHU1RTAxXHU2NTM5XHU1M0Q4XHU3Njg0XHU1NkRFXHU4QzAzXHVGRjBDXHU1NzI4XHU5NzAwXHU4OTgxXHU3N0U1XHU5MDUzXHU5MUQxXHU1RTAxXHU2NTM5XHU1M0Q4XHU3Njg0XHU1NzMwXHU2NUI5XHU3NkQxXHU1NDJDXHU1MzczXHU1M0VGICovXHJcbiAgICBwdWJsaWMgb25ocENoYW5nZTogQWN0aW9uID0gbmV3IEFjdGlvbigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NTM5XHU1M0Q4XHU5MUQxXHU1RTAxXHU3Njg0XHU2NTcwXHU5MUNGXHJcbiAgICAgKiBAcGFyYW0gZGVsdGFOdW0gXHU2NTM5XHU1M0Q4XHU1MDNDXHVGRjBDXHU0RTNBXHU4RDFGXHU2NTcwXHU1QzMxXHU2NjJGXHU1MUNGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjaGFuZ2VHb2xkKGRlbHRhTnVtOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBcdTY3MERcdTUyQTFcdTdBRUZcdTY1MzlcdTUzRDhcdTkxRDFcdTVFMDFcdUZGMENcdTVDMDZcdThGRDlcdTRFMkFcdTY0Q0RcdTRGNUNcdTU0MENcdTZCNjVcdTdFRDlcdTVCQTJcdTYyMzdcdTdBRUZcclxuICAgICAgICB0aGlzLnN5bmNUb0NsaWVudCgpO1xyXG4gICAgICAgIHRoaXMuaHAgKz0gZGVsdGFOdW07XHJcbiAgICAgICAgdGhpcy5vbmhwQ2hhbmdlLmNhbGwodGhpcy5ocCk7XHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuL1BsYXllckRhdGFcIjtcclxuaW1wb3J0IHsgUGxheWVyQ2xpZW50IH0gZnJvbSBcIi4vUGxheWVyQ2xpZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmVyIGV4dGVuZHMgTW9kdWxlUzxQbGF5ZXJDbGllbnQsIFBsYXllckRhdGE+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyU2VydmVyJylcclxuICAgIH1cclxufSIsICJcclxuLy9cdTUxNDNcdTdEMjBcdTc2ODRcdTU3RkFcdTdDN0JcclxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudEJhc2V7XHJcblx0aWQ6bnVtYmVyO1xyXG59XHJcbi8vXHU5MTREXHU3RjZFXHU3Njg0XHU1N0ZBXHU3QzdCXHJcbmV4cG9ydCBjbGFzcyBDb25maWdCYXNlPFQgZXh0ZW5kcyBJRWxlbWVudEJhc2U+e1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBR19LRVk6c3RyaW5nID0gJ0tleSc7Ly9cdThCRkJcdTUzRDZcdTk1MkUoXHU5NjY0XHU0RTg2SURcdTRFNEJcdTU5MTZcdTc2ODRcdTUyMkJcdTU0MERcdUZGMENcdTVFMjZrZXlcdTc2ODRcdTVCNTdcdTZCQjVcdTVGQzVcdTk4N0JcdTY2MkZzdHJpbmdcdTdDN0JcdTU3OEIpXHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0xBTkdVQUdFOnN0cmluZyA9ICdMYW5ndWFnZSc7Ly9cdTUxNzNcdTgwNTRcdThCRURcdThBMDBcdTg4NjhcdTc2ODRpZFx1NjIxNmtleShcdTU5ODJcdTY3OUNcdTY3MDlcdThGRDlcdTRFMkF0YWdcdUZGMENcdTVCRkNcdTg4NjhcdTVERTVcdTUxNzdcdTg5ODFcdTYyOEFcdTY1NzBcdTYzNkVcdTc1MUZcdTYyMTBcdTRFM0FzdHJpbmdcdTdDN0JcdTU3OEJcdUZGMENcdTU2RTBcdTRFM0FcdTRGMUFcdTgxRUFcdTUyQThcdThGREJcdTg4NENcdTUwM0NcdTc2ODRcdThGNkNcdTYzNjIpXHJcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX01BSU5MQU5HVUFHRTpzdHJpbmcgPSAnTWFpbkxhbmd1YWdlJzsvL1x1NEUzQlx1OEJFRFx1OEEwMHRhZ1xyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBR19DSElMRExBTkdVQUdFOnN0cmluZyA9ICdDaGlsZExhbmd1YWdlJzsvL1x1NUI1MFx1OEJFRFx1OEEwMHRhZ1xyXG5cclxuXHRwcml2YXRlIHJlYWRvbmx5IEVMRU1FTlRBUlI6QXJyYXk8VD4gPSBbXTtcclxuXHRwcml2YXRlIHJlYWRvbmx5IEVMRU1FTlRNQVA6TWFwPG51bWJlciwgVD4gPSBuZXcgTWFwPG51bWJlciwgVD4oKTtcclxuXHRwcml2YXRlIHJlYWRvbmx5IEtFWU1BUDpNYXA8bnVtYmVyIHwgc3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG5cdHByaXZhdGUgc3RhdGljIGxhbmd1YWdlSW5kZXg6bnVtYmVyID0gMFxyXG5cdHByaXZhdGUgc3RhdGljIGdldExhbmd1YWdlOihrZXk6c3RyaW5nfG51bWJlcik9PnN0cmluZztcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKGV4Y2VsRGF0YTpBcnJheTxBcnJheTxhbnk+Pil7XHJcblx0XHRsZXQgaGVhZGVyTGluZTpudW1iZXIgPSAyOy8vXHU4ODY4XHU1OTM0XHU3Njg0XHU4ODRDXHU2NTcwXHJcblx0XHR0aGlzLkVMRU1FTlRBUlIgPSBuZXcgQXJyYXkoZXhjZWxEYXRhLmxlbmd0aCAtIGhlYWRlckxpbmUpO1xyXG5cdFx0XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UQVJSLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0dGhpcy5FTEVNRU5UQVJSW2ldID0ge30gYXMgVFxyXG5cdFx0fVxyXG5cdFx0bGV0IGNvbHVtbiA9IGV4Y2VsRGF0YVswXS5sZW5ndGg7Ly9cdTUyMTdcdTY1NzBcclxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCBjb2x1bW47IGorKyl7Ly9cdTkwNERcdTUzODZcdTU0MDRcdTUyMTdcclxuXHRcdFx0bGV0IG5hbWU6c3RyaW5nID0gZXhjZWxEYXRhWzBdW2pdO1xyXG5cdFx0XHRsZXQgdGFnczpBcnJheTxzdHJpbmc+ID0gZXhjZWxEYXRhWzFdW2pdLnNwbGl0KCd8Jyk7XHJcblx0XHRcdGlmKHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfQ0hJTERMQU5HVUFHRSkpIGNvbnRpbnVlO1xyXG5cdFx0XHRsZXQgak9mZmVjdDpudW1iZXIgPSAwOy8vXHU1MjE3XHU1MDRGXHU3OUZCXHU5MUNGXHJcblx0XHRcdGlmKHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfTUFJTkxBTkdVQUdFKSl7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gaiArIENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleDtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0VGFnczpBcnJheTxzdHJpbmc+ID0gZXhjZWxEYXRhWzFdW2luZGV4XS5zcGxpdCgnfCcpO1xyXG5cdFx0XHRcdGlmKGluZGV4IDwgY29sdW1uICYmIHRhcmdldFRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfQ0hJTERMQU5HVUFHRSkpe1xyXG5cdFx0XHRcdFx0ak9mZmVjdCA9IENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGhhc1RhZ19LZXk6Ym9vbGVhbiA9IHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfS0VZKTtcclxuXHRcdFx0bGV0IGhhc1RhZ19MYW5ndWFnZTpib29sZWFuID0gdGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19MQU5HVUFHRSk7XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGxldCBlbGUgPSB0aGlzLkVMRU1FTlRBUlJbaV07XHJcblx0XHRcdFx0bGV0IHZhbHVlID0gZXhjZWxEYXRhW2kgKyBoZWFkZXJMaW5lXVtqICsgak9mZmVjdF07XHJcblx0XHRcdFx0aWYoaiA9PSAwKXsvL0lEXHJcblx0XHRcdFx0XHR0aGlzLkVMRU1FTlRNQVAuc2V0KHZhbHVlLCBlbGUpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0aWYoaGFzVGFnX0tleSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuS0VZTUFQLnNldCh2YWx1ZSwgZXhjZWxEYXRhW2kgKyBoZWFkZXJMaW5lXVswXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihoYXNUYWdfTGFuZ3VhZ2Upe1xyXG5cdFx0XHRcdFx0XHRpZihDb25maWdCYXNlLmdldExhbmd1YWdlICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gQ29uZmlnQmFzZS5nZXRMYW5ndWFnZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gXCJ1bmtub3dcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsZVtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vXHU4QkJFXHU3RjZFXHU4M0I3XHU1M0Q2XHU4QkVEXHU4QTAwXHU3Njg0XHU2NUI5XHU2Q0Q1XHJcblx0cHVibGljIHN0YXRpYyBpbml0TGFuZ3VhZ2UobGFuZ3VhZ2VJbmRleDpudW1iZXIsIGdldExhbmd1YWdlRnVuOihrZXk6c3RyaW5nfG51bWJlcik9PnN0cmluZyl7XHJcblx0XHRDb25maWdCYXNlLmxhbmd1YWdlSW5kZXggPSBsYW5ndWFnZUluZGV4O1xyXG5cdFx0Q29uZmlnQmFzZS5nZXRMYW5ndWFnZSA9IGdldExhbmd1YWdlRnVuO1xyXG5cdFx0aWYoQ29uZmlnQmFzZS5sYW5ndWFnZUluZGV4IDwgMCl7XHJcblx0XHRcdENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleCA9IENvbmZpZ0Jhc2UuZ2V0U3lzdGVtTGFuZ3VhZ2VJbmRleCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvL1x1ODNCN1x1NTNENlx1N0NGQlx1N0VERlx1OEJFRFx1OEEwMFx1N0QyMlx1NUYxNVxyXG5cdHByaXZhdGUgc3RhdGljIGdldFN5c3RlbUxhbmd1YWdlSW5kZXgoKTpudW1iZXJ7XHJcblx0XHRsZXQgbGFuZ3VhZ2UgPSBVdGlsLkxvY2FsZVV0aWwuZ2V0RGVmYXVsdExvY2FsZSgpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuXHRcdGlmICghIWxhbmd1YWdlLm1hdGNoKFwiZW5cIikpIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcInpoXCIpKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJqYVwiKSkge1xyXG5cdFx0XHRyZXR1cm4gMjtcclxuXHRcdH1cclxuXHRcdGlmICghIWxhbmd1YWdlLm1hdGNoKFwiZGVcIikpIHtcclxuXHRcdFx0cmV0dXJuIDM7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9XHJcblx0LyoqXHJcblx0KiBcdTY4MzlcdTYzNkVpZFx1ODNCN1x1NTNENlx1NEUwMFx1NEUyQVx1NTE0M1x1N0QyMFxyXG5cdCogQHBhcmFtIGlkIGlkfGtleVxyXG5cdCogQHJldHVybnMgRWxlbWVudFxyXG5cdCovXHJcblx0cHVibGljIGdldEVsZW1lbnQoaWQ6bnVtYmVyfHN0cmluZyk6IFQge1xyXG5cdFx0bGV0IGVsZSA9IHRoaXMuRUxFTUVOVE1BUC5nZXQoTnVtYmVyKGlkKSkgfHwgdGhpcy5FTEVNRU5UTUFQLmdldCh0aGlzLktFWU1BUC5nZXQoaWQpKTtcclxuXHRcdGlmKGVsZSA9PSBudWxsKXtcclxuXHRcdFx0Y29uc29sZS5lcnJvcih0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIlx1OTE0RFx1N0Y2RVx1ODg2OFx1NEUyRFx1NjI3RVx1NEUwRFx1NTIzMFx1NTE0M1x1N0QyMCBpZDpcIiArIGlkKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBlbGU7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogXHU2ODM5XHU2MzZFXHU1QjU3XHU2QkI1XHU1NDBEXHU1NDhDXHU1QjU3XHU2QkI1XHU1MDNDXHU2N0U1XHU2MjdFXHU0RTAwXHU0RTJBXHU1MTQzXHU3RDIwXHJcblx0KiBAcGFyYW0gZmllbGROYW1lIFx1NUI1N1x1NkJCNVx1NTQwRFxyXG5cdCogQHBhcmFtIGZpZWxkVmFsdWUgXHU1QjU3XHU2QkI1XHU1MDNDXHJcblx0KiBAcmV0dXJucyBcdTdCMkNcdTRFMDBcdTRFMkFcdTYyN0VcdTUyMzBcdTc2ODRFbGVtZW50XHJcblx0Ki9cclxuXHRwdWJsaWMgZmluZEVsZW1lbnQoZmllbGROYW1lOnN0cmluZywgZmllbGRWYWx1ZTphbnkpOiBUe1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKHRoaXMuRUxFTUVOVEFSUltpXVtmaWVsZE5hbWVdID09IGZpZWxkVmFsdWUpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLkVMRU1FTlRBUlJbaV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LyoqXHJcblx0KiBcdTY4MzlcdTYzNkVcdTVCNTdcdTZCQjVcdTU0MERcdTU0OENcdTVCNTdcdTZCQjVcdTUwM0NcdTY3RTVcdTYyN0VcdTRFMDBcdTdFQzRcdTUxNDNcdTdEMjBcclxuXHQqIEBwYXJhbSBmaWVsZE5hbWUgXHU1QjU3XHU2QkI1XHU1NDBEXHJcblx0KiBAcGFyYW0gZmllbGRWYWx1ZSBcdTVCNTdcdTZCQjVcdTUwM0NcclxuXHQqIEByZXR1cm5zIFx1NjI0MFx1NjcwOVx1N0IyNlx1NTQwOFx1ODk4MVx1NkM0Mlx1NzY4NEVsZW1lbnRcclxuXHQqL1xyXG5cdHB1YmxpYyBmaW5kRWxlbWVudHMoZmllbGROYW1lOnN0cmluZyxmaWVsZFZhbHVlOmFueSk6QXJyYXk8VD57XHJcblx0XHRsZXQgYXJyOkFycmF5PFQ+ID0gW107XHJcblx0XHRmb3IobGV0IGkgPSAwO2kgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoO2krKyl7XHJcblx0XHRcdGlmKHRoaXMuRUxFTUVOVEFSUltpXVtmaWVsZE5hbWVdID09IGZpZWxkVmFsdWUpe1xyXG5cdFx0XHRcdGFyci5wdXNoKHRoaXMuRUxFTUVOVEFSUltpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBhcnI7XHJcblx0fVxyXG5cdC8qKlx1ODNCN1x1NTNENlx1NjI0MFx1NjcwOVx1NTE0M1x1N0QyMCovXHJcblx0cHVibGljIGdldEFsbEVsZW1lbnQoKTpBcnJheTxUPntcclxuXHRcdHJldHVybiB0aGlzLkVMRU1FTlRBUlI7XHJcblx0fVxyXG59IiwgImltcG9ydCB7Q29uZmlnQmFzZSwgSUVsZW1lbnRCYXNlfSBmcm9tIFwiLi9Db25maWdCYXNlXCI7XHJcbmltcG9ydCB7TW9uc3RlcnNDb25maWd9IGZyb20gXCIuL01vbnN0ZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuXHRwcml2YXRlIHN0YXRpYyBjb25maWdNYXA6TWFwPHN0cmluZywgQ29uZmlnQmFzZTxJRWxlbWVudEJhc2U+PiA9IG5ldyBNYXAoKTtcclxuXHQvKipcclxuXHQqIFx1NTkxQVx1OEJFRFx1OEEwMFx1OEJCRVx1N0Y2RVxyXG5cdCogQHBhcmFtIGxhbmd1YWdlSW5kZXggXHU4QkVEXHU4QTAwXHU3RDIyXHU1RjE1KC0xXHU0RTNBXHU3Q0ZCXHU3RURGXHU5RUQ4XHU4QkE0XHU4QkVEXHU4QTAwKVxyXG5cdCogQHBhcmFtIGdldExhbmd1YWdlRnVuIFx1NjgzOVx1NjM2RWtleVx1ODNCN1x1NTNENlx1OEJFRFx1OEEwMFx1NTE4NVx1NUJCOVx1NzY4NFx1NjVCOVx1NkNENVxyXG5cdCovXHJcblx0cHVibGljIHN0YXRpYyBpbml0TGFuZ3VhZ2UobGFuZ3VhZ2VJbmRleDpudW1iZXIsIGdldExhbmd1YWdlRnVuOihrZXk6c3RyaW5nfG51bWJlcik9PnN0cmluZyl7XHJcblx0XHRDb25maWdCYXNlLmluaXRMYW5ndWFnZShsYW5ndWFnZUluZGV4LCBnZXRMYW5ndWFnZUZ1bik7XHJcblx0XHR0aGlzLmNvbmZpZ01hcC5jbGVhcigpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdldENvbmZpZzxUIGV4dGVuZHMgQ29uZmlnQmFzZTxJRWxlbWVudEJhc2U+PihDb25maWdDbGFzczogeyBuZXcoKTogVCB9KTogVCB7XHJcblx0XHRpZiAoIXRoaXMuY29uZmlnTWFwLmhhcyhDb25maWdDbGFzcy5uYW1lKSkge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ01hcC5zZXQoQ29uZmlnQ2xhc3MubmFtZSwgbmV3IENvbmZpZ0NsYXNzKCkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnTWFwLmdldChDb25maWdDbGFzcy5uYW1lKSBhcyBUO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdldCBNb25zdGVycygpOk1vbnN0ZXJzQ29uZmlneyByZXR1cm4gdGhpcy5nZXRDb25maWcoTW9uc3RlcnNDb25maWcpIH07XHJcbn0iLCAiaW1wb3J0IHsgQ29uZmlnQmFzZSwgSUVsZW1lbnRCYXNlIH0gZnJvbSBcIi4vQ29uZmlnQmFzZVwiO1xyXG5jb25zdCBFWENFTERBVEE6QXJyYXk8QXJyYXk8YW55Pj4gPSBbW1wiaWRcIixcIm5hbWVcIixcIm1heEhQXCIsXCJsZXZlbFwiLFwiYXRrXCIsXCJtb2RlbEd1aWRcIl0sW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxbMSxcIlx1ODcxOFx1ODZEQlwiLDEwMCwyLDEsXCIxOTI1NjlcIl0sWzIsXCJcdTUxNTRcdTVCNTBcIiwyMDAsMiwxLFwiMTM4MjY4XCJdLFszLFwiXHU5RThCXHU5RTdGXCIsMzAwLDIsMSxcIjEyNjAzMFwiXV07XHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vbnN0ZXJzRWxlbWVudCBleHRlbmRzIElFbGVtZW50QmFzZXtcclxuIFx0LyoqXHU2MDJBXHU3MjY5SUQqL1xyXG5cdGlkOm51bWJlclxyXG5cdC8qKlx1NjAyQVx1NzI2OVx1NTQwRFx1NUI1NyovXHJcblx0bmFtZTpzdHJpbmdcclxuXHQvKipcdTY3MDBcdTU5MjdcdTg4NDBcdTkxQ0YqL1xyXG5cdG1heEhQOm51bWJlclxyXG5cdC8qKlx1N0I0OVx1N0VBNyovXHJcblx0bGV2ZWw6bnVtYmVyXHJcblx0LyoqXHU2NTNCXHU1MUZCXHU1MjlCKi9cclxuXHRhdGs6bnVtYmVyXHJcblx0LyoqXHU5ODg0XHU1MjM2XHU0RjUzR3VpZCovXHJcblx0bW9kZWxHdWlkOnN0cmluZ1xyXG4gfSBcclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXJzQ29uZmlnIGV4dGVuZHMgQ29uZmlnQmFzZTxJTW9uc3RlcnNFbGVtZW50PntcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoRVhDRUxEQVRBKTtcclxuXHR9XHJcblxyXG59IiwgIlx1RkVGRmltcG9ydCBJbnRlcmFjdEFjdG9yIGZyb20gXCIuL0ludGVyZmFjZS9JSW50ZXJhY3Rpb25cIjtcclxuXHJcbkBVSS5VSUNhbGxPbmx5KCcnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSURlZmF1bHQgZXh0ZW5kcyBVSS5VSUJlaGF2aW9yIHtcclxuXHRDaGFyYWN0ZXI6IEdhbWVwbGF5LkNoYXJhY3RlcjtcclxuXHJcblx0SW50ZXJhY3RCdG46IFVJLkJ1dHRvblxyXG5cdE5lYXJJbnRlcmFjdEd1aWQgOnN0cmluZ1xyXG5cdC8qIFx1ODlFM1x1Njc5MFx1OEQ0NFx1NkU5MElEXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIHJlc29sdmVTdHJpbmcoYXNzZXRJZHM6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgYXNzZXRJZEFycmF5OiBzdHJpbmdbXSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgbGV0IGFzc2V0SWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHMgPSBhc3NldElkcy5zcGxpdChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBhIG9mIHMpIHtcclxuICAgICAgICAgICAgaWYgKGEgPT0gXCIsXCIpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWRBcnJheS5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkICs9IGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzc2V0SWQpIHtcclxuICAgICAgICAgICAgYXNzZXRJZEFycmF5LnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhc3NldElkQXJyYXk7XHJcbiAgICB9XHJcblxyXG5cdC8qIFx1NTIxRFx1NTlDQlx1NTMxNlx1OEQ0NFx1NkU5MCAqL1xyXG5cdHByaXZhdGUgaW5pdEFzc2V0cyhhc3NldElkczogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRsZXQgYXNzZXRJZEFycmF5ID0gdGhpcy5yZXNvbHZlU3RyaW5nKGFzc2V0SWRzKTtcclxuXHRcdGZvciAobGV0IGVsZW1lbnQgb2YgYXNzZXRJZEFycmF5KSB7XHJcblx0XHRcdFV0aWwuQXNzZXRVdGlsLmFzeW5jRG93bmxvYWRBc3NldChlbGVtZW50KVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwcml2YXRlIFRyeUludGVyYWN0KCk6dm9pZCB7XHJcblx0XHRsZXQgb2JqOkdhbWVPYmplY3QgPSBHYW1lT2JqZWN0LmZpbmQodGhpcy5OZWFySW50ZXJhY3RHdWlkKVxyXG5cdFx0aWYgKG9iaiA9PSBudWxsKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0bGV0IGEgPSBvYmouZ2V0U2NyaXB0cygpXHJcblx0XHRsZXQgYWN0b3IgOiBJbnRlcmFjdEFjdG9yID0gPEludGVyYWN0QWN0b3I+b2JqLmdldFNjcmlwdEJ5TmFtZShcIklJbnRlcmFjdGlvblwiKVxyXG5cdFx0YWN0b3IuT25JbnRlcmFjdChnZXRDdXJyZW50UGxheWVyKCksIDEpXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIFNob3dJbnRlcmFjdEJ1dHRvbihndWlkIDpzdHJpbmcpOnZvaWQge1xyXG5cdFx0dGhpcy5JbnRlcmFjdEJ0bi52aXNpYmlsaXR5ID0gVUkuU2xhdGVWaXNpYmlsaXR5LlZpc2libGVcclxuXHRcdHRoaXMuTmVhckludGVyYWN0R3VpZCA9IGd1aWRcclxuXHR9XHJcblx0cHJpdmF0ZSBIaWRlSW50ZXJhY3RCdXR0b24oZ3VpZDpzdHJpbmcpOnZvaWR7XHJcblx0XHRpZiAodGhpcy5OZWFySW50ZXJhY3RHdWlkID09IGd1aWQpIHtcclxuXHRcdFx0dGhpcy5OZWFySW50ZXJhY3RHdWlkID0gXCJcIlxyXG5cdFx0XHR0aGlzLkludGVyYWN0QnRuLnZpc2liaWxpdHkgPSBVSS5TbGF0ZVZpc2liaWxpdHkuQ29sbGFwc2VkXHJcblx0XHR9XHJcblx0fVxyXG5cdC8qKiBcdTRFQzVcdTU3MjhcdTZFMzhcdTYyMEZcdTY1RjZcdTk1RjRcdTVCRjlcdTk3NUVcdTZBMjFcdTY3N0ZcdTVCOUVcdTRGOEJcdThDMDNcdTc1MjhcdTRFMDBcdTZCMjEgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCkge1xyXG5cdFx0Ly9cdTUyMURcdTU5Q0JcdTUzMTZcdTUyQThcdTc1M0JcdThENDRcdTZFOTAgXHJcblx0XHR0aGlzLmluaXRBc3NldHMoXCI5NTc3Nyw2MTI0NVwiKVxyXG5cdFx0Ly9cdThCQkVcdTdGNkVcdTgwRkRcdTU0MjZcdTZCQ0ZcdTVFMjdcdTg5RTZcdTUzRDFvblVwZGF0ZVxyXG5cdFx0dGhpcy5jYW5VcGRhdGUgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0Ly9cdTYyN0VcdTUyMzBcdTVCRjlcdTVFOTRcdTc2ODRcdThERjNcdThEQzNcdTYzMDlcdTk0QUVcclxuICAgICAgICBjb25zdCBKdW1wQnRuID0gdGhpcy51aVdpZGdldEJhc2UuZmluZENoaWxkQnlQYXRoKCdSb290Q2FudmFzL0J1dHRvbl9KdW1wJykgYXMgVUkuQnV0dG9uXHJcblx0XHRjb25zdCBBdHRhY2tCdG4gPSB0aGlzLnVpV2lkZ2V0QmFzZS5maW5kQ2hpbGRCeVBhdGgoJ1Jvb3RDYW52YXMvQnV0dG9uX0F0dGFjaycpIGFzIFVJLkJ1dHRvblxyXG5cdFx0dGhpcy5JbnRlcmFjdEJ0biA9IHRoaXMudWlXaWRnZXRCYXNlLmZpbmRDaGlsZEJ5UGF0aCgnUm9vdENhbnZhcy9JbnRlcmFjdEJ0bicpIGFzIFVJLkJ1dHRvblxyXG5cdFx0dGhpcy5JbnRlcmFjdEJ0bi52aXNpYmlsaXR5ID0gVUkuU2xhdGVWaXNpYmlsaXR5LkNvbGxhcHNlZFxyXG5cdFx0XHJcblx0XHRFdmVudHMuYWRkTG9jYWxMaXN0ZW5lcihcImNsaWVudF9zaG93X2ludGVyYWN0X2J1dHRvblwiLCAoZ3VpZDogc3RyaW5nKT0+e1xyXG5cdFx0XHR0aGlzLlNob3dJbnRlcmFjdEJ1dHRvbihndWlkKVxyXG5cdFx0fSk7XHRcclxuXHRcdEV2ZW50cy5hZGRMb2NhbExpc3RlbmVyKFwiY2xpZW50X2hpZGVfaW50ZXJhY3RfYnV0dG9uXCIsIChndWlkOiBzdHJpbmcpPT57XHJcblx0XHRcdHRoaXMuSGlkZUludGVyYWN0QnV0dG9uKGd1aWQpXHJcblx0XHR9KVxyXG5cdFx0Ly9cdTcwQjlcdTUxRkJcdThERjNcdThEQzNcdTYzMDlcdTk0QUUsXHU1RjAyXHU2QjY1XHU4M0I3XHU1M0Q2XHU0RUJBXHU3MjY5XHU1NDBFXHU2MjY3XHU4ODRDXHU4REYzXHU4REMzXHJcbiAgICAgICAgSnVtcEJ0bi5vblByZXNzZWQuYWRkKCgpPT57XHJcblx0XHRcdGlmICh0aGlzLkNoYXJhY3Rlcikge1xyXG5cdFx0XHRcdHRoaXMuQ2hhcmFjdGVyLmp1bXAoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRHYW1lcGxheS5hc3luY0dldEN1cnJlbnRQbGF5ZXIoKS50aGVuKChwbGF5ZXIpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuQ2hhcmFjdGVyID0gcGxheWVyLmNoYXJhY3RlcjtcclxuXHRcdFx0XHRcdC8vXHU4OUQyXHU4MjcyXHU2MjY3XHU4ODRDXHU4REYzXHU4REMzXHU1MjlGXHU4MEZEXHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3Rlci5qdW1wKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHRcclxuXHJcblx0XHQvL1x1NzBCOVx1NTFGQlx1NjUzQlx1NTFGQlx1NjMwOVx1OTRBRSxcdTVGMDJcdTZCNjVcdTgzQjdcdTUzRDZcdTRFQkFcdTcyNjlcdTU0MEVcdTYyNjdcdTg4NENcdTY1M0JcdTUxRkJcdTUyQThcdTRGNUNcclxuICAgICAgICBBdHRhY2tCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0XHRcdEdhbWVwbGF5LmFzeW5jR2V0Q3VycmVudFBsYXllcigpLnRoZW4oKHBsYXllcikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIgPSBwbGF5ZXIuY2hhcmFjdGVyO1xyXG5cdFx0XHRcdFx0Ly9cdThCQTlcdTUyQThcdTc1M0JcdTUzRUFcdTU3MjhcdTRFMEFcdTUzNEFcdThFQUJcdTY0QURcdTY1M0VcclxuXHRcdFx0XHRcdGxldCBhbmltMSA9IHBsYXllci5jaGFyYWN0ZXIubG9hZEFuaW1hdGlvbihcIjYxMjQ1XCIpO1xyXG5cdFx0XHRcdFx0YW5pbTEuc2xvdCA9IEdhbWVwbGF5LkFuaW1TbG90LlVwcGVyO1xyXG5cdFx0XHRcdFx0Ly9cdTg5RDJcdTgyNzJcdTYyNjdcdTg4NENcdTY1M0JcdTUxRkJcdTUyQThcdTRGNUNcclxuXHRcdFx0XHRcdGlmKGFuaW0xLmlzUGxheWluZyl7XHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdGFuaW0xLnBsYXkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pXHRcclxuXHJcblx0XHQvL1x1NzBCOVx1NTFGQlx1NEVBNFx1NEU5Mlx1NjMwOVx1OTRBRSxcdTVGMDJcdTZCNjVcdTgzQjdcdTUzRDZcdTRFQkFcdTcyNjlcdTU0MEVcdTYyNjdcdTg4NENcdTRFQTRcdTRFOTJcdTUyQThcdTRGNUNcclxuICAgICAgICB0aGlzLkludGVyYWN0QnRuLm9uUHJlc3NlZC5hZGQoKCk9PntcclxuXHRcdFx0dGhpcy5UcnlJbnRlcmFjdCgpXHJcblx0XHR9KVx0XHJcblx0XHRcclxuICAgIH1cclxuXHJcblx0LyoqIFxyXG5cdCAqIFx1Njc4NFx1OTAyMFVJXHU2NTg3XHU0RUY2XHU2MjEwXHU1MjlGXHU1NDBFXHVGRjBDb25TdGFydFx1NEU0Qlx1NTQwRSBcclxuXHQgKiBcdTVCRjlcdTRFOEVVSVx1NzY4NFx1NjgzOVx1ODI4Mlx1NzBCOVx1NzY4NFx1NkRGQlx1NTJBMFx1NjRDRFx1NEY1Q1x1RkYwQ1x1OEZEQlx1ODg0Q1x1OEMwM1x1NzUyOFxyXG5cdCAqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEJFNVx1NEU4Qlx1NEVGNlx1NTNFRlx1ODBGRFx1NEYxQVx1NTkxQVx1NkIyMVx1OEMwM1x1NzUyOFxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBvbkFkZGVkKCkge1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCAqIFx1Njc4NFx1OTAyMFVJXHU2NTg3XHU0RUY2XHU2MjEwXHU1MjlGXHU1NDBFXHVGRjBDb25BZGRlZFx1NEU0Qlx1NTQwRVxyXG5cdCAqIFx1NUJGOVx1NEU4RVVJXHU3Njg0XHU2ODM5XHU4MjgyXHU3MEI5XHU3Njg0XHU3OUZCXHU5NjY0XHU2NENEXHU0RjVDXHVGRjBDXHU4RkRCXHU4ODRDXHU4QzAzXHU3NTI4XHJcblx0ICogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkU1XHU0RThCXHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1OTFBXHU2QjIxXHU4QzAzXHU3NTI4XHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uUmVtb3ZlZCgpIHtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQqIFx1Njc4NFx1OTAyMFVJXHU2NTg3XHU0RUY2XHU2MjEwXHU1MjlGXHU1NDBFXHVGRjBDVUlcdTVCRjlcdThDNjFcdTUxOERcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdThDMDNcdTc1MjggXHJcblx0KiBcdTZDRThcdTYxMEZcdUZGMUFcdThGRDlcdTRFNEJcdTU0MEVVSVx1NUJGOVx1OEM2MVx1NURGMlx1N0VDRlx1ODhBQlx1OTUwMFx1NkJDMVx1NEU4Nlx1RkYwQ1x1OTcwMFx1ODk4MVx1NzlGQlx1OTY2NFx1NjI0MFx1NjcwOVx1NUJGOVx1OEJFNVx1NjU4N1x1NEVGNlx1NTQ4Q1VJXHU3NkY4XHU1MTczXHU1QkY5XHU4QzYxXHU0RUU1XHU1M0NBXHU1QjUwXHU1QkY5XHU4QzYxXHU3Njg0XHU1RjE1XHU3NTI4XHJcblx0Ki9cclxuXHRwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0KiBcdTZCQ0ZcdTRFMDBcdTVFMjdcdThDMDNcdTc1MjhcclxuXHQqIFx1OTAxQVx1OEZDN2NhblVwZGF0ZVx1NTNFRlx1NEVFNVx1NUYwMFx1NTQyRlx1NTE3M1x1OTVFRFx1OEMwM1x1NzUyOFxyXG5cdCogZHQgXHU0RTI0XHU1RTI3XHU4QzAzXHU3NTI4XHU3Njg0XHU2NUY2XHU5NUY0XHU1REVFXHVGRjBDXHU2QkVCXHU3OUQyXHJcblx0Ki9cclxuXHQvL3Byb3RlY3RlZCBvblVwZGF0ZShkdCA6bnVtYmVyKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1OEJCRVx1N0Y2RVx1NjYzRVx1NzkzQVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uU2hvdyguLi5wYXJhbXM6YW55W10pIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU4QkJFXHU3RjZFXHU0RTBEXHU2NjNFXHU3OTNBXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25IaWRlKCkge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTVGNTNcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NjYyRlx1NTNFRlx1NEVFNVx1NjNBNVx1NjUzNlx1NEU4Qlx1NEVGNlx1NzY4NFx1NjVGNlx1NTAxOVxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVRvdWNoXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICogXHU4RkQ0XHU1NkRFXHU0RThCXHU0RUY2XHU2NjJGXHU1NDI2XHU1OTA0XHU3NDA2XHU0RTg2XHJcblx0ICogXHU1OTgyXHU2NzlDXHU1OTA0XHU3NDA2XHU0RTg2XHVGRjBDXHU5MEEzXHU0RTQ4XHU4RkQ5XHU0RTJBVUlcdTc1NENcdTk3NjJcdTUzRUZcdTRFRTVcdTYzQTVcdTY1MzZcdThGRDlcdTZCMjFUb3VjaFx1NTQwRVx1N0VFRFx1NzY4NE1vdmVcdTU0OENFbmRcdTRFOEJcdTRFRjZcclxuXHQgKiBcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTU5MDRcdTc0MDZcdUZGMENcdTkwQTNcdTRFNDhcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NUMzMVx1NjVFMFx1NkNENVx1NjNBNVx1NjUzNlx1OEZEOVx1NkIyMVRvdWNoXHU1NDBFXHU3RUVEXHU3Njg0TW92ZVx1NTQ4Q0VuZFx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVG91Y2hTdGFydGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTUxOERVSVx1NzU0Q1x1OTc2Mlx1NEUwQVx1NzlGQlx1NTJBOFx1NjVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVG91Y2hNb3ZlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU3OUJCXHU1RjAwVUlcdTc1NENcdTk3NjJcdTY1RjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBPblRvdWNoRW5kZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NUY1M1x1NTcyOFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU4QzAzXHU3NTI4ZGV0ZWN0RHJhZy9kZXRlY3REcmFnSWZQcmVzc2VkXHU2NUY2XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxXHJcblx0ICogXHU1M0VGXHU0RUU1XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxXHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU3Njg0XHU1RjAwXHU1OUNCXHU3NTFGXHU2MjEwXHJcblx0ICogXHU4RkQ0XHU1NkRFXHU0RTAwXHU2QjIxXHU3NTFGXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2IG5ld0RyYWdEcm9wXHU1M0VGXHU0RUU1XHU3NTFGXHU2MjEwXHU0RTAwXHU2QjIxXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnRGV0ZWN0ZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpOlVJLkRyYWdEcm9wT3BlcmF0aW9uIHtcclxuXHQvL1x0cmV0dXJuIHRoaXMubmV3RHJhZ0Ryb3AobnVsbCk7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1N0VDRlx1OEZDN1x1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICogXHU4RkQ0XHU1NkRFdHJ1ZVx1NzY4NFx1OEJERFx1ODg2OFx1NzkzQVx1NTkwNFx1NzQwNlx1NEU4Nlx1OEZEOVx1NkIyMVx1NEU4Qlx1NEVGNlx1RkYwQ1x1NEUwRFx1NEYxQVx1NTE4RFx1NUY4MFx1OEZEOVx1NEUyQVVJXHU3Njg0XHU0RTBCXHU0RTAwXHU1QzQyXHU3Njg0VUlcdTdFRTdcdTdFRURcdTUxOTJcdTZDRTFcdThGRDlcdTRFMkFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdPdmVyKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKTpib29sZWFuIHtcclxuXHQvL1x0cmV0dXJuIHRydWU7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NTcyOFx1OEZEOVx1NEUyQVVJXHU5MUNBXHU2NTNFXHU1QjhDXHU2MjEwXHU2NUY2XHJcblx0ICogXHU4RkQ0XHU1NkRFdHJ1ZVx1NzY4NFx1OEJERFx1ODg2OFx1NzkzQVx1NTkwNFx1NzQwNlx1NEU4Nlx1OEZEOVx1NkIyMVx1NEU4Qlx1NEVGNlx1RkYwQ1x1NEUwRFx1NEYxQVx1NTE4RFx1NUY4MFx1OEZEOVx1NEUyQVVJXHU3Njg0XHU0RTBCXHU0RTAwXHU1QzQyXHU3Njg0VUlcdTdFRTdcdTdFRURcdTUxOTJcdTZDRTFcdThGRDlcdTRFMkFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyb3AoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU4RkRCXHU1MTY1XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdFbnRlcihJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQsSW5EcmFnRHJvcE9wZXJhdGlvbjpVSS5EcmFnRHJvcE9wZXJhdGlvbikge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdTc5QkJcdTVGMDBcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0xlYXZlKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCkge1xyXG5cdC8vfVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1RkYwQ1x1NkNBMVx1NjcwOVx1NUI4Q1x1NjIxMFx1NUI4Q1x1NjIxMFx1NzY4NFx1NjJENlx1NjJGRFx1NEU4Qlx1NEVGNlx1ODAwQ1x1NTNENlx1NkQ4OFx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0NhbmNlbGxlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQpIHtcclxuXHQvL31cclxuXHJcbn1cclxuIiwgIlx1RkVGRlxyXG5AQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25zdGVyQmFzZSBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuXHJcbiAgICAvKiogXHU1RjUzXHU4MTFBXHU2NzJDXHU4OEFCXHU1QjlFXHU0RjhCXHU1NDBFXHVGRjBDXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU1RTI3XHU2NkY0XHU2NUIwXHU1MjREXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU0NjhcdTY3MUZcdTUxRkRcdTY1NzAgXHU2QkNGXHU1RTI3XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTUxRkRcdTY1NzBcdTYyNjdcdTg4NENcdTk3MDBcdTg5ODFcdTVDMDZ0aGlzLnVzZVVwZGF0ZVx1OEQ0Qlx1NTAzQ1x1NEUzQXRydWVcclxuICAgICAqIEBwYXJhbSBkdCBcdTVGNTNcdTUyNERcdTVFMjdcdTRFMEVcdTRFMEFcdTRFMDBcdTVFMjdcdTc2ODRcdTVFRjZcdThGREYgLyBcdTc5RDJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODExQVx1NjcyQ1x1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1NjcwMFx1NTQwRVx1NEUwMFx1NUUyN1x1NjI2N1x1ODg0Q1x1NUI4Q1x1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGaW1wb3J0IEludGVyYWN0QWN0b3IgZnJvbSBcIi4uL0ludGVyZmFjZS9JSW50ZXJhY3Rpb25cIjtcclxuXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY19JbnRlcmFjdE9iamVjdCBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgZ3VpZExpc3Q6IE1hcDxzdHJpbmcsIEludGVyYWN0QWN0b3I+ID0gbmV3IE1hcDxzdHJpbmcsIEludGVyYWN0QWN0b3I+O1xyXG4gICAgcHJpdmF0ZSBhYyA6IEludGVyYWN0QWN0b3I7XHJcbiAgICAvKiogXHU1RjUzXHU4MTFBXHU2NzJDXHU4OEFCXHU1QjlFXHU0RjhCXHU1NDBFXHVGRjBDXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU1RTI3XHU2NkY0XHU2NUIwXHU1MjREXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU0NjhcdTY3MUZcdTUxRkRcdTY1NzAgXHU2QkNGXHU1RTI3XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTUxRkRcdTY1NzBcdTYyNjdcdTg4NENcdTk3MDBcdTg5ODFcdTVDMDZ0aGlzLnVzZVVwZGF0ZVx1OEQ0Qlx1NTAzQ1x1NEUzQXRydWVcclxuICAgICAqIEBwYXJhbSBkdCBcdTVGNTNcdTUyNERcdTVFMjdcdTRFMEVcdTRFMEFcdTRFMDBcdTVFMjdcdTc2ODRcdTVFRjZcdThGREYgLyBcdTc5RDJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODExQVx1NjcyQ1x1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1NjcwMFx1NTQwRVx1NEUwMFx1NUUyN1x1NjI2N1x1ODg0Q1x1NUI4Q1x1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RBY3RvciBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuICAgIC8qKlxyXG4gICAgICogXHU0RUE0XHU0RTkyXHU3MjY5XHU3Njg0XHU1NzNBXHU2NjZGXHU0RTJEXHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbV9PYmplY3Q6IEdhbWVPYmplY3Q7XHJcbiAgICBwcml2YXRlIG1fdHJpZ2dlcjogVHJpZ2dlcjtcclxuICAgIHByaXZhdGUgbV9ndWlkOnN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1fT2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0XHJcbiAgICAgICAgdGhpcy5tX3RyaWdnZXIgPSA8VHJpZ2dlcj50aGlzLm1fT2JqZWN0LmdldENoaWxkQnlOYW1lKFwiVHJpZ2dlclwiKSBcclxuICAgICAgICB0aGlzLm1fZ3VpZCA9IHRoaXMubV9PYmplY3QuZ3VpZDtcclxuICAgICAgICB0aGlzLm1fdHJpZ2dlci5vbkVudGVyLmFkZChnbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gXHU1MjI0XHU2NUFEXHU4RkRCXHU1MTY1XHU3OEIwXHU2NDlFXHU1MzNBXHU1N0RGXHU3Njg0XHU1QkY5XHU4QzYxXHU2NjJGXHU1NDI2XHU0RTNBXHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgIGlmICghKGdvIGluc3RhbmNlb2YgR2FtZXBsYXkuQ2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gXHU0RTBEXHU2NjJGXHU4OUQyXHU4MjcyXHVGRjBDXHU1MDVDXHU2QjYyXHU2MjY3XHU4ODRDXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBnbyA9IDxHYW1lcGxheS5DaGFyYWN0ZXI+Z29cclxuICAgICAgICAgICAgaWYgKCEoZ28gPT0gZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU5NzVFXHU2NzJDXHU1NzMwXHU3M0E5XHU1QkI2XHU2M0E3XHU1MjM2XHU3Njg0XHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChcImNsaWVudF9zaG93X2ludGVyYWN0X2J1dHRvblwiLCB0aGlzLm1fZ3VpZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV90cmlnZ2VyLm9uTGVhdmUuYWRkKGdvID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBcdTUyMjRcdTY1QURcdThGREJcdTUxNjVcdTc4QjBcdTY0OUVcdTUzM0FcdTU3REZcdTc2ODRcdTVCRjlcdThDNjFcdTY2MkZcdTU0MjZcdTRFM0FcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgaWYgKCEoZ28gaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdTRFMERcdTY2MkZcdTg5RDJcdTgyNzJcdUZGMENcdTUwNUNcdTZCNjJcdTYyNjdcdTg4NENcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbyA9IDxHYW1lcGxheS5DaGFyYWN0ZXI+Z29cclxuICAgICAgICAgICAgaWYgKCEoZ28gPT0gZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU5NzVFXHU2NzJDXHU1NzMwXHU3M0E5XHU1QkI2XHU2M0E3XHU1MjM2XHU3Njg0XHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChcImNsaWVudF9oaWRlX2ludGVyYWN0X2J1dHRvblwiLCB0aGlzLm1fZ3VpZClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUE0XHU0RTkyXHU3MjY5XHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJbml0KGd1aWQgOiBzdHJpbmcsIHRyYW5zZm9ybSA6IFRyYW5zZm9ybSkgOnN0cmluZ3tcclxuICAgICAgICB0aGlzLm1fT2JqZWN0ID0gR2FtZU9iamVjdC5zcGF3bih7Z3VpZDogZ3VpZCwgcmVwbGljYXRlcyA6IHRydWUsIHRyYW5zZm9ybSA6IHRyYW5zZm9ybX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tX2d1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzQ2xpZW50KCkgOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCk7XHJcbiAgICB9XHJcbiAgICAvKipcdTVGMDBcdTU5Q0JcdTRFQTRcdTRFOTJcdUZGMENcdTc1MzFcdTVCQTJcdTYyMzdcdTdBRUZVSVx1NUM0Mlx1OTc2Mlx1NTNEMVx1OEQ3NyovXHJcbiAgICBwdWJsaWMgT25JbnRlcmFjdChwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgaWYgKHRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5JbnRlcmFjdEltcGxlbWVudChwbGF5ZXIsIGluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLkZ1bmN0aW9uKENvcmUuU2VydmVyKVxyXG4gICAgcHJvdGVjdGVkIEludGVyYWN0SW1wbGVtZW50KHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICB0aGlzLkRvT25TZXJ2ZXIocGxheWVyLCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5Eb09uQ2xpZW50KHBsYXllciwgaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTJcdTYyMzdcdTdBRUZcdTg5RTZcdTUzRDFcdUZGMENcdTU3MjhcdTUzRDFcdTc1MUZcdTRFQTRcdTRFOTJcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgQENvcmUuRnVuY3Rpb24oQ29yZS5DbGllbnQpXHJcbiAgICBwcm90ZWN0ZWQgRG9PbkNsaWVudChwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NUJBMlx1NjIzN1x1N0FFRlx1NEVBN1x1NzUxRlx1NEVBNFx1NEU5Mlx1RkYwQ1x1NzNBOVx1NUJCNicsIHBsYXllcilcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU2NzBEXHU1MkExXHU3QUVGXHU4OUU2XHU1M0QxXHVGRjBDXHU1NzI4XHU1M0QxXHU3NTFGXHU0RUE0XHU0RTkyXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLkZ1bmN0aW9uKENvcmUuU2VydmVyKVxyXG4gICAgcHJvdGVjdGVkIERvT25TZXJ2ZXIocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTY3MERcdTUyQTFcdTdBRUZcdTRFQTdcdTc1MUZcdTRFQTRcdTRFOTJcdUZGMENcdTczQTlcdTVCQjYnLCBwbGF5ZXIpXHJcbiAgICB9XHJcbn1cclxuIiwgIlx1RkVGRi8qKlx1NzNBOVx1NUJCNlx1NUM1RVx1NjAyN1x1NTQwQ1x1NkI2NVx1N0M3Qlx1RkYwQ1x1NEUxNlx1NzU0Q1x1NEUyRFx1NkJDRlx1NjcwOVx1NEUwMFx1NEUyQVx1NzNBOVx1NUJCNlx1RkYwQ1x1NUMzMVx1NEYxQVx1NTcyOFx1NUJGOVx1OEM2MVx1NEUwQlx1OTc2Mlx1NTIxQlx1NUVGQVx1NEUwMFx1NEUyQVx1NkI2NFx1ODExQVx1NjcyQ1x1Njc2NVx1NUJGOVx1NUU5NFx1NkI2NFx1NzNBOVx1NUJCNiAqL1xyXG5AQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBdHRyIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG5cclxuICAgIHB1YmxpYyBjaGFyYWN0ZXI6R2FtZXBsYXkuQ2hhcmFjdGVyXHJcbiAgICBAQ29yZS5Qcm9wZXJ0eSh7ZGlzcGxheU5hbWU6ICdcdTg4NDBcdTkxQ0YnLCByZXBsaWNhdGVkIDogdHJ1ZX0pXHJcbiAgICBwdWJsaWMgaHAgOiBudW1iZXIgPSAxMDBcclxuICAgIEBDb3JlLlByb3BlcnR5KHtkaXNwbGF5TmFtZTogJ1x1NjcwMFx1NTkyN1x1ODg0MFx1OTFDRicsIHJlcGxpY2F0ZWQgOiB0cnVlfSlcclxuICAgIHB1YmxpYyBtYXhIcCA6IG51bWJlclxyXG4gICAgLyoqIFx1NUY1M1x1ODExQVx1NjcyQ1x1ODhBQlx1NUI5RVx1NEY4Qlx1NTQwRVx1RkYwQ1x1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NUUyN1x1NjZGNFx1NjVCMFx1NTI0RFx1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NTIxQlx1NUVGQVx1NjIxMFx1NTI5Rlx1ODExQVx1NjcyQycgKyB0aGlzLmd1aWQpXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIEluaXREYXRhKGMgOiBHYW1lcGxheS5DaGFyYWN0ZXIpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNSdW5uaW5nQ2xpZW50KCkpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjXHJcbiAgICAgICAgdGhpcy5tYXhIcCA9IDEwMFxyXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NzNBOVx1NUJCNlx1NUM1RVx1NjAyN1x1ODExQVx1NjcyQ1x1NTIxRFx1NTlDQlx1NTMxNlx1NUI4Q1x1NjIxMCcpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJpbXBvcnQgeyBQbGF5ZXJHdW5NZ3IgfSBmcm9tIFwiLi9QbGF5ZXJHdW5NZ3JcIlxyXG5pbXBvcnQgeyBDYW1lcmFDb250cm9sbGVyIH0gZnJvbSBcIi4vV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXJcIlxyXG5cclxuLyoqXHJcbiAqIFx1NjdBQVx1NjhCMFx1NkEyMVx1NTc1N1x1RkYxQVx1NzNBOVx1NUJCNlx1ODg0Q1x1NEUzQVx1NjgxMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXllckJlaGF2aW9yIHtcclxuICAgIHBsYXllcjogR2FtZXBsYXkuQ2hhcmFjdGVyXHJcbiAgICBzdGF0ZTogR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtXHJcbiAgICAvKipcdTRFMERcdTU0MENcdTgwNENcdTRFMUFcdTc2ODRcdTkxNERcdTkwMUYgKi9cclxuICAgIFNwZWVkU3RkQ29lZnQ6IG51bWJlclxyXG4gICAgLyoqXHU0RUJBXHU3MjY5XHU3OUZCXHU1MkE4XHU3MkI2XHU2MDAxXHU3Q0ZCXHU2NTcwICovXHJcbiAgICBjb2VmSW5lcnRpYTogbnVtYmVyXHJcbiAgICAvKipcdTRFQkFcdTcyNjlcdTUyQTBcdTkwMUZcdTVFQTZcdTdDRkJcdTY1NzAgKi9cclxuICAgIEluZXJQYXJhOiBudW1iZXJcclxuICAgIEd1bldlaWdodDogbnVtYmVyXHJcbiAgICBCZWhKdWRnZVRhYjogTWFwPHN0cmluZywgYm9vbGVhbj5cclxuICAgIGtleURvd25UYWI6IEFycmF5PHN0cmluZz5cclxuXHJcbiAgICAvLyBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEZcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxheWVyQmVoYXZpb3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoUGxheWVyQmVoYXZpb3IuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgUGxheWVyQmVoYXZpb3IuX2luc3RhbmNlID0gbmV3IFBsYXllckJlaGF2aW9yKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllckJlaGF2aW9yLl9pbnN0YW5jZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBCaW5kRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICAgIEV2ZW50cy5hZGRTZXJ2ZXJMaXN0ZW5lcihFdmVudENvbnN0LkNsaWVudEV2ZW50Lk9uRXF1aXBXZWFwb25FdmVudCwgdGhpcy5PbkVxdWlwV2VhcG9uRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICAgICAgRXZlbnRzLmFkZExvY2FsTGlzdGVuZXIoRXZlbnRDb25zdC5DbGllbnRFdmVudC5PbkVxdWlwV2VhcG9uRXZlbnQsIHRoaXMuT25FcXVpcFdlYXBvbkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgICAgIC8vRXZlbnRzLmFkZFNlcnZlckxpc3RlbmVyKEV2ZW50Q29uc3QuQ2xpZW50RXZlbnQuY2gsIHRoaXMuQ2hhbmdlT2NjRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBJbml0aWFsRGF0YVJlYWQoKSB7XHJcbiAgICAgICAgLyoqXHU3M0E5XHU1QkI2XHU4ODRDXHU0RTNBXHU1MjI0XHU2NUFEXHU1M0MyXHU2NTcwICovXHJcbiAgICAgICAgdGhpcy5CZWhKdWRnZVRhYiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPihbXHJcbiAgICAgICAgICAgIFtcIlJ1blwiLCBmYWxzZV0sXHJcbiAgICAgICAgICAgIFtcIkNyb3VjaFwiLCBmYWxzZV0sXHJcbiAgICAgICAgICAgIFtcIlF1aWNrbHlcIiwgZmFsc2VdLFxyXG4gICAgICAgICAgICBbXCJBaW1cIiwgZmFsc2VdLFxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5rZXlEb3duVGFiID0gW11cclxuICAgIH1cclxuICAgIHByaXZhdGUgSW5pdFBsYXllckF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubWF4SnVtcEhlaWdodCA9IDFcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU4OEM1XHU1OTA3XHU2N0FBXHU2NkY0XHU2NUIwXHU4REYzXHU4REMzXHU5MDFGXHU1RUE2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgT25FcXVpcFdlYXBvbkV2ZW50SGFuZGxlcigpIHtcclxuICAgICAgICBpZiAoUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1biA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMucGxheWVyLm1heEp1bXBIZWlnaHQgPSBcclxuICAgIH1cclxuICAgIHByaXZhdGUgQ2hhbmdlT2NjRXZlbnRIYW5kbGVyKG9jY0lkOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcdTczQTlcdTVCQjZcdTg4NENcdTRFM0FcdTUyMjRcdTY1QUQgKi9cclxuICAgIHByaXZhdGUgUGxheWVyQmVoYXZpb3JDaGFuZ2VkKF9iZWhhdmlvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQmVoSnVkZ2VUYWIuZ2V0KF9iZWhhdmlvcikpIHtcclxuICAgICAgICAgICAgdGhpcy5CZWhKdWRnZVRhYi5zZXQoX2JlaGF2aW9yLCBmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiLnNldChfYmVoYXZpb3IsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQmVoSnVkZ2VUYWIuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93blRhYi5wdXNoKGtleSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHRoaXMua2V5RG93blRhYi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5RG93blRhYlswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnUnVuJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5SdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleURvd25UYWIubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duVGFiLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDcm91Y2gnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5Dcm91Y2hSdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1F1aWNrbHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5RdWlja2x5UnVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdBaW0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5BaW1SdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlEb3duVGFiLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5RG93blRhYi5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUXVpY2tseSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlF1aWNrbHlDcm91Y2hSdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FpbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkFpbUNyb3VjaFJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2V5RG93blRhYiA9IFtdXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFBsYXllck1vZGVDaGFuZ2VkKG1vZGVOYW1lOiBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0pIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbW9kZU5hbWVcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIERpZmZEaXJlTW92ZW1lbnQoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU2NDQ3XHU2NzQ2XHU3Njg0XHU0RjREXHU3OUZCXHU1NzUwXHU2ODA3XHU1MjREXHU0RTAwXHU1RTI3XHU0RTNBZGlyZWN0aW9uRmFjdG9yLFx1NTQwRVx1NEUwMFx1NUUyN1x1NEUzQVx1NTM5Rlx1NzBCOVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBVcGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuRGlmZkRpcmVNb3ZlbWVudChkdClcclxuICAgICAgICB0aGlzLkNoYXJhY3RlclN0YXJ0SW5lcnRpYSgpXHJcbiAgICAgICAgLy9cdTY2RjRcdTY1QjBcdTkwMUZcdTVFQTZcclxuICAgICAgICBsZXQgc3BkOiBudW1iZXJcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5BaW1Dcm91Y2hSdW46XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkFpbVJ1bjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQ3JvdWNoUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5RdWlja2x5Q3JvdWNoUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5RdWlja2x5UnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLm1heFdhbGtTcGVlZCA9IHNwZCAqIHRoaXMuU3BlZWRTdGRDb2VmdCAqIHRoaXMuY29lZkluZXJ0aWEgKiB0aGlzLkd1bldlaWdodCAqIDFcclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIENoYXJhY3RlclN0YXJ0SW5lcnRpYSgpIHtcclxuICAgICAgICBpZihQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuKXtcclxuICAgICAgICAgICAgdGhpcy5HdW5XZWlnaHQgPSAxIC8gUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1bi5fY29uZmlnRGF0YS53ZWlnaHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFBsYXllckp1bXAoKSB7XHJcbiAgICAgICAgLy9cdTczQTlcdTVCQjZcdTVGNTNcdTUyNERcdTRFMERcdTU3MjhcdThERjNcdThEQzNcdTcyQjZcdTYwMDFcdTVFNzZcdTRFMTRcdTZDQTFcdTY3MDlcdTZCN0JcdTRFQTFcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuaXNKdW1waW5nKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmlzQ3JvdWNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jcm91Y2goZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllckJlaGF2aW9yQ2hhbmdlZChcIkNyb3VjaFwiKVxyXG4gICAgICAgICAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5Dcm91Y2goKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFBsYXllckd1bk1nci5JbnN0YW5jZS5jdXJHdW4gJiYgUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1bi5faXNab29tSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuLk1lY2hhbmljYWxBaW1TdG9wKCkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQbGF5ZXJDcm91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5QbGF5ZXJCZWhhdmlvckNoYW5nZWQoXCJDcm91Y2hcIilcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuaXNDcm91Y2hpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jcm91Y2godHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY3JvdWNoKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLkNyb3VjaCgpXHJcbiAgICB9XHJcbiAgICBDcm91Y2hSZXNldCgpe1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLmlzQ3JvdWNoaW5nKXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBJbml0c2V0T3JSZXNldCgpe1xyXG4gICAgICAgIHRoaXMuQ3JvdWNoUmVzZXQoKVxyXG5cclxuICAgICAgICB0aGlzLkluaXRpYWxEYXRhUmVhZCgpXHJcbiAgICAgICAgdGhpcy5Jbml0UGxheWVyQXR0cmlidXRlcygpXHJcbiAgICAgICAgdGhpcy5QbGF5ZXJCZWhhdmlvckNoYW5nZWQoXCJSdW5cIilcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIjtcclxuaW1wb3J0IHsgVHdlZW5VdGlsIH0gZnJvbSBcIi4uL1Rvb2wvVHdlZW5VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQ29udHJvbGxlcntcclxuICAgIG1fY2FtZXJhOiBDYW1lcmFTeXN0ZW1cclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIG9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9jdXJyZW50SGVpZ2h0IDogbnVtYmVyXHJcbiAgICBtX3N1cHBvc2VkSGVpZ2h0IDogbnVtYmVyXHJcbiAgICBkZWx0YU9mZnNldCA6IFZlY3RvclxyXG4gICAgZmllbGRPZlZpZXcgOiBudW1iZXJcclxuICAgIGRlbHRhVGhldGEgOiBudW1iZXJcclxuICAgIGdhbW1hIDogbnVtYmVyXHJcbiAgICBkaXN0YW5jZSA6IG51bWJlclxyXG4gICAgZGVsdGFQaHkgOiBudW1iZXJcclxuICAgIHNoYWtlVGltZSA6IG51bWJlclxyXG4gICAgc2hha2VTdHJlbnRoIDogbnVtYmVyXHJcblxyXG4gICAgY3JvdWNoQ29udHJvbGxlciA6IFR3ZWVuVXRpbFxyXG4gICAgU2hha2VDb250cm9sbGVyIDogVHdlZW5VdGlsXHJcbiAgICAvLyBcdTUzNTVcdTRGOEJcdTZBMjFcdTVGMEZcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ2FtZXJhQ29udHJvbGxlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChDYW1lcmFDb250cm9sbGVyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIENhbWVyYUNvbnRyb2xsZXIuX2luc3RhbmNlID0gbmV3IENhbWVyYUNvbnRyb2xsZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQ2FtZXJhQ29udHJvbGxlci5faW5zdGFuY2VcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JvdWNoQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwLjRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxIDogbnVtYmVyLCB0MiA6IG51bWJlciwgdDMgOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZEhlaWdodCA9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuY2Fwc3VsZUhhbGZIZWlnaHQgKiAyXHJcbiAgICAgICAgICAgICAgICBsZXQgZmluID0gdGhpcy5tX2N1cnJlbnRIZWlnaHQgKyAxMCAqIHQzICogKHRoaXMubV9zdXBwb3NlZEhlaWdodCAtIHRoaXMubV9jdXJyZW50SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRIZWlnaHQgPSBmaW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRIZWlnaHQgPSB0aGlzLm1fc3VwcG9zZWRIZWlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLlNoYWtlQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWtlVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDEgOiBudW1iZXIsIHQyIDogbnVtYmVyLCB0MyA6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YU9mZnNldCA9IG5ldyBWZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aCksXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aCksXHJcbiAgICAgICAgICAgICAgICAgICAgV2VhcG9uVG9vbC5TaGFrZSh0aGlzLnNoYWtlU3RyZW50aClcclxuICAgICAgICAgICAgICAgICkubXVsdGlwbHkodDEgLyB0MilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YU9mZnNldCA9IG5ldyBWZWN0b3IoMCwgMCwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFVwZGF0ZShkdDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5jcm91Y2hDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuY3JvdWNoQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5TaGFrZUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5jcm91Y2hDb250cm9sbGVyLCBkdClcclxuICAgICAgICBpZih0aGlzLmRlbHRhUGh5ICE9IDApe1xyXG4gICAgICAgICAgICAvL0dhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIubG9va0F0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgQ3JvdWNoKCl7XHJcbiAgICAgICAgdGhpcy5jcm91Y2hDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5jcm91Y2hDb250cm9sbGVyKVxyXG4gICAgICAgIGlmKHRoaXMuZ3VuICYmIHRoaXMuZ3VuLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICB0aGlzLmd1bi5fY2FtZXJhQ29udHJvbC5Dcm91Y2goKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFNldE9mZnNldCgpe1xyXG4gICAgICAgIHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0ubG9jYXRpb24gPSB0aGlzLm9mZnNldC5hZGQoVmVjdG9yLnVwLm11bHRpcGx5KHRoaXMubV9jdXJyZW50SGVpZ2h0KSkuYWRkKHRoaXMuZGVsdGFPZmZzZXQpXHJcbiAgICB9XHJcbiAgICBDYW1lcmFTaGFrZShzdHJlbmd0aDpudW1iZXIsIHRpbWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnNoYWtlU3RyZW50aCA9IHN0cmVuZ3RoXHJcbiAgICAgICAgdGhpcy5zaGFrZVRpbWUgPSB0aW1lXHJcbiAgICAgICAgdGhpcy5TaGFrZUNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLlNoYWtlQ29udHJvbGxlcilcclxuICAgIH1cclxufSIsICJpbXBvcnQgeyBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQWNjZXNzb3J5QmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25DYW1lcmFDbHMgfSBmcm9tIFwiLi9XZWFwb25DYW1lcmFDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uTWFnYXppbmVDbHMgfSBmcm9tIFwiLi9XZWFwb25NYWdhemluZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25SZWNvaWxDbHMgfSBmcm9tIFwiLi9XZWFwb25SZWNvaWxDbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgV2VhcG9uVG9vbHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBJbml0V2VhcG9uQ29uZmlnKF93ZWFwb246V2VhcG9uQmFzZUNscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbk1hZ2F6aW5lQ29uZmlnKF9tYWdhemluZTpXZWFwb25NYWdhemluZUNscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvblJlY29pbENvbmZpZyhfcmVjb2lsOldlYXBvblJlY29pbENscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbkNhbWVyYUNvbmZpZyhfY2FtZXJhOldlYXBvbkNhbWVyYUNscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbkFjY2Vzc29yeUNvbmZpZyhfYWNjZXNzb3J5OldlYXBvbkFjY2Vzc29yeUJhc2VDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFNoYWtlKF9zdHJlbmd0aDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiBfc3RyZW5ndGggKiAoTWF0aC5yYW5kb20oKSAtIDAuNSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1QzA2XHU0RTAwXHU0RTJBXHU1NDExXHU5MUNGXHVGRjBDXHU2MzA5XHU3MTY3XHU3RUQ5XHU1QjlBXHU3Njg0XHU2NUNCXHU4RjZDXHU4Rjc0XHVGRjBDXHU2NUNCXHU4RjZDXHU2MzA3XHU1QjlBXHU1RjI3XHU1RUE2XHU0RTRCXHU1NDBFXHU1Rjk3XHU1MjMwXHU0RTAwXHU0RTJBXHU2NUIwXHU3Njg0XHU1NDExXHU5MUNGXHJcbiAgICAgKiBAcGFyYW0gc291cmNlIFx1NkU5MFx1NTQxMVx1OTFDRlxyXG4gICAgICogQHBhcmFtIGF4aXMgXHU2NUNCXHU4RjZDXHU4Rjc0XHJcbiAgICAgKiBAcGFyYW0gYW5nbGUgXHU2NUNCXHU4RjZDXHU4OUQyXHU1RUE2XHU1MDNDXHJcbiAgICAgKiBAcmV0dXJucyBcdTdFRDNcdTY3OUNcdTU0MTFcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFJvdGF0ZVZlY3Rvcihzb3VyY2U6VmVjdG9yLCBheGlzIDogVmVjdG9yLCBhbmdsZSA6IG51bWJlcik6VmVjdG9ye1xyXG4gICAgICAgIGxldCBybyA9IHNvdXJjZS50b1JvdGF0aW9uKClcclxuICAgICAgICBsZXQgcXUgPSByby50b1F1YXRlcm5pb24oKVxyXG4gICAgICAgIGxldCBvdXRlciA6IFF1YXRlcm5pb25cclxuICAgICAgICBhbmdsZSA9IGFuZ2xlIFxyXG4gICAgICAgIFF1YXRlcm5pb24uZnJvbUF4aXNBbmdsZShheGlzLCBhbmdsZSwgb3V0ZXIpXHJcbiAgICAgICAgbGV0IHJlcyA6IFZlY3RvclxyXG4gICAgICAgIFF1YXRlcm5pb24ubXVsdGlwbHlWZWN0b3Ioc291cmNlLCBvdXRlciwgcmVzKVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU4RjkzXHU1MUZBXHU0RTA5XHU1MDBEXHU2ODA3XHU1MUM2XHU1REVFXHU0RTNBMSBcdTc2ODRcdTUyMDZcdTVFMDNcdTU3MjhcdUZGMDgtMVx1RkYwQyAxXHVGRjA5XHU0RTRCXHU5NUY0XHU3Njg0XHU2QjYzXHU2MDAxXHU1MjA2XHU1RTAzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHYXVzc1JhbmRvbSgpIDogbnVtYmVye1xyXG4gICAgICAgIGxldCB1ID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGxldCB2ID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGxldCB6ID0gTWF0aC5zcXJ0KC0yICogTWF0aC5sb2codSkpICogTWF0aC5jb3MoMiAqIE1hdGguUEkgKiB2KVxyXG4gICAgICAgIHogPSAoIHogKyAzKSAvIDZcclxuICAgICAgICB6ID0geiAqIDIgLSAxXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHopID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gR2F1c3NSYW5kb20oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gelxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdBOTdcdTUxRkRcdTY1NzBcdUZGMENcdTU3MjhcdTVDMEZcdTRFOEVBXHU2NUY2XHU0RkREXHU2MzAxXHU1MzlGXHU1MDNDXHVGRjBDXHU1NzI4XHU1OTI3XHU0RThFQVx1NjVGNlx1OTAxMFx1NkUxMFx1OEQ4Qlx1OEZEMVx1NEU4RTFcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFzeW1wdG90ZSh4IDogbnVtYmVyLCBBIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBBID0gQSB8fCAwLjRcclxuICAgICAgICBpZihBIDw9IDAgfHwgQSA+PSAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih4IDwgMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ggc2hvdWxkIGJlIHBvc2l0aXZlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeCA8PSBBKXtcclxuICAgICAgICAgICAgcmV0dXJuIHhcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDEgKyAoMyAqIEEgKiBBIC0gMiAqIEEpIC8geCArIChBICogQSAtIDIgKiBBICogQSAqIEEpIC8geCAvIHhcclxuICAgIH1cclxuICAgIC8qKlx1NTNDQ1x1OEZCOVx1NTNFRlx1NzUyOFx1NzY4NFx1N0E5N1x1NTFGRFx1NjU3MChcdTY2NkVcdTkwMUFcdTdBOTdcdTUxRkRcdTY1NzBcdTc2ODRcdTU5NDdcdTVFRjZcdTYyRDMpICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXN5bXRvdGVCaSh4IDogbnVtYmVyLCBBIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBBID0gQSB8fCAwLjRcclxuICAgICAgICBpZihBIDw9IDAgfHwgQSA+PSAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih4ID49IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gQXN5bXB0b3RlKHgsIEEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtQXN5bXB0b3RlKHgsIEEpXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gUmFuZG9tUm90YXRlKGRpcmVjdGlvbjogVmVjdG9yLCBtYXhTcHJlYWRBbmdsZTogbnVtYmVyKTpWZWN0b3Ige1xyXG4gICAgICAgIC8vIFx1NzUxRlx1NjIxMFx1OTY4Rlx1NjczQVx1NjI2OVx1NjU2M1x1ODlEMlxyXG4gICAgICAgIGNvbnN0IHNwcmVhZEFuZ2xlID0gR2F1c3NSYW5kb20oKSAqIG1heFNwcmVhZEFuZ2xlO1xyXG5cclxuICAgICAgICAvLyBcdTc1MUZcdTYyMTBcdTk2OEZcdTY3M0FcdTY1Q0JcdThGNkNcdTg5RDJcdTVFQTZcclxuICAgICAgICBjb25zdCByYW5kb21Sb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcclxuXHJcbiAgICAgICAgLy8gXHU4QkExXHU3Qjk3XHU5NjhGXHU2NzNBXHU3MEI5XHU3Njg0XHU1NzUwXHU2ODA3XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguc2luKHNwcmVhZEFuZ2xlKSAqIE1hdGguY29zKHJhbmRvbVJvdGF0aW9uKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5jb3Moc3ByZWFkQW5nbGUpO1xyXG4gICAgICAgIGNvbnN0IHogPSBNYXRoLnNpbihzcHJlYWRBbmdsZSkgKiBNYXRoLnNpbihyYW5kb21Sb3RhdGlvbik7XHJcblxyXG4gICAgICAgIC8vIFx1NUMwNlx1OTY4Rlx1NjczQVx1NzBCOVx1NjVDQlx1OEY2Q1x1NTIzMFx1NjMwN1x1NUI5QVx1NjVCOVx1NTQxMVxyXG4gICAgICAgIGNvbnN0IGRpclogPSBkaXJlY3Rpb24uejtcclxuICAgICAgICBjb25zdCByb3RhdGVNYXRyaXggPSBbXHJcbiAgICAgICAgICAgIFtNYXRoLmNvcyhkaXJaKSwgLU1hdGguc2luKGRpclopLCAwXSxcclxuICAgICAgICAgICAgW01hdGguc2luKGRpclopLCBNYXRoLmNvcyhkaXJaKSwgMF0sXHJcbiAgICAgICAgICAgIFswLCAwLCAxXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdGF0ZWRYID0gcm90YXRlTWF0cml4WzBdWzBdICogeCArIHJvdGF0ZU1hdHJpeFswXVsxXSAqIHkgKyByb3RhdGVNYXRyaXhbMF1bMl0gKiB6O1xyXG4gICAgICAgIGNvbnN0IHJvdGF0ZWRZID0gcm90YXRlTWF0cml4WzFdWzBdICogeCArIHJvdGF0ZU1hdHJpeFsxXVsxXSAqIHkgKyByb3RhdGVNYXRyaXhbMV1bMl0gKiB6O1xyXG4gICAgICAgIGNvbnN0IHJvdGF0ZWRaID0gcm90YXRlTWF0cml4WzJdWzBdICogeCArIHJvdGF0ZU1hdHJpeFsyXVsxXSAqIHkgKyByb3RhdGVNYXRyaXhbMl1bMl0gKiB6O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcihyb3RhdGVkWCwgcm90YXRlZFksIHJvdGF0ZWRaKTtcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBY2NlbGVyYXRlU2NhbGFyKHggOiBudW1iZXIsIF9saW5lYXJSYW5nZSA6IG51bWJlciwgX21heFNjYWxlIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBpZiAoX21heFNjYWxlIDw9IDEgfHwgX2xpbmVhclJhbmdlIDw9IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignXHU2NzAwXHU1OTI3XHU2QkQ0XHU0RjhCXHU1RkM1XHU5ODdCXHU1OTI3XHU0RThFMSwgXHU3RUJGXHU2MDI3XHU4MzAzXHU1NkY0XHU1RkM1XHU5ODdCXHU1OTI3XHU0RThFMCcpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NEY3Rlx1NzUyOFx1NTNDQ1x1OEZCOVx1NzY4NFx1NTFGRFx1NjU3MFx1NEVFNVx1NjUyRlx1NjMwMVx1OEQxRlx1NTAzQycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4IDw9IF9saW5lYXJSYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIH1lbHNlIGlmKHg+PV9tYXhTY2FsZSAqIF9saW5lYXJSYW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBfbWF4U2NhbGVcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLyBfbGluZWFyUmFuZ2UgKiB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEJpQWNjZWxlcmF0ZVNjYWxhcih4IDogbnVtYmVyLCBfbGluZWFyUmFuZ2UgOiBudW1iZXIsIF9tYXhTY2FsZSA6IG51bWJlcil7XHJcbiAgICAgICAgbGV0IHNpZ24gPSB4ID49IDAgPyAxIDogLTFcclxuICAgICAgICByZXR1cm4gQWNjZWxlcmF0ZVNjYWxhcihzaWduICogeCwgX2xpbmVhclJhbmdlLCBfbWF4U2NhbGUpXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVDdXJ2ZShfc3RhcnRQb2ludCA6IFZlY3RvciwgX3N0YXJ0VmVjIDogVmVjdG9yLCBfbGVuZ3RoIDogbnVtYmVyLCBfZHQgOiBudW1iZXIsIF9ncmF2aXR5IDogbnVtYmVyKXtcclxuICAgICAgICBfZ3Jhdml0eSA9IF9ncmF2aXR5ID8gX2dyYXZpdHkgOiAxXHJcbiAgICAgICAgbGV0IGN1cnZlOiBWZWN0b3JbXVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gX2xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zWCA9IG5ldyBWZWN0b3IyKF9zdGFydFBvaW50LngsIF9zdGFydFBvaW50LnopLmFkZChuZXcgVmVjdG9yMihfc3RhcnRWZWMueCwgX3N0YXJ0VmVjLnopKS5tdWx0aXBseShfZHQgKiBpbmRleClcclxuICAgICAgICAgICAgbGV0IFBvc1kgPSBfc3RhcnRWZWMueSAqIF9kdCAqIGluZGV4IC0gMC41ICogOS44ICogX2dyYXZpdHkgKiAoX2R0ICogaW5kZXgpICogKF9kdCAqIGluZGV4KSArIF9zdGFydFBvaW50LnlcclxuICAgICAgICAgICAgY3VydmUucHVzaChuZXcgVmVjdG9yKHBvc1gueCwgUG9zWSwgcG9zWC55KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnZlXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0QXR0ZW51YXRpb25CeUd1bklkKF90eXBlOm51bWJlciwgX2d1bjpXZWFwb25CYXNlQ2xzLCBfZGlzOm51bWJlcik6bnVtYmVye1xyXG4gICAgICAgIGlmIChfdHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU1QjUwXHU1RjM5XHU5OERFXHU4ODRDXHU4REREXHU3OUJCXHU0RjI0XHU1QkIzXHU4ODcwXHU1MUNGXHJcbiAgICAgICAgICAgIGxldCBkaXNBdHRlbnVhdGlvbiA9IF9ndW4uX2NvbmZpZ0RhdGEuZGFtYWdlQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgbGV0IGxlbiA9IGRpc0F0dGVudWF0aW9uLmxlbmd0aFxyXG4gICAgICAgICAgICBpZihsZW4gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPj0gMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZihkaXNBdHRlbnVhdGlvbltpXS5EaXN0YW5jZSA8PSBfZGlzKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzQXR0ZW51YXRpb25baV0uQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH0gZWxzZSBpZihfdHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU3MjA2XHU3MEI4XHU4MzAzXHU1NkY0XHU0RjI0XHU1QkIzXHU4ODcwXHU1MUNGXHJcbiAgICAgICAgICAgIGxldCBleHBsb3Npb25BdHRlbnVhdGlvbiA9IF9ndW4uX2NvbmZpZ0RhdGEuZXhwbG9zaW9uRGFtYWdlQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgbGV0IGxlbiA9IGV4cGxvc2lvbkF0dGVudWF0aW9uLmxlbmd0aFxyXG4gICAgICAgICAgICBpZihsZW4gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPj0gMTsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZihleHBsb3Npb25BdHRlbnVhdGlvbltpXS5EaXN0YW5jZSA8PSBfZGlzKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwbG9zaW9uQXR0ZW51YXRpb25baV0uQXR0ZW51YXRpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gX3NlbGYgXHU4MUVBXHU1REYxXHU3Njg0XHU4OUQyXHU4MjcyICBcclxuICAgICAqIEBwYXJhbSBfaXNIaXRTZWxmIFx1NjYyRlx1NTQyNlx1NTNFRlx1NEVFNVx1NTQ3RFx1NEUyRFx1ODFFQVx1NURGMVxyXG4gICAgICogQHBhcmFtIF9pc0hpdEZyaWVuZCBcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTU0N0RcdTRFMkRcdTk2MUZcdTUzQ0JcclxuICAgICAqIEBwYXJhbSBfZGlzIFx1NTM0QVx1NUY4NFxyXG4gICAgICogQHBhcmFtIF9hbmdsZSBcdTg5RDJcdTVFQTZcclxuICAgICAqIEBwYXJhbSBfcG9zIFx1NjhDMFx1NkQ0Qlx1NzY4NFx1NTM5Rlx1NzBCOVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRFbmVteUJ5UmFuZ2UoX3NlbGY6Q2hhcmFjdGVyLCBcclxuICAgICAgICBfaXNIaXRTZWxmOmJvb2xlYW4sIFxyXG4gICAgICAgIF9pc0hpdEZyaWVuZDpib29sZWFuLCBcclxuICAgICAgICBfZGlzOm51bWJlciwgXHJcbiAgICAgICAgX2FuZ2xlOm51bWJlciwgXHJcbiAgICAgICAgX3BvczpWZWN0b3IpOkNoYXJhY3Rlcltde1xyXG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA6IENoYXJhY3RlcltdXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyc1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldFdlYXBvbkFtbW9JZChfd2VhcG9uSWQgOiBudW1iZXIpIDogbnVtYmVye1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBjbGFzcyBUd2VlblV0aWx7XHJcblxyXG4gICAgU3RhcnRGdW5jdGlvbiA6ICh0OlR3ZWVuVXRpbCk9PnZvaWRcclxuICAgIFVwZGF0ZUZ1bmN0aW9uIDogKHQ6VHdlZW5VdGlsLCBkdCA6IG51bWJlcik9PnZvaWRcclxuICAgIFN0b3BGdW5jdGlvbiA6ICh0OlR3ZWVuVXRpbCk9PnZvaWRcclxuXHJcbiAgICB0b3RhbFRpbWU6bnVtYmVyXHJcbiAgICB0aW1lOm51bWJlclxyXG5cclxuICAgIGN1c3RvbURhdGEgOiBNYXA8c3RyaW5nLCBhbnk+XHJcbiAgICBpc1BsYXlpbmcgOiBib29sZWFuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2V0VG90YWxUaW1lOigpID0+IG51bWJlciwgXHJcbiAgICAgICAgdXBkYXRlIDogKHRpbWUxOm51bWJlcix0aW1lMjpudW1iZXIsdGltZTM6bnVtYmVyKT0+dm9pZCxcclxuICAgICAgICBjYWxsYmFjazooKT0+dm9pZCxcclxuICAgICAgICBzdGFydD86KCk9PnZvaWQpe1xyXG4gICAgICAgICAgICBzdGFydCA9IHN0YXJ0IHx8IGZ1bmN0aW9uKCkge31cclxuICAgICAgICAgICAgdGhpcy5TdGFydEZ1bmN0aW9uID0gKHQ6VHdlZW5VdGlsKT0+e1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgdC50b3RhbFRpbWUgPSBnZXRUb3RhbFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgdC50aW1lID0gMFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVGdW5jdGlvbiA9ICh0OlR3ZWVuVXRpbCwgZHQgOiBudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0LnRpbWUgKz0gZHRcclxuICAgICAgICAgICAgICAgIGlmKHQudGltZSA+PSB0LnRvdGFsVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5TdG9wRnVuY3Rpb24odClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZSh0LnRpbWUsdC50b3RhbFRpbWUsdC50aW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuU3RvcEZ1bmN0aW9uID0gKHQ6VHdlZW5VdGlsKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNQbGF5aW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwgIlx1RkVGRmltcG9ydCB7IEV2ZW50Q29uc3QgfSBmcm9tIFwiLi4vR2FtZUNvbnN0L0V2ZW50Q29uc3RcIlxyXG5pbXBvcnQgUGxheWVyQXR0ciBmcm9tIFwiLi8uLi9QbGF5ZXJBdHRyXCJcclxuLyoqXHJcbiAqIFx1NkUzOFx1NjIwRlx1NjcwRFx1NTJBMVx1N0FFRlx1NEUzQlx1ODExQVx1NjcyQ1xyXG4gKi9cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyQmFzZSBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgdG90YWxQbGF5ZXJBdHRyczogTWFwPHN0cmluZywgUGxheWVyQXR0cj4gPSBuZXcgTWFwXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRzLmFkZFBsYXllckpvaW5lZExpc3RlbmVyKHRoaXMuT25QbGF5ZXJKb2luZWQuYmluZCh0aGlzKSlcclxuICAgICAgICBFdmVudHMuYWRkUGxheWVyTGVmdExpc3RlbmVyKHRoaXMuT25QbGF5ZXJMZWZ0LmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBPblBsYXllckpvaW5lZChwbGF5ZXI6R2FtZXBsYXkuUGxheWVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU3M0E5XHU1QkI2XHU1MkEwXHU1MTY1JyArIHBsYXllci5jaGFyYWN0ZXIuZ3VpZClcclxuICAgICAgICBsZXQgb2JqID0gYXdhaXQgQ29yZS5TY3JpcHQuc3Bhd25TY3JpcHQ8UGxheWVyQXR0cj4oUGxheWVyQXR0ciwgdHJ1ZSlcclxuICAgICAgICBvYmouSW5pdERhdGEocGxheWVyLmNoYXJhY3RlcilcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyQXR0cnMuc2V0KHBsYXllci5jaGFyYWN0ZXIuZ3VpZCwgb2JqKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTgxMUFcdTY3MkNcdTRFM0EnICsgb2JqLmd1aWQpXHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoVG9BbGxDbGllbnQoRXZlbnRDb25zdC5DbGllbnRFdmVudC5QbGF5ZXJBZGRTdWNjZXNzZWRFdmVudCwgcGxheWVyLmNoYXJhY3Rlci5ndWlkLCAgb2JqLmd1aWQpICAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgT25QbGF5ZXJMZWZ0KHBsYXllcjpHYW1lcGxheS5QbGF5ZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTczQTlcdTVCQjZcdTc5QkJcdTVGMDAnICsgcGxheWVyLmNoYXJhY3Rlci5ndWlkKVxyXG4gICAgICAgIGxldCBvYmogPSB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZ2V0KHBsYXllci5jaGFyYWN0ZXIuZ3VpZClcclxuICAgICAgICBvYmouZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy50b3RhbFBsYXllckF0dHJzLmRlbGV0ZShwbGF5ZXIuY2hhcmFjdGVyLmd1aWQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFBsYXllckF0dHIoZ3VpZDpzdHJpbmd8R2FtZXBsYXkuUGxheWVyKTpQbGF5ZXJBdHRye1xyXG4gICAgICAgIGlmIChndWlkIGluc3RhbmNlb2YgR2FtZXBsYXkuUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGd1aWQgPSBndWlkLmNoYXJhY3Rlci5ndWlkXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZ2V0KGd1aWQpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZ2V0KGd1aWQpXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCJcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xze1xyXG4gICAgcHJpdmF0ZSB3ZWFwb25BY2Nlc3Nvcnk6IEdhbWVPYmplY3RcclxuICAgIHB1YmxpYyBpZDpudW1iZXJcclxuICAgIHByaXZhdGUgdXVpZDogc3RyaW5nXHJcbiAgICBwcml2YXRlIGF0dGFjaGVkV2VhcG9uIDogV2VhcG9uQmFzZUNsc1xyXG4gICAgcHVibGljIGNvbmZpZ0RhdGE6IEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlDb25maWdEYXRhXHJcbiAgICBjb25zdHJ1Y3Rvcihfb2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgICB0aGlzLndlYXBvbkFjY2Vzc29yeSA9IF9vYmpcclxuICAgICAgICB0aGlzLmF0dGFjaGVkV2VhcG9uID0gbnVsbFxyXG4gICAgICAgIFdlYXBvblRvb2wuSW5pdFdlYXBvbkFjY2Vzc29yeUNvbmZpZyh0aGlzKVxyXG4gICAgICAgIHRoaXMuUGlja1NvdW5kKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBVcGRhdGUoZHQ6bnVtYmVyKXtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRXF1aXBUb1dlYXBvbih3ZWFwb246IFdlYXBvbkJhc2VDbHMpe1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRXZWFwb24gPSB3ZWFwb25cclxuICAgIH1cclxuICAgIHB1YmxpYyBVbkVxdWlwRnJvbVdlYXBvbigpe1xyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRXZWFwb24gPSBudWxsXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVzdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBQaWNrU291bmQoKXtcclxuXHJcbiAgICB9XHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvbkFtbW9CYXNlQ2xze1xyXG4gICAgcHVibGljIGNvdW50IDpudW1iZXJcclxuICAgIHByaXZhdGUgaWQgOm51bWJlclxyXG4gICAgcHJpdmF0ZSBvcmRlciA6bnVtYmVyXHJcbiAgICBwcml2YXRlIHBpY2tTb3VuZCA6c3RyaW5nXHJcbiAgICBwcml2YXRlIGNoYXJhY3RlciA6IENoYXJhY3RlclxyXG5cclxuICAgIGNvbnN0dXJjdG9yKGlkOm51bWJlcixjb3VudDpudW1iZXIsY2hhcmFjdGVyIDogQ2hhcmFjdGVyKXtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnRcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlclxyXG5cclxuICAgICAgICB0aGlzLlBpY2tTb3VuZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQbGF5ZXJQaWNrQW1tbyh3ZWFwb25BbW1vIDogR2FtZU9iamVjdCwgY291bnQgOiBudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgaWYod2VhcG9uQW1tbyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ICs9IGNvdW50XHJcbiAgICAgICAgdGhpcy5QaWNrU291bmQoKVxyXG4gICAgfSAgICAgIFxyXG4gICAgcHJpdmF0ZSBQbGF5ZXJEcm9wQW1tbyhjb3VudDogbnVtYmVyKTpib29sZWFue1xyXG4gICAgICAgIGxldCBpc0Ryb3BBbGwgPSBmYWxzZVxyXG4gICAgICAgIGlmKHRoaXMuY291bnQgPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3VudCA+PSB0aGlzLmNvdW50KXtcclxuICAgICAgICAgICAgaXNEcm9wQWxsID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50IC09IGNvdW50XHJcbiAgICAgICAgaWYoaXNEcm9wQWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzRHJvcEFsbFxyXG4gICAgfVxyXG4gICAgcHVibGljIFBsYXllckNvbnN1bWVBbW1vKGNvdW50IDogbnVtYmVyKTpudW1iZXJ7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudCA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDBcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY291bnQgPiB0aGlzLmNvdW50KXtcclxuICAgICAgICAgICAgY291bnQgPSB0aGlzLmNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgLT0gY291bnRcclxuICAgICAgICByZXR1cm4gY291bnRcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRDb3VudChjb3VudCA6IG51bWJlcik6dm9pZHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnRcclxuICAgIH1cclxuICAgIHByaXZhdGUgUGlja1NvdW5kKCk6dm9pZHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbkFuaW1hdGlvbkNsc3tcclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIGlkIDogbnVtYmVyXHJcbiAgICBwbGF5ZXIgOiBDaGFyYWN0ZXJcclxuICAgIHJpZ2h0QXJtUG9zaXRpb24gOiBWZWN0b3JcclxuICAgIGxlZnRBcm1Qb3NpdGlvbiA6IFZlY3RvclxyXG4gICAgY29uZmlnIDogR2FtZUNvbnN0LldlYXBvbkFuaW1hdGlvbkNvbmZpZ0RhdGFcclxuICAgIHNob3VsZGVyUmF5TWluRGlzdGFuY2UgOiBudW1iZXJcclxuICAgIG5vU2hvb3RpbmdTdGF0ZSA6IGJvb2xlYW5cclxuICAgIGxheWVyIDogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUoZHQ6bnVtYmVyKXtcclxuICAgICAgICAvL1x1NTJBMFx1OTAxRlx1OEREMVx1NzJCNlx1NjAwMVx1NEUwQlx1NjUzNlx1NjdBQSxcdTUxNzZcdTRFRDZcdTcyQjZcdTYwMDFcdTZCNjNcdTVFMzhcdTYzMDFcdTY3QUFcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCAiXHVGRUZGaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25BbmltYXRpb25DbHMgfSBmcm9tIFwiLi9XZWFwb25BbmltYXRpb25DbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25DYW1lcmFDbHMgfSBmcm9tIFwiLi9XZWFwb25DYW1lcmFDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25HVUlDbHMgfSBmcm9tIFwiLi9XZWFwb25HVUlDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25NYWdhemluZUNscyB9IGZyb20gXCIuL1dlYXBvbk1hZ2F6aW5lQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uUmVjb2lsQ2xzIH0gZnJvbSBcIi4vV2VhcG9uUmVjb2lsQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uU291bmRDbHMgfSBmcm9tIFwiLi9XZWFwb25Tb3VuZENsc1wiXHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCJcclxudHlwZSBGaXJlTW9kZUVudW0gPSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2VhcG9uQmFzZUNscyB7XHJcblxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5ODg0XHU1MjM2XHU0RjUzKi9cclxuICAgIHB1YmxpYyBwcmVmYWI6IEdhbWVPYmplY3RcclxuICAgIC8qKlxyXG4gICAgICogXHU2N0FBXHU2OEIwXHU5MTREXHU3RjZFSURcclxuICAgICAqL1xyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU3RUQxXHU1QjlBXHU3Njg0XHU5NTFBXHU3MEI5ICovXHJcbiAgICBwdWJsaWMgcm9vdDogR2FtZU9iamVjdFxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU2MjQwXHU1QzVFXHU3Njg0XHU3M0E5XHU1QkI2XHU4OUQyXHU4MjcyICovXHJcbiAgICBwdWJsaWMgY2hhcmFjdGVyOiBDaGFyYWN0ZXJcclxuICAgIC8qKlx1NjdBQVx1NTNFM1x1NEY0RFx1N0Y2RVx1NzBCOSAqL1xyXG4gICAgcHJpdmF0ZSBtdXp6bGVPYmo6IEdhbWVPYmplY3RcclxuICAgIC8qKlx1NjdBQVx1N0JBMVx1NjVCOVx1NTQxMSAqL1xyXG4gICAgcHJpdmF0ZSBkaXI6IFZlY3RvclxyXG4gICAgLyoqXHU2Mjk1XHU1RjM5XHU1M0UzXHU1QkY5XHU4QzYxICovXHJcbiAgICBwcml2YXRlIHRvc3M6IEdhbWVPYmplY3RcclxuXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTY2MkZcdTU0MjZcdTg4QUJcdTYzMDFcdTY3MDkgKi9cclxuICAgIF9pc2RyYXc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgX2lzWm9vbUluIDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9yYXBpZGx5UmVtYWluaW5nQnVsbGV0czogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfY3VyU2hvb3RNb2RlIDogRmlyZU1vZGVFbnVtID0gR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5BdXRvXHJcbiAgICBwcml2YXRlIF9oYXNKdXN0RmlyZWQgOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2ZpcmVXYWl0IDogbnVtYmVyID0gMFxyXG4gICAgcHJpdmF0ZSBfaXNHb2luZ1RvRmlyZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc0FsbG93ZWQgPSB0cnVlXHJcbiAgICBwcml2YXRlIF93YXNBbGxvd2VkQW5kRmlyaW5nID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3JlbG9hZFdhaXQgPSAwXHJcbiAgICBwcml2YXRlIF9vblJlbG9hZCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc0lnbm9yaW5nU2VsZiA9IHRydWVcclxuICAgIHByaXZhdGUgX2hhc0ZpcmVDb25kaXRpb24gPSB0cnVlXHJcbiAgICBwcml2YXRlIF9maXJlQ29uZGl0aW9uU2lkZSA9IDFcclxuICAgIHByaXZhdGUgX2lzR29pbmdUb1B1bXAgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNQdW1wTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9wdW1wV2FpdCA9IDBcclxuICAgIHByaXZhdGUgX2lzUHVtcGluZyA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1dhaXRpbmdQdW1wID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3pvb21JblRyeVB1bXAgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNXaXRoRHJhd2luZyA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9wdW1wTWFrZVNoZWxsID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2FpbUJlZm9yZVB1bXAgPSBmYWxzZVxyXG4gICAgcHVibGljIF93ZWFwb25BY2Nlc3NvcnlMaXN0IDogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgV2VhcG9uQWNjZXNzb3J5QmFzZUNscz4gPSBuZXcgTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgV2VhcG9uQWNjZXNzb3J5QmFzZUNscz4oKVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9tYWdhemluZTogV2VhcG9uTWFnYXppbmVDbHNcclxuICAgICBfcmVjb2lsIDogV2VhcG9uUmVjb2lsQ2xzXHJcbiAgICBfY2FtZXJhQ29udHJvbCA6IFdlYXBvbkNhbWVyYUNsc1xyXG4gICAgIF93ZWFwb25HVUk6V2VhcG9uR1VJQ2xzXHJcbiAgICBwcml2YXRlIF9hbmltYXRpb25Db250cm9sbGVyIDogV2VhcG9uQW5pbWF0aW9uQ2xzXHJcbiAgICBwcml2YXRlIF93ZWFwb25Tb3VuZCA6IFdlYXBvblNvdW5kQ2xzXHJcbiAgICBwdWJsaWMgZXJyb3I6IG51bWJlclxyXG5cclxuICAgIHB1YmxpYyBnZXQgX2NvbmZpZ0RhdGEoKSA6IEdhbWVDb25zdC5XZWFwb25Db25maWdEYXRhXHJcblxyXG4gICAgcHJpdmF0ZSBfYXV0b0ZpcmVBaW06Ym9vbGVhblxyXG4gICAgY29uc3RydWN0b3IoX2NoYXJhY3RlcjpDaGFyYWN0ZXIsIF9yb290IDogR2FtZU9iamVjdCwgX3dlYXBvbk9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgICAgdGhpcy5FYXJseUluaXRpYWxpemUoKVxyXG4gICAgICAgIHRoaXMucHJlZmFiID0gX3dlYXBvbk9ialxyXG4gICAgICAgIHRoaXMucm9vdCA9IF9yb290XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBfY2hhcmFjdGVyXHJcbiAgICAgICAgdGhpcy5fbWFnYXppbmUgPSBuZXcgV2VhcG9uTWFnYXppbmVDbHModGhpcylcclxuICAgICAgICB0aGlzLl9yZWNvaWwgPSBuZXcgV2VhcG9uUmVjb2lsQ2xzKClcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sID0gbmV3IFdlYXBvbkNhbWVyYUNscyh0aGlzLl9yZWNvaWwpXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uR1VJID0gbmV3IFdlYXBvbkdVSUNscygpXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uQ29udHJvbGxlciA9IG5ldyBXZWFwb25BbmltYXRpb25DbHMoKVxyXG4gICAgICAgIHRoaXMuX3dlYXBvblNvdW5kID0gbmV3IFdlYXBvblNvdW5kQ2xzKClcclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLkxhdGVySW5pdGlhbGl6ZSgpXHJcbiAgICB9XHJcbiAgICAvKipcdTY3OTBcdTY3ODRcdTUxRkRcdTY1NzBcdUZGMENcdTk3MDBcdTg5ODFcdTYyNEJcdTUyQThcdThDMDNcdTc1MjggKi9cclxuICAgIHB1YmxpYyBkZXN0cnVjdG9yKCkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkVhcmx5RGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuU2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICB0aGlzLl9tYWdhemluZS5SZWNvcmRpbmdCdWxsZXRzTGVmdCh0cnVlKVxyXG4gICAgICAgIHRoaXMucHJlZmFiLnNldFZpc2liaWxpdHkoVHlwZS5Qcm9wZXJ0eVN0YXR1cy5PbilcclxuICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5VbkVxdWlwRnJvbVdlYXBvbigpICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmNsZWFyKClcclxuICAgICAgICAvL1x1Njc5MFx1Njc4NFx1NjdBQVx1NEUwQVx1NzY4NFx1ODFFQVx1NjcwOVx1N0M3QlxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuZGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuZGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uQ29udHJvbGxlci5kZXN0cnVjdG9yKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvblNvdW5kLmRlc3RydWN0b3IoKVxyXG4gICAgICAgIC8vXHU2RTA1XHU5NjY0XHU2N0FBXHU2OEIwXHU2MjQwXHU2NzA5XHU4MDA1XHJcbiAgICAgICAgLy9zZWxmLmd1bi5QbGF5ZXIuVmFsdWUgPSBuaWxcclxuXHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHU1NzI4XHU1QjlFXHU0RjhCXHU1MzE2XHU2NzAwXHU1RjAwXHU1OUNCXHU2MjY3XHU4ODRDICovXHJcbiAgICBwcm90ZWN0ZWQgRWFybHlJbml0aWFsaXplKCk6dm9pZHtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcdTVCOUVcdTRGOEJcdTUzMTZcdTY3MDBcdTU0MEVcdTYyNjdcdTg4NEMgKi9cclxuICAgIHByb3RlY3RlZCBMYXRlckluaXRpYWxpemUoKTp2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgRWFybHlEZXN0cnVjdG9yKCk6dm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU2NkY0XHU2NUIwXHU1MUZEXHU2NTcwICovXHJcbiAgICBwdWJsaWMgVXBkYXRlKF9kdDpudW1iZXIpe1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1dpdGhEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faXNHb2luZ1RvRmlyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU4MUVBXHU1MkE4XHU4OEM1XHU1RjM5XHU1RjAwXHU1NDJGXHU1NDBFXHVGRjBDXHU4RkRCXHU4ODRDXHU2OEMwXHU2RDRCICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuYXV0b1JlbG9hZCkge1xyXG4gICAgICAgICAgICAvL2lmKHRoaXMuX21hZ2F6aW5lLilcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU0RTBBXHU0RTAwXHU1RTI3XHU1RjAwXHU3MDZCXHU0RTg2XHU1RTc2XHU0RTE0XHU5NzAwXHU4OTgxXHU2MkM5XHU2N0FBXHU2ODEzLFx1NUU3Nlx1NEUxNFx1NUY1M1x1NTI0RFx1NkNBMVx1NjcwOVx1NTcyOFx1ODhDNVx1NUI1MFx1NUYzOVx1NTQ4Q1x1NkI2M1x1NTcyOFx1NjJDOVx1NjdBQVx1NjgxM1x1NzY4NFx1OEZDN1x1N0EwQlx1NEUyRCAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLnB1bXBBZnRlckZpcmUgJiYgdGhpcy5faGFzSnVzdEZpcmVkICYmICF0aGlzLl9vblJlbG9hZCAmJiAhdGhpcy5faXNQdW1waW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1pvb21Jbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nUHVtcCA9IHRydWVcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1bXBTdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3pvb21JblRyeVB1bXAgJiYgdGhpcy5faXNXYWl0aW5nUHVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl96b29tSW5UcnlQdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLlB1bXBTdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NTFDNlx1NTkwN1x1NTcyOFx1NEUwQlx1NEUwMFx1NUUyN1x1OEZEQlx1ODg0Q1x1NjM2Mlx1NUYzOVx1NjRDRFx1NEY1QyAqL1xyXG4gICAgICAgIGlmKHRoaXMuX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lKXtcclxuICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAvL3RoaXMuX3JlbG9hZFdhaXQgPSBcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU1MUM2XHU1OTA3XHU1NzI4XHU0RTBCXHU0RTAwXHU1RTI3XHU4RkRCXHU4ODRDXHU2MkM5XHU2N0FBXHU2ODEzXHU2NENEXHU0RjVDICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzR29pbmdUb1B1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5faXNQdW1wTmV4dFVwZGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5fcHVtcE1ha2VTaGVsbCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHVtcGluZyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5fcHVtcFdhaXQgPSAxIC8gdGhpcy5fY29uZmlnRGF0YS5zaG9vdFNwZWVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1OEZEQlx1ODg0Q1x1NUYwMFx1NTlDQlx1NUMwNFx1NTFGQi9cdTUwNUNcdTZCNjJcdTVDMDRcdTUxRkIvXHU1RjAwXHU1OUNCXHU2MzYyXHU1QjUwXHU1RjM5XHU3Njg0XHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxICovXHJcbiAgICAgICAgbGV0IGlzQWxsb3dlZEFuZEZpcmluZyA9IHRoaXMuX2lzR29pbmdUb0ZpcmUgJiYgdGhpcy5faXNBbGxvd2VkXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0FsbG93ZWRBbmRGaXJpbmcgJiYgIXRoaXMuX3dhc0FsbG93ZWRBbmRGaXJpbmcpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkZpcmVTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNBbGxvd2VkQW5kRmlyaW5nICYmIHRoaXMuX3dhc0FsbG93ZWRBbmRGaXJpbmcpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkZpcmVTdG9wcGVkLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0dvaW5nVG9QdW1wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9QdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlB1bXBTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5yZWxvYWRXaXRoTWFnYXppbmVzKXtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5NYWdhemluZUxvYWRTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuQnVsbGV0TG9hZFN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNab29tSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93YXNBbGxvd2VkQW5kRmlyaW5nID0gaXNBbGxvd2VkQW5kRmlyaW5nXHJcblxyXG4gICAgICAgIHRoaXMuX2ZpcmVXYWl0IC09IF9kdFxyXG4gICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgLT0gX2R0XHJcbiAgICAgICAgdGhpcy5fcHVtcFdhaXQgLT0gX2R0XHJcbiAgICAgICAgaWYgKHRoaXMuX3B1bXBXYWl0IDwgMC44IC8gdGhpcy5fY29uZmlnRGF0YS5zaG9vdFNwZWVkICYmIHRoaXMuX3B1bXBXYWl0ID4gMCAmJiB0aGlzLl9haW1CZWZvcmVQdW1wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcHVtcFdhaXQgPCAwLjYgLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWQgJiYgdGhpcy5fcHVtcFdhaXQgPiAwICYmIHRoaXMuX2lzUHVtcGluZyAmJiAhdGhpcy5fcHVtcE1ha2VTaGVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLk1ha2VCdWxsZXRTaGVsbCgpXHJcbiAgICAgICAgICAgIHRoaXMuX3B1bXBNYWtlU2hlbGwgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NjhDMFx1NjdFNVx1NUY1M1x1NTI0RFx1NjM2Mlx1NUYzOVx1NjRDRFx1NEY1Q1x1NjYyRlx1NTQyNlx1N0VEM1x1Njc1RiAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNKdXN0RmlyZWQgJiYgdGhpcy5fY29uZmlnRGF0YS5jYW5JbnRlcnJ1cHRCdWxsZXRMb2FkKSB7XHJcbiAgICAgICAgICAgIC8qKlx1NEUwQVx1NEUwMFx1NUUyN1x1NUYwMFx1NzA2Qlx1NEU4Nlx1RkYwQ1x1OTcwMFx1ODk4MVx1NEUyRFx1NjVBRFx1NjM2Mlx1NUYzOVx1NjRDRFx1NEY1QyAqL1xyXG4gICAgICAgICAgICB0aGlzLl9yZWxvYWRXYWl0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgJiYgdGhpcy5fcmVsb2FkV2FpdCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLnJlbG9hZFdpdGhNYWdhemluZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50bHkgcmVsb2FkaW5nIHRoZSBlbnRpcmUgbWFnYXppbmVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFnYXppbmUuTG9hZE1hZ2F6aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5IHJlbG9hZGluZyBvbmUgYnVsbGV0IGF0IGEgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hZ2F6aW5lLkxvYWRPbmVCdWxsZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5CdWxsZXRMb2FkZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVsb2FkZWQgb25lIGJ1bGxldCwgY2hlY2sgaWYgdGhlIG1hZ2F6aW5lIGlzIG5vdCBmdWxseSBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFnYXppbmUuVXBkYXRlTG9hZFBlcmNlbnRhZ2UoKSAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hZ2F6aW5lIGlzIG5vdCBmdWxseSBsb2FkZWQsIGNoZWNrIGlmIGl0IGNhbiBjb250aW51ZSBsb2FkaW5nIGJ1bGxldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hZ2F6aW5lLlVwZGF0ZUNhbkxvYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuIGNvbnRpbnVlIGxvYWRpbmcgYnVsbGV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdGhpcy5fY29uZmlnRGF0YS5jYW5JbnRlcnJ1cHRCdWxsZXRMb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCA9IHRoaXMuX21hZ2F6aW5lLkdldExvYWRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW5ub3QgY29udGludWUgbG9hZGluZyBidWxsZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWdhemluZSBpcyBmdWxseSBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUmVsb2FkRmluaXNoZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTY4QzBcdTY3RTVcdTVGNTNcdTUyNERcdTYyQzlcdTY3QUFcdTY4MTNcdTY0Q0RcdTRGNUNcdTY2MkZcdTU0MjZcdTdFRDNcdTY3NUYgKi9cclxuICAgICAgICBpZiAodGhpcy5faXNQdW1wTmV4dFVwZGF0ZSAmJiB0aGlzLl9wdW1wV2FpdCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1B1bXBOZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNQdW1waW5nID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNXYWl0aW5nUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlB1bXBlZCwgdGhpcylcclxuICAgICAgICAgICAgaWYodGhpcy5fYWltQmVmb3JlUHVtcCAmJiAhdGhpcy5fYXV0b0ZpcmVBaW0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLk1lY2hhbmljYWxBaW1TdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGFzSnVzdEZpcmVkID0gZmFsc2VcclxuICAgICAgICAvKipcdTY4QzBcdTY3RTVcdTVGMDBcdTcwNkJcdTcyQjZcdTYwMDEgKi9cclxuICAgICAgICBpZiAodGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgJiYgdGhpcy5faXNBbGxvd2VkKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJlRGVsYXkgPSAxIC8gdGhpcy5fY29uZmlnRGF0YS5zaG9vdFNwZWVkXHJcbiAgICAgICAgICAgIGxldCBkZWxheSA9IDBcclxuICAgICAgICAgICAgbGV0IGhhc0ZpcmVkID0gZmFsc2VcclxuICAgICAgICAgICAgd2hpbGUodGhpcy5fZmlyZVdhaXQgPCAwKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gdGhpcy5fY29uZmlnRGF0YS5idWxsZXRQZXJTaG9vdDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9tYWdhemluZS5pc0VtcHR5TG9hZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuRmlyZShkZWxheSwgIXRoaXMuX2NvbmZpZ0RhdGEuY29uc3VtZVNpbmdsZUJ1bGxldFBlclNob290KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNGaXJlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMtLVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihoYXNGaXJlZCAmJiB0aGlzLl9jb25maWdEYXRhLmNvbnN1bWVTaW5nbGVCdWxsZXRQZXJTaG9vdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db25zdW1lKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGhhc0ZpcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5fY29uZmlnRGF0YS5wdW1wQWZ0ZXJGaXJlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NYWtlQnVsbGV0U2hlbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5GaXJlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkVtcHR5RmlyZSwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlbGF5ICs9IGZpcmVEZWxheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlyZVdhaXQgKz0gZmlyZURlbGF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihoYXNGaXJlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWNvaWwuRmlyZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLklucHV0UmVjb2lsKHRoaXMuX3JlY29pbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1NEUwRFx1NTE0MVx1OEJCOFx1NUYwMFx1NjdBQVx1RkYwQ1x1NTIxOVx1NUMwNlx1NjdBQVx1NEUyRFx1NUI1MFx1NUYzOVx1OEZERVx1NTNEMVx1NTI2OVx1NEY1OVx1NUI1MFx1NUYzOVx1NkUwNVx1OTZGNlxyXG4gICAgICAgICAgICBpZighdGhpcy5faXNBbGxvd2VkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHU2ODM5XHU2MzZFXHU0RTBEXHU1NDBDXHU3Njg0XHU1RjAwXHU3MDZCXHU2QTIxXHU1RjBGXHU4RkRCXHU4ODRDXHU2NTcwXHU2MzZFXHU5MUNEXHU3RjZFXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2N1clNob290TW9kZSAhPSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLkF1dG8pe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPD0gMCB8fCB0aGlzLl9tYWdhemluZS5pc0VtcHR5TG9hZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jdXJTaG9vdE1vZGUgPT0gR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5TaW5nbGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzIDw9IDAgPyAwIDogdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHNcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcmVXYWl0ID0gTWF0aC5tYXgoMCwgdGhpcy5fZmlyZVdhaXQpXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgPSBNYXRoLm1heCgwLCB0aGlzLl9yZWxvYWRXYWl0KVxyXG4gICAgICAgICAgICB0aGlzLl9wdW1wV2FpdCA9IE1hdGgubWF4KDAsIHRoaXMuX3B1bXBXYWl0KVxyXG4gICAgICAgICAgICAvL1x1NTE3Nlx1NEVENlx1NjNBN1x1NTIzNlx1N0M3Qlx1NzY4NFx1NjZGNFx1NjVCMFxyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLlVwZGF0ZShfZHQpXHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbkNvbnRyb2xsZXIuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgdGhpcy5fcmVjb2lsLlVwZGF0ZShfZHQpXHJcbiAgICAgICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLlVwZGF0ZShfZHQpXHJcbiAgICAgICAgICAgIHRoaXMuX21hZ2F6aW5lLlVwZGF0ZSgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLlJlZnJlc2hTY2FsZXMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjdBQVx1NEUwQVx1ODhDNVx1NTkwN1x1NEUwMFx1NEUyQVx1OTE0RFx1NEVGNlxyXG4gICAgICogQHBhcmFtIGFjY2UgXHU5MTREXHU0RUY2XHU1QjlFXHU0RjhCXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIEVxdWlwQWNjZXNzb3J5KGFjY2U6V2VhcG9uQWNjZXNzb3J5QmFzZUNscyk6IFtib29sZWFuLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXSB7XHJcbiAgICAgICAgbGV0IGFjY2VJZCA9IGFjY2UuaWRcclxuICAgICAgICBsZXQgY2FuQmVFcXVpcCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5fY29uZmlnRGF0YS5jYW5CZUVxdWlwQWNjZXNzb3J5LmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gYWNjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5CZUVxdWlwID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoIWNhbkJlRXF1aXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtmYWxzZSwgbnVsbF1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9yaWdpbkFjY2UgPSB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmdldChhY2NlLmNvbmZpZ0RhdGEubG9jYXRpb24pXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5zZXQoYWNjZS5jb25maWdEYXRhLmxvY2F0aW9uLCBhY2NlKVxyXG4gICAgICAgIGFjY2UuRXF1aXBUb1dlYXBvbih0aGlzKVxyXG4gICAgICAgIHJldHVybiBbdHJ1ZSwgb3JpZ2luQWNjZV1cclxuICAgIH1cclxuICAgIHB1YmxpYyBVbkVxdWlwQWNjZXNzb3J5KF9sb2NhdGlvbk9yQ2xzOldlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfCBudW1iZXIpOiB2b2lke1xyXG4gICAgICAgIGlmKF9sb2NhdGlvbk9yQ2xzIGluc3RhbmNlb2YgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyl7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZGVsZXRlKF9sb2NhdGlvbk9yQ2xzLmNvbmZpZ0RhdGEubG9jYXRpb24pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZGVsZXRlKF9sb2NhdGlvbk9yQ2xzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlx1NjM2Mlx1NUYzOVx1NTkzOSxcdTYzNjJcdTVGMzlcdTU5MzlcdTc2ODRcdTc2ODRcdTY1RjZcdTUwMTlcdTRFMERcdTgwRkRcdTYyQzlcdTY3QUFcdTY4MTMgKi9cclxuICAgIHB1YmxpYyBMb2FkTWFnYXppbmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3ICYmICEgdGhpcy5faXNQdW1waW5nICYmIHRoaXMuX21hZ2F6aW5lLmNhbkxvYWRlZCAmJiAhIHRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvUmVsb2FkTWFnYXppbmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIFB1bXBTdGFydCgpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3ICYmICF0aGlzLl9vblJlbG9hZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb1B1bXAgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2FpbUJlZm9yZVB1bXAgPSB0aGlzLl9pc1pvb21JblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlQnVsbGV0U2hlbGwoKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGlmKHRoaXMudG9zcyA9PSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZW1wID0gbmV3IFJvdGF0aW9uKDE4MCAqIE1hdGgucmFuZG9tKCksIDAsIDE4MCAqIE1hdGgucmFuZG9tKCkpXHJcbiAgICAgICAgbGV0IG9iaiA9IGF3YWl0IEdhbWVPYmpQb29sLmdldEluc3RhbmNlKCkuYXN5bmNTcGF3bih0aGlzLl9jb25maWdEYXRhLmJ1bGxldFNoZWxsKVxyXG4gICAgICAgIG9iai5zZXRXb3JsZExvY2F0aW9uKHRoaXMudG9zcy5nZXRXb3JsZExvY2F0aW9uKCkpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkUm90YXRpb24odGVtcClcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlRmlyZUVmZmVjdCgpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgbGV0IG9iaiA9YXdhaXQgR2FtZU9ialBvb2wuZ2V0SW5zdGFuY2UoKS5hc3luY1NwYXduKHRoaXMuX2NvbmZpZ0RhdGEuZmlyZUVmZmVjdClcclxuICAgICAgICBvYmouc2V0V29ybGRMb2NhdGlvbih0aGlzLm11enpsZU9iai5nZXRXb3JsZExvY2F0aW9uKCkpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgTWFrZUJ1bGxldChlbmRPYmo6R2FtZU9iamVjdCwgZW5kUG9zOlZlY3RvciwgZW5kTm9ybWFsOlZlY3Rvcil7XHJcbiAgICAgICAgaWYoIWVuZE9iail7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmRPYmogaW5zdGFuY2VvZiBDaGFyYWN0ZXIpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9iaiA9IGF3YWl0IEdhbWVPYmpQb29sLmdldEluc3RhbmNlKCkuYXN5bmNTcGF3bih0aGlzLl9jb25maWdEYXRhLmJ1bGxldEhvbGUpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkTG9jYXRpb24oZW5kUG9zKVxyXG4gICAgICAgIG9iai5zZXRXb3JsZFNjYWxlKG5ldyBWZWN0b3IoMC4xLCAwLjEsIDAuMSkpXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgTWFrZUhpdEVmZmVjdChlbmRQb3M6VmVjdG9yKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGxldCBvYmogPSBhd2FpdCBHYW1lT2JqUG9vbC5nZXRJbnN0YW5jZSgpLmFzeW5jU3Bhd24odGhpcy5fY29uZmlnRGF0YS5oaXRFZmZlY3QpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkTG9jYXRpb24oZW5kUG9zKVxyXG4gICAgfVxyXG4gICAgcHVibGljIElnbm9yZVNlbGYoaWdub3JlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX2lzSWdub3JpbmdTZWxmID0gaWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0RmlyZUNvbmRpdGlvbihzaWRlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5faGFzRmlyZUNvbmRpdGlvbiA9IHRydWVcclxuICAgICAgICB0aGlzLl9maXJlQ29uZGl0aW9uU2lkZSA9IHNpZGVcclxuICAgIH1cclxuICAgIHB1YmxpYyBDYW5jZWxGaXJlQ29uZGl0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5faGFzRmlyZUNvbmRpdGlvbiA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVHJ5RmlyZU9uZUJ1bGxldCgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fY3VyU2hvb3RNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5GaXJlTW9kZUVudW0uU2luZ2xlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5GaXJlTW9kZUVudW0uUmFwaWRseV8xOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gdGhpcy5fY29uZmlnRGF0YS5yYXBpZGx5XzFcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLlJhcGlkbHlfMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IHRoaXMuX2NvbmZpZ0RhdGEucmFwaWRseV8yXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBUcnlLZWVwRmlyZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyAmJiB0aGlzLl9jdXJTaG9vdE1vZGUgPT0gR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5BdXRvKXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVHJ5UHVtcChiOmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKHRoaXMuX2NvbmZpZ0RhdGEucHVtcEFmdGVyRmlyZSAmJiB0aGlzLl9pc1pvb21JbiAmJiAhdGhpcy5faXNQdW1waW5nKXtcclxuICAgICAgICAgICAgLy9cdTVGMDBcdTY3QUFcdTU0MEVcdTg5ODFcdTYyQzlcdTY4MTNcdTVFNzZcdTRFMTRcdTczQjBcdTU3MjhcdTY2MkZcdTVGMDBcdTk1NUNcdTcyQjZcdTYwMDFcclxuICAgICAgICAgICAgdGhpcy5fem9vbUluVHJ5UHVtcCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWIpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYXV0b0ZpcmVBaW0gPSBiXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTWVjaGFuaWNhbEFpbVN0YXJ0KCk6dm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5faXNab29tSW4gfHwgIXRoaXMuX2lzZHJhdyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighKHRoaXMuY2hhcmFjdGVyLm1vdmVtZW50U3RhdGUgPT0gTW92ZW1lbnRNb2RlLldhbGspIHx8IHRoaXMuX2lzUHVtcGluZyB8fCB0aGlzLl9vblJlbG9hZCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc1pvb21JbiA9IHRydWVcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLk1lY2hhbmljYWxBaW1TdGFydCgpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuTWVjaGFuaWNhbEFpbVN0YXJ0KClcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5BaW1JbiwgdGhpcylcclxuICAgIH1cclxuICAgIHB1YmxpYyBNZWNoYW5pY2FsQWltU3RvcCgpOnZvaWR7XHJcbiAgICAgICAgaWYoISh0aGlzLl9pc1pvb21JbiAmJiB0aGlzLl9pc2RyYXcpKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzWm9vbUluID0gZmFsc2VcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuQWltT3V0LCB0aGlzKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFdpdGhkcmF3V2VhcG9uKCk6dm9pZHtcclxuICAgICAgICBpZighdGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FpbUJlZm9yZVB1bXAgPSBmYWxzZVxyXG4gICAgICAgIGlmKHRoaXMuX2lzWm9vbUluKXtcclxuICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuT25VbkVxdWlwV2VhcG9uKHRydWUpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuU2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICB0aGlzLnByZWZhYi5zZXRWaXNpYmlsaXR5KFR5cGUuUHJvcGVydHlTdGF0dXMuT2ZmKVxyXG4gICAgICAgIGlmKHRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCA9IDBcclxuICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWVcclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUmVsb2FkRmluaXNoZWQsIHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzZHJhdyA9IGZhbHNlXHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuV2l0aERyYXdXZWFwb24sIHRoaXMpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRHJhd1dlYXBvbigpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzV2l0aERyYXdpbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5faXNkcmF3ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2FpbUJlZm9yZVB1bXAgPSBmYWxzZVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLlNldFZpc2libGUodHJ1ZSlcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLk9uRXF1aXBXZWFwb24odGhpcywgbnVsbClcclxuICAgICAgICB0aGlzLnByZWZhYi5zZXRWaXNpYmlsaXR5KFR5cGUuUHJvcGVydHlTdGF0dXMuT24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5faXNXYWl0aW5nUHVtcCl7XHJcbiAgICAgICAgICAgIHRoaXMuUHVtcFN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dpdGhEcmF3aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApOyAgICAgICBcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5EcmF3V2VhcG9uLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBDb25zdW1lKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWFnYXppbmUuQ29uc3VtZSgpKClcclxuICAgIH1cclxuICAgIHB1YmxpYyBDaGFuZ2VTaG9vdE1vZGUoKTpHYW1lQ29uc3QuRmlyZU1vZGVFbnVtIHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcgJiYgdGhpcy5faXNBbGxvd2VkKXtcclxuICAgICAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5zaG9vdE1vZGUubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAvL3lcdTY3MDlcdTU5MUFcdTc5Q0RcdTVDMDRcdTUxRkJcdTZBMjFcdTVGMEZcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0SW5kZXg6bnVtYmVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdEYXRhLnNob290TW9kZS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PSB0aGlzLl9jdXJTaG9vdE1vZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RNb2RlW25leHRJbmRleF0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyU2hvb3RNb2RlID0gdGhpcy5fY29uZmlnRGF0YS5zaG9vdE1vZGVbbmV4dEluZGV4XSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VyU2hvb3RNb2RlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFJheUNhc3RPcmlnaW4oKTpWZWN0b3J7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKS5hZGQodGhpcy5jaGFyYWN0ZXIuZ2V0Rm9yd2FyZFZlY3RvcigpLm11bHRpcGx5KDAuNSkuYWRkKChWZWN0b3IudXAubXVsdGlwbHkodGhpcy5jaGFyYWN0ZXIuY2Fwc3VsZUhhbGZIZWlnaHQgKiAyIC0gMC4xKSkpKSBcclxuICAgIH1cclxuICAgIHB1YmxpYyBSYXlDYXN0VGFyZ2V0KCk6VmVjdG9ye1xyXG4gICAgICAgIGxldCBbaW5mbywgaXNUYXJnZXRdOltWZWN0b3IsIGJvb2xlYW5dID0gdGhpcy5fY2FtZXJhQ29udHJvbC5HZXRUYXJnZXQoKVxyXG4gICAgICAgIGlmKGlzVGFyZ2V0KXtcclxuICAgICAgICAgICAgcmV0dXJuIGluZm9cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGluZm8ubXVsdGlwbHkodGhpcy5fY29uZmlnRGF0YS5kaXN0YW5jZSkuYWRkKHRoaXMubXV6emxlT2JqLmdldFdvcmxkTG9jYXRpb24oKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIE92ZXJsb2FkUmF5Q2FzdChkaXI6VmVjdG9yKTpHYW1lQ29uc3QuV2VhcG9uSGl0UmVzdWx0e1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLlJheUNhc3RPcmlnaW4oKS5hZGQoZGlyLm11bHRpcGx5KHRoaXMuX2NvbmZpZ0RhdGEuZGlzdGFuY2UpKVxyXG4gICAgICAgIGxldCBpbmZvID0gR2FtZXBsYXkubGluZVRyYWNlKHRoaXMuUmF5Q2FzdE9yaWdpbigpLCB0YXJnZXQpXHJcbiAgICAgICAgbGV0IHJlc3VsdDpHYW1lQ29uc3QuV2VhcG9uSGl0UmVzdWx0XHJcbiAgICAgICAgaWYoaW5mby5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTUyMjRcdTVCOUFcdTU0N0RcdTRFMkRcdTY2MkZcdTk3NzZcdTVCNTBcdTYyMTZcdTgwMDVcdTk2OUNcdTc4OERcdTcyNjlcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5mbywga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGluZm9ba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmdhbWVPYmplY3QgaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIgJiYgZWxlbWVudC5nYW1lT2JqZWN0ICE9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1NTQ3RFx1NEUyRFx1NzY4NFx1NjYyRlx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2FtZU9iamVjdC5nZXRDb2xsaXNpb24oKSA9PSBUeXBlLkNvbGxpc2lvblN0YXR1cy5Pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXRQb2ludCA9IGVsZW1lbnQuaW1wYWN0UG9pbnRcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0T2JqZWN0ID0gZWxlbWVudC5nYW1lT2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkhpdE5vcm1hbCA9IGVsZW1lbnQuaW1wYWN0Tm9ybWFsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGluZm8pIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbmZvLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW5mb1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5nYW1lT2JqZWN0IGluc3RhbmNlb2YgR2FtZXBsYXkuQ2hhcmFjdGVyKXtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzNBOVx1NUJCNlx1NjYyRlx1NTQyNlx1NTNFRlx1NEVFNVx1ODhBQlx1NTQ3RFx1NEUyRFx1NTIyNFx1NjVBRFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzNBOVx1NUJCNlx1NjYyRlx1NTQyNlx1NURGMlx1N0VDRlx1NkI3Qlx1NEVBMVx1NzY4NFx1NTIyNFx1NjVBRFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU1MjI0XHU1QjlBXHU1NDdEXHU0RTJEXHU3M0E5XHU1QkI2XHU3Njg0XHU5MEU4XHU0RjRELFx1NTIyNFx1NUI5QVx1NjIxMFx1NTI5Rlx1NTQwRVx1NzZGNFx1NjNBNVx1OEZENFx1NTZERVxyXG4gICAgICAgIGluZm8uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBDYWxjdWxhdGVSYXlDYXN0RGlyZWN0aW9uKCk6VmVjdG9ye1xyXG4gICAgICAgIGxldCBkaXIgPSB0aGlzLlJheUNhc3RUYXJnZXQoKS5zdWJ0cmFjdCh0aGlzLlJheUNhc3RPcmlnaW4oKSkubm9ybWFsaXplZFxyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb25Db250cm9sbGVyLm5vU2hvb3RpbmdTdGF0ZSkge1xyXG4gICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1NEUzQVx1NEUwRFx1NTNFRlx1NUMwNFx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICAgICAgICBkaXIgPSB0aGlzLm11enpsZU9iai5mb3J3YXJkVmVjdG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc1pvb21JbiAmJiB0aGlzLl9jb25maWdEYXRhLmFjY3VyYXRlQWltKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFdlYXBvblRvb2wuUmFuZG9tUm90YXRlKGRpciwgdGhpcy5fcmVjb2lsLl9jdXJyZW50RXJyb3IpICAgICBcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBGaXJlKGRlbGF5Om51bWJlciwgY29uc3VtZTpib29sZWFuKXtcclxuICAgICAgICBsZXQgaXNGcmllbmQgPSBmYWxzZVxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLkNhbGN1bGF0ZVJheUNhc3REaXJlY3Rpb24oKVxyXG4gICAgICAgIGxldCBoaXQgPSB0aGlzLk92ZXJsb2FkUmF5Q2FzdChkaXJlY3Rpb24pXHJcbiAgICAgICAgdGhpcy5faGFzSnVzdEZpcmVkID0gdHJ1ZVxyXG4gICAgICAgIGlmKCFpc0ZyaWVuZCAmJiBoaXQpe1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gaGl0LkhpdFBvaW50XHJcbiAgICAgICAgICAgIGxldCBlbmROb3JtID0gaGl0LkhpdE5vcm1hbFxyXG4gICAgICAgICAgICBsZXQgZW5kT2JqID0gaGl0LkhpdE9iamVjdFxyXG4gICAgICAgICAgICBpZihjb25zdW1lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29uc3VtZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaGl0LkhpdE9iamVjdCA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGVuZFBvcyA9IHRoaXMuUmF5Q2FzdE9yaWdpbigpLmFkZChkaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5fY29uZmlnRGF0YS5kaXN0YW5jZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5NYWtlQnVsbGV0KGVuZE9iaiwgZW5kUG9zLCBlbmROb3JtKVxyXG4gICAgICAgICAgICBpZihoaXQuSXNUYXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgaGl0LkRhbWFnZSA9IHRoaXMuX2NvbmZpZ0RhdGEuZGFtYWdlXHJcbiAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5TdWNjZXNzZnVsbHlIaXRUYXJnZXQsIHRoaXMsIGhpdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgRGFtYWdlKGhpdCA6IEdhbWVDb25zdC5XZWFwb25IaXRSZXN1bHQpe1xyXG4gICAgICAgIGxldCBoaXRQb3MgPSBoaXQuSGl0UG9pbnRcclxuICAgICAgICBsZXQgYXR0ZW51YXRpb246bnVtYmVyXHJcbiAgICAgICAgaWYoaGl0UG9zID09IG51bGwpe1xyXG4gICAgICAgICAgICBhdHRlbnVhdGlvbiA9IDBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGRpczpudW1iZXIgPSBoaXRQb3Muc3VidHJhY3QodGhpcy5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpKS5tYWduaXR1ZGVcclxuICAgICAgICAgICAgYXR0ZW51YXRpb24gPSBXZWFwb25Ub29sLkdldEF0dGVudWF0aW9uQnlHdW5JZCgxLCB0aGlzLCBkaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLl9jb25maWdEYXRhLmRhbWFnZSArIGF0dGVudWF0aW9uXHJcbiAgICAgICAgZGFtYWdlID0gZGFtYWdlIDw9IDAgPyAwIDogZGFtYWdlXHJcbiAgICAgICAgc3dpdGNoIChoaXQuSGl0UGFydCkge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5IaXRQYXJ0RW51bS5MaW1iOlxyXG4gICAgICAgICAgICAgICAgZGFtYWdlID0gZGFtYWdlICogdGhpcy5fY29uZmlnRGF0YS5oaXRMaW1iRGFtYWdlUmF0ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkhpdFBhcnRFbnVtLkJvZHk6XHJcbiAgICAgICAgICAgICAgICBkYW1hZ2UgPSBkYW1hZ2UgKiB0aGlzLl9jb25maWdEYXRhLmhpdEJvZHlEYW1hZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuSGl0UGFydEVudW0uSGVhZDpcclxuICAgICAgICAgICAgICAgIGRhbWFnZSA9IGRhbWFnZSAqIHRoaXMuX2NvbmZpZ0RhdGEuaGl0SGVhZERhbWFnZVJhdGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRhbWFnZSA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UGxheWVyIDogQ2hhcmFjdGVyIFxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5TdWNjZXNzZnVsbHlIaXQsIGhpdFBvcywgdGFyZ2V0UGxheWVyLCBkYW1hZ2UsIGhpdC5IaXRQYXJ0KVxyXG4gICAgICAgICAgICAvL1x1NEYyNFx1NUJCM1x1NTNEMVx1OEQ3N1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFJlZnJlc2hTY2FsZXMoKSB7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDFcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25SZWNvaWxDbHMgfSBmcm9tIFwiLi9XZWFwb25SZWNvaWxDbHNcIjtcclxuaW1wb3J0IHsgVHdlZW5VdGlsIH0gZnJvbSBcIi4uL1Rvb2wvVHdlZW5VdGlsXCI7XHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCI7XHJcbmltcG9ydCB7IENhbWVyYUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9DYW1lcmFDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uQ2FtZXJhQ2xze1xyXG4gICAgZ3VuUmVjb2lsIDogV2VhcG9uUmVjb2lsQ2xzXHJcbiAgICBndW4gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBtX2NhbWVyYSA6IENhbWVyYVN5c3RlbVxyXG4gICAgbV9vcmlnaW5ab29tIDogbnVtYmVyXHJcbiAgICBtX3N1cHBvc2VkWm9vbSA6IG51bWJlclxyXG4gICAgbV9zaWdodFpvb20gOiBudW1iZXJcclxuICAgIGFpbVRpbWUgOiBudW1iZXJcclxuICAgIG1faXNab29tSW4gOiBib29sZWFuXHJcbiAgICBtX29yaWdpbk9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9haW1PZmZzZXQgOiBWZWN0b3JcclxuICAgIG1fY3VycmVudE9mZnNldCA6IFZlY3RvclxyXG4gICAgaXNVcGRhdGluZyA6IGJvb2xlYW5cclxuICAgIHNjcmVlblNpemUgOiBWZWN0b3IyXHJcbiAgICBtX3NlbnNpdGl2aXR5IDogbnVtYmVyXHJcbiAgICBtX29yaWdpbkRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBkaXN0YW5jZSA6IG51bWJlclxyXG4gICAgbV9haW1EaXN0YW5jZSA6IG51bWJlclxyXG4gICAgbV9nYW1tYSA6IG51bWJlclxyXG4gICAgZGVsdGFQaHkgOiBudW1iZXJcclxuICAgIGRlbHRhVGhldGEgOiBudW1iZXJcclxuICAgIG1fZGVsdGFGT1YgOiBudW1iZXJcclxuICAgIG1fbGFzdE1vdXNlUG9zIDogVmVjdG9yMlxyXG4gICAgdmlicmF0aW9uQW1wbCA6IG51bWJlclxyXG4gICAgbV9iYWNrVGltZSA6IG51bWJlclxyXG4gICAgbV9qdW1wVG90YWwgOiBWZWN0b3IyXHJcbiAgICBtX2JhY2tUb3RhbCA6IG51bWJlclxyXG4gICAgZW5hYmxlQXNzaXN0QWltIDogYm9vbGVhblxyXG4gICAgYWltRW5lbXkgOiBDaGFyYWN0ZXJcclxuICAgIEFpbWluZ0lzT3ZlciA6IGJvb2xlYW5cclxuICAgIG1fanVtcEZvdlJhdGVTY2FsZSA6IG51bWJlclxyXG4gICAgbV9haW1UaW1lUmF0ZVNjYWxlIDogbnVtYmVyXHJcbiAgICBsYXN0Wm9vbSA6IG51bWJlclxyXG4gICAgdGFyZ2V0Q2FsbFRpbWUgOiBudW1iZXJcclxuICAgIHRhcmdldFJldHVybiA6IFtWZWN0b3IsIGJvb2xlYW5dXHJcbiAgICBtX2p1bXBGb3ZSYXRlVGFibGUgOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+XHJcbiAgICBtX2FpbVRpbWVSYXRlVGFibGUgOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+XHJcbiAgICBcclxuICAgIHNlbGZTcGluQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGp1bXBGT1ZDb250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAganVtcENvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICByZWNvdmVyQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGFzc2lzdEFpbUNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBhaW1Db250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAgZGVhaW1Db250cm9sbGVyOlR3ZWVuVXRpbFxyXG5cclxuICAgIGNvbmZpZ0RhdGEgOiBHYW1lQ29uc3QuV2VhcG9uQ2FtZXJhQ29uZmlnRGF0YVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9ndW5SZWNvaWw6V2VhcG9uUmVjb2lsQ2xzKXtcclxuICAgICAgICBXZWFwb25Ub29sLkluaXRXZWFwb25DYW1lcmFDb25maWcodGhpcylcclxuICAgICAgICB0aGlzLmd1blJlY29pbCA9IF9ndW5SZWNvaWxcclxuICAgICAgICB0aGlzLmd1biA9IF9ndW5SZWNvaWwuZ3VuXHJcbiAgICAgICAgdGhpcy5tX29yaWdpblpvb20gPSB0aGlzLmd1bi5fY29uZmlnRGF0YS53YWlzdEFpbUZPVlxyXG4gICAgICAgIHRoaXMubV9zdXBwb3NlZFpvb20gPSB0aGlzLm1fb3JpZ2luWm9vbVxyXG4gICAgICAgIHRoaXMubV9zaWdodFpvb20gPSB0aGlzLmd1bi5fY29uZmlnRGF0YS5tZWNoaW5pY2FsQWltRk9WXHJcbiAgICAgICAgdGhpcy5haW1UaW1lID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYWltVGltZVxyXG4gICAgICAgIC8vdGhpcy5tX29yaWdpbk9mZnNldCA9IFx1NTE2OFx1NUM0MFx1OTE0RFx1N0Y2RVxyXG4gICAgICAgIC8vdGhpcy5tX2FpbU9mZnNldCA9IFx1NTE2OFx1NUM0MFx1OTE0RFx1N0Y2RVxyXG4gICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX29yaWdpbk9mZnNldFxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zY3JlZW5TaXplID0gV2luZG93VXRpbC5nZXRWaWV3cG9ydFNpemUoKVxyXG4gICAgICAgIC8vdGhpcy5tX3NlbnNpdGl2aXR5ID0gXHJcbiAgICAgICAgLy90aGlzLm1fb3JpZ2luRGlzdGFuY2UgPSBcclxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5tX29yaWdpbkRpc3RhbmNlXHJcbiAgICAgICAgLy90aGlzLm1fYWltRGlzdGFuY2UgPSBcclxuICAgICAgICB0aGlzLm1fZ2FtbWEgPSAwXHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSAwXHJcbiAgICAgICAgdGhpcy5tX2RlbHRhRk9WID0gMFxyXG4gICAgICAgIHRoaXMubV9sYXN0TW91c2VQb3MgPSBuZXcgVmVjdG9yMigpXHJcbiAgICAgICAgdGhpcy52aWJyYXRpb25BbXBsID0gMFxyXG4gICAgICAgIHRoaXMubV9iYWNrVGltZSA9IDBcclxuICAgICAgICB0aGlzLm1fanVtcFRvdGFsID0gVmVjdG9yMi56ZXJvXHJcbiAgICAgICAgdGhpcy5tX2JhY2tUb3RhbCA9IDBcclxuICAgICAgICAvL3RoaXMuZW5hYmxlQXNzaXN0QWltID0gZmFsc2VcclxuICAgICAgICB0aGlzLmFpbUVuZW15ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuQWltaW5nSXNPdmVyID0gZmFsc2VcclxuICAgICAgICB0aGlzLm1fanVtcEZvdlJhdGVTY2FsZSA9IDFcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVTY2FsZSA9IDFcclxuICAgICAgICAvKip6XHU4Rjc0XHU2NUNCXHU4RjZDXHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgcmVtblBoYXNlID0gMiAqIE1hdGguUEkgLSB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInBoYXNlXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLm1fYmFja1RpbWUsIHJlbW5QaGFzZSAvIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsdDM6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2dhbW1hID0gdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJBbXBsXCIpICogTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogdDEpICogXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNpbih0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgKiB0MSkgKyB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInBoYXNlXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9nYW1tYSA9IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5oYXMoXCJwaGFzZVwiKXx8IXRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuaGFzKFwiQW1wbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwicGhhc2VcIiwgMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcIkFtcGxcIiwgdGhpcy52aWJyYXRpb25BbXBsICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBBID0gdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJBbXBsXCIpICogTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIudGltZSlcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wMCA9IHRlbXBBICogdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhICogXHJcbiAgICAgICAgICAgICAgICBNYXRoLmNvcyh0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgKiB0aGlzLnNlbGZTcGluQ29udHJvbGxlci50aW1lICsgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJwaGFzZVwiKSlcclxuICAgICAgICAgICAgICAgIGxldCBkZWx0YSA9IHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAqIHRoaXMudmlicmF0aW9uQW1wbCAqIFdlYXBvblRvb2wuR2F1c3NSYW5kb20oKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1BoYXNlID0gTWF0aC5hdGFuKHRoaXMubV9nYW1tYSAqIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAvIChkZWx0YSArdGVtcDApKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0FtcGwgPSAoZGVsdGEgKyB0ZW1wMCkgLyB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgLyBNYXRoLmNvcyhuZXdQaGFzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwicGhhc2VcIiwgbmV3UGhhc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcIkFtcGxcIiwgbmV3QW1wbClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAvKipcdThERjNcdTUyQThGT1ZcdTUyQThcdTc1M0IgKi9cclxuICAgICAgICB0aGlzLmp1bXBGT1ZDb250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBzdGRTcGVlZCA9IHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJqdW1wRk9WXCIpIC8gdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RkU3BlZWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMiAqIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZSArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJqdW1wRk9WXCIpIC0gdGhpcy5tX2RlbHRhRk9WKSAvIHN0ZFNwZWVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGlmICh0MiAtdDEgPiAyICogdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2RlbHRhRk9WICs9IGR0ICogdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIikgLyB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tX2RlbHRhRk9WID0gKHQyIC10MSkvKDIgKiB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWUpICogdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2RlbHRhRk9WID0gMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImp1bXBGT1ZcIiwgdGhpcy5HZXRKdW1wRk9WKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLyoqXHU2N0FBXHU1M0UzXHU4REYzXHU1MkE4XHU2MDNCXHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGxldCBvbWVnYSA9IDAuNSAqIE1hdGguUEkgLyB0MlxyXG4gICAgICAgICAgICAgICAgbGV0IHBvd2VyID0gb21lZ2EgKiBNYXRoLmNvcyhvbWVnYSAqICh0MSAtIDAuNSAqIGR0KSkgKiBkdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVRoZXRhID0gdGhpcy5kZWx0YVRoZXRhICsgcG93ZXIgKiB0aGlzLm1fanVtcFRvdGFsLnlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFQaHkgPSB0aGlzLmRlbHRhUGh5ICsgcG93ZXIgKiB0aGlzLm1fanVtcFRvdGFsLnhcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiICwgdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInRvdGFsXCIpLnN1YnRyYWN0KHRoaXMubV9qdW1wVG90YWwubXVsdGlwbHkocG93ZXIpKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVRoZXRhICs9IHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJ0b3RhbFwiKS55XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhUGh5ICs9IHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJ0b3RhbFwiKS54XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwidG90YWxcIiwgbmV3IFZlY3RvcjIoKSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFpbUVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5hc3Npc3RBaW1Db250cm9sbGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkdVSS5GaXJlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZWNvdmVyQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qdW1wQ29udHJvbGxlci5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCB0aGlzLm1fanVtcFRvdGFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8qKlx1NjdBQVx1NTNFM1x1NTZERVx1NTkwRFx1NjAzQlx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9iYWNrVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgQW1wbCA9IHRoaXMubV9iYWNrVG90YWwgKiB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAvICgxIC0gTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogdDIpKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gQW1wbCAqIE1hdGguZXhwKC10aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAqICh0MSAtIDAuNSAqIGR0KSkgKiBkdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVRoZXRhID0gdGhpcy5kZWx0YVRoZXRhIC0gZGVsdGFcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCB0aGlzLnJlY292ZXJDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwidG90YWxcIikgKyBkZWx0YSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8qKlx1OEY4NVx1Nzc4NFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoX3QxOm51bWJlcixfdDI6bnVtYmVyLF9kdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWltRW5lbXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHRoaXMuYWltRW5lbXkpXHJcbiAgICAgICAgICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NURGMlx1N0VDRlx1NTcyOFx1Nzc4NFx1Nzc0MFx1NEVCQVx1NEU4Nlx1NTIxOVx1NTA1Q1x1NkI2MlxyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS5ub3JtYWxpemVkXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRDYW1lcmFQb3MoKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IEdhbWVwbGF5LmxpbmVUcmFjZShwb3MuYWRkKGRpci5tdWx0aXBseSgwLjUpKSwgcG9zLmFkZChkaXIubXVsdGlwbHkodGhpcy5ndW4uX2NvbmZpZ0RhdGEuZGlzdGFuY2UpKSlcclxuICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKCh2ICxrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuZ2FtZU9iamVjdCA9PSB0aGlzLmFpbUVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzQ2hhbmdlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NjJDOVx1OEZDN1x1NTkzNFx1NEU4Nlx1NTIxOVx1NTA1Q1x1NkI2MlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5Jc1JpZ2h0KHRhcmdldFBvcykhPSB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc0NoYW5nZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiaXNDaGFuZ2VcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc0NoYW5nZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgKz0gX2R0ICogdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwib21lZ2FUaGV0YVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVBoeSArPSBfZHQgKiB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJvbWVnYVBoeVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHRoaXMuYWltRW5lbXkpXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSB0YXJnZXRQb3Muc3VidHJhY3QodGhpcy5HZXRDYW1lcmFQb3MoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzUmlnaHRcIiwgdGhpcy5Jc1JpZ2h0KHRhcmdldFBvcykpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJpc0NoYW5nZVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGxldCB0aGV0YVRvdGFsID0gTWF0aC5hdGFuKHJlbGF0aXZlUG9zLnkgLyBuZXcgVmVjdG9yMihyZWxhdGl2ZVBvcy54LCByZWxhdGl2ZVBvcy56KS5tYWduaXR1ZGUpLVxyXG4gICAgICAgICAgICAgICAgKDkwIC0gVmVjdG9yLmFuZ2xlKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSkgLyAxODAgKiBNYXRoLlBJXHJcbiAgICAgICAgICAgICAgICBsZXQgcGh5VG90YWwgPSBWZWN0b3IyLmFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKHJlbGF0aXZlUG9zLngsIHJlbGF0aXZlUG9zLnopLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS54LCB0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCkueilcclxuICAgICAgICAgICAgICAgICkgKlxyXG4gICAgICAgICAgICAgICAgTWF0aC5QSSAvIDE4MCAqXHJcbiAgICAgICAgICAgICAgICAodGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwiaXNSaWdodFwiKSA/IC0xIDogMSlcclxuICAgICAgICAgICAgICAgIGxldCByYXRpbyA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLmFzc2lzdEFpbVJhdGlvIC8gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltVGltZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwib21lZ2FUaGV0YVwiLCB0aGV0YVRvdGFsICogcmF0aW8pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJvbWVnYVBoeVwiLCBwaHlUb3RhbCAqIHJhdGlvKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vXHU1RjAwXHU5NTVDXHU2MDNCXHU1MkE4XHU3NTNCXHJcbiAgICAgICAgdGhpcy5haW1Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdldEFpbVRpbWUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9yID0gdDEgLyB0MlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9ICgxIC0gcG9yKSAqIHRoaXMubV9vcmlnaW5ab29tICsgcG9yICogdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwic2lnaHRab29tXCIpXHJcbiAgICAgICAgICAgICAgICBwb3IgPSBNYXRoLnNxcnQoMSAtICggMSAtIHBvcikgKiAoIDEgLSBwb3IpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRPZmZzZXQgPSB0aGlzLm1fb3JpZ2luT2Zmc2V0Lm11bHRpcGx5KDEgLSBwb3IpLmFkZCh0aGlzLm1fYWltT2Zmc2V0Lm11bHRpcGx5KHBvcikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gKDEtcG9yKSAqIHRoaXMubV9vcmlnaW5EaXN0YW5jZSArIHBvciAqIHRoaXMubV9haW1EaXN0YW5jZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwic2lnaHRab29tXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9haW1PZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fYWltRGlzdGFuY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuQWltaW5nSXNPdmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRlYWltQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmRlYWltQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9pc1pvb21JbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vXHU2NzJDXHU1NzMwXHU4QkJFXHU3RjZFXHU4OUQyXHU4MjcyXHU0RTBEXHU1M0VGXHU4OUMxXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwic2lnaHRab29tXCIsIHRoaXMuR2V0U2lnaHRGT1YoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkgICAgICAgXHJcbiAgICAgICAgLy9cdTUxNzNcdTk1NUNcdTYwM0JcdTY1QjlcdTZDRDVcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuc3RvcEFpbVRpbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsZHQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvciA9IHQxIC8gdDJcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZFpvb20gPSAoMS1wb3IpKnRoaXMuZGVhaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicHJlWm9vbVwiKStwb3IqdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX2FpbU9mZnNldC5tdWx0aXBseSgxIC0gcG9yKS5hZGQodGhpcy5tX29yaWdpbk9mZnNldC5tdWx0aXBseShwb3IpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9ICgxLXBvcikqdGhpcy5tX2FpbURpc3RhbmNlK3Bvcip0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9vcmlnaW5PZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAgICAgICAgIC8vdG9kbyBcdTY3MkNcdTU3MzBcdThCQkVcdTdGNkVcdTg5RDJcdTgyNzJcdTUzRUZcdTg5QzFcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFByb3BlcnRpZXMoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFpbUNvbnRyb2xsZXIuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9pc1pvb21JbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInByZVpvb21cIiwgdGhpcy5tX3N1cHBvc2VkWm9vbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5FbmRBbGwoKVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKGR0Om51bWJlcikge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzVXBkYXRpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZXRQcm9wZXJ0aWVzKClcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgdGhpcy5tX2FpbVRpbWVSYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5haW1UaW1lUmF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm1fanVtcEZvdlJhdGVUYWJsZS5zZXQoaywgdi5jb25maWdEYXRhLmp1bXBGb3ZSYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5qdW1wRk9WQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLnJlY292ZXJDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyLCBkdClcclxuXHJcbiAgICAgICAgdGhpcy5SZWZyZXNoU2NhbGVzKClcclxuICAgICAgICB0aGlzLlJlZnJlc2hTZXR0aW5ncygpXHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSAwXHJcbiAgICB9XHJcbiAgICBPbkVxdWlwV2VhcG9uKF9ndW5Db250cm9sbGVyIDogV2VhcG9uQmFzZUNscywgaW5mbykge1xyXG4gICAgICAgIHRoaXMuZ3VuID0gX2d1bkNvbnRyb2xsZXJcclxuICAgICAgICB0aGlzLm1fY2FtZXJhID0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5jYW1lcmFTeXN0ZW1cclxuICAgICAgICB0aGlzLmxhc3Rab29tID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFGT1ZcclxuICAgICAgICBsZXQgdCA9IG5ldyBUcmFuc2Zvcm0oKVxyXG4gICAgICAgIHQucm90YXRpb24gPSB0aGlzLm1fY2FtZXJhLmNhbWVyYVN5c3RlbVJlbGF0aXZlVHJhbnNmb3JtLnJvdGF0aW9uXHJcbiAgICAgICAgdC5zY2FsZSA9IHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0uc2NhbGVcclxuICAgICAgICB0LmxvY2F0aW9uID0gbmV3IFZlY3RvcigwLCAwLCBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhcHN1bGVIYWxmSGVpZ2h0ICogMikuYWRkKHRoaXMubV9jdXJyZW50T2Zmc2V0KVxyXG4gICAgICAgIHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0gPSB0XHJcbiAgICAgICAgdGhpcy5tX3NpZ2h0Wm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLm1lY2hpbmljYWxBaW1GT1ZcclxuICAgICAgICB0aGlzLm1fb3JpZ2luWm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLndhaXN0QWltRk9WXHJcbiAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5maWVsZE9mVmlldyA9IHRoaXMubV9zaWdodFpvb21cclxuICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSB0cnVlXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5ndW4gPSB0aGlzLmd1blxyXG4gICAgfVxyXG4gICAgSW5wdXRSZWNvaWwoX3JlY29pbCA6IFdlYXBvblJlY29pbENscyl7XHJcbiAgICAgICAgdGhpcy5tX2JhY2tUaW1lID0gdGhpcy5HZXRCYWNrVGltZSgpXHJcbiAgICAgICAgbGV0IHZlcnQgPSBfcmVjb2lsLkdldFZlcnRpY2FsKCkgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgdGhpcy5tX2JhY2tUb3RhbCA9IF9yZWNvaWwuX2NvbmZpZ0RhdGEuYmFja1RvdGFsICogdmVydFxyXG4gICAgICAgIHRoaXMudmlicmF0aW9uQW1wbCA9IF9yZWNvaWwuR2V0U2VsZlNwaW5SYW5nZSgpICogTWF0aC5QSSAvIDE4MFxyXG4gICAgICAgIHRoaXMubV9qdW1wVG90YWwgPSBuZXcgVmVjdG9yMihfcmVjb2lsLkdldEhvcml6b250YWwoKSAqIE1hdGguUEkgLyAxODAsIHZlcnQpXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLnNlbGZTcGluQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5qdW1wQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLnJlY292ZXJDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5yZWNvdmVyQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5qdW1wRk9WQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIENyb3VjaCgpe1xyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5TdG9wRnVuY3Rpb24odGhpcy5hc3Npc3RBaW1Db250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgTWVjaGFuaWNhbEFpbVN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5BaW1pbmdJc092ZXIgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIEdldEFzc2lzdEFpbURpcygpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lzWm9vbUluID8gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltRGlzMSA6IHRoaXMuZ3VuLl9jb25maWdEYXRhLmFzc2lzdEFpbURpczBcclxuICAgIH1cclxuICAgIE1lY2hhbmljYWxBaW1TdG9wKCl7XHJcbiAgICAgICAgdGhpcy5kZWFpbUNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmRlYWltQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIEdldEFpbVRpbWUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWltVGltZSArIHRoaXMubV9haW1UaW1lUmF0ZVNjYWxlXHJcbiAgICB9XHJcbiAgICBHZXRCYWNrVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5ndW4uX3JlY29pbC5HZXRTaGFrZVRpbWUoKVxyXG4gICAgfVxyXG4gICAgT25VbkVxdWlwV2VhcG9uKF91c2VTdGF0ZUJlZm9yZSA6IGJvb2xlYW4pe1xyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZmllbGRPZlZpZXcgPSB0aGlzLmxhc3Rab29tXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5ndW4gPSBudWxsXHJcbiAgICAgICAgdGhpcy5FbmRBbGwoKVxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBHZXRFbmVtaWVzKCk6QXJyYXk8Q2hhcmFjdGVyPntcclxuICAgICAgICBsZXQgcmVzID0gbmV3IEFycmF5PENoYXJhY3Rlcj4oKVxyXG4gICAgICAgIEdhbWVwbGF5LmdldEFsbFBsYXllcnMoKS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIElzVmlzaWJsZShfZW5lbXk6Q2hhcmFjdGVyKTpib29sZWFue1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLkdldENhbWVyYVBvcygpXHJcbiAgICAgICAgbGV0IHJlcyA9IHRydWVcclxuICAgICAgICBsZXQgcmF5Q2FzdEhlYWQgPSBHYW1lcGxheS5saW5lVHJhY2UocG9zLCBfZW5lbXkuZ2V0V29ybGRMb2NhdGlvbigpLmFkZChWZWN0b3IudXAubXVsdGlwbHkoX2VuZW15LmNhcHN1bGVIYWxmSGVpZ2h0KSkpXHJcbiAgICAgICAgcmF5Q2FzdEhlYWQuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgaWYoISh2LmdhbWVPYmplY3QgaW5zdGFuY2VvZiBDaGFyYWN0ZXIpIHx8ICh2LmdhbWVPYmplY3QgIT0gX2VuZW15ICYmICh2LmdhbWVPYmplY3QpICE9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpKXtcclxuICAgICAgICAgICAgICAgIHJlcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgRW5kQWxsKCkge1xyXG4gICAgICAgIGlmKHRoaXMubV9pc1pvb21Jbil7XHJcbiAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuc2VsZlNwaW5Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLmp1bXBGT1ZDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLnJlY292ZXJDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuXHJcbiAgICB9XHJcbiAgICBSZWZyZXNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBSZWZyZXNoU2NhbGVzKCkge1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlVGFibGUuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspPT57XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgU2V0UHJvcGVydGllcygpIHtcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmRlbHRhVGhldGEgKz0gdGhpcy5kZWx0YVRoZXRhXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5kZWx0YVBoeSArPSB0aGlzLmRlbHRhUGh5XHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5nYW1tYSA9IHRoaXMubV9nYW1tYVxyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZmllbGRPZlZpZXcgPSB0aGlzLm1fc3VwcG9zZWRab29tICsgdGhpcy5tX2RlbHRhRk9WXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2VcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLm9mZnNldCA9IHRoaXMubV9jdXJyZW50T2Zmc2V0XHJcbiAgICB9XHJcbiAgICBHZXRTaWdodEZPVigpOiBudW1iZXIge1xyXG4gICAgICAgIC8vXHU4MkU1XHU5MTREXHU0RUY2XHU0RTJEXHU2NzA5XHU0RTAwXHU0RTJBXHU5MTREXHU0RUY2XHU4QkJFXHU3RjZFXHU0RTg2XHU1OTI3XHU0RThFXHU5NkY2XHU3Njg0XHU1RjAwXHU5NTVDRk9WXHU1MjE5XHU3NkY0XHU2M0E1XHU4RkQ0XHU1NkRFXHU2QjY0XHU2NTcwXHU1MDNDLFx1NTQyNlx1NTIxOVx1OEZENFx1NTZERVx1NjdBQVx1NjhCMFx1ODFFQVx1OEVBQlx1NzY4NEZPVlxyXG4gICAgICAgIGxldCBmb3YgPSAwXHJcbiAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgaWYgKHYuY29uZmlnRGF0YS5haW1Gb3ZSYXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm92ID0gdi5jb25maWdEYXRhLmFpbUZvdlJhdGVcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZm92ICE9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEubWVjaGluaWNhbEFpbUZPVlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIElzUmlnaHQodGFyZ2V0UG9zOiBWZWN0b3IpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IuZG90KFZlY3Rvci5jcm9zcyh0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCksIFZlY3Rvci51cCksIHRhcmdldFBvcy5zdWJ0cmFjdCh0aGlzLkdldENhbWVyYVBvcygpKSkgPiAwXHJcbiAgICB9XHJcbiAgICBJc1VwKHRhcmdldFBvczogVmVjdG9yKTpib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSB0YXJnZXRQb3Muc3VidHJhY3QodGhpcy5HZXRDYW1lcmFQb3MoKSlcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuKHJlbGF0aXZlUG9zLnkgLyBuZXcgVmVjdG9yMihyZWxhdGl2ZVBvcy54LCByZWxhdGl2ZVBvcy56KS5tYWduaXR1ZGUpID4gKDkwIC0gVmVjdG9yLmFuZ2xlKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSAqIE1hdGguUEkgLyAxODApXHJcbiAgICB9XHJcbiAgICBEcmFnU3RhcnQoKXtcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gVUkuZ2V0TW91c2VQb3NpdGlvbk9uVmlld3BvcnQoKVxyXG4gICAgfVxyXG4gICAgR2V0Q2FtZXJhUG9zKCk6VmVjdG9yIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybS5sb2NhdGlvblxyXG4gICAgICAgIHJldHVybiBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKS5hZGQoV2VhcG9uVG9vbC5Sb3RhdGVWZWN0b3Iob2Zmc2V0LCBWZWN0b3IudXAsIEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuZ2V0V29ybGRSb3RhdGlvbigpLnopKVxyXG4gICAgfVxyXG4gICAgR2V0SnVtcEZPVigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ0RhdGEuanVtcEZPViAqIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlICogXHJcbiAgICAgICAgR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5jYW1lcmFTeXN0ZW0uY2FtZXJhRk9WIC8gdGhpcy5tX29yaWdpblpvb21cclxuICAgIH1cclxuICAgIEdldEFpbVBvcyhlbmVteTpDaGFyYWN0ZXIpOiBWZWN0b3Ige1xyXG4gICAgICAgIGxldCBwb3MxOlZlY3RvclxyXG4gICAgICAgIGxldCBwb3MyIDpWZWN0b3JcclxuICAgICAgICBwb3MxID0gZW5lbXkuZ2V0QXBwZWFyYW5jZTxIdW1hbm9pZFYyPigpLmdldFNsb3RXb3JsZFBvc2l0aW9uKFNsb3RUeXBlLkhlYWQpXHJcbiAgICAgICAgcG9zMiA9IGVuZW15LmdldEFwcGVhcmFuY2U8SHVtYW5vaWRWMj4oKS5nZXRTbG90V29ybGRQb3NpdGlvbihTbG90VHlwZS5CdXR0b2NrcylcclxuICAgICAgICByZXR1cm4gcG9zMS5tdWx0aXBseSgyKS5hZGQocG9zMikuZGl2aWRlKDMpXHJcbiAgICB9XHJcbiAgICBHZXRUYXJnZXQoKTpbVmVjdG9yLCBib29sZWFuXXtcclxuICAgICAgICBpZih0aGlzLnRhcmdldENhbGxUaW1lICYmIFRpbWVVdGlsLmVsYXBzZWRUaW1lKCkgLSB0aGlzLnRhcmdldENhbGxUaW1lIDwgMC4wMSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldFJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGlyID0gdGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLm5vcm1hbGl6ZWRcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRDYW1lcmFQb3MoKVxyXG4gICAgICAgIGxldCByYXljYXN0QWxsID0gR2FtZXBsYXkubGluZVRyYWNlKHBvcy5hZGQoZGlyLm11bHRpcGx5KDAuNSkpLCBwb3MuYWRkKGRpci5tdWx0aXBseSh0aGlzLmd1bi5fY29uZmlnRGF0YS5kaXN0YW5jZSkpKVxyXG4gICAgICAgIHRoaXMuYWltRW5lbXkgPSBudWxsXHJcbiAgICAgICAgaWYodGhpcy5lbmFibGVBc3Npc3RBaW0pe1xyXG4gICAgICAgICAgICBsZXQgbWluRGlzID0gdGhpcy5HZXRBc3Npc3RBaW1EaXMoKVxyXG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlOkNoYXJhY3RlclxyXG4gICAgICAgICAgICB0aGlzLkdldEVuZW1pZXMoKS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyN0VcdTUyMzBcdTY3MDBcdThGRDFcdTc2ODRcdTRFQkFcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLkdldEFpbVBvcyh2KVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldERpcyA9IHRhcmdldFBvcy5zdWJ0cmFjdChwb3MpLm1hZ25pdHVkZVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gVmVjdG9yLmFuZ2xlKGRpciwgdGFyZ2V0UG9zLnN1YnRyYWN0KHBvcykpXHJcbiAgICAgICAgICAgICAgICBsZXQgYWltRGlzID0gdGFyZ2V0RGlzICogTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgICAgICAgICAgICAgaWYoYW5nbGUgPCAzMCAmJiBhaW1EaXMgPD0gbWluRGlzICYmIHRoaXMuSXNWaXNpYmxlKHYpKXtcclxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSB2XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGlzID0gYWltRGlzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWltRW5lbXkgPSBjYW5kaWRhdGVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbmFsUG9pbnRcclxuICAgICAgICBsZXQgaVxyXG4gICAgICAgIHJheWNhc3RBbGwuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgaWYoISh2IGluc3RhbmNlb2YgQ2hhcmFjdGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmaW5hbFBvaW50ID0gdi5pbXBhY3RQb2ludFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGZpbmFsUG9pbnQpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJldHVybiA9IFtmaW5hbFBvaW50LCB0cnVlXVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJldHVybiA9IFtkaXIsIGZhbHNlXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldENhbGxUaW1lID0gVGltZVV0aWwuZWxhcHNlZFRpbWUoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFJldHVyblxyXG4gICAgfVxyXG4gICAgR2V0U2Vuc2l0aXZpdHkoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9jYW1lcmEuY2FtZXJhRk9WIC8gNjAgKiB0aGlzLm1fc2Vuc2l0aXZpdHlcclxuICAgIH1cclxuICAgIERyYWdIb2xkKCl7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBVSS5nZXRNb3VzZVBvc2l0aW9uT25WaWV3cG9ydCgpXHJcbiAgICAgICAgaWYoIXRoaXMubV9sYXN0TW91c2VQb3Mpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSArPSAodGVtcC54IC0gdGhpcy5tX2xhc3RNb3VzZVBvcy54KSAqIHRoaXMuc2NyZWVuU2l6ZS54ICogdGhpcy5HZXRTZW5zaXRpdml0eSgpXHJcbiAgICAgICAgdGhpcy5kZWx0YVRoZXRhICs9ICh0ZW1wLnkgLSB0aGlzLm1fbGFzdE1vdXNlUG9zLnkpICogdGhpcy5zY3JlZW5TaXplLnkgKiB0aGlzLkdldFNlbnNpdGl2aXR5KClcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gdGVtcFxyXG4gICAgfVxyXG4gICAgRHJhZ0VuZCgpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5tX2xhc3RNb3VzZVBvcyA9IG51bGxcclxuICAgIH1cclxuXHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvbkdVSUNsc3tcclxuXHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQW1tb0Jhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BbW1vQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiO1xyXG4vKipcdTY3QUFcdTY4QjBcdTZBMjFcdTU3NTdcdUZGMUFcdTVGMzlcdTU5MzlcdTU3RkFcdTdDN0IgKi9cclxuZXhwb3J0IGNsYXNzIFdlYXBvbk1hZ2F6aW5lQ2xze1xyXG4gICAgcHJpdmF0ZSB3ZWFwb24gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBwcml2YXRlIGlkIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGxlZnRBbW1vIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGFtbW9JbnZlbnRvcnkgOiBXZWFwb25BbW1vQmFzZUNsc1xyXG4gICAgcHJpdmF0ZSBsb2FkUGVyY2VudGFnZSA6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpc0Z1bGx5TG9hZGVkIDogYm9vbGVhblxyXG4gICAgcHVibGljIGlzRW1wdHlMb2FkZWQgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY2FuTG9hZGVkIDogYm9vbGVhblxyXG4gICAgcHJpdmF0ZSBsb2FkVGltZVJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPjtcclxuICAgIHByaXZhdGUgbG9hZFRpbWVSYXRlU2NhbGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbWF4QW1tb1JhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPjtcclxuICAgIHByaXZhdGUgbWF4QW1tb1JhdGVTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwcmVNYXhBbW1vIDogbnVtYmVyXHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnRGF0YTogR2FtZUNvbnN0LldlYXBvbk1hZ2F6aW5lQ29uZmlnRGF0YVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdlYXBvbiA6IFdlYXBvbkJhc2VDbHMpe1xyXG4gICAgICAgIFdlYXBvblRvb2wuSW5pdFdlYXBvbk1hZ2F6aW5lQ29uZmlnKHRoaXMpXHJcbiAgICAgICAgLy90aGlzLmxlZnRBbW1vID0gX2d1bi5ndW4uQW1tb0xlZnQuVmFsdWVcclxuICAgICAgICBsZXQgbW92ZUFtbW8gPSB0aGlzLmxlZnRBbW1vIC0gdGhpcy5fY29uZmlnRGF0YS5tYXhOdW1cclxuICAgICAgICBpZiAobW92ZUFtbW8gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gPSB0aGlzLl9jb25maWdEYXRhLm1heE51bVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vdmVBbW1vID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLlVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBVcGRhdGVGdWxseUxvYWRlZCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaXNGdWxseUxvYWRlZCA9IHRoaXMubGVmdEFtbW8gPj0gdGhpcy5HZXRNYXhBbW1vKClcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0Z1bGx5TG9hZGVkXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFVwZGF0ZUVtcHR5TG9hZGVkKCk6Ym9vbGVhbntcclxuICAgICAgICB0aGlzLmlzRW1wdHlMb2FkZWQgPSB0aGlzLmxlZnRBbW1vIDw9IDAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eUxvYWRlZFxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZUNhbkxvYWQoKTpib29sZWFue1xyXG4gICAgICAgIHRoaXMuY2FuTG9hZGVkID0gIXRoaXMuaXNGdWxseUxvYWRlZCAmJiB0aGlzLmFtbW9JbnZlbnRvcnkgJiYgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ID4gMFxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkxvYWRlZFxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZUxvYWRQZXJjZW50YWdlKCk6bnVtYmVye1xyXG4gICAgICAgIHRoaXMubG9hZFBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKHRoaXMubGVmdEFtbW8gLyB0aGlzLkdldE1heEFtbW8oKSAqIDEwMClcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkUGVyY2VudGFnZVxyXG4gICAgfVxyXG4gICAgQ29uc3VtZSgpOkZ1bmN0aW9ue1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRBbW1vID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyAtPSAxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBMb2FkT25lQnVsbGV0KCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLmNhbkxvYWRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gKz0gMVxyXG4gICAgICAgICAgICAvL3NlbGYubV9hbW1vSW52ZW50b3J5OlBsYXllckNvbnN1bWVBbW1vKDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIExvYWRNYWdhemluZSgpOnZvaWR7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBhZGRpdGlvbiA9IHRoaXMuR2V0TWF4QW1tbygpIC0gdGhpcy5sZWZ0QW1tb1xyXG4gICAgICAgICAgICAvL2FkZGl0aW9uID0gc2VsZi5tX2FtbW9JbnZlbnRvcnk6UGxheWVyQ29uc3VtZUFtbW8oYWRkaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gKz0gYWRkaXRpb25cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVGdWxseUxvYWRlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU1Mzc4XHU4RjdEL1x1NjZGNFx1NjM2Mlx1NTQwRSxcdTk3MDBcdTg5ODFcdTVDMDZcdTY3QUFcdTY4QjBcdTc2ODRcdTVCNTBcdTVGMzlcdTY2RjRcdTY1QjBcdTU3MjhcdTkxNERcdTRFRjZcdTc2ODRcdTgyODJcdTcwQjlcdTRFMEIgKi9cclxuICAgIFJlY29yZGluZ0J1bGxldHNMZWZ0KF9pc0JhY2tUb0J1bGxldEludmVudG9yeTpib29sZWFuKXtcclxuICAgICAgICBpZihfaXNCYWNrVG9CdWxsZXRJbnZlbnRvcnkgJiYgdGhpcy5hbW1vSW52ZW50b3J5KXtcclxuICAgICAgICAgICAgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ICs9IHRoaXMubGVmdEFtbW9cclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5VcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5wcmVNYXhBbW1vID4gdGhpcy5HZXRNYXhBbW1vKCkpe1xyXG4gICAgICAgICAgICAvKipcdThGRDlcdTRFMDBcdTVFMjdcdTUzNzhcdTRFMEJcdTRFODZcdTYyNjlcdTVCQjlcdTVGMzlcdTU5MzksXHU5NzAwXHU4OTgxXHU1RjNBXHU4ODRDXHU1MUNGXHU1QzExXHU1RjUzXHU1MjREXHU3Njg0XHU1QjUwXHU1RjM5ICovXHJcbiAgICAgICAgICAgIGlmKHRoaXMuR2V0TWF4QW1tbygpIDwgdGhpcy5sZWZ0QW1tbyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGFBbW1vID0gdGhpcy5sZWZ0QW1tbyAtIHRoaXMuR2V0TWF4QW1tbygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRBbW1vIC09IGRlbHRhQW1tb1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ICs9IGRlbHRhQW1tb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJlTWF4QW1tbyA9IHRoaXMuR2V0TWF4QW1tbygpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVGdWxseUxvYWRlZCgpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVFbXB0eUxvYWRlZCgpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVDYW5Mb2FkKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUxvYWRQZXJjZW50YWdlKClcclxuICAgICAgICAvKipcdTVDMDZcdTVGNTNcdTUyNERcdTc2ODRcdTUyNjlcdTRGNTlcdTVCNTBcdTVGMzlcdTY2RjRcdTY1QjBcdTUyMzBcdTU3M0FcdTY2NkZcdTRFMkRcdTc2ODRcdTgyODJcdTcwQjlcdTRFMEEgKi9cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLndlYXBvbi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRpbWVSYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5tYWdhemluZUxvYWRUaW1lUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLnNldChrLCB2LmNvbmZpZ0RhdGEubWF4QW1tb1JhdGUuZ2V0KHRoaXMud2VhcG9uLmlkKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hTY2FsZXMoKVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBSZWZyZXNoU2NhbGVzKCk6dm9pZHtcclxuICAgICAgICBsZXQgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWVSYXRlVGFibGUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWVSYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1heEFtbW9SYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRMb2FkVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5sb2FkVGltZSAqIHRoaXMubG9hZFRpbWVSYXRlU2NhbGVcclxuICAgIH1cclxuICAgIHByaXZhdGUgR2V0TWF4QW1tbygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4QW1tb1JhdGVTY2FsZSArIHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtID4gMCA/IHRoaXMubWF4QW1tb1JhdGVTY2FsZSArIHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtIDogMVxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiXHJcbnR5cGUgUmF0ZVN0cnVjdCA9IHtcclxuICAgIE1vdmU6bnVtYmVyXHJcbiAgICBDcm91Y2g6bnVtYmVyXHJcbn1cclxuZXhwb3J0IGNsYXNzIFdlYXBvblJlY29pbENsc3tcclxuICAgIHByaXZhdGUgaWQgOiBudW1iZXJcclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsU2NhbGU6IG51bWJlciA9IDFcclxuICAgIHByaXZhdGUgX2hvcml6b250YWxTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfbWluRXJyb3JTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfbWF4RXJyb3JTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfcmVjb3ZlclJhdGVTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfc2VsZlNwaW5SYW5nZVJhdGVTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF91bnN0YWJpbGl0eTogbnVtYmVyID0gMFxyXG4gICAgX2N1cnJlbnRFcnJvcjogbnVtYmVyID0gMFxyXG5cclxuICAgIHByaXZhdGUgX2hvcml6b250YWxSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF92ZXJ0aWNhbFJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuICAgIHByaXZhdGUgX21pbkVycm9yUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfbWF4RXJyb3JSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF9yZWNvdmVyUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfc2VsZlNwaW5SYW5nZVJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuXHJcbiAgICBwcml2YXRlIF9sYXN0UG9zIDogVmVjdG9yXHJcbiAgICBfY29uZmlnRGF0YSA6IEdhbWVDb25zdC5XZWFwb25SZWNvaWxDb25maWdEYXRhXHJcblxyXG4gICAgZGlmRnVuY3Rpb24oX3Vuc3RhYmlsaXR5Om51bWJlcikge1xyXG4gICAgICAgIF91bnN0YWJpbGl0eSA9IF91bnN0YWJpbGl0eSB8fCB0aGlzLl91bnN0YWJpbGl0eVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VGdW5jdGlvbiA9PT0gR2FtZUNvbnN0LkRpZmZ1c2VGdW5jdGlvbkVudW0uTGluZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIExpbmVhciBmdW5jdGlvblxyXG4gICAgICAgICAgICByZXR1cm4gX3Vuc3RhYmlsaXR5XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VGdW5jdGlvbiA9PT0gR2FtZUNvbnN0LkRpZmZ1c2VGdW5jdGlvbkVudW0uU3FydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KF91bnN0YWJpbGl0eSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuZGlmZnVzZUZ1bmN0aW9uID09PSBHYW1lQ29uc3QuRGlmZnVzZUZ1bmN0aW9uRW51bS5TcXVhcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF91bnN0YWJpbGl0eSAqIF91bnN0YWJpbGl0eVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFVwZGF0ZShfZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIERlY3JlYXNlIHJlY29pbFxyXG4gICAgICAgIHRoaXMuX3Vuc3RhYmlsaXR5ID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIHRoaXMuX3Vuc3RhYmlsaXR5IC0gdGhpcy5fY29uZmlnRGF0YS5kaWZmdXNlUmVjb3ZlclJhdGUgKiBfZHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGluZmx1ZW5jZSBmYWN0b3JzXHJcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5jbGVhcigpXHJcblxyXG4gICAgICAgIC8vIENoZWNrIE1vdmVtZW50IGFuZCBqdW1waW5nXHJcbiAgICAgICAgY29uc3QgY3VyUG9zID0gdGhpcy5ndW4uY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3VyUG9zLnN1YnRyYWN0KHRoaXMuX2xhc3RQb3MpLm1hZ25pdHVkZSA+IDAuNSAqIF9kdCB8fFxyXG4gICAgICAgICAgICB0aGlzLmd1bi5jaGFyYWN0ZXIuaXNKdW1waW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLnNldCgnTW92ZScsIHRoaXMuX2NvbmZpZ0RhdGEuanVtcEVycm9yU2NhbGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLnNldCgnTW92ZScsIHRoaXMuX2NvbmZpZ0RhdGEuanVtcEVycm9yU2NhbGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuZGVsZXRlKCdNb3ZlJylcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuZGVsZXRlKCdNb3ZlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGFzdFBvcyA9IGN1clBvc1xyXG5cclxuICAgICAgICAvLyBDaGVjayBjcm91Y2hpbmdcclxuICAgICAgICBpZiAodGhpcy5ndW4uY2hhcmFjdGVyLmNyb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5zZXQoJ0Nyb3VjaCcsIHRoaXMuX2NvbmZpZ0RhdGEuY3JvdWNoRXJyb3JTY2FsZSlcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuc2V0KCdDcm91Y2gnLCB0aGlzLl9jb25maWdEYXRhLmNyb3VjaEVycm9yU2NhbGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuZGVsZXRlKCdDcm91Y2gnKVxyXG4gICAgICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5kZWxldGUoJ0Nyb3VjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5zZXQoaywgdi5ob3Jpem9udGFsSnVtcFJhbmdlUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuc2V0KGssIHYudmVydGljYWxKdW1wQW5nbGVSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5zZXQoaywgdi5taW5FcnJvclJhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLnNldChrLCB2Lm1heEVycm9yUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5zZXQoaywgdi5ndW5SZWNvdmVyUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5zZXQoaywgdi5zZWxmU3BpblJhbmdlUmF0ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBlcnJvclxyXG4gICAgICAgIHRoaXMuZ3VuLmVycm9yID0gdGhpcy5HZXREaWZmdXNlKF9kdClcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGluZmx1ZW5jZSBmYWN0b3IgbWFnbml0dWRlc1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNjYWxlcygpXHJcbiAgICB9XHJcbiAgICBHZXRWZXJ0aWNhbCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gKHRoaXMuX2NvbmZpZ0RhdGEudmVydGljYWxKdW1wQW5nbGUgKyB0aGlzLl9jb25maWdEYXRhLnZlcnRpY2FsSnVtcFJhbmdlICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpKSAqIHRoaXMuX3ZlcnRpY2FsU2NhbGVcclxuICAgIH1cclxuICAgIEdldEhvcml6b250YWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9yaXpvbnRhbFNjYWxlICogdGhpcy5fY29uZmlnRGF0YS5ob3Jpem9udGFsSnVtcFJhbmdlICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1pbkVycm9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEubWluRXJyb3IgKiB0aGlzLl9taW5FcnJvclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1heEVycm9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEubWF4RXJyb3IgKiB0aGlzLl9tYXhFcnJvclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFNoYWtlVGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLmd1blJlY29pbCAvICh0aGlzLl9jb25maWdEYXRhLmd1blJlY292ZXJSYXRlICogdGhpcy5fcmVjb3ZlclJhdGVTY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0U2VsZlNwaW5SYW5nZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLnNlbGZTcGluUmFuZ2UgKiB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEZpcmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdW5zdGFiaWxpdHkgPSBNYXRoLm1pbigxLjAsIHRoaXMuX3Vuc3RhYmlsaXR5ICsgdGhpcy5fY29uZmlnRGF0YS5ndW5SZWNvaWwpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldERpZmZ1c2UoX2R0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCB0b2JlID0gdGhpcy5HZXRNaW5FcnJvcigpICsgdGhpcy5kaWZGdW5jdGlvbihudWxsKSAqICh0aGlzLkdldE1heEVycm9yKCkgLSB0aGlzLkdldE1pbkVycm9yKCkpXHJcbiAgICAgICAgdGhpcy5fY3VycmVudEVycm9yICs9IF9kdCAqIDEwICogKHRvYmUgLSB0aGlzLl9jdXJyZW50RXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRFcnJvclxyXG4gICAgfVxyXG4gICAgR2V0U2hha2VJbnRlbnNpdHkoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEuc2hha2VJbnRlbnNpdHlcclxuICAgIH1cclxuXHJcbiAgICBSZWZyZXNoU2NhbGVzKCkge1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9taW5FcnJvclNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX3NlbGZTcGluUmFuZ2VSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvblNvdW5kQ2xze1xyXG5cclxufSIsICJcdUZFRkZcclxuLyoqXHJcbiAqIEFVVE8gR0VORVJBVEUgQlkgVUkgRURJVE9SLlxyXG4gKiBXQVJOSU5HOiBETyBOT1QgTU9ESUZZIFRISVMgRklMRSxNQVkgQ0FVU0UgQ09ERSBMT1NULlxyXG4gKiBBVVRIT1I6IFx1NjI2N1x1N0IxNFx1N0VDRlx1NUU3NFxyXG4gKiBVSTogVUkvRGVmYXVsdFVJLnVpXHJcbiAqIFRJTUU6IDIwMjMuMDguMDUtMDAuMjkuMjlcclxuKi9cclxuXHJcblxyXG5cclxuQFVJLlVJQ2FsbE9ubHkoJ1VJL0RlZmF1bHRVSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRVSV9HZW5lcmF0ZSBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdFxyXG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICIsICJcdUZFRkZcclxuLyoqXHJcbiAqIEFVVE8gR0VORVJBVEUgQlkgVUkgRURJVE9SLlxyXG4gKiBXQVJOSU5HOiBETyBOT1QgTU9ESUZZIFRISVMgRklMRSxNQVkgQ0FVU0UgQ09ERSBMT1NULlxyXG4gKiBBVVRIT1I6IFx1NjI2N1x1N0IxNFx1N0VDRlx1NUU3NFxyXG4gKiBVSTogVUkvTW9uc3RJbmZvVUkudWlcclxuICogVElNRTogMjAyMy4wOC4wNS0wMC4yOS4yOVxyXG4qL1xyXG5cclxuXHJcblxyXG5AVUkuVUlDYWxsT25seSgnVUkvTW9uc3RJbmZvVUkudWknKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25zdEluZm9VSV9HZW5lcmF0ZSBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdFxyXG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQSxvQkFBQUE7QUFBQTtBQUFPLElBQVVBO0FBQUEsQ0FBVixDQUFVQSxnQkFBVjtBQUNJLE1BQUs7QUFBTCxJQUFLQyxpQkFBTDtBQUNILElBQUFBLGFBQUEsc0JBQW1CO0FBQ25CLElBQUFBLGFBQUEsMkJBQXdCO0FBQ3hCLElBQUFBLGFBQUEsMEJBQXVCO0FBQ3ZCLElBQUFBLGFBQUEsb0NBQWlDO0FBQ2pDLElBQUFBLGFBQUEsbUNBQWdDO0FBQ2hDLElBQUFBLGFBQUEseUJBQXNCO0FBQ3RCLElBQUFBLGFBQUEsd0JBQXFCO0FBQ3JCLElBQUFBLGFBQUEsb0JBQWlCO0FBQ2pCLElBQUFBLGFBQUEsd0JBQXFCO0FBQ3JCLElBQUFBLGFBQUEsK0JBQTRCO0FBQzVCLElBQUFBLGFBQUEsbUJBQWdCO0FBQ2hCLElBQUFBLGFBQUEsd0JBQXFCO0FBQ3JCLElBQUFBLGFBQUEsdUJBQW9CO0FBQ3BCLElBQUFBLGFBQUEsMkJBQXdCO0FBQ3hCLElBQUFBLGFBQUEsZ0NBQTZCO0FBQzdCLElBQUFBLGFB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QUFVLFlBQVk7QUFDdkIsaUJBQVMsU0FBUyxLQUFLLFlBQVk7QUFDbkM7QUFBQSxXQUNDLFVBQVUsWUFBWTtBQUN2QixpQkFBUyxTQUFTLEtBQUssWUFBWTtBQUNuQztBQUFBLFdBQ0MsVUFBVSxZQUFZO0FBQ3ZCLGlCQUFTLFNBQVMsS0FBSyxZQUFZO0FBQ25DO0FBQUE7QUFFQTtBQUFBO0FBRVIsUUFBRyxTQUFTLEdBQUU7QUFDVixVQUFJO0FBQ0osYUFBTyxjQUFjLFVBQVUsaUJBQWlCLGlCQUFpQixRQUFRLGNBQWMsUUFBUSxJQUFJLE9BQU87QUFBQSxJQUc5RztBQUFBLEVBQ0o7QUFBQSxFQUNRLGdCQUFnQjtBQUNwQixRQUFJLFNBQVM7QUFBQSxFQUVqQjtBQUlKOzs7QU0xb0JBO0FBQUE7QUFBQTtBQUFBO0FBWUEsSUFBcUIscUJBQXJCLGNBQWdELEdBQUcsV0FBVztBQUFBLEVBT25ELFVBQVU7QUFBQSxFQUNwQjtBQUVEO0FBVnFCLHFCQUFyQjtBQUFBLEVBREMsR0FBRyxXQUFXLGlCQUFpQjtBQUFBLEdBQ1g7OztBQ1pyQjtBQUFBO0FBQUE7QUFBQTtBQVlBLElBQXFCLHVCQUFyQixjQUFrRCxHQUFHLFdBQVc7QUFBQSxFQU9yRCxVQUFVO0FBQUEsRUFDcEI7QUFFRDtBQVZxQix1QkFBckI7QUFBQSxFQURDLEdBQUcsV0FBVyxtQkFBbUI7QUFBQSxHQUNiOzs7QTlCbUJyQixnQkFBMkI7QUFFcEIsSUFBTSxjQUFjO0FBQUEsRUFDdEIsaUNBQWlDO0FBQUEsRUFDakMsaUNBQWlDO0FBQUEsRUFDakMsaUNBQWlDO0FBQUEsRUFDakMsK0JBQStCO0FBQUEsRUFDL0IseUJBQXlCO0FBQUEsRUFDekIsMENBQTBDO0FBQUEsRUFDMUMsMENBQTBDO0FBQUEsRUFDMUMsb0NBQW9DO0FBQUEsRUFDcEMsbUNBQW1DO0FBQUEsRUFDbkMsc0NBQXNDO0FBQUEsRUFDdEMsMkNBQTJDO0FBQUEsRUFDM0MseUNBQXlDO0FBQUEsRUFDekMsMkNBQTJDO0FBQUEsRUFDM0MsMEJBQTBCO0FBQUEsRUFDMUIsOEJBQThCO0FBQUEsRUFDOUIsNEJBQTRCO0FBQUEsRUFDNUIsaUNBQWlDO0FBQUEsRUFDakMsOEJBQThCO0FBQUEsRUFDOUIsdUNBQXVDO0FBQUEsRUFDdkMsNkNBQTZDO0FBQUEsRUFDN0Msd0NBQXdDO0FBQUEsRUFDeEMseUNBQXlDO0FBQUEsRUFDekMsb0NBQW9DO0FBQUEsRUFDcEMsc0NBQXNDO0FBQUEsRUFDdEMsbUNBQW1DO0FBQUEsRUFDbkMsd0NBQXdDO0FBQUEsRUFDeEMsc0NBQXNDO0FBQUEsRUFDdEMscUNBQXFDO0FBQUEsRUFDckMsaUNBQWlDO0FBQUEsRUFDakMsOENBQThDO0FBQUEsRUFDOUMsZ0RBQWdEO0FBQUEsRUFDaEQsU0FBUztBQUNkOyIsCiAgIm5hbWVzIjogWyJFdmVudENvbnN0IiwgIkNsaWVudEV2ZW50IiwgIlNlcnZlckV2ZW50IiwgIkV2ZW50Q29uc3QiLCAiV2VhcG9uVG9vbCIsICJFdmVudENvbnN0Il0KfQo=
