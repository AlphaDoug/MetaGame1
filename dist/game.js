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
  constructor(data) {
    super(data);
    ServerBase.mInstance = this;
  }
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
__publicField(ServerBase, "mInstance");
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
  _configData;
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
          result.HitPart = GameConst.HitPartEnum.None;
          result.IsTarget = false;
          return result;
        }
      }
    }
    for (const key in info) {
      if (Object.prototype.hasOwnProperty.call(info, key)) {
        const element = info[key];
        if (element.gameObject instanceof Gameplay.Character) {
          if (Client.mInstance.GetPlayerAttr(element.gameObject.guid).hp <= 0) {
            continue;
          }
          if (!this._configData.isHitSelf && element.gameObject == Gameplay.getCurrentPlayer().character) {
            continue;
          }
          result.HitPoint = element.impactPoint;
          result.HitObject = element.gameObject;
          result.HitNormal = element.impactNormal;
          result.HitPart = GameConst.HitPartEnum.Body;
          result.IsTarget = false;
          return result;
        }
      }
    }
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
      if (!hit.HitObject) {
        endPos = this.RayCastOrigin().add(direction.multiply(this._configData.distance));
      }
      this.MakeBullet(endObj, endPos, endNorm);
      if (hit.HitPart && hit.HitPart != GameConst.HitPartEnum.None) {
        this.Damage(hit);
      }
      this.MakeHitEffect(endPos);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdC50cyIsICJidWlsZC50cyIsICI8c3RkaW4+IiwgIkphdmFTY3JpcHRzL0NsaWVudC9DbGllbnRCYXNlLnRzIiwgIkphdmFTY3JpcHRzL0dhbWVDb25zdC9FdmVudENvbnN0LnRzIiwgIkphdmFTY3JpcHRzL1BsYXllckd1bk1nci50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJDbGllbnQudHMiLCAiSmF2YVNjcmlwdHMvTW9kdWxlcy9QbGF5ZXIvUGxheWVyRGF0YS50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXIudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL0dhbWVDb25maWcudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL01vbnN0ZXJzLnRzIiwgIkphdmFTY3JpcHRzL0RlZmF1bHRVSS50cyIsICJKYXZhU2NyaXB0cy9FbnRpdHkvTW9uc3Rlci9Nb25zdGVyQmFzZS50cyIsICJKYXZhU2NyaXB0cy9GYWN0b3J5L0ZhY19JbnRlcmFjdE9iamVjdC50cyIsICJKYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uLnRzIiwgIkphdmFTY3JpcHRzL1BsYXllckF0dHIudHMiLCAiSmF2YVNjcmlwdHMvUGxheWVyQmVoYXZpb3IudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXIudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblRvb2wudHMiLCAiSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwudHMiLCAiSmF2YVNjcmlwdHMvU2VydmVyL1NlcnZlckJhc2UudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscy50cyIsICJKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUudHMiLCAiSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImRlY2xhcmUgbmFtZXNwYWNlIEdhbWVDb25zdHtcclxuICAgIGV4cG9ydCBlbnVtIExvY2FsV2VhcG9uRXZlbnQge1xyXG4gICAgICAgIFBpY2tXZWFwb24gPSAnUGlja1dlYXBvbicsXHJcbiAgICAgICAgRHJhd1dlYXBvbiA9ICdEcmF3V2VhcG9uJyxcclxuICAgICAgICBXaXRoRHJhd1dlYXBvbiA9ICdXaXRoRHJhd1dlYXBvbicsXHJcbiAgICAgICAgTWFnYXppbmVMb2FkU3RhcnRlZCA9ICdNYWdhemluZUxvYWRTdGFydGVkJyxcclxuICAgICAgICBGdWxseUxvYWRlZCA9ICdGdWxseUxvYWRlZCcsXHJcbiAgICAgICAgQnVsbGV0TG9hZFN0YXJ0ZWQgPSAnQnVsbGV0TG9hZFN0YXJ0ZWQnLFxyXG4gICAgICAgIEJ1bGxldExvYWRlZCA9ICdCdWxsZXRMb2FkZWQnLFxyXG4gICAgICAgIFJlbG9hZEZpbmlzaGVkID0gJ1JlbG9hZEZpbmlzaGVkJyxcclxuICAgICAgICBQdW1wU3RhcnRlZCA9ICdQdW1wU3RhcnRlZCcsXHJcbiAgICAgICAgUHVtcGVkID0gJ1B1bXBlZCcsXHJcbiAgICAgICAgRmlyZWQgPSAnRmlyZWQnLFxyXG4gICAgICAgIEVtcHR5RmlyZSA9ICdFbXB0eUZpcmUnLFxyXG4gICAgICAgIEZpcmVTdGFydGVkID0gJ0ZpcmVTdGFydGVkJyxcclxuICAgICAgICBGaXJlU3RvcHBlZCA9ICdGaXJlU3RvcHBlZCcsXHJcbiAgICAgICAgU3VjY2Vzc2Z1bGx5SGl0ID0gJ1N1Y2Nlc3NmdWxseUhpdCcsXHJcbiAgICAgICAgU3VjY2Vzc2Z1bGx5SGl0VGFyZ2V0ID0gJ1N1Y2Nlc3NmdWxseUhpdFRhcmdldCcsXHJcbiAgICAgICAgQWltSW4gPSAnQWltSW4nLFxyXG4gICAgICAgIEFpbU91dCA9ICdBaW1PdXQnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gR3VuTW9kZUVudW0ge1xyXG4gICAgICAgIFNuaXBlclJpZmxlID0gMSwgXHJcbiAgICAgICAgQXNzYXVsdFJpZmxlID0gMiwgXHJcbiAgICAgICAgU3ViTWFjaGluZUd1biA9IDMsXHJcbiAgICAgICAgU2hvdEd1biA9IDQsIFxyXG4gICAgICAgIFBpc3RvbCA9IDUsIFxyXG4gICAgICAgIE1lbGVlV2VhcG9uID0gNiwgXHJcbiAgICAgICAgVGhyb3duV2VhcG9uID0gNywgXHJcbiAgICAgICAgUm9ja2V0TGF1bmNoZXIgPSA4LCBcclxuICAgICAgICBPdGhlciA9IDksIFxyXG4gICAgICAgIFRyYWlsaW5nR3VuID0gMTBcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIEhpdFBhcnRFbnVte1xyXG4gICAgICAgIE5vbmUgPSAxMCxcclxuICAgICAgICBIZWFkID0gMSxcclxuICAgICAgICBCb2R5ID0gMixcclxuICAgICAgICBMaW1iID0gMyxcclxuICAgICAgICBGb3J0ID0gNFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gRmlyZU1vZGVFbnVte1xyXG4gICAgICAgIEF1dG8gPSAxLCBcclxuICAgICAgICBSYXBpZGx5XzEgPSAyLCBcclxuICAgICAgICBSYXBpZGx5XzIgPSAzLCBcclxuICAgICAgICBTaW5nbGUgPSA0IFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gRGlmZnVzZUZ1bmN0aW9uRW51bXtcclxuICAgICAgICBMaW5lYXIgPSAxLFxyXG4gICAgICAgIFNxcnQgPSAyLFxyXG4gICAgICAgIFNxdWFyZSA9IDNcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIENhbkJlRXF1aXBQb3NpdGlvbkVudW17XHJcbiAgICAgICAgTWFpbk9yRGVwdXR5ID0gMSxcclxuICAgICAgICBNaW5pID0gMixcclxuICAgICAgICBQcm9wID0gM1xyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5MTREXHU0RUY2XHU3QzdCXHU1NzhCICovXHJcbiAgICBleHBvcnQgZW51bSBXZWFwb25BY2Nlc3NvcnlUeXBlRW51bXtcclxuICAgICAgICBNdXp6bGUgPSAxLFxyXG4gICAgICAgIEdyaXAgPSAyLFxyXG4gICAgICAgIE1hZ2F6aW5lID0gMyxcclxuICAgICAgICBCdXR0ID0gNCxcclxuICAgICAgICBTaWdodCA9IDVcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIFVuaXRUeXBlRW51bXtcclxuICAgICAgICBXZWFwb24gPSAxLFxyXG4gICAgICAgIEFjY2Vzc29yeSA9IDIsXHJcbiAgICAgICAgQW1tbyA9IDNcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIE9iamVjdFR5cGVFbnVte1xyXG4gICAgICAgIEhvbGUgPSAxLFxyXG4gICAgICAgIEZpcmVFZmYgPSAyLFxyXG4gICAgICAgIEhpdEVmZiA9IDMsXHJcbiAgICAgICAgU2hlbGwgPSA0LFxyXG4gICAgICAgIFNvdW5kID0gNVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gUGxheWVyQWN0aW9uTW9kZUVudW17XHJcbiAgICAgICAgUnVuID0gMSwgXHJcbiAgICAgICAgUXVpY2tseVJ1biA9IDIsIFxyXG4gICAgICAgIEFpbVJ1biA9IDMsIFxyXG4gICAgICAgIENyb3VjaFJ1biA9IDQsIFxyXG4gICAgICAgIFF1aWNrbHlDcm91Y2hSdW4gPSA1LCBcclxuICAgICAgICBBaW1Dcm91Y2hSdW4gPSA2IFxyXG4gICAgfVxyXG59XHJcbmRlY2xhcmUgbmFtZXNwYWNlIEdhbWVDb25zdHtcclxuICAgIGV4cG9ydCB0eXBlIERhbWFnZUF0dGVudWF0aW9uID0ge1xyXG4gICAgICAgIERpc3RhbmNlOiBudW1iZXI7XHJcbiAgICAgICAgQXR0ZW51YXRpb246IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBCb25lV2VpZ2h0ID0ge1xyXG5cclxuICAgIH1cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbkhpdFJlc3VsdCA9IHtcclxuICAgICAgICBIaXRQb2ludCA6IFZlY3RvclxyXG4gICAgICAgIEhpdE9iamVjdCA6IEdhbWVPYmplY3RcclxuICAgICAgICBIaXROb3JtYWwgOiBWZWN0b3JcclxuICAgICAgICBIaXRQYXJ0IDpHYW1lQ29uc3QuSGl0UGFydEVudW1cclxuICAgICAgICBJc1RhcmdldCA6IGJvb2xlYW5cclxuICAgICAgICBEYW1hZ2UgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1OTE0RFx1N0Y2RVx1OTc1OVx1NjAwMVx1NUM1RVx1NjAyNyAqL1xyXG4gICAgZXhwb3J0IHR5cGUgV2VhcG9uQ29uZmlnRGF0YSA9IHtcclxuICAgICAgICBuYW1lIDogc3RyaW5nXHJcbiAgICAgICAgZGVzIDogc3RyaW5nXHJcbiAgICAgICAgaWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIHNlbGVjdGVkSWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIG9yZGVyIDogbnVtYmVyXHJcbiAgICAgICAgZGVmYXVsdEFpbUltZyA6IHN0cmluZ1xyXG4gICAgICAgIHdhaXN0QWltTW9kZSA6IHN0cmluZ1xyXG4gICAgICAgIHJlY29pbElkIDogbnVtYmVyXHJcbiAgICAgICAgYW5pbWF0aW9uSWQgOiBudW1iZXJcclxuICAgICAgICBiYW5TaG9vdCA6IGJvb2xlYW5cclxuICAgICAgICBpc0hpdFNlbGYgOiBib29sZWFuXHJcbiAgICAgICAgaXNIaXRGcmllbmQgOiBib29sZWFuXHJcbiAgICAgICAgY2FuQmVFcXVpcEFjY2Vzc29yeSA6IG51bWJlcltdXHJcbiAgICAgICAgZGFtYWdlIDogbnVtYmVyXHJcbiAgICAgICAgbWFnYXppbmVVc2VkIDogbnVtYmVyXHJcbiAgICAgICAgaGl0SGVhZERhbWFnZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBoaXRCb2R5RGFtYWdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGhpdExpbWJEYW1hZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZGlzdGFuY2UgOiBudW1iZXJcclxuICAgICAgICBidWxsZXROYW1lIDogc3RyaW5nXHJcbiAgICAgICAgYnVsbGV0SG9sZSA6IHN0cmluZ1xyXG4gICAgICAgIGJ1bGxldFNoZWxsIDogc3RyaW5nXHJcbiAgICAgICAgYXV0b1JlbG9hZCA6IGJvb2xlYW5cclxuICAgICAgICBtZWNoaW5pY2FsQWltRk9WIDogbnVtYmVyXHJcbiAgICAgICAgd2Fpc3RBaW1GT1YgOiBudW1iZXJcclxuICAgICAgICBzaG9vdFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgYnVsbGV0UGVyU2hvb3QgOiBudW1iZXJcclxuICAgICAgICBjb25zdW1lU2luZ2xlQnVsbGV0UGVyU2hvb3QgOiBudW1iZXJcclxuICAgICAgICBzaG9vdE1vZGUgOiBGaXJlTW9kZUVudW1bXVxyXG4gICAgICAgIGRlZmF1bHRTaG9vdE1vZGUgOiBGaXJlTW9kZUVudW1cclxuICAgICAgICByYXBpZGx5XzEgOiBudW1iZXJcclxuICAgICAgICByYXBpZGx5XzIgOiBudW1iZXJcclxuICAgICAgICBndW5Nb2RlIDogR3VuTW9kZUVudW1cclxuICAgICAgICBhY2N1cmF0ZUFpbSA6IGJvb2xlYW5cclxuICAgICAgICBjYW5CZUVxdWlwUG9zaXRpb24gOiBDYW5CZUVxdWlwUG9zaXRpb25FbnVtXHJcbiAgICAgICAgYWltVGltZSA6IG51bWJlclxyXG4gICAgICAgIHN0b3BBaW1UaW1lIDogbnVtYmVyXHJcbiAgICAgICAgYXNzaXN0QWltVGltZSA6IG51bWJlclxyXG4gICAgICAgIGFzc2lzdEFpbURpczAgOiBudW1iZXJcclxuICAgICAgICBhc3Npc3RBaW1EaXMxIDogbnVtYmVyXHJcbiAgICAgICAgYXNzaXN0QWltUmF0aW8gOiBudW1iZXJcclxuICAgICAgICByZWxvYWRXaXRoTWFnYXppbmVzIDogYm9vbGVhblxyXG4gICAgICAgIGNhbkludGVycnVwdEJ1bGxldExvYWQgOiBib29sZWFuXHJcbiAgICAgICAgaGl0RWZmZWN0IDogc3RyaW5nXHJcbiAgICAgICAgZmlyZUVmZmVjdCA6IHN0cmluZ1xyXG4gICAgICAgIGJ1bGxldFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgZGFtYWdlQXR0ZW51YXRpb24gOiBEYW1hZ2VBdHRlbnVhdGlvbltdXHJcbiAgICAgICAgZXhwbG9zaW9uRGFtYWdlQXR0ZW51YXRpb24gOiBEYW1hZ2VBdHRlbnVhdGlvbltdXHJcbiAgICAgICAgY2hhcmFjdGVyQW5pbWF0aW9uTW9kZSA6IG51bWJlclxyXG4gICAgICAgIHB1bXBBZnRlckZpbmFsTG9hZCA6IGJvb2xlYW5cclxuICAgICAgICBwdW1wQWZ0ZXJGaXJlIDogYm9vbGVhblxyXG4gICAgICAgIGJvbmVXZWlnaHQgOiBCb25lV2VpZ2h0XHJcbiAgICAgICAgZGFtYWdlUmVzcG9uc2VXYWl0VGltZSA6IG51bWJlclxyXG4gICAgICAgIGdyYXZpdHlTY2FsZSA6IG51bWJlclxyXG4gICAgICAgIGV4cGxvc2lvblJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgd2VpZ2h0IDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTVGMzlcdTU5MzlcdTkxNERcdTdGNkVcdTk3NTlcdTYwMDFcdTVDNUVcdTYwMjcgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbk1hZ2F6aW5lQ29uZmlnRGF0YSA9IHtcclxuICAgICAgICBtYXRjaEFtbW8gOiBudW1iZXJcclxuICAgICAgICBuYW1lIDogc3RyaW5nXHJcbiAgICAgICAgbWF4TnVtIDogbnVtYmVyXHJcbiAgICAgICAgbG9hZFRpbWUgOiBudW1iZXJcclxuICAgICAgICBhbW1vTmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9EZXMgOiBzdHJpbmdcclxuICAgICAgICBhbW1vSWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9IaXRUZXh0dXJlIDogc3RyaW5nXHJcbiAgICAgICAgYW1tb01vZGVsIDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTkxNERcdTRFRjZcdTkxNERcdTdGNkVcdTk3NTlcdTYwMDFcdTVDNUVcdTYwMjcgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbkFjY2Vzc29yeUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGRlcyA6IHN0cmluZ1xyXG4gICAgICAgIGljb24gOiBzdHJpbmdcclxuICAgICAgICBsb2NhdGlvbiA6IEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bVxyXG4gICAgICAgIG9yZGVyIDogbnVtYmVyXHJcbiAgICAgICAgbW9kZWwgOiBzdHJpbmdcclxuICAgICAgICBpc1NpbGVuY2VyIDogYm9vbGVhblxyXG4gICAgICAgIGFpbUZvdlJhdGUgOiBudW1iZXIgXHJcbiAgICAgICAgbWluRXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgbWF4RXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuUmVjb3ZlclJhdGUgOiBudW1iZXJcclxuICAgICAgICB2ZXJ0aWNhbEp1bXBBbmdsZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBob3Jpem9udGFsSnVtcFJhbmdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIHNlbGZTcGluUmFuZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAganVtcEZvdlJhdGUgOiBudW1iZXJcclxuICAgICAgICBidWxsZXRTcGVlZFJhdGUgOiBudW1iZXJcclxuICAgICAgICBtYWdhemluZUxvYWRUaW1lUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIG1heEFtbW9SYXRlIDogTWFwPG51bWJlciwgbnVtYmVyPlxyXG4gICAgICAgIGFpbVRpbWVSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgcGlja1NvdW5kIDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTc2RjhcdTY3M0FcdTc2RjhcdTUxNzNcdTc2ODRcdTkxNERcdTdGNkUgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbkNhbWVyYUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgdmlicmF0aW9uRHVtcCA6IG51bWJlclxyXG4gICAgICAgIHZpYnJhdGlvbk9tZWdhIDogbnVtYmVyXHJcbiAgICAgICAganVtcFRpbWUgOiBudW1iZXJcclxuICAgICAgICBqdW1wRk9WIDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICAvKipcdTU0MEVcdTU3NTBcdTUyOUJcdTkxNERcdTdGNkUgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvblJlY29pbENvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbWluRXJyb3IgOiBudW1iZXJcclxuICAgICAgICBtYXhFcnJvciA6IG51bWJlclxyXG4gICAgICAgIGd1blJlY29pbCA6IG51bWJlclxyXG4gICAgICAgIGd1blJlY292ZXJSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZGlmZnVzZVJlY292ZXJSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgdmVydGljYWxKdW1wQW5nbGUgOiBudW1iZXJcclxuICAgICAgICBiYWNrVG90YWwgOiBudW1iZXJcclxuICAgICAgICBob3Jpem9udGFsSnVtcFJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgdmVydGljYWxKdW1wUmFuZ2UgOiBudW1iZXJcclxuICAgICAgICBzZWxmU3BpblJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgc2VsZlNwaW5NYXggOiBudW1iZXJcclxuXHJcbiAgICAgICAgdWlKdW1wQW1wbCA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcE1heCA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcER1bXAgOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBPbWVnYSA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcEFuZ2xlIDogbnVtYmVyXHJcblxyXG4gICAgICAgIHNoYWtlSW50ZW5zaXR5IDogbnVtYmVyXHJcbiAgICAgICAgZGlmZnVzZUZ1bmN0aW9uIDogRGlmZnVzZUZ1bmN0aW9uRW51bVxyXG4gICAgICAgIGp1bXBFcnJvclNjYWxlIDogbnVtYmVyXHJcbiAgICAgICAgY3JvdWNoRXJyb3JTY2FsZSA6IG51bWJlclxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU1MkE4XHU3NTNCXHU5MTREXHU3RjZFICovXHJcbiAgICBleHBvcnQgdHlwZSBXZWFwb25BbmltYXRpb25Db25maWdEYXRhID0ge1xyXG4gICAgICAgIGd1bmlkIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuRXZuZXQgOiBudW1iZXJcclxuICAgICAgICBpc0xvb3AgOiBib29sZWFuXHJcbiAgICAgICAgVHJhbnNpdGlvbkR1cmF0aW9uIDogbnVtYmVyXHJcbiAgICAgICAgQW5pbWF0aW9uTmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIERldGFpbCA6IHN0cmluZ1xyXG4gICAgICAgIFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgV2VpZ2h0IDogbnVtYmVyXHJcbiAgICAgICAgQ292ZXJwbGF5IDogbnVtYmVyXHJcbiAgICAgICAgR3VuTmFtZSA6IHN0cmluZ1xyXG4gICAgfVxyXG59IiwgIiIsICJpbXBvcnQgKiBhcyBmb3JlaWduMSBmcm9tICcuL0phdmFTY3JpcHRzL0NsaWVudC9DbGllbnRCYXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yIGZyb20gJy4vSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvR2FtZUNvbmZpZyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNCBmcm9tICcuL0phdmFTY3JpcHRzL0NvbmZpZy9Nb25zdGVycyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNSBmcm9tICcuL0phdmFTY3JpcHRzL0RlZmF1bHRVSSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNiBmcm9tICcuL0phdmFTY3JpcHRzL0VudGl0eS9Nb25zdGVyL01vbnN0ZXJCYXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ243IGZyb20gJy4vSmF2YVNjcmlwdHMvRmFjdG9yeS9GYWNfSW50ZXJhY3RPYmplY3QnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjggZnJvbSAnLi9KYXZhU2NyaXB0cy9HYW1lQ29uc3QvRXZlbnRDb25zdCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduOSBmcm9tICcuL0phdmFTY3JpcHRzL0dhbWVDb25zdC9HYW1lQ29uc3QnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjEwIGZyb20gJy4vSmF2YVNjcmlwdHMvSW50ZXJmYWNlL0lJbnRlcmFjdGlvbic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTEgZnJvbSAnLi9KYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJDbGllbnQnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjEyIGZyb20gJy4vSmF2YVNjcmlwdHMvTW9kdWxlcy9QbGF5ZXIvUGxheWVyRGF0YSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTMgZnJvbSAnLi9KYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXInO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE0IGZyb20gJy4vSmF2YVNjcmlwdHMvUGxheWVyQXR0cic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTUgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJCZWhhdmlvcic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTYgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJHdW5NZ3InO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE3IGZyb20gJy4vSmF2YVNjcmlwdHMvU2VydmVyL1NlcnZlckJhc2UnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE4IGZyb20gJy4vSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE5IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIwIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIxIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yMiBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIzIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI0IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjUgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yNiBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjcgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yOCBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjkgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uVG9vbCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMzAgZnJvbSAnLi9KYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMxIGZyb20gJy4vSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMyIGZyb20gJy4vYnVpbGQnO1xuXG5leHBvcnQgY29uc3QgTVdNb2R1bGVNYXAgPSB7IFxuICAgICAnSmF2YVNjcmlwdHMvQ2xpZW50L0NsaWVudEJhc2UnOiBmb3JlaWduMSxcbiAgICAgJ0phdmFTY3JpcHRzL0NvbmZpZy9Db25maWdCYXNlJzogZm9yZWlnbjIsXG4gICAgICdKYXZhU2NyaXB0cy9Db25maWcvR2FtZUNvbmZpZyc6IGZvcmVpZ24zLFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL01vbnN0ZXJzJzogZm9yZWlnbjQsXG4gICAgICdKYXZhU2NyaXB0cy9EZWZhdWx0VUknOiBmb3JlaWduNSxcbiAgICAgJ0phdmFTY3JpcHRzL0VudGl0eS9Nb25zdGVyL01vbnN0ZXJCYXNlJzogZm9yZWlnbjYsXG4gICAgICdKYXZhU2NyaXB0cy9GYWN0b3J5L0ZhY19JbnRlcmFjdE9iamVjdCc6IGZvcmVpZ243LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0V2ZW50Q29uc3QnOiBmb3JlaWduOCxcbiAgICAgJ0phdmFTY3JpcHRzL0dhbWVDb25zdC9HYW1lQ29uc3QnOiBmb3JlaWduOSxcbiAgICAgJ0phdmFTY3JpcHRzL0ludGVyZmFjZS9JSW50ZXJhY3Rpb24nOiBmb3JlaWduMTAsXG4gICAgICdKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJDbGllbnQnOiBmb3JlaWduMTEsXG4gICAgICdKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJEYXRhJzogZm9yZWlnbjEyLFxuICAgICAnSmF2YVNjcmlwdHMvTW9kdWxlcy9QbGF5ZXIvUGxheWVyU2VydmVyJzogZm9yZWlnbjEzLFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyQXR0cic6IGZvcmVpZ24xNCxcbiAgICAgJ0phdmFTY3JpcHRzL1BsYXllckJlaGF2aW9yJzogZm9yZWlnbjE1LFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyR3VuTWdyJzogZm9yZWlnbjE2LFxuICAgICAnSmF2YVNjcmlwdHMvU2VydmVyL1NlcnZlckJhc2UnOiBmb3JlaWduMTcsXG4gICAgICdKYXZhU2NyaXB0cy9Ub29sL1R3ZWVuVXRpbCc6IGZvcmVpZ24xOCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9DYW1lcmFDb250cm9sbGVyJzogZm9yZWlnbjE5LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMnOiBmb3JlaWduMjAsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQW1tb0Jhc2VDbHMnOiBmb3JlaWduMjEsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQW5pbWF0aW9uQ2xzJzogZm9yZWlnbjIyLFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMnOiBmb3JlaWduMjMsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQ2FtZXJhQ2xzJzogZm9yZWlnbjI0LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkdVSUNscyc6IGZvcmVpZ24yNSxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscyc6IGZvcmVpZ24yNixcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25SZWNvaWxDbHMnOiBmb3JlaWduMjcsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uU291bmRDbHMnOiBmb3JlaWduMjgsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uVG9vbCc6IGZvcmVpZ24yOSxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL0RlZmF1bHRVSV9nZW5lcmF0ZSc6IGZvcmVpZ24zMCxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL01vbnN0SW5mb1VJX2dlbmVyYXRlJzogZm9yZWlnbjMxLFxuICAgICAnYnVpbGQnOiBmb3JlaWduMzIsXG59XG4iLCAiXHVGRUZGaW1wb3J0IHsgRXZlbnRDb25zdCB9IGZyb20gXCIuLi9HYW1lQ29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgUGxheWVyQXR0ciBmcm9tIFwiLi4vUGxheWVyQXR0clwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJHdW5NZ3IgfSBmcm9tIFwiLi4vUGxheWVyR3VuTWdyXCI7XHJcbmltcG9ydCB7IFBsYXllckNsaWVudCB9IGZyb20gXCIuLy4uL01vZHVsZXMvUGxheWVyL1BsYXllckNsaWVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4vLi4vTW9kdWxlcy9QbGF5ZXIvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2ZXIgfSBmcm9tIFwiLi8uLi9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTVCQTJcdTYyMzdcdTdBRUZcdTRFM0JcdTgxMUFcdTY3MkNcclxuICovXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgdG90YWxQbGF5ZXJBdHRyczogTWFwPHN0cmluZywgUGxheWVyQXR0cj4gPSBuZXcgTWFwXHJcbiAgICBtUGxheWVyR3VuTWdyOiBQbGF5ZXJHdW5NZ3JcclxuICAgIHN0YXRpYyBtSW5zdGFuY2U6IENsaWVudFxyXG4gICAgY29uc3RydWN0b3IoZGF0YSl7XHJcbiAgICAgICAgc3VwZXIoZGF0YSlcclxuICAgICAgICBFdmVudHMuYWRkU2VydmVyTGlzdGVuZXIoRXZlbnRDb25zdC5DbGllbnRFdmVudC5QbGF5ZXJBZGRTdWNjZXNzZWRFdmVudCwgdGhpcy5PblBsYXllclN1Y2Nlc3NBZGRlZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIENsaWVudC5tSW5zdGFuY2UgPSB0aGlzXHJcbiAgICB9XHJcbiAgICAvKiogXHU1RjUzXHU4MTFBXHU2NzJDXHU4OEFCXHU1QjlFXHU0RjhCXHU1NDBFXHVGRjBDXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU1RTI3XHU2NkY0XHU2NUIwXHU1MjREXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTW9kdWxlKClcclxuICAgICAgICB0aGlzLm1QbGF5ZXJHdW5NZ3IgPSBhd2FpdCBQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UoKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgICAvKiogXHU2Q0U4XHU1MThDXHU2QTIxXHU1NzU3ICovXHJcbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJNb2R1bGUoKSB7XHJcbiAgICAgICAgTW9kdWxlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyTW9kdWxlKFBsYXllclNlcnZlciwgUGxheWVyQ2xpZW50LCBQbGF5ZXJEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIE9uUGxheWVyU3VjY2Vzc0FkZGVkKGNfZ3VpZCA6IHN0cmluZywgaW5zX2d1aWQgOiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPblBsYXllclN1Y2Nlc3NBZGRlZCAgICcsIGNfZ3VpZCxcIiAgXCIsIGluc19ndWlkKVxyXG4gICAgICAgIGxldCBzID0gYXdhaXQgU2NyaXB0TWFuYWdlci5hc3luY0ZpbmRTY3JpcHQoaW5zX2d1aWQpIGFzIFBsYXllckF0dHJcclxuICAgICAgICBjb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIHRoaXMudG90YWxQbGF5ZXJBdHRycy5zZXQoY19ndWlkLCBzKVxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFBsYXllckF0dHIoZ3VpZDpzdHJpbmd8R2FtZXBsYXkuUGxheWVyKTpQbGF5ZXJBdHRye1xyXG4gICAgICAgIGlmIChndWlkIGluc3RhbmNlb2YgR2FtZXBsYXkuUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGd1aWQgPSBndWlkLmNoYXJhY3Rlci5ndWlkXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZ2V0KGd1aWQpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZ2V0KGd1aWQpXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG59IiwgImV4cG9ydCBuYW1lc3BhY2UgRXZlbnRDb25zdHtcclxuICAgIGV4cG9ydCBlbnVtIENsaWVudEV2ZW50IHtcclxuICAgICAgICBQbGF5ZXJCZUhpdEV2ZW50ID0gXCJQbGF5ZXJCZUhpdEV2ZW50XCIsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkV2ZW50ID0gXCJQbGF5ZXJOZWFyV2VhcG9uRXZlbnRcIixcclxuICAgICAgICBQbGF5ZXJGYXJXZWFwb25FdmVudCA9ICdQbGF5ZXJGYXJXZWFwb25FdmVudCcsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkFjY2Vzc29yeUV2ZW50ID0gJ1BsYXllck5lYXJXZWFwb25BY2Nlc3NvcnlFdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQgPSAnUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQnLFxyXG4gICAgICAgIFBsYXllck5lYXJBbW1vRXZlbnQgPSAnUGxheWVyTmVhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyQW1tb0V2ZW50ID0gJ1BsYXllckZhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRGllRXZlbnQgPSAnUGxheWVyRGllRXZlbnQnLFxyXG4gICAgICAgIENyZWF0ZUFsbFVuaXRFdmVudCA9ICdDcmVhdGVBbGxVbml0RXZlbnQnLFxyXG4gICAgICAgIFNldHRpbmdBc3NBaW1SZWZyZXNoRXZlbnQgPSAnU2V0dGluZ0Fzc0FpbVJlZnJlc2hFdmVudCcsXHJcbiAgICAgICAgU3luY0RhdGFFdmVudCA9ICdTeW5jRGF0YUV2ZW50JyxcclxuICAgICAgICBPbkVxdWlwV2VhcG9uRXZlbnQgPSAnT25FcXVpcFdlYXBvbkV2ZW50JyxcclxuICAgICAgICBTZXR0aW5nUmVhZHlFdmVudCA9ICdTZXR0aW5nUmVhZHlFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQ3JlYXRlZEV2ZW50ID0gJ1dlYXBvbk9iakNyZWF0ZWRFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQgPSAnV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQnLFxyXG4gICAgICAgIFBsYXllckFkZFN1Y2Nlc3NlZEV2ZW50ID0gJ1BsYXllckFkZFN1Y2Nlc3NlZEV2ZW50JyxcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIFNlcnZlckV2ZW50IHtcclxuICAgICAgICBXZWFwb25IaXRQbGF5ZXJFdmVudCA9J1dlYXBvbkhpdFBsYXllckV2ZW50JyxcclxuICAgICAgICBDcmVhdGVBbW1vRXZlbnQgPSdDcmVhdGVBbW1vRXZlbnQnLFxyXG4gICAgICAgIERlc3Ryb3lBbW1vRXZlbnQgPSdEZXN0cm95QW1tb0V2ZW50JyxcclxuICAgICAgICBQbGF5ZXJQaWNrQW1tb0V2ZW50ID0gJ1BsYXllclBpY2tBbW1vRXZlbnQnLFxyXG4gICAgICAgIFBsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50ID0gJ1BsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50JyxcclxuICAgICAgICBQbGF5ZXJEYXRhTW9kaWZpRXZlbnQgPSAnUGxheWVyRGF0YU1vZGlmaUV2ZW50JyxcclxuICAgICAgICBTeW5jQW5kU2F2ZUV2ZW50ID0gJ1N5bmNBbmRTYXZlRXZlbnQnLFxyXG4gICAgICAgIFdlYXBvbk9iakNyZWF0ZWRFdmVudCA9ICdXZWFwb25PYmpDcmVhdGVkRXZlbnQnXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IENsaWVudEJhc2UgZnJvbSBcIi4vQ2xpZW50L0NsaWVudEJhc2VcIlxyXG5pbXBvcnQgUGxheWVyQXR0ciBmcm9tIFwiLi9QbGF5ZXJBdHRyXCJcclxuaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQW1tb0Jhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb24vV2VhcG9uQW1tb0Jhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uL1dlYXBvbkJhc2VDbHNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckd1bk1nciB7XHJcbiAgICBwbGF5ZXI6R2FtZXBsYXkuQ2hhcmFjdGVyXHJcblxyXG4gICAgY3VyR3VuOldlYXBvbkJhc2VDbHNcclxuICAgIG1haW5HdW46V2VhcG9uQmFzZUNsc1xyXG4gICAgZGVwdXR5R3VuOldlYXBvbkJhc2VDbHNcclxuICAgIG1pbmlHdW46V2VhcG9uQmFzZUNsc1xyXG4gICAgcHJvcDE6V2VhcG9uQmFzZUNsc1xyXG4gICAgcHJvcDI6V2VhcG9uQmFzZUNsc1xyXG5cclxuICAgIHB1YmxpYyBoYWRBY2Nlc3NvcnlMaXN0OlJlY29yZDxzdHJpbmcsIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHM+XHJcbiAgICBwdWJsaWMgaGFkQW1tb0xpc3Q6UmVjb3JkPHN0cmluZywgV2VhcG9uQW1tb0Jhc2VDbHM+XHJcblxyXG4gICAgY2FuVXBkYXRlR3VuID0gdHJ1ZVxyXG4gICAgLy8gXHU1MzU1XHU0RjhCXHU2QTIxXHU1RjBGXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBsYXllckd1bk1ncjtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckd1bk1nci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyID0gYXdhaXQgR2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKClcclxuICAgICAgICAgICAgUGxheWVyR3VuTWdyLl9pbnN0YW5jZSA9IG5ldyBQbGF5ZXJHdW5NZ3IocGxheWVyLmNoYXJhY3RlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllckd1bk1nci5faW5zdGFuY2VcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjpHYW1lcGxheS5DaGFyYWN0ZXIpe1xyXG4gICAgICAgIC8vXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLk9uZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigxKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlR3bywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlRocmVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuRm91ciwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbig0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkZpdmUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oNSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5YLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDApXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuRywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRyb3BXZWFwb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5DaGFuZ2VTaG9vdE1vZGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkxlZnRBbHQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0FcdTlGMjBcdTY4MDdcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuUmlnaHRNb3VzZUJ1dHRvbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NTIyNFx1NjVBRFx1ODg0MFx1OTFDRlxyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMuR2V0TG9jYWxBdHRyKClcclxuICAgICAgICAgICAgaWYoYS5ocCA8PSAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VyR3VuKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyR3VuLk1lY2hhbmljYWxBaW1TdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5SLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgICAgICBpZihhLmhwIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJHdW4gPSB0aGlzLm1haW5HdW5cclxuICAgICAgICAgICAgLy9cdTUyMjRcdTY1QURcdTg4NDBcdTkxQ0ZcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJHdW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJHdW4uTG9hZE1hZ2F6aW5lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIElucHV0VXRpbC5vbktleVByZXNzKEtleXMuUiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBJbnB1dFV0aWwub25LZXlVcChLZXlzLkxlZnRBbHQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTRFMERcdTY2M0VcdTc5M0FcdTlGMjBcdTY4MDdcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlVcChLZXlzLkxlZnRBbHQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTVDMURcdThCRDVcdTc5QkJcdTVGMDBcdTc3ODRcdTUxQzZcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyR3VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckd1bi5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFN3aXRjaFdlYXBvbihpbmRleDpudW1iZXIpe1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgIGlmKGEuaHAgPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENoYW5nZVNob290TW9kZSgpe1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgIGlmKGEuaHAgPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIERyb3BXZWFwb24oKXtcclxuICAgICAgICBsZXQgYSA9IHRoaXMuR2V0TG9jYWxBdHRyKClcclxuICAgICAgICBpZihhLmhwIDw9IDApe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBHZXRMb2NhbEF0dHIoKTpQbGF5ZXJBdHRye1xyXG4gICAgICAgIHJldHVybiBDbGllbnRCYXNlLm1JbnN0YW5jZS5HZXRQbGF5ZXJBdHRyKGdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuZ3VpZClcclxuICAgIH1cclxuICAgIEdldE90aGVyQXR0cihndWlkOnN0cmluZyk6UGxheWVyQXR0cntcclxuICAgICAgICByZXR1cm4gQ2xpZW50QmFzZS5tSW5zdGFuY2UuR2V0UGxheWVyQXR0cihndWlkKVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4vUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2ZXIgfSBmcm9tIFwiLi9QbGF5ZXJTZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDbGllbnQgZXh0ZW5kcyBNb2R1bGVDPFBsYXllclNlcnZlciwgUGxheWVyRGF0YT4ge1xyXG4gICAgcHJvdGVjdGVkIG9uQXdha2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllckNsaWVudG9uQXdha2UnKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllckNsaWVudG9uU3RhcnQnKVxyXG4gICAgfVxyXG59IiwgImV4cG9ydCBjbGFzcyBQbGF5ZXJEYXRhIGV4dGVuZHMgU3ViZGF0YSB7XHJcblxyXG4gICAgcHVibGljIGhwOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMVx1NjUzOVx1NTNEOFx1NzY4NFx1NTZERVx1OEMwM1x1RkYwQ1x1NTcyOFx1OTcwMFx1ODk4MVx1NzdFNVx1OTA1M1x1OTFEMVx1NUUwMVx1NjUzOVx1NTNEOFx1NzY4NFx1NTczMFx1NjVCOVx1NzZEMVx1NTQyQ1x1NTM3M1x1NTNFRiAqL1xyXG4gICAgcHVibGljIG9uaHBDaGFuZ2U6IEFjdGlvbiA9IG5ldyBBY3Rpb24oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjUzOVx1NTNEOFx1OTFEMVx1NUUwMVx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgICogQHBhcmFtIGRlbHRhTnVtIFx1NjUzOVx1NTNEOFx1NTAzQ1x1RkYwQ1x1NEUzQVx1OEQxRlx1NjU3MFx1NUMzMVx1NjYyRlx1NTFDRlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hhbmdlR29sZChkZWx0YU51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gXHU2NzBEXHU1MkExXHU3QUVGXHU2NTM5XHU1M0Q4XHU5MUQxXHU1RTAxXHVGRjBDXHU1QzA2XHU4RkQ5XHU0RTJBXHU2NENEXHU0RjVDXHU1NDBDXHU2QjY1XHU3RUQ5XHU1QkEyXHU2MjM3XHU3QUVGXHJcbiAgICAgICAgdGhpcy5zeW5jVG9DbGllbnQoKTtcclxuICAgICAgICB0aGlzLmhwICs9IGRlbHRhTnVtO1xyXG4gICAgICAgIHRoaXMub25ocENoYW5nZS5jYWxsKHRoaXMuaHApO1xyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IFBsYXllckNsaWVudCB9IGZyb20gXCIuL1BsYXllckNsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclNlcnZlciBleHRlbmRzIE1vZHVsZVM8UGxheWVyQ2xpZW50LCBQbGF5ZXJEYXRhPiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllclNlcnZlcicpXHJcbiAgICB9XHJcbn0iLCAiXHJcbi8vXHU1MTQzXHU3RDIwXHU3Njg0XHU1N0ZBXHU3QzdCXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRCYXNle1xyXG5cdGlkOm51bWJlcjtcclxufVxyXG4vL1x1OTE0RFx1N0Y2RVx1NzY4NFx1NTdGQVx1N0M3QlxyXG5leHBvcnQgY2xhc3MgQ29uZmlnQmFzZTxUIGV4dGVuZHMgSUVsZW1lbnRCYXNlPntcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfS0VZOnN0cmluZyA9ICdLZXknOy8vXHU4QkZCXHU1M0Q2XHU5NTJFKFx1OTY2NFx1NEU4NklEXHU0RTRCXHU1OTE2XHU3Njg0XHU1MjJCXHU1NDBEXHVGRjBDXHU1RTI2a2V5XHU3Njg0XHU1QjU3XHU2QkI1XHU1RkM1XHU5ODdCXHU2NjJGc3RyaW5nXHU3QzdCXHU1NzhCKVxyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBR19MQU5HVUFHRTpzdHJpbmcgPSAnTGFuZ3VhZ2UnOy8vXHU1MTczXHU4MDU0XHU4QkVEXHU4QTAwXHU4ODY4XHU3Njg0aWRcdTYyMTZrZXkoXHU1OTgyXHU2NzlDXHU2NzA5XHU4RkQ5XHU0RTJBdGFnXHVGRjBDXHU1QkZDXHU4ODY4XHU1REU1XHU1MTc3XHU4OTgxXHU2MjhBXHU2NTcwXHU2MzZFXHU3NTFGXHU2MjEwXHU0RTNBc3RyaW5nXHU3QzdCXHU1NzhCXHVGRjBDXHU1NkUwXHU0RTNBXHU0RjFBXHU4MUVBXHU1MkE4XHU4RkRCXHU4ODRDXHU1MDNDXHU3Njg0XHU4RjZDXHU2MzYyKVxyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBR19NQUlOTEFOR1VBR0U6c3RyaW5nID0gJ01haW5MYW5ndWFnZSc7Ly9cdTRFM0JcdThCRURcdThBMDB0YWdcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfQ0hJTERMQU5HVUFHRTpzdHJpbmcgPSAnQ2hpbGRMYW5ndWFnZSc7Ly9cdTVCNTBcdThCRURcdThBMDB0YWdcclxuXHJcblx0cHJpdmF0ZSByZWFkb25seSBFTEVNRU5UQVJSOkFycmF5PFQ+ID0gW107XHJcblx0cHJpdmF0ZSByZWFkb25seSBFTEVNRU5UTUFQOk1hcDxudW1iZXIsIFQ+ID0gbmV3IE1hcDxudW1iZXIsIFQ+KCk7XHJcblx0cHJpdmF0ZSByZWFkb25seSBLRVlNQVA6TWFwPG51bWJlciB8IHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuXHRwcml2YXRlIHN0YXRpYyBsYW5ndWFnZUluZGV4Om51bWJlciA9IDBcclxuXHRwcml2YXRlIHN0YXRpYyBnZXRMYW5ndWFnZTooa2V5OnN0cmluZ3xudW1iZXIpPT5zdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihleGNlbERhdGE6QXJyYXk8QXJyYXk8YW55Pj4pe1xyXG5cdFx0bGV0IGhlYWRlckxpbmU6bnVtYmVyID0gMjsvL1x1ODg2OFx1NTkzNFx1NzY4NFx1ODg0Q1x1NjU3MFxyXG5cdFx0dGhpcy5FTEVNRU5UQVJSID0gbmV3IEFycmF5KGV4Y2VsRGF0YS5sZW5ndGggLSBoZWFkZXJMaW5lKTtcclxuXHRcdFxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdHRoaXMuRUxFTUVOVEFSUltpXSA9IHt9IGFzIFRcclxuXHRcdH1cclxuXHRcdGxldCBjb2x1bW4gPSBleGNlbERhdGFbMF0ubGVuZ3RoOy8vXHU1MjE3XHU2NTcwXHJcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspey8vXHU5MDREXHU1Mzg2XHU1NDA0XHU1MjE3XHJcblx0XHRcdGxldCBuYW1lOnN0cmluZyA9IGV4Y2VsRGF0YVswXVtqXTtcclxuXHRcdFx0bGV0IHRhZ3M6QXJyYXk8c3RyaW5nPiA9IGV4Y2VsRGF0YVsxXVtqXS5zcGxpdCgnfCcpO1xyXG5cdFx0XHRpZih0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0NISUxETEFOR1VBR0UpKSBjb250aW51ZTtcclxuXHRcdFx0bGV0IGpPZmZlY3Q6bnVtYmVyID0gMDsvL1x1NTIxN1x1NTA0Rlx1NzlGQlx1OTFDRlxyXG5cdFx0XHRpZih0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX01BSU5MQU5HVUFHRSkpe1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IGogKyBDb25maWdCYXNlLmxhbmd1YWdlSW5kZXg7XHJcblx0XHRcdFx0bGV0IHRhcmdldFRhZ3M6QXJyYXk8c3RyaW5nPiA9IGV4Y2VsRGF0YVsxXVtpbmRleF0uc3BsaXQoJ3wnKTtcclxuXHRcdFx0XHRpZihpbmRleCA8IGNvbHVtbiAmJiB0YXJnZXRUYWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0NISUxETEFOR1VBR0UpKXtcclxuXHRcdFx0XHRcdGpPZmZlY3QgPSBDb25maWdCYXNlLmxhbmd1YWdlSW5kZXg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBoYXNUYWdfS2V5OmJvb2xlYW4gPSB0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0tFWSk7XHJcblx0XHRcdGxldCBoYXNUYWdfTGFuZ3VhZ2U6Ym9vbGVhbiA9IHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfTEFOR1VBR0UpO1xyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UQVJSLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRsZXQgZWxlID0gdGhpcy5FTEVNRU5UQVJSW2ldO1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGV4Y2VsRGF0YVtpICsgaGVhZGVyTGluZV1baiArIGpPZmZlY3RdO1xyXG5cdFx0XHRcdGlmKGogPT0gMCl7Ly9JRFxyXG5cdFx0XHRcdFx0dGhpcy5FTEVNRU5UTUFQLnNldCh2YWx1ZSwgZWxlKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlmKGhhc1RhZ19LZXkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLktFWU1BUC5zZXQodmFsdWUsIGV4Y2VsRGF0YVtpICsgaGVhZGVyTGluZV1bMF0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYoaGFzVGFnX0xhbmd1YWdlKXtcclxuXHRcdFx0XHRcdFx0aWYoQ29uZmlnQmFzZS5nZXRMYW5ndWFnZSAhPSBudWxsKXtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IENvbmZpZ0Jhc2UuZ2V0TGFuZ3VhZ2UodmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IFwidW5rbm93XCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbGVbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvL1x1OEJCRVx1N0Y2RVx1ODNCN1x1NTNENlx1OEJFRFx1OEEwMFx1NzY4NFx1NjVCOVx1NkNENVxyXG5cdHB1YmxpYyBzdGF0aWMgaW5pdExhbmd1YWdlKGxhbmd1YWdlSW5kZXg6bnVtYmVyLCBnZXRMYW5ndWFnZUZ1bjooa2V5OnN0cmluZ3xudW1iZXIpPT5zdHJpbmcpe1xyXG5cdFx0Q29uZmlnQmFzZS5sYW5ndWFnZUluZGV4ID0gbGFuZ3VhZ2VJbmRleDtcclxuXHRcdENvbmZpZ0Jhc2UuZ2V0TGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZUZ1bjtcclxuXHRcdGlmKENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleCA8IDApe1xyXG5cdFx0XHRDb25maWdCYXNlLmxhbmd1YWdlSW5kZXggPSBDb25maWdCYXNlLmdldFN5c3RlbUxhbmd1YWdlSW5kZXgoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9cdTgzQjdcdTUzRDZcdTdDRkJcdTdFREZcdThCRURcdThBMDBcdTdEMjJcdTVGMTVcclxuXHRwcml2YXRlIHN0YXRpYyBnZXRTeXN0ZW1MYW5ndWFnZUluZGV4KCk6bnVtYmVye1xyXG5cdFx0bGV0IGxhbmd1YWdlID0gVXRpbC5Mb2NhbGVVdGlsLmdldERlZmF1bHRMb2NhbGUoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImVuXCIpKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJ6aFwiKSkge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH1cclxuXHRcdGlmICghIWxhbmd1YWdlLm1hdGNoKFwiamFcIikpIHtcclxuXHRcdFx0cmV0dXJuIDI7XHJcblx0XHR9XHJcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImRlXCIpKSB7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogXHU2ODM5XHU2MzZFaWRcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTUxNDNcdTdEMjBcclxuXHQqIEBwYXJhbSBpZCBpZHxrZXlcclxuXHQqIEByZXR1cm5zIEVsZW1lbnRcclxuXHQqL1xyXG5cdHB1YmxpYyBnZXRFbGVtZW50KGlkOm51bWJlcnxzdHJpbmcpOiBUIHtcclxuXHRcdGxldCBlbGUgPSB0aGlzLkVMRU1FTlRNQVAuZ2V0KE51bWJlcihpZCkpIHx8IHRoaXMuRUxFTUVOVE1BUC5nZXQodGhpcy5LRVlNQVAuZ2V0KGlkKSk7XHJcblx0XHRpZihlbGUgPT0gbnVsbCl7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IodGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCJcdTkxNERcdTdGNkVcdTg4NjhcdTRFMkRcdTYyN0VcdTRFMERcdTUyMzBcdTUxNDNcdTdEMjAgaWQ6XCIgKyBpZCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZWxlO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIFx1NjgzOVx1NjM2RVx1NUI1N1x1NkJCNVx1NTQwRFx1NTQ4Q1x1NUI1N1x1NkJCNVx1NTAzQ1x1NjdFNVx1NjI3RVx1NEUwMFx1NEUyQVx1NTE0M1x1N0QyMFxyXG5cdCogQHBhcmFtIGZpZWxkTmFtZSBcdTVCNTdcdTZCQjVcdTU0MERcclxuXHQqIEBwYXJhbSBmaWVsZFZhbHVlIFx1NUI1N1x1NkJCNVx1NTAzQ1xyXG5cdCogQHJldHVybnMgXHU3QjJDXHU0RTAwXHU0RTJBXHU2MjdFXHU1MjMwXHU3Njg0RWxlbWVudFxyXG5cdCovXHJcblx0cHVibGljIGZpbmRFbGVtZW50KGZpZWxkTmFtZTpzdHJpbmcsIGZpZWxkVmFsdWU6YW55KTogVHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRpZih0aGlzLkVMRU1FTlRBUlJbaV1bZmllbGROYW1lXSA9PSBmaWVsZFZhbHVlKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5FTEVNRU5UQVJSW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogXHU2ODM5XHU2MzZFXHU1QjU3XHU2QkI1XHU1NDBEXHU1NDhDXHU1QjU3XHU2QkI1XHU1MDNDXHU2N0U1XHU2MjdFXHU0RTAwXHU3RUM0XHU1MTQzXHU3RDIwXHJcblx0KiBAcGFyYW0gZmllbGROYW1lIFx1NUI1N1x1NkJCNVx1NTQwRFxyXG5cdCogQHBhcmFtIGZpZWxkVmFsdWUgXHU1QjU3XHU2QkI1XHU1MDNDXHJcblx0KiBAcmV0dXJucyBcdTYyNDBcdTY3MDlcdTdCMjZcdTU0MDhcdTg5ODFcdTZDNDJcdTc2ODRFbGVtZW50XHJcblx0Ki9cclxuXHRwdWJsaWMgZmluZEVsZW1lbnRzKGZpZWxkTmFtZTpzdHJpbmcsZmllbGRWYWx1ZTphbnkpOkFycmF5PFQ+e1xyXG5cdFx0bGV0IGFycjpBcnJheTxUPiA9IFtdO1xyXG5cdFx0Zm9yKGxldCBpID0gMDtpIDwgdGhpcy5FTEVNRU5UQVJSLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRpZih0aGlzLkVMRU1FTlRBUlJbaV1bZmllbGROYW1lXSA9PSBmaWVsZFZhbHVlKXtcclxuXHRcdFx0XHRhcnIucHVzaCh0aGlzLkVMRU1FTlRBUlJbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXJyO1xyXG5cdH1cclxuXHQvKipcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTUxNDNcdTdEMjAqL1xyXG5cdHB1YmxpYyBnZXRBbGxFbGVtZW50KCk6QXJyYXk8VD57XHJcblx0XHRyZXR1cm4gdGhpcy5FTEVNRU5UQVJSO1xyXG5cdH1cclxufSIsICJpbXBvcnQge0NvbmZpZ0Jhc2UsIElFbGVtZW50QmFzZX0gZnJvbSBcIi4vQ29uZmlnQmFzZVwiO1xyXG5pbXBvcnQge01vbnN0ZXJzQ29uZmlnfSBmcm9tIFwiLi9Nb25zdGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb25maWd7XHJcblx0cHJpdmF0ZSBzdGF0aWMgY29uZmlnTWFwOk1hcDxzdHJpbmcsIENvbmZpZ0Jhc2U8SUVsZW1lbnRCYXNlPj4gPSBuZXcgTWFwKCk7XHJcblx0LyoqXHJcblx0KiBcdTU5MUFcdThCRURcdThBMDBcdThCQkVcdTdGNkVcclxuXHQqIEBwYXJhbSBsYW5ndWFnZUluZGV4IFx1OEJFRFx1OEEwMFx1N0QyMlx1NUYxNSgtMVx1NEUzQVx1N0NGQlx1N0VERlx1OUVEOFx1OEJBNFx1OEJFRFx1OEEwMClcclxuXHQqIEBwYXJhbSBnZXRMYW5ndWFnZUZ1biBcdTY4MzlcdTYzNkVrZXlcdTgzQjdcdTUzRDZcdThCRURcdThBMDBcdTUxODVcdTVCQjlcdTc2ODRcdTY1QjlcdTZDRDVcclxuXHQqL1xyXG5cdHB1YmxpYyBzdGF0aWMgaW5pdExhbmd1YWdlKGxhbmd1YWdlSW5kZXg6bnVtYmVyLCBnZXRMYW5ndWFnZUZ1bjooa2V5OnN0cmluZ3xudW1iZXIpPT5zdHJpbmcpe1xyXG5cdFx0Q29uZmlnQmFzZS5pbml0TGFuZ3VhZ2UobGFuZ3VhZ2VJbmRleCwgZ2V0TGFuZ3VhZ2VGdW4pO1xyXG5cdFx0dGhpcy5jb25maWdNYXAuY2xlYXIoKTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBnZXRDb25maWc8VCBleHRlbmRzIENvbmZpZ0Jhc2U8SUVsZW1lbnRCYXNlPj4oQ29uZmlnQ2xhc3M6IHsgbmV3KCk6IFQgfSk6IFQge1xyXG5cdFx0aWYgKCF0aGlzLmNvbmZpZ01hcC5oYXMoQ29uZmlnQ2xhc3MubmFtZSkpIHtcclxuXHRcdFx0dGhpcy5jb25maWdNYXAuc2V0KENvbmZpZ0NsYXNzLm5hbWUsIG5ldyBDb25maWdDbGFzcygpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ01hcC5nZXQoQ29uZmlnQ2xhc3MubmFtZSkgYXMgVDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBnZXQgTW9uc3RlcnMoKTpNb25zdGVyc0NvbmZpZ3sgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKE1vbnN0ZXJzQ29uZmlnKSB9O1xyXG59IiwgImltcG9ydCB7IENvbmZpZ0Jhc2UsIElFbGVtZW50QmFzZSB9IGZyb20gXCIuL0NvbmZpZ0Jhc2VcIjtcclxuY29uc3QgRVhDRUxEQVRBOkFycmF5PEFycmF5PGFueT4+ID0gW1tcImlkXCIsXCJuYW1lXCIsXCJtYXhIUFwiLFwibGV2ZWxcIixcImF0a1wiLFwibW9kZWxHdWlkXCJdLFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sWzEsXCJcdTg3MThcdTg2REJcIiwxMDAsMiwxLFwiMTkyNTY5XCJdLFsyLFwiXHU1MTU0XHU1QjUwXCIsMjAwLDIsMSxcIjEzODI2OFwiXSxbMyxcIlx1OUU4Qlx1OUU3RlwiLDMwMCwyLDEsXCIxMjYwMzBcIl1dO1xyXG5leHBvcnQgaW50ZXJmYWNlIElNb25zdGVyc0VsZW1lbnQgZXh0ZW5kcyBJRWxlbWVudEJhc2V7XHJcbiBcdC8qKlx1NjAyQVx1NzI2OUlEKi9cclxuXHRpZDpudW1iZXJcclxuXHQvKipcdTYwMkFcdTcyNjlcdTU0MERcdTVCNTcqL1xyXG5cdG5hbWU6c3RyaW5nXHJcblx0LyoqXHU2NzAwXHU1OTI3XHU4ODQwXHU5MUNGKi9cclxuXHRtYXhIUDpudW1iZXJcclxuXHQvKipcdTdCNDlcdTdFQTcqL1xyXG5cdGxldmVsOm51bWJlclxyXG5cdC8qKlx1NjUzQlx1NTFGQlx1NTI5QiovXHJcblx0YXRrOm51bWJlclxyXG5cdC8qKlx1OTg4NFx1NTIzNlx1NEY1M0d1aWQqL1xyXG5cdG1vZGVsR3VpZDpzdHJpbmdcclxuIH0gXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyc0NvbmZpZyBleHRlbmRzIENvbmZpZ0Jhc2U8SU1vbnN0ZXJzRWxlbWVudD57XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKEVYQ0VMREFUQSk7XHJcblx0fVxyXG5cclxufSIsICJcdUZFRkZpbXBvcnQgSW50ZXJhY3RBY3RvciBmcm9tIFwiLi9JbnRlcmZhY2UvSUludGVyYWN0aW9uXCI7XHJcblxyXG5AVUkuVUlDYWxsT25seSgnJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlEZWZhdWx0IGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0Q2hhcmFjdGVyOiBHYW1lcGxheS5DaGFyYWN0ZXI7XHJcblxyXG5cdEludGVyYWN0QnRuOiBVSS5CdXR0b25cclxuXHROZWFySW50ZXJhY3RHdWlkIDpzdHJpbmdcclxuXHQvKiBcdTg5RTNcdTY3OTBcdThENDRcdTZFOTBJRFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSByZXNvbHZlU3RyaW5nKGFzc2V0SWRzOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IGFzc2V0SWRBcnJheTogc3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgIGxldCBhc3NldElkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGxldCBzID0gYXNzZXRJZHMuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgYSBvZiBzKSB7XHJcbiAgICAgICAgICAgIGlmIChhID09IFwiLFwiKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkQXJyYXkucHVzaChhc3NldElkKTtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZCArPSBhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3NldElkKSB7XHJcbiAgICAgICAgICAgIGFzc2V0SWRBcnJheS5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXNzZXRJZEFycmF5O1xyXG4gICAgfVxyXG5cclxuXHQvKiBcdTUyMURcdTU5Q0JcdTUzMTZcdThENDRcdTZFOTAgKi9cclxuXHRwcml2YXRlIGluaXRBc3NldHMoYXNzZXRJZHM6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0bGV0IGFzc2V0SWRBcnJheSA9IHRoaXMucmVzb2x2ZVN0cmluZyhhc3NldElkcyk7XHJcblx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGFzc2V0SWRBcnJheSkge1xyXG5cdFx0XHRVdGlsLkFzc2V0VXRpbC5hc3luY0Rvd25sb2FkQXNzZXQoZWxlbWVudClcclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBUcnlJbnRlcmFjdCgpOnZvaWQge1xyXG5cdFx0bGV0IG9iajpHYW1lT2JqZWN0ID0gR2FtZU9iamVjdC5maW5kKHRoaXMuTmVhckludGVyYWN0R3VpZClcclxuXHRcdGlmIChvYmogPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdGxldCBhID0gb2JqLmdldFNjcmlwdHMoKVxyXG5cdFx0bGV0IGFjdG9yIDogSW50ZXJhY3RBY3RvciA9IDxJbnRlcmFjdEFjdG9yPm9iai5nZXRTY3JpcHRCeU5hbWUoXCJJSW50ZXJhY3Rpb25cIilcclxuXHRcdGFjdG9yLk9uSW50ZXJhY3QoZ2V0Q3VycmVudFBsYXllcigpLCAxKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBTaG93SW50ZXJhY3RCdXR0b24oZ3VpZCA6c3RyaW5nKTp2b2lkIHtcclxuXHRcdHRoaXMuSW50ZXJhY3RCdG4udmlzaWJpbGl0eSA9IFVJLlNsYXRlVmlzaWJpbGl0eS5WaXNpYmxlXHJcblx0XHR0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPSBndWlkXHJcblx0fVxyXG5cdHByaXZhdGUgSGlkZUludGVyYWN0QnV0dG9uKGd1aWQ6c3RyaW5nKTp2b2lke1xyXG5cdFx0aWYgKHRoaXMuTmVhckludGVyYWN0R3VpZCA9PSBndWlkKSB7XHJcblx0XHRcdHRoaXMuTmVhckludGVyYWN0R3VpZCA9IFwiXCJcclxuXHRcdFx0dGhpcy5JbnRlcmFjdEJ0bi52aXNpYmlsaXR5ID0gVUkuU2xhdGVWaXNpYmlsaXR5LkNvbGxhcHNlZFxyXG5cdFx0fVxyXG5cdH1cclxuXHQvKiogXHU0RUM1XHU1NzI4XHU2RTM4XHU2MjBGXHU2NUY2XHU5NUY0XHU1QkY5XHU5NzVFXHU2QTIxXHU2NzdGXHU1QjlFXHU0RjhCXHU4QzAzXHU3NTI4XHU0RTAwXHU2QjIxICovXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpIHtcclxuXHRcdC8vXHU1MjFEXHU1OUNCXHU1MzE2XHU1MkE4XHU3NTNCXHU4RDQ0XHU2RTkwIFxyXG5cdFx0dGhpcy5pbml0QXNzZXRzKFwiOTU3NzcsNjEyNDVcIilcclxuXHRcdC8vXHU4QkJFXHU3RjZFXHU4MEZEXHU1NDI2XHU2QkNGXHU1RTI3XHU4OUU2XHU1M0Qxb25VcGRhdGVcclxuXHRcdHRoaXMuY2FuVXBkYXRlID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdC8vXHU2MjdFXHU1MjMwXHU1QkY5XHU1RTk0XHU3Njg0XHU4REYzXHU4REMzXHU2MzA5XHU5NEFFXHJcbiAgICAgICAgY29uc3QgSnVtcEJ0biA9IHRoaXMudWlXaWRnZXRCYXNlLmZpbmRDaGlsZEJ5UGF0aCgnUm9vdENhbnZhcy9CdXR0b25fSnVtcCcpIGFzIFVJLkJ1dHRvblxyXG5cdFx0Y29uc3QgQXR0YWNrQnRuID0gdGhpcy51aVdpZGdldEJhc2UuZmluZENoaWxkQnlQYXRoKCdSb290Q2FudmFzL0J1dHRvbl9BdHRhY2snKSBhcyBVSS5CdXR0b25cclxuXHRcdHRoaXMuSW50ZXJhY3RCdG4gPSB0aGlzLnVpV2lkZ2V0QmFzZS5maW5kQ2hpbGRCeVBhdGgoJ1Jvb3RDYW52YXMvSW50ZXJhY3RCdG4nKSBhcyBVSS5CdXR0b25cclxuXHRcdHRoaXMuSW50ZXJhY3RCdG4udmlzaWJpbGl0eSA9IFVJLlNsYXRlVmlzaWJpbGl0eS5Db2xsYXBzZWRcclxuXHRcdFxyXG5cdFx0RXZlbnRzLmFkZExvY2FsTGlzdGVuZXIoXCJjbGllbnRfc2hvd19pbnRlcmFjdF9idXR0b25cIiwgKGd1aWQ6IHN0cmluZyk9PntcclxuXHRcdFx0dGhpcy5TaG93SW50ZXJhY3RCdXR0b24oZ3VpZClcclxuXHRcdH0pO1x0XHJcblx0XHRFdmVudHMuYWRkTG9jYWxMaXN0ZW5lcihcImNsaWVudF9oaWRlX2ludGVyYWN0X2J1dHRvblwiLCAoZ3VpZDogc3RyaW5nKT0+e1xyXG5cdFx0XHR0aGlzLkhpZGVJbnRlcmFjdEJ1dHRvbihndWlkKVxyXG5cdFx0fSlcclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU4REYzXHU4REMzXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1OERGM1x1OERDM1xyXG4gICAgICAgIEp1bXBCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0XHRpZiAodGhpcy5DaGFyYWN0ZXIpIHtcclxuXHRcdFx0XHR0aGlzLkNoYXJhY3Rlci5qdW1wKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0R2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKCkudGhlbigocGxheWVyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3RlciA9IHBsYXllci5jaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHQvL1x1ODlEMlx1ODI3Mlx1NjI2N1x1ODg0Q1x1OERGM1x1OERDM1x1NTI5Rlx1ODBGRFxyXG5cdFx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIuanVtcCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KVx0XHJcblxyXG5cdFx0Ly9cdTcwQjlcdTUxRkJcdTY1M0JcdTUxRkJcdTYzMDlcdTk0QUUsXHU1RjAyXHU2QjY1XHU4M0I3XHU1M0Q2XHU0RUJBXHU3MjY5XHU1NDBFXHU2MjY3XHU4ODRDXHU2NTNCXHU1MUZCXHU1MkE4XHU0RjVDXHJcbiAgICAgICAgQXR0YWNrQnRuLm9uUHJlc3NlZC5hZGQoKCk9PntcclxuXHRcdFx0XHRHYW1lcGxheS5hc3luY0dldEN1cnJlbnRQbGF5ZXIoKS50aGVuKChwbGF5ZXIpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuQ2hhcmFjdGVyID0gcGxheWVyLmNoYXJhY3RlcjtcclxuXHRcdFx0XHRcdC8vXHU4QkE5XHU1MkE4XHU3NTNCXHU1M0VBXHU1NzI4XHU0RTBBXHU1MzRBXHU4RUFCXHU2NEFEXHU2NTNFXHJcblx0XHRcdFx0XHRsZXQgYW5pbTEgPSBwbGF5ZXIuY2hhcmFjdGVyLmxvYWRBbmltYXRpb24oXCI2MTI0NVwiKTtcclxuXHRcdFx0XHRcdGFuaW0xLnNsb3QgPSBHYW1lcGxheS5BbmltU2xvdC5VcHBlcjtcclxuXHRcdFx0XHRcdC8vXHU4OUQyXHU4MjcyXHU2MjY3XHU4ODRDXHU2NTNCXHU1MUZCXHU1MkE4XHU0RjVDXHJcblx0XHRcdFx0XHRpZihhbmltMS5pc1BsYXlpbmcpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRhbmltMS5wbGF5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KVx0XHJcblxyXG5cdFx0Ly9cdTcwQjlcdTUxRkJcdTRFQTRcdTRFOTJcdTYzMDlcdTk0QUUsXHU1RjAyXHU2QjY1XHU4M0I3XHU1M0Q2XHU0RUJBXHU3MjY5XHU1NDBFXHU2MjY3XHU4ODRDXHU0RUE0XHU0RTkyXHU1MkE4XHU0RjVDXHJcbiAgICAgICAgdGhpcy5JbnRlcmFjdEJ0bi5vblByZXNzZWQuYWRkKCgpPT57XHJcblx0XHRcdHRoaXMuVHJ5SW50ZXJhY3QoKVxyXG5cdFx0fSlcdFxyXG5cdFx0XHJcbiAgICB9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBcdTY3ODRcdTkwMjBVSVx1NjU4N1x1NEVGNlx1NjIxMFx1NTI5Rlx1NTQwRVx1RkYwQ29uU3RhcnRcdTRFNEJcdTU0MEUgXHJcblx0ICogXHU1QkY5XHU0RThFVUlcdTc2ODRcdTY4MzlcdTgyODJcdTcwQjlcdTc2ODRcdTZERkJcdTUyQTBcdTY0Q0RcdTRGNUNcdUZGMENcdThGREJcdTg4NENcdThDMDNcdTc1MjhcclxuXHQgKiBcdTZDRThcdTYxMEZcdUZGMUFcdThCRTVcdTRFOEJcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTU5MUFcdTZCMjFcdThDMDNcdTc1MjhcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25BZGRlZCgpIHtcclxuXHR9XHJcblxyXG5cdC8qKiBcclxuXHQgKiBcdTY3ODRcdTkwMjBVSVx1NjU4N1x1NEVGNlx1NjIxMFx1NTI5Rlx1NTQwRVx1RkYwQ29uQWRkZWRcdTRFNEJcdTU0MEVcclxuXHQgKiBcdTVCRjlcdTRFOEVVSVx1NzY4NFx1NjgzOVx1ODI4Mlx1NzBCOVx1NzY4NFx1NzlGQlx1OTY2NFx1NjRDRFx1NEY1Q1x1RkYwQ1x1OEZEQlx1ODg0Q1x1OEMwM1x1NzUyOFxyXG5cdCAqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEJFNVx1NEU4Qlx1NEVGNlx1NTNFRlx1ODBGRFx1NEYxQVx1NTkxQVx1NkIyMVx1OEMwM1x1NzUyOFxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBvblJlbW92ZWQoKSB7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0KiBcdTY3ODRcdTkwMjBVSVx1NjU4N1x1NEVGNlx1NjIxMFx1NTI5Rlx1NTQwRVx1RkYwQ1VJXHU1QkY5XHU4QzYxXHU1MThEXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU4QzAzXHU3NTI4IFxyXG5cdCogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4RkQ5XHU0RTRCXHU1NDBFVUlcdTVCRjlcdThDNjFcdTVERjJcdTdFQ0ZcdTg4QUJcdTk1MDBcdTZCQzFcdTRFODZcdUZGMENcdTk3MDBcdTg5ODFcdTc5RkJcdTk2NjRcdTYyNDBcdTY3MDlcdTVCRjlcdThCRTVcdTY1ODdcdTRFRjZcdTU0OENVSVx1NzZGOFx1NTE3M1x1NUJGOVx1OEM2MVx1NEVFNVx1NTNDQVx1NUI1MFx1NUJGOVx1OEM2MVx1NzY4NFx1NUYxNVx1NzUyOFxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCogXHU2QkNGXHU0RTAwXHU1RTI3XHU4QzAzXHU3NTI4XHJcblx0KiBcdTkwMUFcdThGQzdjYW5VcGRhdGVcdTUzRUZcdTRFRTVcdTVGMDBcdTU0MkZcdTUxNzNcdTk1RURcdThDMDNcdTc1MjhcclxuXHQqIGR0IFx1NEUyNFx1NUUyN1x1OEMwM1x1NzUyOFx1NzY4NFx1NjVGNlx1OTVGNFx1NURFRVx1RkYwQ1x1NkJFQlx1NzlEMlxyXG5cdCovXHJcblx0Ly9wcm90ZWN0ZWQgb25VcGRhdGUoZHQgOm51bWJlcikge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdThCQkVcdTdGNkVcdTY2M0VcdTc5M0FcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvblNob3coLi4ucGFyYW1zOmFueVtdKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1OEJCRVx1N0Y2RVx1NEUwRFx1NjYzRVx1NzkzQVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uSGlkZSgpIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU1RjUzXHU4RkQ5XHU0RTJBVUlcdTc1NENcdTk3NjJcdTY2MkZcdTUzRUZcdTRFRTVcdTYzQTVcdTY1MzZcdTRFOEJcdTRFRjZcdTc2ODRcdTY1RjZcdTUwMTlcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFUb3VjaFx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqIFx1OEZENFx1NTZERVx1NEU4Qlx1NEVGNlx1NjYyRlx1NTQyNlx1NTkwNFx1NzQwNlx1NEU4NlxyXG5cdCAqIFx1NTk4Mlx1Njc5Q1x1NTkwNFx1NzQwNlx1NEU4Nlx1RkYwQ1x1OTBBM1x1NEU0OFx1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU1M0VGXHU0RUU1XHU2M0E1XHU2NTM2XHU4RkQ5XHU2QjIxVG91Y2hcdTU0MEVcdTdFRURcdTc2ODRNb3ZlXHU1NDhDRW5kXHU0RThCXHU0RUY2XHJcblx0ICogXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU1OTA0XHU3NDA2XHVGRjBDXHU5MEEzXHU0RTQ4XHU4RkQ5XHU0RTJBVUlcdTc1NENcdTk3NjJcdTVDMzFcdTY1RTBcdTZDRDVcdTYzQTVcdTY1MzZcdThGRDlcdTZCMjFUb3VjaFx1NTQwRVx1N0VFRFx1NzY4NE1vdmVcdTU0OENFbmRcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvblRvdWNoU3RhcnRlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU1MThEVUlcdTc1NENcdTk3NjJcdTRFMEFcdTc5RkJcdTUyQThcdTY1RjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvblRvdWNoTW92ZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1NzlCQlx1NUYwMFVJXHU3NTRDXHU5NzYyXHU2NUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgT25Ub3VjaEVuZGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTVGNTNcdTU3MjhVSVx1NzU0Q1x1OTc2Mlx1NEUwQVx1OEMwM1x1NzUyOGRldGVjdERyYWcvZGV0ZWN0RHJhZ0lmUHJlc3NlZFx1NjVGNlx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCAqIFx1NTNFRlx1NEVFNVx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVx1NjJENlx1NjJGRFx1NEU4Qlx1NEVGNlx1NzY4NFx1NUYwMFx1NTlDQlx1NzUxRlx1NjIxMFxyXG5cdCAqIFx1OEZENFx1NTZERVx1NEUwMFx1NkIyMVx1NzUxRlx1NjIxMFx1NzY4NFx1NjJENlx1NjJGRFx1NEU4Qlx1NEVGNiBuZXdEcmFnRHJvcFx1NTNFRlx1NEVFNVx1NzUxRlx1NjIxMFx1NEUwMFx1NkIyMVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0RldGVjdGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KTpVSS5EcmFnRHJvcE9wZXJhdGlvbiB7XHJcblx0Ly9cdHJldHVybiB0aGlzLm5ld0RyYWdEcm9wKG51bGwpO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdTdFQ0ZcdThGQzdcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqIFx1OEZENFx1NTZERXRydWVcdTc2ODRcdThCRERcdTg4NjhcdTc5M0FcdTU5MDRcdTc0MDZcdTRFODZcdThGRDlcdTZCMjFcdTRFOEJcdTRFRjZcdUZGMENcdTRFMERcdTRGMUFcdTUxOERcdTVGODBcdThGRDlcdTRFMkFVSVx1NzY4NFx1NEUwQlx1NEUwMFx1NUM0Mlx1NzY4NFVJXHU3RUU3XHU3RUVEXHU1MTkyXHU2Q0UxXHU4RkQ5XHU0RTJBXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnT3ZlcihJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQsSW5EcmFnRHJvcE9wZXJhdGlvbjpVSS5EcmFnRHJvcE9wZXJhdGlvbik6Ym9vbGVhbiB7XHJcblx0Ly9cdHJldHVybiB0cnVlO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdTU3MjhcdThGRDlcdTRFMkFVSVx1OTFDQVx1NjUzRVx1NUI4Q1x1NjIxMFx1NjVGNlxyXG5cdCAqIFx1OEZENFx1NTZERXRydWVcdTc2ODRcdThCRERcdTg4NjhcdTc5M0FcdTU5MDRcdTc0MDZcdTRFODZcdThGRDlcdTZCMjFcdTRFOEJcdTRFRjZcdUZGMENcdTRFMERcdTRGMUFcdTUxOERcdTVGODBcdThGRDlcdTRFMkFVSVx1NzY4NFx1NEUwQlx1NEUwMFx1NUM0Mlx1NzY4NFVJXHU3RUU3XHU3RUVEXHU1MTkyXHU2Q0UxXHU4RkQ5XHU0RTJBXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ecm9wKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKTpib29sZWFuIHtcclxuXHQvL1x0cmV0dXJuIHRydWU7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1OEZEQlx1NTE2NVx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnRW50ZXIoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3OUJCXHU1RjAwXHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdMZWF2ZShJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQpIHtcclxuXHQvL31cclxuXHRcclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdUZGMENcdTZDQTFcdTY3MDlcdTVCOENcdTYyMTBcdTVCOENcdTYyMTBcdTc2ODRcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjZcdTgwMENcdTUzRDZcdTZEODhcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdDYW5jZWxsZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSB7XHJcblx0Ly99XHJcblxyXG59XHJcbiIsICJcdUZFRkZcclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uc3RlckJhc2UgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcblxyXG4gICAgLyoqIFx1NUY1M1x1ODExQVx1NjcyQ1x1ODhBQlx1NUI5RVx1NEY4Qlx1NTQwRVx1RkYwQ1x1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NUUyN1x1NjZGNFx1NjVCMFx1NTI0RFx1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1NDY4XHU2NzFGXHU1MUZEXHU2NTcwIFx1NkJDRlx1NUUyN1x1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU1MUZEXHU2NTcwXHU2MjY3XHU4ODRDXHU5NzAwXHU4OTgxXHU1QzA2dGhpcy51c2VVcGRhdGVcdThENEJcdTUwM0NcdTRFM0F0cnVlXHJcbiAgICAgKiBAcGFyYW0gZHQgXHU1RjUzXHU1MjREXHU1RTI3XHU0RTBFXHU0RTBBXHU0RTAwXHU1RTI3XHU3Njg0XHU1RUY2XHU4RkRGIC8gXHU3OUQyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgxMUFcdTY3MkNcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdTY3MDBcdTU0MEVcdTRFMDBcdTVFMjdcdTYyNjdcdTg4NENcdTVCOENcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG59IiwgIlx1RkVGRmltcG9ydCBJbnRlcmFjdEFjdG9yIGZyb20gXCIuLi9JbnRlcmZhY2UvSUludGVyYWN0aW9uXCI7XHJcblxyXG5AQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNfSW50ZXJhY3RPYmplY3QgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcbiAgICBwcml2YXRlIGd1aWRMaXN0OiBNYXA8c3RyaW5nLCBJbnRlcmFjdEFjdG9yPiA9IG5ldyBNYXA8c3RyaW5nLCBJbnRlcmFjdEFjdG9yPjtcclxuICAgIHByaXZhdGUgYWMgOiBJbnRlcmFjdEFjdG9yO1xyXG4gICAgLyoqIFx1NUY1M1x1ODExQVx1NjcyQ1x1ODhBQlx1NUI5RVx1NEY4Qlx1NTQwRVx1RkYwQ1x1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NUUyN1x1NjZGNFx1NjVCMFx1NTI0RFx1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1NDY4XHU2NzFGXHU1MUZEXHU2NTcwIFx1NkJDRlx1NUUyN1x1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU1MUZEXHU2NTcwXHU2MjY3XHU4ODRDXHU5NzAwXHU4OTgxXHU1QzA2dGhpcy51c2VVcGRhdGVcdThENEJcdTUwM0NcdTRFM0F0cnVlXHJcbiAgICAgKiBAcGFyYW0gZHQgXHU1RjUzXHU1MjREXHU1RTI3XHU0RTBFXHU0RTBBXHU0RTAwXHU1RTI3XHU3Njg0XHU1RUY2XHU4RkRGIC8gXHU3OUQyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgxMUFcdTY3MkNcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdTY3MDBcdTU0MEVcdTRFMDBcdTVFMjdcdTYyNjdcdTg4NENcdTVCOENcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG59IiwgIlx1RkVGRkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0QWN0b3IgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcbiAgICAvKipcclxuICAgICAqIFx1NEVBNFx1NEU5Mlx1NzI2OVx1NzY4NFx1NTczQVx1NjY2Rlx1NEUyRFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1fT2JqZWN0OiBHYW1lT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBtX3RyaWdnZXI6IFRyaWdnZXI7XHJcbiAgICBwcml2YXRlIG1fZ3VpZDpzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tX09iamVjdCA9IHRoaXMuZ2FtZU9iamVjdFxyXG4gICAgICAgIHRoaXMubV90cmlnZ2VyID0gPFRyaWdnZXI+dGhpcy5tX09iamVjdC5nZXRDaGlsZEJ5TmFtZShcIlRyaWdnZXJcIikgXHJcbiAgICAgICAgdGhpcy5tX2d1aWQgPSB0aGlzLm1fT2JqZWN0Lmd1aWQ7XHJcbiAgICAgICAgdGhpcy5tX3RyaWdnZXIub25FbnRlci5hZGQoZ28gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFx1NTIyNFx1NjVBRFx1OEZEQlx1NTE2NVx1NzhCMFx1NjQ5RVx1NTMzQVx1NTdERlx1NzY4NFx1NUJGOVx1OEM2MVx1NjYyRlx1NTQyNlx1NEUzQVx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICBpZiAoIShnbyBpbnN0YW5jZW9mIEdhbWVwbGF5LkNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx1NEUwRFx1NjYyRlx1ODlEMlx1ODI3Mlx1RkYwQ1x1NTA1Q1x1NkI2Mlx1NjI2N1x1ODg0Q1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgZ28gPSA8R2FtZXBsYXkuQ2hhcmFjdGVyPmdvXHJcbiAgICAgICAgICAgIGlmICghKGdvID09IGdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1OTc1RVx1NjcyQ1x1NTczMFx1NzNBOVx1NUJCNlx1NjNBN1x1NTIzNlx1NzY4NFx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoXCJjbGllbnRfc2hvd19pbnRlcmFjdF9idXR0b25cIiwgdGhpcy5tX2d1aWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1fdHJpZ2dlci5vbkxlYXZlLmFkZChnbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gXHU1MjI0XHU2NUFEXHU4RkRCXHU1MTY1XHU3OEIwXHU2NDlFXHU1MzNBXHU1N0RGXHU3Njg0XHU1QkY5XHU4QzYxXHU2NjJGXHU1NDI2XHU0RTNBXHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgIGlmICghKGdvIGluc3RhbmNlb2YgR2FtZXBsYXkuQ2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gXHU0RTBEXHU2NjJGXHU4OUQyXHU4MjcyXHVGRjBDXHU1MDVDXHU2QjYyXHU2MjY3XHU4ODRDXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ28gPSA8R2FtZXBsYXkuQ2hhcmFjdGVyPmdvXHJcbiAgICAgICAgICAgIGlmICghKGdvID09IGdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1OTc1RVx1NjcyQ1x1NTczMFx1NzNBOVx1NUJCNlx1NjNBN1x1NTIzNlx1NzY4NFx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoXCJjbGllbnRfaGlkZV9pbnRlcmFjdF9idXR0b25cIiwgdGhpcy5tX2d1aWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NEVBNFx1NEU5Mlx1NzI2OVx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgSW5pdChndWlkIDogc3RyaW5nLCB0cmFuc2Zvcm0gOiBUcmFuc2Zvcm0pIDpzdHJpbmd7XHJcbiAgICAgICAgdGhpcy5tX09iamVjdCA9IEdhbWVPYmplY3Quc3Bhd24oe2d1aWQ6IGd1aWQsIHJlcGxpY2F0ZXMgOiB0cnVlLCB0cmFuc2Zvcm0gOiB0cmFuc2Zvcm19KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9ndWlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0NsaWVudCgpIDpib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHU1RjAwXHU1OUNCXHU0RUE0XHU0RTkyXHVGRjBDXHU3NTMxXHU1QkEyXHU2MjM3XHU3QUVGVUlcdTVDNDJcdTk3NjJcdTUzRDFcdThENzcqL1xyXG4gICAgcHVibGljIE9uSW50ZXJhY3QocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGlmICh0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSW50ZXJhY3RJbXBsZW1lbnQocGxheWVyLCBpbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5GdW5jdGlvbihDb3JlLlNlcnZlcilcclxuICAgIHByb3RlY3RlZCBJbnRlcmFjdEltcGxlbWVudChwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5Eb09uU2VydmVyKHBsYXllciwgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuRG9PbkNsaWVudChwbGF5ZXIsIGluZGV4KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1QkEyXHU2MjM3XHU3QUVGXHU4OUU2XHU1M0QxXHVGRjBDXHU1NzI4XHU1M0QxXHU3NTFGXHU0RUE0XHU0RTkyXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLkZ1bmN0aW9uKENvcmUuQ2xpZW50KVxyXG4gICAgcHJvdGVjdGVkIERvT25DbGllbnQocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTVCQTJcdTYyMzdcdTdBRUZcdTRFQTdcdTc1MUZcdTRFQTRcdTRFOTJcdUZGMENcdTczQTlcdTVCQjYnLCBwbGF5ZXIpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NjcwRFx1NTJBMVx1N0FFRlx1ODlFNlx1NTNEMVx1RkYwQ1x1NTcyOFx1NTNEMVx1NzUxRlx1NEVBNFx1NEU5Mlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBAQ29yZS5GdW5jdGlvbihDb3JlLlNlcnZlcilcclxuICAgIHByb3RlY3RlZCBEb09uU2VydmVyKHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU2NzBEXHU1MkExXHU3QUVGXHU0RUE3XHU3NTFGXHU0RUE0XHU0RTkyXHVGRjBDXHU3M0E5XHU1QkI2JywgcGxheWVyKVxyXG4gICAgfVxyXG59XHJcbiIsICJcdUZFRkYvKipcdTczQTlcdTVCQjZcdTVDNUVcdTYwMjdcdTU0MENcdTZCNjVcdTdDN0JcdUZGMENcdTRFMTZcdTc1NENcdTRFMkRcdTZCQ0ZcdTY3MDlcdTRFMDBcdTRFMkFcdTczQTlcdTVCQjZcdUZGMENcdTVDMzFcdTRGMUFcdTU3MjhcdTVCRjlcdThDNjFcdTRFMEJcdTk3NjJcdTUyMUJcdTVFRkFcdTRFMDBcdTRFMkFcdTZCNjRcdTgxMUFcdTY3MkNcdTY3NjVcdTVCRjlcdTVFOTRcdTZCNjRcdTczQTlcdTVCQjYgKi9cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQXR0ciBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuXHJcbiAgICBwdWJsaWMgY2hhcmFjdGVyOkdhbWVwbGF5LkNoYXJhY3RlclxyXG4gICAgQENvcmUuUHJvcGVydHkoe2Rpc3BsYXlOYW1lOiAnXHU4ODQwXHU5MUNGJywgcmVwbGljYXRlZCA6IHRydWV9KVxyXG4gICAgcHVibGljIGhwIDogbnVtYmVyID0gMTAwXHJcbiAgICBAQ29yZS5Qcm9wZXJ0eSh7ZGlzcGxheU5hbWU6ICdcdTY3MDBcdTU5MjdcdTg4NDBcdTkxQ0YnLCByZXBsaWNhdGVkIDogdHJ1ZX0pXHJcbiAgICBwdWJsaWMgbWF4SHAgOiBudW1iZXJcclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTUyMUJcdTVFRkFcdTYyMTBcdTUyOUZcdTgxMUFcdTY3MkMnICsgdGhpcy5ndWlkKVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBJbml0RGF0YShjIDogR2FtZXBsYXkuQ2hhcmFjdGVyKXtcclxuICAgICAgICBpZih0aGlzLmlzUnVubmluZ0NsaWVudCgpKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY1xyXG4gICAgICAgIHRoaXMubWF4SHAgPSAxMDBcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5tYXhIcFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTczQTlcdTVCQjZcdTVDNUVcdTYwMjdcdTgxMUFcdTY3MkNcdTUyMURcdTU5Q0JcdTUzMTZcdTVCOENcdTYyMTAnKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU0NjhcdTY3MUZcdTUxRkRcdTY1NzAgXHU2QkNGXHU1RTI3XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTUxRkRcdTY1NzBcdTYyNjdcdTg4NENcdTk3MDBcdTg5ODFcdTVDMDZ0aGlzLnVzZVVwZGF0ZVx1OEQ0Qlx1NTAzQ1x1NEUzQXRydWVcclxuICAgICAqIEBwYXJhbSBkdCBcdTVGNTNcdTUyNERcdTVFMjdcdTRFMEVcdTRFMEFcdTRFMDBcdTVFMjdcdTc2ODRcdTVFRjZcdThGREYgLyBcdTc5RDJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODExQVx1NjcyQ1x1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1NjcwMFx1NTQwRVx1NEUwMFx1NUUyN1x1NjI2N1x1ODg0Q1x1NUI4Q1x1OEMwM1x1NzUyOFx1NkI2NFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgUGxheWVyR3VuTWdyIH0gZnJvbSBcIi4vUGxheWVyR3VuTWdyXCJcclxuaW1wb3J0IHsgQ2FtZXJhQ29udHJvbGxlciB9IGZyb20gXCIuL1dlYXBvbi9DYW1lcmFDb250cm9sbGVyXCJcclxuXHJcbi8qKlxyXG4gKiBcdTY3QUFcdTY4QjBcdTZBMjFcdTU3NTdcdUZGMUFcdTczQTlcdTVCQjZcdTg4NENcdTRFM0FcdTY4MTFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJCZWhhdmlvciB7XHJcbiAgICBwbGF5ZXI6IEdhbWVwbGF5LkNoYXJhY3RlclxyXG4gICAgc3RhdGU6IEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bVxyXG4gICAgLyoqXHU0RTBEXHU1NDBDXHU4MDRDXHU0RTFBXHU3Njg0XHU5MTREXHU5MDFGICovXHJcbiAgICBTcGVlZFN0ZENvZWZ0OiBudW1iZXJcclxuICAgIC8qKlx1NEVCQVx1NzI2OVx1NzlGQlx1NTJBOFx1NzJCNlx1NjAwMVx1N0NGQlx1NjU3MCAqL1xyXG4gICAgY29lZkluZXJ0aWE6IG51bWJlclxyXG4gICAgLyoqXHU0RUJBXHU3MjY5XHU1MkEwXHU5MDFGXHU1RUE2XHU3Q0ZCXHU2NTcwICovXHJcbiAgICBJbmVyUGFyYTogbnVtYmVyXHJcbiAgICBHdW5XZWlnaHQ6IG51bWJlclxyXG4gICAgQmVoSnVkZ2VUYWI6IE1hcDxzdHJpbmcsIGJvb2xlYW4+XHJcbiAgICBrZXlEb3duVGFiOiBBcnJheTxzdHJpbmc+XHJcblxyXG4gICAgLy8gXHU1MzU1XHU0RjhCXHU2QTIxXHU1RjBGXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBsYXllckJlaGF2aW9yO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckJlaGF2aW9yLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFBsYXllckJlaGF2aW9yLl9pbnN0YW5jZSA9IG5ldyBQbGF5ZXJCZWhhdmlvcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQbGF5ZXJCZWhhdmlvci5faW5zdGFuY2VcclxuICAgIH1cclxuICAgIHByaXZhdGUgQmluZEV2ZW50SGFuZGxlcigpIHtcclxuICAgICAgICBFdmVudHMuYWRkU2VydmVyTGlzdGVuZXIoRXZlbnRDb25zdC5DbGllbnRFdmVudC5PbkVxdWlwV2VhcG9uRXZlbnQsIHRoaXMuT25FcXVpcFdlYXBvbkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgICAgIEV2ZW50cy5hZGRMb2NhbExpc3RlbmVyKEV2ZW50Q29uc3QuQ2xpZW50RXZlbnQuT25FcXVpcFdlYXBvbkV2ZW50LCB0aGlzLk9uRXF1aXBXZWFwb25FdmVudEhhbmRsZXIuYmluZCh0aGlzKSlcclxuICAgICAgICAvL0V2ZW50cy5hZGRTZXJ2ZXJMaXN0ZW5lcihFdmVudENvbnN0LkNsaWVudEV2ZW50LmNoLCB0aGlzLkNoYW5nZU9jY0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgSW5pdGlhbERhdGFSZWFkKCkge1xyXG4gICAgICAgIC8qKlx1NzNBOVx1NUJCNlx1ODg0Q1x1NEUzQVx1NTIyNFx1NjVBRFx1NTNDMlx1NjU3MCAqL1xyXG4gICAgICAgIHRoaXMuQmVoSnVkZ2VUYWIgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oW1xyXG4gICAgICAgICAgICBbXCJSdW5cIiwgZmFsc2VdLFxyXG4gICAgICAgICAgICBbXCJDcm91Y2hcIiwgZmFsc2VdLFxyXG4gICAgICAgICAgICBbXCJRdWlja2x5XCIsIGZhbHNlXSxcclxuICAgICAgICAgICAgW1wiQWltXCIsIGZhbHNlXSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIHRoaXMua2V5RG93blRhYiA9IFtdXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEluaXRQbGF5ZXJBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLm1heEp1bXBIZWlnaHQgPSAxXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1ODhDNVx1NTkwN1x1NjdBQVx1NjZGNFx1NjVCMFx1OERGM1x1OERDM1x1OTAxRlx1NUVBNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIE9uRXF1aXBXZWFwb25FdmVudEhhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckd1bk1nci5JbnN0YW5jZS5jdXJHdW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnBsYXllci5tYXhKdW1wSGVpZ2h0ID0gXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIENoYW5nZU9jY0V2ZW50SGFuZGxlcihvY2NJZDogbnVtYmVyKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHU3M0E5XHU1QkI2XHU4ODRDXHU0RTNBXHU1MjI0XHU2NUFEICovXHJcbiAgICBwcml2YXRlIFBsYXllckJlaGF2aW9yQ2hhbmdlZChfYmVoYXZpb3I6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLkJlaEp1ZGdlVGFiLmdldChfYmVoYXZpb3IpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQmVoSnVkZ2VUYWIuc2V0KF9iZWhhdmlvciwgZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5CZWhKdWRnZVRhYi5zZXQoX2JlaGF2aW9yLCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd25UYWIucHVzaChrZXkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICh0aGlzLmtleURvd25UYWIubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmtleURvd25UYWJbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1J1bic6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUnVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5rZXlEb3duVGFiLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5RG93blRhYi5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ3JvdWNoJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQ3JvdWNoUnVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdRdWlja2x5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUXVpY2tseVJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQWltJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQWltUnVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5RG93blRhYi5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLmtleURvd25UYWIuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1F1aWNrbHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5RdWlja2x5Q3JvdWNoUnVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdBaW0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllck1vZGVDaGFuZ2VkKEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5BaW1Dcm91Y2hSdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtleURvd25UYWIgPSBbXVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBQbGF5ZXJNb2RlQ2hhbmdlZChtb2RlTmFtZTogR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG1vZGVOYW1lXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBEaWZmRGlyZU1vdmVtZW50KGR0OiBudW1iZXIpIHtcclxuICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NjQ0N1x1Njc0Nlx1NzY4NFx1NEY0RFx1NzlGQlx1NTc1MFx1NjgwN1x1NTI0RFx1NEUwMFx1NUUyN1x1NEUzQWRpcmVjdGlvbkZhY3RvcixcdTU0MEVcdTRFMDBcdTVFMjdcdTRFM0FcdTUzOUZcdTcwQjlcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLkRpZmZEaXJlTW92ZW1lbnQoZHQpXHJcbiAgICAgICAgdGhpcy5DaGFyYWN0ZXJTdGFydEluZXJ0aWEoKVxyXG4gICAgICAgIC8vXHU2NkY0XHU2NUIwXHU5MDFGXHU1RUE2XHJcbiAgICAgICAgbGV0IHNwZDogbnVtYmVyXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlJ1bjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQWltQ3JvdWNoUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5BaW1SdW46XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkNyb3VjaFJ1bjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUXVpY2tseUNyb3VjaFJ1bjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUXVpY2tseVJ1bjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5tYXhXYWxrU3BlZWQgPSBzcGQgKiB0aGlzLlNwZWVkU3RkQ29lZnQgKiB0aGlzLmNvZWZJbmVydGlhICogdGhpcy5HdW5XZWlnaHQgKiAxXHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBDaGFyYWN0ZXJTdGFydEluZXJ0aWEoKSB7XHJcbiAgICAgICAgaWYoUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1bil7XHJcbiAgICAgICAgICAgIHRoaXMuR3VuV2VpZ2h0ID0gMSAvIFBsYXllckd1bk1nci5JbnN0YW5jZS5jdXJHdW4uX2NvbmZpZ0RhdGEud2VpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBQbGF5ZXJKdW1wKCkge1xyXG4gICAgICAgIC8vXHU3M0E5XHU1QkI2XHU1RjUzXHU1MjREXHU0RTBEXHU1NzI4XHU4REYzXHU4REMzXHU3MkI2XHU2MDAxXHU1RTc2XHU0RTE0XHU2Q0ExXHU2NzA5XHU2QjdCXHU0RUExXHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzSnVtcGluZyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5pc0Nyb3VjaGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY3JvdWNoKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJCZWhhdmlvckNoYW5nZWQoXCJDcm91Y2hcIilcclxuICAgICAgICAgICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuQ3JvdWNoKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuICYmIFBsYXllckd1bk1nci5JbnN0YW5jZS5jdXJHdW4uX2lzWm9vbUluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1bi5NZWNoYW5pY2FsQWltU3RvcCgpICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmp1bXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUGxheWVyQ3JvdWNoKCkge1xyXG4gICAgICAgIHRoaXMuUGxheWVyQmVoYXZpb3JDaGFuZ2VkKFwiQ3JvdWNoXCIpXHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzQ3JvdWNoaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY3JvdWNoKHRydWUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNyb3VjaChmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5Dcm91Y2goKVxyXG4gICAgfVxyXG4gICAgQ3JvdWNoUmVzZXQoKXtcclxuICAgICAgICBpZih0aGlzLnBsYXllci5pc0Nyb3VjaGluZyl7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgSW5pdHNldE9yUmVzZXQoKXtcclxuICAgICAgICB0aGlzLkNyb3VjaFJlc2V0KClcclxuXHJcbiAgICAgICAgdGhpcy5Jbml0aWFsRGF0YVJlYWQoKVxyXG4gICAgICAgIHRoaXMuSW5pdFBsYXllckF0dHJpYnV0ZXMoKVxyXG4gICAgICAgIHRoaXMuUGxheWVyQmVoYXZpb3JDaGFuZ2VkKFwiUnVuXCIpXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxufSIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCI7XHJcbmltcG9ydCB7IFR3ZWVuVXRpbCB9IGZyb20gXCIuLi9Ub29sL1R3ZWVuVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYUNvbnRyb2xsZXJ7XHJcbiAgICBtX2NhbWVyYTogQ2FtZXJhU3lzdGVtXHJcbiAgICBndW4gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBvZmZzZXQgOiBWZWN0b3JcclxuICAgIG1fY3VycmVudEhlaWdodCA6IG51bWJlclxyXG4gICAgbV9zdXBwb3NlZEhlaWdodCA6IG51bWJlclxyXG4gICAgZGVsdGFPZmZzZXQgOiBWZWN0b3JcclxuICAgIGZpZWxkT2ZWaWV3IDogbnVtYmVyXHJcbiAgICBkZWx0YVRoZXRhIDogbnVtYmVyXHJcbiAgICBnYW1tYSA6IG51bWJlclxyXG4gICAgZGlzdGFuY2UgOiBudW1iZXJcclxuICAgIGRlbHRhUGh5IDogbnVtYmVyXHJcbiAgICBzaGFrZVRpbWUgOiBudW1iZXJcclxuICAgIHNoYWtlU3RyZW50aCA6IG51bWJlclxyXG5cclxuICAgIGNyb3VjaENvbnRyb2xsZXIgOiBUd2VlblV0aWxcclxuICAgIFNoYWtlQ29udHJvbGxlciA6IFR3ZWVuVXRpbFxyXG4gICAgLy8gXHU1MzU1XHU0RjhCXHU2QTIxXHU1RjBGXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENhbWVyYUNvbnRyb2xsZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoQ2FtZXJhQ29udHJvbGxlci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBDYW1lcmFDb250cm9sbGVyLl9pbnN0YW5jZSA9IG5ldyBDYW1lcmFDb250cm9sbGVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENhbWVyYUNvbnRyb2xsZXIuX2luc3RhbmNlXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyb3VjaENvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMC40XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MSA6IG51bWJlciwgdDIgOiBudW1iZXIsIHQzIDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRIZWlnaHQgPSBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhcHN1bGVIYWxmSGVpZ2h0ICogMlxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbiA9IHRoaXMubV9jdXJyZW50SGVpZ2h0ICsgMTAgKiB0MyAqICh0aGlzLm1fc3VwcG9zZWRIZWlnaHQgLSB0aGlzLm1fY3VycmVudEhlaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50SGVpZ2h0ID0gZmluXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50SGVpZ2h0ID0gdGhpcy5tX3N1cHBvc2VkSGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5TaGFrZUNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaGFrZVRpbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxIDogbnVtYmVyLCB0MiA6IG51bWJlciwgdDMgOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFPZmZzZXQgPSBuZXcgVmVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIFdlYXBvblRvb2wuU2hha2UodGhpcy5zaGFrZVN0cmVudGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIFdlYXBvblRvb2wuU2hha2UodGhpcy5zaGFrZVN0cmVudGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIFdlYXBvblRvb2wuU2hha2UodGhpcy5zaGFrZVN0cmVudGgpXHJcbiAgICAgICAgICAgICAgICApLm11bHRpcGx5KHQxIC8gdDIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFPZmZzZXQgPSBuZXcgVmVjdG9yKDAsIDAsIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoZHQ6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIHRoaXMuY3JvdWNoQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmNyb3VjaENvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuU2hha2VDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuY3JvdWNoQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgaWYodGhpcy5kZWx0YVBoeSAhPSAwKXtcclxuICAgICAgICAgICAgLy9HYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmxvb2tBdFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIENyb3VjaCgpe1xyXG4gICAgICAgIHRoaXMuY3JvdWNoQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuY3JvdWNoQ29udHJvbGxlcilcclxuICAgICAgICBpZih0aGlzLmd1biAmJiB0aGlzLmd1bi5faXNkcmF3KXtcclxuICAgICAgICAgICAgdGhpcy5ndW4uX2NhbWVyYUNvbnRyb2wuQ3JvdWNoKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBTZXRPZmZzZXQoKXtcclxuICAgICAgICB0aGlzLm1fY2FtZXJhLmNhbWVyYVN5c3RlbVJlbGF0aXZlVHJhbnNmb3JtLmxvY2F0aW9uID0gdGhpcy5vZmZzZXQuYWRkKFZlY3Rvci51cC5tdWx0aXBseSh0aGlzLm1fY3VycmVudEhlaWdodCkpLmFkZCh0aGlzLmRlbHRhT2Zmc2V0KVxyXG4gICAgfVxyXG4gICAgQ2FtZXJhU2hha2Uoc3RyZW5ndGg6bnVtYmVyLCB0aW1lOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5zaGFrZVN0cmVudGggPSBzdHJlbmd0aFxyXG4gICAgICAgIHRoaXMuc2hha2VUaW1lID0gdGltZVxyXG4gICAgICAgIHRoaXMuU2hha2VDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5TaGFrZUNvbnRyb2xsZXIpXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uQ2FtZXJhQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQ2FtZXJhQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvbk1hZ2F6aW5lQ2xzIH0gZnJvbSBcIi4vV2VhcG9uTWFnYXppbmVDbHNcIjtcclxuaW1wb3J0IHsgV2VhcG9uUmVjb2lsQ2xzIH0gZnJvbSBcIi4vV2VhcG9uUmVjb2lsQ2xzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFdlYXBvblRvb2x7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gSW5pdFdlYXBvbkNvbmZpZyhfd2VhcG9uOldlYXBvbkJhc2VDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25NYWdhemluZUNvbmZpZyhfbWFnYXppbmU6V2VhcG9uTWFnYXppbmVDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25SZWNvaWxDb25maWcoX3JlY29pbDpXZWFwb25SZWNvaWxDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25DYW1lcmFDb25maWcoX2NhbWVyYTpXZWFwb25DYW1lcmFDbHMpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25BY2Nlc3NvcnlDb25maWcoX2FjY2Vzc29yeTpXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBTaGFrZShfc3RyZW5ndGg6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gX3N0cmVuZ3RoICogKE1hdGgucmFuZG9tKCkgLSAwLjUpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NUMwNlx1NEUwMFx1NEUyQVx1NTQxMVx1OTFDRlx1RkYwQ1x1NjMwOVx1NzE2N1x1N0VEOVx1NUI5QVx1NzY4NFx1NjVDQlx1OEY2Q1x1OEY3NFx1RkYwQ1x1NjVDQlx1OEY2Q1x1NjMwN1x1NUI5QVx1NUYyN1x1NUVBNlx1NEU0Qlx1NTQwRVx1NUY5N1x1NTIzMFx1NEUwMFx1NEUyQVx1NjVCMFx1NzY4NFx1NTQxMVx1OTFDRlxyXG4gICAgICogQHBhcmFtIHNvdXJjZSBcdTZFOTBcdTU0MTFcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBheGlzIFx1NjVDQlx1OEY2Q1x1OEY3NFxyXG4gICAgICogQHBhcmFtIGFuZ2xlIFx1NjVDQlx1OEY2Q1x1ODlEMlx1NUVBNlx1NTAzQ1xyXG4gICAgICogQHJldHVybnMgXHU3RUQzXHU2NzlDXHU1NDExXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBSb3RhdGVWZWN0b3Ioc291cmNlOlZlY3RvciwgYXhpcyA6IFZlY3RvciwgYW5nbGUgOiBudW1iZXIpOlZlY3RvcntcclxuICAgICAgICBsZXQgcm8gPSBzb3VyY2UudG9Sb3RhdGlvbigpXHJcbiAgICAgICAgbGV0IHF1ID0gcm8udG9RdWF0ZXJuaW9uKClcclxuICAgICAgICBsZXQgb3V0ZXIgOiBRdWF0ZXJuaW9uXHJcbiAgICAgICAgYW5nbGUgPSBhbmdsZSBcclxuICAgICAgICBRdWF0ZXJuaW9uLmZyb21BeGlzQW5nbGUoYXhpcywgYW5nbGUsIG91dGVyKVxyXG4gICAgICAgIGxldCByZXMgOiBWZWN0b3JcclxuICAgICAgICBRdWF0ZXJuaW9uLm11bHRpcGx5VmVjdG9yKHNvdXJjZSwgb3V0ZXIsIHJlcylcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1OEY5M1x1NTFGQVx1NEUwOVx1NTAwRFx1NjgwN1x1NTFDNlx1NURFRVx1NEUzQTEgXHU3Njg0XHU1MjA2XHU1RTAzXHU1NzI4XHVGRjA4LTFcdUZGMEMgMVx1RkYwOVx1NEU0Qlx1OTVGNFx1NzY4NFx1NkI2M1x1NjAwMVx1NTIwNlx1NUUwM1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2F1c3NSYW5kb20oKSA6IG51bWJlcntcclxuICAgICAgICBsZXQgdSA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICBsZXQgdiA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICBsZXQgeiA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHUpKSAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogdilcclxuICAgICAgICB6ID0gKCB6ICsgMykgLyA2XHJcbiAgICAgICAgeiA9IHogKiAyIC0gMVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh6KSA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEdhdXNzUmFuZG9tKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHpcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QTk3XHU1MUZEXHU2NTcwXHVGRjBDXHU1NzI4XHU1QzBGXHU0RThFQVx1NjVGNlx1NEZERFx1NjMwMVx1NTM5Rlx1NTAzQ1x1RkYwQ1x1NTcyOFx1NTkyN1x1NEU4RUFcdTY1RjZcdTkwMTBcdTZFMTBcdThEOEJcdThGRDFcdTRFOEUxXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBc3ltcHRvdGUoeCA6IG51bWJlciwgQSA6IG51bWJlcikgOiBudW1iZXJ7XHJcbiAgICAgICAgQSA9IEEgfHwgMC40XHJcbiAgICAgICAgaWYoQSA8PSAwIHx8IEEgPj0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeCA8IDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd4IHNob3VsZCBiZSBwb3NpdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHggPD0gQSl7XHJcbiAgICAgICAgICAgIHJldHVybiB4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAxICsgKDMgKiBBICogQSAtIDIgKiBBKSAvIHggKyAoQSAqIEEgLSAyICogQSAqIEEgKiBBKSAvIHggLyB4XHJcbiAgICB9XHJcbiAgICAvKipcdTUzQ0NcdThGQjlcdTUzRUZcdTc1MjhcdTc2ODRcdTdBOTdcdTUxRkRcdTY1NzAoXHU2NjZFXHU5MDFBXHU3QTk3XHU1MUZEXHU2NTcwXHU3Njg0XHU1OTQ3XHU1RUY2XHU2MkQzKSAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFzeW10b3RlQmkoeCA6IG51bWJlciwgQSA6IG51bWJlcikgOiBudW1iZXJ7XHJcbiAgICAgICAgQSA9IEEgfHwgMC40XHJcbiAgICAgICAgaWYoQSA8PSAwIHx8IEEgPj0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeCA+PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIEFzeW1wdG90ZSh4LCBBKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLUFzeW1wdG90ZSh4LCBBKVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIFJhbmRvbVJvdGF0ZShkaXJlY3Rpb246IFZlY3RvciwgbWF4U3ByZWFkQW5nbGU6IG51bWJlcik6VmVjdG9yIHtcclxuICAgICAgICAvLyBcdTc1MUZcdTYyMTBcdTk2OEZcdTY3M0FcdTYyNjlcdTY1NjNcdTg5RDJcclxuICAgICAgICBjb25zdCBzcHJlYWRBbmdsZSA9IEdhdXNzUmFuZG9tKCkgKiBtYXhTcHJlYWRBbmdsZTtcclxuXHJcbiAgICAgICAgLy8gXHU3NTFGXHU2MjEwXHU5NjhGXHU2NzNBXHU2NUNCXHU4RjZDXHU4OUQyXHU1RUE2XHJcbiAgICAgICAgY29uc3QgcmFuZG9tUm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XHJcblxyXG4gICAgICAgIC8vIFx1OEJBMVx1N0I5N1x1OTY4Rlx1NjczQVx1NzBCOVx1NzY4NFx1NTc1MFx1NjgwN1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnNpbihzcHJlYWRBbmdsZSkgKiBNYXRoLmNvcyhyYW5kb21Sb3RhdGlvbik7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguY29zKHNwcmVhZEFuZ2xlKTtcclxuICAgICAgICBjb25zdCB6ID0gTWF0aC5zaW4oc3ByZWFkQW5nbGUpICogTWF0aC5zaW4ocmFuZG9tUm90YXRpb24pO1xyXG5cclxuICAgICAgICAvLyBcdTVDMDZcdTk2OEZcdTY3M0FcdTcwQjlcdTY1Q0JcdThGNkNcdTUyMzBcdTYzMDdcdTVCOUFcdTY1QjlcdTU0MTFcclxuICAgICAgICBjb25zdCBkaXJaID0gZGlyZWN0aW9uLno7XHJcbiAgICAgICAgY29uc3Qgcm90YXRlTWF0cml4ID0gW1xyXG4gICAgICAgICAgICBbTWF0aC5jb3MoZGlyWiksIC1NYXRoLnNpbihkaXJaKSwgMF0sXHJcbiAgICAgICAgICAgIFtNYXRoLnNpbihkaXJaKSwgTWF0aC5jb3MoZGlyWiksIDBdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMV1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCByb3RhdGVkWCA9IHJvdGF0ZU1hdHJpeFswXVswXSAqIHggKyByb3RhdGVNYXRyaXhbMF1bMV0gKiB5ICsgcm90YXRlTWF0cml4WzBdWzJdICogejtcclxuICAgICAgICBjb25zdCByb3RhdGVkWSA9IHJvdGF0ZU1hdHJpeFsxXVswXSAqIHggKyByb3RhdGVNYXRyaXhbMV1bMV0gKiB5ICsgcm90YXRlTWF0cml4WzFdWzJdICogejtcclxuICAgICAgICBjb25zdCByb3RhdGVkWiA9IHJvdGF0ZU1hdHJpeFsyXVswXSAqIHggKyByb3RhdGVNYXRyaXhbMl1bMV0gKiB5ICsgcm90YXRlTWF0cml4WzJdWzJdICogejtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3Iocm90YXRlZFgsIHJvdGF0ZWRZLCByb3RhdGVkWik7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQWNjZWxlcmF0ZVNjYWxhcih4IDogbnVtYmVyLCBfbGluZWFyUmFuZ2UgOiBudW1iZXIsIF9tYXhTY2FsZSA6IG51bWJlcikgOiBudW1iZXJ7XHJcbiAgICAgICAgaWYgKF9tYXhTY2FsZSA8PSAxIHx8IF9saW5lYXJSYW5nZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NjcwMFx1NTkyN1x1NkJENFx1NEY4Qlx1NUZDNVx1OTg3Qlx1NTkyN1x1NEU4RTEsIFx1N0VCRlx1NjAyN1x1ODMwM1x1NTZGNFx1NUZDNVx1OTg3Qlx1NTkyN1x1NEU4RTAnKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh4IDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdcdTRGN0ZcdTc1MjhcdTUzQ0NcdThGQjlcdTc2ODRcdTUxRkRcdTY1NzBcdTRFRTVcdTY1MkZcdTYzMDFcdThEMUZcdTUwM0MnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA8PSBfbGluZWFyUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICB9ZWxzZSBpZih4Pj1fbWF4U2NhbGUgKiBfbGluZWFyUmFuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gX21heFNjYWxlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC8gX2xpbmVhclJhbmdlICogeFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBCaUFjY2VsZXJhdGVTY2FsYXIoeCA6IG51bWJlciwgX2xpbmVhclJhbmdlIDogbnVtYmVyLCBfbWF4U2NhbGUgOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBzaWduID0geCA+PSAwID8gMSA6IC0xXHJcbiAgICAgICAgcmV0dXJuIEFjY2VsZXJhdGVTY2FsYXIoc2lnbiAqIHgsIF9saW5lYXJSYW5nZSwgX21heFNjYWxlKVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRlQ3VydmUoX3N0YXJ0UG9pbnQgOiBWZWN0b3IsIF9zdGFydFZlYyA6IFZlY3RvciwgX2xlbmd0aCA6IG51bWJlciwgX2R0IDogbnVtYmVyLCBfZ3Jhdml0eSA6IG51bWJlcil7XHJcbiAgICAgICAgX2dyYXZpdHkgPSBfZ3Jhdml0eSA/IF9ncmF2aXR5IDogMVxyXG4gICAgICAgIGxldCBjdXJ2ZTogVmVjdG9yW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IF9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc1ggPSBuZXcgVmVjdG9yMihfc3RhcnRQb2ludC54LCBfc3RhcnRQb2ludC56KS5hZGQobmV3IFZlY3RvcjIoX3N0YXJ0VmVjLngsIF9zdGFydFZlYy56KSkubXVsdGlwbHkoX2R0ICogaW5kZXgpXHJcbiAgICAgICAgICAgIGxldCBQb3NZID0gX3N0YXJ0VmVjLnkgKiBfZHQgKiBpbmRleCAtIDAuNSAqIDkuOCAqIF9ncmF2aXR5ICogKF9kdCAqIGluZGV4KSAqIChfZHQgKiBpbmRleCkgKyBfc3RhcnRQb2ludC55XHJcbiAgICAgICAgICAgIGN1cnZlLnB1c2gobmV3IFZlY3Rvcihwb3NYLngsIFBvc1ksIHBvc1gueSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJ2ZVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldEF0dGVudWF0aW9uQnlHdW5JZChfdHlwZTpudW1iZXIsIF9ndW46V2VhcG9uQmFzZUNscywgX2RpczpudW1iZXIpOm51bWJlcntcclxuICAgICAgICBpZiAoX3R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NUI1MFx1NUYzOVx1OThERVx1ODg0Q1x1OERERFx1NzlCQlx1NEYyNFx1NUJCM1x1ODg3MFx1NTFDRlxyXG4gICAgICAgICAgICBsZXQgZGlzQXR0ZW51YXRpb24gPSBfZ3VuLl9jb25maWdEYXRhLmRhbWFnZUF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBkaXNBdHRlbnVhdGlvbi5sZW5ndGhcclxuICAgICAgICAgICAgaWYobGVuID09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVuOyBpID49IDE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZGlzQXR0ZW51YXRpb25baV0uRGlzdGFuY2UgPD0gX2Rpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc0F0dGVudWF0aW9uW2ldLkF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9IGVsc2UgaWYoX3R5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NzIwNlx1NzBCOFx1ODMwM1x1NTZGNFx1NEYyNFx1NUJCM1x1ODg3MFx1NTFDRlxyXG4gICAgICAgICAgICBsZXQgZXhwbG9zaW9uQXR0ZW51YXRpb24gPSBfZ3VuLl9jb25maWdEYXRhLmV4cGxvc2lvbkRhbWFnZUF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBleHBsb3Npb25BdHRlbnVhdGlvbi5sZW5ndGhcclxuICAgICAgICAgICAgaWYobGVuID09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVuOyBpID49IDE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZXhwbG9zaW9uQXR0ZW51YXRpb25baV0uRGlzdGFuY2UgPD0gX2Rpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4cGxvc2lvbkF0dGVudWF0aW9uW2ldLkF0dGVudWF0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIF9zZWxmIFx1ODFFQVx1NURGMVx1NzY4NFx1ODlEMlx1ODI3MiAgXHJcbiAgICAgKiBAcGFyYW0gX2lzSGl0U2VsZiBcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTU0N0RcdTRFMkRcdTgxRUFcdTVERjFcclxuICAgICAqIEBwYXJhbSBfaXNIaXRGcmllbmQgXHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU1NDdEXHU0RTJEXHU5NjFGXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gX2RpcyBcdTUzNEFcdTVGODRcclxuICAgICAqIEBwYXJhbSBfYW5nbGUgXHU4OUQyXHU1RUE2XHJcbiAgICAgKiBAcGFyYW0gX3BvcyBcdTY4QzBcdTZENEJcdTc2ODRcdTUzOUZcdTcwQjlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0RW5lbXlCeVJhbmdlKF9zZWxmOkNoYXJhY3RlciwgXHJcbiAgICAgICAgX2lzSGl0U2VsZjpib29sZWFuLCBcclxuICAgICAgICBfaXNIaXRGcmllbmQ6Ym9vbGVhbiwgXHJcbiAgICAgICAgX2RpczpudW1iZXIsIFxyXG4gICAgICAgIF9hbmdsZTpudW1iZXIsIFxyXG4gICAgICAgIF9wb3M6VmVjdG9yKTpDaGFyYWN0ZXJbXXtcclxuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgOiBDaGFyYWN0ZXJbXVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnNcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRXZWFwb25BbW1vSWQoX3dlYXBvbklkIDogbnVtYmVyKSA6IG51bWJlcntcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgY2xhc3MgVHdlZW5VdGlse1xyXG5cclxuICAgIFN0YXJ0RnVuY3Rpb24gOiAodDpUd2VlblV0aWwpPT52b2lkXHJcbiAgICBVcGRhdGVGdW5jdGlvbiA6ICh0OlR3ZWVuVXRpbCwgZHQgOiBudW1iZXIpPT52b2lkXHJcbiAgICBTdG9wRnVuY3Rpb24gOiAodDpUd2VlblV0aWwpPT52b2lkXHJcblxyXG4gICAgdG90YWxUaW1lOm51bWJlclxyXG4gICAgdGltZTpudW1iZXJcclxuXHJcbiAgICBjdXN0b21EYXRhIDogTWFwPHN0cmluZywgYW55PlxyXG4gICAgaXNQbGF5aW5nIDogYm9vbGVhblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdldFRvdGFsVGltZTooKSA9PiBudW1iZXIsIFxyXG4gICAgICAgIHVwZGF0ZSA6ICh0aW1lMTpudW1iZXIsdGltZTI6bnVtYmVyLHRpbWUzOm51bWJlcik9PnZvaWQsXHJcbiAgICAgICAgY2FsbGJhY2s6KCk9PnZvaWQsXHJcbiAgICAgICAgc3RhcnQ/OigpPT52b2lkKXtcclxuICAgICAgICAgICAgc3RhcnQgPSBzdGFydCB8fCBmdW5jdGlvbigpIHt9XHJcbiAgICAgICAgICAgIHRoaXMuU3RhcnRGdW5jdGlvbiA9ICh0OlR3ZWVuVXRpbCk9PntcclxuICAgICAgICAgICAgICAgIHN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHQudG90YWxUaW1lID0gZ2V0VG90YWxUaW1lKClcclxuICAgICAgICAgICAgICAgIHQudGltZSA9IDBcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlRnVuY3Rpb24gPSAodDpUd2VlblV0aWwsIGR0IDogbnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC50aW1lICs9IGR0XHJcbiAgICAgICAgICAgICAgICBpZih0LnRpbWUgPj0gdC50b3RhbFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHQuU3RvcEZ1bmN0aW9uKHQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUodC50aW1lLHQudG90YWxUaW1lLHQudGltZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlN0b3BGdW5jdGlvbiA9ICh0OlR3ZWVuVXRpbCk9PntcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmlzUGxheWluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59ICIsICJcdUZFRkZpbXBvcnQgeyBFdmVudENvbnN0IH0gZnJvbSBcIi4uL0dhbWVDb25zdC9FdmVudENvbnN0XCJcclxuaW1wb3J0IFBsYXllckF0dHIgZnJvbSBcIi4vLi4vUGxheWVyQXR0clwiXHJcbi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTY3MERcdTUyQTFcdTdBRUZcdTRFM0JcdTgxMUFcdTY3MkNcclxuICovXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcnZlckJhc2UgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcbiAgICBwcml2YXRlIHRvdGFsUGxheWVyQXR0cnM6IE1hcDxzdHJpbmcsIFBsYXllckF0dHI+ID0gbmV3IE1hcFxyXG4gICAgc3RhdGljIG1JbnN0YW5jZTogU2VydmVyQmFzZVxyXG4gICAgY29uc3RydWN0b3IoZGF0YSl7XHJcbiAgICAgICAgc3VwZXIoZGF0YSlcclxuICAgICAgICBTZXJ2ZXJCYXNlLm1JbnN0YW5jZSA9IHRoaXNcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50cy5hZGRQbGF5ZXJKb2luZWRMaXN0ZW5lcih0aGlzLk9uUGxheWVySm9pbmVkLmJpbmQodGhpcykpXHJcbiAgICAgICAgRXZlbnRzLmFkZFBsYXllckxlZnRMaXN0ZW5lcih0aGlzLk9uUGxheWVyTGVmdC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgT25QbGF5ZXJKb2luZWQocGxheWVyOkdhbWVwbGF5LlBsYXllcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NzNBOVx1NUJCNlx1NTJBMFx1NTE2NScgKyBwbGF5ZXIuY2hhcmFjdGVyLmd1aWQpXHJcbiAgICAgICAgbGV0IG9iaiA9IGF3YWl0IENvcmUuU2NyaXB0LnNwYXduU2NyaXB0PFBsYXllckF0dHI+KFBsYXllckF0dHIsIHRydWUpXHJcbiAgICAgICAgb2JqLkluaXREYXRhKHBsYXllci5jaGFyYWN0ZXIpXHJcbiAgICAgICAgdGhpcy50b3RhbFBsYXllckF0dHJzLnNldChwbGF5ZXIuY2hhcmFjdGVyLmd1aWQsIG9iailcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU4MTFBXHU2NzJDXHU0RTNBJyArIG9iai5ndWlkKVxyXG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaFRvQWxsQ2xpZW50KEV2ZW50Q29uc3QuQ2xpZW50RXZlbnQuUGxheWVyQWRkU3VjY2Vzc2VkRXZlbnQsIHBsYXllci5jaGFyYWN0ZXIuZ3VpZCwgIG9iai5ndWlkKSAgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIE9uUGxheWVyTGVmdChwbGF5ZXI6R2FtZXBsYXkuUGxheWVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU3M0E5XHU1QkI2XHU3OUJCXHU1RjAwJyArIHBsYXllci5jaGFyYWN0ZXIuZ3VpZClcclxuICAgICAgICBsZXQgb2JqID0gdGhpcy50b3RhbFBsYXllckF0dHJzLmdldChwbGF5ZXIuY2hhcmFjdGVyLmd1aWQpXHJcbiAgICAgICAgb2JqLmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMudG90YWxQbGF5ZXJBdHRycy5kZWxldGUocGxheWVyLmNoYXJhY3Rlci5ndWlkKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRQbGF5ZXJBdHRyKGd1aWQ6c3RyaW5nfEdhbWVwbGF5LlBsYXllcik6UGxheWVyQXR0cntcclxuICAgICAgICBpZiAoZ3VpZCBpbnN0YW5jZW9mIEdhbWVwbGF5LlBsYXllcikge1xyXG4gICAgICAgICAgICBndWlkID0gZ3VpZC5jaGFyYWN0ZXIuZ3VpZFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFBsYXllckF0dHJzLmdldChndWlkKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFBsYXllckF0dHJzLmdldChndWlkKVxyXG4gICAgICAgIH0gICAgICBcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2VhcG9uQWNjZXNzb3J5QmFzZUNsc3tcclxuICAgIHByaXZhdGUgd2VhcG9uQWNjZXNzb3J5OiBHYW1lT2JqZWN0XHJcbiAgICBwdWJsaWMgaWQ6bnVtYmVyXHJcbiAgICBwcml2YXRlIHV1aWQ6IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSBhdHRhY2hlZFdlYXBvbiA6IFdlYXBvbkJhc2VDbHNcclxuICAgIHB1YmxpYyBjb25maWdEYXRhOiBHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5Q29uZmlnRGF0YVxyXG4gICAgY29uc3RydWN0b3IoX29iajogR2FtZU9iamVjdCl7XHJcbiAgICAgICAgdGhpcy53ZWFwb25BY2Nlc3NvcnkgPSBfb2JqXHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZFdlYXBvbiA9IG51bGxcclxuICAgICAgICBXZWFwb25Ub29sLkluaXRXZWFwb25BY2Nlc3NvcnlDb25maWcodGhpcylcclxuICAgICAgICB0aGlzLlBpY2tTb3VuZCgpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVXBkYXRlKGR0Om51bWJlcil7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIEVxdWlwVG9XZWFwb24od2VhcG9uOiBXZWFwb25CYXNlQ2xzKXtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkV2VhcG9uID0gd2VhcG9uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVW5FcXVpcEZyb21XZWFwb24oKXtcclxuICAgICAgICB0aGlzLmF0dGFjaGVkV2VhcG9uID0gbnVsbFxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlc3RydWN0b3IoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgUGlja1NvdW5kKCl7XHJcblxyXG4gICAgfVxyXG59IiwgImV4cG9ydCBjbGFzcyBXZWFwb25BbW1vQmFzZUNsc3tcclxuICAgIHB1YmxpYyBjb3VudCA6bnVtYmVyXHJcbiAgICBwcml2YXRlIGlkIDpudW1iZXJcclxuICAgIHByaXZhdGUgb3JkZXIgOm51bWJlclxyXG4gICAgcHJpdmF0ZSBwaWNrU291bmQgOnN0cmluZ1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXIgOiBDaGFyYWN0ZXJcclxuXHJcbiAgICBjb25zdHVyY3RvcihpZDpudW1iZXIsY291bnQ6bnVtYmVyLGNoYXJhY3RlciA6IENoYXJhY3Rlcil7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXJcclxuXHJcbiAgICAgICAgdGhpcy5QaWNrU291bmQoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUGxheWVyUGlja0FtbW8od2VhcG9uQW1tbyA6IEdhbWVPYmplY3QsIGNvdW50IDogbnVtYmVyKTp2b2lke1xyXG4gICAgICAgIGlmKHdlYXBvbkFtbW8pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudCArPSBjb3VudFxyXG4gICAgICAgIHRoaXMuUGlja1NvdW5kKClcclxuICAgIH0gICAgICBcclxuICAgIHByaXZhdGUgUGxheWVyRHJvcEFtbW8oY291bnQ6IG51bWJlcik6Ym9vbGVhbntcclxuICAgICAgICBsZXQgaXNEcm9wQWxsID0gZmFsc2VcclxuICAgICAgICBpZih0aGlzLmNvdW50IDw9IDApe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY291bnQgPj0gdGhpcy5jb3VudCl7XHJcbiAgICAgICAgICAgIGlzRHJvcEFsbCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudCAtPSBjb3VudFxyXG4gICAgICAgIGlmKGlzRHJvcEFsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0Ryb3BBbGxcclxuICAgIH1cclxuICAgIHB1YmxpYyBQbGF5ZXJDb25zdW1lQW1tbyhjb3VudCA6IG51bWJlcik6bnVtYmVye1xyXG4gICAgICAgIGlmKHRoaXMuY291bnQgPD0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvdW50ID4gdGhpcy5jb3VudCl7XHJcbiAgICAgICAgICAgIGNvdW50ID0gdGhpcy5jb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50IC09IGNvdW50XHJcbiAgICAgICAgcmV0dXJuIGNvdW50XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0Q291bnQoY291bnQgOiBudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFBpY2tTb3VuZCgpOnZvaWR7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25BbmltYXRpb25DbHN7XHJcbiAgICBndW4gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBpZCA6IG51bWJlclxyXG4gICAgcGxheWVyIDogQ2hhcmFjdGVyXHJcbiAgICByaWdodEFybVBvc2l0aW9uIDogVmVjdG9yXHJcbiAgICBsZWZ0QXJtUG9zaXRpb24gOiBWZWN0b3JcclxuICAgIGNvbmZpZyA6IEdhbWVDb25zdC5XZWFwb25BbmltYXRpb25Db25maWdEYXRhXHJcbiAgICBzaG91bGRlclJheU1pbkRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBub1Nob290aW5nU3RhdGUgOiBib29sZWFuXHJcbiAgICBsYXllciA6IG51bWJlclxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKGR0Om51bWJlcil7XHJcbiAgICAgICAgLy9cdTUyQTBcdTkwMUZcdThERDFcdTcyQjZcdTYwMDFcdTRFMEJcdTY1MzZcdTY3QUEsXHU1MTc2XHU0RUQ2XHU3MkI2XHU2MDAxXHU2QjYzXHU1RTM4XHU2MzAxXHU2N0FBXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJ1Y3Rvcigpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwgIlx1RkVGRmltcG9ydCBDbGllbnRCYXNlIGZyb20gXCIuLi9DbGllbnQvQ2xpZW50QmFzZVwiXHJcbmltcG9ydCB7IFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQW5pbWF0aW9uQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQW5pbWF0aW9uQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQ2FtZXJhQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQ2FtZXJhQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uR1VJQ2xzIH0gZnJvbSBcIi4vV2VhcG9uR1VJQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uTWFnYXppbmVDbHMgfSBmcm9tIFwiLi9XZWFwb25NYWdhemluZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvblJlY29pbENscyB9IGZyb20gXCIuL1dlYXBvblJlY29pbENsc1wiXHJcbmltcG9ydCB7IFdlYXBvblNvdW5kQ2xzIH0gZnJvbSBcIi4vV2VhcG9uU291bmRDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiXHJcbnR5cGUgRmlyZU1vZGVFbnVtID0gR2FtZUNvbnN0LkZpcmVNb2RlRW51bVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYXBvbkJhc2VDbHMge1xyXG5cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1OTg4NFx1NTIzNlx1NEY1MyovXHJcbiAgICBwdWJsaWMgcHJlZmFiOiBHYW1lT2JqZWN0XHJcbiAgICAvKipcclxuICAgICAqIFx1NjdBQVx1NjhCMFx1OTE0RFx1N0Y2RUlEXHJcbiAgICAgKi9cclxuICAgIGlkOiBudW1iZXJcclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1N0VEMVx1NUI5QVx1NzY4NFx1OTUxQVx1NzBCOSAqL1xyXG4gICAgcHVibGljIHJvb3Q6IEdhbWVPYmplY3RcclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NjI0MFx1NUM1RVx1NzY4NFx1NzNBOVx1NUJCNlx1ODlEMlx1ODI3MiAqL1xyXG4gICAgcHVibGljIGNoYXJhY3RlcjogQ2hhcmFjdGVyXHJcbiAgICAvKipcdTY3QUFcdTUzRTNcdTRGNERcdTdGNkVcdTcwQjkgKi9cclxuICAgIHByaXZhdGUgbXV6emxlT2JqOiBHYW1lT2JqZWN0XHJcbiAgICAvKipcdTY3QUFcdTdCQTFcdTY1QjlcdTU0MTEgKi9cclxuICAgIHByaXZhdGUgZGlyOiBWZWN0b3JcclxuICAgIC8qKlx1NjI5NVx1NUYzOVx1NTNFM1x1NUJGOVx1OEM2MSAqL1xyXG4gICAgcHJpdmF0ZSB0b3NzOiBHYW1lT2JqZWN0XHJcblxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU2NjJGXHU1NDI2XHU4OEFCXHU2MzAxXHU2NzA5ICovXHJcbiAgICBfaXNkcmF3OiBib29sZWFuID0gZmFsc2VcclxuICAgIF9pc1pvb21JbiA6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcmFwaWRseVJlbWFpbmluZ0J1bGxldHM6IG51bWJlciA9IDFcclxuICAgIHByaXZhdGUgX2N1clNob290TW9kZSA6IEZpcmVNb2RlRW51bSA9IEdhbWVDb25zdC5GaXJlTW9kZUVudW0uQXV0b1xyXG4gICAgcHJpdmF0ZSBfaGFzSnVzdEZpcmVkIDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9maXJlV2FpdCA6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNGaXJpbmdPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNBbGxvd2VkID0gdHJ1ZVxyXG4gICAgcHJpdmF0ZSBfd2FzQWxsb3dlZEFuZEZpcmluZyA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9yZWxvYWRXYWl0ID0gMFxyXG4gICAgcHJpdmF0ZSBfb25SZWxvYWQgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNJZ25vcmluZ1NlbGYgPSB0cnVlXHJcbiAgICBwcml2YXRlIF9oYXNGaXJlQ29uZGl0aW9uID0gdHJ1ZVxyXG4gICAgcHJpdmF0ZSBfZmlyZUNvbmRpdGlvblNpZGUgPSAxXHJcbiAgICBwcml2YXRlIF9pc0dvaW5nVG9QdW1wID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzUHVtcE5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcHVtcFdhaXQgPSAwXHJcbiAgICBwcml2YXRlIF9pc1B1bXBpbmcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNXYWl0aW5nUHVtcCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF96b29tSW5UcnlQdW1wID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzV2l0aERyYXdpbmcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcHVtcE1ha2VTaGVsbCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9haW1CZWZvcmVQdW1wID0gZmFsc2VcclxuICAgIHB1YmxpYyBfd2VhcG9uQWNjZXNzb3J5TGlzdCA6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHM+ID0gbmV3IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHM+KClcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbWFnYXppbmU6IFdlYXBvbk1hZ2F6aW5lQ2xzXHJcbiAgICAgX3JlY29pbCA6IFdlYXBvblJlY29pbENsc1xyXG4gICAgX2NhbWVyYUNvbnRyb2wgOiBXZWFwb25DYW1lcmFDbHNcclxuICAgICBfd2VhcG9uR1VJOldlYXBvbkdVSUNsc1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uQ29udHJvbGxlciA6IFdlYXBvbkFuaW1hdGlvbkNsc1xyXG4gICAgcHJpdmF0ZSBfd2VhcG9uU291bmQgOiBXZWFwb25Tb3VuZENsc1xyXG4gICAgcHVibGljIGVycm9yOiBudW1iZXJcclxuXHJcbiAgICBwdWJsaWMgX2NvbmZpZ0RhdGEgOiBHYW1lQ29uc3QuV2VhcG9uQ29uZmlnRGF0YVxyXG5cclxuICAgIHByaXZhdGUgX2F1dG9GaXJlQWltOmJvb2xlYW5cclxuICAgIGNvbnN0cnVjdG9yKF9jaGFyYWN0ZXI6Q2hhcmFjdGVyLCBfcm9vdCA6IEdhbWVPYmplY3QsIF93ZWFwb25PYmo6IEdhbWVPYmplY3Qpe1xyXG4gICAgICAgIHRoaXMuRWFybHlJbml0aWFsaXplKClcclxuICAgICAgICB0aGlzLnByZWZhYiA9IF93ZWFwb25PYmpcclxuICAgICAgICB0aGlzLnJvb3QgPSBfcm9vdFxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gX2NoYXJhY3RlclxyXG4gICAgICAgIHRoaXMuX21hZ2F6aW5lID0gbmV3IFdlYXBvbk1hZ2F6aW5lQ2xzKHRoaXMpXHJcbiAgICAgICAgdGhpcy5fcmVjb2lsID0gbmV3IFdlYXBvblJlY29pbENscygpXHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbCA9IG5ldyBXZWFwb25DYW1lcmFDbHModGhpcy5fcmVjb2lsKVxyXG4gICAgICAgIHRoaXMuX3dlYXBvbkdVSSA9IG5ldyBXZWFwb25HVUlDbHMoKVxyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkNvbnRyb2xsZXIgPSBuZXcgV2VhcG9uQW5pbWF0aW9uQ2xzKClcclxuICAgICAgICB0aGlzLl93ZWFwb25Tb3VuZCA9IG5ldyBXZWFwb25Tb3VuZENscygpXHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5MYXRlckluaXRpYWxpemUoKVxyXG4gICAgfVxyXG4gICAgLyoqXHU2NzkwXHU2Nzg0XHU1MUZEXHU2NTcwXHVGRjBDXHU5NzAwXHU4OTgxXHU2MjRCXHU1MkE4XHU4QzAzXHU3NTI4ICovXHJcbiAgICBwdWJsaWMgZGVzdHJ1Y3RvcigpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5FYXJseURlc3RydWN0b3IoKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLlNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgdGhpcy5fbWFnYXppbmUuUmVjb3JkaW5nQnVsbGV0c0xlZnQodHJ1ZSlcclxuICAgICAgICB0aGlzLnByZWZhYi5zZXRWaXNpYmlsaXR5KFR5cGUuUHJvcGVydHlTdGF0dXMuT24pXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuVW5FcXVpcEZyb21XZWFwb24oKSAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5jbGVhcigpXHJcbiAgICAgICAgLy9cdTY3OTBcdTY3ODRcdTY3QUFcdTRFMEFcdTc2ODRcdTgxRUFcdTY3MDlcdTdDN0JcclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLmRlc3RydWN0b3IoKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLmRlc3RydWN0b3IoKVxyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkNvbnRyb2xsZXIuZGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25Tb3VuZC5kZXN0cnVjdG9yKClcclxuICAgICAgICAvL1x1NkUwNVx1OTY2NFx1NjdBQVx1NjhCMFx1NjI0MFx1NjcwOVx1ODAwNVxyXG4gICAgICAgIC8vc2VsZi5ndW4uUGxheWVyLlZhbHVlID0gbmlsXHJcblxyXG5cclxuICAgIH1cclxuICAgIC8qKlx1NTcyOFx1NUI5RVx1NEY4Qlx1NTMxNlx1NjcwMFx1NUYwMFx1NTlDQlx1NjI2N1x1ODg0QyAqL1xyXG4gICAgcHJvdGVjdGVkIEVhcmx5SW5pdGlhbGl6ZSgpOnZvaWR7XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHU1QjlFXHU0RjhCXHU1MzE2XHU2NzAwXHU1NDBFXHU2MjY3XHU4ODRDICovXHJcbiAgICBwcm90ZWN0ZWQgTGF0ZXJJbml0aWFsaXplKCk6dm9pZCB7XHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIEVhcmx5RGVzdHJ1Y3RvcigpOnZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NjZGNFx1NjVCMFx1NTFGRFx1NjU3MCAqL1xyXG4gICAgcHVibGljIFVwZGF0ZShfZHQ6bnVtYmVyKXtcclxuICAgICAgICBpZiAodGhpcy5faXNXaXRoRHJhd2luZykge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzR29pbmdUb0ZpcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1ODFFQVx1NTJBOFx1ODhDNVx1NUYzOVx1NUYwMFx1NTQyRlx1NTQwRVx1RkYwQ1x1OEZEQlx1ODg0Q1x1NjhDMFx1NkQ0QiAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLmF1dG9SZWxvYWQpIHtcclxuICAgICAgICAgICAgLy9pZih0aGlzLl9tYWdhemluZS4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NEUwQVx1NEUwMFx1NUUyN1x1NUYwMFx1NzA2Qlx1NEU4Nlx1NUU3Nlx1NEUxNFx1OTcwMFx1ODk4MVx1NjJDOVx1NjdBQVx1NjgxMyxcdTVFNzZcdTRFMTRcdTVGNTNcdTUyNERcdTZDQTFcdTY3MDlcdTU3MjhcdTg4QzVcdTVCNTBcdTVGMzlcdTU0OENcdTZCNjNcdTU3MjhcdTYyQzlcdTY3QUFcdTY4MTNcdTc2ODRcdThGQzdcdTdBMEJcdTRFMkQgKi9cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnRGF0YS5wdW1wQWZ0ZXJGaXJlICYmIHRoaXMuX2hhc0p1c3RGaXJlZCAmJiAhdGhpcy5fb25SZWxvYWQgJiYgIXRoaXMuX2lzUHVtcGluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNab29tSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzV2FpdGluZ1B1bXAgPSB0cnVlXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QdW1wU3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl96b29tSW5UcnlQdW1wICYmIHRoaXMuX2lzV2FpdGluZ1B1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5fem9vbUluVHJ5UHVtcCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5QdW1wU3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTUxQzZcdTU5MDdcdTU3MjhcdTRFMEJcdTRFMDBcdTVFMjdcdThGREJcdTg4NENcdTYzNjJcdTVGMzlcdTY0Q0RcdTRGNUMgKi9cclxuICAgICAgICBpZih0aGlzLl9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gZmFsc2VcclxuICAgICAgICAgICAgLy90aGlzLl9yZWxvYWRXYWl0ID0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NTFDNlx1NTkwN1x1NTcyOFx1NEUwQlx1NEUwMFx1NUUyN1x1OEZEQlx1ODg0Q1x1NjJDOVx1NjdBQVx1NjgxM1x1NjRDRFx1NEY1QyAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0dvaW5nVG9QdW1wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHVtcE5leHRVcGRhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX3B1bXBNYWtlU2hlbGwgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1B1bXBpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX3B1bXBXYWl0ID0gMSAvIHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RTcGVlZFxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdThGREJcdTg4NENcdTVGMDBcdTU5Q0JcdTVDMDRcdTUxRkIvXHU1MDVDXHU2QjYyXHU1QzA0XHU1MUZCL1x1NUYwMFx1NTlDQlx1NjM2Mlx1NUI1MFx1NUYzOVx1NzY4NFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMSAqL1xyXG4gICAgICAgIGxldCBpc0FsbG93ZWRBbmRGaXJpbmcgPSB0aGlzLl9pc0dvaW5nVG9GaXJlICYmIHRoaXMuX2lzQWxsb3dlZFxyXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICBpZiAoaXNBbGxvd2VkQW5kRmlyaW5nICYmICF0aGlzLl93YXNBbGxvd2VkQW5kRmlyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5GaXJlU3RhcnRlZCwgdGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzQWxsb3dlZEFuZEZpcmluZyAmJiB0aGlzLl93YXNBbGxvd2VkQW5kRmlyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5GaXJlU3RvcHBlZCwgdGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNHb2luZ1RvUHVtcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5QdW1wU3RhcnRlZCwgdGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNHb2luZ1RvUmVsb2FkTWFnYXppbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2NvbmZpZ0RhdGEucmVsb2FkV2l0aE1hZ2F6aW5lcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuTWFnYXppbmVMb2FkU3RhcnRlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkJ1bGxldExvYWRTdGFydGVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzWm9vbUluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2FzQWxsb3dlZEFuZEZpcmluZyA9IGlzQWxsb3dlZEFuZEZpcmluZ1xyXG5cclxuICAgICAgICB0aGlzLl9maXJlV2FpdCAtPSBfZHRcclxuICAgICAgICB0aGlzLl9yZWxvYWRXYWl0IC09IF9kdFxyXG4gICAgICAgIHRoaXMuX3B1bXBXYWl0IC09IF9kdFxyXG4gICAgICAgIGlmICh0aGlzLl9wdW1wV2FpdCA8IDAuOCAvIHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RTcGVlZCAmJiB0aGlzLl9wdW1wV2FpdCA+IDAgJiYgdGhpcy5fYWltQmVmb3JlUHVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3B1bXBXYWl0IDwgMC42IC8gdGhpcy5fY29uZmlnRGF0YS5zaG9vdFNwZWVkICYmIHRoaXMuX3B1bXBXYWl0ID4gMCAmJiB0aGlzLl9pc1B1bXBpbmcgJiYgIXRoaXMuX3B1bXBNYWtlU2hlbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5NYWtlQnVsbGV0U2hlbGwoKVxyXG4gICAgICAgICAgICB0aGlzLl9wdW1wTWFrZVNoZWxsID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTY4QzBcdTY3RTVcdTVGNTNcdTUyNERcdTYzNjJcdTVGMzlcdTY0Q0RcdTRGNUNcdTY2MkZcdTU0MjZcdTdFRDNcdTY3NUYgKi9cclxuICAgICAgICBpZiAodGhpcy5faGFzSnVzdEZpcmVkICYmIHRoaXMuX2NvbmZpZ0RhdGEuY2FuSW50ZXJydXB0QnVsbGV0TG9hZCkge1xyXG4gICAgICAgICAgICAvKipcdTRFMEFcdTRFMDBcdTVFMjdcdTVGMDBcdTcwNkJcdTRFODZcdUZGMENcdTk3MDBcdTg5ODFcdTRFMkRcdTY1QURcdTYzNjJcdTVGMzlcdTY0Q0RcdTRGNUMgKi9cclxuICAgICAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCA9IDBcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gZmFsc2VcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlICYmIHRoaXMuX3JlbG9hZFdhaXQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnRGF0YS5yZWxvYWRXaXRoTWFnYXppbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5IHJlbG9hZGluZyB0aGUgZW50aXJlIG1hZ2F6aW5lXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hZ2F6aW5lLkxvYWRNYWdhemluZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUmVsb2FkRmluaXNoZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSByZWxvYWRpbmcgb25lIGJ1bGxldCBhdCBhIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYWdhemluZS5Mb2FkT25lQnVsbGV0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuQnVsbGV0TG9hZGVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbG9hZGVkIG9uZSBidWxsZXQsIGNoZWNrIGlmIHRoZSBtYWdhemluZSBpcyBub3QgZnVsbHkgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hZ2F6aW5lLlVwZGF0ZUxvYWRQZXJjZW50YWdlKCkgIT09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYWdhemluZSBpcyBub3QgZnVsbHkgbG9hZGVkLCBjaGVjayBpZiBpdCBjYW4gY29udGludWUgbG9hZGluZyBidWxsZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYWdhemluZS5VcGRhdGVDYW5Mb2FkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbiBjb250aW51ZSBsb2FkaW5nIGJ1bGxldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRoaXMuX2NvbmZpZ0RhdGEuY2FuSW50ZXJydXB0QnVsbGV0TG9hZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgPSB0aGlzLl9tYWdhemluZS5HZXRMb2FkVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2Fubm90IGNvbnRpbnVlIGxvYWRpbmcgYnVsbGV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUmVsb2FkRmluaXNoZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFnYXppbmUgaXMgZnVsbHkgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlJlbG9hZEZpbmlzaGVkLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU2OEMwXHU2N0U1XHU1RjUzXHU1MjREXHU2MkM5XHU2N0FBXHU2ODEzXHU2NENEXHU0RjVDXHU2NjJGXHU1NDI2XHU3RUQzXHU2NzVGICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUHVtcE5leHRVcGRhdGUgJiYgdGhpcy5fcHVtcFdhaXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNQdW1wTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHVtcGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzV2FpdGluZ1B1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5QdW1wZWQsIHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2FpbUJlZm9yZVB1bXAgJiYgIXRoaXMuX2F1dG9GaXJlQWltKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FpbUJlZm9yZVB1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RhcnQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hhc0p1c3RGaXJlZCA9IGZhbHNlXHJcbiAgICAgICAgLyoqXHU2OEMwXHU2N0U1XHU1RjAwXHU3MDZCXHU3MkI2XHU2MDAxICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlICYmIHRoaXMuX2lzQWxsb3dlZCkge1xyXG4gICAgICAgICAgICBsZXQgZmlyZURlbGF5ID0gMSAvIHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RTcGVlZFxyXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSAwXHJcbiAgICAgICAgICAgIGxldCBoYXNGaXJlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHdoaWxlKHRoaXMuX2ZpcmVXYWl0IDwgMCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IHRoaXMuX2NvbmZpZ0RhdGEuYnVsbGV0UGVyU2hvb3Q7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fbWFnYXppbmUuaXNFbXB0eUxvYWRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkZpcmUoZGVsYXksICF0aGlzLl9jb25maWdEYXRhLmNvbnN1bWVTaW5nbGVCdWxsZXRQZXJTaG9vdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzRmlyZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzLS1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaGFzRmlyZWQgJiYgdGhpcy5fY29uZmlnRGF0YS5jb25zdW1lU2luZ2xlQnVsbGV0UGVyU2hvb3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ29uc3VtZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihoYXNGaXJlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuX2NvbmZpZ0RhdGEucHVtcEFmdGVyRmlyZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWFrZUJ1bGxldFNoZWxsKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRmlyZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5FbXB0eUZpcmUsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWxheSArPSBmaXJlRGVsYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpcmVXYWl0ICs9IGZpcmVEZWxheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaGFzRmlyZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVjb2lsLkZpcmUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5JbnB1dFJlY29pbCh0aGlzLl9yZWNvaWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9cdTVGNTNcdTUyNERcdTRFMERcdTUxNDFcdThCQjhcdTVGMDBcdTY3QUFcdUZGMENcdTUyMTlcdTVDMDZcdTY3QUFcdTRFMkRcdTVCNTBcdTVGMzlcdThGREVcdTUzRDFcdTUyNjlcdTRGNTlcdTVCNTBcdTVGMzlcdTZFMDVcdTk2RjZcclxuICAgICAgICAgICAgaWYoIXRoaXMuX2lzQWxsb3dlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1x1NjgzOVx1NjM2RVx1NEUwRFx1NTQwQ1x1NzY4NFx1NUYwMFx1NzA2Qlx1NkEyMVx1NUYwRlx1OEZEQlx1ODg0Q1x1NjU3MFx1NjM2RVx1OTFDRFx1N0Y2RVxyXG4gICAgICAgICAgICBpZih0aGlzLl9jdXJTaG9vdE1vZGUgIT0gR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5BdXRvKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzIDw9IDAgfHwgdGhpcy5fbWFnYXppbmUuaXNFbXB0eUxvYWRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY3VyU2hvb3RNb2RlID09IEdhbWVDb25zdC5GaXJlTW9kZUVudW0uU2luZ2xlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA8PSAwID8gMCA6IHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9maXJlV2FpdCA9IE1hdGgubWF4KDAsIHRoaXMuX2ZpcmVXYWl0KVxyXG4gICAgICAgICAgICB0aGlzLl9yZWxvYWRXYWl0ID0gTWF0aC5tYXgoMCwgdGhpcy5fcmVsb2FkV2FpdClcclxuICAgICAgICAgICAgdGhpcy5fcHVtcFdhaXQgPSBNYXRoLm1heCgwLCB0aGlzLl9wdW1wV2FpdClcclxuICAgICAgICAgICAgLy9cdTUxNzZcdTRFRDZcdTYzQTdcdTUyMzZcdTdDN0JcdTc2ODRcdTY2RjRcdTY1QjBcclxuICAgICAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5VcGRhdGUoX2R0KVxyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb25Db250cm9sbGVyLlVwZGF0ZShfZHQpXHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29pbC5VcGRhdGUoX2R0KVxyXG4gICAgICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5VcGRhdGUoX2R0KVxyXG4gICAgICAgICAgICB0aGlzLl9tYWdhemluZS5VcGRhdGUoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5SZWZyZXNoU2NhbGVzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY3QUFcdTRFMEFcdTg4QzVcdTU5MDdcdTRFMDBcdTRFMkFcdTkxNERcdTRFRjZcclxuICAgICAqIEBwYXJhbSBhY2NlIFx1OTE0RFx1NEVGNlx1NUI5RVx1NEY4QlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBFcXVpcEFjY2Vzc29yeShhY2NlOldlYXBvbkFjY2Vzc29yeUJhc2VDbHMpOiBbYm9vbGVhbiwgV2VhcG9uQWNjZXNzb3J5QmFzZUNsc10ge1xyXG4gICAgICAgIGxldCBhY2NlSWQgPSBhY2NlLmlkXHJcbiAgICAgICAgbGV0IGNhbkJlRXF1aXAgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuX2NvbmZpZ0RhdGEuY2FuQmVFcXVpcEFjY2Vzc29yeS5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkID09IGFjY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FuQmVFcXVpcCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCFjYW5CZUVxdWlwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZmFsc2UsIG51bGxdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvcmlnaW5BY2NlID0gdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5nZXQoYWNjZS5jb25maWdEYXRhLmxvY2F0aW9uKVxyXG4gICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3Quc2V0KGFjY2UuY29uZmlnRGF0YS5sb2NhdGlvbiwgYWNjZSlcclxuICAgICAgICBhY2NlLkVxdWlwVG9XZWFwb24odGhpcylcclxuICAgICAgICByZXR1cm4gW3RydWUsIG9yaWdpbkFjY2VdXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVW5FcXVpcEFjY2Vzc29yeShfbG9jYXRpb25PckNsczpXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzIHwgbnVtYmVyKTogdm9pZHtcclxuICAgICAgICBpZihfbG9jYXRpb25PckNscyBpbnN0YW5jZW9mIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMpe1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmRlbGV0ZShfbG9jYXRpb25PckNscy5jb25maWdEYXRhLmxvY2F0aW9uKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmRlbGV0ZShfbG9jYXRpb25PckNscylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcdTYzNjJcdTVGMzlcdTU5MzksXHU2MzYyXHU1RjM5XHU1OTM5XHU3Njg0XHU3Njg0XHU2NUY2XHU1MDE5XHU0RTBEXHU4MEZEXHU2MkM5XHU2N0FBXHU2ODEzICovXHJcbiAgICBwdWJsaWMgTG9hZE1hZ2F6aW5lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyAmJiAhIHRoaXMuX2lzUHVtcGluZyAmJiB0aGlzLl9tYWdhemluZS5jYW5Mb2FkZWQgJiYgISB0aGlzLl9vblJlbG9hZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBQdW1wU3RhcnQoKTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyAmJiAhdGhpcy5fb25SZWxvYWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9QdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9haW1CZWZvcmVQdW1wID0gdGhpcy5faXNab29tSW5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgTWFrZUJ1bGxldFNoZWxsKCk6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICBpZih0aGlzLnRvc3MgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBSb3RhdGlvbigxODAgKiBNYXRoLnJhbmRvbSgpLCAwLCAxODAgKiBNYXRoLnJhbmRvbSgpKVxyXG4gICAgICAgIGxldCBvYmogPSBhd2FpdCBHYW1lT2JqUG9vbC5nZXRJbnN0YW5jZSgpLmFzeW5jU3Bhd24odGhpcy5fY29uZmlnRGF0YS5idWxsZXRTaGVsbClcclxuICAgICAgICBvYmouc2V0V29ybGRMb2NhdGlvbih0aGlzLnRvc3MuZ2V0V29ybGRMb2NhdGlvbigpKVxyXG4gICAgICAgIG9iai5zZXRXb3JsZFJvdGF0aW9uKHRlbXApXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgTWFrZUZpcmVFZmZlY3QoKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGxldCBvYmogPWF3YWl0IEdhbWVPYmpQb29sLmdldEluc3RhbmNlKCkuYXN5bmNTcGF3bih0aGlzLl9jb25maWdEYXRhLmZpcmVFZmZlY3QpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkTG9jYXRpb24odGhpcy5tdXp6bGVPYmouZ2V0V29ybGRMb2NhdGlvbigpKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIE1ha2VCdWxsZXQoZW5kT2JqOkdhbWVPYmplY3QsIGVuZFBvczpWZWN0b3IsIGVuZE5vcm1hbDpWZWN0b3Ipe1xyXG4gICAgICAgIGlmKCFlbmRPYmope1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW5kT2JqIGluc3RhbmNlb2YgQ2hhcmFjdGVyKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYmogPSBhd2FpdCBHYW1lT2JqUG9vbC5nZXRJbnN0YW5jZSgpLmFzeW5jU3Bhd24odGhpcy5fY29uZmlnRGF0YS5idWxsZXRIb2xlKVxyXG4gICAgICAgIG9iai5zZXRXb3JsZExvY2F0aW9uKGVuZFBvcylcclxuICAgICAgICBvYmouc2V0V29ybGRTY2FsZShuZXcgVmVjdG9yKDAuMSwgMC4xLCAwLjEpKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIE1ha2VIaXRFZmZlY3QoZW5kUG9zOlZlY3Rvcik6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICBsZXQgb2JqID0gYXdhaXQgR2FtZU9ialBvb2wuZ2V0SW5zdGFuY2UoKS5hc3luY1NwYXduKHRoaXMuX2NvbmZpZ0RhdGEuaGl0RWZmZWN0KVxyXG4gICAgICAgIG9iai5zZXRXb3JsZExvY2F0aW9uKGVuZFBvcylcclxuICAgIH1cclxuICAgIHB1YmxpYyBJZ25vcmVTZWxmKGlnbm9yZTpib29sZWFuKXtcclxuICAgICAgICB0aGlzLl9pc0lnbm9yaW5nU2VsZiA9IGlnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIFNldEZpcmVDb25kaXRpb24oc2lkZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX2hhc0ZpcmVDb25kaXRpb24gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5fZmlyZUNvbmRpdGlvblNpZGUgPSBzaWRlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgQ2FuY2VsRmlyZUNvbmRpdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX2hhc0ZpcmVDb25kaXRpb24gPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgcHVibGljIFRyeUZpcmVPbmVCdWxsZXQoKXtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gdHJ1ZVxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2N1clNob290TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLlNpbmdsZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IDFcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLlJhcGlkbHlfMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA9IHRoaXMuX2NvbmZpZ0RhdGEucmFwaWRseV8xXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5SYXBpZGx5XzI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSB0aGlzLl9jb25maWdEYXRhLnJhcGlkbHlfMlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVHJ5S2VlcEZpcmUoKXtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcgJiYgdGhpcy5fY3VyU2hvb3RNb2RlID09IEdhbWVDb25zdC5GaXJlTW9kZUVudW0uQXV0byl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFRyeVB1bXAoYjpib29sZWFuKXtcclxuICAgICAgICBpZih0aGlzLl9jb25maWdEYXRhLnB1bXBBZnRlckZpcmUgJiYgdGhpcy5faXNab29tSW4gJiYgIXRoaXMuX2lzUHVtcGluZyl7XHJcbiAgICAgICAgICAgIC8vXHU1RjAwXHU2N0FBXHU1NDBFXHU4OTgxXHU2MkM5XHU2ODEzXHU1RTc2XHU0RTE0XHU3M0IwXHU1NzI4XHU2NjJGXHU1RjAwXHU5NTVDXHU3MkI2XHU2MDAxXHJcbiAgICAgICAgICAgIHRoaXMuX3pvb21JblRyeVB1bXAgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFiKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2F1dG9GaXJlQWltID0gYlxyXG4gICAgfVxyXG4gICAgcHVibGljIE1lY2hhbmljYWxBaW1TdGFydCgpOnZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzWm9vbUluIHx8ICF0aGlzLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISh0aGlzLmNoYXJhY3Rlci5tb3ZlbWVudFN0YXRlID09IE1vdmVtZW50TW9kZS5XYWxrKSB8fCB0aGlzLl9pc1B1bXBpbmcgfHwgdGhpcy5fb25SZWxvYWQpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNab29tSW4gPSB0cnVlXHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5NZWNoYW5pY2FsQWltU3RhcnQoKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLk1lY2hhbmljYWxBaW1TdGFydCgpXHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuQWltSW4sIHRoaXMpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTWVjaGFuaWNhbEFpbVN0b3AoKTp2b2lke1xyXG4gICAgICAgIGlmKCEodGhpcy5faXNab29tSW4gJiYgdGhpcy5faXNkcmF3KSl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc1pvb21JbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkFpbU91dCwgdGhpcylcclxuICAgIH1cclxuICAgIHB1YmxpYyBXaXRoZHJhd1dlYXBvbigpOnZvaWR7XHJcbiAgICAgICAgaWYoIXRoaXMuX2lzZHJhdyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9haW1CZWZvcmVQdW1wID0gZmFsc2VcclxuICAgICAgICBpZih0aGlzLl9pc1pvb21Jbil7XHJcbiAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYW1lcmFDb250cm9sLk9uVW5FcXVpcFdlYXBvbih0cnVlKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLlNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgdGhpcy5wcmVmYWIuc2V0VmlzaWJpbGl0eShUeXBlLlByb3BlcnR5U3RhdHVzLk9mZilcclxuICAgICAgICBpZih0aGlzLl9vblJlbG9hZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVsb2FkT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlJlbG9hZEZpbmlzaGVkLCB0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc2RyYXcgPSBmYWxzZVxyXG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LldpdGhEcmF3V2VhcG9uLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgcHVibGljIERyYXdXZWFwb24oKTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc1dpdGhEcmF3aW5nID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2lzZHJhdyA9IHRydWVcclxuICAgICAgICB0aGlzLl9haW1CZWZvcmVQdW1wID0gZmFsc2VcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5TZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5PbkVxdWlwV2VhcG9uKHRoaXMsIG51bGwpXHJcbiAgICAgICAgdGhpcy5wcmVmYWIuc2V0VmlzaWJpbGl0eShUeXBlLlByb3BlcnR5U3RhdHVzLk9uKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuX2lzV2FpdGluZ1B1bXApe1xyXG4gICAgICAgICAgICB0aGlzLlB1bXBTdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNXaXRoRHJhd2luZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTsgICAgICAgXHJcbiAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRHJhd1dlYXBvbiwgdGhpcylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3VtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgQ29uc3VtZSgpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuX21hZ2F6aW5lLkNvbnN1bWUoKSgpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgQ2hhbmdlU2hvb3RNb2RlKCk6R2FtZUNvbnN0LkZpcmVNb2RlRW51bSB7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3ICYmIHRoaXMuX2lzQWxsb3dlZCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RNb2RlLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgLy95XHU2NzA5XHU1OTFBXHU3OUNEXHU1QzA0XHU1MUZCXHU2QTIxXHU1RjBGXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dEluZGV4Om51bWJlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnRGF0YS5zaG9vdE1vZGUuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgPT0gdGhpcy5fY3VyU2hvb3RNb2RlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jb25maWdEYXRhLnNob290TW9kZVtuZXh0SW5kZXhdID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1clNob290TW9kZSA9IHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RNb2RlW25leHRJbmRleF0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1clNob290TW9kZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBSYXlDYXN0T3JpZ2luKCk6VmVjdG9ye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3Rlci5nZXRXb3JsZExvY2F0aW9uKCkuYWRkKHRoaXMuY2hhcmFjdGVyLmdldEZvcndhcmRWZWN0b3IoKS5tdWx0aXBseSgwLjUpLmFkZCgoVmVjdG9yLnVwLm11bHRpcGx5KHRoaXMuY2hhcmFjdGVyLmNhcHN1bGVIYWxmSGVpZ2h0ICogMiAtIDAuMSkpKSkgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmF5Q2FzdFRhcmdldCgpOlZlY3RvcntcclxuICAgICAgICBsZXQgW2luZm8sIGlzVGFyZ2V0XTpbVmVjdG9yLCBib29sZWFuXSA9IHRoaXMuX2NhbWVyYUNvbnRyb2wuR2V0VGFyZ2V0KClcclxuICAgICAgICBpZihpc1RhcmdldCl7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmZvLm11bHRpcGx5KHRoaXMuX2NvbmZpZ0RhdGEuZGlzdGFuY2UpLmFkZCh0aGlzLm11enpsZU9iai5nZXRXb3JsZExvY2F0aW9uKCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBPdmVybG9hZFJheUNhc3QoZGlyOlZlY3Rvcik6R2FtZUNvbnN0LldlYXBvbkhpdFJlc3VsdHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5SYXlDYXN0T3JpZ2luKCkuYWRkKGRpci5tdWx0aXBseSh0aGlzLl9jb25maWdEYXRhLmRpc3RhbmNlKSlcclxuICAgICAgICBsZXQgaW5mbyA9IEdhbWVwbGF5LmxpbmVUcmFjZSh0aGlzLlJheUNhc3RPcmlnaW4oKSwgdGFyZ2V0KVxyXG4gICAgICAgIGxldCByZXN1bHQ6R2FtZUNvbnN0LldlYXBvbkhpdFJlc3VsdFxyXG4gICAgICAgIGlmKGluZm8ubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU1MjI0XHU1QjlBXHU1NDdEXHU0RTJEXHU2NjJGXHU5Nzc2XHU1QjUwXHU2MjE2XHU4MDA1XHU5NjlDXHU3ODhEXHU3MjY5XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluZm8sIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbmZvW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nYW1lT2JqZWN0IGluc3RhbmNlb2YgR2FtZXBsYXkuQ2hhcmFjdGVyICYmIGVsZW1lbnQuZ2FtZU9iamVjdCAhPSBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTVGNTNcdTUyNERcdTU0N0RcdTRFMkRcdTc2ODRcdTY2MkZcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmdhbWVPYmplY3QuZ2V0Q29sbGlzaW9uKCkgPT0gVHlwZS5Db2xsaXNpb25TdGF0dXMuT24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0UG9pbnQgPSBlbGVtZW50LmltcGFjdFBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkhpdE9iamVjdCA9IGVsZW1lbnQuZ2FtZU9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXROb3JtYWwgPSBlbGVtZW50LmltcGFjdE5vcm1hbFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXRQYXJ0ID0gR2FtZUNvbnN0LkhpdFBhcnRFbnVtLk5vbmVcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSXNUYXJnZXQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1NTIyNFx1NUI5QVx1NTQ3RFx1NEUyRFx1NzNBOVx1NUJCNlx1NzY4NFx1OTBFOFx1NEY0RCxcdTUyMjRcdTVCOUFcdTYyMTBcdTUyOUZcdTU0MEVcdTc2RjRcdTYzQTVcdThGRDRcdTU2REVcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5mbywga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGluZm9ba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIEdhbWVwbGF5LkNoYXJhY3Rlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTczQTlcdTVCQjZcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTg4QUJcdTU0N0RcdTRFMkRcdTUyMjRcdTY1QURcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTczQTlcdTVCQjZcdTY2MkZcdTU0MjZcdTVERjJcdTdFQ0ZcdTZCN0JcdTRFQTFcdTc2ODRcdTUyMjRcdTY1QURcclxuICAgICAgICAgICAgICAgICAgICBpZihDbGllbnRCYXNlLm1JbnN0YW5jZS5HZXRQbGF5ZXJBdHRyKGVsZW1lbnQuZ2FtZU9iamVjdC5ndWlkKS5ocCA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTU0N0RcdTRFMkRcdTgxRUFcdTVERjFcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5fY29uZmlnRGF0YS5pc0hpdFNlbGYgJiYgZWxlbWVudC5nYW1lT2JqZWN0ID09IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0UG9pbnQgPSBlbGVtZW50LmltcGFjdFBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkhpdE9iamVjdCA9IGVsZW1lbnQuZ2FtZU9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXROb3JtYWwgPSBlbGVtZW50LmltcGFjdE5vcm1hbFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXRQYXJ0ID0gR2FtZUNvbnN0LkhpdFBhcnRFbnVtLkJvZHlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSXNUYXJnZXQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIENhbGN1bGF0ZVJheUNhc3REaXJlY3Rpb24oKTpWZWN0b3J7XHJcbiAgICAgICAgbGV0IGRpciA9IHRoaXMuUmF5Q2FzdFRhcmdldCgpLnN1YnRyYWN0KHRoaXMuUmF5Q2FzdE9yaWdpbigpKS5ub3JtYWxpemVkXHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkNvbnRyb2xsZXIubm9TaG9vdGluZ1N0YXRlKSB7XHJcbiAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHU0RTNBXHU0RTBEXHU1M0VGXHU1QzA0XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgICAgICAgIGRpciA9IHRoaXMubXV6emxlT2JqLmZvcndhcmRWZWN0b3JcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzWm9vbUluICYmIHRoaXMuX2NvbmZpZ0RhdGEuYWNjdXJhdGVBaW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpclxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gV2VhcG9uVG9vbC5SYW5kb21Sb3RhdGUoZGlyLCB0aGlzLl9yZWNvaWwuX2N1cnJlbnRFcnJvcikgICAgIFxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIEZpcmUoZGVsYXk6bnVtYmVyLCBjb25zdW1lOmJvb2xlYW4pe1xyXG4gICAgICAgIGxldCBpc0ZyaWVuZCA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuQ2FsY3VsYXRlUmF5Q2FzdERpcmVjdGlvbigpXHJcbiAgICAgICAgbGV0IGhpdCA9IHRoaXMuT3ZlcmxvYWRSYXlDYXN0KGRpcmVjdGlvbilcclxuICAgICAgICB0aGlzLl9oYXNKdXN0RmlyZWQgPSB0cnVlXHJcbiAgICAgICAgaWYoIWlzRnJpZW5kICYmIGhpdCl7XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBoaXQuSGl0UG9pbnRcclxuICAgICAgICAgICAgbGV0IGVuZE5vcm0gPSBoaXQuSGl0Tm9ybWFsXHJcbiAgICAgICAgICAgIGxldCBlbmRPYmogPSBoaXQuSGl0T2JqZWN0XHJcbiAgICAgICAgICAgIGlmKGNvbnN1bWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Db25zdW1lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighaGl0LkhpdE9iamVjdCl7XHJcbiAgICAgICAgICAgICAgICBlbmRQb3MgPSB0aGlzLlJheUNhc3RPcmlnaW4oKS5hZGQoZGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuX2NvbmZpZ0RhdGEuZGlzdGFuY2UpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuTWFrZUJ1bGxldChlbmRPYmosIGVuZFBvcywgZW5kTm9ybSlcclxuICAgICAgICAgICAgaWYoaGl0LkhpdFBhcnQgJiYgaGl0LkhpdFBhcnQgIT0gR2FtZUNvbnN0LkhpdFBhcnRFbnVtLk5vbmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EYW1hZ2UoaGl0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuTWFrZUhpdEVmZmVjdChlbmRQb3MpXHJcbiAgICAgICAgICAgIGlmKGhpdC5Jc1RhcmdldCl7XHJcbiAgICAgICAgICAgICAgICBoaXQuRGFtYWdlID0gdGhpcy5fY29uZmlnRGF0YS5kYW1hZ2VcclxuICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlN1Y2Nlc3NmdWxseUhpdFRhcmdldCwgdGhpcywgaGl0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBEYW1hZ2UoaGl0IDogR2FtZUNvbnN0LldlYXBvbkhpdFJlc3VsdCl7XHJcbiAgICAgICAgbGV0IGhpdFBvcyA9IGhpdC5IaXRQb2ludFxyXG4gICAgICAgIGxldCBhdHRlbnVhdGlvbjpudW1iZXJcclxuICAgICAgICBpZihoaXRQb3MgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGF0dGVudWF0aW9uID0gMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgZGlzOm51bWJlciA9IGhpdFBvcy5zdWJ0cmFjdCh0aGlzLmNoYXJhY3Rlci5nZXRXb3JsZExvY2F0aW9uKCkpLm1hZ25pdHVkZVxyXG4gICAgICAgICAgICBhdHRlbnVhdGlvbiA9IFdlYXBvblRvb2wuR2V0QXR0ZW51YXRpb25CeUd1bklkKDEsIHRoaXMsIGRpcylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhbWFnZSA9IHRoaXMuX2NvbmZpZ0RhdGEuZGFtYWdlICsgYXR0ZW51YXRpb25cclxuICAgICAgICBkYW1hZ2UgPSBkYW1hZ2UgPD0gMCA/IDAgOiBkYW1hZ2VcclxuICAgICAgICBzd2l0Y2ggKGhpdC5IaXRQYXJ0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkhpdFBhcnRFbnVtLkxpbWI6XHJcbiAgICAgICAgICAgICAgICBkYW1hZ2UgPSBkYW1hZ2UgKiB0aGlzLl9jb25maWdEYXRhLmhpdExpbWJEYW1hZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuSGl0UGFydEVudW0uQm9keTpcclxuICAgICAgICAgICAgICAgIGRhbWFnZSA9IGRhbWFnZSAqIHRoaXMuX2NvbmZpZ0RhdGEuaGl0Qm9keURhbWFnZVJhdGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5IaXRQYXJ0RW51bS5IZWFkOlxyXG4gICAgICAgICAgICAgICAgZGFtYWdlID0gZGFtYWdlICogdGhpcy5fY29uZmlnRGF0YS5oaXRIZWFkRGFtYWdlUmF0ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGFtYWdlID4gMCl7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRQbGF5ZXIgOiBDaGFyYWN0ZXIgXHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlN1Y2Nlc3NmdWxseUhpdCwgaGl0UG9zLCB0YXJnZXRQbGF5ZXIsIGRhbWFnZSwgaGl0LkhpdFBhcnQpXHJcbiAgICAgICAgICAgIC8vXHU0RjI0XHU1QkIzXHU1M0QxXHU4RDc3XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgUmVmcmVzaFNjYWxlcygpIHtcclxuICAgICAgICBsZXQgZmFjdG9yID0gMVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvblJlY29pbENscyB9IGZyb20gXCIuL1dlYXBvblJlY29pbENsc1wiO1xyXG5pbXBvcnQgeyBUd2VlblV0aWwgfSBmcm9tIFwiLi4vVG9vbC9Ud2VlblV0aWxcIjtcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIjtcclxuaW1wb3J0IHsgQ2FtZXJhQ29udHJvbGxlciB9IGZyb20gXCIuL0NhbWVyYUNvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFwb25DYW1lcmFDbHN7XHJcbiAgICBndW5SZWNvaWwgOiBXZWFwb25SZWNvaWxDbHNcclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIG1fY2FtZXJhIDogQ2FtZXJhU3lzdGVtXHJcbiAgICBtX29yaWdpblpvb20gOiBudW1iZXJcclxuICAgIG1fc3VwcG9zZWRab29tIDogbnVtYmVyXHJcbiAgICBtX3NpZ2h0Wm9vbSA6IG51bWJlclxyXG4gICAgYWltVGltZSA6IG51bWJlclxyXG4gICAgbV9pc1pvb21JbiA6IGJvb2xlYW5cclxuICAgIG1fb3JpZ2luT2Zmc2V0IDogVmVjdG9yXHJcbiAgICBtX2FpbU9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9jdXJyZW50T2Zmc2V0IDogVmVjdG9yXHJcbiAgICBpc1VwZGF0aW5nIDogYm9vbGVhblxyXG4gICAgc2NyZWVuU2l6ZSA6IFZlY3RvcjJcclxuICAgIG1fc2Vuc2l0aXZpdHkgOiBudW1iZXJcclxuICAgIG1fb3JpZ2luRGlzdGFuY2UgOiBudW1iZXJcclxuICAgIGRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBtX2FpbURpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBtX2dhbW1hIDogbnVtYmVyXHJcbiAgICBkZWx0YVBoeSA6IG51bWJlclxyXG4gICAgZGVsdGFUaGV0YSA6IG51bWJlclxyXG4gICAgbV9kZWx0YUZPViA6IG51bWJlclxyXG4gICAgbV9sYXN0TW91c2VQb3MgOiBWZWN0b3IyXHJcbiAgICB2aWJyYXRpb25BbXBsIDogbnVtYmVyXHJcbiAgICBtX2JhY2tUaW1lIDogbnVtYmVyXHJcbiAgICBtX2p1bXBUb3RhbCA6IFZlY3RvcjJcclxuICAgIG1fYmFja1RvdGFsIDogbnVtYmVyXHJcbiAgICBlbmFibGVBc3Npc3RBaW0gOiBib29sZWFuXHJcbiAgICBhaW1FbmVteSA6IENoYXJhY3RlclxyXG4gICAgQWltaW5nSXNPdmVyIDogYm9vbGVhblxyXG4gICAgbV9qdW1wRm92UmF0ZVNjYWxlIDogbnVtYmVyXHJcbiAgICBtX2FpbVRpbWVSYXRlU2NhbGUgOiBudW1iZXJcclxuICAgIGxhc3Rab29tIDogbnVtYmVyXHJcbiAgICB0YXJnZXRDYWxsVGltZSA6IG51bWJlclxyXG4gICAgdGFyZ2V0UmV0dXJuIDogW1ZlY3RvciwgYm9vbGVhbl1cclxuICAgIG1fanVtcEZvdlJhdGVUYWJsZSA6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIG51bWJlcj5cclxuICAgIG1fYWltVGltZVJhdGVUYWJsZSA6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW0sIG51bWJlcj5cclxuICAgIFxyXG4gICAgc2VsZlNwaW5Db250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAganVtcEZPVkNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBqdW1wQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIHJlY292ZXJDb250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAgYXNzaXN0QWltQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGFpbUNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBkZWFpbUNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcblxyXG4gICAgY29uZmlnRGF0YSA6IEdhbWVDb25zdC5XZWFwb25DYW1lcmFDb25maWdEYXRhXHJcblxyXG4gICAgY29uc3RydWN0b3IoX2d1blJlY29pbDpXZWFwb25SZWNvaWxDbHMpe1xyXG4gICAgICAgIFdlYXBvblRvb2wuSW5pdFdlYXBvbkNhbWVyYUNvbmZpZyh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ3VuUmVjb2lsID0gX2d1blJlY29pbFxyXG4gICAgICAgIHRoaXMuZ3VuID0gX2d1blJlY29pbC5ndW5cclxuICAgICAgICB0aGlzLm1fb3JpZ2luWm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLndhaXN0QWltRk9WXHJcbiAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgdGhpcy5tX3NpZ2h0Wm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLm1lY2hpbmljYWxBaW1GT1ZcclxuICAgICAgICB0aGlzLmFpbVRpbWUgPSB0aGlzLmd1bi5fY29uZmlnRGF0YS5haW1UaW1lXHJcbiAgICAgICAgLy90aGlzLm1fb3JpZ2luT2Zmc2V0ID0gXHU1MTY4XHU1QzQwXHU5MTREXHU3RjZFXHJcbiAgICAgICAgLy90aGlzLm1fYWltT2Zmc2V0ID0gXHU1MTY4XHU1QzQwXHU5MTREXHU3RjZFXHJcbiAgICAgICAgdGhpcy5tX2N1cnJlbnRPZmZzZXQgPSB0aGlzLm1fb3JpZ2luT2Zmc2V0XHJcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLnNjcmVlblNpemUgPSBXaW5kb3dVdGlsLmdldFZpZXdwb3J0U2l6ZSgpXHJcbiAgICAgICAgLy90aGlzLm1fc2Vuc2l0aXZpdHkgPSBcclxuICAgICAgICAvL3RoaXMubV9vcmlnaW5EaXN0YW5jZSA9IFxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAvL3RoaXMubV9haW1EaXN0YW5jZSA9IFxyXG4gICAgICAgIHRoaXMubV9nYW1tYSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhUGh5ID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFUaGV0YSA9IDBcclxuICAgICAgICB0aGlzLm1fZGVsdGFGT1YgPSAwXHJcbiAgICAgICAgdGhpcy5tX2xhc3RNb3VzZVBvcyA9IG5ldyBWZWN0b3IyKClcclxuICAgICAgICB0aGlzLnZpYnJhdGlvbkFtcGwgPSAwXHJcbiAgICAgICAgdGhpcy5tX2JhY2tUaW1lID0gMFxyXG4gICAgICAgIHRoaXMubV9qdW1wVG90YWwgPSBWZWN0b3IyLnplcm9cclxuICAgICAgICB0aGlzLm1fYmFja1RvdGFsID0gMFxyXG4gICAgICAgIC8vdGhpcy5lbmFibGVBc3Npc3RBaW0gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYWltRW5lbXkgPSBudWxsXHJcbiAgICAgICAgdGhpcy5BaW1pbmdJc092ZXIgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlID0gMVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVNjYWxlID0gMVxyXG4gICAgICAgIC8qKnpcdThGNzRcdTY1Q0JcdThGNkNcdTUyQThcdTc1M0IgKi9cclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgIGxldCByZW1uUGhhc2UgPSAyICogTWF0aC5QSSAtIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicGhhc2VcIilcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMubV9iYWNrVGltZSwgcmVtblBoYXNlIC8gdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcix0MzpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZ2FtbWEgPSB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcIkFtcGxcIikgKiBNYXRoLmV4cCgtdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbkR1bXAgKiB0MSkgKiBcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAqIHQxKSArIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicGhhc2VcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2dhbW1hID0gMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmhhcyhcInBoYXNlXCIpfHwhdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5oYXMoXCJBbXBsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJwaGFzZVwiLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiQW1wbFwiLCB0aGlzLnZpYnJhdGlvbkFtcGwgKiBXZWFwb25Ub29sLkdhdXNzUmFuZG9tKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcEEgPSB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcIkFtcGxcIikgKiBNYXRoLmV4cCgtdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbkR1bXAgKiB0aGlzLnNlbGZTcGluQ29udHJvbGxlci50aW1lKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAwID0gdGVtcEEgKiB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgKiBcclxuICAgICAgICAgICAgICAgIE1hdGguY29zKHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAqIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLnRpbWUgKyB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInBoYXNlXCIpKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhICogdGhpcy52aWJyYXRpb25BbXBsICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UGhhc2UgPSBNYXRoLmF0YW4odGhpcy5tX2dhbW1hICogdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhIC8gKGRlbHRhICt0ZW1wMCkpXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3QW1wbCA9IChkZWx0YSArIHRlbXAwKSAvIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAvIE1hdGguY29zKG5ld1BoYXNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJwaGFzZVwiLCBuZXdQaGFzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiQW1wbFwiLCBuZXdBbXBsKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIC8qKlx1OERGM1x1NTJBOEZPVlx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ZFNwZWVkID0gdGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIikgLyB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWVcclxuICAgICAgICAgICAgICAgIGlmIChzdGRTcGVlZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyICogdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lICtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5qdW1wRk9WQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImp1bXBGT1ZcIikgLSB0aGlzLm1fZGVsdGFGT1YpIC8gc3RkU3BlZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsZHQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKHQyIC10MSA+IDIgKiB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fZGVsdGFGT1YgKz0gZHQgKiB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwianVtcEZPVlwiKSAvIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1fZGVsdGFGT1YgPSAodDIgLXQxKS8oMiAqIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZSkgKiB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwianVtcEZPVlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZGVsdGFGT1YgPSAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwianVtcEZPVlwiLCB0aGlzLkdldEp1bXBGT1YoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAvKipcdTY3QUFcdTUzRTNcdThERjNcdTUyQThcdTYwM0JcdTUyQThcdTc1M0IgKi9cclxuICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsZHQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IG9tZWdhID0gMC41ICogTWF0aC5QSSAvIHQyXHJcbiAgICAgICAgICAgICAgICBsZXQgcG93ZXIgPSBvbWVnYSAqIE1hdGguY29zKG9tZWdhICogKHQxIC0gMC41ICogZHQpKSAqIGR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSB0aGlzLmRlbHRhVGhldGEgKyBwb3dlciAqIHRoaXMubV9qdW1wVG90YWwueVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVBoeSA9IHRoaXMuZGVsdGFQaHkgKyBwb3dlciAqIHRoaXMubV9qdW1wVG90YWwueFxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIgLCB0aGlzLmp1bXBDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwidG90YWxcIikuc3VidHJhY3QodGhpcy5tX2p1bXBUb3RhbC5tdWx0aXBseShwb3dlcikpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgKz0gdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInRvdGFsXCIpLnlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFQaHkgKz0gdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcInRvdGFsXCIpLnhcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCBuZXcgVmVjdG9yMigpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWltRW5lbXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1bi5fd2VhcG9uR1VJLkZpcmUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJlY292ZXJDb250cm9sbGVyLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlci5TdG9wRnVuY3Rpb24odGhpcy5yZWNvdmVyQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmp1bXBDb250cm9sbGVyLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMuanVtcENvbnRyb2xsZXIpICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIsIHRoaXMubV9qdW1wVG90YWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLyoqXHU2N0FBXHU1M0UzXHU1NkRFXHU1OTBEXHU2MDNCXHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tX2JhY2tUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGxldCBBbXBsID0gdGhpcy5tX2JhY2tUb3RhbCAqIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wIC8gKDEgLSBNYXRoLmV4cCgtdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbkR1bXAgKiB0MikpXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGEgPSBBbXBsICogTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogKHQxIC0gMC41ICogZHQpKSAqIGR0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSB0aGlzLmRlbHRhVGhldGEgLSBkZWx0YVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIsIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJ0b3RhbFwiKSArIGRlbHRhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIsIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLyoqXHU4Rjg1XHU3Nzg0XHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmd1bi5fY29uZmlnRGF0YS5hc3Npc3RBaW1UaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChfdDE6bnVtYmVyLF90MjpudW1iZXIsX2R0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5haW1FbmVteSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5HZXRBaW1Qb3ModGhpcy5haW1FbmVteSlcclxuICAgICAgICAgICAgICAgIC8vXHU1OTgyXHU2NzlDXHU1REYyXHU3RUNGXHU1NzI4XHU3Nzg0XHU3NzQwXHU0RUJBXHU0RTg2XHU1MjE5XHU1MDVDXHU2QjYyXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLm5vcm1hbGl6ZWRcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLkdldENhbWVyYVBvcygpXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gR2FtZXBsYXkubGluZVRyYWNlKHBvcy5hZGQoZGlyLm11bHRpcGx5KDAuNSkpLCBwb3MuYWRkKGRpci5tdWx0aXBseSh0aGlzLmd1bi5fY29uZmlnRGF0YS5kaXN0YW5jZSkpKVxyXG4gICAgICAgICAgICAgICAgcmVzLmZvckVhY2goKHYgLGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5nYW1lT2JqZWN0ID09IHRoaXMuYWltRW5lbXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiaXNDaGFuZ2VcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vXHU1OTgyXHU2NzlDXHU2MkM5XHU4RkM3XHU1OTM0XHU0RTg2XHU1MjE5XHU1MDVDXHU2QjYyXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLklzUmlnaHQodGFyZ2V0UG9zKSE9IHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImlzQ2hhbmdlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJpc0NoYW5nZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcImlzQ2hhbmdlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFUaGV0YSArPSBfZHQgKiB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJvbWVnYVRoZXRhXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhUGh5ICs9IF9kdCAqIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLmdldChcIm9tZWdhUGh5XCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5HZXRBaW1Qb3ModGhpcy5haW1FbmVteSlcclxuICAgICAgICAgICAgICAgIGxldCByZWxhdGl2ZVBvcyA9IHRhcmdldFBvcy5zdWJ0cmFjdCh0aGlzLkdldENhbWVyYVBvcygpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiaXNSaWdodFwiLCB0aGlzLklzUmlnaHQodGFyZ2V0UG9zKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzQ2hhbmdlXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRoZXRhVG90YWwgPSBNYXRoLmF0YW4ocmVsYXRpdmVQb3MueSAvIG5ldyBWZWN0b3IyKHJlbGF0aXZlUG9zLngsIHJlbGF0aXZlUG9zLnopLm1hZ25pdHVkZSktXHJcbiAgICAgICAgICAgICAgICAoOTAgLSBWZWN0b3IuYW5nbGUodGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLCBWZWN0b3IudXApKSAvIDE4MCAqIE1hdGguUElcclxuICAgICAgICAgICAgICAgIGxldCBwaHlUb3RhbCA9IFZlY3RvcjIuYW5nbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIocmVsYXRpdmVQb3MueCwgcmVsYXRpdmVQb3MueiksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIodGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLngsIHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS56KVxyXG4gICAgICAgICAgICAgICAgKSAqXHJcbiAgICAgICAgICAgICAgICBNYXRoLlBJIC8gMTgwICpcclxuICAgICAgICAgICAgICAgICh0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc1JpZ2h0XCIpID8gLTEgOiAxKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGlvID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltUmF0aW8gLyB0aGlzLmd1bi5fY29uZmlnRGF0YS5hc3Npc3RBaW1UaW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJvbWVnYVRoZXRhXCIsIHRoZXRhVG90YWwgKiByYXRpbylcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcIm9tZWdhUGh5XCIsIHBoeVRvdGFsICogcmF0aW8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLy9cdTVGMDBcdTk1NUNcdTYwM0JcdTUyQThcdTc1M0JcclxuICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuR2V0QWltVGltZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLGR0Om51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGxldCBwb3IgPSB0MSAvIHQyXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gKDEgLSBwb3IpICogdGhpcy5tX29yaWdpblpvb20gKyBwb3IgKiB0aGlzLmFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJzaWdodFpvb21cIilcclxuICAgICAgICAgICAgICAgIHBvciA9IE1hdGguc3FydCgxIC0gKCAxIC0gcG9yKSAqICggMSAtIHBvcikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9vcmlnaW5PZmZzZXQubXVsdGlwbHkoMSAtIHBvcikuYWRkKHRoaXMubV9haW1PZmZzZXQubXVsdGlwbHkocG9yKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSAoMS1wb3IpICogdGhpcy5tX29yaWdpbkRpc3RhbmNlICsgcG9yICogdGhpcy5tX2FpbURpc3RhbmNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZFpvb20gPSB0aGlzLmFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJzaWdodFpvb21cIilcclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX2FpbU9mZnNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMubV9haW1EaXN0YW5jZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5BaW1pbmdJc092ZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVhaW1Db250cm9sbGVyLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFpbUNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lzWm9vbUluID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy9cdTY3MkNcdTU3MzBcdThCQkVcdTdGNkVcdTg5RDJcdTgyNzJcdTRFMERcdTUzRUZcdTg5QzFcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJzaWdodFpvb21cIiwgdGhpcy5HZXRTaWdodEZPVigpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSAgICAgICBcclxuICAgICAgICAvL1x1NTE3M1x1OTU1Q1x1NjAzQlx1NjVCOVx1NkNENVxyXG4gICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmd1bi5fY29uZmlnRGF0YS5zdG9wQWltVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9yID0gdDEgLyB0MlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9ICgxLXBvcikqdGhpcy5kZWFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJwcmVab29tXCIpK3Bvcip0aGlzLm1fb3JpZ2luWm9vbVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRPZmZzZXQgPSB0aGlzLm1fYWltT2Zmc2V0Lm11bHRpcGx5KDEgLSBwb3IpLmFkZCh0aGlzLm1fb3JpZ2luT2Zmc2V0Lm11bHRpcGx5KHBvcikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gKDEtcG9yKSp0aGlzLm1fYWltRGlzdGFuY2UrcG9yKnRoaXMubV9vcmlnaW5EaXN0YW5jZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX29yaWdpbk9mZnNldFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMubV9vcmlnaW5EaXN0YW5jZVxyXG4gICAgICAgICAgICAgICAgLy90b2RvIFx1NjcyQ1x1NTczMFx1OEJCRVx1N0Y2RVx1ODlEMlx1ODI3Mlx1NTNFRlx1ODlDMVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0UHJvcGVydGllcygpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWltQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWltQ29udHJvbGxlci5TdG9wRnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2lzWm9vbUluID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwicHJlWm9vbVwiLCB0aGlzLm1fc3VwcG9zZWRab29tKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLkVuZEFsbCgpXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoZHQ6bnVtYmVyKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNVcGRhdGluZyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlNldFByb3BlcnRpZXMoKVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVUYWJsZS5zZXQoaywgdi5jb25maWdEYXRhLmFpbVRpbWVSYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuZ3VuLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmZvckVhY2goKHYsIGspPT57XHJcbiAgICAgICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVRhYmxlLnNldChrLCB2LmNvbmZpZ0RhdGEuanVtcEZvdlJhdGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLnNlbGZTcGluQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5qdW1wRk9WQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmp1bXBGT1ZDb250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuanVtcENvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5yZWNvdmVyQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5kZWFpbUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5kZWFpbUNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmFpbUNvbnRyb2xsZXIsIGR0KVxyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hTY2FsZXMoKVxyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNldHRpbmdzKClcclxuICAgICAgICB0aGlzLmRlbHRhUGh5ID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFUaGV0YSA9IDBcclxuICAgIH1cclxuICAgIE9uRXF1aXBXZWFwb24oX2d1bkNvbnRyb2xsZXIgOiBXZWFwb25CYXNlQ2xzLCBpbmZvKSB7XHJcbiAgICAgICAgdGhpcy5ndW4gPSBfZ3VuQ29udHJvbGxlclxyXG4gICAgICAgIHRoaXMubV9jYW1lcmEgPSBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhbWVyYVN5c3RlbVxyXG4gICAgICAgIHRoaXMubGFzdFpvb20gPSB0aGlzLm1fY2FtZXJhLmNhbWVyYUZPVlxyXG4gICAgICAgIGxldCB0ID0gbmV3IFRyYW5zZm9ybSgpXHJcbiAgICAgICAgdC5yb3RhdGlvbiA9IHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0ucm90YXRpb25cclxuICAgICAgICB0LnNjYWxlID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybS5zY2FsZVxyXG4gICAgICAgIHQubG9jYXRpb24gPSBuZXcgVmVjdG9yKDAsIDAsIEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuY2Fwc3VsZUhhbGZIZWlnaHQgKiAyKS5hZGQodGhpcy5tX2N1cnJlbnRPZmZzZXQpXHJcbiAgICAgICAgdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybSA9IHRcclxuICAgICAgICB0aGlzLm1fc2lnaHRab29tID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEubWVjaGluaWNhbEFpbUZPVlxyXG4gICAgICAgIHRoaXMubV9vcmlnaW5ab29tID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEud2Fpc3RBaW1GT1ZcclxuICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmZpZWxkT2ZWaWV3ID0gdGhpcy5tX3NpZ2h0Wm9vbVxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IHRydWVcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmd1biA9IHRoaXMuZ3VuXHJcbiAgICB9XHJcbiAgICBJbnB1dFJlY29pbChfcmVjb2lsIDogV2VhcG9uUmVjb2lsQ2xzKXtcclxuICAgICAgICB0aGlzLm1fYmFja1RpbWUgPSB0aGlzLkdldEJhY2tUaW1lKClcclxuICAgICAgICBsZXQgdmVydCA9IF9yZWNvaWwuR2V0VmVydGljYWwoKSAqIE1hdGguUEkgLyAxODBcclxuICAgICAgICB0aGlzLm1fYmFja1RvdGFsID0gX3JlY29pbC5fY29uZmlnRGF0YS5iYWNrVG90YWwgKiB2ZXJ0XHJcbiAgICAgICAgdGhpcy52aWJyYXRpb25BbXBsID0gX3JlY29pbC5HZXRTZWxmU3BpblJhbmdlKCkgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgdGhpcy5tX2p1bXBUb3RhbCA9IG5ldyBWZWN0b3IyKF9yZWNvaWwuR2V0SG9yaXpvbnRhbCgpICogTWF0aC5QSSAvIDE4MCwgdmVydClcclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuc2VsZlNwaW5Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLnJlY292ZXJDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmp1bXBGT1ZDb250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgQ3JvdWNoKCl7XHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIpXHJcbiAgICB9XHJcbiAgICBNZWNoYW5pY2FsQWltU3RhcnQoKXtcclxuICAgICAgICB0aGlzLkFpbWluZ0lzT3ZlciA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5haW1Db250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgR2V0QXNzaXN0QWltRGlzKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1faXNab29tSW4gPyB0aGlzLmd1bi5fY29uZmlnRGF0YS5hc3Npc3RBaW1EaXMxIDogdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltRGlzMFxyXG4gICAgfVxyXG4gICAgTWVjaGFuaWNhbEFpbVN0b3AoKXtcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgR2V0QWltVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5haW1UaW1lICsgdGhpcy5tX2FpbVRpbWVSYXRlU2NhbGVcclxuICAgIH1cclxuICAgIEdldEJhY2tUaW1lKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmd1bi5fcmVjb2lsLkdldFNoYWtlVGltZSgpXHJcbiAgICB9XHJcbiAgICBPblVuRXF1aXBXZWFwb24oX3VzZVN0YXRlQmVmb3JlIDogYm9vbGVhbil7XHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5maWVsZE9mVmlldyA9IHRoaXMubGFzdFpvb21cclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmd1biA9IG51bGxcclxuICAgICAgICB0aGlzLkVuZEFsbCgpXHJcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2VcclxuICAgIH1cclxuICAgIEdldEVuZW1pZXMoKTpBcnJheTxDaGFyYWN0ZXI+e1xyXG4gICAgICAgIGxldCByZXMgPSBuZXcgQXJyYXk8Q2hhcmFjdGVyPigpXHJcbiAgICAgICAgR2FtZXBsYXkuZ2V0QWxsUGxheWVycygpLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgSXNWaXNpYmxlKF9lbmVteTpDaGFyYWN0ZXIpOmJvb2xlYW57XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuR2V0Q2FtZXJhUG9zKClcclxuICAgICAgICBsZXQgcmVzID0gdHJ1ZVxyXG4gICAgICAgIGxldCByYXlDYXN0SGVhZCA9IEdhbWVwbGF5LmxpbmVUcmFjZShwb3MsIF9lbmVteS5nZXRXb3JsZExvY2F0aW9uKCkuYWRkKFZlY3Rvci51cC5tdWx0aXBseShfZW5lbXkuY2Fwc3VsZUhhbGZIZWlnaHQpKSlcclxuICAgICAgICByYXlDYXN0SGVhZC5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICBpZighKHYuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIENoYXJhY3RlcikgfHwgKHYuZ2FtZU9iamVjdCAhPSBfZW5lbXkgJiYgKHYuZ2FtZU9iamVjdCkgIT0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlcikpe1xyXG4gICAgICAgICAgICAgICAgcmVzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcbiAgICBFbmRBbGwoKSB7XHJcbiAgICAgICAgaWYodGhpcy5tX2lzWm9vbUluKXtcclxuICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5qdW1wRk9WQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuanVtcEZPVkNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuanVtcENvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5yZWNvdmVyQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5hc3Npc3RBaW1Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5kZWFpbUNvbnRyb2xsZXIpXHJcbiAgICAgICAgdGhpcy5haW1Db250cm9sbGVyPy5TdG9wRnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyKVxyXG5cclxuICAgIH1cclxuICAgIFJlZnJlc2hTZXR0aW5ncygpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFJlZnJlc2hTY2FsZXMoKSB7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLm1fanVtcEZvdlJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tX2FpbVRpbWVSYXRlVGFibGUuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICB9XHJcbiAgICBTZXRQcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZGVsdGFUaGV0YSArPSB0aGlzLmRlbHRhVGhldGFcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmRlbHRhUGh5ICs9IHRoaXMuZGVsdGFQaHlcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmdhbW1hID0gdGhpcy5tX2dhbW1hXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5maWVsZE9mVmlldyA9IHRoaXMubV9zdXBwb3NlZFpvb20gKyB0aGlzLm1fZGVsdGFGT1ZcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZVxyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2Uub2Zmc2V0ID0gdGhpcy5tX2N1cnJlbnRPZmZzZXRcclxuICAgIH1cclxuICAgIEdldFNpZ2h0Rk9WKCk6IG51bWJlciB7XHJcbiAgICAgICAgLy9cdTgyRTVcdTkxNERcdTRFRjZcdTRFMkRcdTY3MDlcdTRFMDBcdTRFMkFcdTkxNERcdTRFRjZcdThCQkVcdTdGNkVcdTRFODZcdTU5MjdcdTRFOEVcdTk2RjZcdTc2ODRcdTVGMDBcdTk1NUNGT1ZcdTUyMTlcdTc2RjRcdTYzQTVcdThGRDRcdTU2REVcdTZCNjRcdTY1NzBcdTUwM0MsXHU1NDI2XHU1MjE5XHU4RkQ0XHU1NkRFXHU2N0FBXHU2OEIwXHU4MUVBXHU4RUFCXHU3Njg0Rk9WXHJcbiAgICAgICAgbGV0IGZvdiA9IDBcclxuICAgICAgICB0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICBpZiAodi5jb25maWdEYXRhLmFpbUZvdlJhdGUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3YgPSB2LmNvbmZpZ0RhdGEuYWltRm92UmF0ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChmb3YgIT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm92XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmd1bi5fY29uZmlnRGF0YS5tZWNoaW5pY2FsQWltRk9WXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgSXNSaWdodCh0YXJnZXRQb3M6IFZlY3Rvcik6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kb3QoVmVjdG9yLmNyb3NzKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSwgdGFyZ2V0UG9zLnN1YnRyYWN0KHRoaXMuR2V0Q2FtZXJhUG9zKCkpKSA+IDBcclxuICAgIH1cclxuICAgIElzVXAodGFyZ2V0UG9zOiBWZWN0b3IpOmJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZWxhdGl2ZVBvcyA9IHRhcmdldFBvcy5zdWJ0cmFjdCh0aGlzLkdldENhbWVyYVBvcygpKVxyXG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4ocmVsYXRpdmVQb3MueSAvIG5ldyBWZWN0b3IyKHJlbGF0aXZlUG9zLngsIHJlbGF0aXZlUG9zLnopLm1hZ25pdHVkZSkgPiAoOTAgLSBWZWN0b3IuYW5nbGUodGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLCBWZWN0b3IudXApICogTWF0aC5QSSAvIDE4MClcclxuICAgIH1cclxuICAgIERyYWdTdGFydCgpe1xyXG4gICAgICAgIHRoaXMubV9sYXN0TW91c2VQb3MgPSBVSS5nZXRNb3VzZVBvc2l0aW9uT25WaWV3cG9ydCgpXHJcbiAgICB9XHJcbiAgICBHZXRDYW1lcmFQb3MoKTpWZWN0b3Ige1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLm1fY2FtZXJhLmNhbWVyYVN5c3RlbVJlbGF0aXZlVHJhbnNmb3JtLmxvY2F0aW9uXHJcbiAgICAgICAgcmV0dXJuIEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpLmFkZChXZWFwb25Ub29sLlJvdGF0ZVZlY3RvcihvZmZzZXQsIFZlY3Rvci51cCwgR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5nZXRXb3JsZFJvdGF0aW9uKCkueikpXHJcbiAgICB9XHJcbiAgICBHZXRKdW1wRk9WKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YS5qdW1wRk9WICogdGhpcy5tX2p1bXBGb3ZSYXRlU2NhbGUgKiBcclxuICAgICAgICBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhbWVyYVN5c3RlbS5jYW1lcmFGT1YgLyB0aGlzLm1fb3JpZ2luWm9vbVxyXG4gICAgfVxyXG4gICAgR2V0QWltUG9zKGVuZW15OkNoYXJhY3Rlcik6IFZlY3RvciB7XHJcbiAgICAgICAgbGV0IHBvczE6VmVjdG9yXHJcbiAgICAgICAgbGV0IHBvczIgOlZlY3RvclxyXG4gICAgICAgIHBvczEgPSBlbmVteS5nZXRBcHBlYXJhbmNlPEh1bWFub2lkVjI+KCkuZ2V0U2xvdFdvcmxkUG9zaXRpb24oU2xvdFR5cGUuSGVhZClcclxuICAgICAgICBwb3MyID0gZW5lbXkuZ2V0QXBwZWFyYW5jZTxIdW1hbm9pZFYyPigpLmdldFNsb3RXb3JsZFBvc2l0aW9uKFNsb3RUeXBlLkJ1dHRvY2tzKVxyXG4gICAgICAgIHJldHVybiBwb3MxLm11bHRpcGx5KDIpLmFkZChwb3MyKS5kaXZpZGUoMylcclxuICAgIH1cclxuICAgIEdldFRhcmdldCgpOltWZWN0b3IsIGJvb2xlYW5de1xyXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0Q2FsbFRpbWUgJiYgVGltZVV0aWwuZWxhcHNlZFRpbWUoKSAtIHRoaXMudGFyZ2V0Q2FsbFRpbWUgPCAwLjAxKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0UmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkaXIgPSB0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCkubm9ybWFsaXplZFxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLkdldENhbWVyYVBvcygpXHJcbiAgICAgICAgbGV0IHJheWNhc3RBbGwgPSBHYW1lcGxheS5saW5lVHJhY2UocG9zLmFkZChkaXIubXVsdGlwbHkoMC41KSksIHBvcy5hZGQoZGlyLm11bHRpcGx5KHRoaXMuZ3VuLl9jb25maWdEYXRhLmRpc3RhbmNlKSkpXHJcbiAgICAgICAgdGhpcy5haW1FbmVteSA9IG51bGxcclxuICAgICAgICBpZih0aGlzLmVuYWJsZUFzc2lzdEFpbSl7XHJcbiAgICAgICAgICAgIGxldCBtaW5EaXMgPSB0aGlzLkdldEFzc2lzdEFpbURpcygpXHJcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGU6Q2hhcmFjdGVyXHJcbiAgICAgICAgICAgIHRoaXMuR2V0RW5lbWllcygpLmZvckVhY2goKHYpPT57XHJcbiAgICAgICAgICAgICAgICAvL1x1NjI3RVx1NTIzMFx1NjcwMFx1OEZEMVx1NzY4NFx1NEVCQVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHYpXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RGlzID0gdGFyZ2V0UG9zLnN1YnRyYWN0KHBvcykubWFnbml0dWRlXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBWZWN0b3IuYW5nbGUoZGlyLCB0YXJnZXRQb3Muc3VidHJhY3QocG9zKSlcclxuICAgICAgICAgICAgICAgIGxldCBhaW1EaXMgPSB0YXJnZXREaXMgKiBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApXHJcbiAgICAgICAgICAgICAgICBpZihhbmdsZSA8IDMwICYmIGFpbURpcyA8PSBtaW5EaXMgJiYgdGhpcy5Jc1Zpc2libGUodikpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZSA9IHZcclxuICAgICAgICAgICAgICAgICAgICBtaW5EaXMgPSBhaW1EaXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5haW1FbmVteSA9IGNhbmRpZGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluYWxQb2ludFxyXG4gICAgICAgIGxldCBpXHJcbiAgICAgICAgcmF5Y2FzdEFsbC5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICBpZighKHYgaW5zdGFuY2VvZiBDaGFyYWN0ZXIpKXtcclxuICAgICAgICAgICAgICAgIGZpbmFsUG9pbnQgPSB2LmltcGFjdFBvaW50XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoZmluYWxQb2ludCl7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UmV0dXJuID0gW2ZpbmFsUG9pbnQsIHRydWVdXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0UmV0dXJuID0gW2RpciwgZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Q2FsbFRpbWUgPSBUaW1lVXRpbC5lbGFwc2VkVGltZSgpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0UmV0dXJuXHJcbiAgICB9XHJcbiAgICBHZXRTZW5zaXRpdml0eSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2NhbWVyYS5jYW1lcmFGT1YgLyA2MCAqIHRoaXMubV9zZW5zaXRpdml0eVxyXG4gICAgfVxyXG4gICAgRHJhZ0hvbGQoKXtcclxuICAgICAgICBsZXQgdGVtcCA9IFVJLmdldE1vdXNlUG9zaXRpb25PblZpZXdwb3J0KClcclxuICAgICAgICBpZighdGhpcy5tX2xhc3RNb3VzZVBvcyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlbHRhUGh5ICs9ICh0ZW1wLnggLSB0aGlzLm1fbGFzdE1vdXNlUG9zLngpICogdGhpcy5zY3JlZW5TaXplLnggKiB0aGlzLkdldFNlbnNpdGl2aXR5KClcclxuICAgICAgICB0aGlzLmRlbHRhVGhldGEgKz0gKHRlbXAueSAtIHRoaXMubV9sYXN0TW91c2VQb3MueSkgKiB0aGlzLnNjcmVlblNpemUueSAqIHRoaXMuR2V0U2Vuc2l0aXZpdHkoKVxyXG4gICAgICAgIHRoaXMubV9sYXN0TW91c2VQb3MgPSB0ZW1wXHJcbiAgICB9XHJcbiAgICBEcmFnRW5kKCk6dm9pZHtcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gbnVsbFxyXG4gICAgfVxyXG5cclxufSIsICJleHBvcnQgY2xhc3MgV2VhcG9uR1VJQ2xze1xyXG5cclxufSIsICJpbXBvcnQgeyBXZWFwb25BbW1vQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFtbW9CYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCI7XHJcbi8qKlx1NjdBQVx1NjhCMFx1NkEyMVx1NTc1N1x1RkYxQVx1NUYzOVx1NTkzOVx1NTdGQVx1N0M3QiAqL1xyXG5leHBvcnQgY2xhc3MgV2VhcG9uTWFnYXppbmVDbHN7XHJcbiAgICBwcml2YXRlIHdlYXBvbiA6IFdlYXBvbkJhc2VDbHNcclxuICAgIHByaXZhdGUgaWQgOiBudW1iZXJcclxuICAgIHByaXZhdGUgbGVmdEFtbW8gOiBudW1iZXJcclxuICAgIHByaXZhdGUgYW1tb0ludmVudG9yeSA6IFdlYXBvbkFtbW9CYXNlQ2xzXHJcbiAgICBwcml2YXRlIGxvYWRQZXJjZW50YWdlIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGlzRnVsbHlMb2FkZWQgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgaXNFbXB0eUxvYWRlZCA6IGJvb2xlYW5cclxuICAgIHB1YmxpYyBjYW5Mb2FkZWQgOiBib29sZWFuXHJcbiAgICBwcml2YXRlIGxvYWRUaW1lUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBsb2FkVGltZVJhdGVTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBtYXhBbW1vUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBudW1iZXI+O1xyXG4gICAgcHJpdmF0ZSBtYXhBbW1vUmF0ZVNjYWxlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHByZU1heEFtbW8gOiBudW1iZXJcclxuXHJcbiAgICBwcml2YXRlIF9jb25maWdEYXRhOiBHYW1lQ29uc3QuV2VhcG9uTWFnYXppbmVDb25maWdEYXRhXHJcblxyXG4gICAgY29uc3RydWN0b3Iod2VhcG9uIDogV2VhcG9uQmFzZUNscyl7XHJcbiAgICAgICAgV2VhcG9uVG9vbC5Jbml0V2VhcG9uTWFnYXppbmVDb25maWcodGhpcylcclxuICAgICAgICAvL3RoaXMubGVmdEFtbW8gPSBfZ3VuLmd1bi5BbW1vTGVmdC5WYWx1ZVxyXG4gICAgICAgIGxldCBtb3ZlQW1tbyA9IHRoaXMubGVmdEFtbW8gLSB0aGlzLl9jb25maWdEYXRhLm1heE51bVxyXG4gICAgICAgIGlmIChtb3ZlQW1tbyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyA9IHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW92ZUFtbW8gPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuVXBkYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFVwZGF0ZUZ1bGx5TG9hZGVkKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5pc0Z1bGx5TG9hZGVkID0gdGhpcy5sZWZ0QW1tbyA+PSB0aGlzLkdldE1heEFtbW8oKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRnVsbHlMb2FkZWRcclxuICAgIH1cclxuICAgIHByaXZhdGUgVXBkYXRlRW1wdHlMb2FkZWQoKTpib29sZWFue1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eUxvYWRlZCA9IHRoaXMubGVmdEFtbW8gPD0gMCBcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5TG9hZGVkXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVXBkYXRlQ2FuTG9hZCgpOmJvb2xlYW57XHJcbiAgICAgICAgdGhpcy5jYW5Mb2FkZWQgPSAhdGhpcy5pc0Z1bGx5TG9hZGVkICYmIHRoaXMuYW1tb0ludmVudG9yeSAmJiB0aGlzLmFtbW9JbnZlbnRvcnkuY291bnQgPiAwXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuTG9hZGVkXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVXBkYXRlTG9hZFBlcmNlbnRhZ2UoKTpudW1iZXJ7XHJcbiAgICAgICAgdGhpcy5sb2FkUGVyY2VudGFnZSA9IE1hdGguZmxvb3IodGhpcy5sZWZ0QW1tbyAvIHRoaXMuR2V0TWF4QW1tbygpICogMTAwKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRQZXJjZW50YWdlXHJcbiAgICB9XHJcbiAgICBDb25zdW1lKCk6RnVuY3Rpb257XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGVmdEFtbW8gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRBbW1vIC09IDFcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIExvYWRPbmVCdWxsZXQoKTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuY2FuTG9hZGVkKXtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyArPSAxXHJcbiAgICAgICAgICAgIC8vc2VsZi5tX2FtbW9JbnZlbnRvcnk6UGxheWVyQ29uc3VtZUFtbW8oMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTG9hZE1hZ2F6aW5lKCk6dm9pZHtcclxuICAgICAgICBpZiAodGhpcy5jYW5Mb2FkZWQpIHtcclxuICAgICAgICAgICAgbGV0IGFkZGl0aW9uID0gdGhpcy5HZXRNYXhBbW1vKCkgLSB0aGlzLmxlZnRBbW1vXHJcbiAgICAgICAgICAgIC8vYWRkaXRpb24gPSBzZWxmLm1fYW1tb0ludmVudG9yeTpQbGF5ZXJDb25zdW1lQW1tbyhhZGRpdGlvbilcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyArPSBhZGRpdGlvblxyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUZ1bGx5TG9hZGVkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTUzNzhcdThGN0QvXHU2NkY0XHU2MzYyXHU1NDBFLFx1OTcwMFx1ODk4MVx1NUMwNlx1NjdBQVx1NjhCMFx1NzY4NFx1NUI1MFx1NUYzOVx1NjZGNFx1NjVCMFx1NTcyOFx1OTE0RFx1NEVGNlx1NzY4NFx1ODI4Mlx1NzBCOVx1NEUwQiAqL1xyXG4gICAgUmVjb3JkaW5nQnVsbGV0c0xlZnQoX2lzQmFja1RvQnVsbGV0SW52ZW50b3J5OmJvb2xlYW4pe1xyXG4gICAgICAgIGlmKF9pc0JhY2tUb0J1bGxldEludmVudG9yeSAmJiB0aGlzLmFtbW9JbnZlbnRvcnkpe1xyXG4gICAgICAgICAgICB0aGlzLmFtbW9JbnZlbnRvcnkuY291bnQgKz0gdGhpcy5sZWZ0QW1tb1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRBbW1vID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLnByZU1heEFtbW8gPiB0aGlzLkdldE1heEFtbW8oKSl7XHJcbiAgICAgICAgICAgIC8qKlx1OEZEOVx1NEUwMFx1NUUyN1x1NTM3OFx1NEUwQlx1NEU4Nlx1NjI2OVx1NUJCOVx1NUYzOVx1NTkzOSxcdTk3MDBcdTg5ODFcdTVGM0FcdTg4NENcdTUxQ0ZcdTVDMTFcdTVGNTNcdTUyNERcdTc2ODRcdTVCNTBcdTVGMzkgKi9cclxuICAgICAgICAgICAgaWYodGhpcy5HZXRNYXhBbW1vKCkgPCB0aGlzLmxlZnRBbW1vKXtcclxuICAgICAgICAgICAgICAgIGxldCBkZWx0YUFtbW8gPSB0aGlzLmxlZnRBbW1vIC0gdGhpcy5HZXRNYXhBbW1vKClcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gLT0gZGVsdGFBbW1vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtbW9JbnZlbnRvcnkuY291bnQgKz0gZGVsdGFBbW1vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVNYXhBbW1vID0gdGhpcy5HZXRNYXhBbW1vKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUZ1bGx5TG9hZGVkKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUVtcHR5TG9hZGVkKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUNhbkxvYWQoKVxyXG4gICAgICAgIHRoaXMuVXBkYXRlTG9hZFBlcmNlbnRhZ2UoKVxyXG4gICAgICAgIC8qKlx1NUMwNlx1NUY1M1x1NTI0RFx1NzY4NFx1NTI2OVx1NEY1OVx1NUI1MFx1NUYzOVx1NjZGNFx1NjVCMFx1NTIzMFx1NTczQVx1NjY2Rlx1NEUyRFx1NzY4NFx1ODI4Mlx1NzBCOVx1NEUwQSAqL1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRUaW1lUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLm1heEFtbW9SYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMud2VhcG9uLl93ZWFwb25BY2Nlc3NvcnlMaXN0LmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVUYWJsZS5zZXQoaywgdi5jb25maWdEYXRhLm1hZ2F6aW5lTG9hZFRpbWVSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLm1heEFtbW9SYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5tYXhBbW1vUmF0ZS5nZXQodGhpcy53ZWFwb24uaWQpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNjYWxlcygpXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFJlZnJlc2hTY2FsZXMoKTp2b2lke1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVUYWJsZS5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLm1heEFtbW9SYXRlVGFibGUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubWF4QW1tb1JhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldExvYWRUaW1lKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLmxvYWRUaW1lICogdGhpcy5sb2FkVGltZVJhdGVTY2FsZVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBHZXRNYXhBbW1vKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhBbW1vUmF0ZVNjYWxlICsgdGhpcy5fY29uZmlnRGF0YS5tYXhOdW0gPiAwID8gdGhpcy5tYXhBbW1vUmF0ZVNjYWxlICsgdGhpcy5fY29uZmlnRGF0YS5tYXhOdW0gOiAxXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCJcclxudHlwZSBSYXRlU3RydWN0ID0ge1xyXG4gICAgTW92ZTpudW1iZXJcclxuICAgIENyb3VjaDpudW1iZXJcclxufVxyXG5leHBvcnQgY2xhc3MgV2VhcG9uUmVjb2lsQ2xze1xyXG4gICAgcHJpdmF0ZSBpZCA6IG51bWJlclxyXG4gICAgZ3VuIDogV2VhcG9uQmFzZUNsc1xyXG4gICAgcHJpdmF0ZSBfdmVydGljYWxTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfaG9yaXpvbnRhbFNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9taW5FcnJvclNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9tYXhFcnJvclNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9yZWNvdmVyUmF0ZVNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9zZWxmU3BpblJhbmdlUmF0ZVNjYWxlOiBudW1iZXIgPSAxXHJcbiAgICBcclxuICAgIHByaXZhdGUgX3Vuc3RhYmlsaXR5OiBudW1iZXIgPSAwXHJcbiAgICBfY3VycmVudEVycm9yOiBudW1iZXIgPSAwXHJcblxyXG4gICAgcHJpdmF0ZSBfaG9yaXpvbnRhbFJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfbWluRXJyb3JSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF9tYXhFcnJvclJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuICAgIHByaXZhdGUgX3JlY292ZXJSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF9zZWxmU3BpblJhbmdlUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG5cclxuICAgIHByaXZhdGUgX2xhc3RQb3MgOiBWZWN0b3JcclxuICAgIF9jb25maWdEYXRhIDogR2FtZUNvbnN0LldlYXBvblJlY29pbENvbmZpZ0RhdGFcclxuXHJcbiAgICBkaWZGdW5jdGlvbihfdW5zdGFiaWxpdHk6bnVtYmVyKSB7XHJcbiAgICAgICAgX3Vuc3RhYmlsaXR5ID0gX3Vuc3RhYmlsaXR5IHx8IHRoaXMuX3Vuc3RhYmlsaXR5XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuZGlmZnVzZUZ1bmN0aW9uID09PSBHYW1lQ29uc3QuRGlmZnVzZUZ1bmN0aW9uRW51bS5MaW5lYXIpIHtcclxuICAgICAgICAgICAgLy8gTGluZWFyIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJldHVybiBfdW5zdGFiaWxpdHlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuZGlmZnVzZUZ1bmN0aW9uID09PSBHYW1lQ29uc3QuRGlmZnVzZUZ1bmN0aW9uRW51bS5TcXJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoX3Vuc3RhYmlsaXR5KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnRGF0YS5kaWZmdXNlRnVuY3Rpb24gPT09IEdhbWVDb25zdC5EaWZmdXNlRnVuY3Rpb25FbnVtLlNxdWFyZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3Vuc3RhYmlsaXR5ICogX3Vuc3RhYmlsaXR5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKF9kdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRGVjcmVhc2UgcmVjb2lsXHJcbiAgICAgICAgdGhpcy5fdW5zdGFiaWxpdHkgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgdGhpcy5fdW5zdGFiaWxpdHkgLSB0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VSZWNvdmVyUmF0ZSAqIF9kdCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgaW5mbHVlbmNlIGZhY3RvcnNcclxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVRhYmxlLmNsZWFyKClcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgTW92ZW1lbnQgYW5kIGp1bXBpbmdcclxuICAgICAgICBjb25zdCBjdXJQb3MgPSB0aGlzLmd1bi5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjdXJQb3Muc3VidHJhY3QodGhpcy5fbGFzdFBvcykubWFnbml0dWRlID4gMC41ICogX2R0IHx8XHJcbiAgICAgICAgICAgIHRoaXMuZ3VuLmNoYXJhY3Rlci5pc0p1bXBpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuc2V0KCdNb3ZlJywgdGhpcy5fY29uZmlnRGF0YS5qdW1wRXJyb3JTY2FsZSlcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuc2V0KCdNb3ZlJywgdGhpcy5fY29uZmlnRGF0YS5qdW1wRXJyb3JTY2FsZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5kZWxldGUoJ01vdmUnKVxyXG4gICAgICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5kZWxldGUoJ01vdmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sYXN0UG9zID0gY3VyUG9zXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGNyb3VjaGluZ1xyXG4gICAgICAgIGlmICh0aGlzLmd1bi5jaGFyYWN0ZXIuY3JvdWNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLnNldCgnQ3JvdWNoJywgdGhpcy5fY29uZmlnRGF0YS5jcm91Y2hFcnJvclNjYWxlKVxyXG4gICAgICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5zZXQoJ0Nyb3VjaCcsIHRoaXMuX2NvbmZpZ0RhdGEuY3JvdWNoRXJyb3JTY2FsZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5kZWxldGUoJ0Nyb3VjaCcpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLmRlbGV0ZSgnQ3JvdWNoJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZ3VuLl93ZWFwb25BY2Nlc3NvcnlMaXN0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ob3Jpem9udGFsUmF0ZVRhYmxlLnNldChrLCB2Lmhvcml6b250YWxKdW1wUmFuZ2VSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl92ZXJ0aWNhbFJhdGVUYWJsZS5zZXQoaywgdi52ZXJ0aWNhbEp1bXBBbmdsZVJhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLnNldChrLCB2Lm1pbkVycm9yUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuc2V0KGssIHYubWF4RXJyb3JSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVRhYmxlLnNldChrLCB2Lmd1blJlY292ZXJSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVRhYmxlLnNldChrLCB2LnNlbGZTcGluUmFuZ2VSYXRlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGVycm9yXHJcbiAgICAgICAgdGhpcy5ndW4uZXJyb3IgPSB0aGlzLkdldERpZmZ1c2UoX2R0KVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgaW5mbHVlbmNlIGZhY3RvciBtYWduaXR1ZGVzXHJcbiAgICAgICAgdGhpcy5SZWZyZXNoU2NhbGVzKClcclxuICAgIH1cclxuICAgIEdldFZlcnRpY2FsKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fY29uZmlnRGF0YS52ZXJ0aWNhbEp1bXBBbmdsZSArIHRoaXMuX2NvbmZpZ0RhdGEudmVydGljYWxKdW1wUmFuZ2UgKiBXZWFwb25Ub29sLkdhdXNzUmFuZG9tKCkpICogdGhpcy5fdmVydGljYWxTY2FsZVxyXG4gICAgfVxyXG4gICAgR2V0SG9yaXpvbnRhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3Jpem9udGFsU2NhbGUgKiB0aGlzLl9jb25maWdEYXRhLmhvcml6b250YWxKdW1wUmFuZ2UgKiBXZWFwb25Ub29sLkdhdXNzUmFuZG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0TWluRXJyb3IoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5taW5FcnJvciAqIHRoaXMuX21pbkVycm9yU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0TWF4RXJyb3IoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5tYXhFcnJvciAqIHRoaXMuX21heEVycm9yU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0U2hha2VUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEuZ3VuUmVjb2lsIC8gKHRoaXMuX2NvbmZpZ0RhdGEuZ3VuUmVjb3ZlclJhdGUgKiB0aGlzLl9yZWNvdmVyUmF0ZVNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRTZWxmU3BpblJhbmdlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEuc2VsZlNwaW5SYW5nZSAqIHRoaXMuX3NlbGZTcGluUmFuZ2VSYXRlU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgRmlyZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl91bnN0YWJpbGl0eSA9IE1hdGgubWluKDEuMCwgdGhpcy5fdW5zdGFiaWxpdHkgKyB0aGlzLl9jb25maWdEYXRhLmd1blJlY29pbCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0RGlmZnVzZShfZHQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHRvYmUgPSB0aGlzLkdldE1pbkVycm9yKCkgKyB0aGlzLmRpZkZ1bmN0aW9uKG51bGwpICogKHRoaXMuR2V0TWF4RXJyb3IoKSAtIHRoaXMuR2V0TWluRXJyb3IoKSlcclxuICAgICAgICB0aGlzLl9jdXJyZW50RXJyb3IgKz0gX2R0ICogMTAgKiAodG9iZSAtIHRoaXMuX2N1cnJlbnRFcnJvcilcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEVycm9yXHJcbiAgICB9XHJcbiAgICBHZXRTaGFrZUludGVuc2l0eSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5zaGFrZUludGVuc2l0eVxyXG4gICAgfVxyXG5cclxuICAgIFJlZnJlc2hTY2FsZXMoKSB7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX2hvcml6b250YWxTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl92ZXJ0aWNhbFNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX21pbkVycm9yU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fbWF4RXJyb3JTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX3JlY292ZXJSYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICB9XHJcbiAgICBcclxufSIsICJleHBvcnQgY2xhc3MgV2VhcG9uU291bmRDbHN7XHJcblxyXG59IiwgIlx1RkVGRlxyXG4vKipcclxuICogQVVUTyBHRU5FUkFURSBCWSBVSSBFRElUT1IuXHJcbiAqIFdBUk5JTkc6IERPIE5PVCBNT0RJRlkgVEhJUyBGSUxFLE1BWSBDQVVTRSBDT0RFIExPU1QuXHJcbiAqIEFVVEhPUjogXHU2MjY3XHU3QjE0XHU3RUNGXHU1RTc0XHJcbiAqIFVJOiBVSS9EZWZhdWx0VUkudWlcclxuICogVElNRTogMjAyMy4wOC4wNS0wMC4yOS4yOVxyXG4qL1xyXG5cclxuXHJcblxyXG5AVUkuVUlDYWxsT25seSgnVUkvRGVmYXVsdFVJLnVpJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFVJX0dlbmVyYXRlIGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0XHJcblxyXG4gXHJcblx0LyoqXHJcblx0KiBvblN0YXJ0IFx1NEU0Qlx1NTI0RFx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uQXdha2UoKSB7XHJcblx0fVxyXG5cdCBcclxufVxyXG4gIiwgIlx1RkVGRlxyXG4vKipcclxuICogQVVUTyBHRU5FUkFURSBCWSBVSSBFRElUT1IuXHJcbiAqIFdBUk5JTkc6IERPIE5PVCBNT0RJRlkgVEhJUyBGSUxFLE1BWSBDQVVTRSBDT0RFIExPU1QuXHJcbiAqIEFVVEhPUjogXHU2MjY3XHU3QjE0XHU3RUNGXHU1RTc0XHJcbiAqIFVJOiBVSS9Nb25zdEluZm9VSS51aVxyXG4gKiBUSU1FOiAyMDIzLjA4LjA1LTAwLjI5LjI5XHJcbiovXHJcblxyXG5cclxuXHJcbkBVSS5VSUNhbGxPbmx5KCdVSS9Nb25zdEluZm9VSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0SW5mb1VJX0dlbmVyYXRlIGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0XHJcblxyXG4gXHJcblx0LyoqXHJcblx0KiBvblN0YXJ0IFx1NEU0Qlx1NTI0RFx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uQXdha2UoKSB7XHJcblx0fVxyXG5cdCBcclxufVxyXG4gIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBLG9CQUFBQTtBQUFBO0FBQU8sSUFBVUE7QUFBQSxDQUFWLENBQVVBLGdCQUFWO0FBQ0ksTUFBSztBQUFMLElBQUtDLGlCQUFMO0FBQ0gsSUFBQUEsYUFBQSxzQkFBbUI7QUFDbkIsSUFB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QSxXQUNDLFVBQVUsWUFBWTtBQUN2QixpQkFBUyxTQUFTLEtBQUssWUFBWTtBQUNuQztBQUFBO0FBRUE7QUFBQTtBQUVSLFFBQUcsU0FBUyxHQUFFO0FBQ1YsVUFBSTtBQUNKLGFBQU8sY0FBYyxVQUFVLGlCQUFpQixpQkFBaUIsUUFBUSxjQUFjLFFBQVEsSUFBSSxPQUFPO0FBQUEsSUFHOUc7QUFBQSxFQUNKO0FBQUEsRUFDUSxnQkFBZ0I7QUFDcEIsUUFBSSxTQUFTO0FBQUEsRUFFakI7QUFJSjs7O0FNenBCQTtBQUFBO0FBQUE7QUFBQTtBQVlBLElBQXFCLHFCQUFyQixjQUFnRCxHQUFHLFdBQVc7QUFBQSxFQU9uRCxVQUFVO0FBQUEsRUFDcEI7QUFFRDtBQVZxQixxQkFBckI7QUFBQSxFQURDLEdBQUcsV0FBVyxpQkFBaUI7QUFBQSxHQUNYOzs7QUNackI7QUFBQTtBQUFBO0FBQUE7QUFZQSxJQUFxQix1QkFBckIsY0FBa0QsR0FBRyxXQUFXO0FBQUEsRUFPckQsVUFBVTtBQUFBLEVBQ3BCO0FBRUQ7QUFWcUIsdUJBQXJCO0FBQUEsRUFEQyxHQUFHLFdBQVcsbUJBQW1CO0FBQUEsR0FDYjs7O0E5Qm1CckIsZ0JBQTJCO0FBRXBCLElBQU0sY0FBYztBQUFBLEVBQ3RCLGlDQUFpQztBQUFBLEVBQ2pDLGlDQUFpQztBQUFBLEVBQ2pDLGlDQUFpQztBQUFBLEVBQ2pDLCtCQUErQjtBQUFBLEVBQy9CLHlCQUF5QjtBQUFBLEVBQ3pCLDBDQUEwQztBQUFBLEVBQzFDLDBDQUEwQztBQUFBLEVBQzFDLG9DQUFvQztBQUFBLEVBQ3BDLG1DQUFtQztBQUFBLEVBQ25DLHNDQUFzQztBQUFBLEVBQ3RDLDJDQUEyQztBQUFBLEVBQzNDLHlDQUF5QztBQUFBLEVBQ3pDLDJDQUEyQztBQUFBLEVBQzNDLDBCQUEwQjtBQUFBLEVBQzFCLDhCQUE4QjtBQUFBLEVBQzlCLDRCQUE0QjtBQUFBLEVBQzVCLGlDQUFpQztBQUFBLEVBQ2pDLDhCQUE4QjtBQUFBLEVBQzlCLHVDQUF1QztBQUFBLEVBQ3ZDLDZDQUE2QztBQUFBLEVBQzdDLHdDQUF3QztBQUFBLEVBQ3hDLHlDQUF5QztBQUFBLEVBQ3pDLG9DQUFvQztBQUFBLEVBQ3BDLHNDQUFzQztBQUFBLEVBQ3RDLG1DQUFtQztBQUFBLEVBQ25DLHdDQUF3QztBQUFBLEVBQ3hDLHNDQUFzQztBQUFBLEVBQ3RDLHFDQUFxQztBQUFBLEVBQ3JDLGlDQUFpQztBQUFBLEVBQ2pDLDhDQUE4QztBQUFBLEVBQzlDLGdEQUFnRDtBQUFBLEVBQ2hELFNBQVM7QUFDZDsiLAogICJuYW1lcyI6IFsiRXZlbnRDb25zdCIsICJDbGllbnRFdmVudCIsICJTZXJ2ZXJFdmVudCIsICJFdmVudENvbnN0IiwgIldlYXBvblRvb2wiLCAiRXZlbnRDb25zdCJdCn0K
