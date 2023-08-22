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
        player.character.cameraSystem.switchCameraMode(Gameplay.CameraMode.Default);
        player.character.cameraSystem.cameraRelativeTransform.rotation = Rotation.zero;
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
  deltaTheta = 0;
  gamma = 0;
  distance;
  deltaPhy = 0;
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
      this.m_camera.transform.rotate(Vector.up, this.deltaPhy);
    }
    if (this.deltaTheta != 0) {
      this.m_camera.transform.rotate(Vector.right, this.deltaTheta);
    }
    if (this.distance) {
      this.m_camera.targetArmLength = this.distance;
    }
    if (this.gamma != 0) {
      this.m_camera.transform.rotate(Vector.forward, this.gamma);
    }
    if (this.fieldOfView != this.m_camera.cameraFOV) {
      this.m_camera.cameraFOV = this.fieldOfView;
    }
    this.SetOffset();
    this.ClearData();
  }
  ClearData() {
    this.deltaPhy = 0;
    this.deltaTheta = 0;
    this.gamma = 0;
    this.distance = null;
    this.fieldOfView = this.m_camera.cameraFOV;
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
      if (!(v.gameObject instanceof Gameplay.Character) || v.gameObject != _enemy && v.gameObject != Gameplay.getCurrentPlayer().character) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0dhbWVDb25zdC50cyIsICJidWlsZC50cyIsICI8c3RkaW4+IiwgIkphdmFTY3JpcHRzL0NsaWVudC9DbGllbnRCYXNlLnRzIiwgIkphdmFTY3JpcHRzL0dhbWVDb25zdC9FdmVudENvbnN0LnRzIiwgIkphdmFTY3JpcHRzL1BsYXllckd1bk1nci50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJDbGllbnQudHMiLCAiSmF2YVNjcmlwdHMvTW9kdWxlcy9QbGF5ZXIvUGxheWVyRGF0YS50cyIsICJKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXIudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL0dhbWVDb25maWcudHMiLCAiSmF2YVNjcmlwdHMvQ29uZmlnL01vbnN0ZXJzLnRzIiwgIkphdmFTY3JpcHRzL0RlZmF1bHRVSS50cyIsICJKYXZhU2NyaXB0cy9FbnRpdHkvTW9uc3Rlci9Nb25zdGVyQmFzZS50cyIsICJKYXZhU2NyaXB0cy9GYWN0b3J5L0ZhY19JbnRlcmFjdE9iamVjdC50cyIsICJKYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uLnRzIiwgIkphdmFTY3JpcHRzL1BsYXllckF0dHIudHMiLCAiSmF2YVNjcmlwdHMvUGxheWVyQmVoYXZpb3IudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXIudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvblRvb2wudHMiLCAiSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwudHMiLCAiSmF2YVNjcmlwdHMvU2VydmVyL1NlcnZlckJhc2UudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMudHMiLCAiSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscy50cyIsICJKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzLnRzIiwgIkphdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscy50cyIsICJKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUudHMiLCAiSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImRlY2xhcmUgbmFtZXNwYWNlIEdhbWVDb25zdHtcclxuICAgIGV4cG9ydCBlbnVtIExvY2FsV2VhcG9uRXZlbnQge1xyXG4gICAgICAgIFBpY2tXZWFwb24gPSAnUGlja1dlYXBvbicsXHJcbiAgICAgICAgRHJhd1dlYXBvbiA9ICdEcmF3V2VhcG9uJyxcclxuICAgICAgICBXaXRoRHJhd1dlYXBvbiA9ICdXaXRoRHJhd1dlYXBvbicsXHJcbiAgICAgICAgTWFnYXppbmVMb2FkU3RhcnRlZCA9ICdNYWdhemluZUxvYWRTdGFydGVkJyxcclxuICAgICAgICBGdWxseUxvYWRlZCA9ICdGdWxseUxvYWRlZCcsXHJcbiAgICAgICAgQnVsbGV0TG9hZFN0YXJ0ZWQgPSAnQnVsbGV0TG9hZFN0YXJ0ZWQnLFxyXG4gICAgICAgIEJ1bGxldExvYWRlZCA9ICdCdWxsZXRMb2FkZWQnLFxyXG4gICAgICAgIFJlbG9hZEZpbmlzaGVkID0gJ1JlbG9hZEZpbmlzaGVkJyxcclxuICAgICAgICBQdW1wU3RhcnRlZCA9ICdQdW1wU3RhcnRlZCcsXHJcbiAgICAgICAgUHVtcGVkID0gJ1B1bXBlZCcsXHJcbiAgICAgICAgRmlyZWQgPSAnRmlyZWQnLFxyXG4gICAgICAgIEVtcHR5RmlyZSA9ICdFbXB0eUZpcmUnLFxyXG4gICAgICAgIEZpcmVTdGFydGVkID0gJ0ZpcmVTdGFydGVkJyxcclxuICAgICAgICBGaXJlU3RvcHBlZCA9ICdGaXJlU3RvcHBlZCcsXHJcbiAgICAgICAgU3VjY2Vzc2Z1bGx5SGl0ID0gJ1N1Y2Nlc3NmdWxseUhpdCcsXHJcbiAgICAgICAgU3VjY2Vzc2Z1bGx5SGl0VGFyZ2V0ID0gJ1N1Y2Nlc3NmdWxseUhpdFRhcmdldCcsXHJcbiAgICAgICAgQWltSW4gPSAnQWltSW4nLFxyXG4gICAgICAgIEFpbU91dCA9ICdBaW1PdXQnLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gR3VuTW9kZUVudW0ge1xyXG4gICAgICAgIFNuaXBlclJpZmxlID0gMSwgXHJcbiAgICAgICAgQXNzYXVsdFJpZmxlID0gMiwgXHJcbiAgICAgICAgU3ViTWFjaGluZUd1biA9IDMsXHJcbiAgICAgICAgU2hvdEd1biA9IDQsIFxyXG4gICAgICAgIFBpc3RvbCA9IDUsIFxyXG4gICAgICAgIE1lbGVlV2VhcG9uID0gNiwgXHJcbiAgICAgICAgVGhyb3duV2VhcG9uID0gNywgXHJcbiAgICAgICAgUm9ja2V0TGF1bmNoZXIgPSA4LCBcclxuICAgICAgICBPdGhlciA9IDksIFxyXG4gICAgICAgIFRyYWlsaW5nR3VuID0gMTBcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIEhpdFBhcnRFbnVte1xyXG4gICAgICAgIE5vbmUgPSAxMCxcclxuICAgICAgICBIZWFkID0gMSxcclxuICAgICAgICBCb2R5ID0gMixcclxuICAgICAgICBMaW1iID0gMyxcclxuICAgICAgICBGb3J0ID0gNFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gRmlyZU1vZGVFbnVte1xyXG4gICAgICAgIEF1dG8gPSAxLCBcclxuICAgICAgICBSYXBpZGx5XzEgPSAyLCBcclxuICAgICAgICBSYXBpZGx5XzIgPSAzLCBcclxuICAgICAgICBTaW5nbGUgPSA0IFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gRGlmZnVzZUZ1bmN0aW9uRW51bXtcclxuICAgICAgICBMaW5lYXIgPSAxLFxyXG4gICAgICAgIFNxcnQgPSAyLFxyXG4gICAgICAgIFNxdWFyZSA9IDNcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIENhbkJlRXF1aXBQb3NpdGlvbkVudW17XHJcbiAgICAgICAgTWFpbk9yRGVwdXR5ID0gMSxcclxuICAgICAgICBNaW5pID0gMixcclxuICAgICAgICBQcm9wID0gM1xyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU5MTREXHU0RUY2XHU3QzdCXHU1NzhCICovXHJcbiAgICBleHBvcnQgZW51bSBXZWFwb25BY2Nlc3NvcnlUeXBlRW51bXtcclxuICAgICAgICBNdXp6bGUgPSAxLFxyXG4gICAgICAgIEdyaXAgPSAyLFxyXG4gICAgICAgIE1hZ2F6aW5lID0gMyxcclxuICAgICAgICBCdXR0ID0gNCxcclxuICAgICAgICBTaWdodCA9IDVcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIFVuaXRUeXBlRW51bXtcclxuICAgICAgICBXZWFwb24gPSAxLFxyXG4gICAgICAgIEFjY2Vzc29yeSA9IDIsXHJcbiAgICAgICAgQW1tbyA9IDNcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIE9iamVjdFR5cGVFbnVte1xyXG4gICAgICAgIEhvbGUgPSAxLFxyXG4gICAgICAgIEZpcmVFZmYgPSAyLFxyXG4gICAgICAgIEhpdEVmZiA9IDMsXHJcbiAgICAgICAgU2hlbGwgPSA0LFxyXG4gICAgICAgIFNvdW5kID0gNVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gUGxheWVyQWN0aW9uTW9kZUVudW17XHJcbiAgICAgICAgUnVuID0gMSwgXHJcbiAgICAgICAgUXVpY2tseVJ1biA9IDIsIFxyXG4gICAgICAgIEFpbVJ1biA9IDMsIFxyXG4gICAgICAgIENyb3VjaFJ1biA9IDQsIFxyXG4gICAgICAgIFF1aWNrbHlDcm91Y2hSdW4gPSA1LCBcclxuICAgICAgICBBaW1Dcm91Y2hSdW4gPSA2IFxyXG4gICAgfVxyXG59XHJcbmRlY2xhcmUgbmFtZXNwYWNlIEdhbWVDb25zdHtcclxuICAgIGV4cG9ydCB0eXBlIERhbWFnZUF0dGVudWF0aW9uID0ge1xyXG4gICAgICAgIERpc3RhbmNlOiBudW1iZXI7XHJcbiAgICAgICAgQXR0ZW51YXRpb246IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBCb25lV2VpZ2h0ID0ge1xyXG5cclxuICAgIH1cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbkhpdFJlc3VsdCA9IHtcclxuICAgICAgICBIaXRQb2ludCA6IFZlY3RvclxyXG4gICAgICAgIEhpdE9iamVjdCA6IEdhbWVPYmplY3RcclxuICAgICAgICBIaXROb3JtYWwgOiBWZWN0b3JcclxuICAgICAgICBIaXRQYXJ0IDpHYW1lQ29uc3QuSGl0UGFydEVudW1cclxuICAgICAgICBJc1RhcmdldCA6IGJvb2xlYW5cclxuICAgICAgICBEYW1hZ2UgOiBudW1iZXJcclxuICAgIH1cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1OTE0RFx1N0Y2RVx1OTc1OVx1NjAwMVx1NUM1RVx1NjAyNyAqL1xyXG4gICAgZXhwb3J0IHR5cGUgV2VhcG9uQ29uZmlnRGF0YSA9IHtcclxuICAgICAgICBuYW1lIDogc3RyaW5nXHJcbiAgICAgICAgZGVzIDogc3RyaW5nXHJcbiAgICAgICAgaWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIHNlbGVjdGVkSWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIG9yZGVyIDogbnVtYmVyXHJcbiAgICAgICAgZGVmYXVsdEFpbUltZyA6IHN0cmluZ1xyXG4gICAgICAgIHdhaXN0QWltTW9kZSA6IHN0cmluZ1xyXG4gICAgICAgIHJlY29pbElkIDogbnVtYmVyXHJcbiAgICAgICAgYW5pbWF0aW9uSWQgOiBudW1iZXJcclxuICAgICAgICBiYW5TaG9vdCA6IGJvb2xlYW5cclxuICAgICAgICBpc0hpdFNlbGYgOiBib29sZWFuXHJcbiAgICAgICAgaXNIaXRGcmllbmQgOiBib29sZWFuXHJcbiAgICAgICAgY2FuQmVFcXVpcEFjY2Vzc29yeSA6IG51bWJlcltdXHJcbiAgICAgICAgZGFtYWdlIDogbnVtYmVyXHJcbiAgICAgICAgbWFnYXppbmVVc2VkIDogbnVtYmVyXHJcbiAgICAgICAgaGl0SGVhZERhbWFnZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBoaXRCb2R5RGFtYWdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIGhpdExpbWJEYW1hZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZGlzdGFuY2UgOiBudW1iZXJcclxuICAgICAgICBidWxsZXROYW1lIDogc3RyaW5nXHJcbiAgICAgICAgYnVsbGV0SG9sZSA6IHN0cmluZ1xyXG4gICAgICAgIGJ1bGxldFNoZWxsIDogc3RyaW5nXHJcbiAgICAgICAgYXV0b1JlbG9hZCA6IGJvb2xlYW5cclxuICAgICAgICBtZWNoaW5pY2FsQWltRk9WIDogbnVtYmVyXHJcbiAgICAgICAgd2Fpc3RBaW1GT1YgOiBudW1iZXJcclxuICAgICAgICBzaG9vdFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgYnVsbGV0UGVyU2hvb3QgOiBudW1iZXJcclxuICAgICAgICBjb25zdW1lU2luZ2xlQnVsbGV0UGVyU2hvb3QgOiBudW1iZXJcclxuICAgICAgICBzaG9vdE1vZGUgOiBGaXJlTW9kZUVudW1bXVxyXG4gICAgICAgIGRlZmF1bHRTaG9vdE1vZGUgOiBGaXJlTW9kZUVudW1cclxuICAgICAgICByYXBpZGx5XzEgOiBudW1iZXJcclxuICAgICAgICByYXBpZGx5XzIgOiBudW1iZXJcclxuICAgICAgICBndW5Nb2RlIDogR3VuTW9kZUVudW1cclxuICAgICAgICBhY2N1cmF0ZUFpbSA6IGJvb2xlYW5cclxuICAgICAgICBjYW5CZUVxdWlwUG9zaXRpb24gOiBDYW5CZUVxdWlwUG9zaXRpb25FbnVtXHJcbiAgICAgICAgYWltVGltZSA6IG51bWJlclxyXG4gICAgICAgIHN0b3BBaW1UaW1lIDogbnVtYmVyXHJcbiAgICAgICAgYXNzaXN0QWltVGltZSA6IG51bWJlclxyXG4gICAgICAgIGFzc2lzdEFpbURpczAgOiBudW1iZXJcclxuICAgICAgICBhc3Npc3RBaW1EaXMxIDogbnVtYmVyXHJcbiAgICAgICAgYXNzaXN0QWltUmF0aW8gOiBudW1iZXJcclxuICAgICAgICByZWxvYWRXaXRoTWFnYXppbmVzIDogYm9vbGVhblxyXG4gICAgICAgIGNhbkludGVycnVwdEJ1bGxldExvYWQgOiBib29sZWFuXHJcbiAgICAgICAgaGl0RWZmZWN0IDogc3RyaW5nXHJcbiAgICAgICAgZmlyZUVmZmVjdCA6IHN0cmluZ1xyXG4gICAgICAgIGJ1bGxldFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgZGFtYWdlQXR0ZW51YXRpb24gOiBEYW1hZ2VBdHRlbnVhdGlvbltdXHJcbiAgICAgICAgZXhwbG9zaW9uRGFtYWdlQXR0ZW51YXRpb24gOiBEYW1hZ2VBdHRlbnVhdGlvbltdXHJcbiAgICAgICAgY2hhcmFjdGVyQW5pbWF0aW9uTW9kZSA6IG51bWJlclxyXG4gICAgICAgIHB1bXBBZnRlckZpbmFsTG9hZCA6IGJvb2xlYW5cclxuICAgICAgICBwdW1wQWZ0ZXJGaXJlIDogYm9vbGVhblxyXG4gICAgICAgIGJvbmVXZWlnaHQgOiBCb25lV2VpZ2h0XHJcbiAgICAgICAgZGFtYWdlUmVzcG9uc2VXYWl0VGltZSA6IG51bWJlclxyXG4gICAgICAgIGdyYXZpdHlTY2FsZSA6IG51bWJlclxyXG4gICAgICAgIGV4cGxvc2lvblJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgd2VpZ2h0IDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTVGMzlcdTU5MzlcdTkxNERcdTdGNkVcdTk3NTlcdTYwMDFcdTVDNUVcdTYwMjcgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbk1hZ2F6aW5lQ29uZmlnRGF0YSA9IHtcclxuICAgICAgICBtYXRjaEFtbW8gOiBudW1iZXJcclxuICAgICAgICBuYW1lIDogc3RyaW5nXHJcbiAgICAgICAgbWF4TnVtIDogbnVtYmVyXHJcbiAgICAgICAgbG9hZFRpbWUgOiBudW1iZXJcclxuICAgICAgICBhbW1vTmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9EZXMgOiBzdHJpbmdcclxuICAgICAgICBhbW1vSWNvbiA6IHN0cmluZ1xyXG4gICAgICAgIGFtbW9IaXRUZXh0dXJlIDogc3RyaW5nXHJcbiAgICAgICAgYW1tb01vZGVsIDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTkxNERcdTRFRjZcdTkxNERcdTdGNkVcdTk3NTlcdTYwMDFcdTVDNUVcdTYwMjcgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbkFjY2Vzc29yeUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIGRlcyA6IHN0cmluZ1xyXG4gICAgICAgIGljb24gOiBzdHJpbmdcclxuICAgICAgICBsb2NhdGlvbiA6IEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bVxyXG4gICAgICAgIG9yZGVyIDogbnVtYmVyXHJcbiAgICAgICAgbW9kZWwgOiBzdHJpbmdcclxuICAgICAgICBpc1NpbGVuY2VyIDogYm9vbGVhblxyXG4gICAgICAgIGFpbUZvdlJhdGUgOiBudW1iZXIgXHJcbiAgICAgICAgbWluRXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgbWF4RXJyb3JSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuUmVjb3ZlclJhdGUgOiBudW1iZXJcclxuICAgICAgICB2ZXJ0aWNhbEp1bXBBbmdsZVJhdGUgOiBudW1iZXJcclxuICAgICAgICBob3Jpem9udGFsSnVtcFJhbmdlUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIHNlbGZTcGluUmFuZ2VSYXRlIDogbnVtYmVyXHJcbiAgICAgICAganVtcEZvdlJhdGUgOiBudW1iZXJcclxuICAgICAgICBidWxsZXRTcGVlZFJhdGUgOiBudW1iZXJcclxuICAgICAgICBtYWdhemluZUxvYWRUaW1lUmF0ZSA6IG51bWJlclxyXG4gICAgICAgIG1heEFtbW9SYXRlIDogTWFwPG51bWJlciwgbnVtYmVyPlxyXG4gICAgICAgIGFpbVRpbWVSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgcGlja1NvdW5kIDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTc2RjhcdTY3M0FcdTc2RjhcdTUxNzNcdTc2ODRcdTkxNERcdTdGNkUgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvbkNhbWVyYUNvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgdmlicmF0aW9uRHVtcCA6IG51bWJlclxyXG4gICAgICAgIHZpYnJhdGlvbk9tZWdhIDogbnVtYmVyXHJcbiAgICAgICAganVtcFRpbWUgOiBudW1iZXJcclxuICAgICAgICBqdW1wRk9WIDogbnVtYmVyXHJcbiAgICB9XHJcbiAgICAvKipcdTU0MEVcdTU3NTBcdTUyOUJcdTkxNERcdTdGNkUgKi9cclxuICAgIGV4cG9ydCB0eXBlIFdlYXBvblJlY29pbENvbmZpZ0RhdGEgPSB7XHJcbiAgICAgICAgbWluRXJyb3IgOiBudW1iZXJcclxuICAgICAgICBtYXhFcnJvciA6IG51bWJlclxyXG4gICAgICAgIGd1blJlY29pbCA6IG51bWJlclxyXG4gICAgICAgIGd1blJlY292ZXJSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgZGlmZnVzZVJlY292ZXJSYXRlIDogbnVtYmVyXHJcbiAgICAgICAgdmVydGljYWxKdW1wQW5nbGUgOiBudW1iZXJcclxuICAgICAgICBiYWNrVG90YWwgOiBudW1iZXJcclxuICAgICAgICBob3Jpem9udGFsSnVtcFJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgdmVydGljYWxKdW1wUmFuZ2UgOiBudW1iZXJcclxuICAgICAgICBzZWxmU3BpblJhbmdlIDogbnVtYmVyXHJcbiAgICAgICAgc2VsZlNwaW5NYXggOiBudW1iZXJcclxuXHJcbiAgICAgICAgdWlKdW1wQW1wbCA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcE1heCA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcER1bXAgOiBudW1iZXJcclxuICAgICAgICB1aUp1bXBPbWVnYSA6IG51bWJlclxyXG4gICAgICAgIHVpSnVtcEFuZ2xlIDogbnVtYmVyXHJcblxyXG4gICAgICAgIHNoYWtlSW50ZW5zaXR5IDogbnVtYmVyXHJcbiAgICAgICAgZGlmZnVzZUZ1bmN0aW9uIDogRGlmZnVzZUZ1bmN0aW9uRW51bVxyXG4gICAgICAgIGp1bXBFcnJvclNjYWxlIDogbnVtYmVyXHJcbiAgICAgICAgY3JvdWNoRXJyb3JTY2FsZSA6IG51bWJlclxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU1MkE4XHU3NTNCXHU5MTREXHU3RjZFICovXHJcbiAgICBleHBvcnQgdHlwZSBXZWFwb25BbmltYXRpb25Db25maWdEYXRhID0ge1xyXG4gICAgICAgIGd1bmlkIDogbnVtYmVyXHJcbiAgICAgICAgZ3VuRXZuZXQgOiBudW1iZXJcclxuICAgICAgICBpc0xvb3AgOiBib29sZWFuXHJcbiAgICAgICAgVHJhbnNpdGlvbkR1cmF0aW9uIDogbnVtYmVyXHJcbiAgICAgICAgQW5pbWF0aW9uTmFtZSA6IHN0cmluZ1xyXG4gICAgICAgIERldGFpbCA6IHN0cmluZ1xyXG4gICAgICAgIFNwZWVkIDogbnVtYmVyXHJcbiAgICAgICAgV2VpZ2h0IDogbnVtYmVyXHJcbiAgICAgICAgQ292ZXJwbGF5IDogbnVtYmVyXHJcbiAgICAgICAgR3VuTmFtZSA6IHN0cmluZ1xyXG4gICAgfVxyXG59IiwgIiIsICJpbXBvcnQgKiBhcyBmb3JlaWduMSBmcm9tICcuL0phdmFTY3JpcHRzL0NsaWVudC9DbGllbnRCYXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yIGZyb20gJy4vSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvR2FtZUNvbmZpZyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNCBmcm9tICcuL0phdmFTY3JpcHRzL0NvbmZpZy9Nb25zdGVycyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNSBmcm9tICcuL0phdmFTY3JpcHRzL0RlZmF1bHRVSSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNiBmcm9tICcuL0phdmFTY3JpcHRzL0VudGl0eS9Nb25zdGVyL01vbnN0ZXJCYXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ243IGZyb20gJy4vSmF2YVNjcmlwdHMvRmFjdG9yeS9GYWNfSW50ZXJhY3RPYmplY3QnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjggZnJvbSAnLi9KYXZhU2NyaXB0cy9HYW1lQ29uc3QvRXZlbnRDb25zdCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduOSBmcm9tICcuL0phdmFTY3JpcHRzL0dhbWVDb25zdC9HYW1lQ29uc3QnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjEwIGZyb20gJy4vSmF2YVNjcmlwdHMvSW50ZXJmYWNlL0lJbnRlcmFjdGlvbic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTEgZnJvbSAnLi9KYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJDbGllbnQnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjEyIGZyb20gJy4vSmF2YVNjcmlwdHMvTW9kdWxlcy9QbGF5ZXIvUGxheWVyRGF0YSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTMgZnJvbSAnLi9KYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXInO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE0IGZyb20gJy4vSmF2YVNjcmlwdHMvUGxheWVyQXR0cic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTUgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJCZWhhdmlvcic7XG5pbXBvcnQgKiBhcyBmb3JlaWduMTYgZnJvbSAnLi9KYXZhU2NyaXB0cy9QbGF5ZXJHdW5NZ3InO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE3IGZyb20gJy4vSmF2YVNjcmlwdHMvU2VydmVyL1NlcnZlckJhc2UnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE4IGZyb20gJy4vSmF2YVNjcmlwdHMvVG9vbC9Ud2VlblV0aWwnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjE5IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL0NhbWVyYUNvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIwIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIxIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFtbW9CYXNlQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yMiBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25BbmltYXRpb25DbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIzIGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjI0IGZyb20gJy4vSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkNhbWVyYUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjUgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uR1VJQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yNiBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjcgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uUmVjb2lsQ2xzJztcbmltcG9ydCAqIGFzIGZvcmVpZ24yOCBmcm9tICcuL0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25Tb3VuZENscyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMjkgZnJvbSAnLi9KYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uVG9vbCc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMzAgZnJvbSAnLi9KYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMxIGZyb20gJy4vSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvTW9uc3RJbmZvVUlfZ2VuZXJhdGUnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjMyIGZyb20gJy4vYnVpbGQnO1xuXG5leHBvcnQgY29uc3QgTVdNb2R1bGVNYXAgPSB7IFxuICAgICAnSmF2YVNjcmlwdHMvQ2xpZW50L0NsaWVudEJhc2UnOiBmb3JlaWduMSxcbiAgICAgJ0phdmFTY3JpcHRzL0NvbmZpZy9Db25maWdCYXNlJzogZm9yZWlnbjIsXG4gICAgICdKYXZhU2NyaXB0cy9Db25maWcvR2FtZUNvbmZpZyc6IGZvcmVpZ24zLFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL01vbnN0ZXJzJzogZm9yZWlnbjQsXG4gICAgICdKYXZhU2NyaXB0cy9EZWZhdWx0VUknOiBmb3JlaWduNSxcbiAgICAgJ0phdmFTY3JpcHRzL0VudGl0eS9Nb25zdGVyL01vbnN0ZXJCYXNlJzogZm9yZWlnbjYsXG4gICAgICdKYXZhU2NyaXB0cy9GYWN0b3J5L0ZhY19JbnRlcmFjdE9iamVjdCc6IGZvcmVpZ243LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZUNvbnN0L0V2ZW50Q29uc3QnOiBmb3JlaWduOCxcbiAgICAgJ0phdmFTY3JpcHRzL0dhbWVDb25zdC9HYW1lQ29uc3QnOiBmb3JlaWduOSxcbiAgICAgJ0phdmFTY3JpcHRzL0ludGVyZmFjZS9JSW50ZXJhY3Rpb24nOiBmb3JlaWduMTAsXG4gICAgICdKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJDbGllbnQnOiBmb3JlaWduMTEsXG4gICAgICdKYXZhU2NyaXB0cy9Nb2R1bGVzL1BsYXllci9QbGF5ZXJEYXRhJzogZm9yZWlnbjEyLFxuICAgICAnSmF2YVNjcmlwdHMvTW9kdWxlcy9QbGF5ZXIvUGxheWVyU2VydmVyJzogZm9yZWlnbjEzLFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyQXR0cic6IGZvcmVpZ24xNCxcbiAgICAgJ0phdmFTY3JpcHRzL1BsYXllckJlaGF2aW9yJzogZm9yZWlnbjE1LFxuICAgICAnSmF2YVNjcmlwdHMvUGxheWVyR3VuTWdyJzogZm9yZWlnbjE2LFxuICAgICAnSmF2YVNjcmlwdHMvU2VydmVyL1NlcnZlckJhc2UnOiBmb3JlaWduMTcsXG4gICAgICdKYXZhU2NyaXB0cy9Ub29sL1R3ZWVuVXRpbCc6IGZvcmVpZ24xOCxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9DYW1lcmFDb250cm9sbGVyJzogZm9yZWlnbjE5LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkFjY2Vzc29yeUJhc2VDbHMnOiBmb3JlaWduMjAsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQW1tb0Jhc2VDbHMnOiBmb3JlaWduMjEsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQW5pbWF0aW9uQ2xzJzogZm9yZWlnbjIyLFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkJhc2VDbHMnOiBmb3JlaWduMjMsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uQ2FtZXJhQ2xzJzogZm9yZWlnbjI0LFxuICAgICAnSmF2YVNjcmlwdHMvV2VhcG9uL1dlYXBvbkdVSUNscyc6IGZvcmVpZ24yNSxcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25NYWdhemluZUNscyc6IGZvcmVpZ24yNixcbiAgICAgJ0phdmFTY3JpcHRzL1dlYXBvbi9XZWFwb25SZWNvaWxDbHMnOiBmb3JlaWduMjcsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uU291bmRDbHMnOiBmb3JlaWduMjgsXG4gICAgICdKYXZhU2NyaXB0cy9XZWFwb24vV2VhcG9uVG9vbCc6IGZvcmVpZ24yOSxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL0RlZmF1bHRVSV9nZW5lcmF0ZSc6IGZvcmVpZ24zMCxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL01vbnN0SW5mb1VJX2dlbmVyYXRlJzogZm9yZWlnbjMxLFxuICAgICAnYnVpbGQnOiBmb3JlaWduMzIsXG59XG4iLCAiXHVGRUZGaW1wb3J0IHsgRXZlbnRDb25zdCB9IGZyb20gXCIuLi9HYW1lQ29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgUGxheWVyQXR0ciBmcm9tIFwiLi4vUGxheWVyQXR0clwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJHdW5NZ3IgfSBmcm9tIFwiLi4vUGxheWVyR3VuTWdyXCI7XHJcbmltcG9ydCB7IFBsYXllckNsaWVudCB9IGZyb20gXCIuLy4uL01vZHVsZXMvUGxheWVyL1BsYXllckNsaWVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4vLi4vTW9kdWxlcy9QbGF5ZXIvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2ZXIgfSBmcm9tIFwiLi8uLi9Nb2R1bGVzL1BsYXllci9QbGF5ZXJTZXJ2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTVCQTJcdTYyMzdcdTdBRUZcdTRFM0JcdTgxMUFcdTY3MkNcclxuICovXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCBleHRlbmRzIENvcmUuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgdG90YWxQbGF5ZXJBdHRyczogTWFwPHN0cmluZywgUGxheWVyQXR0cj4gPSBuZXcgTWFwXHJcbiAgICBtUGxheWVyR3VuTWdyOiBQbGF5ZXJHdW5NZ3JcclxuICAgIHN0YXRpYyBtSW5zdGFuY2U6IENsaWVudFxyXG4gICAgY29uc3RydWN0b3IoZGF0YSl7XHJcbiAgICAgICAgc3VwZXIoZGF0YSlcclxuICAgICAgICBFdmVudHMuYWRkU2VydmVyTGlzdGVuZXIoRXZlbnRDb25zdC5DbGllbnRFdmVudC5QbGF5ZXJBZGRTdWNjZXNzZWRFdmVudCwgdGhpcy5PblBsYXllclN1Y2Nlc3NBZGRlZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIENsaWVudC5tSW5zdGFuY2UgPSB0aGlzXHJcbiAgICB9XHJcbiAgICAvKiogXHU1RjUzXHU4MTFBXHU2NzJDXHU4OEFCXHU1QjlFXHU0RjhCXHU1NDBFXHVGRjBDXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU1RTI3XHU2NkY0XHU2NUIwXHU1MjREXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTW9kdWxlKClcclxuICAgICAgICB0aGlzLm1QbGF5ZXJHdW5NZ3IgPSBhd2FpdCBQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UoKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgICAvKiogXHU2Q0U4XHU1MThDXHU2QTIxXHU1NzU3ICovXHJcbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJNb2R1bGUoKSB7XHJcbiAgICAgICAgTW9kdWxlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlZ2lzdGVyTW9kdWxlKFBsYXllclNlcnZlciwgUGxheWVyQ2xpZW50LCBQbGF5ZXJEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIE9uUGxheWVyU3VjY2Vzc0FkZGVkKGNfZ3VpZCA6IHN0cmluZywgaW5zX2d1aWQgOiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPblBsYXllclN1Y2Nlc3NBZGRlZCAgICcsIGNfZ3VpZCxcIiAgXCIsIGluc19ndWlkKVxyXG4gICAgICAgIGxldCBzID0gYXdhaXQgU2NyaXB0TWFuYWdlci5hc3luY0ZpbmRTY3JpcHQoaW5zX2d1aWQpIGFzIFBsYXllckF0dHJcclxuICAgICAgICBjb25zb2xlLmxvZyhzKVxyXG4gICAgICAgIHRoaXMudG90YWxQbGF5ZXJBdHRycy5zZXQoY19ndWlkLCBzKVxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFBsYXllckF0dHIoZ3VpZDpzdHJpbmd8R2FtZXBsYXkuUGxheWVyKTpQbGF5ZXJBdHRye1xyXG4gICAgICAgIGlmIChndWlkIGluc3RhbmNlb2YgR2FtZXBsYXkuUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGd1aWQgPSBndWlkLmNoYXJhY3Rlci5ndWlkXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZ2V0KGd1aWQpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZ2V0KGd1aWQpXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG59IiwgImV4cG9ydCBuYW1lc3BhY2UgRXZlbnRDb25zdHtcclxuICAgIGV4cG9ydCBlbnVtIENsaWVudEV2ZW50IHtcclxuICAgICAgICBQbGF5ZXJCZUhpdEV2ZW50ID0gXCJQbGF5ZXJCZUhpdEV2ZW50XCIsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkV2ZW50ID0gXCJQbGF5ZXJOZWFyV2VhcG9uRXZlbnRcIixcclxuICAgICAgICBQbGF5ZXJGYXJXZWFwb25FdmVudCA9ICdQbGF5ZXJGYXJXZWFwb25FdmVudCcsXHJcbiAgICAgICAgUGxheWVyTmVhcldlYXBvbkFjY2Vzc29yeUV2ZW50ID0gJ1BsYXllck5lYXJXZWFwb25BY2Nlc3NvcnlFdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQgPSAnUGxheWVyRmFyV2VhcG9uQWNjZXNzb3J5RXZlbnQnLFxyXG4gICAgICAgIFBsYXllck5lYXJBbW1vRXZlbnQgPSAnUGxheWVyTmVhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRmFyQW1tb0V2ZW50ID0gJ1BsYXllckZhckFtbW9FdmVudCcsXHJcbiAgICAgICAgUGxheWVyRGllRXZlbnQgPSAnUGxheWVyRGllRXZlbnQnLFxyXG4gICAgICAgIENyZWF0ZUFsbFVuaXRFdmVudCA9ICdDcmVhdGVBbGxVbml0RXZlbnQnLFxyXG4gICAgICAgIFNldHRpbmdBc3NBaW1SZWZyZXNoRXZlbnQgPSAnU2V0dGluZ0Fzc0FpbVJlZnJlc2hFdmVudCcsXHJcbiAgICAgICAgU3luY0RhdGFFdmVudCA9ICdTeW5jRGF0YUV2ZW50JyxcclxuICAgICAgICBPbkVxdWlwV2VhcG9uRXZlbnQgPSAnT25FcXVpcFdlYXBvbkV2ZW50JyxcclxuICAgICAgICBTZXR0aW5nUmVhZHlFdmVudCA9ICdTZXR0aW5nUmVhZHlFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQ3JlYXRlZEV2ZW50ID0gJ1dlYXBvbk9iakNyZWF0ZWRFdmVudCcsXHJcbiAgICAgICAgV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQgPSAnV2VhcG9uT2JqQWN0aXZlQ2hhbmdlRXZlbnQnLFxyXG4gICAgICAgIFBsYXllckFkZFN1Y2Nlc3NlZEV2ZW50ID0gJ1BsYXllckFkZFN1Y2Nlc3NlZEV2ZW50JyxcclxuICAgIH1cclxuICAgIGV4cG9ydCBlbnVtIFNlcnZlckV2ZW50IHtcclxuICAgICAgICBXZWFwb25IaXRQbGF5ZXJFdmVudCA9J1dlYXBvbkhpdFBsYXllckV2ZW50JyxcclxuICAgICAgICBDcmVhdGVBbW1vRXZlbnQgPSdDcmVhdGVBbW1vRXZlbnQnLFxyXG4gICAgICAgIERlc3Ryb3lBbW1vRXZlbnQgPSdEZXN0cm95QW1tb0V2ZW50JyxcclxuICAgICAgICBQbGF5ZXJQaWNrQW1tb0V2ZW50ID0gJ1BsYXllclBpY2tBbW1vRXZlbnQnLFxyXG4gICAgICAgIFBsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50ID0gJ1BsYXllckV2ZW50Q3JlYXRlT3ZlckV2ZW50JyxcclxuICAgICAgICBQbGF5ZXJEYXRhTW9kaWZpRXZlbnQgPSAnUGxheWVyRGF0YU1vZGlmaUV2ZW50JyxcclxuICAgICAgICBTeW5jQW5kU2F2ZUV2ZW50ID0gJ1N5bmNBbmRTYXZlRXZlbnQnLFxyXG4gICAgICAgIFdlYXBvbk9iakNyZWF0ZWRFdmVudCA9ICdXZWFwb25PYmpDcmVhdGVkRXZlbnQnXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IENsaWVudEJhc2UgZnJvbSBcIi4vQ2xpZW50L0NsaWVudEJhc2VcIlxyXG5pbXBvcnQgUGxheWVyQXR0ciBmcm9tIFwiLi9QbGF5ZXJBdHRyXCJcclxuaW1wb3J0IHsgV2VhcG9uQWNjZXNzb3J5QmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQW1tb0Jhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb24vV2VhcG9uQW1tb0Jhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uL1dlYXBvbkJhc2VDbHNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckd1bk1nciB7XHJcbiAgICBwbGF5ZXI6R2FtZXBsYXkuQ2hhcmFjdGVyXHJcblxyXG4gICAgY3VyR3VuOldlYXBvbkJhc2VDbHNcclxuICAgIG1haW5HdW46V2VhcG9uQmFzZUNsc1xyXG4gICAgZGVwdXR5R3VuOldlYXBvbkJhc2VDbHNcclxuICAgIG1pbmlHdW46V2VhcG9uQmFzZUNsc1xyXG4gICAgcHJvcDE6V2VhcG9uQmFzZUNsc1xyXG4gICAgcHJvcDI6V2VhcG9uQmFzZUNsc1xyXG5cclxuICAgIHB1YmxpYyBoYWRBY2Nlc3NvcnlMaXN0OlJlY29yZDxzdHJpbmcsIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHM+XHJcbiAgICBwdWJsaWMgaGFkQW1tb0xpc3Q6UmVjb3JkPHN0cmluZywgV2VhcG9uQW1tb0Jhc2VDbHM+XHJcblxyXG4gICAgY2FuVXBkYXRlR3VuID0gdHJ1ZVxyXG4gICAgLy8gXHU1MzU1XHU0RjhCXHU2QTIxXHU1RjBGXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFBsYXllckd1bk1ncjtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckd1bk1nci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyID0gYXdhaXQgR2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKClcclxuICAgICAgICAgICAgUGxheWVyR3VuTWdyLl9pbnN0YW5jZSA9IG5ldyBQbGF5ZXJHdW5NZ3IocGxheWVyLmNoYXJhY3RlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXllckd1bk1nci5faW5zdGFuY2VcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjpHYW1lcGxheS5DaGFyYWN0ZXIpe1xyXG4gICAgICAgIC8vXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLk9uZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigxKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlR3bywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbigyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLlRocmVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuRm91ciwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlN3aXRjaFdlYXBvbig0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkZpdmUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5Td2l0Y2hXZWFwb24oNSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5YLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU3dpdGNoV2VhcG9uKDApXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuRywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkRyb3BXZWFwb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5DaGFuZ2VTaG9vdE1vZGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgSW5wdXRVdGlsLm9uS2V5RG93bihLZXlzLkxlZnRBbHQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0FcdTlGMjBcdTY4MDdcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlEb3duKEtleXMuUmlnaHRNb3VzZUJ1dHRvbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NTIyNFx1NjVBRFx1ODg0MFx1OTFDRlxyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMuR2V0TG9jYWxBdHRyKClcclxuICAgICAgICAgICAgaWYoYS5ocCA8PSAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VyR3VuKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyR3VuLk1lY2hhbmljYWxBaW1TdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIElucHV0VXRpbC5vbktleURvd24oS2V5cy5SLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgICAgICBpZihhLmhwIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJHdW4gPSB0aGlzLm1haW5HdW5cclxuICAgICAgICAgICAgLy9cdTUyMjRcdTY1QURcdTg4NDBcdTkxQ0ZcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJHdW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJHdW4uTG9hZE1hZ2F6aW5lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIElucHV0VXRpbC5vbktleVByZXNzKEtleXMuUiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBJbnB1dFV0aWwub25LZXlVcChLZXlzLkxlZnRBbHQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTRFMERcdTY2M0VcdTc5M0FcdTlGMjBcdTY4MDdcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBJbnB1dFV0aWwub25LZXlVcChLZXlzLkxlZnRBbHQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTVDMURcdThCRDVcdTc5QkJcdTVGMDBcdTc3ODRcdTUxQzZcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyR3VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckd1bi5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFN3aXRjaFdlYXBvbihpbmRleDpudW1iZXIpe1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgIGlmKGEuaHAgPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIENoYW5nZVNob290TW9kZSgpe1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5HZXRMb2NhbEF0dHIoKVxyXG4gICAgICAgIGlmKGEuaHAgPD0gMCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIERyb3BXZWFwb24oKXtcclxuICAgICAgICBsZXQgYSA9IHRoaXMuR2V0TG9jYWxBdHRyKClcclxuICAgICAgICBpZihhLmhwIDw9IDApe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBHZXRMb2NhbEF0dHIoKTpQbGF5ZXJBdHRye1xyXG4gICAgICAgIHJldHVybiBDbGllbnRCYXNlLm1JbnN0YW5jZS5HZXRQbGF5ZXJBdHRyKGdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuZ3VpZClcclxuICAgIH1cclxuICAgIEdldE90aGVyQXR0cihndWlkOnN0cmluZyk6UGxheWVyQXR0cntcclxuICAgICAgICByZXR1cm4gQ2xpZW50QmFzZS5tSW5zdGFuY2UuR2V0UGxheWVyQXR0cihndWlkKVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4vUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2ZXIgfSBmcm9tIFwiLi9QbGF5ZXJTZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDbGllbnQgZXh0ZW5kcyBNb2R1bGVDPFBsYXllclNlcnZlciwgUGxheWVyRGF0YT4ge1xyXG4gICAgcHJvdGVjdGVkIG9uQXdha2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllckNsaWVudG9uQXdha2UnKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllckNsaWVudG9uU3RhcnQnKVxyXG4gICAgfVxyXG59IiwgImV4cG9ydCBjbGFzcyBQbGF5ZXJEYXRhIGV4dGVuZHMgU3ViZGF0YSB7XHJcblxyXG4gICAgcHVibGljIGhwOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMVx1NjUzOVx1NTNEOFx1NzY4NFx1NTZERVx1OEMwM1x1RkYwQ1x1NTcyOFx1OTcwMFx1ODk4MVx1NzdFNVx1OTA1M1x1OTFEMVx1NUUwMVx1NjUzOVx1NTNEOFx1NzY4NFx1NTczMFx1NjVCOVx1NzZEMVx1NTQyQ1x1NTM3M1x1NTNFRiAqL1xyXG4gICAgcHVibGljIG9uaHBDaGFuZ2U6IEFjdGlvbiA9IG5ldyBBY3Rpb24oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjUzOVx1NTNEOFx1OTFEMVx1NUUwMVx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgICogQHBhcmFtIGRlbHRhTnVtIFx1NjUzOVx1NTNEOFx1NTAzQ1x1RkYwQ1x1NEUzQVx1OEQxRlx1NjU3MFx1NUMzMVx1NjYyRlx1NTFDRlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hhbmdlR29sZChkZWx0YU51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gXHU2NzBEXHU1MkExXHU3QUVGXHU2NTM5XHU1M0Q4XHU5MUQxXHU1RTAxXHVGRjBDXHU1QzA2XHU4RkQ5XHU0RTJBXHU2NENEXHU0RjVDXHU1NDBDXHU2QjY1XHU3RUQ5XHU1QkEyXHU2MjM3XHU3QUVGXHJcbiAgICAgICAgdGhpcy5zeW5jVG9DbGllbnQoKTtcclxuICAgICAgICB0aGlzLmhwICs9IGRlbHRhTnVtO1xyXG4gICAgICAgIHRoaXMub25ocENoYW5nZS5jYWxsKHRoaXMuaHApO1xyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IFBsYXllckNsaWVudCB9IGZyb20gXCIuL1BsYXllckNsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclNlcnZlciBleHRlbmRzIE1vZHVsZVM8UGxheWVyQ2xpZW50LCBQbGF5ZXJEYXRhPiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllclNlcnZlcicpXHJcbiAgICB9XHJcbn0iLCAiXHJcbi8vXHU1MTQzXHU3RDIwXHU3Njg0XHU1N0ZBXHU3QzdCXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRCYXNle1xyXG5cdGlkOm51bWJlcjtcclxufVxyXG4vL1x1OTE0RFx1N0Y2RVx1NzY4NFx1NTdGQVx1N0M3QlxyXG5leHBvcnQgY2xhc3MgQ29uZmlnQmFzZTxUIGV4dGVuZHMgSUVsZW1lbnRCYXNlPntcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfS0VZOnN0cmluZyA9ICdLZXknOy8vXHU4QkZCXHU1M0Q2XHU5NTJFKFx1OTY2NFx1NEU4NklEXHU0RTRCXHU1OTE2XHU3Njg0XHU1MjJCXHU1NDBEXHVGRjBDXHU1RTI2a2V5XHU3Njg0XHU1QjU3XHU2QkI1XHU1RkM1XHU5ODdCXHU2NjJGc3RyaW5nXHU3QzdCXHU1NzhCKVxyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBR19MQU5HVUFHRTpzdHJpbmcgPSAnTGFuZ3VhZ2UnOy8vXHU1MTczXHU4MDU0XHU4QkVEXHU4QTAwXHU4ODY4XHU3Njg0aWRcdTYyMTZrZXkoXHU1OTgyXHU2NzlDXHU2NzA5XHU4RkQ5XHU0RTJBdGFnXHVGRjBDXHU1QkZDXHU4ODY4XHU1REU1XHU1MTc3XHU4OTgxXHU2MjhBXHU2NTcwXHU2MzZFXHU3NTFGXHU2MjEwXHU0RTNBc3RyaW5nXHU3QzdCXHU1NzhCXHVGRjBDXHU1NkUwXHU0RTNBXHU0RjFBXHU4MUVBXHU1MkE4XHU4RkRCXHU4ODRDXHU1MDNDXHU3Njg0XHU4RjZDXHU2MzYyKVxyXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBR19NQUlOTEFOR1VBR0U6c3RyaW5nID0gJ01haW5MYW5ndWFnZSc7Ly9cdTRFM0JcdThCRURcdThBMDB0YWdcclxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQUdfQ0hJTERMQU5HVUFHRTpzdHJpbmcgPSAnQ2hpbGRMYW5ndWFnZSc7Ly9cdTVCNTBcdThCRURcdThBMDB0YWdcclxuXHJcblx0cHJpdmF0ZSByZWFkb25seSBFTEVNRU5UQVJSOkFycmF5PFQ+ID0gW107XHJcblx0cHJpdmF0ZSByZWFkb25seSBFTEVNRU5UTUFQOk1hcDxudW1iZXIsIFQ+ID0gbmV3IE1hcDxudW1iZXIsIFQ+KCk7XHJcblx0cHJpdmF0ZSByZWFkb25seSBLRVlNQVA6TWFwPG51bWJlciB8IHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuXHRwcml2YXRlIHN0YXRpYyBsYW5ndWFnZUluZGV4Om51bWJlciA9IDBcclxuXHRwcml2YXRlIHN0YXRpYyBnZXRMYW5ndWFnZTooa2V5OnN0cmluZ3xudW1iZXIpPT5zdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihleGNlbERhdGE6QXJyYXk8QXJyYXk8YW55Pj4pe1xyXG5cdFx0bGV0IGhlYWRlckxpbmU6bnVtYmVyID0gMjsvL1x1ODg2OFx1NTkzNFx1NzY4NFx1ODg0Q1x1NjU3MFxyXG5cdFx0dGhpcy5FTEVNRU5UQVJSID0gbmV3IEFycmF5KGV4Y2VsRGF0YS5sZW5ndGggLSBoZWFkZXJMaW5lKTtcclxuXHRcdFxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdHRoaXMuRUxFTUVOVEFSUltpXSA9IHt9IGFzIFRcclxuXHRcdH1cclxuXHRcdGxldCBjb2x1bW4gPSBleGNlbERhdGFbMF0ubGVuZ3RoOy8vXHU1MjE3XHU2NTcwXHJcblx0XHRmb3IobGV0IGogPSAwOyBqIDwgY29sdW1uOyBqKyspey8vXHU5MDREXHU1Mzg2XHU1NDA0XHU1MjE3XHJcblx0XHRcdGxldCBuYW1lOnN0cmluZyA9IGV4Y2VsRGF0YVswXVtqXTtcclxuXHRcdFx0bGV0IHRhZ3M6QXJyYXk8c3RyaW5nPiA9IGV4Y2VsRGF0YVsxXVtqXS5zcGxpdCgnfCcpO1xyXG5cdFx0XHRpZih0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0NISUxETEFOR1VBR0UpKSBjb250aW51ZTtcclxuXHRcdFx0bGV0IGpPZmZlY3Q6bnVtYmVyID0gMDsvL1x1NTIxN1x1NTA0Rlx1NzlGQlx1OTFDRlxyXG5cdFx0XHRpZih0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX01BSU5MQU5HVUFHRSkpe1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IGogKyBDb25maWdCYXNlLmxhbmd1YWdlSW5kZXg7XHJcblx0XHRcdFx0bGV0IHRhcmdldFRhZ3M6QXJyYXk8c3RyaW5nPiA9IGV4Y2VsRGF0YVsxXVtpbmRleF0uc3BsaXQoJ3wnKTtcclxuXHRcdFx0XHRpZihpbmRleCA8IGNvbHVtbiAmJiB0YXJnZXRUYWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0NISUxETEFOR1VBR0UpKXtcclxuXHRcdFx0XHRcdGpPZmZlY3QgPSBDb25maWdCYXNlLmxhbmd1YWdlSW5kZXg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBoYXNUYWdfS2V5OmJvb2xlYW4gPSB0YWdzLmluY2x1ZGVzKENvbmZpZ0Jhc2UuVEFHX0tFWSk7XHJcblx0XHRcdGxldCBoYXNUYWdfTGFuZ3VhZ2U6Ym9vbGVhbiA9IHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfTEFOR1VBR0UpO1xyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UQVJSLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRsZXQgZWxlID0gdGhpcy5FTEVNRU5UQVJSW2ldO1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGV4Y2VsRGF0YVtpICsgaGVhZGVyTGluZV1baiArIGpPZmZlY3RdO1xyXG5cdFx0XHRcdGlmKGogPT0gMCl7Ly9JRFxyXG5cdFx0XHRcdFx0dGhpcy5FTEVNRU5UTUFQLnNldCh2YWx1ZSwgZWxlKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlmKGhhc1RhZ19LZXkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLktFWU1BUC5zZXQodmFsdWUsIGV4Y2VsRGF0YVtpICsgaGVhZGVyTGluZV1bMF0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYoaGFzVGFnX0xhbmd1YWdlKXtcclxuXHRcdFx0XHRcdFx0aWYoQ29uZmlnQmFzZS5nZXRMYW5ndWFnZSAhPSBudWxsKXtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IENvbmZpZ0Jhc2UuZ2V0TGFuZ3VhZ2UodmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IFwidW5rbm93XCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbGVbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvL1x1OEJCRVx1N0Y2RVx1ODNCN1x1NTNENlx1OEJFRFx1OEEwMFx1NzY4NFx1NjVCOVx1NkNENVxyXG5cdHB1YmxpYyBzdGF0aWMgaW5pdExhbmd1YWdlKGxhbmd1YWdlSW5kZXg6bnVtYmVyLCBnZXRMYW5ndWFnZUZ1bjooa2V5OnN0cmluZ3xudW1iZXIpPT5zdHJpbmcpe1xyXG5cdFx0Q29uZmlnQmFzZS5sYW5ndWFnZUluZGV4ID0gbGFuZ3VhZ2VJbmRleDtcclxuXHRcdENvbmZpZ0Jhc2UuZ2V0TGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZUZ1bjtcclxuXHRcdGlmKENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleCA8IDApe1xyXG5cdFx0XHRDb25maWdCYXNlLmxhbmd1YWdlSW5kZXggPSBDb25maWdCYXNlLmdldFN5c3RlbUxhbmd1YWdlSW5kZXgoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9cdTgzQjdcdTUzRDZcdTdDRkJcdTdFREZcdThCRURcdThBMDBcdTdEMjJcdTVGMTVcclxuXHRwcml2YXRlIHN0YXRpYyBnZXRTeXN0ZW1MYW5ndWFnZUluZGV4KCk6bnVtYmVye1xyXG5cdFx0bGV0IGxhbmd1YWdlID0gVXRpbC5Mb2NhbGVVdGlsLmdldERlZmF1bHRMb2NhbGUoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImVuXCIpKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJ6aFwiKSkge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH1cclxuXHRcdGlmICghIWxhbmd1YWdlLm1hdGNoKFwiamFcIikpIHtcclxuXHRcdFx0cmV0dXJuIDI7XHJcblx0XHR9XHJcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImRlXCIpKSB7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogXHU2ODM5XHU2MzZFaWRcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTUxNDNcdTdEMjBcclxuXHQqIEBwYXJhbSBpZCBpZHxrZXlcclxuXHQqIEByZXR1cm5zIEVsZW1lbnRcclxuXHQqL1xyXG5cdHB1YmxpYyBnZXRFbGVtZW50KGlkOm51bWJlcnxzdHJpbmcpOiBUIHtcclxuXHRcdGxldCBlbGUgPSB0aGlzLkVMRU1FTlRNQVAuZ2V0KE51bWJlcihpZCkpIHx8IHRoaXMuRUxFTUVOVE1BUC5nZXQodGhpcy5LRVlNQVAuZ2V0KGlkKSk7XHJcblx0XHRpZihlbGUgPT0gbnVsbCl7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IodGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCJcdTkxNERcdTdGNkVcdTg4NjhcdTRFMkRcdTYyN0VcdTRFMERcdTUyMzBcdTUxNDNcdTdEMjAgaWQ6XCIgKyBpZCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZWxlO1xyXG5cdH1cclxuXHQvKipcclxuXHQqIFx1NjgzOVx1NjM2RVx1NUI1N1x1NkJCNVx1NTQwRFx1NTQ4Q1x1NUI1N1x1NkJCNVx1NTAzQ1x1NjdFNVx1NjI3RVx1NEUwMFx1NEUyQVx1NTE0M1x1N0QyMFxyXG5cdCogQHBhcmFtIGZpZWxkTmFtZSBcdTVCNTdcdTZCQjVcdTU0MERcclxuXHQqIEBwYXJhbSBmaWVsZFZhbHVlIFx1NUI1N1x1NkJCNVx1NTAzQ1xyXG5cdCogQHJldHVybnMgXHU3QjJDXHU0RTAwXHU0RTJBXHU2MjdFXHU1MjMwXHU3Njg0RWxlbWVudFxyXG5cdCovXHJcblx0cHVibGljIGZpbmRFbGVtZW50KGZpZWxkTmFtZTpzdHJpbmcsIGZpZWxkVmFsdWU6YW55KTogVHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRpZih0aGlzLkVMRU1FTlRBUlJbaV1bZmllbGROYW1lXSA9PSBmaWVsZFZhbHVlKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5FTEVNRU5UQVJSW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8qKlxyXG5cdCogXHU2ODM5XHU2MzZFXHU1QjU3XHU2QkI1XHU1NDBEXHU1NDhDXHU1QjU3XHU2QkI1XHU1MDNDXHU2N0U1XHU2MjdFXHU0RTAwXHU3RUM0XHU1MTQzXHU3RDIwXHJcblx0KiBAcGFyYW0gZmllbGROYW1lIFx1NUI1N1x1NkJCNVx1NTQwRFxyXG5cdCogQHBhcmFtIGZpZWxkVmFsdWUgXHU1QjU3XHU2QkI1XHU1MDNDXHJcblx0KiBAcmV0dXJucyBcdTYyNDBcdTY3MDlcdTdCMjZcdTU0MDhcdTg5ODFcdTZDNDJcdTc2ODRFbGVtZW50XHJcblx0Ki9cclxuXHRwdWJsaWMgZmluZEVsZW1lbnRzKGZpZWxkTmFtZTpzdHJpbmcsZmllbGRWYWx1ZTphbnkpOkFycmF5PFQ+e1xyXG5cdFx0bGV0IGFycjpBcnJheTxUPiA9IFtdO1xyXG5cdFx0Zm9yKGxldCBpID0gMDtpIDwgdGhpcy5FTEVNRU5UQVJSLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRpZih0aGlzLkVMRU1FTlRBUlJbaV1bZmllbGROYW1lXSA9PSBmaWVsZFZhbHVlKXtcclxuXHRcdFx0XHRhcnIucHVzaCh0aGlzLkVMRU1FTlRBUlJbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXJyO1xyXG5cdH1cclxuXHQvKipcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTUxNDNcdTdEMjAqL1xyXG5cdHB1YmxpYyBnZXRBbGxFbGVtZW50KCk6QXJyYXk8VD57XHJcblx0XHRyZXR1cm4gdGhpcy5FTEVNRU5UQVJSO1xyXG5cdH1cclxufSIsICJpbXBvcnQge0NvbmZpZ0Jhc2UsIElFbGVtZW50QmFzZX0gZnJvbSBcIi4vQ29uZmlnQmFzZVwiO1xyXG5pbXBvcnQge01vbnN0ZXJzQ29uZmlnfSBmcm9tIFwiLi9Nb25zdGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb25maWd7XHJcblx0cHJpdmF0ZSBzdGF0aWMgY29uZmlnTWFwOk1hcDxzdHJpbmcsIENvbmZpZ0Jhc2U8SUVsZW1lbnRCYXNlPj4gPSBuZXcgTWFwKCk7XHJcblx0LyoqXHJcblx0KiBcdTU5MUFcdThCRURcdThBMDBcdThCQkVcdTdGNkVcclxuXHQqIEBwYXJhbSBsYW5ndWFnZUluZGV4IFx1OEJFRFx1OEEwMFx1N0QyMlx1NUYxNSgtMVx1NEUzQVx1N0NGQlx1N0VERlx1OUVEOFx1OEJBNFx1OEJFRFx1OEEwMClcclxuXHQqIEBwYXJhbSBnZXRMYW5ndWFnZUZ1biBcdTY4MzlcdTYzNkVrZXlcdTgzQjdcdTUzRDZcdThCRURcdThBMDBcdTUxODVcdTVCQjlcdTc2ODRcdTY1QjlcdTZDRDVcclxuXHQqL1xyXG5cdHB1YmxpYyBzdGF0aWMgaW5pdExhbmd1YWdlKGxhbmd1YWdlSW5kZXg6bnVtYmVyLCBnZXRMYW5ndWFnZUZ1bjooa2V5OnN0cmluZ3xudW1iZXIpPT5zdHJpbmcpe1xyXG5cdFx0Q29uZmlnQmFzZS5pbml0TGFuZ3VhZ2UobGFuZ3VhZ2VJbmRleCwgZ2V0TGFuZ3VhZ2VGdW4pO1xyXG5cdFx0dGhpcy5jb25maWdNYXAuY2xlYXIoKTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBnZXRDb25maWc8VCBleHRlbmRzIENvbmZpZ0Jhc2U8SUVsZW1lbnRCYXNlPj4oQ29uZmlnQ2xhc3M6IHsgbmV3KCk6IFQgfSk6IFQge1xyXG5cdFx0aWYgKCF0aGlzLmNvbmZpZ01hcC5oYXMoQ29uZmlnQ2xhc3MubmFtZSkpIHtcclxuXHRcdFx0dGhpcy5jb25maWdNYXAuc2V0KENvbmZpZ0NsYXNzLm5hbWUsIG5ldyBDb25maWdDbGFzcygpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ01hcC5nZXQoQ29uZmlnQ2xhc3MubmFtZSkgYXMgVDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBnZXQgTW9uc3RlcnMoKTpNb25zdGVyc0NvbmZpZ3sgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKE1vbnN0ZXJzQ29uZmlnKSB9O1xyXG59IiwgImltcG9ydCB7IENvbmZpZ0Jhc2UsIElFbGVtZW50QmFzZSB9IGZyb20gXCIuL0NvbmZpZ0Jhc2VcIjtcclxuY29uc3QgRVhDRUxEQVRBOkFycmF5PEFycmF5PGFueT4+ID0gW1tcImlkXCIsXCJuYW1lXCIsXCJtYXhIUFwiLFwibGV2ZWxcIixcImF0a1wiLFwibW9kZWxHdWlkXCJdLFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIl0sWzEsXCJcdTg3MThcdTg2REJcIiwxMDAsMiwxLFwiMTkyNTY5XCJdLFsyLFwiXHU1MTU0XHU1QjUwXCIsMjAwLDIsMSxcIjEzODI2OFwiXSxbMyxcIlx1OUU4Qlx1OUU3RlwiLDMwMCwyLDEsXCIxMjYwMzBcIl1dO1xyXG5leHBvcnQgaW50ZXJmYWNlIElNb25zdGVyc0VsZW1lbnQgZXh0ZW5kcyBJRWxlbWVudEJhc2V7XHJcbiBcdC8qKlx1NjAyQVx1NzI2OUlEKi9cclxuXHRpZDpudW1iZXJcclxuXHQvKipcdTYwMkFcdTcyNjlcdTU0MERcdTVCNTcqL1xyXG5cdG5hbWU6c3RyaW5nXHJcblx0LyoqXHU2NzAwXHU1OTI3XHU4ODQwXHU5MUNGKi9cclxuXHRtYXhIUDpudW1iZXJcclxuXHQvKipcdTdCNDlcdTdFQTcqL1xyXG5cdGxldmVsOm51bWJlclxyXG5cdC8qKlx1NjUzQlx1NTFGQlx1NTI5QiovXHJcblx0YXRrOm51bWJlclxyXG5cdC8qKlx1OTg4NFx1NTIzNlx1NEY1M0d1aWQqL1xyXG5cdG1vZGVsR3VpZDpzdHJpbmdcclxuIH0gXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyc0NvbmZpZyBleHRlbmRzIENvbmZpZ0Jhc2U8SU1vbnN0ZXJzRWxlbWVudD57XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKEVYQ0VMREFUQSk7XHJcblx0fVxyXG5cclxufSIsICJcdUZFRkZpbXBvcnQgSW50ZXJhY3RBY3RvciBmcm9tIFwiLi9JbnRlcmZhY2UvSUludGVyYWN0aW9uXCI7XHJcblxyXG5AVUkuVUlDYWxsT25seSgnJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlEZWZhdWx0IGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0Q2hhcmFjdGVyOiBHYW1lcGxheS5DaGFyYWN0ZXI7XHJcblxyXG5cdEludGVyYWN0QnRuOiBVSS5CdXR0b25cclxuXHROZWFySW50ZXJhY3RHdWlkIDpzdHJpbmdcclxuXHQvKiBcdTg5RTNcdTY3OTBcdThENDRcdTZFOTBJRFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSByZXNvbHZlU3RyaW5nKGFzc2V0SWRzOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IGFzc2V0SWRBcnJheTogc3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgIGxldCBhc3NldElkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGxldCBzID0gYXNzZXRJZHMuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgYSBvZiBzKSB7XHJcbiAgICAgICAgICAgIGlmIChhID09IFwiLFwiKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkQXJyYXkucHVzaChhc3NldElkKTtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZCArPSBhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3NldElkKSB7XHJcbiAgICAgICAgICAgIGFzc2V0SWRBcnJheS5wdXNoKGFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXNzZXRJZEFycmF5O1xyXG4gICAgfVxyXG5cclxuXHQvKiBcdTUyMURcdTU5Q0JcdTUzMTZcdThENDRcdTZFOTAgKi9cclxuXHRwcml2YXRlIGluaXRBc3NldHMoYXNzZXRJZHM6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0bGV0IGFzc2V0SWRBcnJheSA9IHRoaXMucmVzb2x2ZVN0cmluZyhhc3NldElkcyk7XHJcblx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGFzc2V0SWRBcnJheSkge1xyXG5cdFx0XHRVdGlsLkFzc2V0VXRpbC5hc3luY0Rvd25sb2FkQXNzZXQoZWxlbWVudClcclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBUcnlJbnRlcmFjdCgpOnZvaWQge1xyXG5cdFx0bGV0IG9iajpHYW1lT2JqZWN0ID0gR2FtZU9iamVjdC5maW5kKHRoaXMuTmVhckludGVyYWN0R3VpZClcclxuXHRcdGlmIChvYmogPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdGxldCBhID0gb2JqLmdldFNjcmlwdHMoKVxyXG5cdFx0bGV0IGFjdG9yIDogSW50ZXJhY3RBY3RvciA9IDxJbnRlcmFjdEFjdG9yPm9iai5nZXRTY3JpcHRCeU5hbWUoXCJJSW50ZXJhY3Rpb25cIilcclxuXHRcdGFjdG9yLk9uSW50ZXJhY3QoZ2V0Q3VycmVudFBsYXllcigpLCAxKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBTaG93SW50ZXJhY3RCdXR0b24oZ3VpZCA6c3RyaW5nKTp2b2lkIHtcclxuXHRcdHRoaXMuSW50ZXJhY3RCdG4udmlzaWJpbGl0eSA9IFVJLlNsYXRlVmlzaWJpbGl0eS5WaXNpYmxlXHJcblx0XHR0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPSBndWlkXHJcblx0fVxyXG5cdHByaXZhdGUgSGlkZUludGVyYWN0QnV0dG9uKGd1aWQ6c3RyaW5nKTp2b2lke1xyXG5cdFx0aWYgKHRoaXMuTmVhckludGVyYWN0R3VpZCA9PSBndWlkKSB7XHJcblx0XHRcdHRoaXMuTmVhckludGVyYWN0R3VpZCA9IFwiXCJcclxuXHRcdFx0dGhpcy5JbnRlcmFjdEJ0bi52aXNpYmlsaXR5ID0gVUkuU2xhdGVWaXNpYmlsaXR5LkNvbGxhcHNlZFxyXG5cdFx0fVxyXG5cdH1cclxuXHQvKiogXHU0RUM1XHU1NzI4XHU2RTM4XHU2MjBGXHU2NUY2XHU5NUY0XHU1QkY5XHU5NzVFXHU2QTIxXHU2NzdGXHU1QjlFXHU0RjhCXHU4QzAzXHU3NTI4XHU0RTAwXHU2QjIxICovXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpIHtcclxuXHRcdC8vXHU1MjFEXHU1OUNCXHU1MzE2XHU1MkE4XHU3NTNCXHU4RDQ0XHU2RTkwIFxyXG5cdFx0dGhpcy5pbml0QXNzZXRzKFwiOTU3NzcsNjEyNDVcIilcclxuXHRcdC8vXHU4QkJFXHU3RjZFXHU4MEZEXHU1NDI2XHU2QkNGXHU1RTI3XHU4OUU2XHU1M0Qxb25VcGRhdGVcclxuXHRcdHRoaXMuY2FuVXBkYXRlID0gZmFsc2U7XHJcblx0XHRcclxuXHRcdC8vXHU2MjdFXHU1MjMwXHU1QkY5XHU1RTk0XHU3Njg0XHU4REYzXHU4REMzXHU2MzA5XHU5NEFFXHJcbiAgICAgICAgY29uc3QgSnVtcEJ0biA9IHRoaXMudWlXaWRnZXRCYXNlLmZpbmRDaGlsZEJ5UGF0aCgnUm9vdENhbnZhcy9CdXR0b25fSnVtcCcpIGFzIFVJLkJ1dHRvblxyXG5cdFx0Y29uc3QgQXR0YWNrQnRuID0gdGhpcy51aVdpZGdldEJhc2UuZmluZENoaWxkQnlQYXRoKCdSb290Q2FudmFzL0J1dHRvbl9BdHRhY2snKSBhcyBVSS5CdXR0b25cclxuXHRcdHRoaXMuSW50ZXJhY3RCdG4gPSB0aGlzLnVpV2lkZ2V0QmFzZS5maW5kQ2hpbGRCeVBhdGgoJ1Jvb3RDYW52YXMvSW50ZXJhY3RCdG4nKSBhcyBVSS5CdXR0b25cclxuXHRcdHRoaXMuSW50ZXJhY3RCdG4udmlzaWJpbGl0eSA9IFVJLlNsYXRlVmlzaWJpbGl0eS5Db2xsYXBzZWRcclxuXHRcdFxyXG5cdFx0RXZlbnRzLmFkZExvY2FsTGlzdGVuZXIoXCJjbGllbnRfc2hvd19pbnRlcmFjdF9idXR0b25cIiwgKGd1aWQ6IHN0cmluZyk9PntcclxuXHRcdFx0dGhpcy5TaG93SW50ZXJhY3RCdXR0b24oZ3VpZClcclxuXHRcdH0pO1x0XHJcblx0XHRFdmVudHMuYWRkTG9jYWxMaXN0ZW5lcihcImNsaWVudF9oaWRlX2ludGVyYWN0X2J1dHRvblwiLCAoZ3VpZDogc3RyaW5nKT0+e1xyXG5cdFx0XHR0aGlzLkhpZGVJbnRlcmFjdEJ1dHRvbihndWlkKVxyXG5cdFx0fSlcclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU4REYzXHU4REMzXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1OERGM1x1OERDM1xyXG4gICAgICAgIEp1bXBCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0XHRpZiAodGhpcy5DaGFyYWN0ZXIpIHtcclxuXHRcdFx0XHR0aGlzLkNoYXJhY3Rlci5qdW1wKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0R2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKCkudGhlbigocGxheWVyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3RlciA9IHBsYXllci5jaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHQvL1x1ODlEMlx1ODI3Mlx1NjI2N1x1ODg0Q1x1OERGM1x1OERDM1x1NTI5Rlx1ODBGRFxyXG5cdFx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIuanVtcCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KVx0XHJcblxyXG5cdFx0Ly9cdTcwQjlcdTUxRkJcdTY1M0JcdTUxRkJcdTYzMDlcdTk0QUUsXHU1RjAyXHU2QjY1XHU4M0I3XHU1M0Q2XHU0RUJBXHU3MjY5XHU1NDBFXHU2MjY3XHU4ODRDXHU2NTNCXHU1MUZCXHU1MkE4XHU0RjVDXHJcbiAgICAgICAgQXR0YWNrQnRuLm9uUHJlc3NlZC5hZGQoKCk9PntcclxuXHRcdFx0XHRHYW1lcGxheS5hc3luY0dldEN1cnJlbnRQbGF5ZXIoKS50aGVuKChwbGF5ZXIpID0+IHtcclxuXHRcdFx0XHRcdHBsYXllci5jaGFyYWN0ZXIuY2FtZXJhU3lzdGVtLnN3aXRjaENhbWVyYU1vZGUoR2FtZXBsYXkuQ2FtZXJhTW9kZS5EZWZhdWx0KVxyXG5cdFx0XHRcdFx0cGxheWVyLmNoYXJhY3Rlci5jYW1lcmFTeXN0ZW0uY2FtZXJhUmVsYXRpdmVUcmFuc2Zvcm0ucm90YXRpb24gPSBSb3RhdGlvbi56ZXJvXHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3RlciA9IHBsYXllci5jaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHQvL1x1OEJBOVx1NTJBOFx1NzUzQlx1NTNFQVx1NTcyOFx1NEUwQVx1NTM0QVx1OEVBQlx1NjRBRFx1NjUzRVxyXG5cdFx0XHRcdFx0bGV0IGFuaW0xID0gcGxheWVyLmNoYXJhY3Rlci5sb2FkQW5pbWF0aW9uKFwiNjEyNDVcIik7XHJcblx0XHRcdFx0XHRhbmltMS5zbG90ID0gR2FtZXBsYXkuQW5pbVNsb3QuVXBwZXI7XHJcblx0XHRcdFx0XHQvL1x1ODlEMlx1ODI3Mlx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG5cdFx0XHRcdFx0aWYoYW5pbTEuaXNQbGF5aW5nKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0YW5pbTEucGxheSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU0RUE0XHU0RTkyXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NEVBNFx1NEU5Mlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIHRoaXMuSW50ZXJhY3RCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0XHR0aGlzLlRyeUludGVyYWN0KClcclxuXHRcdH0pXHRcclxuXHRcdFxyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvblN0YXJ0XHU0RTRCXHU1NDBFIFxyXG5cdCAqIFx1NUJGOVx1NEU4RVVJXHU3Njg0XHU2ODM5XHU4MjgyXHU3MEI5XHU3Njg0XHU2REZCXHU1MkEwXHU2NENEXHU0RjVDXHVGRjBDXHU4RkRCXHU4ODRDXHU4QzAzXHU3NTI4XHJcblx0ICogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkU1XHU0RThCXHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1OTFBXHU2QjIxXHU4QzAzXHU3NTI4XHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uQWRkZWQoKSB7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvbkFkZGVkXHU0RTRCXHU1NDBFXHJcblx0ICogXHU1QkY5XHU0RThFVUlcdTc2ODRcdTY4MzlcdTgyODJcdTcwQjlcdTc2ODRcdTc5RkJcdTk2NjRcdTY0Q0RcdTRGNUNcdUZGMENcdThGREJcdTg4NENcdThDMDNcdTc1MjhcclxuXHQgKiBcdTZDRThcdTYxMEZcdUZGMUFcdThCRTVcdTRFOEJcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTU5MUFcdTZCMjFcdThDMDNcdTc1MjhcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25SZW1vdmVkKCkge1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENVSVx1NUJGOVx1OEM2MVx1NTE4RFx1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1OEMwM1x1NzUyOCBcclxuXHQqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEZEOVx1NEU0Qlx1NTQwRVVJXHU1QkY5XHU4QzYxXHU1REYyXHU3RUNGXHU4OEFCXHU5NTAwXHU2QkMxXHU0RTg2XHVGRjBDXHU5NzAwXHU4OTgxXHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU1QkY5XHU4QkU1XHU2NTg3XHU0RUY2XHU1NDhDVUlcdTc2RjhcdTUxNzNcdTVCRjlcdThDNjFcdTRFRTVcdTUzQ0FcdTVCNTBcdTVCRjlcdThDNjFcdTc2ODRcdTVGMTVcdTc1MjhcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIFx1NkJDRlx1NEUwMFx1NUUyN1x1OEMwM1x1NzUyOFxyXG5cdCogXHU5MDFBXHU4RkM3Y2FuVXBkYXRlXHU1M0VGXHU0RUU1XHU1RjAwXHU1NDJGXHU1MTczXHU5NUVEXHU4QzAzXHU3NTI4XHJcblx0KiBkdCBcdTRFMjRcdTVFMjdcdThDMDNcdTc1MjhcdTc2ODRcdTY1RjZcdTk1RjRcdTVERUVcdUZGMENcdTZCRUJcdTc5RDJcclxuXHQqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVXBkYXRlKGR0IDpudW1iZXIpIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU4QkJFXHU3RjZFXHU2NjNFXHU3OTNBXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25TaG93KC4uLnBhcmFtczphbnlbXSkge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdThCQkVcdTdGNkVcdTRFMERcdTY2M0VcdTc5M0FcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkhpZGUoKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NUY1M1x1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU2NjJGXHU1M0VGXHU0RUU1XHU2M0E1XHU2NTM2XHU0RThCXHU0RUY2XHU3Njg0XHU2NUY2XHU1MDE5XHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxVG91Y2hcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFOEJcdTRFRjZcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdTRFODZcclxuXHQgKiBcdTU5ODJcdTY3OUNcdTU5MDRcdTc0MDZcdTRFODZcdUZGMENcdTkwQTNcdTRFNDhcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NTNFRlx1NEVFNVx1NjNBNVx1NjUzNlx1OEZEOVx1NkIyMVRvdWNoXHU1NDBFXHU3RUVEXHU3Njg0TW92ZVx1NTQ4Q0VuZFx1NEU4Qlx1NEVGNlxyXG5cdCAqIFx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NTkwNFx1NzQwNlx1RkYwQ1x1OTBBM1x1NEU0OFx1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU1QzMxXHU2NUUwXHU2Q0Q1XHU2M0E1XHU2NTM2XHU4RkQ5XHU2QjIxVG91Y2hcdTU0MEVcdTdFRURcdTc2ODRNb3ZlXHU1NDhDRW5kXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0ZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1NTE4RFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU3OUZCXHU1MkE4XHU2NUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaE1vdmVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTc5QkJcdTVGMDBVSVx1NzU0Q1x1OTc2Mlx1NjVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIE9uVG91Y2hFbmRlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU1RjUzXHU1NzI4VUlcdTc1NENcdTk3NjJcdTRFMEFcdThDMDNcdTc1MjhkZXRlY3REcmFnL2RldGVjdERyYWdJZlByZXNzZWRcdTY1RjZcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQgKiBcdTUzRUZcdTRFRTVcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjZcdTc2ODRcdTVGMDBcdTU5Q0JcdTc1MUZcdTYyMTBcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFMDBcdTZCMjFcdTc1MUZcdTYyMTBcdTc2ODRcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjYgbmV3RHJhZ0Ryb3BcdTUzRUZcdTRFRTVcdTc1MUZcdTYyMTBcdTRFMDBcdTZCMjFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdEZXRlY3RlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCk6VUkuRHJhZ0Ryb3BPcGVyYXRpb24ge1xyXG5cdC8vXHRyZXR1cm4gdGhpcy5uZXdEcmFnRHJvcChudWxsKTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3RUNGXHU4RkM3XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ092ZXIoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU1NzI4XHU4RkQ5XHU0RTJBVUlcdTkxQ0FcdTY1M0VcdTVCOENcdTYyMTBcdTY1RjZcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJvcChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQsSW5EcmFnRHJvcE9wZXJhdGlvbjpVSS5EcmFnRHJvcE9wZXJhdGlvbik6Ym9vbGVhbiB7XHJcblx0Ly9cdHJldHVybiB0cnVlO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdThGREJcdTUxNjVcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0VudGVyKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NzlCQlx1NUYwMFx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnTGVhdmUoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSB7XHJcblx0Ly99XHJcblx0XHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHVGRjBDXHU2Q0ExXHU2NzA5XHU1QjhDXHU2MjEwXHU1QjhDXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU4MDBDXHU1M0Q2XHU2RDg4XHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnQ2FuY2VsbGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCkge1xyXG5cdC8vfVxyXG5cclxufVxyXG4iLCAiXHVGRUZGXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0ZXJCYXNlIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgSW50ZXJhY3RBY3RvciBmcm9tIFwiLi4vSW50ZXJmYWNlL0lJbnRlcmFjdGlvblwiO1xyXG5cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjX0ludGVyYWN0T2JqZWN0IGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgcHJpdmF0ZSBndWlkTGlzdDogTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj4gPSBuZXcgTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj47XHJcbiAgICBwcml2YXRlIGFjIDogSW50ZXJhY3RBY3RvcjtcclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZAQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdEFjdG9yIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFQTRcdTRFOTJcdTcyNjlcdTc2ODRcdTU3M0FcdTY2NkZcdTRFMkRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX09iamVjdDogR2FtZU9iamVjdDtcclxuICAgIHByaXZhdGUgbV90cmlnZ2VyOiBUcmlnZ2VyO1xyXG4gICAgcHJpdmF0ZSBtX2d1aWQ6c3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV9PYmplY3QgPSB0aGlzLmdhbWVPYmplY3RcclxuICAgICAgICB0aGlzLm1fdHJpZ2dlciA9IDxUcmlnZ2VyPnRoaXMubV9PYmplY3QuZ2V0Q2hpbGRCeU5hbWUoXCJUcmlnZ2VyXCIpIFxyXG4gICAgICAgIHRoaXMubV9ndWlkID0gdGhpcy5tX09iamVjdC5ndWlkO1xyXG4gICAgICAgIHRoaXMubV90cmlnZ2VyLm9uRW50ZXIuYWRkKGdvID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBcdTUyMjRcdTY1QURcdThGREJcdTUxNjVcdTc4QjBcdTY0OUVcdTUzM0FcdTU3REZcdTc2ODRcdTVCRjlcdThDNjFcdTY2MkZcdTU0MjZcdTRFM0FcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgaWYgKCEoZ28gaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdTRFMERcdTY2MkZcdTg5RDJcdTgyNzJcdUZGMENcdTUwNUNcdTZCNjJcdTYyNjdcdTg4NENcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGdvID0gPEdhbWVwbGF5LkNoYXJhY3Rlcj5nb1xyXG4gICAgICAgICAgICBpZiAoIShnbyA9PSBnZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTk3NUVcdTY3MkNcdTU3MzBcdTczQTlcdTVCQjZcdTYzQTdcdTUyMzZcdTc2ODRcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKFwiY2xpZW50X3Nob3dfaW50ZXJhY3RfYnV0dG9uXCIsIHRoaXMubV9ndWlkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tX3RyaWdnZXIub25MZWF2ZS5hZGQoZ28gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFx1NTIyNFx1NjVBRFx1OEZEQlx1NTE2NVx1NzhCMFx1NjQ5RVx1NTMzQVx1NTdERlx1NzY4NFx1NUJGOVx1OEM2MVx1NjYyRlx1NTQyNlx1NEUzQVx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICBpZiAoIShnbyBpbnN0YW5jZW9mIEdhbWVwbGF5LkNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx1NEUwRFx1NjYyRlx1ODlEMlx1ODI3Mlx1RkYwQ1x1NTA1Q1x1NkI2Mlx1NjI2N1x1ODg0Q1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdvID0gPEdhbWVwbGF5LkNoYXJhY3Rlcj5nb1xyXG4gICAgICAgICAgICBpZiAoIShnbyA9PSBnZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTk3NUVcdTY3MkNcdTU3MzBcdTczQTlcdTVCQjZcdTYzQTdcdTUyMzZcdTc2ODRcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKFwiY2xpZW50X2hpZGVfaW50ZXJhY3RfYnV0dG9uXCIsIHRoaXMubV9ndWlkKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFQTRcdTRFOTJcdTcyNjlcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgcHVibGljIEluaXQoZ3VpZCA6IHN0cmluZywgdHJhbnNmb3JtIDogVHJhbnNmb3JtKSA6c3RyaW5ne1xyXG4gICAgICAgIHRoaXMubV9PYmplY3QgPSBHYW1lT2JqZWN0LnNwYXduKHtndWlkOiBndWlkLCByZXBsaWNhdGVzIDogdHJ1ZSwgdHJhbnNmb3JtIDogdHJhbnNmb3JtfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZ3VpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNDbGllbnQoKSA6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKTtcclxuICAgIH1cclxuICAgIC8qKlx1NUYwMFx1NTlDQlx1NEVBNFx1NEU5Mlx1RkYwQ1x1NzUzMVx1NUJBMlx1NjIzN1x1N0FFRlVJXHU1QzQyXHU5NzYyXHU1M0QxXHU4RDc3Ki9cclxuICAgIHB1YmxpYyBPbkludGVyYWN0KHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICBpZiAodGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLkludGVyYWN0SW1wbGVtZW50KHBsYXllciwgaW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuRnVuY3Rpb24oQ29yZS5TZXJ2ZXIpXHJcbiAgICBwcm90ZWN0ZWQgSW50ZXJhY3RJbXBsZW1lbnQocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIHRoaXMuRG9PblNlcnZlcihwbGF5ZXIsIGluZGV4KTtcclxuICAgICAgICB0aGlzLkRvT25DbGllbnQocGxheWVyLCBpbmRleCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMlx1NjIzN1x1N0FFRlx1ODlFNlx1NTNEMVx1RkYwQ1x1NTcyOFx1NTNEMVx1NzUxRlx1NEVBNFx1NEU5Mlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBAQ29yZS5GdW5jdGlvbihDb3JlLkNsaWVudClcclxuICAgIHByb3RlY3RlZCBEb09uQ2xpZW50KHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU1QkEyXHU2MjM3XHU3QUVGXHU0RUE3XHU3NTFGXHU0RUE0XHU0RTkyXHVGRjBDXHU3M0E5XHU1QkI2JywgcGxheWVyKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY3MERcdTUyQTFcdTdBRUZcdTg5RTZcdTUzRDFcdUZGMENcdTU3MjhcdTUzRDFcdTc1MUZcdTRFQTRcdTRFOTJcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgQENvcmUuRnVuY3Rpb24oQ29yZS5TZXJ2ZXIpXHJcbiAgICBwcm90ZWN0ZWQgRG9PblNlcnZlcihwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjcwRFx1NTJBMVx1N0FFRlx1NEVBN1x1NzUxRlx1NEVBNFx1NEU5Mlx1RkYwQ1x1NzNBOVx1NUJCNicsIHBsYXllcilcclxuICAgIH1cclxufVxyXG4iLCAiXHVGRUZGLyoqXHU3M0E5XHU1QkI2XHU1QzVFXHU2MDI3XHU1NDBDXHU2QjY1XHU3QzdCXHVGRjBDXHU0RTE2XHU3NTRDXHU0RTJEXHU2QkNGXHU2NzA5XHU0RTAwXHU0RTJBXHU3M0E5XHU1QkI2XHVGRjBDXHU1QzMxXHU0RjFBXHU1NzI4XHU1QkY5XHU4QzYxXHU0RTBCXHU5NzYyXHU1MjFCXHU1RUZBXHU0RTAwXHU0RTJBXHU2QjY0XHU4MTFBXHU2NzJDXHU2NzY1XHU1QkY5XHU1RTk0XHU2QjY0XHU3M0E5XHU1QkI2ICovXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckF0dHIgZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcblxyXG4gICAgcHVibGljIGNoYXJhY3RlcjpHYW1lcGxheS5DaGFyYWN0ZXJcclxuICAgIEBDb3JlLlByb3BlcnR5KHtkaXNwbGF5TmFtZTogJ1x1ODg0MFx1OTFDRicsIHJlcGxpY2F0ZWQgOiB0cnVlfSlcclxuICAgIHB1YmxpYyBocCA6IG51bWJlciA9IDEwMFxyXG4gICAgQENvcmUuUHJvcGVydHkoe2Rpc3BsYXlOYW1lOiAnXHU2NzAwXHU1OTI3XHU4ODQwXHU5MUNGJywgcmVwbGljYXRlZCA6IHRydWV9KVxyXG4gICAgcHVibGljIG1heEhwIDogbnVtYmVyXHJcbiAgICAvKiogXHU1RjUzXHU4MTFBXHU2NzJDXHU4OEFCXHU1QjlFXHU0RjhCXHU1NDBFXHVGRjBDXHU0RjFBXHU1NzI4XHU3QjJDXHU0RTAwXHU1RTI3XHU2NkY0XHU2NUIwXHU1MjREXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU1MjFCXHU1RUZBXHU2MjEwXHU1MjlGXHU4MTFBXHU2NzJDJyArIHRoaXMuZ3VpZClcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgSW5pdERhdGEoYyA6IEdhbWVwbGF5LkNoYXJhY3Rlcil7XHJcbiAgICAgICAgaWYodGhpcy5pc1J1bm5pbmdDbGllbnQoKSl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNcclxuICAgICAgICB0aGlzLm1heEhwID0gMTAwXHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHBcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU3M0E5XHU1QkI2XHU1QzVFXHU2MDI3XHU4MTFBXHU2NzJDXHU1MjFEXHU1OUNCXHU1MzE2XHU1QjhDXHU2MjEwJylcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1NDY4XHU2NzFGXHU1MUZEXHU2NTcwIFx1NkJDRlx1NUUyN1x1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU1MUZEXHU2NTcwXHU2MjY3XHU4ODRDXHU5NzAwXHU4OTgxXHU1QzA2dGhpcy51c2VVcGRhdGVcdThENEJcdTUwM0NcdTRFM0F0cnVlXHJcbiAgICAgKiBAcGFyYW0gZHQgXHU1RjUzXHU1MjREXHU1RTI3XHU0RTBFXHU0RTBBXHU0RTAwXHU1RTI3XHU3Njg0XHU1RUY2XHU4RkRGIC8gXHU3OUQyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgxMUFcdTY3MkNcdTg4QUJcdTk1MDBcdTZCQzFcdTY1RjZcdTY3MDBcdTU0MEVcdTRFMDBcdTVFMjdcdTYyNjdcdTg4NENcdTVCOENcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFBsYXllckd1bk1nciB9IGZyb20gXCIuL1BsYXllckd1bk1nclwiXHJcbmltcG9ydCB7IENhbWVyYUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9XZWFwb24vQ2FtZXJhQ29udHJvbGxlclwiXHJcblxyXG4vKipcclxuICogXHU2N0FBXHU2OEIwXHU2QTIxXHU1NzU3XHVGRjFBXHU3M0E5XHU1QkI2XHU4ODRDXHU0RTNBXHU2ODExXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxheWVyQmVoYXZpb3Ige1xyXG4gICAgcGxheWVyOiBHYW1lcGxheS5DaGFyYWN0ZXJcclxuICAgIHN0YXRlOiBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW1cclxuICAgIC8qKlx1NEUwRFx1NTQwQ1x1ODA0Q1x1NEUxQVx1NzY4NFx1OTE0RFx1OTAxRiAqL1xyXG4gICAgU3BlZWRTdGRDb2VmdDogbnVtYmVyXHJcbiAgICAvKipcdTRFQkFcdTcyNjlcdTc5RkJcdTUyQThcdTcyQjZcdTYwMDFcdTdDRkJcdTY1NzAgKi9cclxuICAgIGNvZWZJbmVydGlhOiBudW1iZXJcclxuICAgIC8qKlx1NEVCQVx1NzI2OVx1NTJBMFx1OTAxRlx1NUVBNlx1N0NGQlx1NjU3MCAqL1xyXG4gICAgSW5lclBhcmE6IG51bWJlclxyXG4gICAgR3VuV2VpZ2h0OiBudW1iZXJcclxuICAgIEJlaEp1ZGdlVGFiOiBNYXA8c3RyaW5nLCBib29sZWFuPlxyXG4gICAga2V5RG93blRhYjogQXJyYXk8c3RyaW5nPlxyXG5cclxuICAgIC8vIFx1NTM1NVx1NEY4Qlx1NkEyMVx1NUYwRlxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBQbGF5ZXJCZWhhdmlvcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJCZWhhdmlvci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBQbGF5ZXJCZWhhdmlvci5faW5zdGFuY2UgPSBuZXcgUGxheWVyQmVoYXZpb3IoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUGxheWVyQmVoYXZpb3IuX2luc3RhbmNlXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEJpbmRFdmVudEhhbmRsZXIoKSB7XHJcbiAgICAgICAgRXZlbnRzLmFkZFNlcnZlckxpc3RlbmVyKEV2ZW50Q29uc3QuQ2xpZW50RXZlbnQuT25FcXVpcFdlYXBvbkV2ZW50LCB0aGlzLk9uRXF1aXBXZWFwb25FdmVudEhhbmRsZXIuYmluZCh0aGlzKSlcclxuICAgICAgICBFdmVudHMuYWRkTG9jYWxMaXN0ZW5lcihFdmVudENvbnN0LkNsaWVudEV2ZW50Lk9uRXF1aXBXZWFwb25FdmVudCwgdGhpcy5PbkVxdWlwV2VhcG9uRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpXHJcbiAgICAgICAgLy9FdmVudHMuYWRkU2VydmVyTGlzdGVuZXIoRXZlbnRDb25zdC5DbGllbnRFdmVudC5jaCwgdGhpcy5DaGFuZ2VPY2NFdmVudEhhbmRsZXIuYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEluaXRpYWxEYXRhUmVhZCgpIHtcclxuICAgICAgICAvKipcdTczQTlcdTVCQjZcdTg4NENcdTRFM0FcdTUyMjRcdTY1QURcdTUzQzJcdTY1NzAgKi9cclxuICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KFtcclxuICAgICAgICAgICAgW1wiUnVuXCIsIGZhbHNlXSxcclxuICAgICAgICAgICAgW1wiQ3JvdWNoXCIsIGZhbHNlXSxcclxuICAgICAgICAgICAgW1wiUXVpY2tseVwiLCBmYWxzZV0sXHJcbiAgICAgICAgICAgIFtcIkFpbVwiLCBmYWxzZV0sXHJcbiAgICAgICAgXSlcclxuICAgICAgICB0aGlzLmtleURvd25UYWIgPSBbXVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBJbml0UGxheWVyQXR0cmlidXRlcygpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5tYXhKdW1wSGVpZ2h0ID0gMVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg4QzVcdTU5MDdcdTY3QUFcdTY2RjRcdTY1QjBcdThERjNcdThEQzNcdTkwMUZcdTVFQTZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBPbkVxdWlwV2VhcG9uRXZlbnRIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5wbGF5ZXIubWF4SnVtcEhlaWdodCA9IFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBDaGFuZ2VPY2NFdmVudEhhbmRsZXIob2NjSWQ6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxuICAgIC8qKlx1NzNBOVx1NUJCNlx1ODg0Q1x1NEUzQVx1NTIyNFx1NjVBRCAqL1xyXG4gICAgcHJpdmF0ZSBQbGF5ZXJCZWhhdmlvckNoYW5nZWQoX2JlaGF2aW9yOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5CZWhKdWRnZVRhYi5nZXQoX2JlaGF2aW9yKSkge1xyXG4gICAgICAgICAgICB0aGlzLkJlaEp1ZGdlVGFiLnNldChfYmVoYXZpb3IsIGZhbHNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuQmVoSnVkZ2VUYWIuc2V0KF9iZWhhdmlvciwgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CZWhKdWRnZVRhYi5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duVGFiLnB1c2goa2V5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodGhpcy5rZXlEb3duVGFiLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5rZXlEb3duVGFiWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdSdW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlJ1bilcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5RG93blRhYi5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmtleURvd25UYWIuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Nyb3VjaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkNyb3VjaFJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUXVpY2tseSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlF1aWNrbHlSdW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0FpbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyTW9kZUNoYW5nZWQoR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkFpbVJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmtleURvd25UYWIubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlEb3duVGFiLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdRdWlja2x5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uUXVpY2tseUNyb3VjaFJ1bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQWltJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJNb2RlQ2hhbmdlZChHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQWltQ3JvdWNoUnVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZXlEb3duVGFiID0gW11cclxuICAgIH1cclxuICAgIHByaXZhdGUgUGxheWVyTW9kZUNoYW5nZWQobW9kZU5hbWU6IEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBtb2RlTmFtZVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgRGlmZkRpcmVNb3ZlbWVudChkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9cdTU5ODJcdTY3OUNcdTY0NDdcdTY3NDZcdTc2ODRcdTRGNERcdTc5RkJcdTU3NTBcdTY4MDdcdTUyNERcdTRFMDBcdTVFMjdcdTRFM0FkaXJlY3Rpb25GYWN0b3IsXHU1NDBFXHU0RTAwXHU1RTI3XHU0RTNBXHU1MzlGXHU3MEI5XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5EaWZmRGlyZU1vdmVtZW50KGR0KVxyXG4gICAgICAgIHRoaXMuQ2hhcmFjdGVyU3RhcnRJbmVydGlhKClcclxuICAgICAgICAvL1x1NjZGNFx1NjVCMFx1OTAxRlx1NUVBNlxyXG4gICAgICAgIGxldCBzcGQ6IG51bWJlclxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5SdW46XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLkFpbUNyb3VjaFJ1bjpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuUGxheWVyQWN0aW9uTW9kZUVudW0uQWltUnVuOlxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5QbGF5ZXJBY3Rpb25Nb2RlRW51bS5Dcm91Y2hSdW46XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlF1aWNrbHlDcm91Y2hSdW46XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LlBsYXllckFjdGlvbk1vZGVFbnVtLlF1aWNrbHlSdW46XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubWF4V2Fsa1NwZWVkID0gc3BkICogdGhpcy5TcGVlZFN0ZENvZWZ0ICogdGhpcy5jb2VmSW5lcnRpYSAqIHRoaXMuR3VuV2VpZ2h0ICogMVxyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgQ2hhcmFjdGVyU3RhcnRJbmVydGlhKCkge1xyXG4gICAgICAgIGlmKFBsYXllckd1bk1nci5JbnN0YW5jZS5jdXJHdW4pe1xyXG4gICAgICAgICAgICB0aGlzLkd1bldlaWdodCA9IDEgLyBQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuLl9jb25maWdEYXRhLndlaWdodFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgUGxheWVySnVtcCgpIHtcclxuICAgICAgICAvL1x1NzNBOVx1NUJCNlx1NUY1M1x1NTI0RFx1NEUwRFx1NTcyOFx1OERGM1x1OERDM1x1NzJCNlx1NjAwMVx1NUU3Nlx1NEUxNFx1NkNBMVx1NjcwOVx1NkI3Qlx1NEVBMVxyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllci5pc0p1bXBpbmcpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuaXNDcm91Y2hpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNyb3VjaChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyQmVoYXZpb3JDaGFuZ2VkKFwiQ3JvdWNoXCIpXHJcbiAgICAgICAgICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLkNyb3VjaCgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVyR3VuTWdyLkluc3RhbmNlLmN1ckd1biAmJiBQbGF5ZXJHdW5NZ3IuSW5zdGFuY2UuY3VyR3VuLl9pc1pvb21Jbikge1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXllckd1bk1nci5JbnN0YW5jZS5jdXJHdW4uTWVjaGFuaWNhbEFpbVN0b3AoKSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFBsYXllckNyb3VjaCgpIHtcclxuICAgICAgICB0aGlzLlBsYXllckJlaGF2aW9yQ2hhbmdlZChcIkNyb3VjaFwiKVxyXG4gICAgICAgIGlmKCF0aGlzLnBsYXllci5pc0Nyb3VjaGluZyl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmNyb3VjaCh0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5jcm91Y2goZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuQ3JvdWNoKClcclxuICAgIH1cclxuICAgIENyb3VjaFJlc2V0KCl7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIuaXNDcm91Y2hpbmcpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEluaXRzZXRPclJlc2V0KCl7XHJcbiAgICAgICAgdGhpcy5Dcm91Y2hSZXNldCgpXHJcblxyXG4gICAgICAgIHRoaXMuSW5pdGlhbERhdGFSZWFkKClcclxuICAgICAgICB0aGlzLkluaXRQbGF5ZXJBdHRyaWJ1dGVzKClcclxuICAgICAgICB0aGlzLlBsYXllckJlaGF2aW9yQ2hhbmdlZChcIlJ1blwiKVxyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiO1xyXG5pbXBvcnQgeyBUd2VlblV0aWwgfSBmcm9tIFwiLi4vVG9vbC9Ud2VlblV0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFDb250cm9sbGVye1xyXG4gICAgbV9jYW1lcmE6IENhbWVyYVN5c3RlbVxyXG4gICAgZ3VuIDogV2VhcG9uQmFzZUNsc1xyXG4gICAgb2Zmc2V0IDogVmVjdG9yXHJcbiAgICBtX2N1cnJlbnRIZWlnaHQgOiBudW1iZXJcclxuICAgIG1fc3VwcG9zZWRIZWlnaHQgOiBudW1iZXJcclxuICAgIGRlbHRhT2Zmc2V0IDogVmVjdG9yXHJcbiAgICBmaWVsZE9mVmlldyA6IG51bWJlclxyXG4gICAgZGVsdGFUaGV0YSA6IG51bWJlciA9IDBcclxuICAgIGdhbW1hIDogbnVtYmVyID0gMFxyXG4gICAgZGlzdGFuY2UgOiBudW1iZXJcclxuICAgIGRlbHRhUGh5IDogbnVtYmVyID0gMFxyXG4gICAgc2hha2VUaW1lIDogbnVtYmVyXHJcbiAgICBzaGFrZVN0cmVudGggOiBudW1iZXJcclxuXHJcbiAgICBjcm91Y2hDb250cm9sbGVyIDogVHdlZW5VdGlsXHJcbiAgICBTaGFrZUNvbnRyb2xsZXIgOiBUd2VlblV0aWxcclxuICAgIC8vIFx1NTM1NVx1NEY4Qlx1NkEyMVx1NUYwRlxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDYW1lcmFDb250cm9sbGVyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKENhbWVyYUNvbnRyb2xsZXIuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5faW5zdGFuY2UgPSBuZXcgQ2FtZXJhQ29udHJvbGxlcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDYW1lcmFDb250cm9sbGVyLl9pbnN0YW5jZVxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcm91Y2hDb250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDEgOiBudW1iZXIsIHQyIDogbnVtYmVyLCB0MyA6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkSGVpZ2h0ID0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5jYXBzdWxlSGFsZkhlaWdodCAqIDJcclxuICAgICAgICAgICAgICAgIGxldCBmaW4gPSB0aGlzLm1fY3VycmVudEhlaWdodCArIDEwICogdDMgKiAodGhpcy5tX3N1cHBvc2VkSGVpZ2h0IC0gdGhpcy5tX2N1cnJlbnRIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudEhlaWdodCA9IGZpblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudEhlaWdodCA9IHRoaXMubV9zdXBwb3NlZEhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuU2hha2VDb250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hha2VUaW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MSA6IG51bWJlciwgdDIgOiBudW1iZXIsIHQzIDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhT2Zmc2V0ID0gbmV3IFZlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICBXZWFwb25Ub29sLlNoYWtlKHRoaXMuc2hha2VTdHJlbnRoKSxcclxuICAgICAgICAgICAgICAgICAgICBXZWFwb25Ub29sLlNoYWtlKHRoaXMuc2hha2VTdHJlbnRoKSxcclxuICAgICAgICAgICAgICAgICAgICBXZWFwb25Ub29sLlNoYWtlKHRoaXMuc2hha2VTdHJlbnRoKVxyXG4gICAgICAgICAgICAgICAgKS5tdWx0aXBseSh0MSAvIHQyKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhT2Zmc2V0ID0gbmV3IFZlY3RvcigwLCAwLCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKGR0Om51bWJlcik6dm9pZHtcclxuICAgICAgICB0aGlzLmNyb3VjaENvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5jcm91Y2hDb250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLlNoYWtlQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmNyb3VjaENvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIGlmKHRoaXMuZGVsdGFQaHkgIT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLnJvdGF0ZShWZWN0b3IudXAsIHRoaXMuZGVsdGFQaHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZGVsdGFUaGV0YSAhPSAwKXtcclxuICAgICAgICAgICAgdGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0ucm90YXRlKFZlY3Rvci5yaWdodCwgdGhpcy5kZWx0YVRoZXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmRpc3RhbmNlKXtcclxuICAgICAgICAgICAgdGhpcy5tX2NhbWVyYS50YXJnZXRBcm1MZW5ndGggPSB0aGlzLmRpc3RhbmNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2FtbWEgIT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLnJvdGF0ZShWZWN0b3IuZm9yd2FyZCwgdGhpcy5nYW1tYSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5maWVsZE9mVmlldyAhPSB0aGlzLm1fY2FtZXJhLmNhbWVyYUZPVil7XHJcbiAgICAgICAgICAgIHRoaXMubV9jYW1lcmEuY2FtZXJhRk9WID0gdGhpcy5maWVsZE9mVmlldyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZXRPZmZzZXQoKVxyXG4gICAgICAgIHRoaXMuQ2xlYXJEYXRhKClcclxuXHJcbiAgICB9XHJcbiAgICBDbGVhckRhdGEoKXtcclxuICAgICAgICB0aGlzLmRlbHRhUGh5ID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFUaGV0YSA9IDBcclxuICAgICAgICB0aGlzLmdhbW1hID0gMFxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSBudWxsXHJcbiAgICAgICAgdGhpcy5maWVsZE9mVmlldyA9IHRoaXMubV9jYW1lcmEuY2FtZXJhRk9WXHJcbiAgICB9XHJcbiAgICBDcm91Y2goKXtcclxuICAgICAgICB0aGlzLmNyb3VjaENvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmNyb3VjaENvbnRyb2xsZXIpXHJcbiAgICAgICAgaWYodGhpcy5ndW4gJiYgdGhpcy5ndW4uX2lzZHJhdyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VuLl9jYW1lcmFDb250cm9sLkNyb3VjaCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgU2V0T2Zmc2V0KCl7XHJcbiAgICAgICAgdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybS5sb2NhdGlvbiA9IHRoaXMub2Zmc2V0LmFkZChWZWN0b3IudXAubXVsdGlwbHkodGhpcy5tX2N1cnJlbnRIZWlnaHQpKS5hZGQodGhpcy5kZWx0YU9mZnNldClcclxuICAgIH1cclxuICAgIENhbWVyYVNoYWtlKHN0cmVuZ3RoOm51bWJlciwgdGltZTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuc2hha2VTdHJlbnRoID0gc3RyZW5ndGhcclxuICAgICAgICB0aGlzLnNoYWtlVGltZSA9IHRpbWVcclxuICAgICAgICB0aGlzLlNoYWtlQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuU2hha2VDb250cm9sbGVyKVxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvbkNhbWVyYUNscyB9IGZyb20gXCIuL1dlYXBvbkNhbWVyYUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25NYWdhemluZUNscyB9IGZyb20gXCIuL1dlYXBvbk1hZ2F6aW5lQ2xzXCI7XHJcbmltcG9ydCB7IFdlYXBvblJlY29pbENscyB9IGZyb20gXCIuL1dlYXBvblJlY29pbENsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBXZWFwb25Ub29se1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEluaXRXZWFwb25Db25maWcoX3dlYXBvbjpXZWFwb25CYXNlQ2xzKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBJbml0V2VhcG9uTWFnYXppbmVDb25maWcoX21hZ2F6aW5lOldlYXBvbk1hZ2F6aW5lQ2xzKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBJbml0V2VhcG9uUmVjb2lsQ29uZmlnKF9yZWNvaWw6V2VhcG9uUmVjb2lsQ2xzKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBJbml0V2VhcG9uQ2FtZXJhQ29uZmlnKF9jYW1lcmE6V2VhcG9uQ2FtZXJhQ2xzKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBJbml0V2VhcG9uQWNjZXNzb3J5Q29uZmlnKF9hY2Nlc3Nvcnk6V2VhcG9uQWNjZXNzb3J5QmFzZUNscyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gU2hha2UoX3N0cmVuZ3RoOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIF9zdHJlbmd0aCAqIChNYXRoLnJhbmRvbSgpIC0gMC41KVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVDMDZcdTRFMDBcdTRFMkFcdTU0MTFcdTkxQ0ZcdUZGMENcdTYzMDlcdTcxNjdcdTdFRDlcdTVCOUFcdTc2ODRcdTY1Q0JcdThGNkNcdThGNzRcdUZGMENcdTY1Q0JcdThGNkNcdTYzMDdcdTVCOUFcdTVGMjdcdTVFQTZcdTRFNEJcdTU0MEVcdTVGOTdcdTUyMzBcdTRFMDBcdTRFMkFcdTY1QjBcdTc2ODRcdTU0MTFcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBzb3VyY2UgXHU2RTkwXHU1NDExXHU5MUNGXHJcbiAgICAgKiBAcGFyYW0gYXhpcyBcdTY1Q0JcdThGNkNcdThGNzRcclxuICAgICAqIEBwYXJhbSBhbmdsZSBcdTY1Q0JcdThGNkNcdTg5RDJcdTVFQTZcdTUwM0NcclxuICAgICAqIEByZXR1cm5zIFx1N0VEM1x1Njc5Q1x1NTQxMVx1OTFDRlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gUm90YXRlVmVjdG9yKHNvdXJjZTpWZWN0b3IsIGF4aXMgOiBWZWN0b3IsIGFuZ2xlIDogbnVtYmVyKTpWZWN0b3J7XHJcbiAgICAgICAgbGV0IHJvID0gc291cmNlLnRvUm90YXRpb24oKVxyXG4gICAgICAgIGxldCBxdSA9IHJvLnRvUXVhdGVybmlvbigpXHJcbiAgICAgICAgbGV0IG91dGVyIDogUXVhdGVybmlvblxyXG4gICAgICAgIGFuZ2xlID0gYW5nbGUgXHJcbiAgICAgICAgUXVhdGVybmlvbi5mcm9tQXhpc0FuZ2xlKGF4aXMsIGFuZ2xlLCBvdXRlcilcclxuICAgICAgICBsZXQgcmVzIDogVmVjdG9yXHJcbiAgICAgICAgUXVhdGVybmlvbi5tdWx0aXBseVZlY3Rvcihzb3VyY2UsIG91dGVyLCByZXMpXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThGOTNcdTUxRkFcdTRFMDlcdTUwMERcdTY4MDdcdTUxQzZcdTVERUVcdTRFM0ExIFx1NzY4NFx1NTIwNlx1NUUwM1x1NTcyOFx1RkYwOC0xXHVGRjBDIDFcdUZGMDlcdTRFNEJcdTk1RjRcdTc2ODRcdTZCNjNcdTYwMDFcdTUyMDZcdTVFMDNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdhdXNzUmFuZG9tKCkgOiBudW1iZXJ7XHJcbiAgICAgICAgbGV0IHUgPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgbGV0IHYgPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgbGV0IHogPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyh1KSkgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIHYpXHJcbiAgICAgICAgeiA9ICggeiArIDMpIC8gNlxyXG4gICAgICAgIHogPSB6ICogMiAtIDFcclxuICAgICAgICBpZiAoTWF0aC5hYnMoeikgPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBHYXVzc1JhbmRvbSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB6XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1N0E5N1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTcyOFx1NUMwRlx1NEU4RUFcdTY1RjZcdTRGRERcdTYzMDFcdTUzOUZcdTUwM0NcdUZGMENcdTU3MjhcdTU5MjdcdTRFOEVBXHU2NUY2XHU5MDEwXHU2RTEwXHU4RDhCXHU4RkQxXHU0RThFMVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQXN5bXB0b3RlKHggOiBudW1iZXIsIEEgOiBudW1iZXIpIDogbnVtYmVye1xyXG4gICAgICAgIEEgPSBBIHx8IDAuNFxyXG4gICAgICAgIGlmKEEgPD0gMCB8fCBBID49IDEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHggPCAwKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigneCBzaG91bGQgYmUgcG9zaXRpdmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih4IDw9IEEpe1xyXG4gICAgICAgICAgICByZXR1cm4geFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMSArICgzICogQSAqIEEgLSAyICogQSkgLyB4ICsgKEEgKiBBIC0gMiAqIEEgKiBBICogQSkgLyB4IC8geFxyXG4gICAgfVxyXG4gICAgLyoqXHU1M0NDXHU4RkI5XHU1M0VGXHU3NTI4XHU3Njg0XHU3QTk3XHU1MUZEXHU2NTcwKFx1NjY2RVx1OTAxQVx1N0E5N1x1NTFGRFx1NjU3MFx1NzY4NFx1NTk0N1x1NUVGNlx1NjJEMykgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBBc3ltdG90ZUJpKHggOiBudW1iZXIsIEEgOiBudW1iZXIpIDogbnVtYmVye1xyXG4gICAgICAgIEEgPSBBIHx8IDAuNFxyXG4gICAgICAgIGlmKEEgPD0gMCB8fCBBID49IDEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHggPj0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBBc3ltcHRvdGUoeCwgQSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC1Bc3ltcHRvdGUoeCwgQSlcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBSYW5kb21Sb3RhdGUoZGlyZWN0aW9uOiBWZWN0b3IsIG1heFNwcmVhZEFuZ2xlOiBudW1iZXIpOlZlY3RvciB7XHJcbiAgICAgICAgLy8gXHU3NTFGXHU2MjEwXHU5NjhGXHU2NzNBXHU2MjY5XHU2NTYzXHU4OUQyXHJcbiAgICAgICAgY29uc3Qgc3ByZWFkQW5nbGUgPSBHYXVzc1JhbmRvbSgpICogbWF4U3ByZWFkQW5nbGU7XHJcblxyXG4gICAgICAgIC8vIFx1NzUxRlx1NjIxMFx1OTY4Rlx1NjczQVx1NjVDQlx1OEY2Q1x1ODlEMlx1NUVBNlxyXG4gICAgICAgIGNvbnN0IHJhbmRvbVJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xyXG5cclxuICAgICAgICAvLyBcdThCQTFcdTdCOTdcdTk2OEZcdTY3M0FcdTcwQjlcdTc2ODRcdTU3NTBcdTY4MDdcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5zaW4oc3ByZWFkQW5nbGUpICogTWF0aC5jb3MocmFuZG9tUm90YXRpb24pO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmNvcyhzcHJlYWRBbmdsZSk7XHJcbiAgICAgICAgY29uc3QgeiA9IE1hdGguc2luKHNwcmVhZEFuZ2xlKSAqIE1hdGguc2luKHJhbmRvbVJvdGF0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gXHU1QzA2XHU5NjhGXHU2NzNBXHU3MEI5XHU2NUNCXHU4RjZDXHU1MjMwXHU2MzA3XHU1QjlBXHU2NUI5XHU1NDExXHJcbiAgICAgICAgY29uc3QgZGlyWiA9IGRpcmVjdGlvbi56O1xyXG4gICAgICAgIGNvbnN0IHJvdGF0ZU1hdHJpeCA9IFtcclxuICAgICAgICAgICAgW01hdGguY29zKGRpclopLCAtTWF0aC5zaW4oZGlyWiksIDBdLFxyXG4gICAgICAgICAgICBbTWF0aC5zaW4oZGlyWiksIE1hdGguY29zKGRpclopLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDFdXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRlZFggPSByb3RhdGVNYXRyaXhbMF1bMF0gKiB4ICsgcm90YXRlTWF0cml4WzBdWzFdICogeSArIHJvdGF0ZU1hdHJpeFswXVsyXSAqIHo7XHJcbiAgICAgICAgY29uc3Qgcm90YXRlZFkgPSByb3RhdGVNYXRyaXhbMV1bMF0gKiB4ICsgcm90YXRlTWF0cml4WzFdWzFdICogeSArIHJvdGF0ZU1hdHJpeFsxXVsyXSAqIHo7XHJcbiAgICAgICAgY29uc3Qgcm90YXRlZFogPSByb3RhdGVNYXRyaXhbMl1bMF0gKiB4ICsgcm90YXRlTWF0cml4WzJdWzFdICogeSArIHJvdGF0ZU1hdHJpeFsyXVsyXSAqIHo7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHJvdGF0ZWRYLCByb3RhdGVkWSwgcm90YXRlZFopO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEFjY2VsZXJhdGVTY2FsYXIoeCA6IG51bWJlciwgX2xpbmVhclJhbmdlIDogbnVtYmVyLCBfbWF4U2NhbGUgOiBudW1iZXIpIDogbnVtYmVye1xyXG4gICAgICAgIGlmIChfbWF4U2NhbGUgPD0gMSB8fCBfbGluZWFyUmFuZ2UgPD0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdcdTY3MDBcdTU5MjdcdTZCRDRcdTRGOEJcdTVGQzVcdTk4N0JcdTU5MjdcdTRFOEUxLCBcdTdFQkZcdTYwMjdcdTgzMDNcdTU2RjRcdTVGQzVcdTk4N0JcdTU5MjdcdTRFOEUwJyk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignXHU0RjdGXHU3NTI4XHU1M0NDXHU4RkI5XHU3Njg0XHU1MUZEXHU2NTcwXHU0RUU1XHU2NTJGXHU2MzAxXHU4RDFGXHU1MDNDJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPD0gX2xpbmVhclJhbmdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgfWVsc2UgaWYoeD49X21heFNjYWxlICogX2xpbmVhclJhbmdlKXtcclxuICAgICAgICAgICAgcmV0dXJuIF9tYXhTY2FsZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gMSAvIF9saW5lYXJSYW5nZSAqIHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQmlBY2NlbGVyYXRlU2NhbGFyKHggOiBudW1iZXIsIF9saW5lYXJSYW5nZSA6IG51bWJlciwgX21heFNjYWxlIDogbnVtYmVyKXtcclxuICAgICAgICBsZXQgc2lnbiA9IHggPj0gMCA/IDEgOiAtMVxyXG4gICAgICAgIHJldHVybiBBY2NlbGVyYXRlU2NhbGFyKHNpZ24gKiB4LCBfbGluZWFyUmFuZ2UsIF9tYXhTY2FsZSlcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZW5lcmF0ZUN1cnZlKF9zdGFydFBvaW50IDogVmVjdG9yLCBfc3RhcnRWZWMgOiBWZWN0b3IsIF9sZW5ndGggOiBudW1iZXIsIF9kdCA6IG51bWJlciwgX2dyYXZpdHkgOiBudW1iZXIpe1xyXG4gICAgICAgIF9ncmF2aXR5ID0gX2dyYXZpdHkgPyBfZ3Jhdml0eSA6IDFcclxuICAgICAgICBsZXQgY3VydmU6IFZlY3RvcltdXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBfbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gbmV3IFZlY3RvcjIoX3N0YXJ0UG9pbnQueCwgX3N0YXJ0UG9pbnQueikuYWRkKG5ldyBWZWN0b3IyKF9zdGFydFZlYy54LCBfc3RhcnRWZWMueikpLm11bHRpcGx5KF9kdCAqIGluZGV4KVxyXG4gICAgICAgICAgICBsZXQgUG9zWSA9IF9zdGFydFZlYy55ICogX2R0ICogaW5kZXggLSAwLjUgKiA5LjggKiBfZ3Jhdml0eSAqIChfZHQgKiBpbmRleCkgKiAoX2R0ICogaW5kZXgpICsgX3N0YXJ0UG9pbnQueVxyXG4gICAgICAgICAgICBjdXJ2ZS5wdXNoKG5ldyBWZWN0b3IocG9zWC54LCBQb3NZLCBwb3NYLnkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VydmVcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBHZXRBdHRlbnVhdGlvbkJ5R3VuSWQoX3R5cGU6bnVtYmVyLCBfZ3VuOldlYXBvbkJhc2VDbHMsIF9kaXM6bnVtYmVyKTpudW1iZXJ7XHJcbiAgICAgICAgaWYgKF90eXBlID09IDEpIHtcclxuICAgICAgICAgICAgLy9cdTgzQjdcdTUzRDZcdTVCNTBcdTVGMzlcdTk4REVcdTg4NENcdThERERcdTc5QkJcdTRGMjRcdTVCQjNcdTg4NzBcdTUxQ0ZcclxuICAgICAgICAgICAgbGV0IGRpc0F0dGVudWF0aW9uID0gX2d1bi5fY29uZmlnRGF0YS5kYW1hZ2VBdHRlbnVhdGlvblxyXG4gICAgICAgICAgICBsZXQgbGVuID0gZGlzQXR0ZW51YXRpb24ubGVuZ3RoXHJcbiAgICAgICAgICAgIGlmKGxlbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+PSAxOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmKGRpc0F0dGVudWF0aW9uW2ldLkRpc3RhbmNlIDw9IF9kaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXNBdHRlbnVhdGlvbltpXS5BdHRlbnVhdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfSBlbHNlIGlmKF90eXBlID09IDIpIHtcclxuICAgICAgICAgICAgLy9cdTgzQjdcdTUzRDZcdTcyMDZcdTcwQjhcdTgzMDNcdTU2RjRcdTRGMjRcdTVCQjNcdTg4NzBcdTUxQ0ZcclxuICAgICAgICAgICAgbGV0IGV4cGxvc2lvbkF0dGVudWF0aW9uID0gX2d1bi5fY29uZmlnRGF0YS5leHBsb3Npb25EYW1hZ2VBdHRlbnVhdGlvblxyXG4gICAgICAgICAgICBsZXQgbGVuID0gZXhwbG9zaW9uQXR0ZW51YXRpb24ubGVuZ3RoXHJcbiAgICAgICAgICAgIGlmKGxlbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+PSAxOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmKGV4cGxvc2lvbkF0dGVudWF0aW9uW2ldLkRpc3RhbmNlIDw9IF9kaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBsb3Npb25BdHRlbnVhdGlvbltpXS5BdHRlbnVhdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBfc2VsZiBcdTgxRUFcdTVERjFcdTc2ODRcdTg5RDJcdTgyNzIgIFxyXG4gICAgICogQHBhcmFtIF9pc0hpdFNlbGYgXHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU1NDdEXHU0RTJEXHU4MUVBXHU1REYxXHJcbiAgICAgKiBAcGFyYW0gX2lzSGl0RnJpZW5kIFx1NjYyRlx1NTQyNlx1NTNFRlx1NEVFNVx1NTQ3RFx1NEUyRFx1OTYxRlx1NTNDQlxyXG4gICAgICogQHBhcmFtIF9kaXMgXHU1MzRBXHU1Rjg0XHJcbiAgICAgKiBAcGFyYW0gX2FuZ2xlIFx1ODlEMlx1NUVBNlxyXG4gICAgICogQHBhcmFtIF9wb3MgXHU2OEMwXHU2RDRCXHU3Njg0XHU1MzlGXHU3MEI5XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEdldEVuZW15QnlSYW5nZShfc2VsZjpDaGFyYWN0ZXIsIFxyXG4gICAgICAgIF9pc0hpdFNlbGY6Ym9vbGVhbiwgXHJcbiAgICAgICAgX2lzSGl0RnJpZW5kOmJvb2xlYW4sIFxyXG4gICAgICAgIF9kaXM6bnVtYmVyLCBcclxuICAgICAgICBfYW5nbGU6bnVtYmVyLCBcclxuICAgICAgICBfcG9zOlZlY3Rvcik6Q2hhcmFjdGVyW117XHJcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzIDogQ2hhcmFjdGVyW11cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzXHJcbiAgICB9XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gR2V0V2VhcG9uQW1tb0lkKF93ZWFwb25JZCA6IG51bWJlcikgOiBudW1iZXJ7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGNsYXNzIFR3ZWVuVXRpbHtcclxuXHJcbiAgICBTdGFydEZ1bmN0aW9uIDogKHQ6VHdlZW5VdGlsKT0+dm9pZFxyXG4gICAgVXBkYXRlRnVuY3Rpb24gOiAodDpUd2VlblV0aWwsIGR0IDogbnVtYmVyKT0+dm9pZFxyXG4gICAgU3RvcEZ1bmN0aW9uIDogKHQ6VHdlZW5VdGlsKT0+dm9pZFxyXG5cclxuICAgIHRvdGFsVGltZTpudW1iZXJcclxuICAgIHRpbWU6bnVtYmVyXHJcblxyXG4gICAgY3VzdG9tRGF0YSA6IE1hcDxzdHJpbmcsIGFueT5cclxuICAgIGlzUGxheWluZyA6IGJvb2xlYW5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnZXRUb3RhbFRpbWU6KCkgPT4gbnVtYmVyLCBcclxuICAgICAgICB1cGRhdGUgOiAodGltZTE6bnVtYmVyLHRpbWUyOm51bWJlcix0aW1lMzpudW1iZXIpPT52b2lkLFxyXG4gICAgICAgIGNhbGxiYWNrOigpPT52b2lkLFxyXG4gICAgICAgIHN0YXJ0PzooKT0+dm9pZCl7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgZnVuY3Rpb24oKSB7fVxyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0RnVuY3Rpb24gPSAodDpUd2VlblV0aWwpPT57XHJcbiAgICAgICAgICAgICAgICBzdGFydCgpXHJcbiAgICAgICAgICAgICAgICB0LnRvdGFsVGltZSA9IGdldFRvdGFsVGltZSgpXHJcbiAgICAgICAgICAgICAgICB0LnRpbWUgPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUZ1bmN0aW9uID0gKHQ6VHdlZW5VdGlsLCBkdCA6IG51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHQudGltZSArPSBkdFxyXG4gICAgICAgICAgICAgICAgaWYodC50aW1lID49IHQudG90YWxUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICB0LlN0b3BGdW5jdGlvbih0KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlKHQudGltZSx0LnRvdGFsVGltZSx0LnRpbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5TdG9wRnVuY3Rpb24gPSAodDpUd2VlblV0aWwpPT57XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSAiLCAiXHVGRUZGaW1wb3J0IHsgRXZlbnRDb25zdCB9IGZyb20gXCIuLi9HYW1lQ29uc3QvRXZlbnRDb25zdFwiXHJcbmltcG9ydCBQbGF5ZXJBdHRyIGZyb20gXCIuLy4uL1BsYXllckF0dHJcIlxyXG4vKipcclxuICogXHU2RTM4XHU2MjBGXHU2NzBEXHU1MkExXHU3QUVGXHU0RTNCXHU4MTFBXHU2NzJDXHJcbiAqL1xyXG5AQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXJCYXNlIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgcHJpdmF0ZSB0b3RhbFBsYXllckF0dHJzOiBNYXA8c3RyaW5nLCBQbGF5ZXJBdHRyPiA9IG5ldyBNYXBcclxuICAgIHN0YXRpYyBtSW5zdGFuY2U6IFNlcnZlckJhc2VcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xyXG4gICAgICAgIHN1cGVyKGRhdGEpXHJcbiAgICAgICAgU2VydmVyQmFzZS5tSW5zdGFuY2UgPSB0aGlzXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudHMuYWRkUGxheWVySm9pbmVkTGlzdGVuZXIodGhpcy5PblBsYXllckpvaW5lZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIEV2ZW50cy5hZGRQbGF5ZXJMZWZ0TGlzdGVuZXIodGhpcy5PblBsYXllckxlZnQuYmluZCh0aGlzKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIE9uUGxheWVySm9pbmVkKHBsYXllcjpHYW1lcGxheS5QbGF5ZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdcdTczQTlcdTVCQjZcdTUyQTBcdTUxNjUnICsgcGxheWVyLmNoYXJhY3Rlci5ndWlkKVxyXG4gICAgICAgIGxldCBvYmogPSBhd2FpdCBDb3JlLlNjcmlwdC5zcGF3blNjcmlwdDxQbGF5ZXJBdHRyPihQbGF5ZXJBdHRyLCB0cnVlKVxyXG4gICAgICAgIG9iai5Jbml0RGF0YShwbGF5ZXIuY2hhcmFjdGVyKVxyXG4gICAgICAgIHRoaXMudG90YWxQbGF5ZXJBdHRycy5zZXQocGxheWVyLmNoYXJhY3Rlci5ndWlkLCBvYmopXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1ODExQVx1NjcyQ1x1NEUzQScgKyBvYmouZ3VpZClcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hUb0FsbENsaWVudChFdmVudENvbnN0LkNsaWVudEV2ZW50LlBsYXllckFkZFN1Y2Nlc3NlZEV2ZW50LCBwbGF5ZXIuY2hhcmFjdGVyLmd1aWQsICBvYmouZ3VpZCkgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBPblBsYXllckxlZnQocGxheWVyOkdhbWVwbGF5LlBsYXllcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NzNBOVx1NUJCNlx1NzlCQlx1NUYwMCcgKyBwbGF5ZXIuY2hhcmFjdGVyLmd1aWQpXHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMudG90YWxQbGF5ZXJBdHRycy5nZXQocGxheWVyLmNoYXJhY3Rlci5ndWlkKVxyXG4gICAgICAgIG9iai5kZXN0cm95KClcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyQXR0cnMuZGVsZXRlKHBsYXllci5jaGFyYWN0ZXIuZ3VpZClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0UGxheWVyQXR0cihndWlkOnN0cmluZ3xHYW1lcGxheS5QbGF5ZXIpOlBsYXllckF0dHJ7XHJcbiAgICAgICAgaWYgKGd1aWQgaW5zdGFuY2VvZiBHYW1lcGxheS5QbGF5ZXIpIHtcclxuICAgICAgICAgICAgZ3VpZCA9IGd1aWQuY2hhcmFjdGVyLmd1aWRcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxQbGF5ZXJBdHRycy5nZXQoZ3VpZClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxQbGF5ZXJBdHRycy5nZXQoZ3VpZClcclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIlxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHN7XHJcbiAgICBwcml2YXRlIHdlYXBvbkFjY2Vzc29yeTogR2FtZU9iamVjdFxyXG4gICAgcHVibGljIGlkOm51bWJlclxyXG4gICAgcHJpdmF0ZSB1dWlkOiBzdHJpbmdcclxuICAgIHByaXZhdGUgYXR0YWNoZWRXZWFwb24gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBwdWJsaWMgY29uZmlnRGF0YTogR2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeUNvbmZpZ0RhdGFcclxuICAgIGNvbnN0cnVjdG9yKF9vYmo6IEdhbWVPYmplY3Qpe1xyXG4gICAgICAgIHRoaXMud2VhcG9uQWNjZXNzb3J5ID0gX29ialxyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRXZWFwb24gPSBudWxsXHJcbiAgICAgICAgV2VhcG9uVG9vbC5Jbml0V2VhcG9uQWNjZXNzb3J5Q29uZmlnKHRoaXMpXHJcbiAgICAgICAgdGhpcy5QaWNrU291bmQoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZShkdDpudW1iZXIpe1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBFcXVpcFRvV2VhcG9uKHdlYXBvbjogV2VhcG9uQmFzZUNscyl7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZFdlYXBvbiA9IHdlYXBvblxyXG4gICAgfVxyXG4gICAgcHVibGljIFVuRXF1aXBGcm9tV2VhcG9uKCl7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZFdlYXBvbiA9IG51bGxcclxuICAgIH1cclxuICAgIHB1YmxpYyBkZXN0cnVjdG9yKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFBpY2tTb3VuZCgpe1xyXG5cclxuICAgIH1cclxufSIsICJleHBvcnQgY2xhc3MgV2VhcG9uQW1tb0Jhc2VDbHN7XHJcbiAgICBwdWJsaWMgY291bnQgOm51bWJlclxyXG4gICAgcHJpdmF0ZSBpZCA6bnVtYmVyXHJcbiAgICBwcml2YXRlIG9yZGVyIDpudW1iZXJcclxuICAgIHByaXZhdGUgcGlja1NvdW5kIDpzdHJpbmdcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyIDogQ2hhcmFjdGVyXHJcblxyXG4gICAgY29uc3R1cmN0b3IoaWQ6bnVtYmVyLGNvdW50Om51bWJlcixjaGFyYWN0ZXIgOiBDaGFyYWN0ZXIpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudFxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyXHJcblxyXG4gICAgICAgIHRoaXMuUGlja1NvdW5kKClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFBsYXllclBpY2tBbW1vKHdlYXBvbkFtbW8gOiBHYW1lT2JqZWN0LCBjb3VudCA6IG51bWJlcik6dm9pZHtcclxuICAgICAgICBpZih3ZWFwb25BbW1vKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgKz0gY291bnRcclxuICAgICAgICB0aGlzLlBpY2tTb3VuZCgpXHJcbiAgICB9ICAgICAgXHJcbiAgICBwcml2YXRlIFBsYXllckRyb3BBbW1vKGNvdW50OiBudW1iZXIpOmJvb2xlYW57XHJcbiAgICAgICAgbGV0IGlzRHJvcEFsbCA9IGZhbHNlXHJcbiAgICAgICAgaWYodGhpcy5jb3VudCA8PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvdW50ID49IHRoaXMuY291bnQpe1xyXG4gICAgICAgICAgICBpc0Ryb3BBbGwgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnQgLT0gY291bnRcclxuICAgICAgICBpZihpc0Ryb3BBbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNEcm9wQWxsXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUGxheWVyQ29uc3VtZUFtbW8oY291bnQgOiBudW1iZXIpOm51bWJlcntcclxuICAgICAgICBpZih0aGlzLmNvdW50IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gMFxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3VudCA+IHRoaXMuY291bnQpe1xyXG4gICAgICAgICAgICBjb3VudCA9IHRoaXMuY291bnRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudCAtPSBjb3VudFxyXG4gICAgICAgIHJldHVybiBjb3VudFxyXG4gICAgfVxyXG4gICAgcHVibGljIFNldENvdW50KGNvdW50IDogbnVtYmVyKTp2b2lke1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBQaWNrU291bmQoKTp2b2lke1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25CYXNlQ2xzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uQW5pbWF0aW9uQ2xze1xyXG4gICAgZ3VuIDogV2VhcG9uQmFzZUNsc1xyXG4gICAgaWQgOiBudW1iZXJcclxuICAgIHBsYXllciA6IENoYXJhY3RlclxyXG4gICAgcmlnaHRBcm1Qb3NpdGlvbiA6IFZlY3RvclxyXG4gICAgbGVmdEFybVBvc2l0aW9uIDogVmVjdG9yXHJcbiAgICBjb25maWcgOiBHYW1lQ29uc3QuV2VhcG9uQW5pbWF0aW9uQ29uZmlnRGF0YVxyXG4gICAgc2hvdWxkZXJSYXlNaW5EaXN0YW5jZSA6IG51bWJlclxyXG4gICAgbm9TaG9vdGluZ1N0YXRlIDogYm9vbGVhblxyXG4gICAgbGF5ZXIgOiBudW1iZXJcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZShkdDpudW1iZXIpe1xyXG4gICAgICAgIC8vXHU1MkEwXHU5MDFGXHU4REQxXHU3MkI2XHU2MDAxXHU0RTBCXHU2NTM2XHU2N0FBLFx1NTE3Nlx1NEVENlx1NzJCNlx1NjAwMVx1NkI2M1x1NUUzOFx1NjMwMVx1NjdBQVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRlc3RydWN0b3IoKXtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgQ2xpZW50QmFzZSBmcm9tIFwiLi4vQ2xpZW50L0NsaWVudEJhc2VcIlxyXG5pbXBvcnQgeyBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQWNjZXNzb3J5QmFzZUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkFuaW1hdGlvbkNscyB9IGZyb20gXCIuL1dlYXBvbkFuaW1hdGlvbkNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkNhbWVyYUNscyB9IGZyb20gXCIuL1dlYXBvbkNhbWVyYUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbkdVSUNscyB9IGZyb20gXCIuL1dlYXBvbkdVSUNsc1wiXHJcbmltcG9ydCB7IFdlYXBvbk1hZ2F6aW5lQ2xzIH0gZnJvbSBcIi4vV2VhcG9uTWFnYXppbmVDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25SZWNvaWxDbHMgfSBmcm9tIFwiLi9XZWFwb25SZWNvaWxDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Tb3VuZENscyB9IGZyb20gXCIuL1dlYXBvblNvdW5kQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uVG9vbCB9IGZyb20gXCIuL1dlYXBvblRvb2xcIlxyXG50eXBlIEZpcmVNb2RlRW51bSA9IEdhbWVDb25zdC5GaXJlTW9kZUVudW1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWFwb25CYXNlQ2xzIHtcclxuXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTk4ODRcdTUyMzZcdTRGNTMqL1xyXG4gICAgcHVibGljIHByZWZhYjogR2FtZU9iamVjdFxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY3QUFcdTY4QjBcdTkxNERcdTdGNkVJRFxyXG4gICAgICovXHJcbiAgICBpZDogbnVtYmVyXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTdFRDFcdTVCOUFcdTc2ODRcdTk1MUFcdTcwQjkgKi9cclxuICAgIHB1YmxpYyByb290OiBHYW1lT2JqZWN0XHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTYyNDBcdTVDNUVcdTc2ODRcdTczQTlcdTVCQjZcdTg5RDJcdTgyNzIgKi9cclxuICAgIHB1YmxpYyBjaGFyYWN0ZXI6IENoYXJhY3RlclxyXG4gICAgLyoqXHU2N0FBXHU1M0UzXHU0RjREXHU3RjZFXHU3MEI5ICovXHJcbiAgICBwcml2YXRlIG11enpsZU9iajogR2FtZU9iamVjdFxyXG4gICAgLyoqXHU2N0FBXHU3QkExXHU2NUI5XHU1NDExICovXHJcbiAgICBwcml2YXRlIGRpcjogVmVjdG9yXHJcbiAgICAvKipcdTYyOTVcdTVGMzlcdTUzRTNcdTVCRjlcdThDNjEgKi9cclxuICAgIHByaXZhdGUgdG9zczogR2FtZU9iamVjdFxyXG5cclxuICAgIC8qKlx1NjdBQVx1NjhCMFx1NjYyRlx1NTQyNlx1ODhBQlx1NjMwMVx1NjcwOSAqL1xyXG4gICAgX2lzZHJhdzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBfaXNab29tSW4gOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzOiBudW1iZXIgPSAxXHJcbiAgICBwcml2YXRlIF9jdXJTaG9vdE1vZGUgOiBGaXJlTW9kZUVudW0gPSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLkF1dG9cclxuICAgIHByaXZhdGUgX2hhc0p1c3RGaXJlZCA6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfZmlyZVdhaXQgOiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIF9pc0dvaW5nVG9GaXJlID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzQWxsb3dlZCA9IHRydWVcclxuICAgIHByaXZhdGUgX3dhc0FsbG93ZWRBbmRGaXJpbmcgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNHb2luZ1RvUmVsb2FkTWFnYXppbmUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfaXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfcmVsb2FkV2FpdCA9IDBcclxuICAgIHByaXZhdGUgX29uUmVsb2FkID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzSWdub3JpbmdTZWxmID0gdHJ1ZVxyXG4gICAgcHJpdmF0ZSBfaGFzRmlyZUNvbmRpdGlvbiA9IHRydWVcclxuICAgIHByaXZhdGUgX2ZpcmVDb25kaXRpb25TaWRlID0gMVxyXG4gICAgcHJpdmF0ZSBfaXNHb2luZ1RvUHVtcCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1B1bXBOZXh0VXBkYXRlID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3B1bXBXYWl0ID0gMFxyXG4gICAgcHJpdmF0ZSBfaXNQdW1waW5nID0gZmFsc2VcclxuICAgIHByaXZhdGUgX2lzV2FpdGluZ1B1bXAgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfem9vbUluVHJ5UHVtcCA9IGZhbHNlXHJcbiAgICBwcml2YXRlIF9pc1dpdGhEcmF3aW5nID0gZmFsc2VcclxuICAgIHByaXZhdGUgX3B1bXBNYWtlU2hlbGwgPSBmYWxzZVxyXG4gICAgcHJpdmF0ZSBfYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICBwdWJsaWMgX3dlYXBvbkFjY2Vzc29yeUxpc3QgOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzPiA9IG5ldyBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtLCBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzPigpXHJcbiAgICBcclxuICAgIHByaXZhdGUgX21hZ2F6aW5lOiBXZWFwb25NYWdhemluZUNsc1xyXG4gICAgIF9yZWNvaWwgOiBXZWFwb25SZWNvaWxDbHNcclxuICAgIF9jYW1lcmFDb250cm9sIDogV2VhcG9uQ2FtZXJhQ2xzXHJcbiAgICAgX3dlYXBvbkdVSTpXZWFwb25HVUlDbHNcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbkNvbnRyb2xsZXIgOiBXZWFwb25BbmltYXRpb25DbHNcclxuICAgIHByaXZhdGUgX3dlYXBvblNvdW5kIDogV2VhcG9uU291bmRDbHNcclxuICAgIHB1YmxpYyBlcnJvcjogbnVtYmVyXHJcblxyXG4gICAgcHVibGljIF9jb25maWdEYXRhIDogR2FtZUNvbnN0LldlYXBvbkNvbmZpZ0RhdGFcclxuXHJcbiAgICBwcml2YXRlIF9hdXRvRmlyZUFpbTpib29sZWFuXHJcbiAgICBjb25zdHJ1Y3RvcihfY2hhcmFjdGVyOkNoYXJhY3RlciwgX3Jvb3QgOiBHYW1lT2JqZWN0LCBfd2VhcG9uT2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgICB0aGlzLkVhcmx5SW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgdGhpcy5wcmVmYWIgPSBfd2VhcG9uT2JqXHJcbiAgICAgICAgdGhpcy5yb290ID0gX3Jvb3RcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IF9jaGFyYWN0ZXJcclxuICAgICAgICB0aGlzLl9tYWdhemluZSA9IG5ldyBXZWFwb25NYWdhemluZUNscyh0aGlzKVxyXG4gICAgICAgIHRoaXMuX3JlY29pbCA9IG5ldyBXZWFwb25SZWNvaWxDbHMoKVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wgPSBuZXcgV2VhcG9uQ2FtZXJhQ2xzKHRoaXMuX3JlY29pbClcclxuICAgICAgICB0aGlzLl93ZWFwb25HVUkgPSBuZXcgV2VhcG9uR1VJQ2xzKClcclxuICAgICAgICB0aGlzLl9hbmltYXRpb25Db250cm9sbGVyID0gbmV3IFdlYXBvbkFuaW1hdGlvbkNscygpXHJcbiAgICAgICAgdGhpcy5fd2VhcG9uU291bmQgPSBuZXcgV2VhcG9uU291bmRDbHMoKVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuTGF0ZXJJbml0aWFsaXplKClcclxuICAgIH1cclxuICAgIC8qKlx1Njc5MFx1Njc4NFx1NTFGRFx1NjU3MFx1RkYwQ1x1OTcwMFx1ODk4MVx1NjI0Qlx1NTJBOFx1OEMwM1x1NzUyOCAqL1xyXG4gICAgcHVibGljIGRlc3RydWN0b3IoKSA6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuRWFybHlEZXN0cnVjdG9yKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5TZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIHRoaXMuX21hZ2F6aW5lLlJlY29yZGluZ0J1bGxldHNMZWZ0KHRydWUpXHJcbiAgICAgICAgdGhpcy5wcmVmYWIuc2V0VmlzaWJpbGl0eShUeXBlLlByb3BlcnR5U3RhdHVzLk9uKVxyXG4gICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLlVuRXF1aXBGcm9tV2VhcG9uKCkgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuY2xlYXIoKVxyXG4gICAgICAgIC8vXHU2NzkwXHU2Nzg0XHU2N0FBXHU0RTBBXHU3Njg0XHU4MUVBXHU2NzA5XHU3QzdCXHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5kZXN0cnVjdG9yKClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5kZXN0cnVjdG9yKClcclxuICAgICAgICB0aGlzLl9hbmltYXRpb25Db250cm9sbGVyLmRlc3RydWN0b3IoKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uU291bmQuZGVzdHJ1Y3RvcigpXHJcbiAgICAgICAgLy9cdTZFMDVcdTk2NjRcdTY3QUFcdTY4QjBcdTYyNDBcdTY3MDlcdTgwMDVcclxuICAgICAgICAvL3NlbGYuZ3VuLlBsYXllci5WYWx1ZSA9IG5pbFxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvKipcdTU3MjhcdTVCOUVcdTRGOEJcdTUzMTZcdTY3MDBcdTVGMDBcdTU5Q0JcdTYyNjdcdTg4NEMgKi9cclxuICAgIHByb3RlY3RlZCBFYXJseUluaXRpYWxpemUoKTp2b2lke1xyXG5cclxuICAgIH1cclxuICAgIC8qKlx1NUI5RVx1NEY4Qlx1NTMxNlx1NjcwMFx1NTQwRVx1NjI2N1x1ODg0QyAqL1xyXG4gICAgcHJvdGVjdGVkIExhdGVySW5pdGlhbGl6ZSgpOnZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBFYXJseURlc3RydWN0b3IoKTp2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcdTY3QUFcdTY4QjBcdTY2RjRcdTY1QjBcdTUxRkRcdTY1NzAgKi9cclxuICAgIHB1YmxpYyBVcGRhdGUoX2R0Om51bWJlcil7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzV2l0aERyYXdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc0dvaW5nVG9GaXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTgxRUFcdTUyQThcdTg4QzVcdTVGMzlcdTVGMDBcdTU0MkZcdTU0MEVcdUZGMENcdThGREJcdTg4NENcdTY4QzBcdTZENEIgKi9cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlnRGF0YS5hdXRvUmVsb2FkKSB7XHJcbiAgICAgICAgICAgIC8vaWYodGhpcy5fbWFnYXppbmUuKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTRFMEFcdTRFMDBcdTVFMjdcdTVGMDBcdTcwNkJcdTRFODZcdTVFNzZcdTRFMTRcdTk3MDBcdTg5ODFcdTYyQzlcdTY3QUFcdTY4MTMsXHU1RTc2XHU0RTE0XHU1RjUzXHU1MjREXHU2Q0ExXHU2NzA5XHU1NzI4XHU4OEM1XHU1QjUwXHU1RjM5XHU1NDhDXHU2QjYzXHU1NzI4XHU2MkM5XHU2N0FBXHU2ODEzXHU3Njg0XHU4RkM3XHU3QTBCXHU0RTJEICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEucHVtcEFmdGVyRmlyZSAmJiB0aGlzLl9oYXNKdXN0RmlyZWQgJiYgIXRoaXMuX29uUmVsb2FkICYmICF0aGlzLl9pc1B1bXBpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzWm9vbUluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhaXRpbmdQdW1wID0gdHJ1ZVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVtcFN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fem9vbUluVHJ5UHVtcCAmJiB0aGlzLl9pc1dhaXRpbmdQdW1wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3pvb21JblRyeVB1bXAgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuUHVtcFN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU1MUM2XHU1OTA3XHU1NzI4XHU0RTBCXHU0RTAwXHU1RTI3XHU4RkRCXHU4ODRDXHU2MzYyXHU1RjM5XHU2NENEXHU0RjVDICovXHJcbiAgICAgICAgaWYodGhpcy5faXNHb2luZ1RvUmVsb2FkTWFnYXppbmUpe1xyXG4gICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIC8vdGhpcy5fcmVsb2FkV2FpdCA9IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcdTUxQzZcdTU5MDdcdTU3MjhcdTRFMEJcdTRFMDBcdTVFMjdcdThGREJcdTg4NENcdTYyQzlcdTY3QUFcdTY4MTNcdTY0Q0RcdTRGNUMgKi9cclxuICAgICAgICBpZiAodGhpcy5faXNHb2luZ1RvUHVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1B1bXBOZXh0VXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9wdW1wTWFrZVNoZWxsID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNQdW1waW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9wdW1wV2FpdCA9IDEgLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU4RkRCXHU4ODRDXHU1RjAwXHU1OUNCXHU1QzA0XHU1MUZCL1x1NTA1Q1x1NkI2Mlx1NUMwNFx1NTFGQi9cdTVGMDBcdTU5Q0JcdTYzNjJcdTVCNTBcdTVGMzlcdTc2ODRcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDEgKi9cclxuICAgICAgICBsZXQgaXNBbGxvd2VkQW5kRmlyaW5nID0gdGhpcy5faXNHb2luZ1RvRmlyZSAmJiB0aGlzLl9pc0FsbG93ZWRcclxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGlzQWxsb3dlZEFuZEZpcmluZyAmJiAhdGhpcy5fd2FzQWxsb3dlZEFuZEZpcmluZykge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRmlyZVN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0FsbG93ZWRBbmRGaXJpbmcgJiYgdGhpcy5fd2FzQWxsb3dlZEFuZEZpcmluZykge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRmlyZVN0b3BwZWQsIHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzR29pbmdUb1B1bXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb1B1bXAgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUHVtcFN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzR29pbmdUb1JlbG9hZE1hZ2F6aW5lKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jb25maWdEYXRhLnJlbG9hZFdpdGhNYWdhemluZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50Lk1hZ2F6aW5lTG9hZFN0YXJ0ZWQsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5CdWxsZXRMb2FkU3RhcnRlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1pvb21Jbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvUmVsb2FkTWFnYXppbmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dhc0FsbG93ZWRBbmRGaXJpbmcgPSBpc0FsbG93ZWRBbmRGaXJpbmdcclxuXHJcbiAgICAgICAgdGhpcy5fZmlyZVdhaXQgLT0gX2R0XHJcbiAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCAtPSBfZHRcclxuICAgICAgICB0aGlzLl9wdW1wV2FpdCAtPSBfZHRcclxuICAgICAgICBpZiAodGhpcy5fcHVtcFdhaXQgPCAwLjggLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWQgJiYgdGhpcy5fcHVtcFdhaXQgPiAwICYmIHRoaXMuX2FpbUJlZm9yZVB1bXApIHtcclxuICAgICAgICAgICAgdGhpcy5NZWNoYW5pY2FsQWltU3RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9wdW1wV2FpdCA8IDAuNiAvIHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RTcGVlZCAmJiB0aGlzLl9wdW1wV2FpdCA+IDAgJiYgdGhpcy5faXNQdW1waW5nICYmICF0aGlzLl9wdW1wTWFrZVNoZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFrZUJ1bGxldFNoZWxsKClcclxuICAgICAgICAgICAgdGhpcy5fcHVtcE1ha2VTaGVsbCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHU2OEMwXHU2N0U1XHU1RjUzXHU1MjREXHU2MzYyXHU1RjM5XHU2NENEXHU0RjVDXHU2NjJGXHU1NDI2XHU3RUQzXHU2NzVGICovXHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0p1c3RGaXJlZCAmJiB0aGlzLl9jb25maWdEYXRhLmNhbkludGVycnVwdEJ1bGxldExvYWQpIHtcclxuICAgICAgICAgICAgLyoqXHU0RTBBXHU0RTAwXHU1RTI3XHU1RjAwXHU3MDZCXHU0RTg2XHVGRjBDXHU5NzAwXHU4OTgxXHU0RTJEXHU2NUFEXHU2MzYyXHU1RjM5XHU2NENEXHU0RjVDICovXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbG9hZFdhaXQgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSAmJiB0aGlzLl9yZWxvYWRXYWl0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ0RhdGEucmVsb2FkV2l0aE1hZ2F6aW5lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSByZWxvYWRpbmcgdGhlIGVudGlyZSBtYWdhemluZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWxvYWRPbk5leHRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYWdhemluZS5Mb2FkTWFnYXppbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlJlbG9hZEZpbmlzaGVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDdXJyZW50bHkgcmVsb2FkaW5nIG9uZSBidWxsZXQgYXQgYSB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFnYXppbmUuTG9hZE9uZUJ1bGxldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkJ1bGxldExvYWRlZCwgdGhpcylcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWxvYWRlZCBvbmUgYnVsbGV0LCBjaGVjayBpZiB0aGUgbWFnYXppbmUgaXMgbm90IGZ1bGx5IGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYWdhemluZS5VcGRhdGVMb2FkUGVyY2VudGFnZSgpICE9PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFnYXppbmUgaXMgbm90IGZ1bGx5IGxvYWRlZCwgY2hlY2sgaWYgaXQgY2FuIGNvbnRpbnVlIGxvYWRpbmcgYnVsbGV0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFnYXppbmUuVXBkYXRlQ2FuTG9hZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4gY29udGludWUgbG9hZGluZyBidWxsZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0aGlzLl9jb25maWdEYXRhLmNhbkludGVycnVwdEJ1bGxldExvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWxvYWRXYWl0ID0gdGhpcy5fbWFnYXppbmUuR2V0TG9hZFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCBjb250aW51ZSBsb2FkaW5nIGJ1bGxldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQWxsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25SZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LlJlbG9hZEZpbmlzaGVkLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hZ2F6aW5lIGlzIGZ1bGx5IGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblJlbG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlx1NjhDMFx1NjdFNVx1NUY1M1x1NTI0RFx1NjJDOVx1NjdBQVx1NjgxM1x1NjRDRFx1NEY1Q1x1NjYyRlx1NTQyNlx1N0VEM1x1Njc1RiAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1B1bXBOZXh0VXBkYXRlICYmIHRoaXMuX3B1bXBXYWl0IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0FsbG93ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX2lzUHVtcE5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1B1bXBpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9pc1dhaXRpbmdQdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuUHVtcGVkLCB0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGlzLl9haW1CZWZvcmVQdW1wICYmICF0aGlzLl9hdXRvRmlyZUFpbSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9haW1CZWZvcmVQdW1wID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oYXNKdXN0RmlyZWQgPSBmYWxzZVxyXG4gICAgICAgIC8qKlx1NjhDMFx1NjdFNVx1NUYwMFx1NzA2Qlx1NzJCNlx1NjAwMSAqL1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSAmJiB0aGlzLl9pc0FsbG93ZWQpIHtcclxuICAgICAgICAgICAgbGV0IGZpcmVEZWxheSA9IDEgLyB0aGlzLl9jb25maWdEYXRhLnNob290U3BlZWRcclxuICAgICAgICAgICAgbGV0IGRlbGF5ID0gMFxyXG4gICAgICAgICAgICBsZXQgaGFzRmlyZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLl9maXJlV2FpdCA8IDApe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSB0aGlzLl9jb25maWdEYXRhLmJ1bGxldFBlclNob290OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX21hZ2F6aW5lLmlzRW1wdHlMb2FkZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5GaXJlKGRlbGF5LCAhdGhpcy5fY29uZmlnRGF0YS5jb25zdW1lU2luZ2xlQnVsbGV0UGVyU2hvb3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0ZpcmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cy0tXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGhhc0ZpcmVkICYmIHRoaXMuX2NvbmZpZ0RhdGEuY29uc3VtZVNpbmdsZUJ1bGxldFBlclNob290KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbnN1bWUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaGFzRmlyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLl9jb25maWdEYXRhLnB1bXBBZnRlckZpcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1ha2VCdWxsZXRTaGVsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkZpcmVkLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRzLmRpc3BhdGNoTG9jYWwoR2FtZUNvbnN0LkxvY2FsV2VhcG9uRXZlbnQuRW1wdHlGaXJlLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsYXkgKz0gZmlyZURlbGF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maXJlV2FpdCArPSBmaXJlRGVsYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGhhc0ZpcmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlY29pbC5GaXJlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuSW5wdXRSZWNvaWwodGhpcy5fcmVjb2lsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHU0RTBEXHU1MTQxXHU4QkI4XHU1RjAwXHU2N0FBXHVGRjBDXHU1MjE5XHU1QzA2XHU2N0FBXHU0RTJEXHU1QjUwXHU1RjM5XHU4RkRFXHU1M0QxXHU1MjY5XHU0RjU5XHU1QjUwXHU1RjM5XHU2RTA1XHU5NkY2XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9pc0FsbG93ZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9cdTY4MzlcdTYzNkVcdTRFMERcdTU0MENcdTc2ODRcdTVGMDBcdTcwNkJcdTZBMjFcdTVGMEZcdThGREJcdTg4NENcdTY1NzBcdTYzNkVcdTkxQ0RcdTdGNkVcclxuICAgICAgICAgICAgaWYodGhpcy5fY3VyU2hvb3RNb2RlICE9IEdhbWVDb25zdC5GaXJlTW9kZUVudW0uQXV0byl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0cyA8PSAwIHx8IHRoaXMuX21hZ2F6aW5lLmlzRW1wdHlMb2FkZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzR29pbmdUb0ZpcmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyaW5nT25OZXh0VXBkYXRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2N1clNob290TW9kZSA9PSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLlNpbmdsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNGaXJpbmdPbk5leHRVcGRhdGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPD0gMCA/IDAgOiB0aGlzLl9yYXBpZGx5UmVtYWluaW5nQnVsbGV0c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0ZpcmluZ09uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZmlyZVdhaXQgPSBNYXRoLm1heCgwLCB0aGlzLl9maXJlV2FpdClcclxuICAgICAgICAgICAgdGhpcy5fcmVsb2FkV2FpdCA9IE1hdGgubWF4KDAsIHRoaXMuX3JlbG9hZFdhaXQpXHJcbiAgICAgICAgICAgIHRoaXMuX3B1bXBXYWl0ID0gTWF0aC5tYXgoMCwgdGhpcy5fcHVtcFdhaXQpXHJcbiAgICAgICAgICAgIC8vXHU1MTc2XHU0RUQ2XHU2M0E3XHU1MjM2XHU3QzdCXHU3Njg0XHU2NkY0XHU2NUIwXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uQ29udHJvbGxlci5VcGRhdGUoX2R0KVxyXG4gICAgICAgICAgICB0aGlzLl9yZWNvaWwuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuVXBkYXRlKF9kdClcclxuICAgICAgICAgICAgdGhpcy5fbWFnYXppbmUuVXBkYXRlKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuUmVmcmVzaFNjYWxlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2N0FBXHU0RTBBXHU4OEM1XHU1OTA3XHU0RTAwXHU0RTJBXHU5MTREXHU0RUY2XHJcbiAgICAgKiBAcGFyYW0gYWNjZSBcdTkxNERcdTRFRjZcdTVCOUVcdTRGOEJcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgRXF1aXBBY2Nlc3NvcnkoYWNjZTpXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzKTogW2Jvb2xlYW4sIFdlYXBvbkFjY2Vzc29yeUJhc2VDbHNdIHtcclxuICAgICAgICBsZXQgYWNjZUlkID0gYWNjZS5pZFxyXG4gICAgICAgIGxldCBjYW5CZUVxdWlwID0gZmFsc2VcclxuICAgICAgICB0aGlzLl9jb25maWdEYXRhLmNhbkJlRXF1aXBBY2Nlc3NvcnkuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpZCA9PSBhY2NlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbkJlRXF1aXAgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghY2FuQmVFcXVpcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2ZhbHNlLCBudWxsXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3JpZ2luQWNjZSA9IHRoaXMuX3dlYXBvbkFjY2Vzc29yeUxpc3QuZ2V0KGFjY2UuY29uZmlnRGF0YS5sb2NhdGlvbilcclxuICAgICAgICB0aGlzLl93ZWFwb25BY2Nlc3NvcnlMaXN0LnNldChhY2NlLmNvbmZpZ0RhdGEubG9jYXRpb24sIGFjY2UpXHJcbiAgICAgICAgYWNjZS5FcXVpcFRvV2VhcG9uKHRoaXMpXHJcbiAgICAgICAgcmV0dXJuIFt0cnVlLCBvcmlnaW5BY2NlXVxyXG4gICAgfVxyXG4gICAgcHVibGljIFVuRXF1aXBBY2Nlc3NvcnkoX2xvY2F0aW9uT3JDbHM6V2VhcG9uQWNjZXNzb3J5QmFzZUNscyB8IG51bWJlcik6IHZvaWR7XHJcbiAgICAgICAgaWYoX2xvY2F0aW9uT3JDbHMgaW5zdGFuY2VvZiBXZWFwb25BY2Nlc3NvcnlCYXNlQ2xzKXtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5kZWxldGUoX2xvY2F0aW9uT3JDbHMuY29uZmlnRGF0YS5sb2NhdGlvbilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fd2VhcG9uQWNjZXNzb3J5TGlzdC5kZWxldGUoX2xvY2F0aW9uT3JDbHMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHU2MzYyXHU1RjM5XHU1OTM5LFx1NjM2Mlx1NUYzOVx1NTkzOVx1NzY4NFx1NzY4NFx1NjVGNlx1NTAxOVx1NEUwRFx1ODBGRFx1NjJDOVx1NjdBQVx1NjgxMyAqL1xyXG4gICAgcHVibGljIExvYWRNYWdhemluZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcgJiYgISB0aGlzLl9pc1B1bXBpbmcgJiYgdGhpcy5fbWFnYXppbmUuY2FuTG9hZGVkICYmICEgdGhpcy5fb25SZWxvYWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9SZWxvYWRNYWdhemluZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgUHVtcFN0YXJ0KCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcgJiYgIXRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvUHVtcCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IHRoaXMuX2lzWm9vbUluXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIE1ha2VCdWxsZXRTaGVsbCgpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgaWYodGhpcy50b3NzID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgUm90YXRpb24oMTgwICogTWF0aC5yYW5kb20oKSwgMCwgMTgwICogTWF0aC5yYW5kb20oKSlcclxuICAgICAgICBsZXQgb2JqID0gYXdhaXQgR2FtZU9ialBvb2wuZ2V0SW5zdGFuY2UoKS5hc3luY1NwYXduKHRoaXMuX2NvbmZpZ0RhdGEuYnVsbGV0U2hlbGwpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkTG9jYXRpb24odGhpcy50b3NzLmdldFdvcmxkTG9jYXRpb24oKSlcclxuICAgICAgICBvYmouc2V0V29ybGRSb3RhdGlvbih0ZW1wKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIE1ha2VGaXJlRWZmZWN0KCk6UHJvbWlzZTx2b2lkPntcclxuICAgICAgICBsZXQgb2JqID1hd2FpdCBHYW1lT2JqUG9vbC5nZXRJbnN0YW5jZSgpLmFzeW5jU3Bhd24odGhpcy5fY29uZmlnRGF0YS5maXJlRWZmZWN0KVxyXG4gICAgICAgIG9iai5zZXRXb3JsZExvY2F0aW9uKHRoaXMubXV6emxlT2JqLmdldFdvcmxkTG9jYXRpb24oKSlcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlQnVsbGV0KGVuZE9iajpHYW1lT2JqZWN0LCBlbmRQb3M6VmVjdG9yLCBlbmROb3JtYWw6VmVjdG9yKXtcclxuICAgICAgICBpZighZW5kT2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZE9iaiBpbnN0YW5jZW9mIENoYXJhY3Rlcil7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JqID0gYXdhaXQgR2FtZU9ialBvb2wuZ2V0SW5zdGFuY2UoKS5hc3luY1NwYXduKHRoaXMuX2NvbmZpZ0RhdGEuYnVsbGV0SG9sZSlcclxuICAgICAgICBvYmouc2V0V29ybGRMb2NhdGlvbihlbmRQb3MpXHJcbiAgICAgICAgb2JqLnNldFdvcmxkU2NhbGUobmV3IFZlY3RvcigwLjEsIDAuMSwgMC4xKSlcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBhc3luYyBNYWtlSGl0RWZmZWN0KGVuZFBvczpWZWN0b3IpOlByb21pc2U8dm9pZD57XHJcbiAgICAgICAgbGV0IG9iaiA9IGF3YWl0IEdhbWVPYmpQb29sLmdldEluc3RhbmNlKCkuYXN5bmNTcGF3bih0aGlzLl9jb25maWdEYXRhLmhpdEVmZmVjdClcclxuICAgICAgICBvYmouc2V0V29ybGRMb2NhdGlvbihlbmRQb3MpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgSWdub3JlU2VsZihpZ25vcmU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5faXNJZ25vcmluZ1NlbGYgPSBpZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRGaXJlQ29uZGl0aW9uKHNpZGU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9oYXNGaXJlQ29uZGl0aW9uID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2ZpcmVDb25kaXRpb25TaWRlID0gc2lkZVxyXG4gICAgfVxyXG4gICAgcHVibGljIENhbmNlbEZpcmVDb25kaXRpb24oKXtcclxuICAgICAgICB0aGlzLl9oYXNGaXJlQ29uZGl0aW9uID0gZmFsc2VcclxuICAgIH1cclxuICAgIHB1YmxpYyBUcnlGaXJlT25lQnVsbGV0KCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgdGhpcy5faXNHb2luZ1RvRmlyZSA9IHRydWVcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9jdXJTaG9vdE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5TaW5nbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkZpcmVNb2RlRW51bS5SYXBpZGx5XzE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFwaWRseVJlbWFpbmluZ0J1bGxldHMgPSB0aGlzLl9jb25maWdEYXRhLnJhcGlkbHlfMVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5GaXJlTW9kZUVudW0uUmFwaWRseV8yOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JhcGlkbHlSZW1haW5pbmdCdWxsZXRzID0gdGhpcy5fY29uZmlnRGF0YS5yYXBpZGx5XzJcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFRyeUtlZXBGaXJlKCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNkcmF3ICYmIHRoaXMuX2N1clNob290TW9kZSA9PSBHYW1lQ29uc3QuRmlyZU1vZGVFbnVtLkF1dG8pe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0dvaW5nVG9GaXJlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBUcnlQdW1wKGI6Ym9vbGVhbil7XHJcbiAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5wdW1wQWZ0ZXJGaXJlICYmIHRoaXMuX2lzWm9vbUluICYmICF0aGlzLl9pc1B1bXBpbmcpe1xyXG4gICAgICAgICAgICAvL1x1NUYwMFx1NjdBQVx1NTQwRVx1ODk4MVx1NjJDOVx1NjgxM1x1NUU3Nlx1NEUxNFx1NzNCMFx1NTcyOFx1NjYyRlx1NUYwMFx1OTU1Q1x1NzJCNlx1NjAwMVxyXG4gICAgICAgICAgICB0aGlzLl96b29tSW5UcnlQdW1wID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighYil7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hdXRvRmlyZUFpbSA9IGJcclxuICAgIH1cclxuICAgIHB1YmxpYyBNZWNoYW5pY2FsQWltU3RhcnQoKTp2b2lkIHtcclxuICAgICAgICBpZih0aGlzLl9pc1pvb21JbiB8fCAhdGhpcy5faXNkcmF3KXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEodGhpcy5jaGFyYWN0ZXIubW92ZW1lbnRTdGF0ZSA9PSBNb3ZlbWVudE1vZGUuV2FsaykgfHwgdGhpcy5faXNQdW1waW5nIHx8IHRoaXMuX29uUmVsb2FkKXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzWm9vbUluID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuTWVjaGFuaWNhbEFpbVN0YXJ0KClcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5NZWNoYW5pY2FsQWltU3RhcnQoKVxyXG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkFpbUluLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgcHVibGljIE1lY2hhbmljYWxBaW1TdG9wKCk6dm9pZHtcclxuICAgICAgICBpZighKHRoaXMuX2lzWm9vbUluICYmIHRoaXMuX2lzZHJhdykpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNab29tSW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIC8vdGhpcy5fd2VhcG9uR1VJLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5BaW1PdXQsIHRoaXMpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgV2l0aGRyYXdXZWFwb24oKTp2b2lke1xyXG4gICAgICAgIGlmKCF0aGlzLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgaWYodGhpcy5faXNab29tSW4pe1xyXG4gICAgICAgICAgICB0aGlzLk1lY2hhbmljYWxBaW1TdG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2FtZXJhQ29udHJvbC5PblVuRXF1aXBXZWFwb24odHJ1ZSlcclxuICAgICAgICAvL3RoaXMuX3dlYXBvbkdVSS5TZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIHRoaXMucHJlZmFiLnNldFZpc2liaWxpdHkoVHlwZS5Qcm9wZXJ0eVN0YXR1cy5PZmYpXHJcbiAgICAgICAgaWYodGhpcy5fb25SZWxvYWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9yZWxvYWRXYWl0ID0gMFxyXG4gICAgICAgICAgICB0aGlzLl9pc1JlbG9hZE9uTmV4dFVwZGF0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVsb2FkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5faXNBbGxvd2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5SZWxvYWRGaW5pc2hlZCwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNkcmF3ID0gZmFsc2VcclxuICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5XaXRoRHJhd1dlYXBvbiwgdGhpcylcclxuICAgIH1cclxuICAgIHB1YmxpYyBEcmF3V2VhcG9uKCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLl9pc2RyYXcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNXaXRoRHJhd2luZyA9IHRydWVcclxuICAgICAgICB0aGlzLl9pc2RyYXcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5fYWltQmVmb3JlUHVtcCA9IGZhbHNlXHJcbiAgICAgICAgLy90aGlzLl93ZWFwb25HVUkuU2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUNvbnRyb2wuT25FcXVpcFdlYXBvbih0aGlzLCBudWxsKVxyXG4gICAgICAgIHRoaXMucHJlZmFiLnNldFZpc2liaWxpdHkoVHlwZS5Qcm9wZXJ0eVN0YXR1cy5PbilcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLl9pc1dhaXRpbmdQdW1wKXtcclxuICAgICAgICAgICAgdGhpcy5QdW1wU3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzV2l0aERyYXdpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7ICAgICAgIFxyXG4gICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKEdhbWVDb25zdC5Mb2NhbFdlYXBvbkV2ZW50LkRyYXdXZWFwb24sIHRoaXMpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnN1bWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIENvbnN1bWUoKTp2b2lkIHtcclxuICAgICAgICB0aGlzLl9tYWdhemluZS5Db25zdW1lKCkoKVxyXG4gICAgfVxyXG4gICAgcHVibGljIENoYW5nZVNob290TW9kZSgpOkdhbWVDb25zdC5GaXJlTW9kZUVudW0ge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzZHJhdyAmJiB0aGlzLl9pc0FsbG93ZWQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9jb25maWdEYXRhLnNob290TW9kZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIC8veVx1NjcwOVx1NTkxQVx1NzlDRFx1NUMwNFx1NTFGQlx1NkEyMVx1NUYwRlxyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbmRleDpudW1iZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ0RhdGEuc2hvb3RNb2RlLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlID09IHRoaXMuX2N1clNob290TW9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY29uZmlnRGF0YS5zaG9vdE1vZGVbbmV4dEluZGV4XSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJTaG9vdE1vZGUgPSB0aGlzLl9jb25maWdEYXRhLnNob290TW9kZVtuZXh0SW5kZXhdIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJTaG9vdE1vZGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmF5Q2FzdE9yaWdpbigpOlZlY3RvcntcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpLmFkZCh0aGlzLmNoYXJhY3Rlci5nZXRGb3J3YXJkVmVjdG9yKCkubXVsdGlwbHkoMC41KS5hZGQoKFZlY3Rvci51cC5tdWx0aXBseSh0aGlzLmNoYXJhY3Rlci5jYXBzdWxlSGFsZkhlaWdodCAqIDIgLSAwLjEpKSkpIFxyXG4gICAgfVxyXG4gICAgcHVibGljIFJheUNhc3RUYXJnZXQoKTpWZWN0b3J7XHJcbiAgICAgICAgbGV0IFtpbmZvLCBpc1RhcmdldF06W1ZlY3RvciwgYm9vbGVhbl0gPSB0aGlzLl9jYW1lcmFDb250cm9sLkdldFRhcmdldCgpXHJcbiAgICAgICAgaWYoaXNUYXJnZXQpe1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mb1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gaW5mby5tdWx0aXBseSh0aGlzLl9jb25maWdEYXRhLmRpc3RhbmNlKS5hZGQodGhpcy5tdXp6bGVPYmouZ2V0V29ybGRMb2NhdGlvbigpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgT3ZlcmxvYWRSYXlDYXN0KGRpcjpWZWN0b3IpOkdhbWVDb25zdC5XZWFwb25IaXRSZXN1bHR7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuUmF5Q2FzdE9yaWdpbigpLmFkZChkaXIubXVsdGlwbHkodGhpcy5fY29uZmlnRGF0YS5kaXN0YW5jZSkpXHJcbiAgICAgICAgbGV0IGluZm8gPSBHYW1lcGxheS5saW5lVHJhY2UodGhpcy5SYXlDYXN0T3JpZ2luKCksIHRhcmdldClcclxuICAgICAgICBsZXQgcmVzdWx0OkdhbWVDb25zdC5XZWFwb25IaXRSZXN1bHRcclxuICAgICAgICBpZihpbmZvLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1NTIyNFx1NUI5QVx1NTQ3RFx1NEUyRFx1NjYyRlx1OTc3Nlx1NUI1MFx1NjIxNlx1ODAwNVx1OTY5Q1x1Nzg4RFx1NzI2OVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGluZm8pIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbmZvLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gaW5mb1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIEdhbWVwbGF5LkNoYXJhY3RlciAmJiBlbGVtZW50LmdhbWVPYmplY3QgIT0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHU1NDdEXHU0RTJEXHU3Njg0XHU2NjJGXHU4OUQyXHU4MjcyXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nYW1lT2JqZWN0LmdldENvbGxpc2lvbigpID09IFR5cGUuQ29sbGlzaW9uU3RhdHVzLk9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkhpdFBvaW50ID0gZWxlbWVudC5pbXBhY3RQb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXRPYmplY3QgPSBlbGVtZW50LmdhbWVPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0Tm9ybWFsID0gZWxlbWVudC5pbXBhY3ROb3JtYWxcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0UGFydCA9IEdhbWVDb25zdC5IaXRQYXJ0RW51bS5Ob25lXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LklzVGFyZ2V0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTUyMjRcdTVCOUFcdTU0N0RcdTRFMkRcdTczQTlcdTVCQjZcdTc2ODRcdTkwRThcdTRGNEQsXHU1MjI0XHU1QjlBXHU2MjEwXHU1MjlGXHU1NDBFXHU3NkY0XHU2M0E1XHU4RkQ0XHU1NkRFXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluZm8sIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbmZvW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmdhbWVPYmplY3QgaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU3M0E5XHU1QkI2XHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU4OEFCXHU1NDdEXHU0RTJEXHU1MjI0XHU2NUFEXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU3M0E5XHU1QkI2XHU2NjJGXHU1NDI2XHU1REYyXHU3RUNGXHU2QjdCXHU0RUExXHU3Njg0XHU1MjI0XHU2NUFEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoQ2xpZW50QmFzZS5tSW5zdGFuY2UuR2V0UGxheWVyQXR0cihlbGVtZW50LmdhbWVPYmplY3QuZ3VpZCkuaHAgPD0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU1NDdEXHU0RTJEXHU4MUVBXHU1REYxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuX2NvbmZpZ0RhdGEuaXNIaXRTZWxmICYmIGVsZW1lbnQuZ2FtZU9iamVjdCA9PSBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LkhpdFBvaW50ID0gZWxlbWVudC5pbXBhY3RQb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5IaXRPYmplY3QgPSBlbGVtZW50LmdhbWVPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0Tm9ybWFsID0gZWxlbWVudC5pbXBhY3ROb3JtYWxcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuSGl0UGFydCA9IEdhbWVDb25zdC5IaXRQYXJ0RW51bS5Cb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LklzVGFyZ2V0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBDYWxjdWxhdGVSYXlDYXN0RGlyZWN0aW9uKCk6VmVjdG9ye1xyXG4gICAgICAgIGxldCBkaXIgPSB0aGlzLlJheUNhc3RUYXJnZXQoKS5zdWJ0cmFjdCh0aGlzLlJheUNhc3RPcmlnaW4oKSkubm9ybWFsaXplZFxyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRpb25Db250cm9sbGVyLm5vU2hvb3RpbmdTdGF0ZSkge1xyXG4gICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFx1NEUzQVx1NEUwRFx1NTNFRlx1NUMwNFx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICAgICAgICBkaXIgPSB0aGlzLm11enpsZU9iai5mb3J3YXJkVmVjdG9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc1pvb21JbiAmJiB0aGlzLl9jb25maWdEYXRhLmFjY3VyYXRlQWltKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFdlYXBvblRvb2wuUmFuZG9tUm90YXRlKGRpciwgdGhpcy5fcmVjb2lsLl9jdXJyZW50RXJyb3IpICAgICBcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBGaXJlKGRlbGF5Om51bWJlciwgY29uc3VtZTpib29sZWFuKXtcclxuICAgICAgICBsZXQgaXNGcmllbmQgPSBmYWxzZVxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLkNhbGN1bGF0ZVJheUNhc3REaXJlY3Rpb24oKVxyXG4gICAgICAgIGxldCBoaXQgPSB0aGlzLk92ZXJsb2FkUmF5Q2FzdChkaXJlY3Rpb24pXHJcbiAgICAgICAgdGhpcy5faGFzSnVzdEZpcmVkID0gdHJ1ZVxyXG4gICAgICAgIGlmKCFpc0ZyaWVuZCAmJiBoaXQpe1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gaGl0LkhpdFBvaW50XHJcbiAgICAgICAgICAgIGxldCBlbmROb3JtID0gaGl0LkhpdE5vcm1hbFxyXG4gICAgICAgICAgICBsZXQgZW5kT2JqID0gaGl0LkhpdE9iamVjdFxyXG4gICAgICAgICAgICBpZihjb25zdW1lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29uc3VtZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWhpdC5IaXRPYmplY3Qpe1xyXG4gICAgICAgICAgICAgICAgZW5kUG9zID0gdGhpcy5SYXlDYXN0T3JpZ2luKCkuYWRkKGRpcmVjdGlvbi5tdWx0aXBseSh0aGlzLl9jb25maWdEYXRhLmRpc3RhbmNlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLk1ha2VCdWxsZXQoZW5kT2JqLCBlbmRQb3MsIGVuZE5vcm0pXHJcbiAgICAgICAgICAgIGlmKGhpdC5IaXRQYXJ0ICYmIGhpdC5IaXRQYXJ0ICE9IEdhbWVDb25zdC5IaXRQYXJ0RW51bS5Ob25lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGFtYWdlKGhpdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLk1ha2VIaXRFZmZlY3QoZW5kUG9zKVxyXG4gICAgICAgICAgICBpZihoaXQuSXNUYXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgaGl0LkRhbWFnZSA9IHRoaXMuX2NvbmZpZ0RhdGEuZGFtYWdlXHJcbiAgICAgICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5TdWNjZXNzZnVsbHlIaXRUYXJnZXQsIHRoaXMsIGhpdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgRGFtYWdlKGhpdCA6IEdhbWVDb25zdC5XZWFwb25IaXRSZXN1bHQpe1xyXG4gICAgICAgIGxldCBoaXRQb3MgPSBoaXQuSGl0UG9pbnRcclxuICAgICAgICBsZXQgYXR0ZW51YXRpb246bnVtYmVyXHJcbiAgICAgICAgaWYoaGl0UG9zID09IG51bGwpe1xyXG4gICAgICAgICAgICBhdHRlbnVhdGlvbiA9IDBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGRpczpudW1iZXIgPSBoaXRQb3Muc3VidHJhY3QodGhpcy5jaGFyYWN0ZXIuZ2V0V29ybGRMb2NhdGlvbigpKS5tYWduaXR1ZGVcclxuICAgICAgICAgICAgYXR0ZW51YXRpb24gPSBXZWFwb25Ub29sLkdldEF0dGVudWF0aW9uQnlHdW5JZCgxLCB0aGlzLCBkaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLl9jb25maWdEYXRhLmRhbWFnZSArIGF0dGVudWF0aW9uXHJcbiAgICAgICAgZGFtYWdlID0gZGFtYWdlIDw9IDAgPyAwIDogZGFtYWdlXHJcbiAgICAgICAgc3dpdGNoIChoaXQuSGl0UGFydCkge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25zdC5IaXRQYXJ0RW51bS5MaW1iOlxyXG4gICAgICAgICAgICAgICAgZGFtYWdlID0gZGFtYWdlICogdGhpcy5fY29uZmlnRGF0YS5oaXRMaW1iRGFtYWdlUmF0ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbnN0LkhpdFBhcnRFbnVtLkJvZHk6XHJcbiAgICAgICAgICAgICAgICBkYW1hZ2UgPSBkYW1hZ2UgKiB0aGlzLl9jb25maWdEYXRhLmhpdEJvZHlEYW1hZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uc3QuSGl0UGFydEVudW0uSGVhZDpcclxuICAgICAgICAgICAgICAgIGRhbWFnZSA9IGRhbWFnZSAqIHRoaXMuX2NvbmZpZ0RhdGEuaGl0SGVhZERhbWFnZVJhdGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRhbWFnZSA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0UGxheWVyIDogQ2hhcmFjdGVyIFxyXG4gICAgICAgICAgICBFdmVudHMuZGlzcGF0Y2hMb2NhbChHYW1lQ29uc3QuTG9jYWxXZWFwb25FdmVudC5TdWNjZXNzZnVsbHlIaXQsIGhpdFBvcywgdGFyZ2V0UGxheWVyLCBkYW1hZ2UsIGhpdC5IaXRQYXJ0KVxyXG4gICAgICAgICAgICAvL1x1NEYyNFx1NUJCM1x1NTNEMVx1OEQ3N1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFJlZnJlc2hTY2FsZXMoKSB7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDFcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsICJpbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25SZWNvaWxDbHMgfSBmcm9tIFwiLi9XZWFwb25SZWNvaWxDbHNcIjtcclxuaW1wb3J0IHsgVHdlZW5VdGlsIH0gZnJvbSBcIi4uL1Rvb2wvVHdlZW5VdGlsXCI7XHJcbmltcG9ydCB7IFdlYXBvblRvb2wgfSBmcm9tIFwiLi9XZWFwb25Ub29sXCI7XHJcbmltcG9ydCB7IENhbWVyYUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9DYW1lcmFDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uQ2FtZXJhQ2xze1xyXG4gICAgZ3VuUmVjb2lsIDogV2VhcG9uUmVjb2lsQ2xzXHJcbiAgICBndW4gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBtX2NhbWVyYSA6IENhbWVyYVN5c3RlbVxyXG4gICAgbV9vcmlnaW5ab29tIDogbnVtYmVyXHJcbiAgICBtX3N1cHBvc2VkWm9vbSA6IG51bWJlclxyXG4gICAgbV9zaWdodFpvb20gOiBudW1iZXJcclxuICAgIGFpbVRpbWUgOiBudW1iZXJcclxuICAgIG1faXNab29tSW4gOiBib29sZWFuXHJcbiAgICBtX29yaWdpbk9mZnNldCA6IFZlY3RvclxyXG4gICAgbV9haW1PZmZzZXQgOiBWZWN0b3JcclxuICAgIG1fY3VycmVudE9mZnNldCA6IFZlY3RvclxyXG4gICAgaXNVcGRhdGluZyA6IGJvb2xlYW5cclxuICAgIHNjcmVlblNpemUgOiBWZWN0b3IyXHJcbiAgICBtX3NlbnNpdGl2aXR5IDogbnVtYmVyXHJcbiAgICBtX29yaWdpbkRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICAvKipcdTc2RjhcdTY3M0FcdTgxQzJcdTk1N0ZcdTVFQTYgKi9cclxuICAgIGRpc3RhbmNlIDogbnVtYmVyXHJcbiAgICBtX2FpbURpc3RhbmNlIDogbnVtYmVyXHJcbiAgICAvKipcdTgxRUFcdTY1Q0JcdTg5RDIgKi9cclxuICAgIG1fZ2FtbWEgOiBudW1iZXJcclxuICAgIC8qKlx1NkMzNFx1NUU3M1x1NTA0Rlx1NzlGQiAqL1xyXG4gICAgZGVsdGFQaHkgOiBudW1iZXJcclxuICAgIC8qKlx1N0FENlx1NzZGNFx1NTA0Rlx1NzlGQiAqL1xyXG4gICAgZGVsdGFUaGV0YSA6IG51bWJlclxyXG4gICAgLyoqZm92XHU1M0Q4XHU1MzE2XHU1MDNDICovXHJcbiAgICBtX2RlbHRhRk9WIDogbnVtYmVyXHJcbiAgICBtX2xhc3RNb3VzZVBvcyA6IFZlY3RvcjJcclxuICAgIHZpYnJhdGlvbkFtcGwgOiBudW1iZXJcclxuICAgIG1fYmFja1RpbWUgOiBudW1iZXJcclxuICAgIG1fanVtcFRvdGFsIDogVmVjdG9yMlxyXG4gICAgbV9iYWNrVG90YWwgOiBudW1iZXJcclxuICAgIGVuYWJsZUFzc2lzdEFpbSA6IGJvb2xlYW5cclxuICAgIGFpbUVuZW15IDogR2FtZXBsYXkuQ2hhcmFjdGVyXHJcbiAgICBBaW1pbmdJc092ZXIgOiBib29sZWFuXHJcbiAgICBtX2p1bXBGb3ZSYXRlU2NhbGUgOiBudW1iZXJcclxuICAgIG1fYWltVGltZVJhdGVTY2FsZSA6IG51bWJlclxyXG4gICAgbGFzdFpvb20gOiBudW1iZXJcclxuICAgIHRhcmdldENhbGxUaW1lIDogbnVtYmVyXHJcbiAgICB0YXJnZXRSZXR1cm4gOiBbVmVjdG9yLCBib29sZWFuXVxyXG4gICAgbV9qdW1wRm92UmF0ZVRhYmxlIDogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPlxyXG4gICAgbV9haW1UaW1lUmF0ZVRhYmxlIDogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPlxyXG4gICAgXHJcbiAgICBzZWxmU3BpbkNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBqdW1wRk9WQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGp1bXBDb250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAgcmVjb3ZlckNvbnRyb2xsZXI6VHdlZW5VdGlsXHJcbiAgICBhc3Npc3RBaW1Db250cm9sbGVyOlR3ZWVuVXRpbFxyXG4gICAgYWltQ29udHJvbGxlcjpUd2VlblV0aWxcclxuICAgIGRlYWltQ29udHJvbGxlcjpUd2VlblV0aWxcclxuXHJcbiAgICBjb25maWdEYXRhIDogR2FtZUNvbnN0LldlYXBvbkNhbWVyYUNvbmZpZ0RhdGFcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihfZ3VuUmVjb2lsOldlYXBvblJlY29pbENscyl7XHJcbiAgICAgICAgV2VhcG9uVG9vbC5Jbml0V2VhcG9uQ2FtZXJhQ29uZmlnKHRoaXMpXHJcbiAgICAgICAgdGhpcy5ndW5SZWNvaWwgPSBfZ3VuUmVjb2lsXHJcbiAgICAgICAgdGhpcy5ndW4gPSBfZ3VuUmVjb2lsLmd1blxyXG4gICAgICAgIHRoaXMubV9vcmlnaW5ab29tID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEud2Fpc3RBaW1GT1ZcclxuICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICB0aGlzLm1fc2lnaHRab29tID0gdGhpcy5ndW4uX2NvbmZpZ0RhdGEubWVjaGluaWNhbEFpbUZPVlxyXG4gICAgICAgIHRoaXMuYWltVGltZSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLmFpbVRpbWVcclxuICAgICAgICAvL3RoaXMubV9vcmlnaW5PZmZzZXQgPSBcdTUxNjhcdTVDNDBcdTkxNERcdTdGNkVcclxuICAgICAgICAvL3RoaXMubV9haW1PZmZzZXQgPSBcdTUxNjhcdTVDNDBcdTkxNERcdTdGNkVcclxuICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9vcmlnaW5PZmZzZXRcclxuICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZSA9IFdpbmRvd1V0aWwuZ2V0Vmlld3BvcnRTaXplKClcclxuICAgICAgICAvL3RoaXMubV9zZW5zaXRpdml0eSA9IFxyXG4gICAgICAgIC8vdGhpcy5tX29yaWdpbkRpc3RhbmNlID0gXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMubV9vcmlnaW5EaXN0YW5jZVxyXG4gICAgICAgIC8vdGhpcy5tX2FpbURpc3RhbmNlID0gXHJcbiAgICAgICAgdGhpcy5tX2dhbW1hID0gMFxyXG4gICAgICAgIHRoaXMuZGVsdGFQaHkgPSAwXHJcbiAgICAgICAgdGhpcy5kZWx0YVRoZXRhID0gMFxyXG4gICAgICAgIHRoaXMubV9kZWx0YUZPViA9IDBcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gbmV3IFZlY3RvcjIoKVxyXG4gICAgICAgIHRoaXMudmlicmF0aW9uQW1wbCA9IDBcclxuICAgICAgICB0aGlzLm1fYmFja1RpbWUgPSAwXHJcbiAgICAgICAgdGhpcy5tX2p1bXBUb3RhbCA9IFZlY3RvcjIuemVyb1xyXG4gICAgICAgIHRoaXMubV9iYWNrVG90YWwgPSAwXHJcbiAgICAgICAgLy90aGlzLmVuYWJsZUFzc2lzdEFpbSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5haW1FbmVteSA9IG51bGxcclxuICAgICAgICB0aGlzLkFpbWluZ0lzT3ZlciA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlU2NhbGUgPSAxXHJcbiAgICAgICAgdGhpcy5tX2FpbVRpbWVSYXRlU2NhbGUgPSAxXHJcbiAgICAgICAgLyoqelx1OEY3NFx1NjVDQlx1OEY2Q1x1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgbGV0IHJlbW5QaGFzZSA9IDIgKiBNYXRoLlBJIC0gdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJwaGFzZVwiKVxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5tX2JhY2tUaW1lLCByZW1uUGhhc2UgLyB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh0MTpudW1iZXIsdDI6bnVtYmVyLHQzOm51bWJlcik9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubV9nYW1tYSA9IHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwiQW1wbFwiKSAqIE1hdGguZXhwKC10aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAqIHQxKSAqIFxyXG4gICAgICAgICAgICAgICAgTWF0aC5zaW4odGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhICogdDEpICsgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJwaGFzZVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fZ2FtbWEgPSAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuaGFzKFwicGhhc2VcIil8fCF0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLmhhcyhcIkFtcGxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInBoYXNlXCIsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJBbXBsXCIsIHRoaXMudmlicmF0aW9uQW1wbCAqIFdlYXBvblRvb2wuR2F1c3NSYW5kb20oKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQSA9IHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwiQW1wbFwiKSAqIE1hdGguZXhwKC10aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAqIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLnRpbWUpXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDAgPSB0ZW1wQSAqIHRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25PbWVnYSAqIFxyXG4gICAgICAgICAgICAgICAgTWF0aC5jb3ModGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhICogdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIudGltZSArIHRoaXMuc2VsZlNwaW5Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicGhhc2VcIikpXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGEgPSB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgKiB0aGlzLnZpYnJhdGlvbkFtcGwgKiBXZWFwb25Ub29sLkdhdXNzUmFuZG9tKClcclxuICAgICAgICAgICAgICAgIGxldCBuZXdQaGFzZSA9IE1hdGguYXRhbih0aGlzLm1fZ2FtbWEgKiB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uT21lZ2EgLyAoZGVsdGEgK3RlbXAwKSlcclxuICAgICAgICAgICAgICAgIGxldCBuZXdBbXBsID0gKGRlbHRhICsgdGVtcDApIC8gdGhpcy5jb25maWdEYXRhLnZpYnJhdGlvbk9tZWdhIC8gTWF0aC5jb3MobmV3UGhhc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInBoYXNlXCIsIG5ld1BoYXNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJBbXBsXCIsIG5ld0FtcGwpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLyoqXHU4REYzXHU1MkE4Rk9WXHU1MkE4XHU3NTNCICovXHJcbiAgICAgICAgdGhpcy5qdW1wRk9WQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RkU3BlZWQgPSB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwianVtcEZPVlwiKSAvIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZFNwZWVkID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDIgKiB0aGlzLmNvbmZpZ0RhdGEuanVtcFRpbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmp1bXBGT1ZDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwianVtcEZPVlwiKSAtIHRoaXMubV9kZWx0YUZPVikgLyBzdGRTcGVlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAodDIgLXQxID4gMiAqIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9kZWx0YUZPViArPSBkdCAqIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJqdW1wRk9WXCIpIC8gdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubV9kZWx0YUZPViA9ICh0MiAtdDEpLygyICogdGhpcy5jb25maWdEYXRhLmp1bXBUaW1lKSAqIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJqdW1wRk9WXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubV9kZWx0YUZPViA9IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJqdW1wRk9WXCIsIHRoaXMuR2V0SnVtcEZPVigpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8qKlx1NjdBQVx1NTNFM1x1OERGM1x1NTJBOFx1NjAzQlx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnRGF0YS5qdW1wVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgb21lZ2EgPSAwLjUgKiBNYXRoLlBJIC8gdDJcclxuICAgICAgICAgICAgICAgIGxldCBwb3dlciA9IG9tZWdhICogTWF0aC5jb3Mob21lZ2EgKiAodDEgLSAwLjUgKiBkdCkpICogZHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFUaGV0YSA9IHRoaXMuZGVsdGFUaGV0YSArIHBvd2VyICogdGhpcy5tX2p1bXBUb3RhbC55XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhUGh5ID0gdGhpcy5kZWx0YVBoeSArIHBvd2VyICogdGhpcy5tX2p1bXBUb3RhbC54XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwidG90YWxcIiAsIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJ0b3RhbFwiKS5zdWJ0cmFjdCh0aGlzLm1fanVtcFRvdGFsLm11bHRpcGx5KHBvd2VyKSkpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFUaGV0YSArPSB0aGlzLmp1bXBDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwidG90YWxcIikueVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVBoeSArPSB0aGlzLmp1bXBDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwidG90YWxcIikueFxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInRvdGFsXCIsIG5ldyBWZWN0b3IyKCkpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5haW1FbmVteSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ndW4uX3dlYXBvbkdVSS5GaXJlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZWNvdmVyQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qdW1wQ29udHJvbGxlci5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCB0aGlzLm1fanVtcFRvdGFsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8qKlx1NjdBQVx1NTNFM1x1NTZERVx1NTkwRFx1NjAzQlx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIgPSBuZXcgVHdlZW5VdGlsKFxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubV9iYWNrVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgQW1wbCA9IHRoaXMubV9iYWNrVG90YWwgKiB0aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAvICgxIC0gTWF0aC5leHAoLXRoaXMuY29uZmlnRGF0YS52aWJyYXRpb25EdW1wICogdDIpKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gQW1wbCAqIE1hdGguZXhwKC10aGlzLmNvbmZpZ0RhdGEudmlicmF0aW9uRHVtcCAqICh0MSAtIDAuNSAqIGR0KSkgKiBkdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVRoZXRhID0gdGhpcy5kZWx0YVRoZXRhIC0gZGVsdGFcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCB0aGlzLnJlY292ZXJDb250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwidG90YWxcIikgKyBkZWx0YSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJ0b3RhbFwiLCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8qKlx1OEY4NVx1Nzc4NFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltVGltZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoX3QxOm51bWJlcixfdDI6bnVtYmVyLF9kdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWltRW5lbXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHRoaXMuYWltRW5lbXkpXHJcbiAgICAgICAgICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NURGMlx1N0VDRlx1NTcyOFx1Nzc4NFx1Nzc0MFx1NEVCQVx1NEU4Nlx1NTIxOVx1NTA1Q1x1NkI2MlxyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS5ub3JtYWxpemVkXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRDYW1lcmFQb3MoKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IEdhbWVwbGF5LmxpbmVUcmFjZShwb3MuYWRkKGRpci5tdWx0aXBseSgwLjUpKSwgcG9zLmFkZChkaXIubXVsdGlwbHkodGhpcy5ndW4uX2NvbmZpZ0RhdGEuZGlzdGFuY2UpKSlcclxuICAgICAgICAgICAgICAgIHJlcy5mb3JFYWNoKCh2ICxrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYuZ2FtZU9iamVjdCA9PSB0aGlzLmFpbUVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzQ2hhbmdlXCIsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1NjJDOVx1OEZDN1x1NTkzNFx1NEU4Nlx1NTIxOVx1NTA1Q1x1NkI2MlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5Jc1JpZ2h0KHRhcmdldFBvcykhPSB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc0NoYW5nZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwiaXNDaGFuZ2VcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJpc0NoYW5nZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhVGhldGEgKz0gX2R0ICogdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwib21lZ2FUaGV0YVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWx0YVBoeSArPSBfZHQgKiB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5nZXQoXCJvbWVnYVBoeVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuR2V0QWltUG9zKHRoaXMuYWltRW5lbXkpXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSB0YXJnZXRQb3Muc3VidHJhY3QodGhpcy5HZXRDYW1lcmFQb3MoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcImlzUmlnaHRcIiwgdGhpcy5Jc1JpZ2h0KHRhcmdldFBvcykpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJpc0NoYW5nZVwiLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGxldCB0aGV0YVRvdGFsID0gTWF0aC5hdGFuKHJlbGF0aXZlUG9zLnkgLyBuZXcgVmVjdG9yMihyZWxhdGl2ZVBvcy54LCByZWxhdGl2ZVBvcy56KS5tYWduaXR1ZGUpLVxyXG4gICAgICAgICAgICAgICAgKDkwIC0gVmVjdG9yLmFuZ2xlKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSkgLyAxODAgKiBNYXRoLlBJXHJcbiAgICAgICAgICAgICAgICBsZXQgcGh5VG90YWwgPSBWZWN0b3IyLmFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKHJlbGF0aXZlUG9zLngsIHJlbGF0aXZlUG9zLnopLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKS54LCB0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCkueilcclxuICAgICAgICAgICAgICAgICkgKlxyXG4gICAgICAgICAgICAgICAgTWF0aC5QSSAvIDE4MCAqXHJcbiAgICAgICAgICAgICAgICAodGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwiaXNSaWdodFwiKSA/IC0xIDogMSlcclxuICAgICAgICAgICAgICAgIGxldCByYXRpbyA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLmFzc2lzdEFpbVJhdGlvIC8gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltVGltZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3Npc3RBaW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwib21lZ2FUaGV0YVwiLCB0aGV0YVRvdGFsICogcmF0aW8pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIuY3VzdG9tRGF0YS5zZXQoXCJvbWVnYVBoeVwiLCBwaHlUb3RhbCAqIHJhdGlvKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vXHU1RjAwXHU5NTVDXHU2MDNCXHU1MkE4XHU3NTNCXHJcbiAgICAgICAgdGhpcy5haW1Db250cm9sbGVyID0gbmV3IFR3ZWVuVXRpbChcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdldEFpbVRpbWUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAodDE6bnVtYmVyLHQyOm51bWJlcixkdDpudW1iZXIpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9yID0gdDEgLyB0MlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9ICgxIC0gcG9yKSAqIHRoaXMubV9vcmlnaW5ab29tICsgcG9yICogdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwic2lnaHRab29tXCIpXHJcbiAgICAgICAgICAgICAgICBwb3IgPSBNYXRoLnNxcnQoMSAtICggMSAtIHBvcikgKiAoIDEgLSBwb3IpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2N1cnJlbnRPZmZzZXQgPSB0aGlzLm1fb3JpZ2luT2Zmc2V0Lm11bHRpcGx5KDEgLSBwb3IpLmFkZCh0aGlzLm1fYWltT2Zmc2V0Lm11bHRpcGx5KHBvcikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gKDEtcG9yKSAqIHRoaXMubV9vcmlnaW5EaXN0YW5jZSArIHBvciAqIHRoaXMubV9haW1EaXN0YW5jZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fc3VwcG9zZWRab29tID0gdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwic2lnaHRab29tXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9haW1PZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fYWltRGlzdGFuY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuQWltaW5nSXNPdmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRlYWltQ29udHJvbGxlci5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLlN0b3BGdW5jdGlvbih0aGlzLmRlYWltQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9pc1pvb21JbiA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vXHU2NzJDXHU1NzMwXHU4QkJFXHU3RjZFXHU4OUQyXHU4MjcyXHU0RTBEXHU1M0VGXHU4OUMxXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1Db250cm9sbGVyLmN1c3RvbURhdGEuc2V0KFwic2lnaHRab29tXCIsIHRoaXMuR2V0U2lnaHRGT1YoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkgICAgICAgXHJcbiAgICAgICAgLy9cdTUxNzNcdTk1NUNcdTYwM0JcdTY1QjlcdTZDRDVcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlciA9IG5ldyBUd2VlblV0aWwoXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuc3RvcEFpbVRpbWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHQxOm51bWJlcix0MjpudW1iZXIsZHQ6bnVtYmVyKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvciA9IHQxIC8gdDJcclxuICAgICAgICAgICAgICAgIHRoaXMubV9zdXBwb3NlZFpvb20gPSAoMS1wb3IpKnRoaXMuZGVhaW1Db250cm9sbGVyLmN1c3RvbURhdGEuZ2V0KFwicHJlWm9vbVwiKStwb3IqdGhpcy5tX29yaWdpblpvb21cclxuICAgICAgICAgICAgICAgIHRoaXMubV9jdXJyZW50T2Zmc2V0ID0gdGhpcy5tX2FpbU9mZnNldC5tdWx0aXBseSgxIC0gcG9yKS5hZGQodGhpcy5tX29yaWdpbk9mZnNldC5tdWx0aXBseShwb3IpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9ICgxLXBvcikqdGhpcy5tX2FpbURpc3RhbmNlK3Bvcip0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VycmVudE9mZnNldCA9IHRoaXMubV9vcmlnaW5PZmZzZXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLm1fb3JpZ2luRGlzdGFuY2VcclxuICAgICAgICAgICAgICAgIC8vdG9kbyBcdTY3MkNcdTU3MzBcdThCQkVcdTdGNkVcdTg5RDJcdTgyNzJcdTUzRUZcdTg5QzFcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldFByb3BlcnRpZXMoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFpbUNvbnRyb2xsZXIuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuU3RvcEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubV9pc1pvb21JbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlci5jdXN0b21EYXRhLnNldChcInByZVpvb21cIiwgdGhpcy5tX3N1cHBvc2VkWm9vbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5FbmRBbGwoKVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKGR0Om51bWJlcikge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzVXBkYXRpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5TZXRQcm9wZXJ0aWVzKClcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgdGhpcy5tX2FpbVRpbWVSYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5haW1UaW1lUmF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm1fanVtcEZvdlJhdGVUYWJsZS5zZXQoaywgdi5jb25maWdEYXRhLmp1bXBGb3ZSYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5qdW1wRk9WQ29udHJvbGxlciwgZHQpXHJcbiAgICAgICAgdGhpcy5qdW1wQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLnJlY292ZXJDb250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMucmVjb3ZlckNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5VcGRhdGVGdW5jdGlvbih0aGlzLmFzc2lzdEFpbUNvbnRyb2xsZXIsIGR0KVxyXG4gICAgICAgIHRoaXMuZGVhaW1Db250cm9sbGVyLlVwZGF0ZUZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyLCBkdClcclxuICAgICAgICB0aGlzLmFpbUNvbnRyb2xsZXIuVXBkYXRlRnVuY3Rpb24odGhpcy5haW1Db250cm9sbGVyLCBkdClcclxuXHJcbiAgICAgICAgdGhpcy5SZWZyZXNoU2NhbGVzKClcclxuICAgICAgICB0aGlzLlJlZnJlc2hTZXR0aW5ncygpXHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhVGhldGEgPSAwXHJcbiAgICB9XHJcbiAgICBPbkVxdWlwV2VhcG9uKF9ndW5Db250cm9sbGVyIDogV2VhcG9uQmFzZUNscywgaW5mbykge1xyXG4gICAgICAgIHRoaXMuZ3VuID0gX2d1bkNvbnRyb2xsZXJcclxuICAgICAgICB0aGlzLm1fY2FtZXJhID0gR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5jYW1lcmFTeXN0ZW1cclxuICAgICAgICB0aGlzLmxhc3Rab29tID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFGT1ZcclxuICAgICAgICBsZXQgdCA9IG5ldyBUcmFuc2Zvcm0oKVxyXG4gICAgICAgIHQucm90YXRpb24gPSB0aGlzLm1fY2FtZXJhLmNhbWVyYVN5c3RlbVJlbGF0aXZlVHJhbnNmb3JtLnJvdGF0aW9uXHJcbiAgICAgICAgdC5zY2FsZSA9IHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0uc2NhbGVcclxuICAgICAgICB0LmxvY2F0aW9uID0gbmV3IFZlY3RvcigwLCAwLCBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmNhcHN1bGVIYWxmSGVpZ2h0ICogMikuYWRkKHRoaXMubV9jdXJyZW50T2Zmc2V0KVxyXG4gICAgICAgIHRoaXMubV9jYW1lcmEuY2FtZXJhU3lzdGVtUmVsYXRpdmVUcmFuc2Zvcm0gPSB0XHJcbiAgICAgICAgdGhpcy5tX3NpZ2h0Wm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLm1lY2hpbmljYWxBaW1GT1ZcclxuICAgICAgICB0aGlzLm1fb3JpZ2luWm9vbSA9IHRoaXMuZ3VuLl9jb25maWdEYXRhLndhaXN0QWltRk9WXHJcbiAgICAgICAgdGhpcy5tX3N1cHBvc2VkWm9vbSA9IHRoaXMubV9vcmlnaW5ab29tXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5maWVsZE9mVmlldyA9IHRoaXMubV9zaWdodFpvb21cclxuICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSB0cnVlXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5ndW4gPSB0aGlzLmd1blxyXG4gICAgfVxyXG4gICAgSW5wdXRSZWNvaWwoX3JlY29pbCA6IFdlYXBvblJlY29pbENscyl7XHJcbiAgICAgICAgdGhpcy5tX2JhY2tUaW1lID0gdGhpcy5HZXRCYWNrVGltZSgpXHJcbiAgICAgICAgbGV0IHZlcnQgPSBfcmVjb2lsLkdldFZlcnRpY2FsKCkgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgdGhpcy5tX2JhY2tUb3RhbCA9IF9yZWNvaWwuX2NvbmZpZ0RhdGEuYmFja1RvdGFsICogdmVydFxyXG4gICAgICAgIHRoaXMudmlicmF0aW9uQW1wbCA9IF9yZWNvaWwuR2V0U2VsZlNwaW5SYW5nZSgpICogTWF0aC5QSSAvIDE4MFxyXG4gICAgICAgIHRoaXMubV9qdW1wVG90YWwgPSBuZXcgVmVjdG9yMihfcmVjb2lsLkdldEhvcml6b250YWwoKSAqIE1hdGguUEkgLyAxODAsIHZlcnQpXHJcbiAgICAgICAgdGhpcy5zZWxmU3BpbkNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLnNlbGZTcGluQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmp1bXBDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5qdW1wQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLnJlY292ZXJDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5yZWNvdmVyQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmp1bXBGT1ZDb250cm9sbGVyLlN0YXJ0RnVuY3Rpb24odGhpcy5qdW1wRk9WQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIENyb3VjaCgpe1xyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlci5TdG9wRnVuY3Rpb24odGhpcy5hc3Npc3RBaW1Db250cm9sbGVyKVxyXG4gICAgfVxyXG4gICAgTWVjaGFuaWNhbEFpbVN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5BaW1pbmdJc092ZXIgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlci5TdGFydEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIEdldEFzc2lzdEFpbURpcygpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5tX2lzWm9vbUluID8gdGhpcy5ndW4uX2NvbmZpZ0RhdGEuYXNzaXN0QWltRGlzMSA6IHRoaXMuZ3VuLl9jb25maWdEYXRhLmFzc2lzdEFpbURpczBcclxuICAgIH1cclxuICAgIE1lY2hhbmljYWxBaW1TdG9wKCl7XHJcbiAgICAgICAgdGhpcy5kZWFpbUNvbnRyb2xsZXIuU3RhcnRGdW5jdGlvbih0aGlzLmRlYWltQ29udHJvbGxlcilcclxuICAgIH1cclxuICAgIEdldEFpbVRpbWUoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWltVGltZSArIHRoaXMubV9haW1UaW1lUmF0ZVNjYWxlXHJcbiAgICB9XHJcbiAgICBHZXRCYWNrVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5ndW4uX3JlY29pbC5HZXRTaGFrZVRpbWUoKVxyXG4gICAgfVxyXG4gICAgT25VbkVxdWlwV2VhcG9uKF91c2VTdGF0ZUJlZm9yZSA6IGJvb2xlYW4pe1xyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZmllbGRPZlZpZXcgPSB0aGlzLmxhc3Rab29tXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5ndW4gPSBudWxsXHJcbiAgICAgICAgdGhpcy5FbmRBbGwoKVxyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBHZXRFbmVtaWVzKCk6QXJyYXk8R2FtZXBsYXkuQ2hhcmFjdGVyPntcclxuICAgICAgICBsZXQgcmVzID0gbmV3IEFycmF5PEdhbWVwbGF5LkNoYXJhY3Rlcj4oKVxyXG4gICAgICAgIEdhbWVwbGF5LmdldEFsbFBsYXllcnMoKS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIElzVmlzaWJsZShfZW5lbXk6R2FtZXBsYXkuQ2hhcmFjdGVyKTpib29sZWFue1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLkdldENhbWVyYVBvcygpXHJcbiAgICAgICAgbGV0IHJlcyA9IHRydWVcclxuICAgICAgICBsZXQgcmF5Q2FzdEhlYWQgPSBHYW1lcGxheS5saW5lVHJhY2UocG9zLCBfZW5lbXkuZ2V0V29ybGRMb2NhdGlvbigpLmFkZChWZWN0b3IudXAubXVsdGlwbHkoX2VuZW15LmNhcHN1bGVIYWxmSGVpZ2h0KSkpXHJcbiAgICAgICAgcmF5Q2FzdEhlYWQuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgaWYoISh2LmdhbWVPYmplY3QgaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIpIHx8ICh2LmdhbWVPYmplY3QgIT0gX2VuZW15ICYmICh2LmdhbWVPYmplY3QpICE9IEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIpKXtcclxuICAgICAgICAgICAgICAgIHJlcyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgRW5kQWxsKCkge1xyXG4gICAgICAgIGlmKHRoaXMubV9pc1pvb21Jbil7XHJcbiAgICAgICAgICAgIHRoaXMuTWVjaGFuaWNhbEFpbVN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGZTcGluQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuc2VsZlNwaW5Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcEZPVkNvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLmp1bXBGT1ZDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuanVtcENvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLmp1bXBDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMucmVjb3ZlckNvbnRyb2xsZXI/LlN0b3BGdW5jdGlvbih0aGlzLnJlY292ZXJDb250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuYXNzaXN0QWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuYXNzaXN0QWltQ29udHJvbGxlcilcclxuICAgICAgICB0aGlzLmRlYWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuZGVhaW1Db250cm9sbGVyKVxyXG4gICAgICAgIHRoaXMuYWltQ29udHJvbGxlcj8uU3RvcEZ1bmN0aW9uKHRoaXMuYWltQ29udHJvbGxlcilcclxuXHJcbiAgICB9XHJcbiAgICBSZWZyZXNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBSZWZyZXNoU2NhbGVzKCkge1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tX2p1bXBGb3ZSYXRlVGFibGUuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMubV9haW1UaW1lUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspPT57XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1fYWltVGltZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgU2V0UHJvcGVydGllcygpIHtcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLmRlbHRhVGhldGEgKz0gdGhpcy5kZWx0YVRoZXRhXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5kZWx0YVBoeSArPSB0aGlzLmRlbHRhUGh5XHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5nYW1tYSA9IHRoaXMubV9nYW1tYVxyXG4gICAgICAgIENhbWVyYUNvbnRyb2xsZXIuSW5zdGFuY2UuZmllbGRPZlZpZXcgPSB0aGlzLm1fc3VwcG9zZWRab29tICsgdGhpcy5tX2RlbHRhRk9WXHJcbiAgICAgICAgQ2FtZXJhQ29udHJvbGxlci5JbnN0YW5jZS5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2VcclxuICAgICAgICBDYW1lcmFDb250cm9sbGVyLkluc3RhbmNlLm9mZnNldCA9IHRoaXMubV9jdXJyZW50T2Zmc2V0XHJcbiAgICB9XHJcbiAgICBHZXRTaWdodEZPVigpOiBudW1iZXIge1xyXG4gICAgICAgIC8vXHU4MkU1XHU5MTREXHU0RUY2XHU0RTJEXHU2NzA5XHU0RTAwXHU0RTJBXHU5MTREXHU0RUY2XHU4QkJFXHU3RjZFXHU0RTg2XHU1OTI3XHU0RThFXHU5NkY2XHU3Njg0XHU1RjAwXHU5NTVDRk9WXHU1MjE5XHU3NkY0XHU2M0E1XHU4RkQ0XHU1NkRFXHU2QjY0XHU2NTcwXHU1MDNDLFx1NTQyNlx1NTIxOVx1OEZENFx1NTZERVx1NjdBQVx1NjhCMFx1ODFFQVx1OEVBQlx1NzY4NEZPVlxyXG4gICAgICAgIGxldCBmb3YgPSAwXHJcbiAgICAgICAgdGhpcy5ndW4uX3dlYXBvbkFjY2Vzc29yeUxpc3QuZm9yRWFjaCgodiwgayk9PntcclxuICAgICAgICAgICAgaWYgKHYuY29uZmlnRGF0YS5haW1Gb3ZSYXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm92ID0gdi5jb25maWdEYXRhLmFpbUZvdlJhdGVcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZm92ICE9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvdlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ndW4uX2NvbmZpZ0RhdGEubWVjaGluaWNhbEFpbUZPVlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIElzUmlnaHQodGFyZ2V0UG9zOiBWZWN0b3IpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IuZG90KFZlY3Rvci5jcm9zcyh0aGlzLm1fY2FtZXJhLnRyYW5zZm9ybS5nZXRGb3J3YXJkVmVjdG9yKCksIFZlY3Rvci51cCksIHRhcmdldFBvcy5zdWJ0cmFjdCh0aGlzLkdldENhbWVyYVBvcygpKSkgPiAwXHJcbiAgICB9XHJcbiAgICBJc1VwKHRhcmdldFBvczogVmVjdG9yKTpib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVsYXRpdmVQb3MgPSB0YXJnZXRQb3Muc3VidHJhY3QodGhpcy5HZXRDYW1lcmFQb3MoKSlcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuKHJlbGF0aXZlUG9zLnkgLyBuZXcgVmVjdG9yMihyZWxhdGl2ZVBvcy54LCByZWxhdGl2ZVBvcy56KS5tYWduaXR1ZGUpID4gKDkwIC0gVmVjdG9yLmFuZ2xlKHRoaXMubV9jYW1lcmEudHJhbnNmb3JtLmdldEZvcndhcmRWZWN0b3IoKSwgVmVjdG9yLnVwKSAqIE1hdGguUEkgLyAxODApXHJcbiAgICB9XHJcbiAgICBEcmFnU3RhcnQoKXtcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gVUkuZ2V0TW91c2VQb3NpdGlvbk9uVmlld3BvcnQoKVxyXG4gICAgfVxyXG4gICAgR2V0Q2FtZXJhUG9zKCk6VmVjdG9yIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5tX2NhbWVyYS5jYW1lcmFTeXN0ZW1SZWxhdGl2ZVRyYW5zZm9ybS5sb2NhdGlvblxyXG4gICAgICAgIHJldHVybiBHYW1lcGxheS5nZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKS5hZGQoV2VhcG9uVG9vbC5Sb3RhdGVWZWN0b3Iob2Zmc2V0LCBWZWN0b3IudXAsIEdhbWVwbGF5LmdldEN1cnJlbnRQbGF5ZXIoKS5jaGFyYWN0ZXIuZ2V0V29ybGRSb3RhdGlvbigpLnopKVxyXG4gICAgfVxyXG4gICAgR2V0SnVtcEZPVigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ0RhdGEuanVtcEZPViAqIHRoaXMubV9qdW1wRm92UmF0ZVNjYWxlICogXHJcbiAgICAgICAgR2FtZXBsYXkuZ2V0Q3VycmVudFBsYXllcigpLmNoYXJhY3Rlci5jYW1lcmFTeXN0ZW0uY2FtZXJhRk9WIC8gdGhpcy5tX29yaWdpblpvb21cclxuICAgIH1cclxuICAgIEdldEFpbVBvcyhlbmVteTpHYW1lcGxheS5DaGFyYWN0ZXIpOiBWZWN0b3Ige1xyXG4gICAgICAgIGxldCBwb3MxOlZlY3RvclxyXG4gICAgICAgIGxldCBwb3MyIDpWZWN0b3JcclxuICAgICAgICBwb3MxID0gZW5lbXkuZ2V0QXBwZWFyYW5jZTxHYW1lcGxheS5IdW1hbm9pZFYyPigpLmdldFNsb3RXb3JsZFBvc2l0aW9uKFNsb3RUeXBlLkhlYWQpXHJcbiAgICAgICAgcG9zMiA9IGVuZW15LmdldEFwcGVhcmFuY2U8R2FtZXBsYXkuSHVtYW5vaWRWMj4oKS5nZXRTbG90V29ybGRQb3NpdGlvbihTbG90VHlwZS5CdXR0b2NrcylcclxuICAgICAgICByZXR1cm4gcG9zMS5tdWx0aXBseSgyKS5hZGQocG9zMikuZGl2aWRlKDMpXHJcbiAgICB9XHJcbiAgICBHZXRUYXJnZXQoKTpbVmVjdG9yLCBib29sZWFuXXtcclxuICAgICAgICBpZih0aGlzLnRhcmdldENhbGxUaW1lICYmIFRpbWVVdGlsLmVsYXBzZWRUaW1lKCkgLSB0aGlzLnRhcmdldENhbGxUaW1lIDwgMC4wMSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldFJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGlyID0gdGhpcy5tX2NhbWVyYS50cmFuc2Zvcm0uZ2V0Rm9yd2FyZFZlY3RvcigpLm5vcm1hbGl6ZWRcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5HZXRDYW1lcmFQb3MoKVxyXG4gICAgICAgIGxldCByYXljYXN0QWxsID0gR2FtZXBsYXkubGluZVRyYWNlKHBvcy5hZGQoZGlyLm11bHRpcGx5KDAuNSkpLCBwb3MuYWRkKGRpci5tdWx0aXBseSh0aGlzLmd1bi5fY29uZmlnRGF0YS5kaXN0YW5jZSkpKVxyXG4gICAgICAgIHRoaXMuYWltRW5lbXkgPSBudWxsXHJcbiAgICAgICAgaWYodGhpcy5lbmFibGVBc3Npc3RBaW0pe1xyXG4gICAgICAgICAgICBsZXQgbWluRGlzID0gdGhpcy5HZXRBc3Npc3RBaW1EaXMoKVxyXG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlOkdhbWVwbGF5LkNoYXJhY3RlclxyXG4gICAgICAgICAgICB0aGlzLkdldEVuZW1pZXMoKS5mb3JFYWNoKCh2KT0+e1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyN0VcdTUyMzBcdTY3MDBcdThGRDFcdTc2ODRcdTRFQkFcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQb3MgPSB0aGlzLkdldEFpbVBvcyh2KVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldERpcyA9IHRhcmdldFBvcy5zdWJ0cmFjdChwb3MpLm1hZ25pdHVkZVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gVmVjdG9yLmFuZ2xlKGRpciwgdGFyZ2V0UG9zLnN1YnRyYWN0KHBvcykpXHJcbiAgICAgICAgICAgICAgICBsZXQgYWltRGlzID0gdGFyZ2V0RGlzICogTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgICAgICAgICAgICAgaWYoYW5nbGUgPCAzMCAmJiBhaW1EaXMgPD0gbWluRGlzICYmIHRoaXMuSXNWaXNpYmxlKHYpKXtcclxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSB2XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGlzID0gYWltRGlzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWltRW5lbXkgPSBjYW5kaWRhdGVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbmFsUG9pbnRcclxuICAgICAgICBsZXQgaVxyXG4gICAgICAgIHJheWNhc3RBbGwuZm9yRWFjaCgodik9PntcclxuICAgICAgICAgICAgaWYoISh2IGluc3RhbmNlb2YgQ2hhcmFjdGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmaW5hbFBvaW50ID0gdi5pbXBhY3RQb2ludFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGZpbmFsUG9pbnQpe1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJldHVybiA9IFtmaW5hbFBvaW50LCB0cnVlXVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFJldHVybiA9IFtkaXIsIGZhbHNlXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldENhbGxUaW1lID0gVGltZVV0aWwuZWxhcHNlZFRpbWUoKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFJldHVyblxyXG4gICAgfVxyXG4gICAgR2V0U2Vuc2l0aXZpdHkoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubV9jYW1lcmEuY2FtZXJhRk9WIC8gNjAgKiB0aGlzLm1fc2Vuc2l0aXZpdHlcclxuICAgIH1cclxuICAgIERyYWdIb2xkKCl7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBVSS5nZXRNb3VzZVBvc2l0aW9uT25WaWV3cG9ydCgpXHJcbiAgICAgICAgaWYoIXRoaXMubV9sYXN0TW91c2VQb3Mpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWx0YVBoeSArPSAodGVtcC54IC0gdGhpcy5tX2xhc3RNb3VzZVBvcy54KSAqIHRoaXMuc2NyZWVuU2l6ZS54ICogdGhpcy5HZXRTZW5zaXRpdml0eSgpXHJcbiAgICAgICAgdGhpcy5kZWx0YVRoZXRhICs9ICh0ZW1wLnkgLSB0aGlzLm1fbGFzdE1vdXNlUG9zLnkpICogdGhpcy5zY3JlZW5TaXplLnkgKiB0aGlzLkdldFNlbnNpdGl2aXR5KClcclxuICAgICAgICB0aGlzLm1fbGFzdE1vdXNlUG9zID0gdGVtcFxyXG4gICAgfVxyXG4gICAgRHJhZ0VuZCgpOnZvaWR7XHJcbiAgICAgICAgdGhpcy5tX2xhc3RNb3VzZVBvcyA9IG51bGxcclxuICAgIH1cclxuXHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvbkdVSUNsc3tcclxuXHJcbn0iLCAiaW1wb3J0IHsgV2VhcG9uQW1tb0Jhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BbW1vQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25CYXNlQ2xzIH0gZnJvbSBcIi4vV2VhcG9uQmFzZUNsc1wiO1xyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiO1xyXG4vKipcdTY3QUFcdTY4QjBcdTZBMjFcdTU3NTdcdUZGMUFcdTVGMzlcdTU5MzlcdTU3RkFcdTdDN0IgKi9cclxuZXhwb3J0IGNsYXNzIFdlYXBvbk1hZ2F6aW5lQ2xze1xyXG4gICAgcHJpdmF0ZSB3ZWFwb24gOiBXZWFwb25CYXNlQ2xzXHJcbiAgICBwcml2YXRlIGlkIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGxlZnRBbW1vIDogbnVtYmVyXHJcbiAgICBwcml2YXRlIGFtbW9JbnZlbnRvcnkgOiBXZWFwb25BbW1vQmFzZUNsc1xyXG4gICAgcHJpdmF0ZSBsb2FkUGVyY2VudGFnZSA6IG51bWJlclxyXG4gICAgcHJpdmF0ZSBpc0Z1bGx5TG9hZGVkIDogYm9vbGVhblxyXG4gICAgcHVibGljIGlzRW1wdHlMb2FkZWQgOiBib29sZWFuXHJcbiAgICBwdWJsaWMgY2FuTG9hZGVkIDogYm9vbGVhblxyXG4gICAgcHJpdmF0ZSBsb2FkVGltZVJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPjtcclxuICAgIHByaXZhdGUgbG9hZFRpbWVSYXRlU2NhbGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbWF4QW1tb1JhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bSwgbnVtYmVyPjtcclxuICAgIHByaXZhdGUgbWF4QW1tb1JhdGVTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwcmVNYXhBbW1vIDogbnVtYmVyXHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnRGF0YTogR2FtZUNvbnN0LldlYXBvbk1hZ2F6aW5lQ29uZmlnRGF0YVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdlYXBvbiA6IFdlYXBvbkJhc2VDbHMpe1xyXG4gICAgICAgIFdlYXBvblRvb2wuSW5pdFdlYXBvbk1hZ2F6aW5lQ29uZmlnKHRoaXMpXHJcbiAgICAgICAgLy90aGlzLmxlZnRBbW1vID0gX2d1bi5ndW4uQW1tb0xlZnQuVmFsdWVcclxuICAgICAgICBsZXQgbW92ZUFtbW8gPSB0aGlzLmxlZnRBbW1vIC0gdGhpcy5fY29uZmlnRGF0YS5tYXhOdW1cclxuICAgICAgICBpZiAobW92ZUFtbW8gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gPSB0aGlzLl9jb25maWdEYXRhLm1heE51bVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vdmVBbW1vID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLlVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBVcGRhdGVGdWxseUxvYWRlZCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaXNGdWxseUxvYWRlZCA9IHRoaXMubGVmdEFtbW8gPj0gdGhpcy5HZXRNYXhBbW1vKClcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0Z1bGx5TG9hZGVkXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFVwZGF0ZUVtcHR5TG9hZGVkKCk6Ym9vbGVhbntcclxuICAgICAgICB0aGlzLmlzRW1wdHlMb2FkZWQgPSB0aGlzLmxlZnRBbW1vIDw9IDAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eUxvYWRlZFxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZUNhbkxvYWQoKTpib29sZWFue1xyXG4gICAgICAgIHRoaXMuY2FuTG9hZGVkID0gIXRoaXMuaXNGdWxseUxvYWRlZCAmJiB0aGlzLmFtbW9JbnZlbnRvcnkgJiYgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ID4gMFxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkxvYWRlZFxyXG4gICAgfVxyXG4gICAgcHVibGljIFVwZGF0ZUxvYWRQZXJjZW50YWdlKCk6bnVtYmVye1xyXG4gICAgICAgIHRoaXMubG9hZFBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKHRoaXMubGVmdEFtbW8gLyB0aGlzLkdldE1heEFtbW8oKSAqIDEwMClcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkUGVyY2VudGFnZVxyXG4gICAgfVxyXG4gICAgQ29uc3VtZSgpOkZ1bmN0aW9ue1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRBbW1vID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyAtPSAxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBMb2FkT25lQnVsbGV0KCk6dm9pZHtcclxuICAgICAgICBpZih0aGlzLmNhbkxvYWRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gKz0gMVxyXG4gICAgICAgICAgICAvL3NlbGYubV9hbW1vSW52ZW50b3J5OlBsYXllckNvbnN1bWVBbW1vKDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIExvYWRNYWdhemluZSgpOnZvaWR7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBhZGRpdGlvbiA9IHRoaXMuR2V0TWF4QW1tbygpIC0gdGhpcy5sZWZ0QW1tb1xyXG4gICAgICAgICAgICAvL2FkZGl0aW9uID0gc2VsZi5tX2FtbW9JbnZlbnRvcnk6UGxheWVyQ29uc3VtZUFtbW8oYWRkaXRpb24pXHJcbiAgICAgICAgICAgIHRoaXMubGVmdEFtbW8gKz0gYWRkaXRpb25cclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVGdWxseUxvYWRlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHU2N0FBXHU2OEIwXHU1Mzc4XHU4RjdEL1x1NjZGNFx1NjM2Mlx1NTQwRSxcdTk3MDBcdTg5ODFcdTVDMDZcdTY3QUFcdTY4QjBcdTc2ODRcdTVCNTBcdTVGMzlcdTY2RjRcdTY1QjBcdTU3MjhcdTkxNERcdTRFRjZcdTc2ODRcdTgyODJcdTcwQjlcdTRFMEIgKi9cclxuICAgIFJlY29yZGluZ0J1bGxldHNMZWZ0KF9pc0JhY2tUb0J1bGxldEludmVudG9yeTpib29sZWFuKXtcclxuICAgICAgICBpZihfaXNCYWNrVG9CdWxsZXRJbnZlbnRvcnkgJiYgdGhpcy5hbW1vSW52ZW50b3J5KXtcclxuICAgICAgICAgICAgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ICs9IHRoaXMubGVmdEFtbW9cclxuICAgICAgICAgICAgdGhpcy5sZWZ0QW1tbyA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5VcGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5wcmVNYXhBbW1vID4gdGhpcy5HZXRNYXhBbW1vKCkpe1xyXG4gICAgICAgICAgICAvKipcdThGRDlcdTRFMDBcdTVFMjdcdTUzNzhcdTRFMEJcdTRFODZcdTYyNjlcdTVCQjlcdTVGMzlcdTU5MzksXHU5NzAwXHU4OTgxXHU1RjNBXHU4ODRDXHU1MUNGXHU1QzExXHU1RjUzXHU1MjREXHU3Njg0XHU1QjUwXHU1RjM5ICovXHJcbiAgICAgICAgICAgIGlmKHRoaXMuR2V0TWF4QW1tbygpIDwgdGhpcy5sZWZ0QW1tbyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGFBbW1vID0gdGhpcy5sZWZ0QW1tbyAtIHRoaXMuR2V0TWF4QW1tbygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRBbW1vIC09IGRlbHRhQW1tb1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbW1vSW52ZW50b3J5LmNvdW50ICs9IGRlbHRhQW1tb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJlTWF4QW1tbyA9IHRoaXMuR2V0TWF4QW1tbygpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVGdWxseUxvYWRlZCgpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVFbXB0eUxvYWRlZCgpXHJcbiAgICAgICAgdGhpcy5VcGRhdGVDYW5Mb2FkKClcclxuICAgICAgICB0aGlzLlVwZGF0ZUxvYWRQZXJjZW50YWdlKClcclxuICAgICAgICAvKipcdTVDMDZcdTVGNTNcdTUyNERcdTc2ODRcdTUyNjlcdTRGNTlcdTVCNTBcdTVGMzlcdTY2RjRcdTY1QjBcdTUyMzBcdTU3M0FcdTY2NkZcdTRFMkRcdTc2ODRcdTgyODJcdTcwQjlcdTRFMEEgKi9cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkVGltZVJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLndlYXBvbi5fd2VhcG9uQWNjZXNzb3J5TGlzdC5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRpbWVSYXRlVGFibGUuc2V0KGssIHYuY29uZmlnRGF0YS5tYWdhemluZUxvYWRUaW1lUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLnNldChrLCB2LmNvbmZpZ0RhdGEubWF4QW1tb1JhdGUuZ2V0KHRoaXMud2VhcG9uLmlkKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLlJlZnJlc2hTY2FsZXMoKVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBSZWZyZXNoU2NhbGVzKCk6dm9pZHtcclxuICAgICAgICBsZXQgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWVSYXRlVGFibGUuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubG9hZFRpbWVSYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5tYXhBbW1vUmF0ZVRhYmxlLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1heEFtbW9SYXRlU2NhbGUgPSBmYWN0b3JcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRMb2FkVGltZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnRGF0YS5sb2FkVGltZSAqIHRoaXMubG9hZFRpbWVSYXRlU2NhbGVcclxuICAgIH1cclxuICAgIHByaXZhdGUgR2V0TWF4QW1tbygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4QW1tb1JhdGVTY2FsZSArIHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtID4gMCA/IHRoaXMubWF4QW1tb1JhdGVTY2FsZSArIHRoaXMuX2NvbmZpZ0RhdGEubWF4TnVtIDogMVxyXG4gICAgfVxyXG59IiwgImltcG9ydCB7IFdlYXBvbkFjY2Vzc29yeUJhc2VDbHMgfSBmcm9tIFwiLi9XZWFwb25BY2Nlc3NvcnlCYXNlQ2xzXCJcclxuaW1wb3J0IHsgV2VhcG9uQmFzZUNscyB9IGZyb20gXCIuL1dlYXBvbkJhc2VDbHNcIlxyXG5pbXBvcnQgeyBXZWFwb25Ub29sIH0gZnJvbSBcIi4vV2VhcG9uVG9vbFwiXHJcbnR5cGUgUmF0ZVN0cnVjdCA9IHtcclxuICAgIE1vdmU6bnVtYmVyXHJcbiAgICBDcm91Y2g6bnVtYmVyXHJcbn1cclxuZXhwb3J0IGNsYXNzIFdlYXBvblJlY29pbENsc3tcclxuICAgIHByaXZhdGUgaWQgOiBudW1iZXJcclxuICAgIGd1biA6IFdlYXBvbkJhc2VDbHNcclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsU2NhbGU6IG51bWJlciA9IDFcclxuICAgIHByaXZhdGUgX2hvcml6b250YWxTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfbWluRXJyb3JTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfbWF4RXJyb3JTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfcmVjb3ZlclJhdGVTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgcHJpdmF0ZSBfc2VsZlNwaW5SYW5nZVJhdGVTY2FsZTogbnVtYmVyID0gMVxyXG4gICAgXHJcbiAgICBwcml2YXRlIF91bnN0YWJpbGl0eTogbnVtYmVyID0gMFxyXG4gICAgX2N1cnJlbnRFcnJvcjogbnVtYmVyID0gMFxyXG5cclxuICAgIHByaXZhdGUgX2hvcml6b250YWxSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF92ZXJ0aWNhbFJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuICAgIHByaXZhdGUgX21pbkVycm9yUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfbWF4RXJyb3JSYXRlVGFibGU6IE1hcDxHYW1lQ29uc3QuV2VhcG9uQWNjZXNzb3J5VHlwZUVudW18c3RyaW5nLCBudW1iZXI+XHJcbiAgICBwcml2YXRlIF9yZWNvdmVyUmF0ZVRhYmxlOiBNYXA8R2FtZUNvbnN0LldlYXBvbkFjY2Vzc29yeVR5cGVFbnVtfHN0cmluZywgbnVtYmVyPlxyXG4gICAgcHJpdmF0ZSBfc2VsZlNwaW5SYW5nZVJhdGVUYWJsZTogTWFwPEdhbWVDb25zdC5XZWFwb25BY2Nlc3NvcnlUeXBlRW51bXxzdHJpbmcsIG51bWJlcj5cclxuXHJcbiAgICBwcml2YXRlIF9sYXN0UG9zIDogVmVjdG9yXHJcbiAgICBfY29uZmlnRGF0YSA6IEdhbWVDb25zdC5XZWFwb25SZWNvaWxDb25maWdEYXRhXHJcblxyXG4gICAgZGlmRnVuY3Rpb24oX3Vuc3RhYmlsaXR5Om51bWJlcikge1xyXG4gICAgICAgIF91bnN0YWJpbGl0eSA9IF91bnN0YWJpbGl0eSB8fCB0aGlzLl91bnN0YWJpbGl0eVxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VGdW5jdGlvbiA9PT0gR2FtZUNvbnN0LkRpZmZ1c2VGdW5jdGlvbkVudW0uTGluZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIExpbmVhciBmdW5jdGlvblxyXG4gICAgICAgICAgICByZXR1cm4gX3Vuc3RhYmlsaXR5XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWdEYXRhLmRpZmZ1c2VGdW5jdGlvbiA9PT0gR2FtZUNvbnN0LkRpZmZ1c2VGdW5jdGlvbkVudW0uU3FydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KF91bnN0YWJpbGl0eSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZ0RhdGEuZGlmZnVzZUZ1bmN0aW9uID09PSBHYW1lQ29uc3QuRGlmZnVzZUZ1bmN0aW9uRW51bS5TcXVhcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF91bnN0YWJpbGl0eSAqIF91bnN0YWJpbGl0eVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFVwZGF0ZShfZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIERlY3JlYXNlIHJlY29pbFxyXG4gICAgICAgIHRoaXMuX3Vuc3RhYmlsaXR5ID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIHRoaXMuX3Vuc3RhYmlsaXR5IC0gdGhpcy5fY29uZmlnRGF0YS5kaWZmdXNlUmVjb3ZlclJhdGUgKiBfZHQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGluZmx1ZW5jZSBmYWN0b3JzXHJcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuY2xlYXIoKVxyXG4gICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLmNsZWFyKClcclxuICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5jbGVhcigpXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5jbGVhcigpXHJcblxyXG4gICAgICAgIC8vIENoZWNrIE1vdmVtZW50IGFuZCBqdW1waW5nXHJcbiAgICAgICAgY29uc3QgY3VyUG9zID0gdGhpcy5ndW4uY2hhcmFjdGVyLmdldFdvcmxkTG9jYXRpb24oKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3VyUG9zLnN1YnRyYWN0KHRoaXMuX2xhc3RQb3MpLm1hZ25pdHVkZSA+IDAuNSAqIF9kdCB8fFxyXG4gICAgICAgICAgICB0aGlzLmd1bi5jaGFyYWN0ZXIuaXNKdW1waW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21pbkVycm9yUmF0ZVRhYmxlLnNldCgnTW92ZScsIHRoaXMuX2NvbmZpZ0RhdGEuanVtcEVycm9yU2NhbGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLnNldCgnTW92ZScsIHRoaXMuX2NvbmZpZ0RhdGEuanVtcEVycm9yU2NhbGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuZGVsZXRlKCdNb3ZlJylcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuZGVsZXRlKCdNb3ZlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGFzdFBvcyA9IGN1clBvc1xyXG5cclxuICAgICAgICAvLyBDaGVjayBjcm91Y2hpbmdcclxuICAgICAgICBpZiAodGhpcy5ndW4uY2hhcmFjdGVyLmNyb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5zZXQoJ0Nyb3VjaCcsIHRoaXMuX2NvbmZpZ0RhdGEuY3JvdWNoRXJyb3JTY2FsZSlcclxuICAgICAgICAgICAgdGhpcy5fbWF4RXJyb3JSYXRlVGFibGUuc2V0KCdDcm91Y2gnLCB0aGlzLl9jb25maWdEYXRhLmNyb3VjaEVycm9yU2NhbGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWluRXJyb3JSYXRlVGFibGUuZGVsZXRlKCdDcm91Y2gnKVxyXG4gICAgICAgICAgICB0aGlzLl9tYXhFcnJvclJhdGVUYWJsZS5kZWxldGUoJ0Nyb3VjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmd1bi5fd2VhcG9uQWNjZXNzb3J5TGlzdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5zZXQoaywgdi5ob3Jpem9udGFsSnVtcFJhbmdlUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuc2V0KGssIHYudmVydGljYWxKdW1wQW5nbGVSYXRlKVxyXG4gICAgICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5zZXQoaywgdi5taW5FcnJvclJhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLnNldChrLCB2Lm1heEVycm9yUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5zZXQoaywgdi5ndW5SZWNvdmVyUmF0ZSlcclxuICAgICAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVUYWJsZS5zZXQoaywgdi5zZWxmU3BpblJhbmdlUmF0ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBlcnJvclxyXG4gICAgICAgIHRoaXMuZ3VuLmVycm9yID0gdGhpcy5HZXREaWZmdXNlKF9kdClcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGluZmx1ZW5jZSBmYWN0b3IgbWFnbml0dWRlc1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFNjYWxlcygpXHJcbiAgICB9XHJcbiAgICBHZXRWZXJ0aWNhbCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gKHRoaXMuX2NvbmZpZ0RhdGEudmVydGljYWxKdW1wQW5nbGUgKyB0aGlzLl9jb25maWdEYXRhLnZlcnRpY2FsSnVtcFJhbmdlICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpKSAqIHRoaXMuX3ZlcnRpY2FsU2NhbGVcclxuICAgIH1cclxuICAgIEdldEhvcml6b250YWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9yaXpvbnRhbFNjYWxlICogdGhpcy5fY29uZmlnRGF0YS5ob3Jpem9udGFsSnVtcFJhbmdlICogV2VhcG9uVG9vbC5HYXVzc1JhbmRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1pbkVycm9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEubWluRXJyb3IgKiB0aGlzLl9taW5FcnJvclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1heEVycm9yKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEubWF4RXJyb3IgKiB0aGlzLl9tYXhFcnJvclNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFNoYWtlVGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLmd1blJlY29pbCAvICh0aGlzLl9jb25maWdEYXRhLmd1blJlY292ZXJSYXRlICogdGhpcy5fcmVjb3ZlclJhdGVTY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0U2VsZlNwaW5SYW5nZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhLnNlbGZTcGluUmFuZ2UgKiB0aGlzLl9zZWxmU3BpblJhbmdlUmF0ZVNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEZpcmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdW5zdGFiaWxpdHkgPSBNYXRoLm1pbigxLjAsIHRoaXMuX3Vuc3RhYmlsaXR5ICsgdGhpcy5fY29uZmlnRGF0YS5ndW5SZWNvaWwpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldERpZmZ1c2UoX2R0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCB0b2JlID0gdGhpcy5HZXRNaW5FcnJvcigpICsgdGhpcy5kaWZGdW5jdGlvbihudWxsKSAqICh0aGlzLkdldE1heEVycm9yKCkgLSB0aGlzLkdldE1pbkVycm9yKCkpXHJcbiAgICAgICAgdGhpcy5fY3VycmVudEVycm9yICs9IF9kdCAqIDEwICogKHRvYmUgLSB0aGlzLl9jdXJyZW50RXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRFcnJvclxyXG4gICAgfVxyXG4gICAgR2V0U2hha2VJbnRlbnNpdHkoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGEuc2hha2VJbnRlbnNpdHlcclxuICAgIH1cclxuXHJcbiAgICBSZWZyZXNoU2NhbGVzKCkge1xyXG4gICAgICAgIGxldCBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5faG9yaXpvbnRhbFJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9ob3Jpem9udGFsU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fdmVydGljYWxTY2FsZSA9IGZhY3RvclxyXG4gICAgICAgIGZhY3RvciA9IDFcclxuICAgICAgICB0aGlzLl9taW5FcnJvclJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9taW5FcnJvclNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yUmF0ZVRhYmxlLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgZmFjdG9yICo9IHZcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX21heEVycm9yU2NhbGUgPSBmYWN0b3JcclxuICAgICAgICBmYWN0b3IgPSAxXHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclJhdGVUYWJsZS5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGZhY3RvciAqPSB2XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9yZWNvdmVyUmF0ZVNjYWxlID0gZmFjdG9yXHJcbiAgICAgICAgZmFjdG9yID0gMVxyXG4gICAgICAgIHRoaXMuX3NlbGZTcGluUmFuZ2VSYXRlVGFibGUuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBmYWN0b3IgKj0gdlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fc2VsZlNwaW5SYW5nZVJhdGVTY2FsZSA9IGZhY3RvclxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCAiZXhwb3J0IGNsYXNzIFdlYXBvblNvdW5kQ2xze1xyXG5cclxufSIsICJcdUZFRkZcclxuLyoqXHJcbiAqIEFVVE8gR0VORVJBVEUgQlkgVUkgRURJVE9SLlxyXG4gKiBXQVJOSU5HOiBETyBOT1QgTU9ESUZZIFRISVMgRklMRSxNQVkgQ0FVU0UgQ09ERSBMT1NULlxyXG4gKiBBVVRIT1I6IFx1NjI2N1x1N0IxNFx1N0VDRlx1NUU3NFxyXG4gKiBVSTogVUkvRGVmYXVsdFVJLnVpXHJcbiAqIFRJTUU6IDIwMjMuMDguMDUtMDAuMjkuMjlcclxuKi9cclxuXHJcblxyXG5cclxuQFVJLlVJQ2FsbE9ubHkoJ1VJL0RlZmF1bHRVSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRVSV9HZW5lcmF0ZSBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdFxyXG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICIsICJcdUZFRkZcclxuLyoqXHJcbiAqIEFVVE8gR0VORVJBVEUgQlkgVUkgRURJVE9SLlxyXG4gKiBXQVJOSU5HOiBETyBOT1QgTU9ESUZZIFRISVMgRklMRSxNQVkgQ0FVU0UgQ09ERSBMT1NULlxyXG4gKiBBVVRIT1I6IFx1NjI2N1x1N0IxNFx1N0VDRlx1NUU3NFxyXG4gKiBVSTogVUkvTW9uc3RJbmZvVUkudWlcclxuICogVElNRTogMjAyMy4wOC4wNS0wMC4yOS4yOVxyXG4qL1xyXG5cclxuXHJcblxyXG5AVUkuVUlDYWxsT25seSgnVUkvTW9uc3RJbmZvVUkudWknKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25zdEluZm9VSV9HZW5lcmF0ZSBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdFxyXG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQSxvQkFBQUE7QUFBQTtBQUFPLElBQVVBO0FBQUEsQ0FBVixDQUFVQSxnQkFBVjtBQUNJLE1BQUs7QUFBTCxJQUFLQyxpQkFBTDtBQUNILElBQUFBLGFBQUEsc0JBQW1CO0FBQ25CLElBQUFBLGFBQUEsMkJBQXdCO0FBQ3hCLElBQUFBLGFBQUEsMEJBQXVCO0FBQ3ZCLElBQUFBLGFBQUEsb0NBQWlDO0FBQ2pDLElBQUFBLGFBQUEsbUNBQWdDO0FBQ2hDLElBQUFBLGFBQUEseUJBQXNCO0FBQ3RCLElBQUFBLGFBQUEsd0JBQXFCO0FBQ3JCLElBQUFBLGFBQUEsb0JBQWlCO0FBQ2pCLElBQUFBLGFBQUEsd0JBQXFCO0FBQ3JCLElBQUFBLGFBQUEsK0JBQTRCO0FBQzVCLElBQUFBLGFBQUEsbUJBQWdCO0FBQ2hCLElBQUFBLGFBQUEsd0JBQXFCO0FBQ3JCLElBQUFBLGFBQUEsdUJBQW9CO0FBQ3BCLElBQUFBLGFBQUEsMkJBQXdCO0FBQ3hCLElBQUFBLGFBQUEsZ0NBQTZCO0FBQzdCLElBQUFBLGFBQUEsNkJBQTBCO0FBQUEsS0FoQmxCLGNBQUFELFlBQUEsZ0JBQUFBLFlBQUE7QUFrQkwsTUFBSztBQUFMLElBQUtFLGlCQUFMO0FBQ0gsSUFBQUEsYUFBQSwwQkFBc0I7QUFDdEIsSUFBQUEsYUFBQSxxQkFBaUI7QUFDakIsSUFBQUEsYUFBQSxzQkFBa0I7QUFDbEIsSUFBQUEsYUFBQSx5QkFBc0I7QUFDdEIsSUFBQUEsYUFBQSxnQ0FBNkI7QUFDN0IsSUFBQUEsYUFBQSwyQkFBd0I7QUFDeEIsSUFBQUEsYUFBQSxzQkFBbUI7QUFDbkIsSUFBQUEsYUFBQSwyQkFBd0I7QUFBQSxLQVJoQixjQUFBRixZQUFBLGdCQUFBQSxZQUFBO0FBQUEsR0FuQkNBLDhCQUFBOzs7QUNBakI7QUFBQTtBQUFBO0FBQUE7QUFNTyxJQUFNLGdCQUFOLE1BQW1CO0FBQUEsRUFDdEI7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVPO0FBQUEsRUFDQTtBQUFBLEVBRVAsZUFBZTtBQUFBLEVBR2YsYUFBb0IsV0FBVztBQUMzQixRQUFJLGNBQWEsYUFBYSxNQUFNO0FBQ2hDLFVBQUksU0FBUyxNQUFNLFNBQVMsc0JBQXNCO0FBQ2xELG9CQUFhLFlBQVksSUFBSSxjQUFhLE9BQU8sU0FBUztBQUFBLElBQzlEO0FBQ0EsV0FBTyxjQUFhO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFlBQVksUUFBMEI7QUFFbEMsY0FBVSxVQUFVLEtBQUssS0FBSyxNQUFNO0FBQ2hDLFdBQUssYUFBYSxDQUFDO0FBQUEsSUFDdkIsQ0FBQztBQUNELGNBQVUsVUFBVSxLQUFLLEtBQUssTUFBTTtBQUNoQyxXQUFLLGFBQWEsQ0FBQztBQUFBLElBQ3ZCLENBQUM7QUFDRCxjQUFVLFVBQVUsS0FBSyxPQUFPLE1BQU07QUFDbEMsV0FBSyxhQUFhLENBQUM7QUFBQSxJQUN2QixDQUFDO0FBQ0QsY0FBVSxVQUFVLEtBQUssTUFBTSxNQUFNO0FBQ2pDLFdBQUssYUFBYSxDQUFDO0FBQUEsSUFDdkIsQ0FBQztBQUNELGNBQVUsVUFBVSxLQUFLLE1BQU0sTUFBTTtBQUNqQyxXQUFLLGFBQWEsQ0FBQztBQUFBLElBQ3ZCLENBQUM7QUFDRCxjQUFVLFVBQVUsS0FBSyxHQUFHLE1BQU07QUFDOUIsV0FBSyxhQUFhLENBQUM7QUFBQSxJQUN2QixDQUFDO0FBQ0QsY0FBVSxVQUFVLEtBQUssR0FBRyxNQUFNO0FBQzlCLFdBQUssV0FBVztBQUFBLElBQ3BCLENBQUM7QUFDRCxjQUFVLFVBQVUsS0FBSyxHQUFHLE1BQU07QUFDOUIsV0FBSyxnQkFBZ0I7QUFBQSxJQUN6QixDQUFDO0FBQ0QsY0FBVSxVQUFVLEtBQUssU0FBUyxNQUFNO0FBQUEsSUFHeEMsQ0FBQztBQUNELGNBQVUsVUFBVSxLQUFLLGtCQUFrQixNQUFNO0FBRTdDLFVBQUksSUFBSSxLQUFLLGFBQWE7QUFDMUIsVUFBRyxFQUFFLE1BQU0sR0FBRTtBQUNUO0FBQUEsTUFDSjtBQUNBLFVBQUcsS0FBSyxRQUFPO0FBQ1gsYUFBSyxPQUFPLG1CQUFtQjtBQUFBLE1BQ25DO0FBQUEsSUFDSixDQUFDO0FBRUQsY0FBVSxVQUFVLEtBQUssR0FBRyxNQUFNO0FBQzlCLFVBQUksSUFBSSxLQUFLLGFBQWE7QUFDMUIsVUFBRyxFQUFFLE1BQU0sR0FBRTtBQUNUO0FBQUEsTUFDSjtBQUNBLFdBQUssU0FBUyxLQUFLO0FBRW5CLFVBQUcsS0FBSyxRQUFPO0FBQ1gsYUFBSyxPQUFPLGFBQWE7QUFBQSxNQUM3QjtBQUFBLElBQ0osQ0FBQztBQUVELGNBQVUsV0FBVyxLQUFLLEdBQUcsTUFBTTtBQUFBLElBRW5DLENBQUM7QUFFRCxjQUFVLFFBQVEsS0FBSyxTQUFTLE1BQU07QUFBQSxJQUd0QyxDQUFDO0FBQ0QsY0FBVSxRQUFRLEtBQUssU0FBUyxNQUFNO0FBRWxDLFVBQUksS0FBSyxRQUFRO0FBQ2IsYUFBSyxPQUFPLGtCQUFrQjtBQUFBLE1BQ2xDO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBRUEsYUFBYSxPQUFhO0FBQ3RCLFFBQUksSUFBSSxLQUFLLGFBQWE7QUFDMUIsUUFBRyxFQUFFLE1BQU0sR0FBRTtBQUNUO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLGtCQUFpQjtBQUNiLFFBQUksSUFBSSxLQUFLLGFBQWE7QUFDMUIsUUFBRyxFQUFFLE1BQU0sR0FBRTtBQUNUO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLGFBQVk7QUFDUixRQUFJLElBQUksS0FBSyxhQUFhO0FBQzFCLFFBQUcsRUFBRSxNQUFNLEdBQUU7QUFDVDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxlQUF5QjtBQUNyQixXQUFPLE9BQVcsVUFBVSxjQUFjLGlCQUFpQixFQUFFLFVBQVUsSUFBSTtBQUFBLEVBQy9FO0FBQUEsRUFDQSxhQUFhLE1BQXVCO0FBQ2hDLFdBQU8sT0FBVyxVQUFVLGNBQWMsSUFBSTtBQUFBLEVBQ2xEO0FBQ0o7QUFwSE8sSUFBTSxlQUFOO0FBZUgsY0FmUyxjQWVNOzs7QUNyQm5CO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBTSxlQUFOLGNBQTJCLFFBQWtDO0FBQUEsRUFDdEQsVUFBZ0I7QUFDdEIsWUFBUSxJQUFJLHFCQUFxQjtBQUFBLEVBQ3JDO0FBQUEsRUFDbUIsVUFBZ0I7QUFDL0IsWUFBUSxJQUFJLHFCQUFxQjtBQUFBLEVBQ3JDO0FBQ0o7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxhQUFOLGNBQXlCLFFBQVE7QUFBQSxFQUU3QixLQUFhO0FBQUEsRUFHYixhQUFxQixJQUFJLE9BQU87QUFBQSxFQU1oQyxXQUFXLFVBQWtCO0FBRWhDLFNBQUssYUFBYTtBQUNsQixTQUFLLE1BQU07QUFDWCxTQUFLLFdBQVcsS0FBSyxLQUFLLEVBQUU7QUFBQSxFQUNoQztBQUNKOzs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFHTyxJQUFNLGVBQU4sY0FBMkIsUUFBa0M7QUFBQSxFQUU3QyxVQUFnQjtBQUMvQixZQUFRLElBQUksY0FBYztBQUFBLEVBQzlCO0FBQ0o7OztBTEdBLElBQXFCLFNBQXJCLGNBQW9DLEtBQUssT0FBTztBQUFBLEVBQ3BDLG1CQUE0QyxvQkFBSTtBQUFBLEVBQ3hEO0FBQUEsRUFFQSxZQUFZLE1BQUs7QUFDYixVQUFNLElBQUk7QUFDVixXQUFPLGtCQUFrQkcsWUFBVyxZQUFZLHlCQUF5QixLQUFLLHFCQUFxQixLQUFLLElBQUksQ0FBQztBQUM3RyxXQUFPLFlBQVk7QUFBQSxFQUN2QjtBQUFBLEVBRUEsTUFBZ0IsVUFBVTtBQUN0QixTQUFLLGVBQWU7QUFDcEIsU0FBSyxnQkFBZ0IsTUFBTSxhQUFhLFNBQVM7QUFBQSxFQUVyRDtBQUFBLEVBT1UsU0FBUyxJQUFrQjtBQUFBLEVBRXJDO0FBQUEsRUFHVSxZQUFrQjtBQUFBLEVBRTVCO0FBQUEsRUFHVSxpQkFBaUI7QUFDdkIsa0JBQWMsWUFBWSxFQUFFLGVBQWUsY0FBYyxjQUFjLFVBQVU7QUFBQSxFQUNyRjtBQUFBLEVBRUEsTUFBYyxxQkFBcUIsUUFBaUIsVUFBa0I7QUFDbEUsWUFBUSxJQUFJLDJCQUEyQixRQUFPLE1BQU0sUUFBUTtBQUM1RCxRQUFJLElBQUksTUFBTSxjQUFjLGdCQUFnQixRQUFRO0FBQ3BELFlBQVEsSUFBSSxDQUFDO0FBQ2IsU0FBSyxpQkFBaUIsSUFBSSxRQUFRLENBQUM7QUFBQSxFQUN2QztBQUFBLEVBQ08sY0FBYyxNQUF1QztBQUN4RCxRQUFJLGdCQUFnQixTQUFTLFFBQVE7QUFDakMsYUFBTyxLQUFLLFVBQVU7QUFDdEIsYUFBTyxLQUFLLGlCQUFpQixJQUFJLElBQUk7QUFBQSxJQUN6QyxPQUFLO0FBQ0QsYUFBTyxLQUFLLGlCQUFpQixJQUFJLElBQUk7QUFBQSxJQUN6QztBQUFBLEVBQ0o7QUFDSjtBQTlDSSxjQUhpQixRQUdWO0FBSFUsU0FBckI7QUFBQSxFQURDLEtBQUs7QUFBQSxHQUNlOzs7QU1YckI7QUFBQTtBQUFBO0FBQUE7QUFNTyxJQUFNLGNBQU4sTUFBd0M7QUFBQSxFQU03QixhQUFzQixDQUFDO0FBQUEsRUFDdkIsYUFBNEIsb0JBQUksSUFBZTtBQUFBLEVBQy9DLFNBQXNDLG9CQUFJLElBQUk7QUFBQSxFQUl4RCxZQUFZLFdBQTRCO0FBQzlDLFFBQUksYUFBb0I7QUFDeEIsU0FBSyxhQUFhLElBQUksTUFBTSxVQUFVLFNBQVMsVUFBVTtBQUV6RCxhQUFRLElBQUksR0FBRyxJQUFJLEtBQUssV0FBVyxRQUFRLEtBQUk7QUFDOUMsV0FBSyxXQUFXLEtBQUssQ0FBQztBQUFBLElBQ3ZCO0FBQ0EsUUFBSSxTQUFTLFVBQVUsR0FBRztBQUMxQixhQUFRLElBQUksR0FBRyxJQUFJLFFBQVEsS0FBSTtBQUM5QixVQUFJLE9BQWMsVUFBVSxHQUFHO0FBQy9CLFVBQUksT0FBcUIsVUFBVSxHQUFHLEdBQUcsTUFBTSxHQUFHO0FBQ2xELFVBQUcsS0FBSyxTQUFTLFlBQVcsaUJBQWlCO0FBQUc7QUFDaEQsVUFBSSxVQUFpQjtBQUNyQixVQUFHLEtBQUssU0FBUyxZQUFXLGdCQUFnQixHQUFFO0FBQzdDLFlBQUksUUFBUSxJQUFJLFlBQVc7QUFDM0IsWUFBSSxhQUEyQixVQUFVLEdBQUcsT0FBTyxNQUFNLEdBQUc7QUFDNUQsWUFBRyxRQUFRLFVBQVUsV0FBVyxTQUFTLFlBQVcsaUJBQWlCLEdBQUU7QUFDdEUsb0JBQVUsWUFBVztBQUFBLFFBQ3RCO0FBQUEsTUFDRDtBQUNBLFVBQUksYUFBcUIsS0FBSyxTQUFTLFlBQVcsT0FBTztBQUN6RCxVQUFJLGtCQUEwQixLQUFLLFNBQVMsWUFBVyxZQUFZO0FBQ25FLGVBQVEsSUFBSSxHQUFHLElBQUksS0FBSyxXQUFXLFFBQVEsS0FBSTtBQUM5QyxZQUFJLE1BQU0sS0FBSyxXQUFXO0FBQzFCLFlBQUksUUFBUSxVQUFVLElBQUksWUFBWSxJQUFJO0FBQzFDLFlBQUcsS0FBSyxHQUFFO0FBQ1QsZUFBSyxXQUFXLElBQUksT0FBTyxHQUFHO0FBQUEsUUFDL0IsT0FBSztBQUNKLGNBQUcsWUFBVztBQUNiLGlCQUFLLE9BQU8sSUFBSSxPQUFPLFVBQVUsSUFBSSxZQUFZLEVBQUU7QUFBQSxVQUNwRDtBQUNBLGNBQUcsaUJBQWdCO0FBQ2xCLGdCQUFHLFlBQVcsZUFBZSxNQUFLO0FBQ2pDLHNCQUFRLFlBQVcsWUFBWSxLQUFLO0FBQUEsWUFDckMsT0FBSztBQUNKLHNCQUFRO0FBQUEsWUFDVDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQ0EsWUFBSSxRQUFRO0FBQUEsTUFDYjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFFQSxPQUFjLGFBQWEsZUFBc0IsZ0JBQTJDO0FBQzNGLGdCQUFXLGdCQUFnQjtBQUMzQixnQkFBVyxjQUFjO0FBQ3pCLFFBQUcsWUFBVyxnQkFBZ0IsR0FBRTtBQUMvQixrQkFBVyxnQkFBZ0IsWUFBVyx1QkFBdUI7QUFBQSxJQUM5RDtBQUFBLEVBQ0Q7QUFBQSxFQUVBLE9BQWUseUJBQStCO0FBQzdDLFFBQUksV0FBVyxLQUFLLFdBQVcsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVk7QUFDekUsUUFBSSxDQUFDLENBQUMsU0FBUyxNQUFNLElBQUksR0FBRztBQUMzQixhQUFPO0FBQUEsSUFDUjtBQUNBLFFBQUksQ0FBQyxDQUFDLFNBQVMsTUFBTSxJQUFJLEdBQUc7QUFDM0IsYUFBTztBQUFBLElBQ1I7QUFDQSxRQUFJLENBQUMsQ0FBQyxTQUFTLE1BQU0sSUFBSSxHQUFHO0FBQzNCLGFBQU87QUFBQSxJQUNSO0FBQ0EsUUFBSSxDQUFDLENBQUMsU0FBUyxNQUFNLElBQUksR0FBRztBQUMzQixhQUFPO0FBQUEsSUFDUjtBQUNBLFdBQU87QUFBQSxFQUNSO0FBQUEsRUFNTyxXQUFXLElBQXFCO0FBQ3RDLFFBQUksTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNwRixRQUFHLE9BQU8sTUFBSztBQUNkLGNBQVEsTUFBTSxLQUFLLFlBQVksT0FBTywrREFBa0IsRUFBRTtBQUFBLElBQzNEO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFBQSxFQU9PLFlBQVksV0FBa0IsWUFBa0I7QUFDdEQsYUFBUSxJQUFJLEdBQUcsSUFBSSxLQUFLLFdBQVcsUUFBUSxLQUFJO0FBQzlDLFVBQUcsS0FBSyxXQUFXLEdBQUcsY0FBYyxZQUFXO0FBQzlDLGVBQU8sS0FBSyxXQUFXO0FBQUEsTUFDeEI7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBT08sYUFBYSxXQUFpQixZQUF3QjtBQUM1RCxRQUFJLE1BQWUsQ0FBQztBQUNwQixhQUFRLElBQUksR0FBRSxJQUFJLEtBQUssV0FBVyxRQUFPLEtBQUk7QUFDNUMsVUFBRyxLQUFLLFdBQVcsR0FBRyxjQUFjLFlBQVc7QUFDOUMsWUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFO0FBQUEsTUFDNUI7QUFBQSxJQUNEO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFBQSxFQUVPLGdCQUF3QjtBQUM5QixXQUFPLEtBQUs7QUFBQSxFQUNiO0FBQ0Q7QUE1SE8sSUFBTSxhQUFOO0FBQ04sY0FEWSxZQUNZLFdBQWlCO0FBQ3pDLGNBRlksWUFFWSxnQkFBc0I7QUFDOUMsY0FIWSxZQUdZLG9CQUEwQjtBQUNsRCxjQUpZLFlBSVkscUJBQTJCO0FBS25ELGNBVFksWUFTRyxpQkFBdUI7QUFDdEMsY0FWWSxZQVVHOzs7QUNoQmhCO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQU0sWUFBOEIsQ0FBQyxDQUFDLE1BQUssUUFBTyxTQUFRLFNBQVEsT0FBTSxXQUFXLEdBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxnQkFBSyxLQUFJLEdBQUUsR0FBRSxRQUFRLEdBQUUsQ0FBQyxHQUFFLGdCQUFLLEtBQUksR0FBRSxHQUFFLFFBQVEsR0FBRSxDQUFDLEdBQUUsZ0JBQUssS0FBSSxHQUFFLEdBQUUsUUFBUSxDQUFDO0FBZS9LLElBQU0saUJBQU4sY0FBNkIsV0FBNEI7QUFBQSxFQUMvRCxjQUFhO0FBQ1osVUFBTSxTQUFTO0FBQUEsRUFDaEI7QUFFRDs7O0FEbEJPLElBQU0sYUFBTixNQUFnQjtBQUFBLEVBT3RCLE9BQWMsYUFBYSxlQUFzQixnQkFBMkM7QUFDM0YsZUFBVyxhQUFhLGVBQWUsY0FBYztBQUNyRCxTQUFLLFVBQVUsTUFBTTtBQUFBLEVBQ3RCO0FBQUEsRUFDQSxPQUFjLFVBQThDLGFBQThCO0FBQ3pGLFFBQUksQ0FBQyxLQUFLLFVBQVUsSUFBSSxZQUFZLElBQUksR0FBRztBQUMxQyxXQUFLLFVBQVUsSUFBSSxZQUFZLE1BQU0sSUFBSSxZQUFZLENBQUM7QUFBQSxJQUN2RDtBQUNBLFdBQU8sS0FBSyxVQUFVLElBQUksWUFBWSxJQUFJO0FBQUEsRUFDM0M7QUFBQSxFQUNBLFdBQWtCLFdBQXlCO0FBQUUsV0FBTyxLQUFLLFVBQVUsY0FBYztBQUFBLEVBQUU7QUFDcEY7QUFqQkMsY0FEWSxZQUNHLGFBQWtELG9CQUFJLElBQUk7OztBRUoxRTtBQUFBO0FBQUE7QUFBQTtBQUdBLElBQXFCLFlBQXJCLGNBQXVDLEdBQUcsV0FBVztBQUFBLEVBQ3BEO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUVXLGNBQWMsVUFBNEI7QUFDOUMsUUFBSSxlQUF5QixJQUFJLE1BQWM7QUFDL0MsUUFBSSxVQUFrQjtBQUN0QixRQUFJLElBQUksU0FBUyxNQUFNLEVBQUU7QUFDekIsYUFBUyxLQUFLLEdBQUc7QUFDYixVQUFJLEtBQUssS0FBSztBQUNWLHFCQUFhLEtBQUssT0FBTztBQUN6QixrQkFBVTtBQUFBLE1BQ2QsT0FBTztBQUNILG1CQUFXO0FBQUEsTUFDZjtBQUFBLElBQ0o7QUFDQSxRQUFJLFNBQVM7QUFDVCxtQkFBYSxLQUFLLE9BQU87QUFBQSxJQUM3QjtBQUNBLFdBQU87QUFBQSxFQUNYO0FBQUEsRUFHSyxXQUFXLFVBQXdCO0FBQzFDLFFBQUksZUFBZSxLQUFLLGNBQWMsUUFBUTtBQUM5QyxhQUFTLFdBQVcsY0FBYztBQUNqQyxXQUFLLFVBQVUsbUJBQW1CLE9BQU87QUFBQSxJQUMxQztBQUFBLEVBQ0Q7QUFBQSxFQUNRLGNBQW1CO0FBQzFCLFFBQUksTUFBaUIsV0FBVyxLQUFLLEtBQUssZ0JBQWdCO0FBQzFELFFBQUksT0FBTyxNQUFNO0FBQ2hCO0FBQUEsSUFDRDtBQUNBLFFBQUksSUFBSSxJQUFJLFdBQVc7QUFDdkIsUUFBSSxRQUF1QyxJQUFJLGdCQUFnQixjQUFjO0FBQzdFLFVBQU0sV0FBVyxpQkFBaUIsR0FBRyxDQUFDO0FBQUEsRUFDdkM7QUFBQSxFQUVRLG1CQUFtQixNQUFtQjtBQUM3QyxTQUFLLFlBQVksYUFBYSxHQUFHLGdCQUFnQjtBQUNqRCxTQUFLLG1CQUFtQjtBQUFBLEVBQ3pCO0FBQUEsRUFDUSxtQkFBbUIsTUFBaUI7QUFDM0MsUUFBSSxLQUFLLG9CQUFvQixNQUFNO0FBQ2xDLFdBQUssbUJBQW1CO0FBQ3hCLFdBQUssWUFBWSxhQUFhLEdBQUcsZ0JBQWdCO0FBQUEsSUFDbEQ7QUFBQSxFQUNEO0FBQUEsRUFFYSxVQUFVO0FBRXRCLFNBQUssV0FBVyxhQUFhO0FBRTdCLFNBQUssWUFBWTtBQUdYLFVBQU0sVUFBVSxLQUFLLGFBQWEsZ0JBQWdCLHdCQUF3QjtBQUNoRixVQUFNLFlBQVksS0FBSyxhQUFhLGdCQUFnQiwwQkFBMEI7QUFDOUUsU0FBSyxjQUFjLEtBQUssYUFBYSxnQkFBZ0Isd0JBQXdCO0FBQzdFLFNBQUssWUFBWSxhQUFhLEdBQUcsZ0JBQWdCO0FBRWpELFdBQU8saUJBQWlCLCtCQUErQixDQUFDLFNBQWU7QUFDdEUsV0FBSyxtQkFBbUIsSUFBSTtBQUFBLElBQzdCLENBQUM7QUFDRCxXQUFPLGlCQUFpQiwrQkFBK0IsQ0FBQyxTQUFlO0FBQ3RFLFdBQUssbUJBQW1CLElBQUk7QUFBQSxJQUM3QixDQUFDO0FBRUssWUFBUSxVQUFVLElBQUksTUFBSTtBQUMvQixVQUFJLEtBQUssV0FBVztBQUNuQixhQUFLLFVBQVUsS0FBSztBQUFBLE1BQ3JCLE9BQU87QUFDTixpQkFBUyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsV0FBVztBQUNqRCxlQUFLLFlBQVksT0FBTztBQUV4QixlQUFLLFVBQVUsS0FBSztBQUFBLFFBQ3JCLENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRCxDQUFDO0FBR0ssY0FBVSxVQUFVLElBQUksTUFBSTtBQUNoQyxlQUFTLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxXQUFXO0FBQ2pELGVBQU8sVUFBVSxhQUFhLGlCQUFpQixTQUFTLFdBQVcsT0FBTztBQUMxRSxlQUFPLFVBQVUsYUFBYSx3QkFBd0IsV0FBVyxTQUFTO0FBQzFFLGFBQUssWUFBWSxPQUFPO0FBRXhCLFlBQUksUUFBUSxPQUFPLFVBQVUsY0FBYyxPQUFPO0FBQ2xELGNBQU0sT0FBTyxTQUFTLFNBQVM7QUFFL0IsWUFBRyxNQUFNLFdBQVU7QUFDbEI7QUFBQSxRQUNELE9BQUs7QUFDSixnQkFBTSxLQUFLO0FBQUEsUUFDWjtBQUFBLE1BQ0QsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUdLLFNBQUssWUFBWSxVQUFVLElBQUksTUFBSTtBQUN4QyxXQUFLLFlBQVk7QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFFQztBQUFBLEVBT08sVUFBVTtBQUFBLEVBQ3BCO0FBQUEsRUFPVSxZQUFZO0FBQUEsRUFDdEI7QUFBQSxFQU1VLFlBQVk7QUFBQSxFQUN0QjtBQTBGRDtBQTNOcUIsWUFBckI7QUFBQSxFQURDLEdBQUcsV0FBVyxFQUFFO0FBQUEsR0FDSTs7O0FDSHJCO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBcUIsY0FBckIsY0FBeUMsS0FBSyxPQUFPO0FBQUEsRUFHdkMsVUFBZ0I7QUFBQSxFQUUxQjtBQUFBLEVBT1UsU0FBUyxJQUFrQjtBQUFBLEVBRXJDO0FBQUEsRUFHVSxZQUFrQjtBQUFBLEVBRTVCO0FBQ0o7QUFwQnFCLGNBQXJCO0FBQUEsRUFEQyxLQUFLO0FBQUEsR0FDZTs7O0FDRnJCO0FBQUE7QUFBQTtBQUFBO0FBR0EsSUFBcUIscUJBQXJCLGNBQWdELEtBQUssT0FBTztBQUFBLEVBQ2hELFdBQXVDLG9CQUFJO0FBQUEsRUFDM0M7QUFBQSxFQUVFLFVBQWdCO0FBQUEsRUFFMUI7QUFBQSxFQU9VLFNBQVMsSUFBa0I7QUFBQSxFQUVyQztBQUFBLEVBR1UsWUFBa0I7QUFBQSxFQUU1QjtBQUNKO0FBckJxQixxQkFBckI7QUFBQSxFQURDLEtBQUs7QUFBQSxHQUNlOzs7QVpLckIsZUFBMEI7OztBYVIxQjtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQXFCLGdCQUFyQixjQUEyQyxLQUFLLE9BQU87QUFBQSxFQUkzQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFRSxVQUFnQjtBQUN0QixTQUFLLFdBQVcsS0FBSztBQUNyQixTQUFLLFlBQXFCLEtBQUssU0FBUyxlQUFlLFNBQVM7QUFDaEUsU0FBSyxTQUFTLEtBQUssU0FBUztBQUM1QixTQUFLLFVBQVUsUUFBUSxJQUFJLFFBQU07QUFDN0IsVUFBSSxDQUFDLEtBQUssU0FBUyxnQkFBZ0IsR0FBRztBQUNsQztBQUFBLE1BQ0o7QUFFQSxVQUFJLEVBQUUsY0FBYyxTQUFTLFlBQVk7QUFFckM7QUFBQSxNQUNKO0FBRUEsV0FBeUI7QUFDekIsVUFBSSxFQUFFLE1BQU0saUJBQWlCLEVBQUUsWUFBWTtBQUV2QztBQUFBLE1BQ0o7QUFDQSxhQUFPLGNBQWMsK0JBQStCLEtBQUssTUFBTTtBQUFBLElBQ25FLENBQUM7QUFDRCxTQUFLLFVBQVUsUUFBUSxJQUFJLFFBQU07QUFDN0IsVUFBSSxDQUFDLEtBQUssU0FBUyxnQkFBZ0IsR0FBRztBQUNsQztBQUFBLE1BQ0o7QUFFQSxVQUFJLEVBQUUsY0FBYyxTQUFTLFlBQVk7QUFFckM7QUFBQSxNQUNKO0FBQ0EsV0FBeUI7QUFDekIsVUFBSSxFQUFFLE1BQU0saUJBQWlCLEVBQUUsWUFBWTtBQUV2QztBQUFBLE1BQ0o7QUFDQSxhQUFPLGNBQWMsK0JBQStCLEtBQUssTUFBTTtBQUFBLElBQ25FLENBQUM7QUFBQSxFQUdMO0FBQUEsRUFLTyxLQUFLLE1BQWUsV0FBOEI7QUFDckQsU0FBSyxXQUFXLFdBQVcsTUFBTSxFQUFDLE1BQVksWUFBYSxNQUFNLFVBQXFCLENBQUM7QUFFdkYsV0FBTyxLQUFLO0FBQUEsRUFDaEI7QUFBQSxFQUVPLFdBQW1CO0FBQ3RCLFdBQU8sS0FBSyxTQUFTLGdCQUFnQjtBQUFBLEVBQ3pDO0FBQUEsRUFFTyxXQUFXLFFBQWUsT0FBa0I7QUFDL0MsUUFBSSxLQUFLLFNBQVMsZ0JBQWdCLEdBQUc7QUFDakMsV0FBSyxrQkFBa0IsUUFBUSxLQUFLO0FBQUEsSUFDeEMsT0FBTztBQUNIO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUdVLGtCQUFrQixRQUFlLE9BQWtCO0FBQ3pELFNBQUssV0FBVyxRQUFRLEtBQUs7QUFDN0IsU0FBSyxXQUFXLFFBQVEsS0FBSztBQUFBLEVBQ2pDO0FBQUEsRUFLVSxXQUFXLFFBQWUsT0FBa0I7QUFDbEQsWUFBUSxJQUFJLGdFQUFjLE1BQU07QUFBQSxFQUNwQztBQUFBLEVBS1UsV0FBVyxRQUFlLE9BQWtCO0FBQ2xELFlBQVEsSUFBSSxnRUFBYyxNQUFNO0FBQUEsRUFDcEM7QUFDSjtBQWxCYztBQUFBLEVBRFQsS0FBSyxTQUFTLEtBQUssTUFBTTtBQUFBLEdBdEVULGNBdUVQO0FBUUE7QUFBQSxFQURULEtBQUssU0FBUyxLQUFLLE1BQU07QUFBQSxHQTlFVCxjQStFUDtBQU9BO0FBQUEsRUFEVCxLQUFLLFNBQVMsS0FBSyxNQUFNO0FBQUEsR0FyRlQsY0FzRlA7QUF0Rk8sZ0JBQXJCO0FBQUEsRUFERSxLQUFLO0FBQUEsR0FDYzs7O0FDRHJCO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBcUIsYUFBckIsY0FBd0MsS0FBSyxPQUFPO0FBQUEsRUFFekM7QUFBQSxFQUVBLEtBQWM7QUFBQSxFQUVkO0FBQUEsRUFFRyxVQUFnQjtBQUV0QixZQUFRLElBQUkseUNBQVcsS0FBSyxJQUFJO0FBQUEsRUFFcEM7QUFBQSxFQUNPLFNBQVMsR0FBdUI7QUFDbkMsUUFBRyxLQUFLLGdCQUFnQixHQUFFO0FBQ3RCO0FBQUEsSUFDSjtBQUNBLFNBQUssWUFBWTtBQUNqQixTQUFLLFFBQVE7QUFDYixTQUFLLEtBQUssS0FBSztBQUNmLFlBQVEsSUFBSSxvRUFBYTtBQUFBLEVBQzdCO0FBQUEsRUFNVSxTQUFTLElBQWtCO0FBQUEsRUFFckM7QUFBQSxFQUdVLFlBQWtCO0FBQUEsRUFFNUI7QUFDSjtBQS9CVztBQUFBLEVBRE4sS0FBSyxTQUFTLEVBQUMsYUFBYSxnQkFBTSxZQUFhLEtBQUksQ0FBQztBQUFBLEdBSHBDLFdBSVY7QUFFQTtBQUFBLEVBRE4sS0FBSyxTQUFTLEVBQUMsYUFBYSw0QkFBUSxZQUFhLEtBQUksQ0FBQztBQUFBLEdBTHRDLFdBTVY7QUFOVSxhQUFyQjtBQUFBLEVBREMsS0FBSztBQUFBLEdBQ2U7OztBQ0ZyQjtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBTU8sSUFBVTtBQUFBLENBQVYsQ0FBVUMsZ0JBQVY7QUFDSSxXQUFTLGlCQUFpQixTQUFzQjtBQUFBLEVBRXZEO0FBRk8sRUFBQUEsWUFBUztBQUdULFdBQVMseUJBQXlCLFdBQTRCO0FBQUEsRUFFckU7QUFGTyxFQUFBQSxZQUFTO0FBR1QsV0FBUyx1QkFBdUIsU0FBd0I7QUFBQSxFQUUvRDtBQUZPLEVBQUFBLFlBQVM7QUFHVCxXQUFTLHVCQUF1QixTQUF3QjtBQUFBLEVBRS9EO0FBRk8sRUFBQUEsWUFBUztBQUdULFdBQVMsMEJBQTBCLFlBQWtDO0FBQUEsRUFFNUU7QUFGTyxFQUFBQSxZQUFTO0FBR1QsV0FBUyxNQUFNLFdBQWlCO0FBQ25DLFdBQU8sYUFBYSxLQUFLLE9BQU8sSUFBSTtBQUFBLEVBQ3hDO0FBRk8sRUFBQUEsWUFBUztBQVVULFdBQVMsYUFBYSxRQUFlLE1BQWUsT0FBc0I7QUFDN0UsUUFBSSxLQUFLLE9BQU8sV0FBVztBQUMzQixRQUFJLEtBQUssR0FBRyxhQUFhO0FBQ3pCLFFBQUk7QUFDSixZQUFRO0FBQ1IsZUFBVyxjQUFjLE1BQU0sT0FBTyxLQUFLO0FBQzNDLFFBQUk7QUFDSixlQUFXLGVBQWUsUUFBUSxPQUFPLEdBQUc7QUFDNUMsV0FBTztBQUFBLEVBQ1g7QUFUTyxFQUFBQSxZQUFTO0FBYVQsV0FBUyxjQUFzQjtBQUNsQyxRQUFJLElBQUksS0FBSyxPQUFPO0FBQ3BCLFFBQUksSUFBSSxLQUFLLE9BQU87QUFDcEIsUUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQztBQUM5RCxTQUFNLElBQUksS0FBSztBQUNmLFFBQUksSUFBSSxJQUFJO0FBQ1osUUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUc7QUFDakIsYUFBTyxZQUFZO0FBQUEsSUFDdkI7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQVZPLEVBQUFBLFlBQVM7QUFjVCxXQUFTLFVBQVUsR0FBWSxHQUFvQjtBQUN0RCxRQUFJLEtBQUs7QUFDVCxRQUFHLEtBQUssS0FBSyxLQUFLLEdBQUU7QUFDaEIsY0FBUSxNQUFNLDJCQUEyQjtBQUFBLElBQzdDO0FBQ0EsUUFBRyxJQUFJLEdBQUU7QUFDTCxjQUFRLE1BQU0sc0JBQXNCO0FBQUEsSUFDeEM7QUFDQSxRQUFHLEtBQUssR0FBRTtBQUNOLGFBQU87QUFBQSxJQUNYO0FBQ0EsV0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUk7QUFBQSxFQUN2RTtBQVpPLEVBQUFBLFlBQVM7QUFjVCxXQUFTLFdBQVcsR0FBWSxHQUFvQjtBQUN2RCxRQUFJLEtBQUs7QUFDVCxRQUFHLEtBQUssS0FBSyxLQUFLLEdBQUU7QUFDaEIsY0FBUSxNQUFNLDJCQUEyQjtBQUFBLElBQzdDO0FBQ0EsUUFBRyxLQUFLLEdBQUU7QUFDTixhQUFPLFVBQVUsR0FBRyxDQUFDO0FBQUEsSUFDekI7QUFDQSxXQUFPLENBQUMsVUFBVSxHQUFHLENBQUM7QUFBQSxFQUMxQjtBQVRPLEVBQUFBLFlBQVM7QUFVVCxXQUFTLGFBQWEsV0FBbUIsZ0JBQStCO0FBRTNFLFVBQU0sY0FBYyxZQUFZLElBQUk7QUFHcEMsVUFBTSxpQkFBaUIsS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLO0FBR2hELFVBQU0sSUFBSSxLQUFLLElBQUksV0FBVyxJQUFJLEtBQUssSUFBSSxjQUFjO0FBQ3pELFVBQU0sSUFBSSxLQUFLLElBQUksV0FBVztBQUM5QixVQUFNLElBQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxLQUFLLElBQUksY0FBYztBQUd6RCxVQUFNLE9BQU8sVUFBVTtBQUN2QixVQUFNLGVBQWU7QUFBQSxNQUNqQixDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUM7QUFBQSxNQUNuQyxDQUFDLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQUEsTUFDbEMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ1o7QUFFQSxVQUFNLFdBQVcsYUFBYSxHQUFHLEtBQUssSUFBSSxhQUFhLEdBQUcsS0FBSyxJQUFJLGFBQWEsR0FBRyxLQUFLO0FBQ3hGLFVBQU0sV0FBVyxhQUFhLEdBQUcsS0FBSyxJQUFJLGFBQWEsR0FBRyxLQUFLLElBQUksYUFBYSxHQUFHLEtBQUs7QUFDeEYsVUFBTSxXQUFXLGFBQWEsR0FBRyxLQUFLLElBQUksYUFBYSxHQUFHLEtBQUssSUFBSSxhQUFhLEdBQUcsS0FBSztBQUV4RixXQUFPLElBQUksT0FBTyxVQUFVLFVBQVUsUUFBUTtBQUFBLEVBQ2xEO0FBekJPLEVBQUFBLFlBQVM7QUEwQlQsV0FBUyxpQkFBaUIsR0FBWSxjQUF1QixXQUE0QjtBQUM1RixRQUFJLGFBQWEsS0FBSyxnQkFBZ0IsR0FBRztBQUNyQyxjQUFRLE1BQU0sc0dBQXNCO0FBQ3BDO0FBQUEsSUFDSjtBQUNBLFFBQUksSUFBSSxHQUFHO0FBQ1AsY0FBUSxNQUFNLDBFQUFjO0FBQUEsSUFDaEM7QUFDQSxRQUFJLEtBQUssY0FBYztBQUNuQixhQUFPO0FBQUEsSUFDWCxXQUFTLEtBQUcsWUFBWSxjQUFhO0FBQ2pDLGFBQU87QUFBQSxJQUNYLE9BQUs7QUFDRCxhQUFPLElBQUksZUFBZTtBQUFBLElBQzlCO0FBQUEsRUFDSjtBQWZPLEVBQUFBLFlBQVM7QUFnQlQsV0FBUyxtQkFBbUIsR0FBWSxjQUF1QixXQUFtQjtBQUNyRixRQUFJLE9BQU8sS0FBSyxJQUFJLElBQUk7QUFDeEIsV0FBTyxpQkFBaUIsT0FBTyxHQUFHLGNBQWMsU0FBUztBQUFBLEVBQzdEO0FBSE8sRUFBQUEsWUFBUztBQUlULFdBQVMsY0FBYyxhQUFzQixXQUFvQixTQUFrQixLQUFjLFVBQWtCO0FBQ3RILGVBQVcsV0FBVyxXQUFXO0FBQ2pDLFFBQUk7QUFDSixhQUFTLFFBQVEsR0FBRyxTQUFTLFNBQVMsU0FBUztBQUMzQyxVQUFJLE9BQU8sSUFBSSxRQUFRLFlBQVksR0FBRyxZQUFZLENBQUMsRUFBRSxJQUFJLElBQUksUUFBUSxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLE1BQU0sS0FBSztBQUNwSCxVQUFJLE9BQU8sVUFBVSxJQUFJLE1BQU0sUUFBUSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxTQUFTLFlBQVk7QUFDMUcsWUFBTSxLQUFLLElBQUksT0FBTyxLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUFBLElBQy9DO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFUTyxFQUFBQSxZQUFTO0FBVVQsV0FBUyxzQkFBc0IsT0FBYyxNQUFvQixNQUFtQjtBQUN2RixRQUFJLFNBQVMsR0FBRztBQUVaLFVBQUksaUJBQWlCLEtBQUssWUFBWTtBQUN0QyxVQUFJLE1BQU0sZUFBZTtBQUN6QixVQUFHLE9BQU8sR0FBRTtBQUNSLGVBQU87QUFBQSxNQUNYO0FBQ0EsZUFBUyxJQUFJLEtBQUssS0FBSyxHQUFHLEtBQUs7QUFDM0IsWUFBRyxlQUFlLEdBQUcsWUFBWSxNQUFLO0FBQ2xDLGlCQUFPLGVBQWUsR0FBRztBQUFBLFFBQzdCO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYLFdBQVUsU0FBUyxHQUFHO0FBRWxCLFVBQUksdUJBQXVCLEtBQUssWUFBWTtBQUM1QyxVQUFJLE1BQU0scUJBQXFCO0FBQy9CLFVBQUcsT0FBTyxHQUFFO0FBQ1IsZUFBTztBQUFBLE1BQ1g7QUFDQSxlQUFTLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSztBQUMzQixZQUFHLHFCQUFxQixHQUFHLFlBQVksTUFBSztBQUN4QyxpQkFBTyxxQkFBcUIsR0FBRztBQUFBLFFBQ25DO0FBQUEsTUFDSjtBQUNBLGFBQU87QUFBQSxJQUNYO0FBQUEsRUFDSjtBQTVCTyxFQUFBQSxZQUFTO0FBdUNULFdBQVMsZ0JBQWdCLE9BQzVCLFlBQ0EsY0FDQSxNQUNBLFFBQ0EsTUFBd0I7QUFDcEIsUUFBSTtBQUtKLFdBQU87QUFBQSxFQUNmO0FBWk8sRUFBQUEsWUFBUztBQWFULFdBQVMsZ0JBQWdCLFdBQTRCO0FBSXhEO0FBQUEsRUFDSjtBQUxPLEVBQUFBLFlBQVM7QUFBQSxHQXpMSDs7O0FDTmpCO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxZQUFOLE1BQWU7QUFBQSxFQUVsQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLEVBRUEsWUFDSSxjQUNBLFFBQ0EsVUFDQSxPQUFnQjtBQUNaLFlBQVEsU0FBUyxXQUFXO0FBQUEsSUFBQztBQUM3QixTQUFLLGdCQUFnQixDQUFDLE1BQWM7QUFDaEMsWUFBTTtBQUNOLFFBQUUsWUFBWSxhQUFhO0FBQzNCLFFBQUUsT0FBTztBQUNULFdBQUssWUFBWTtBQUFBLElBQ3JCO0FBQ0EsU0FBSyxpQkFBaUIsQ0FBQyxHQUFhLE9BQWM7QUFDOUMsVUFBSSxDQUFDLEtBQUssV0FBVztBQUNqQjtBQUFBLE1BQ0o7QUFDQSxRQUFFLFFBQVE7QUFDVixVQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVU7QUFDckIsVUFBRSxhQUFhLENBQUM7QUFDaEI7QUFBQSxNQUNKO0FBQ0EsYUFBTyxFQUFFLE1BQUssRUFBRSxXQUFVLEVBQUUsSUFBSTtBQUFBLElBQ3BDO0FBQ0EsU0FBSyxlQUFlLENBQUMsTUFBYztBQUMvQixVQUFHLENBQUMsS0FBSyxXQUNUO0FBQ0k7QUFBQSxNQUNKO0FBQ0EsZUFBUztBQUNULFdBQUssWUFBWTtBQUFBLElBQ3JCO0FBQUEsRUFDUjtBQUNKOzs7QUZ4Q08sSUFBTSxvQkFBTixNQUFzQjtBQUFBLEVBQ3pCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxhQUFzQjtBQUFBLEVBQ3RCLFFBQWlCO0FBQUEsRUFDakI7QUFBQSxFQUNBLFdBQW9CO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUdBLFdBQWtCLFdBQVc7QUFDekIsUUFBSSxrQkFBaUIsYUFBYSxNQUFNO0FBQ3BDLHdCQUFpQixZQUFZLElBQUksa0JBQWlCO0FBQUEsSUFDdEQ7QUFDQSxXQUFPLGtCQUFpQjtBQUFBLEVBQzVCO0FBQUEsRUFDQSxjQUFjO0FBQ1YsU0FBSyxtQkFBbUIsSUFBSTtBQUFBLE1BQ3hCLE1BQU07QUFDRixlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsQ0FBQyxJQUFhLElBQWEsT0FBZ0I7QUFDdkMsYUFBSyxtQkFBbUIsU0FBUyxpQkFBaUIsRUFBRSxVQUFVLG9CQUFvQjtBQUNsRixZQUFJLE1BQU0sS0FBSyxrQkFBa0IsS0FBSyxNQUFNLEtBQUssbUJBQW1CLEtBQUs7QUFDekUsYUFBSyxrQkFBa0I7QUFBQSxNQUMzQjtBQUFBLE1BQ0EsTUFBTTtBQUNGLGFBQUssa0JBQWtCLEtBQUs7QUFBQSxNQUNoQztBQUFBLElBQ0o7QUFDQSxTQUFLLGtCQUFrQixJQUFJO0FBQUEsTUFDdkIsTUFBTTtBQUNGLGVBQU8sS0FBSztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxDQUFDLElBQWEsSUFBYSxPQUFnQjtBQUN2QyxhQUFLLGNBQWMsSUFBSTtBQUFBLFVBQ25CLFdBQVcsTUFBTSxLQUFLLFlBQVk7QUFBQSxVQUNsQyxXQUFXLE1BQU0sS0FBSyxZQUFZO0FBQUEsVUFDbEMsV0FBVyxNQUFNLEtBQUssWUFBWTtBQUFBLFFBQ3RDLEVBQUUsU0FBUyxLQUFLLEVBQUU7QUFBQSxNQUN0QjtBQUFBLE1BQ0EsTUFBTTtBQUNGLGFBQUssY0FBYyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFBQSxNQUN6QztBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPLElBQWU7QUFDbEIsU0FBSyxpQkFBaUIsZUFBZSxLQUFLLGtCQUFrQixFQUFFO0FBQzlELFNBQUssZ0JBQWdCLGVBQWUsS0FBSyxrQkFBa0IsRUFBRTtBQUM3RCxRQUFHLEtBQUssWUFBWSxHQUFFO0FBQ2xCLFdBQUssU0FBUyxVQUFVLE9BQU8sT0FBTyxJQUFJLEtBQUssUUFBUTtBQUFBLElBQzNEO0FBQ0EsUUFBRyxLQUFLLGNBQWMsR0FBRTtBQUNwQixXQUFLLFNBQVMsVUFBVSxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVU7QUFBQSxJQUNoRTtBQUNBLFFBQUcsS0FBSyxVQUFTO0FBQ2IsV0FBSyxTQUFTLGtCQUFrQixLQUFLO0FBQUEsSUFDekM7QUFDQSxRQUFHLEtBQUssU0FBUyxHQUFFO0FBQ2YsV0FBSyxTQUFTLFVBQVUsT0FBTyxPQUFPLFNBQVMsS0FBSyxLQUFLO0FBQUEsSUFDN0Q7QUFDQSxRQUFHLEtBQUssZUFBZSxLQUFLLFNBQVMsV0FBVTtBQUMzQyxXQUFLLFNBQVMsWUFBWSxLQUFLO0FBQUEsSUFDbkM7QUFDQSxTQUFLLFVBQVU7QUFDZixTQUFLLFVBQVU7QUFBQSxFQUVuQjtBQUFBLEVBQ0EsWUFBVztBQUNQLFNBQUssV0FBVztBQUNoQixTQUFLLGFBQWE7QUFDbEIsU0FBSyxRQUFRO0FBQ2IsU0FBSyxXQUFXO0FBQ2hCLFNBQUssY0FBYyxLQUFLLFNBQVM7QUFBQSxFQUNyQztBQUFBLEVBQ0EsU0FBUTtBQUNKLFNBQUssaUJBQWlCLGNBQWMsS0FBSyxnQkFBZ0I7QUFDekQsUUFBRyxLQUFLLE9BQU8sS0FBSyxJQUFJLFNBQVE7QUFDNUIsV0FBSyxJQUFJLGVBQWUsT0FBTztBQUFBLElBQ25DO0FBQUEsRUFDSjtBQUFBLEVBQ0EsWUFBVztBQUNQLFNBQUssU0FBUyw4QkFBOEIsV0FBVyxLQUFLLE9BQU8sSUFBSSxPQUFPLEdBQUcsU0FBUyxLQUFLLGVBQWUsQ0FBQyxFQUFFLElBQUksS0FBSyxXQUFXO0FBQUEsRUFDekk7QUFBQSxFQUNBLFlBQVksVUFBaUIsTUFBWTtBQUNyQyxTQUFLLGVBQWU7QUFDcEIsU0FBSyxZQUFZO0FBQ2pCLFNBQUssZ0JBQWdCLGNBQWMsS0FBSyxlQUFlO0FBQUEsRUFDM0Q7QUFDSjtBQWxHTyxJQUFNLG1CQUFOO0FBa0JILGNBbEJTLGtCQWtCTTs7O0FEaEJaLElBQU0sa0JBQU4sTUFBcUI7QUFBQSxFQUN4QjtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFFQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUlBLFdBQWtCLFdBQVc7QUFDekIsUUFBSSxnQkFBZSxhQUFhLE1BQU07QUFDbEMsc0JBQWUsWUFBWSxJQUFJLGdCQUFlO0FBQUEsSUFDbEQ7QUFDQSxXQUFPLGdCQUFlO0FBQUEsRUFDMUI7QUFBQSxFQUNRLG1CQUFtQjtBQUN2QixXQUFPLGtCQUFrQixXQUFXLFlBQVksb0JBQW9CLEtBQUssMEJBQTBCLEtBQUssSUFBSSxDQUFDO0FBQzdHLFdBQU8saUJBQWlCLFdBQVcsWUFBWSxvQkFBb0IsS0FBSywwQkFBMEIsS0FBSyxJQUFJLENBQUM7QUFBQSxFQUVoSDtBQUFBLEVBQ0EsY0FBYztBQUFBLEVBR2Q7QUFBQSxFQUNRLGtCQUFrQjtBQUV0QixTQUFLLGNBQWMsb0JBQUksSUFBcUI7QUFBQSxNQUN4QyxDQUFDLE9BQU8sS0FBSztBQUFBLE1BQ2IsQ0FBQyxVQUFVLEtBQUs7QUFBQSxNQUNoQixDQUFDLFdBQVcsS0FBSztBQUFBLE1BQ2pCLENBQUMsT0FBTyxLQUFLO0FBQUEsSUFDakIsQ0FBQztBQUNELFNBQUssYUFBYSxDQUFDO0FBQUEsRUFDdkI7QUFBQSxFQUNRLHVCQUF1QjtBQUMzQixTQUFLLE9BQU8sZ0JBQWdCO0FBQUEsRUFDaEM7QUFBQSxFQUlRLDRCQUE0QjtBQUNoQyxRQUFJLGFBQWEsU0FBUyxVQUFVLE1BQU07QUFDdEM7QUFBQSxJQUNKO0FBQUEsRUFFSjtBQUFBLEVBQ1Esc0JBQXNCLE9BQWU7QUFBQSxFQUU3QztBQUFBLEVBRVEsc0JBQXNCLFdBQW1CO0FBQzdDLFFBQUksS0FBSyxZQUFZLElBQUksU0FBUyxHQUFHO0FBQ2pDLFdBQUssWUFBWSxJQUFJLFdBQVcsS0FBSztBQUFBLElBQ3pDLE9BQU87QUFDSCxXQUFLLFlBQVksSUFBSSxXQUFXLElBQUk7QUFBQSxJQUN4QztBQUNBLFNBQUssWUFBWSxRQUFRLENBQUMsT0FBTyxRQUFRO0FBQ3JDLFVBQUksT0FBTztBQUNQLGFBQUssV0FBVyxLQUFLLEdBQUc7QUFBQSxNQUM1QjtBQUFBLElBQ0osQ0FBQztBQUNELFFBQUksS0FBSyxXQUFXLFVBQVUsR0FBRztBQUM3QixjQUFRLEtBQUssV0FBVztBQUFBLGFBQ2Y7QUFDRCxlQUFLLGtCQUFrQixVQUFVLHFCQUFxQixHQUFHO0FBQ3pEO0FBQUE7QUFFQTtBQUFBO0FBQUEsSUFFWixXQUFXLEtBQUssV0FBVyxVQUFVLEdBQUc7QUFDcEMsV0FBSyxXQUFXLFFBQVEsQ0FBQyxPQUFPLFFBQVE7QUFDcEMsZ0JBQVE7QUFBQSxlQUNDO0FBQ0QsaUJBQUssa0JBQWtCLFVBQVUscUJBQXFCLFNBQVM7QUFDL0Q7QUFBQSxlQUNDO0FBQ0QsaUJBQUssa0JBQWtCLFVBQVUscUJBQXFCLFVBQVU7QUFDaEU7QUFBQSxlQUNDO0FBQ0QsaUJBQUssa0JBQWtCLFVBQVUscUJBQXFCLE1BQU07QUFDNUQ7QUFBQTtBQUVBO0FBQUE7QUFBQSxNQUVaLENBQUM7QUFBQSxJQUNMLFdBQVcsS0FBSyxXQUFXLFVBQVUsR0FBRztBQUNwQyxXQUFLLFdBQVcsUUFBUSxDQUFDLE9BQU8sUUFBUTtBQUNwQyxnQkFBUTtBQUFBLGVBQ0M7QUFDRCxpQkFBSyxrQkFBa0IsVUFBVSxxQkFBcUIsZ0JBQWdCO0FBQ3RFO0FBQUEsZUFDQztBQUNELGlCQUFLLGtCQUFrQixVQUFVLHFCQUFxQixZQUFZO0FBQ2xFO0FBQUE7QUFFQTtBQUFBO0FBQUEsTUFFWixDQUFDO0FBQUEsSUFDTDtBQUNBLFNBQUssYUFBYSxDQUFDO0FBQUEsRUFDdkI7QUFBQSxFQUNRLGtCQUFrQixVQUEwQztBQUNoRSxTQUFLLFFBQVE7QUFBQSxFQUNqQjtBQUFBLEVBRVEsaUJBQWlCLElBQVk7QUFBQSxFQUdyQztBQUFBLEVBQ08sT0FBTyxJQUFZO0FBQ3RCLFNBQUssaUJBQWlCLEVBQUU7QUFDeEIsU0FBSyxzQkFBc0I7QUFFM0IsUUFBSTtBQUNKLFlBQVEsS0FBSztBQUFBLFdBQ0osVUFBVSxxQkFBcUI7QUFFaEM7QUFBQSxXQUNDLFVBQVUscUJBQXFCO0FBRWhDO0FBQUEsV0FDQyxVQUFVLHFCQUFxQjtBQUVoQztBQUFBLFdBQ0MsVUFBVSxxQkFBcUI7QUFFaEM7QUFBQSxXQUNDLFVBQVUscUJBQXFCO0FBRWhDO0FBQUEsV0FDQyxVQUFVLHFCQUFxQjtBQUVoQztBQUFBO0FBRUE7QUFBQTtBQUVSLFNBQUssT0FBTyxlQUFlLE1BQU0sS0FBSyxnQkFBZ0IsS0FBSyxjQUFjLEtBQUssWUFBWTtBQUFBLEVBRTlGO0FBQUEsRUFDUSx3QkFBd0I7QUFDNUIsUUFBRyxhQUFhLFNBQVMsUUFBTztBQUM1QixXQUFLLFlBQVksSUFBSSxhQUFhLFNBQVMsT0FBTyxZQUFZO0FBQUEsSUFDbEU7QUFBQSxFQUNKO0FBQUEsRUFDUSxhQUFhO0FBRWpCLFFBQUcsQ0FBQyxLQUFLLE9BQU8sV0FBVTtBQUN0QixVQUFJLEtBQUssT0FBTyxhQUFhO0FBQ3pCLGFBQUssT0FBTyxPQUFPLEtBQUs7QUFDeEIsYUFBSyxzQkFBc0IsUUFBUTtBQUNuQyx5QkFBaUIsU0FBUyxPQUFPO0FBQUEsTUFDckMsT0FBTztBQUNILFlBQUksYUFBYSxTQUFTLFVBQVUsYUFBYSxTQUFTLE9BQU8sV0FBVztBQUN4RSx1QkFBYSxTQUFTLE9BQU8sa0JBQWtCO0FBQUEsUUFDbkQ7QUFDQSxhQUFLLE9BQU8sS0FBSztBQUFBLE1BQ3JCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLGVBQWU7QUFDWCxTQUFLLHNCQUFzQixRQUFRO0FBQ25DLFFBQUcsQ0FBQyxLQUFLLE9BQU8sYUFBWTtBQUN4QixXQUFLLE9BQU8sT0FBTyxJQUFJO0FBQUEsSUFDM0IsT0FBSztBQUNELFdBQUssT0FBTyxPQUFPLEtBQUs7QUFBQSxJQUM1QjtBQUNBLHFCQUFpQixTQUFTLE9BQU87QUFBQSxFQUNyQztBQUFBLEVBQ0EsY0FBYTtBQUNULFFBQUcsS0FBSyxPQUFPLGFBQVk7QUFBQSxJQUUzQjtBQUFBLEVBQ0o7QUFBQSxFQUNRLGlCQUFnQjtBQUNwQixTQUFLLFlBQVk7QUFFakIsU0FBSyxnQkFBZ0I7QUFDckIsU0FBSyxxQkFBcUI7QUFDMUIsU0FBSyxzQkFBc0IsS0FBSztBQUFBLEVBRXBDO0FBQ0o7QUEzTE8sSUFBTSxpQkFBTjtBQWNILGNBZFMsZ0JBY007OztBSXBCbkI7QUFBQTtBQUFBO0FBQUE7QUFNQSxJQUFxQixhQUFyQixjQUF3QyxLQUFLLE9BQU87QUFBQSxFQUN4QyxtQkFBNEMsb0JBQUk7QUFBQSxFQUV4RCxZQUFZLE1BQUs7QUFDYixVQUFNLElBQUk7QUFDVixlQUFXLFlBQVk7QUFBQSxFQUMzQjtBQUFBLEVBQ1UsVUFBZ0I7QUFDdEIsV0FBTyx3QkFBd0IsS0FBSyxlQUFlLEtBQUssSUFBSSxDQUFDO0FBQzdELFdBQU8sc0JBQXNCLEtBQUssYUFBYSxLQUFLLElBQUksQ0FBQztBQUFBLEVBQzdEO0FBQUEsRUFFQSxNQUFjLGVBQWUsUUFBdUI7QUFDaEQsWUFBUSxJQUFJLDZCQUFTLE9BQU8sVUFBVSxJQUFJO0FBQzFDLFFBQUksTUFBTSxNQUFNLEtBQUssT0FBTyxZQUF3QixZQUFZLElBQUk7QUFDcEUsUUFBSSxTQUFTLE9BQU8sU0FBUztBQUM3QixTQUFLLGlCQUFpQixJQUFJLE9BQU8sVUFBVSxNQUFNLEdBQUc7QUFDcEQsWUFBUSxJQUFJLHVCQUFRLElBQUksSUFBSTtBQUM1QixXQUFPLG9CQUFvQkMsWUFBVyxZQUFZLHlCQUF5QixPQUFPLFVBQVUsTUFBTyxJQUFJLElBQUk7QUFBQSxFQUMvRztBQUFBLEVBQ1EsYUFBYSxRQUF1QjtBQUN4QyxZQUFRLElBQUksNkJBQVMsT0FBTyxVQUFVLElBQUk7QUFDMUMsUUFBSSxNQUFNLEtBQUssaUJBQWlCLElBQUksT0FBTyxVQUFVLElBQUk7QUFDekQsUUFBSSxRQUFRO0FBQ1osU0FBSyxpQkFBaUIsT0FBTyxPQUFPLFVBQVUsSUFBSTtBQUFBLEVBQ3REO0FBQUEsRUFFTyxjQUFjLE1BQXVDO0FBQ3hELFFBQUksZ0JBQWdCLFNBQVMsUUFBUTtBQUNqQyxhQUFPLEtBQUssVUFBVTtBQUN0QixhQUFPLEtBQUssaUJBQWlCLElBQUksSUFBSTtBQUFBLElBQ3pDLE9BQUs7QUFDRCxhQUFPLEtBQUssaUJBQWlCLElBQUksSUFBSTtBQUFBLElBQ3pDO0FBQUEsRUFDSjtBQUNKO0FBakNJLGNBRmlCLFlBRVY7QUFGVSxhQUFyQjtBQUFBLEVBREMsS0FBSztBQUFBLEdBQ2U7OztBQ05yQjtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQWUseUJBQWYsTUFBcUM7QUFBQSxFQUNoQztBQUFBLEVBQ0Q7QUFBQSxFQUNDO0FBQUEsRUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNQLFlBQVksTUFBaUI7QUFDekIsU0FBSyxrQkFBa0I7QUFDdkIsU0FBSyxpQkFBaUI7QUFDdEIsZUFBVywwQkFBMEIsSUFBSTtBQUN6QyxTQUFLLFVBQVU7QUFBQSxFQUNuQjtBQUFBLEVBQ08sT0FBTyxJQUFVO0FBQUEsRUFFeEI7QUFBQSxFQUNPLGNBQWMsUUFBc0I7QUFDdkMsU0FBSyxpQkFBaUI7QUFBQSxFQUMxQjtBQUFBLEVBQ08sb0JBQW1CO0FBQ3RCLFNBQUssaUJBQWlCO0FBQUEsRUFDMUI7QUFBQSxFQUNPLGFBQVk7QUFBQSxFQUVuQjtBQUFBLEVBQ1EsWUFBVztBQUFBLEVBRW5CO0FBQ0o7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU0sb0JBQU4sTUFBdUI7QUFBQSxFQUNuQjtBQUFBLEVBQ0M7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVSLFlBQVksSUFBVSxPQUFhLFdBQXNCO0FBQ3JELFNBQUssS0FBSztBQUNWLFNBQUssUUFBUTtBQUNiLFNBQUssWUFBWTtBQUVqQixTQUFLLFVBQVU7QUFBQSxFQUNuQjtBQUFBLEVBRVEsZUFBZSxZQUF5QixPQUFvQjtBQUNoRSxRQUFHLFlBQVc7QUFBQSxJQUVkO0FBQ0EsU0FBSyxTQUFTO0FBQ2QsU0FBSyxVQUFVO0FBQUEsRUFDbkI7QUFBQSxFQUNRLGVBQWUsT0FBc0I7QUFDekMsUUFBSSxZQUFZO0FBQ2hCLFFBQUcsS0FBSyxTQUFTLEdBQUU7QUFDZjtBQUFBLElBQ0o7QUFDQSxRQUFHLFNBQVMsS0FBSyxPQUFNO0FBQ25CLGtCQUFZO0FBQUEsSUFDaEI7QUFDQSxTQUFLLFNBQVM7QUFDZCxRQUFHLFdBQVU7QUFDVCxXQUFLLFFBQVE7QUFBQSxJQUNqQjtBQUNBLFdBQU87QUFBQSxFQUNYO0FBQUEsRUFDTyxrQkFBa0IsT0FBc0I7QUFDM0MsUUFBRyxLQUFLLFNBQVMsR0FBRTtBQUNmLFdBQUssUUFBUTtBQUNiLGFBQU87QUFBQSxJQUNYO0FBQ0EsUUFBRyxRQUFRLEtBQUssT0FBTTtBQUNsQixjQUFRLEtBQUs7QUFBQSxJQUNqQjtBQUNBLFNBQUssU0FBUztBQUNkLFdBQU87QUFBQSxFQUNYO0FBQUEsRUFDTyxTQUFTLE9BQW9CO0FBQ2hDLFNBQUssUUFBUTtBQUFBLEVBQ2pCO0FBQUEsRUFDUSxZQUFnQjtBQUFBLEVBRXhCO0FBQ0o7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU0scUJBQU4sTUFBd0I7QUFBQSxFQUMzQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxjQUFhO0FBQUEsRUFFYjtBQUFBLEVBRUEsT0FBTyxJQUFVO0FBQUEsRUFHakI7QUFBQSxFQUVBLGFBQVk7QUFBQSxFQUVaO0FBQ0o7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFNTyxJQUFNLGtCQUFOLE1BQXFCO0FBQUEsRUFDeEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBRUE7QUFBQSxFQUVBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFFQSxZQUFZLFlBQTJCO0FBQ25DLGVBQVcsdUJBQXVCLElBQUk7QUFDdEMsU0FBSyxZQUFZO0FBQ2pCLFNBQUssTUFBTSxXQUFXO0FBQ3RCLFNBQUssZUFBZSxLQUFLLElBQUksWUFBWTtBQUN6QyxTQUFLLGlCQUFpQixLQUFLO0FBQzNCLFNBQUssY0FBYyxLQUFLLElBQUksWUFBWTtBQUN4QyxTQUFLLFVBQVUsS0FBSyxJQUFJLFlBQVk7QUFHcEMsU0FBSyxrQkFBa0IsS0FBSztBQUM1QixTQUFLLGFBQWE7QUFDbEIsU0FBSyxhQUFhLFdBQVcsZ0JBQWdCO0FBRzdDLFNBQUssV0FBVyxLQUFLO0FBRXJCLFNBQUssVUFBVTtBQUNmLFNBQUssV0FBVztBQUNoQixTQUFLLGFBQWE7QUFDbEIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssaUJBQWlCLElBQUksUUFBUTtBQUNsQyxTQUFLLGdCQUFnQjtBQUNyQixTQUFLLGFBQWE7QUFDbEIsU0FBSyxjQUFjLFFBQVE7QUFDM0IsU0FBSyxjQUFjO0FBRW5CLFNBQUssV0FBVztBQUNoQixTQUFLLGVBQWU7QUFDcEIsU0FBSyxxQkFBcUI7QUFDMUIsU0FBSyxxQkFBcUI7QUFFMUIsU0FBSyxxQkFBcUIsSUFBSTtBQUFBLE1BQzFCLE1BQUk7QUFDSixZQUFJLFlBQVksSUFBSSxLQUFLLEtBQUssS0FBSyxtQkFBbUIsV0FBVyxJQUFJLE9BQU87QUFDNUUsZUFBTyxLQUFLLElBQUksS0FBSyxZQUFZLFlBQVksS0FBSyxXQUFXLGNBQWM7QUFBQSxNQUMzRTtBQUFBLE1BQ0EsQ0FBQyxJQUFVLElBQVUsT0FBWTtBQUM3QixhQUFLLFVBQVUsS0FBSyxtQkFBbUIsV0FBVyxJQUFJLE1BQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLFdBQVcsZ0JBQWdCLEVBQUUsSUFDNUcsS0FBSyxJQUFJLEtBQUssV0FBVyxpQkFBaUIsRUFBRSxJQUFJLEtBQUssbUJBQW1CLFdBQVcsSUFBSSxPQUFPO0FBQUEsTUFDbEc7QUFBQSxNQUNBLE1BQU07QUFDRixhQUFLLFVBQVU7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsTUFBSTtBQUNBLFlBQUksQ0FBQyxLQUFLLG1CQUFtQixXQUFXLElBQUksT0FBTyxLQUFHLENBQUMsS0FBSyxtQkFBbUIsV0FBVyxJQUFJLE1BQU0sR0FBRztBQUNuRyxlQUFLLG1CQUFtQixXQUFXLElBQUksU0FBUyxDQUFDO0FBQ2pELGVBQUssbUJBQW1CLFdBQVcsSUFBSSxRQUFRLEtBQUssZ0JBQWdCLFdBQVcsWUFBWSxDQUFDO0FBQzVGO0FBQUEsUUFDSjtBQUNBLFlBQUksUUFBUSxLQUFLLG1CQUFtQixXQUFXLElBQUksTUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssV0FBVyxnQkFBZ0IsS0FBSyxtQkFBbUIsSUFBSTtBQUNuSSxZQUFJLFFBQVEsUUFBUSxLQUFLLFdBQVcsaUJBQ3BDLEtBQUssSUFBSSxLQUFLLFdBQVcsaUJBQWlCLEtBQUssbUJBQW1CLE9BQU8sS0FBSyxtQkFBbUIsV0FBVyxJQUFJLE9BQU8sQ0FBQztBQUN4SCxZQUFJLFFBQVEsS0FBSyxXQUFXLGlCQUFpQixLQUFLLGdCQUFnQixXQUFXLFlBQVk7QUFDekYsWUFBSSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxXQUFXLGtCQUFrQixRQUFPLE1BQU07QUFDdkYsWUFBSSxXQUFXLFFBQVEsU0FBUyxLQUFLLFdBQVcsaUJBQWlCLEtBQUssSUFBSSxRQUFRO0FBQ2xGLGFBQUssbUJBQW1CLFdBQVcsSUFBSSxTQUFTLFFBQVE7QUFDeEQsYUFBSyxtQkFBbUIsV0FBVyxJQUFJLFFBQVEsT0FBTztBQUFBLE1BQzFEO0FBQUEsSUFBQztBQUVMLFNBQUssb0JBQW9CLElBQUk7QUFBQSxNQUN6QixNQUFJO0FBQ0EsWUFBSSxXQUFXLEtBQUssa0JBQWtCLFdBQVcsSUFBSSxTQUFTLElBQUksS0FBSyxXQUFXO0FBQ2xGLFlBQUksWUFBWSxHQUFHO0FBQ2YsaUJBQU87QUFBQSxRQUNYLE9BQUs7QUFDRCxpQkFBTyxJQUFJLEtBQUssV0FBVyxZQUMxQixLQUFLLGtCQUFrQixXQUFXLElBQUksU0FBUyxJQUFJLEtBQUssY0FBYztBQUFBLFFBQzNFO0FBQUEsTUFDSjtBQUFBLE1BQ0EsQ0FBQyxJQUFVLElBQVUsT0FBWTtBQUM3QixZQUFJLEtBQUksS0FBSyxJQUFJLEtBQUssV0FBVyxVQUFVO0FBQ3ZDLGVBQUssY0FBYyxLQUFLLEtBQUssa0JBQWtCLFdBQVcsSUFBSSxTQUFTLElBQUksS0FBSyxXQUFXO0FBQUEsUUFDL0YsT0FBTztBQUNILGVBQUssY0FBYyxLQUFJLE9BQUssSUFBSSxLQUFLLFdBQVcsWUFBWSxLQUFLLGtCQUFrQixXQUFXLElBQUksU0FBUztBQUFBLFFBQy9HO0FBQUEsTUFDSjtBQUFBLE1BQ0EsTUFBTTtBQUNGLGFBQUssYUFBYTtBQUFBLE1BQ3RCO0FBQUEsTUFDQSxNQUFJO0FBQ0EsYUFBSyxrQkFBa0IsV0FBVyxJQUFJLFdBQVcsS0FBSyxXQUFXLENBQUM7QUFBQSxNQUN0RTtBQUFBLElBQ0o7QUFFQSxTQUFLLGlCQUFpQixJQUFJO0FBQUEsTUFDdEIsTUFBSTtBQUNBLGVBQU8sS0FBSyxXQUFXO0FBQUEsTUFDM0I7QUFBQSxNQUNBLENBQUMsSUFBVSxJQUFVLE9BQVk7QUFDN0IsWUFBSSxRQUFRLE1BQU0sS0FBSyxLQUFLO0FBQzVCLFlBQUksUUFBUSxRQUFRLEtBQUssSUFBSSxTQUFTLEtBQUssTUFBTSxHQUFHLElBQUk7QUFDeEQsYUFBSyxhQUFhLEtBQUssYUFBYSxRQUFRLEtBQUssWUFBWTtBQUM3RCxhQUFLLFdBQVcsS0FBSyxXQUFXLFFBQVEsS0FBSyxZQUFZO0FBQ3pELGFBQUssZUFBZSxXQUFXLElBQUksU0FBVSxLQUFLLGVBQWUsV0FBVyxJQUFJLE9BQU8sRUFBRSxTQUFTLEtBQUssWUFBWSxTQUFTLEtBQUssQ0FBQyxDQUFDO0FBQUEsTUFDdkk7QUFBQSxNQUNBLE1BQU07QUFDRixhQUFLLGNBQWMsS0FBSyxlQUFlLFdBQVcsSUFBSSxPQUFPLEVBQUU7QUFDL0QsYUFBSyxZQUFZLEtBQUssZUFBZSxXQUFXLElBQUksT0FBTyxFQUFFO0FBQzdELGFBQUssZUFBZSxXQUFXLElBQUksU0FBUyxJQUFJLFFBQVEsQ0FBQztBQUN6RCxZQUFJLEtBQUssVUFBVTtBQUNmLGVBQUssb0JBQW9CLGNBQWMsS0FBSyxtQkFBbUI7QUFBQSxRQUNuRTtBQUFBLE1BRUo7QUFBQSxNQUNBLE1BQU07QUFDRixZQUFHLEtBQUssa0JBQWtCLFdBQVU7QUFDaEMsZUFBSyxrQkFBa0IsYUFBYSxLQUFLLGlCQUFpQjtBQUFBLFFBQzlEO0FBQ0EsWUFBSSxLQUFLLGVBQWUsV0FBVztBQUMvQixlQUFLLGVBQWUsYUFBYSxLQUFLLGNBQWM7QUFBQSxRQUN4RDtBQUNBLGFBQUssZUFBZSxXQUFXLElBQUksU0FBUyxLQUFLLFdBQVc7QUFBQSxNQUNoRTtBQUFBLElBQ0o7QUFFQSxTQUFLLG9CQUFvQixJQUFJO0FBQUEsTUFDekIsTUFBSTtBQUNBLGVBQU8sS0FBSztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxDQUFDLElBQVUsSUFBVSxPQUFZO0FBQzdCLFlBQUksT0FBTyxLQUFLLGNBQWMsS0FBSyxXQUFXLGlCQUFpQixJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssV0FBVyxnQkFBZ0IsRUFBRTtBQUMvRyxZQUFJLFFBQVEsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLFdBQVcsaUJBQWlCLEtBQUssTUFBTSxHQUFHLElBQUk7QUFDaEYsYUFBSyxhQUFhLEtBQUssYUFBYTtBQUNwQyxhQUFLLGtCQUFrQixXQUFXLElBQUksU0FBUyxLQUFLLGtCQUFrQixXQUFXLElBQUksT0FBTyxJQUFJLEtBQUs7QUFBQSxNQUN6RztBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQUM7QUFBQSxNQUNQLE1BQU07QUFDRixhQUFLLGtCQUFrQixXQUFXLElBQUksU0FBUyxDQUFDO0FBQUEsTUFDcEQ7QUFBQSxJQUNKO0FBRUEsU0FBSyxzQkFBc0IsSUFBSTtBQUFBLE1BQzNCLE1BQUk7QUFDQSxlQUFPLEtBQUssSUFBSSxZQUFZO0FBQUEsTUFDaEM7QUFBQSxNQUNBLENBQUMsS0FBVyxLQUFXLFFBQWE7QUFDaEMsWUFBSSxDQUFDLEtBQUssVUFBUztBQUNmO0FBQUEsUUFDSjtBQUNBLFlBQUksWUFBWSxLQUFLLFVBQVUsS0FBSyxRQUFRO0FBRTVDLFlBQUksTUFBTSxLQUFLLFNBQVMsVUFBVSxpQkFBaUIsRUFBRTtBQUNyRCxZQUFJLE1BQU0sS0FBSyxhQUFhO0FBQzVCLFlBQUksTUFBTSxTQUFTLFVBQVUsSUFBSSxJQUFJLElBQUksU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxZQUFZLFFBQVEsQ0FBQyxDQUFDO0FBQzdHLFlBQUksUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUNsQixjQUFJLEVBQUUsY0FBYyxLQUFLLFVBQVU7QUFDL0IsaUJBQUssb0JBQW9CLFdBQVcsSUFBSSxZQUFZLElBQUk7QUFDeEQ7QUFBQSxVQUNKO0FBQUEsUUFDSixDQUFDO0FBRUQsWUFBRyxLQUFLLFFBQVEsU0FBUyxLQUFJLEtBQUssb0JBQW9CLFdBQVcsSUFBSSxVQUFVLEdBQUU7QUFDN0UsZUFBSyxvQkFBb0IsV0FBVyxJQUFJLFlBQVksSUFBSTtBQUFBLFFBQzVEO0FBQ0EsWUFBRyxLQUFLLG9CQUFvQixXQUFXLElBQUksVUFBVSxHQUFFO0FBQ25EO0FBQUEsUUFDSjtBQUNBLGFBQUssY0FBYyxNQUFNLEtBQUssb0JBQW9CLFdBQVcsSUFBSSxZQUFZO0FBQzdFLGFBQUssWUFBWSxNQUFNLEtBQUssb0JBQW9CLFdBQVcsSUFBSSxVQUFVO0FBQUEsTUFDN0U7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUFDO0FBQUEsTUFDUCxNQUFNO0FBQ0YsWUFBSSxZQUFZLEtBQUssVUFBVSxLQUFLLFFBQVE7QUFDNUMsWUFBSSxjQUFjLFVBQVUsU0FBUyxLQUFLLGFBQWEsQ0FBQztBQUN4RCxhQUFLLG9CQUFvQixXQUFXLElBQUksV0FBVyxLQUFLLFFBQVEsU0FBUyxDQUFDO0FBQzFFLGFBQUssb0JBQW9CLFdBQVcsSUFBSSxZQUFZLEtBQUs7QUFDekQsWUFBSSxhQUFhLEtBQUssS0FBSyxZQUFZLElBQUksSUFBSSxRQUFRLFlBQVksR0FBRyxZQUFZLENBQUMsRUFBRSxTQUFTLEtBQzdGLEtBQUssT0FBTyxNQUFNLEtBQUssU0FBUyxVQUFVLGlCQUFpQixHQUFHLE9BQU8sRUFBRSxLQUFLLE1BQU0sS0FBSztBQUN4RixZQUFJLFdBQVcsUUFBUTtBQUFBLFVBQ25CLElBQUksUUFBUSxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBQUEsVUFDeEMsSUFBSSxRQUFRLEtBQUssU0FBUyxVQUFVLGlCQUFpQixFQUFFLEdBQUcsS0FBSyxTQUFTLFVBQVUsaUJBQWlCLEVBQUUsQ0FBQztBQUFBLFFBQzFHLElBQ0EsS0FBSyxLQUFLLE9BQ1QsS0FBSyxvQkFBb0IsV0FBVyxJQUFJLFNBQVMsSUFBSSxLQUFLO0FBQzNELFlBQUksUUFBUSxLQUFLLElBQUksWUFBWSxpQkFBaUIsS0FBSyxJQUFJLFlBQVk7QUFDdkUsYUFBSyxvQkFBb0IsV0FBVyxJQUFJLGNBQWMsYUFBYSxLQUFLO0FBQ3hFLGFBQUssb0JBQW9CLFdBQVcsSUFBSSxZQUFZLFdBQVcsS0FBSztBQUFBLE1BQ3hFO0FBQUEsSUFDSjtBQUVBLFNBQUssZ0JBQWdCLElBQUk7QUFBQSxNQUNyQixNQUFJO0FBQ0EsZUFBTyxLQUFLLFdBQVc7QUFBQSxNQUMzQjtBQUFBLE1BQ0EsQ0FBQyxJQUFVLElBQVUsT0FBWTtBQUM3QixZQUFJLE1BQU0sS0FBSztBQUNmLGFBQUssa0JBQWtCLElBQUksT0FBTyxLQUFLLGVBQWUsTUFBTSxLQUFLLGNBQWMsV0FBVyxJQUFJLFdBQVc7QUFDekcsY0FBTSxLQUFLLEtBQUssS0FBTSxJQUFJLFFBQVMsSUFBSSxJQUFJO0FBQzNDLGFBQUssa0JBQWtCLEtBQUssZUFBZSxTQUFTLElBQUksR0FBRyxFQUFFLElBQUksS0FBSyxZQUFZLFNBQVMsR0FBRyxDQUFDO0FBQy9GLGFBQUssWUFBWSxJQUFFLE9BQU8sS0FBSyxtQkFBbUIsTUFBTSxLQUFLO0FBQUEsTUFDakU7QUFBQSxNQUNBLE1BQU07QUFDRixhQUFLLGlCQUFpQixLQUFLLGNBQWMsV0FBVyxJQUFJLFdBQVc7QUFDbkUsYUFBSyxrQkFBa0IsS0FBSztBQUM1QixhQUFLLFdBQVcsS0FBSztBQUNyQixhQUFLLGVBQWU7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsTUFBTTtBQUNGLFlBQUcsS0FBSyxnQkFBZ0IsV0FBVTtBQUM5QixlQUFLLGdCQUFnQixhQUFhLEtBQUssZUFBZTtBQUFBLFFBQzFEO0FBQ0EsYUFBSyxhQUFhO0FBR2xCLGFBQUssY0FBYyxXQUFXLElBQUksYUFBYSxLQUFLLFlBQVksQ0FBQztBQUFBLE1BQ3JFO0FBQUEsSUFDSjtBQUVBLFNBQUssa0JBQWtCLElBQUk7QUFBQSxNQUN2QixNQUFJO0FBQ0EsZUFBTyxLQUFLLElBQUksWUFBWTtBQUFBLE1BQ2hDO0FBQUEsTUFDQSxDQUFDLElBQVUsSUFBVSxPQUFZO0FBQzdCLFlBQUksTUFBTSxLQUFLO0FBQ2YsYUFBSyxrQkFBa0IsSUFBRSxPQUFLLEtBQUssZ0JBQWdCLFdBQVcsSUFBSSxTQUFTLElBQUUsTUFBSSxLQUFLO0FBQ3RGLGFBQUssa0JBQWtCLEtBQUssWUFBWSxTQUFTLElBQUksR0FBRyxFQUFFLElBQUksS0FBSyxlQUFlLFNBQVMsR0FBRyxDQUFDO0FBQy9GLGFBQUssWUFBWSxJQUFFLE9BQUssS0FBSyxnQkFBYyxNQUFJLEtBQUs7QUFBQSxNQUN4RDtBQUFBLE1BQ0EsTUFBTTtBQUNGLGFBQUssaUJBQWlCLEtBQUs7QUFDM0IsYUFBSyxrQkFBa0IsS0FBSztBQUM1QixhQUFLLFdBQVcsS0FBSztBQUdyQixhQUFLLGNBQWM7QUFBQSxNQUN2QjtBQUFBLE1BQ0EsTUFBTTtBQUNGLFlBQUcsS0FBSyxjQUFjLFdBQVU7QUFDNUIsZUFBSyxjQUFjLGFBQWEsS0FBSyxhQUFhO0FBQUEsUUFDdEQ7QUFDQSxhQUFLLGFBQWE7QUFDbEIsYUFBSyxnQkFBZ0IsV0FBVyxJQUFJLFdBQVcsS0FBSyxjQUFjO0FBQUEsTUFDdEU7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBRUEsYUFBWTtBQUNSLFNBQUssT0FBTztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxPQUFPLElBQVc7QUFDZCxRQUFHLENBQUMsS0FBSyxZQUFXO0FBQ2hCO0FBQUEsSUFDSjtBQUNBLFNBQUssY0FBYztBQUNuQixTQUFLLG1CQUFtQixNQUFNO0FBQzlCLFNBQUssSUFBSSxxQkFBcUIsUUFBUSxDQUFDLEdBQUcsTUFBSTtBQUMxQyxXQUFLLG1CQUFtQixJQUFJLEdBQUcsRUFBRSxXQUFXLFdBQVc7QUFBQSxJQUMzRCxDQUFDO0FBQ0QsU0FBSyxtQkFBbUIsTUFBTTtBQUM5QixTQUFLLElBQUkscUJBQXFCLFFBQVEsQ0FBQyxHQUFHLE1BQUk7QUFDMUMsV0FBSyxtQkFBbUIsSUFBSSxHQUFHLEVBQUUsV0FBVyxXQUFXO0FBQUEsSUFDM0QsQ0FBQztBQUNELFNBQUssbUJBQW1CLGVBQWUsS0FBSyxvQkFBb0IsRUFBRTtBQUNsRSxTQUFLLGtCQUFrQixlQUFlLEtBQUssbUJBQW1CLEVBQUU7QUFDaEUsU0FBSyxlQUFlLGVBQWUsS0FBSyxnQkFBZ0IsRUFBRTtBQUMxRCxTQUFLLGtCQUFrQixlQUFlLEtBQUssbUJBQW1CLEVBQUU7QUFDaEUsU0FBSyxvQkFBb0IsZUFBZSxLQUFLLHFCQUFxQixFQUFFO0FBQ3BFLFNBQUssZ0JBQWdCLGVBQWUsS0FBSyxpQkFBaUIsRUFBRTtBQUM1RCxTQUFLLGNBQWMsZUFBZSxLQUFLLGVBQWUsRUFBRTtBQUV4RCxTQUFLLGNBQWM7QUFDbkIsU0FBSyxnQkFBZ0I7QUFDckIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssYUFBYTtBQUFBLEVBQ3RCO0FBQUEsRUFDQSxjQUFjLGdCQUFnQyxNQUFNO0FBQ2hELFNBQUssTUFBTTtBQUNYLFNBQUssV0FBVyxTQUFTLGlCQUFpQixFQUFFLFVBQVU7QUFDdEQsU0FBSyxXQUFXLEtBQUssU0FBUztBQUM5QixRQUFJLElBQUksSUFBSSxVQUFVO0FBQ3RCLE1BQUUsV0FBVyxLQUFLLFNBQVMsOEJBQThCO0FBQ3pELE1BQUUsUUFBUSxLQUFLLFNBQVMsOEJBQThCO0FBQ3RELE1BQUUsV0FBVyxJQUFJLE9BQU8sR0FBRyxHQUFHLFNBQVMsaUJBQWlCLEVBQUUsVUFBVSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksS0FBSyxlQUFlO0FBQ25ILFNBQUssU0FBUyxnQ0FBZ0M7QUFDOUMsU0FBSyxjQUFjLEtBQUssSUFBSSxZQUFZO0FBQ3hDLFNBQUssZUFBZSxLQUFLLElBQUksWUFBWTtBQUN6QyxTQUFLLGlCQUFpQixLQUFLO0FBQzNCLHFCQUFpQixTQUFTLGNBQWMsS0FBSztBQUM3QyxTQUFLLGFBQWE7QUFDbEIscUJBQWlCLFNBQVMsTUFBTSxLQUFLO0FBQUEsRUFDekM7QUFBQSxFQUNBLFlBQVksU0FBMEI7QUFDbEMsU0FBSyxhQUFhLEtBQUssWUFBWTtBQUNuQyxRQUFJLE9BQU8sUUFBUSxZQUFZLElBQUksS0FBSyxLQUFLO0FBQzdDLFNBQUssY0FBYyxRQUFRLFlBQVksWUFBWTtBQUNuRCxTQUFLLGdCQUFnQixRQUFRLGlCQUFpQixJQUFJLEtBQUssS0FBSztBQUM1RCxTQUFLLGNBQWMsSUFBSSxRQUFRLFFBQVEsY0FBYyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUk7QUFDNUUsU0FBSyxtQkFBbUIsY0FBYyxLQUFLLGtCQUFrQjtBQUM3RCxTQUFLLGVBQWUsY0FBYyxLQUFLLGNBQWM7QUFDckQsU0FBSyxrQkFBa0IsY0FBYyxLQUFLLGlCQUFpQjtBQUMzRCxTQUFLLGtCQUFrQixjQUFjLEtBQUssaUJBQWlCO0FBQUEsRUFDL0Q7QUFBQSxFQUNBLFNBQVE7QUFDSixTQUFLLG9CQUFvQixhQUFhLEtBQUssbUJBQW1CO0FBQUEsRUFDbEU7QUFBQSxFQUNBLHFCQUFvQjtBQUNoQixTQUFLLGVBQWU7QUFDcEIsU0FBSyxjQUFjLGNBQWMsS0FBSyxhQUFhO0FBQUEsRUFDdkQ7QUFBQSxFQUNBLGtCQUF3QjtBQUNwQixXQUFPLEtBQUssYUFBYSxLQUFLLElBQUksWUFBWSxnQkFBZ0IsS0FBSyxJQUFJLFlBQVk7QUFBQSxFQUN2RjtBQUFBLEVBQ0Esb0JBQW1CO0FBQ2YsU0FBSyxnQkFBZ0IsY0FBYyxLQUFLLGVBQWU7QUFBQSxFQUMzRDtBQUFBLEVBQ0EsYUFBbUI7QUFDZixXQUFPLEtBQUssVUFBVSxLQUFLO0FBQUEsRUFDL0I7QUFBQSxFQUNBLGNBQW9CO0FBQ2hCLFdBQU8sS0FBSyxJQUFJLFFBQVEsYUFBYTtBQUFBLEVBQ3pDO0FBQUEsRUFDQSxnQkFBZ0IsaUJBQTBCO0FBQ3RDLHFCQUFpQixTQUFTLGNBQWMsS0FBSztBQUM3QyxxQkFBaUIsU0FBUyxNQUFNO0FBQ2hDLFNBQUssT0FBTztBQUNaLFNBQUssYUFBYTtBQUFBLEVBQ3RCO0FBQUEsRUFDQSxhQUFzQztBQUNsQyxRQUFJLE1BQU0sSUFBSSxNQUEwQjtBQUN4QyxhQUFTLGNBQWMsRUFBRSxRQUFRLENBQUMsTUFBSTtBQUFBLElBRXRDLENBQUM7QUFDRCxXQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0EsVUFBVSxRQUFrQztBQUN4QyxRQUFJLE1BQU0sS0FBSyxhQUFhO0FBQzVCLFFBQUksTUFBTTtBQUNWLFFBQUksY0FBYyxTQUFTLFVBQVUsS0FBSyxPQUFPLGlCQUFpQixFQUFFLElBQUksT0FBTyxHQUFHLFNBQVMsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3JILGdCQUFZLFFBQVEsQ0FBQyxNQUFJO0FBQ3JCLFVBQUcsRUFBRSxFQUFFLHNCQUFzQixTQUFTLGNBQWUsRUFBRSxjQUFjLFVBQVcsRUFBRSxjQUFlLFNBQVMsaUJBQWlCLEVBQUUsV0FBVztBQUNwSSxjQUFNO0FBQ047QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQ0QsV0FBTztBQUFBLEVBQ1g7QUFBQSxFQUNBLFNBQVM7QUFDTCxRQUFHLEtBQUssWUFBVztBQUNmLFdBQUssa0JBQWtCO0FBQUEsSUFDM0I7QUFDQSxTQUFLLG9CQUFvQixhQUFhLEtBQUssa0JBQWtCO0FBQzdELFNBQUssbUJBQW1CLGFBQWEsS0FBSyxpQkFBaUI7QUFDM0QsU0FBSyxnQkFBZ0IsYUFBYSxLQUFLLGNBQWM7QUFDckQsU0FBSyxtQkFBbUIsYUFBYSxLQUFLLGlCQUFpQjtBQUMzRCxTQUFLLHFCQUFxQixhQUFhLEtBQUssbUJBQW1CO0FBQy9ELFNBQUssaUJBQWlCLGFBQWEsS0FBSyxlQUFlO0FBQ3ZELFNBQUssZUFBZSxhQUFhLEtBQUssYUFBYTtBQUFBLEVBRXZEO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxFQUVsQjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ1osUUFBSSxTQUFTO0FBQ2IsU0FBSyxtQkFBbUIsUUFBUSxDQUFDLEdBQUcsTUFBSTtBQUNwQyxnQkFBVTtBQUFBLElBQ2QsQ0FBQztBQUNELFNBQUsscUJBQXFCO0FBQzFCLGFBQVM7QUFDVCxTQUFLLG1CQUFtQixRQUFRLENBQUMsR0FBRyxNQUFJO0FBQ3BDLGdCQUFVO0FBQUEsSUFDZCxDQUFDO0FBQ0QsU0FBSyxxQkFBcUI7QUFBQSxFQUM5QjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ1oscUJBQWlCLFNBQVMsY0FBYyxLQUFLO0FBQzdDLHFCQUFpQixTQUFTLFlBQVksS0FBSztBQUMzQyxxQkFBaUIsU0FBUyxRQUFRLEtBQUs7QUFDdkMscUJBQWlCLFNBQVMsY0FBYyxLQUFLLGlCQUFpQixLQUFLO0FBQ25FLHFCQUFpQixTQUFTLFdBQVcsS0FBSztBQUMxQyxxQkFBaUIsU0FBUyxTQUFTLEtBQUs7QUFBQSxFQUM1QztBQUFBLEVBQ0EsY0FBc0I7QUFFbEIsUUFBSSxNQUFNO0FBQ1YsU0FBSyxJQUFJLHFCQUFxQixRQUFRLENBQUMsR0FBRyxNQUFJO0FBQzFDLFVBQUksRUFBRSxXQUFXLGFBQWEsR0FBRztBQUM3QixjQUFNLEVBQUUsV0FBVztBQUNuQjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFDRCxRQUFJLE9BQU8sR0FBRztBQUNWLGFBQU87QUFBQSxJQUNYLE9BQUs7QUFDRCxhQUFPLEtBQUssSUFBSSxZQUFZO0FBQUEsSUFDaEM7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRLFdBQTJCO0FBQy9CLFdBQU8sT0FBTyxJQUFJLE9BQU8sTUFBTSxLQUFLLFNBQVMsVUFBVSxpQkFBaUIsR0FBRyxPQUFPLEVBQUUsR0FBRyxVQUFVLFNBQVMsS0FBSyxhQUFhLENBQUMsQ0FBQyxJQUFJO0FBQUEsRUFDdEk7QUFBQSxFQUNBLEtBQUssV0FBMkI7QUFDNUIsUUFBSSxjQUFjLFVBQVUsU0FBUyxLQUFLLGFBQWEsQ0FBQztBQUN4RCxXQUFPLEtBQUssS0FBSyxZQUFZLElBQUksSUFBSSxRQUFRLFlBQVksR0FBRyxZQUFZLENBQUMsRUFBRSxTQUFTLElBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxTQUFTLFVBQVUsaUJBQWlCLEdBQUcsT0FBTyxFQUFFLElBQUksS0FBSyxLQUFLO0FBQUEsRUFDbEw7QUFBQSxFQUNBLFlBQVc7QUFDUCxTQUFLLGlCQUFpQixHQUFHLDJCQUEyQjtBQUFBLEVBQ3hEO0FBQUEsRUFDQSxlQUFzQjtBQUNsQixRQUFJLFNBQVMsS0FBSyxTQUFTLDhCQUE4QjtBQUN6RCxXQUFPLFNBQVMsaUJBQWlCLEVBQUUsVUFBVSxpQkFBaUIsRUFBRSxJQUFJLFdBQVcsYUFBYSxRQUFRLE9BQU8sSUFBSSxTQUFTLGlCQUFpQixFQUFFLFVBQVUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDOUs7QUFBQSxFQUNBLGFBQXFCO0FBQ2pCLFdBQU8sS0FBSyxXQUFXLFVBQVUsS0FBSyxxQkFDdEMsU0FBUyxpQkFBaUIsRUFBRSxVQUFVLGFBQWEsWUFBWSxLQUFLO0FBQUEsRUFDeEU7QUFBQSxFQUNBLFVBQVUsT0FBa0M7QUFDeEMsUUFBSTtBQUNKLFFBQUk7QUFDSixXQUFPLE1BQU0sY0FBbUMsRUFBRSxxQkFBcUIsU0FBUyxJQUFJO0FBQ3BGLFdBQU8sTUFBTSxjQUFtQyxFQUFFLHFCQUFxQixTQUFTLFFBQVE7QUFDeEYsV0FBTyxLQUFLLFNBQVMsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLE9BQU8sQ0FBQztBQUFBLEVBQzlDO0FBQUEsRUFDQSxZQUE2QjtBQUN6QixRQUFHLEtBQUssa0JBQWtCLFNBQVMsWUFBWSxJQUFJLEtBQUssaUJBQWlCLE1BQUs7QUFDMUUsYUFBTyxLQUFLO0FBQUEsSUFDaEI7QUFDQSxRQUFJLE1BQU0sS0FBSyxTQUFTLFVBQVUsaUJBQWlCLEVBQUU7QUFDckQsUUFBSSxNQUFNLEtBQUssYUFBYTtBQUM1QixRQUFJLGFBQWEsU0FBUyxVQUFVLElBQUksSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksU0FBUyxLQUFLLElBQUksWUFBWSxRQUFRLENBQUMsQ0FBQztBQUNwSCxTQUFLLFdBQVc7QUFDaEIsUUFBRyxLQUFLLGlCQUFnQjtBQUNwQixVQUFJLFNBQVMsS0FBSyxnQkFBZ0I7QUFDbEMsVUFBSTtBQUNKLFdBQUssV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFJO0FBRTNCLFlBQUksWUFBWSxLQUFLLFVBQVUsQ0FBQztBQUNoQyxZQUFJLFlBQVksVUFBVSxTQUFTLEdBQUcsRUFBRTtBQUN4QyxZQUFJLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxTQUFTLEdBQUcsQ0FBQztBQUNyRCxZQUFJLFNBQVMsWUFBWSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUssR0FBRztBQUN2RCxZQUFHLFFBQVEsTUFBTSxVQUFVLFVBQVUsS0FBSyxVQUFVLENBQUMsR0FBRTtBQUNuRCxzQkFBWTtBQUNaLG1CQUFTO0FBQUEsUUFDYjtBQUFBLE1BQ0osQ0FBQztBQUNELFdBQUssV0FBVztBQUFBLElBQ3BCO0FBQ0EsUUFBSTtBQUNKLFFBQUk7QUFDSixlQUFXLFFBQVEsQ0FBQyxNQUFJO0FBQ3BCLFVBQUcsRUFBRSxhQUFhLFlBQVc7QUFDekIscUJBQWEsRUFBRTtBQUNmO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUNELFFBQUcsWUFBVztBQUNWLFdBQUssZUFBZSxDQUFDLFlBQVksSUFBSTtBQUFBLElBQ3pDLE9BQUs7QUFDRCxXQUFLLGVBQWUsQ0FBQyxLQUFLLEtBQUs7QUFBQSxJQUNuQztBQUNBLFNBQUssaUJBQWlCLFNBQVMsWUFBWTtBQUMzQyxXQUFPLEtBQUs7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsaUJBQXVCO0FBQ25CLFdBQU8sS0FBSyxTQUFTLFlBQVksS0FBSyxLQUFLO0FBQUEsRUFDL0M7QUFBQSxFQUNBLFdBQVU7QUFDTixRQUFJLE9BQU8sR0FBRywyQkFBMkI7QUFDekMsUUFBRyxDQUFDLEtBQUssZ0JBQWU7QUFDcEI7QUFBQSxJQUNKO0FBQ0EsU0FBSyxhQUFhLEtBQUssSUFBSSxLQUFLLGVBQWUsS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLGVBQWU7QUFDNUYsU0FBSyxlQUFlLEtBQUssSUFBSSxLQUFLLGVBQWUsS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLGVBQWU7QUFDOUYsU0FBSyxpQkFBaUI7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsVUFBYztBQUNWLFNBQUssaUJBQWlCO0FBQUEsRUFDMUI7QUFFSjs7O0FDaGhCQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU0sZUFBTixNQUFrQjtBQUV6Qjs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFJTyxJQUFNLG9CQUFOLE1BQXVCO0FBQUEsRUFDbEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBO0FBQUEsRUFDQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFFUixZQUFZLFFBQXVCO0FBQy9CLGVBQVcseUJBQXlCLElBQUk7QUFFeEMsUUFBSSxXQUFXLEtBQUssV0FBVyxLQUFLLFlBQVk7QUFDaEQsUUFBSSxXQUFXLEdBQUc7QUFDZCxXQUFLLFdBQVcsS0FBSyxZQUFZO0FBQUEsSUFDckMsT0FBTztBQUNILGlCQUFXO0FBQUEsSUFDZjtBQUVBLFNBQUssT0FBTztBQUFBLEVBQ2hCO0FBQUEsRUFFUSxvQkFBNEI7QUFDaEMsU0FBSyxnQkFBZ0IsS0FBSyxZQUFZLEtBQUssV0FBVztBQUN0RCxXQUFPLEtBQUs7QUFBQSxFQUNoQjtBQUFBLEVBQ1Esb0JBQTJCO0FBQy9CLFNBQUssZ0JBQWdCLEtBQUssWUFBWTtBQUN0QyxXQUFPLEtBQUs7QUFBQSxFQUNoQjtBQUFBLEVBQ08sZ0JBQXVCO0FBQzFCLFNBQUssWUFBWSxDQUFDLEtBQUssaUJBQWlCLEtBQUssaUJBQWlCLEtBQUssY0FBYyxRQUFRO0FBQ3pGLFdBQU8sS0FBSztBQUFBLEVBQ2hCO0FBQUEsRUFDTyx1QkFBNkI7QUFDaEMsU0FBSyxpQkFBaUIsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLFdBQVcsSUFBSSxHQUFHO0FBQ3hFLFdBQU8sS0FBSztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxVQUFrQjtBQUNkLFdBQU8sTUFBTTtBQUNULFVBQUksS0FBSyxXQUFXLEdBQUc7QUFDbkIsYUFBSyxZQUFZO0FBQ2pCLGVBQU87QUFBQSxNQUNYO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKO0FBQUEsRUFDTyxnQkFBb0I7QUFDdkIsUUFBRyxLQUFLLFdBQVU7QUFDZCxXQUFLLFlBQVk7QUFBQSxJQUVyQjtBQUFBLEVBQ0o7QUFBQSxFQUNPLGVBQW1CO0FBQ3RCLFFBQUksS0FBSyxXQUFXO0FBQ2hCLFVBQUksV0FBVyxLQUFLLFdBQVcsSUFBSSxLQUFLO0FBRXhDLFdBQUssWUFBWTtBQUNqQixXQUFLLGtCQUFrQjtBQUFBLElBQzNCO0FBQUEsRUFDSjtBQUFBLEVBRUEscUJBQXFCLDBCQUFpQztBQUNsRCxRQUFHLDRCQUE0QixLQUFLLGVBQWM7QUFDOUMsV0FBSyxjQUFjLFNBQVMsS0FBSztBQUNqQyxXQUFLLFdBQVc7QUFBQSxJQUNwQjtBQUNBLFNBQUssT0FBTztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxTQUFhO0FBQ1QsUUFBRyxLQUFLLGFBQWEsS0FBSyxXQUFXLEdBQUU7QUFFbkMsVUFBRyxLQUFLLFdBQVcsSUFBSSxLQUFLLFVBQVM7QUFDakMsWUFBSSxZQUFZLEtBQUssV0FBVyxLQUFLLFdBQVc7QUFDaEQsYUFBSyxZQUFZO0FBQ2pCLGFBQUssY0FBYyxTQUFTO0FBQUEsTUFDaEM7QUFBQSxJQUNKO0FBQ0EsU0FBSyxhQUFhLEtBQUssV0FBVztBQUNsQyxTQUFLLGtCQUFrQjtBQUN2QixTQUFLLGtCQUFrQjtBQUN2QixTQUFLLGNBQWM7QUFDbkIsU0FBSyxxQkFBcUI7QUFHMUIsU0FBSyxrQkFBa0IsTUFBTTtBQUM3QixTQUFLLGlCQUFpQixNQUFNO0FBQzVCLFNBQUssT0FBTyxxQkFBcUIsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUMvQyxXQUFLLGtCQUFrQixJQUFJLEdBQUcsRUFBRSxXQUFXLG9CQUFvQjtBQUMvRCxXQUFLLGlCQUFpQixJQUFJLEdBQUcsRUFBRSxXQUFXLFlBQVksSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO0FBQUEsSUFDN0UsQ0FBQztBQUVELFNBQUssY0FBYztBQUFBLEVBQ3ZCO0FBQUEsRUFDUSxnQkFBb0I7QUFDeEIsUUFBSSxTQUFTO0FBQ2IsU0FBSyxrQkFBa0IsUUFBUSxPQUFLO0FBQ2hDLGdCQUFVO0FBQUEsSUFDZCxDQUFDO0FBQ0QsU0FBSyxvQkFBb0I7QUFDekIsYUFBUztBQUNULFNBQUssaUJBQWlCLFFBQVEsT0FBSztBQUMvQixnQkFBVTtBQUFBLElBQ2QsQ0FBQztBQUNELFNBQUssbUJBQW1CO0FBQUEsRUFDNUI7QUFBQSxFQUNPLGNBQW9CO0FBQ3ZCLFdBQU8sS0FBSyxZQUFZLFdBQVcsS0FBSztBQUFBLEVBQzVDO0FBQUEsRUFDUSxhQUFvQjtBQUN4QixXQUFPLEtBQUssbUJBQW1CLEtBQUssWUFBWSxTQUFTLElBQUksS0FBSyxtQkFBbUIsS0FBSyxZQUFZLFNBQVM7QUFBQSxFQUNuSDtBQUNKOzs7QUM3SEE7QUFBQTtBQUFBO0FBQUE7QUFPTyxJQUFNLGtCQUFOLE1BQXFCO0FBQUEsRUFDaEI7QUFBQSxFQUNSO0FBQUEsRUFDUSxpQkFBeUI7QUFBQSxFQUN6QixtQkFBMkI7QUFBQSxFQUMzQixpQkFBeUI7QUFBQSxFQUN6QixpQkFBeUI7QUFBQSxFQUN6QixvQkFBNEI7QUFBQSxFQUM1QiwwQkFBa0M7QUFBQSxFQUVsQyxlQUF1QjtBQUFBLEVBQy9CLGdCQUF3QjtBQUFBLEVBRWhCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFDUjtBQUFBLEVBRUEsWUFBWSxjQUFxQjtBQUM3QixtQkFBZSxnQkFBZ0IsS0FBSztBQUNwQyxRQUFJLEtBQUssWUFBWSxvQkFBb0IsVUFBVSxvQkFBb0IsUUFBUTtBQUUzRSxhQUFPO0FBQUEsSUFDWCxXQUFXLEtBQUssWUFBWSxvQkFBb0IsVUFBVSxvQkFBb0IsTUFBTTtBQUNoRixhQUFPLEtBQUssS0FBSyxZQUFZO0FBQUEsSUFDakMsV0FBVyxLQUFLLFlBQVksb0JBQW9CLFVBQVUsb0JBQW9CLFFBQVE7QUFDbEYsYUFBTyxlQUFlO0FBQUEsSUFDMUI7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPLEtBQW1CO0FBRXRCLFNBQUssZUFBZSxLQUFLO0FBQUEsTUFDckIsS0FBSyxlQUFlLEtBQUssWUFBWSxxQkFBcUI7QUFBQSxNQUMxRDtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBR0EsU0FBSyxxQkFBcUIsTUFBTTtBQUNoQyxTQUFLLG1CQUFtQixNQUFNO0FBQzlCLFNBQUssbUJBQW1CLE1BQU07QUFDOUIsU0FBSyxtQkFBbUIsTUFBTTtBQUM5QixTQUFLLGtCQUFrQixNQUFNO0FBQzdCLFNBQUssd0JBQXdCLE1BQU07QUFHbkMsVUFBTSxTQUFTLEtBQUssSUFBSSxVQUFVLGlCQUFpQjtBQUNuRCxRQUNJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRSxZQUFZLE1BQU0sT0FDakQsS0FBSyxJQUFJLFVBQVUsV0FDckI7QUFDRSxXQUFLLG1CQUFtQixJQUFJLFFBQVEsS0FBSyxZQUFZLGNBQWM7QUFDbkUsV0FBSyxtQkFBbUIsSUFBSSxRQUFRLEtBQUssWUFBWSxjQUFjO0FBQUEsSUFDdkUsT0FBTztBQUNILFdBQUssbUJBQW1CLE9BQU8sTUFBTTtBQUNyQyxXQUFLLG1CQUFtQixPQUFPLE1BQU07QUFBQSxJQUN6QztBQUNBLFNBQUssV0FBVztBQUdoQixRQUFJLEtBQUssSUFBSSxVQUFVLFFBQVE7QUFDM0IsV0FBSyxtQkFBbUIsSUFBSSxVQUFVLEtBQUssWUFBWSxnQkFBZ0I7QUFDdkUsV0FBSyxtQkFBbUIsSUFBSSxVQUFVLEtBQUssWUFBWSxnQkFBZ0I7QUFBQSxJQUMzRSxPQUFPO0FBQ0gsV0FBSyxtQkFBbUIsT0FBTyxRQUFRO0FBQ3ZDLFdBQUssbUJBQW1CLE9BQU8sUUFBUTtBQUFBLElBQzNDO0FBRUEsZUFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sUUFBUSxLQUFLLElBQUksb0JBQW9CLEdBQUc7QUFDaEUsV0FBSyxxQkFBcUIsSUFBSSxHQUFHLEVBQUUsdUJBQXVCO0FBQzFELFdBQUssbUJBQW1CLElBQUksR0FBRyxFQUFFLHFCQUFxQjtBQUN0RCxXQUFLLG1CQUFtQixJQUFJLEdBQUcsRUFBRSxZQUFZO0FBQzdDLFdBQUssbUJBQW1CLElBQUksR0FBRyxFQUFFLFlBQVk7QUFDN0MsV0FBSyxrQkFBa0IsSUFBSSxHQUFHLEVBQUUsY0FBYztBQUM5QyxXQUFLLHdCQUF3QixJQUFJLEdBQUcsRUFBRSxpQkFBaUI7QUFBQSxJQUMzRDtBQUdBLFNBQUssSUFBSSxRQUFRLEtBQUssV0FBVyxHQUFHO0FBR3BDLFNBQUssY0FBYztBQUFBLEVBQ3ZCO0FBQUEsRUFDQSxjQUFvQjtBQUNoQixZQUFRLEtBQUssWUFBWSxvQkFBb0IsS0FBSyxZQUFZLG9CQUFvQixXQUFXLFlBQVksS0FBSyxLQUFLO0FBQUEsRUFDdkg7QUFBQSxFQUNBLGdCQUF3QjtBQUNwQixXQUFPLEtBQUssbUJBQW1CLEtBQUssWUFBWSxzQkFBc0IsV0FBVyxZQUFZO0FBQUEsRUFDakc7QUFBQSxFQUVBLGNBQXNCO0FBQ2xCLFdBQU8sS0FBSyxZQUFZLFdBQVcsS0FBSztBQUFBLEVBQzVDO0FBQUEsRUFFQSxjQUFzQjtBQUNsQixXQUFPLEtBQUssWUFBWSxXQUFXLEtBQUs7QUFBQSxFQUM1QztBQUFBLEVBRUEsZUFBdUI7QUFDbkIsV0FBTyxLQUFLLFlBQVksYUFBYSxLQUFLLFlBQVksaUJBQWlCLEtBQUs7QUFBQSxFQUNoRjtBQUFBLEVBRUEsbUJBQTJCO0FBQ3ZCLFdBQU8sS0FBSyxZQUFZLGdCQUFnQixLQUFLO0FBQUEsRUFDakQ7QUFBQSxFQUVBLE9BQWE7QUFDVCxTQUFLLGVBQWUsS0FBSyxJQUFJLEdBQUssS0FBSyxlQUFlLEtBQUssWUFBWSxTQUFTO0FBQUEsRUFDcEY7QUFBQSxFQUVBLFdBQVcsS0FBcUI7QUFDNUIsUUFBSSxPQUFPLEtBQUssWUFBWSxJQUFJLEtBQUssWUFBWSxJQUFJLEtBQUssS0FBSyxZQUFZLElBQUksS0FBSyxZQUFZO0FBQ2hHLFNBQUssaUJBQWlCLE1BQU0sTUFBTSxPQUFPLEtBQUs7QUFDOUMsV0FBTyxLQUFLO0FBQUEsRUFDaEI7QUFBQSxFQUNBLG9CQUEwQjtBQUN0QixXQUFPLEtBQUssWUFBWTtBQUFBLEVBQzVCO0FBQUEsRUFFQSxnQkFBZ0I7QUFDWixRQUFJLFNBQVM7QUFDYixTQUFLLHFCQUFxQixRQUFRLENBQUMsR0FBRyxNQUFNO0FBQ3hDLGdCQUFVO0FBQUEsSUFDZCxDQUFDO0FBQ0QsU0FBSyxtQkFBbUI7QUFDeEIsYUFBUztBQUNULFNBQUssbUJBQW1CLFFBQVEsQ0FBQyxHQUFHLE1BQU07QUFDdEMsZ0JBQVU7QUFBQSxJQUNkLENBQUM7QUFDRCxTQUFLLGlCQUFpQjtBQUN0QixhQUFTO0FBQ1QsU0FBSyxtQkFBbUIsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUN0QyxnQkFBVTtBQUFBLElBQ2QsQ0FBQztBQUNELFNBQUssaUJBQWlCO0FBQ3RCLGFBQVM7QUFDVCxTQUFLLG1CQUFtQixRQUFRLENBQUMsR0FBRyxNQUFNO0FBQ3RDLGdCQUFVO0FBQUEsSUFDZCxDQUFDO0FBQ0QsU0FBSyxpQkFBaUI7QUFDdEIsYUFBUztBQUNULFNBQUssa0JBQWtCLFFBQVEsQ0FBQyxHQUFHLE1BQU07QUFDckMsZ0JBQVU7QUFBQSxJQUNkLENBQUM7QUFDRCxTQUFLLG9CQUFvQjtBQUN6QixhQUFTO0FBQ1QsU0FBSyx3QkFBd0IsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUMzQyxnQkFBVTtBQUFBLElBQ2QsQ0FBQztBQUNELFNBQUssMEJBQTBCO0FBQUEsRUFDbkM7QUFFSjs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxpQkFBTixNQUFvQjtBQUUzQjs7O0FMU08sSUFBZSxnQkFBZixNQUE2QjtBQUFBLEVBR3pCO0FBQUEsRUFJUDtBQUFBLEVBRU87QUFBQSxFQUVBO0FBQUEsRUFFQztBQUFBLEVBRUE7QUFBQSxFQUVBO0FBQUEsRUFHUixVQUFtQjtBQUFBLEVBQ25CLFlBQXNCO0FBQUEsRUFDZCwyQkFBbUM7QUFBQSxFQUNuQyxnQkFBK0IsVUFBVSxhQUFhO0FBQUEsRUFDdEQsZ0JBQTBCO0FBQUEsRUFDMUIsWUFBcUI7QUFBQSxFQUNyQixpQkFBaUI7QUFBQSxFQUNqQix3QkFBd0I7QUFBQSxFQUN4QixhQUFhO0FBQUEsRUFDYix1QkFBdUI7QUFBQSxFQUN2QiwyQkFBMkI7QUFBQSxFQUMzQix3QkFBd0I7QUFBQSxFQUN4QixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixrQkFBa0I7QUFBQSxFQUNsQixvQkFBb0I7QUFBQSxFQUNwQixxQkFBcUI7QUFBQSxFQUNyQixpQkFBaUI7QUFBQSxFQUNqQixvQkFBb0I7QUFBQSxFQUNwQixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNqQixpQkFBaUI7QUFBQSxFQUNsQix1QkFBd0Ysb0JBQUksSUFBK0Q7QUFBQSxFQUUxSjtBQUFBLEVBQ1A7QUFBQSxFQUNEO0FBQUEsRUFDQztBQUFBLEVBQ087QUFBQSxFQUNBO0FBQUEsRUFDRDtBQUFBLEVBRUE7QUFBQSxFQUVDO0FBQUEsRUFDUixZQUFZLFlBQXNCLE9BQW9CLFlBQXVCO0FBQ3pFLFNBQUssZ0JBQWdCO0FBQ3JCLFNBQUssU0FBUztBQUNkLFNBQUssT0FBTztBQUNaLFNBQUssWUFBWTtBQUNqQixTQUFLLFlBQVksSUFBSSxrQkFBa0IsSUFBSTtBQUMzQyxTQUFLLFVBQVUsSUFBSSxnQkFBZ0I7QUFDbkMsU0FBSyxpQkFBaUIsSUFBSSxnQkFBZ0IsS0FBSyxPQUFPO0FBQ3RELFNBQUssYUFBYSxJQUFJLGFBQWE7QUFDbkMsU0FBSyx1QkFBdUIsSUFBSSxtQkFBbUI7QUFDbkQsU0FBSyxlQUFlLElBQUksZUFBZTtBQUt2QyxTQUFLLGdCQUFnQjtBQUFBLEVBQ3pCO0FBQUEsRUFFTyxhQUFvQjtBQUN2QixTQUFLLGdCQUFnQjtBQUVyQixTQUFLLFVBQVUscUJBQXFCLElBQUk7QUFDeEMsU0FBSyxPQUFPLGNBQWMsS0FBSyxlQUFlLEVBQUU7QUFDaEQsU0FBSyxxQkFBcUIsUUFBUSxDQUFDLE9BQU8sUUFBUTtBQUM5QyxVQUFJLE9BQU87QUFDUCxjQUFNLGtCQUFrQjtBQUFBLE1BQzVCO0FBQUEsSUFDSixDQUFDO0FBQ0QsU0FBSyxxQkFBcUIsTUFBTTtBQUVoQyxTQUFLLGVBQWUsV0FBVztBQUUvQixTQUFLLHFCQUFxQixXQUFXO0FBQUEsRUFNekM7QUFBQSxFQUVVLGtCQUFzQjtBQUFBLEVBRWhDO0FBQUEsRUFFVSxrQkFBdUI7QUFBQSxFQUVqQztBQUFBLEVBQ1Usa0JBQXVCO0FBQUEsRUFFakM7QUFBQSxFQUdPLE9BQU8sS0FBVztBQUNyQixRQUFJLEtBQUssZ0JBQWdCO0FBQ3JCO0FBQUEsSUFDSjtBQUNBLFFBQUksS0FBSyxnQkFBZ0I7QUFDckIsV0FBSyx3QkFBd0I7QUFBQSxJQUNqQztBQUVBLFFBQUksS0FBSyxZQUFZLFlBQVk7QUFBQSxJQUVqQztBQUVBLFFBQUksS0FBSyxZQUFZLGlCQUFpQixLQUFLLGlCQUFpQixDQUFDLEtBQUssYUFBYSxDQUFDLEtBQUssWUFBWTtBQUM3RixVQUFJLEtBQUssV0FBVztBQUNoQixhQUFLLGlCQUFpQjtBQUFBLE1BQzFCLE9BQUs7QUFDRCxhQUFLLFVBQVU7QUFBQSxNQUNuQjtBQUFBLElBQ0o7QUFDQSxRQUFJLEtBQUssa0JBQWtCLEtBQUssZ0JBQWdCO0FBQzVDLFdBQUssaUJBQWlCO0FBQ3RCLFdBQUssVUFBVTtBQUFBLElBQ25CO0FBRUEsUUFBRyxLQUFLLDBCQUF5QjtBQUM3QixXQUFLLFlBQVk7QUFDakIsV0FBSyx3QkFBd0I7QUFDN0IsV0FBSyxhQUFhO0FBQUEsSUFFdEI7QUFFQSxRQUFJLEtBQUssZ0JBQWdCO0FBQ3JCLFdBQUssb0JBQW9CO0FBQ3pCLFdBQUssYUFBYTtBQUNsQixXQUFLLGlCQUFpQjtBQUN0QixXQUFLLGFBQWE7QUFDbEIsV0FBSyxZQUFZLElBQUksS0FBSyxZQUFZO0FBQUEsSUFDMUM7QUFFQSxRQUFJLHFCQUFxQixLQUFLLGtCQUFrQixLQUFLO0FBQ3JELFFBQUksS0FBSyxXQUFXO0FBQ2hCLFVBQUksc0JBQXNCLENBQUMsS0FBSyxzQkFBc0I7QUFDbEQsZUFBTyxjQUFjLFVBQVUsaUJBQWlCLGFBQWEsSUFBSTtBQUFBLE1BQ3JFO0FBQ0EsVUFBSSxDQUFDLHNCQUFzQixLQUFLLHNCQUFzQjtBQUNsRCxlQUFPLGNBQWMsVUFBVSxpQkFBaUIsYUFBYSxJQUFJO0FBQUEsTUFDckU7QUFDQSxVQUFJLEtBQUssZ0JBQWdCO0FBQ3JCLGFBQUssaUJBQWlCO0FBQ3RCLGVBQU8sY0FBYyxVQUFVLGlCQUFpQixhQUFhLElBQUk7QUFBQSxNQUNyRTtBQUNBLFVBQUksS0FBSywwQkFBMEI7QUFDL0IsWUFBRyxLQUFLLFlBQVkscUJBQW9CO0FBQ3BDLGlCQUFPLGNBQWMsVUFBVSxpQkFBaUIscUJBQXFCLElBQUk7QUFBQSxRQUM3RSxPQUFLO0FBQ0QsaUJBQU8sY0FBYyxVQUFVLGlCQUFpQixtQkFBbUIsSUFBSTtBQUFBLFFBQzNFO0FBQ0EsWUFBSSxLQUFLLFdBQVc7QUFDaEIsZUFBSyxrQkFBa0I7QUFBQSxRQUMzQjtBQUNBLGFBQUssMkJBQTJCO0FBQUEsTUFDcEM7QUFBQSxJQUNKO0FBQ0EsU0FBSyx1QkFBdUI7QUFFNUIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssZUFBZTtBQUNwQixTQUFLLGFBQWE7QUFDbEIsUUFBSSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksY0FBYyxLQUFLLFlBQVksS0FBSyxLQUFLLGdCQUFnQjtBQUNqRyxXQUFLLGtCQUFrQjtBQUFBLElBQzNCO0FBQ0EsUUFBSSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksY0FBYyxLQUFLLFlBQVksS0FBSyxLQUFLLGNBQWMsQ0FBQyxLQUFLLGdCQUFnQjtBQUNySCxXQUFLLGdCQUFnQjtBQUNyQixXQUFLLGlCQUFpQjtBQUFBLElBQzFCO0FBRUEsUUFBSSxLQUFLLGlCQUFpQixLQUFLLFlBQVksd0JBQXdCO0FBRS9ELFdBQUssY0FBYztBQUNuQixXQUFLLGFBQWE7QUFDbEIsV0FBSyx3QkFBd0I7QUFDN0IsV0FBSyxZQUFZO0FBQUEsSUFDckIsT0FBSztBQUNELFVBQUksS0FBSyx5QkFBeUIsS0FBSyxjQUFjLEdBQUc7QUFDcEQsWUFBSSxLQUFLLFlBQVkscUJBQXFCO0FBRXRDLGVBQUssYUFBYTtBQUNsQixlQUFLLHdCQUF3QjtBQUM3QixlQUFLLFVBQVUsYUFBYTtBQUM1QixlQUFLLFlBQVk7QUFDakIsaUJBQU8sY0FBYyxVQUFVLGlCQUFpQixnQkFBZ0IsSUFBSTtBQUFBLFFBQ3hFLE9BQU87QUFFSCxlQUFLLFVBQVUsY0FBYztBQUM3QixpQkFBTyxjQUFjLFVBQVUsaUJBQWlCLGNBQWMsSUFBSTtBQUVsRSxjQUFJLEtBQUssVUFBVSxxQkFBcUIsTUFBTSxLQUFLO0FBRS9DLGdCQUFJLEtBQUssVUFBVSxjQUFjLEdBQUc7QUFFaEMsbUJBQUssYUFBYSxLQUFLLFlBQVk7QUFDbkMsbUJBQUssd0JBQXdCO0FBQzdCLG1CQUFLLFlBQVk7QUFDakIsbUJBQUssY0FBYyxLQUFLLFVBQVUsWUFBWTtBQUFBLFlBQ2xELE9BQU87QUFFSCxtQkFBSyxhQUFhO0FBQ2xCLG1CQUFLLHdCQUF3QjtBQUM3QixtQkFBSyxZQUFZO0FBQ2pCLHFCQUFPLGNBQWMsVUFBVSxpQkFBaUIsZ0JBQWdCLElBQUk7QUFBQSxZQUN4RTtBQUFBLFVBQ0osT0FBTztBQUVILGlCQUFLLGFBQWE7QUFDbEIsaUJBQUssd0JBQXdCO0FBQzdCLGlCQUFLLFlBQVk7QUFDakIsbUJBQU8sY0FBYyxVQUFVLGlCQUFpQixnQkFBZ0IsSUFBSTtBQUFBLFVBQ3hFO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBRUEsUUFBSSxLQUFLLHFCQUFxQixLQUFLLFlBQVksR0FBRztBQUM5QyxXQUFLLGFBQWE7QUFDbEIsV0FBSyxvQkFBb0I7QUFDekIsV0FBSyxhQUFhO0FBQ2xCLFdBQUssaUJBQWlCO0FBQ3RCLGFBQU8sY0FBYyxVQUFVLGlCQUFpQixRQUFRLElBQUk7QUFDNUQsVUFBRyxLQUFLLGtCQUFrQixDQUFDLEtBQUssY0FBYTtBQUN6QyxhQUFLLGlCQUFpQjtBQUN0QixhQUFLLG1CQUFtQjtBQUFBLE1BQzVCO0FBQUEsSUFDSjtBQUNBLFNBQUssZ0JBQWdCO0FBRXJCLFFBQUksS0FBSyx5QkFBeUIsS0FBSyxZQUFZO0FBQy9DLFVBQUksWUFBWSxJQUFJLEtBQUssWUFBWTtBQUNyQyxVQUFJLFFBQVE7QUFDWixVQUFJLFdBQVc7QUFDZixhQUFNLEtBQUssWUFBWSxHQUFFO0FBQ3JCLGlCQUFRLElBQUksR0FBRyxLQUFLLEtBQUssWUFBWSxnQkFBZ0IsS0FBSTtBQUNyRCxjQUFHLEtBQUssVUFBVSxlQUFjO0FBQzVCO0FBQUEsVUFDSjtBQUNBLGNBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLLFlBQVksMkJBQTJCLEdBQUc7QUFDakUsdUJBQVc7QUFDWCxpQkFBSztBQUFBLFVBQ1QsT0FBSztBQUNELGlCQUFLLDJCQUEyQjtBQUFBLFVBQ3BDO0FBQUEsUUFDSjtBQUNBLFlBQUcsWUFBWSxLQUFLLFlBQVksNkJBQTRCO0FBQ3hELGVBQUssUUFBUTtBQUFBLFFBQ2pCO0FBQ0EsWUFBRyxVQUFTO0FBQ1IsY0FBRyxDQUFDLEtBQUssWUFBWSxlQUFjO0FBQy9CLGlCQUFLLGdCQUFnQjtBQUFBLFVBQ3pCO0FBQ0EsaUJBQU8sY0FBYyxVQUFVLGlCQUFpQixPQUFPLElBQUk7QUFBQSxRQUMvRCxPQUFLO0FBQ0QsaUJBQU8sY0FBYyxVQUFVLGlCQUFpQixXQUFXLElBQUk7QUFBQSxRQUNuRTtBQUNBLGlCQUFTO0FBQ1QsYUFBSyxhQUFhO0FBQ2xCLGFBQUssaUJBQWlCO0FBQUEsTUFDMUI7QUFDQSxVQUFHLFVBQVM7QUFDUixhQUFLLFFBQVEsS0FBSztBQUNsQixhQUFLLGVBQWUsWUFBWSxLQUFLLE9BQU87QUFBQSxNQUNoRDtBQUVBLFVBQUcsQ0FBQyxLQUFLLFlBQVc7QUFDaEIsYUFBSywyQkFBMkI7QUFBQSxNQUNwQztBQUVBLFVBQUcsS0FBSyxpQkFBaUIsVUFBVSxhQUFhLE1BQUs7QUFDakQsWUFBRyxLQUFLLDRCQUE0QixLQUFLLEtBQUssVUFBVSxlQUFjO0FBQ2xFLGVBQUssMkJBQTJCO0FBQ2hDLGVBQUssaUJBQWlCO0FBQ3RCLGVBQUssd0JBQXdCO0FBQUEsUUFDakM7QUFDQSxZQUFHLEtBQUssaUJBQWlCLFVBQVUsYUFBYSxRQUFPO0FBQ25ELGVBQUssaUJBQWlCO0FBQ3RCLGVBQUssd0JBQXdCO0FBQUEsUUFDakM7QUFBQSxNQUNKLE9BQUs7QUFDRCxhQUFLLDJCQUEyQixLQUFLLDRCQUE0QixJQUFJLElBQUksS0FBSztBQUM5RSxhQUFLLGlCQUFpQjtBQUN0QixhQUFLLHdCQUF3QjtBQUFBLE1BQ2pDO0FBQ0EsV0FBSyxZQUFZLEtBQUssSUFBSSxHQUFHLEtBQUssU0FBUztBQUMzQyxXQUFLLGNBQWMsS0FBSyxJQUFJLEdBQUcsS0FBSyxXQUFXO0FBQy9DLFdBQUssWUFBWSxLQUFLLElBQUksR0FBRyxLQUFLLFNBQVM7QUFFM0MsV0FBSyxlQUFlLE9BQU8sR0FBRztBQUM5QixXQUFLLHFCQUFxQixPQUFPLEdBQUc7QUFDcEMsV0FBSyxRQUFRLE9BQU8sR0FBRztBQUV2QixXQUFLLFVBQVUsT0FBTztBQUV0QixXQUFLLGNBQWM7QUFBQSxJQUN2QjtBQUFBLEVBQ0o7QUFBQSxFQU9PLGVBQWUsTUFBZ0U7QUFDbEYsUUFBSSxTQUFTLEtBQUs7QUFDbEIsUUFBSSxhQUFhO0FBQ2pCLFNBQUssWUFBWSxvQkFBb0IsUUFBUSxRQUFNO0FBQy9DLFVBQUksTUFBTSxRQUFRO0FBQ2QscUJBQWE7QUFBQSxNQUNqQjtBQUFBLElBQ0osQ0FBQztBQUNELFFBQUksQ0FBQyxZQUFZO0FBQ2IsYUFBTyxDQUFDLE9BQU8sSUFBSTtBQUFBLElBQ3ZCO0FBQ0EsUUFBSSxhQUFhLEtBQUsscUJBQXFCLElBQUksS0FBSyxXQUFXLFFBQVE7QUFDdkUsU0FBSyxxQkFBcUIsSUFBSSxLQUFLLFdBQVcsVUFBVSxJQUFJO0FBQzVELFNBQUssY0FBYyxJQUFJO0FBQ3ZCLFdBQU8sQ0FBQyxNQUFNLFVBQVU7QUFBQSxFQUM1QjtBQUFBLEVBQ08saUJBQWlCLGdCQUFxRDtBQUN6RSxRQUFHLDBCQUEwQix3QkFBdUI7QUFDaEQsV0FBSyxxQkFBcUIsT0FBTyxlQUFlLFdBQVcsUUFBUTtBQUFBLElBQ3ZFLE9BQUs7QUFDRCxXQUFLLHFCQUFxQixPQUFPLGNBQWM7QUFBQSxJQUNuRDtBQUFBLEVBQ0o7QUFBQSxFQUVPLGVBQXFCO0FBQ3hCLFFBQUcsS0FBSyxXQUFXLENBQUUsS0FBSyxjQUFjLEtBQUssVUFBVSxhQUFhLENBQUUsS0FBSyxXQUFVO0FBQ2pGLFdBQUssMkJBQTJCO0FBQUEsSUFDcEM7QUFBQSxFQUNKO0FBQUEsRUFDVSxZQUFnQjtBQUN0QixRQUFHLEtBQUssV0FBVyxDQUFDLEtBQUssV0FBVTtBQUMvQixXQUFLLGlCQUFpQjtBQUN0QixXQUFLLGlCQUFpQixLQUFLO0FBQUEsSUFDL0I7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFnQixrQkFBK0I7QUFDM0MsUUFBRyxLQUFLLFFBQVEsTUFBSztBQUNqQjtBQUFBLElBQ0o7QUFDQSxRQUFJLE9BQU8sSUFBSSxTQUFTLE1BQU0sS0FBSyxPQUFPLEdBQUcsR0FBRyxNQUFNLEtBQUssT0FBTyxDQUFDO0FBQ25FLFFBQUksTUFBTSxNQUFNLFlBQVksWUFBWSxFQUFFLFdBQVcsS0FBSyxZQUFZLFdBQVc7QUFDakYsUUFBSSxpQkFBaUIsS0FBSyxLQUFLLGlCQUFpQixDQUFDO0FBQ2pELFFBQUksaUJBQWlCLElBQUk7QUFBQSxFQUM3QjtBQUFBLEVBQ0EsTUFBZ0IsaUJBQThCO0FBQzFDLFFBQUksTUFBSyxNQUFNLFlBQVksWUFBWSxFQUFFLFdBQVcsS0FBSyxZQUFZLFVBQVU7QUFDL0UsUUFBSSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixDQUFDO0FBQUEsRUFDMUQ7QUFBQSxFQUNBLE1BQWdCLFdBQVcsUUFBbUIsUUFBZSxXQUFpQjtBQUMxRSxRQUFHLENBQUMsUUFBTztBQUNQO0FBQUEsSUFDSjtBQUNBLFFBQUcsa0JBQWtCLFdBQVU7QUFDM0I7QUFBQSxJQUNKO0FBQ0EsUUFBSSxNQUFNLE1BQU0sWUFBWSxZQUFZLEVBQUUsV0FBVyxLQUFLLFlBQVksVUFBVTtBQUNoRixRQUFJLGlCQUFpQixNQUFNO0FBQzNCLFFBQUksY0FBYyxJQUFJLE9BQU8sS0FBSyxLQUFLLEdBQUcsQ0FBQztBQUFBLEVBQy9DO0FBQUEsRUFDQSxNQUFnQixjQUFjLFFBQTRCO0FBQ3RELFFBQUksTUFBTSxNQUFNLFlBQVksWUFBWSxFQUFFLFdBQVcsS0FBSyxZQUFZLFNBQVM7QUFDL0UsUUFBSSxpQkFBaUIsTUFBTTtBQUFBLEVBQy9CO0FBQUEsRUFDTyxXQUFXLFFBQWU7QUFDN0IsU0FBSyxrQkFBa0I7QUFBQSxFQUMzQjtBQUFBLEVBQ08saUJBQWlCLE1BQVk7QUFDaEMsU0FBSyxvQkFBb0I7QUFDekIsU0FBSyxxQkFBcUI7QUFBQSxFQUM5QjtBQUFBLEVBQ08sc0JBQXFCO0FBQ3hCLFNBQUssb0JBQW9CO0FBQUEsRUFDN0I7QUFBQSxFQUNPLG1CQUFrQjtBQUNyQixRQUFHLEtBQUssU0FBUTtBQUNaLFdBQUssaUJBQWlCO0FBQ3RCLGNBQVEsS0FBSztBQUFBLGFBQ0osVUFBVSxhQUFhO0FBQ3hCLGVBQUssMkJBQTJCO0FBQ2hDO0FBQUEsYUFDQyxVQUFVLGFBQWE7QUFDeEIsZUFBSywyQkFBMkIsS0FBSyxZQUFZO0FBQ2pEO0FBQUEsYUFDQyxVQUFVLGFBQWE7QUFDeEIsZUFBSywyQkFBMkIsS0FBSyxZQUFZO0FBQ2pEO0FBQUE7QUFFQTtBQUFBO0FBQUEsSUFFWjtBQUFBLEVBQ0o7QUFBQSxFQUNPLGNBQWE7QUFDaEIsUUFBRyxLQUFLLFdBQVcsS0FBSyxpQkFBaUIsVUFBVSxhQUFhLE1BQUs7QUFDakUsV0FBSyxpQkFBaUI7QUFBQSxJQUMxQjtBQUFBLEVBQ0o7QUFBQSxFQUNPLFFBQVEsR0FBVTtBQUNyQixRQUFHLEtBQUssWUFBWSxpQkFBaUIsS0FBSyxhQUFhLENBQUMsS0FBSyxZQUFXO0FBRXBFLFdBQUssaUJBQWlCO0FBQUEsSUFDMUI7QUFDQSxRQUFHLENBQUMsR0FBRTtBQUNGO0FBQUEsSUFDSjtBQUNBLFNBQUssZUFBZTtBQUFBLEVBQ3hCO0FBQUEsRUFDTyxxQkFBMEI7QUFDN0IsUUFBRyxLQUFLLGFBQWEsQ0FBQyxLQUFLLFNBQVE7QUFDL0I7QUFBQSxJQUNKO0FBQ0EsUUFBRyxFQUFFLEtBQUssVUFBVSxpQkFBaUIsYUFBYSxTQUFTLEtBQUssY0FBYyxLQUFLLFdBQVU7QUFDekY7QUFBQSxJQUNKO0FBQ0EsU0FBSyxZQUFZO0FBQ2pCLFNBQUssZUFBZSxtQkFBbUI7QUFFdkMsV0FBTyxjQUFjLFVBQVUsaUJBQWlCLE9BQU8sSUFBSTtBQUFBLEVBQy9EO0FBQUEsRUFDTyxvQkFBd0I7QUFDM0IsUUFBRyxFQUFFLEtBQUssYUFBYSxLQUFLLFVBQVM7QUFDakM7QUFBQSxJQUNKO0FBQ0EsU0FBSyxZQUFZO0FBQ2pCLFNBQUssZUFBZSxrQkFBa0I7QUFFdEMsV0FBTyxjQUFjLFVBQVUsaUJBQWlCLFFBQVEsSUFBSTtBQUFBLEVBQ2hFO0FBQUEsRUFDTyxpQkFBcUI7QUFDeEIsUUFBRyxDQUFDLEtBQUssU0FBUTtBQUNiO0FBQUEsSUFDSjtBQUNBLFNBQUssaUJBQWlCO0FBQ3RCLFFBQUcsS0FBSyxXQUFVO0FBQ2QsV0FBSyxrQkFBa0I7QUFBQSxJQUMzQjtBQUNBLFNBQUssZUFBZSxnQkFBZ0IsSUFBSTtBQUV4QyxTQUFLLE9BQU8sY0FBYyxLQUFLLGVBQWUsR0FBRztBQUNqRCxRQUFHLEtBQUssV0FBVTtBQUNkLFdBQUssY0FBYztBQUNuQixXQUFLLHdCQUF3QjtBQUM3QixXQUFLLFlBQVk7QUFDakIsV0FBSyxhQUFhO0FBQ2xCLGFBQU8sY0FBYyxVQUFVLGlCQUFpQixnQkFBZ0IsSUFBSTtBQUFBLElBQ3hFO0FBQ0EsU0FBSyxVQUFVO0FBQ2YsV0FBTyxjQUFjLFVBQVUsaUJBQWlCLGdCQUFnQixJQUFJO0FBQUEsRUFDeEU7QUFBQSxFQUNPLGFBQWlCO0FBQ3BCLFFBQUcsS0FBSyxTQUFRO0FBQ1o7QUFBQSxJQUNKO0FBQ0EsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxVQUFVO0FBQ2YsU0FBSyxpQkFBaUI7QUFFdEIsU0FBSyxlQUFlLGNBQWMsTUFBTSxJQUFJO0FBQzVDLFNBQUssT0FBTyxjQUFjLEtBQUssZUFBZSxFQUFFO0FBRWhELFFBQUcsS0FBSyxnQkFBZTtBQUNuQixXQUFLLFVBQVU7QUFBQSxJQUNuQjtBQUNBLGVBQVcsTUFBTTtBQUNiLFVBQUksTUFBTTtBQUNOLGFBQUssaUJBQWlCO0FBQUEsTUFDMUI7QUFBQSxJQUNKLEdBQUcsR0FBSTtBQUNQLFdBQU8sY0FBYyxVQUFVLGlCQUFpQixZQUFZLElBQUk7QUFBQSxFQUNwRTtBQUFBLEVBSU8sVUFBZTtBQUNsQixTQUFLLFVBQVUsUUFBUSxFQUFFO0FBQUEsRUFDN0I7QUFBQSxFQUNPLGtCQUF5QztBQUM1QyxRQUFHLEtBQUssV0FBVyxLQUFLLFlBQVc7QUFDL0IsVUFBRyxLQUFLLFlBQVksVUFBVSxTQUFTLEdBQUU7QUFFckMsWUFBSTtBQUNKLGFBQUssWUFBWSxVQUFVLFFBQVEsQ0FBQyxPQUFPLFVBQVU7QUFDakQsY0FBRyxTQUFTLEtBQUssZUFBYztBQUMzQjtBQUNBO0FBQUEsVUFDSjtBQUFBLFFBQ0osQ0FBQztBQUNELFlBQUcsS0FBSyxZQUFZLFVBQVUsY0FBYyxNQUFLO0FBQzdDLHNCQUFZO0FBQUEsUUFDaEI7QUFDQSxhQUFLLGdCQUFnQixLQUFLLFlBQVksVUFBVTtBQUFBLE1BQ3BEO0FBQ0EsYUFBTyxLQUFLO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQUEsRUFDTyxnQkFBc0I7QUFDekIsV0FBTyxLQUFLLFVBQVUsaUJBQWlCLEVBQUUsSUFBSSxLQUFLLFVBQVUsaUJBQWlCLEVBQUUsU0FBUyxHQUFHLEVBQUUsSUFBSyxPQUFPLEdBQUcsU0FBUyxLQUFLLFVBQVUsb0JBQW9CLElBQUksR0FBRyxDQUFFLENBQUM7QUFBQSxFQUN0SztBQUFBLEVBQ08sZ0JBQXNCO0FBQ3pCLFFBQUksQ0FBQyxNQUFNLFFBQVEsSUFBc0IsS0FBSyxlQUFlLFVBQVU7QUFDdkUsUUFBRyxVQUFTO0FBQ1IsYUFBTztBQUFBLElBQ1gsT0FBSztBQUNELGFBQU8sS0FBSyxTQUFTLEtBQUssWUFBWSxRQUFRLEVBQUUsSUFBSSxLQUFLLFVBQVUsaUJBQWlCLENBQUM7QUFBQSxJQUN6RjtBQUFBLEVBQ0o7QUFBQSxFQUNRLGdCQUFnQixLQUFxQztBQUN6RCxRQUFJLFNBQVMsS0FBSyxjQUFjLEVBQUUsSUFBSSxJQUFJLFNBQVMsS0FBSyxZQUFZLFFBQVEsQ0FBQztBQUM3RSxRQUFJLE9BQU8sU0FBUyxVQUFVLEtBQUssY0FBYyxHQUFHLE1BQU07QUFDMUQsUUFBSTtBQUNKLFFBQUcsS0FBSyxVQUFVLEdBQUU7QUFDaEIsYUFBTztBQUFBLElBQ1g7QUFFQSxlQUFXLE9BQU8sTUFBTTtBQUNwQixVQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUssTUFBTSxHQUFHLEdBQUc7QUFDakQsY0FBTSxVQUFVLEtBQUs7QUFDckIsWUFBSSxRQUFRLHNCQUFzQixTQUFTLGFBQWEsUUFBUSxjQUFjLFNBQVMsaUJBQWlCLEVBQUUsV0FBVztBQUVqSDtBQUFBLFFBQ0o7QUFDQSxZQUFJLFFBQVEsV0FBVyxhQUFhLEtBQUssS0FBSyxnQkFBZ0IsSUFBSTtBQUM5RCxpQkFBTyxXQUFXLFFBQVE7QUFDMUIsaUJBQU8sWUFBWSxRQUFRO0FBQzNCLGlCQUFPLFlBQVksUUFBUTtBQUMzQixpQkFBTyxVQUFVLFVBQVUsWUFBWTtBQUN2QyxpQkFBTyxXQUFXO0FBQ2xCLGlCQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBRUEsZUFBVyxPQUFPLE1BQU07QUFDcEIsVUFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLE1BQU0sR0FBRyxHQUFHO0FBQ2pELGNBQU0sVUFBVSxLQUFLO0FBQ3JCLFlBQUcsUUFBUSxzQkFBc0IsU0FBUyxXQUFVO0FBSWhELGNBQUcsT0FBVyxVQUFVLGNBQWMsUUFBUSxXQUFXLElBQUksRUFBRSxNQUFNLEdBQUU7QUFDbkU7QUFBQSxVQUNKO0FBRUEsY0FBRyxDQUFDLEtBQUssWUFBWSxhQUFhLFFBQVEsY0FBYyxTQUFTLGlCQUFpQixFQUFFLFdBQVU7QUFDMUY7QUFBQSxVQUNKO0FBQ0EsaUJBQU8sV0FBVyxRQUFRO0FBQzFCLGlCQUFPLFlBQVksUUFBUTtBQUMzQixpQkFBTyxZQUFZLFFBQVE7QUFDM0IsaUJBQU8sVUFBVSxVQUFVLFlBQVk7QUFDdkMsaUJBQU8sV0FBVztBQUNsQixpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUNBLFdBQU87QUFBQSxFQUNYO0FBQUEsRUFDUSw0QkFBa0M7QUFDdEMsUUFBSSxNQUFNLEtBQUssY0FBYyxFQUFFLFNBQVMsS0FBSyxjQUFjLENBQUMsRUFBRTtBQUM5RCxRQUFJLEtBQUsscUJBQXFCLGlCQUFpQjtBQUUzQyxZQUFNLEtBQUssVUFBVTtBQUFBLElBQ3pCO0FBQ0EsUUFBSSxLQUFLLGFBQWEsS0FBSyxZQUFZLGFBQWE7QUFDaEQsYUFBTztBQUFBLElBQ1g7QUFDQSxXQUFPLFdBQVcsYUFBYSxLQUFLLEtBQUssUUFBUSxhQUFhO0FBQUEsRUFDbEU7QUFBQSxFQUNVLEtBQUssT0FBYyxTQUFnQjtBQUN6QyxRQUFJLFdBQVc7QUFDZixRQUFJLFlBQVksS0FBSywwQkFBMEI7QUFDL0MsUUFBSSxNQUFNLEtBQUssZ0JBQWdCLFNBQVM7QUFDeEMsU0FBSyxnQkFBZ0I7QUFDckIsUUFBRyxDQUFDLFlBQVksS0FBSTtBQUNoQixVQUFJLFNBQVMsSUFBSTtBQUNqQixVQUFJLFVBQVUsSUFBSTtBQUNsQixVQUFJLFNBQVMsSUFBSTtBQUNqQixVQUFHLFNBQVE7QUFDUCxhQUFLLFFBQVE7QUFBQSxNQUNqQjtBQUNBLFVBQUcsQ0FBQyxJQUFJLFdBQVU7QUFDZCxpQkFBUyxLQUFLLGNBQWMsRUFBRSxJQUFJLFVBQVUsU0FBUyxLQUFLLFlBQVksUUFBUSxDQUFDO0FBQUEsTUFDbkY7QUFDQSxXQUFLLFdBQVcsUUFBUSxRQUFRLE9BQU87QUFDdkMsVUFBRyxJQUFJLFdBQVcsSUFBSSxXQUFXLFVBQVUsWUFBWSxNQUFLO0FBQ3hELGFBQUssT0FBTyxHQUFHO0FBQUEsTUFDbkI7QUFDQSxXQUFLLGNBQWMsTUFBTTtBQUN6QixVQUFHLElBQUksVUFBUztBQUNaLFlBQUksU0FBUyxLQUFLLFlBQVk7QUFDOUIsZUFBTyxjQUFjLFVBQVUsaUJBQWlCLHVCQUF1QixNQUFNLEdBQUc7QUFBQSxNQUNwRjtBQUNBLGFBQU87QUFBQSxJQUNYLE9BQUs7QUFDRCxhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0o7QUFBQSxFQUNVLE9BQU8sS0FBZ0M7QUFDN0MsUUFBSSxTQUFTLElBQUk7QUFDakIsUUFBSTtBQUNKLFFBQUcsVUFBVSxNQUFLO0FBQ2Qsb0JBQWM7QUFBQSxJQUNsQixPQUFLO0FBQ0QsVUFBSSxNQUFhLE9BQU8sU0FBUyxLQUFLLFVBQVUsaUJBQWlCLENBQUMsRUFBRTtBQUNwRSxvQkFBYyxXQUFXLHNCQUFzQixHQUFHLE1BQU0sR0FBRztBQUFBLElBQy9EO0FBQ0EsUUFBSSxTQUFTLEtBQUssWUFBWSxTQUFTO0FBQ3ZDLGFBQVMsVUFBVSxJQUFJLElBQUk7QUFDM0IsWUFBUSxJQUFJO0FBQUEsV0FDSCxVQUFVLFlBQVk7QUFDdkIsaUJBQVMsU0FBUyxLQUFLLFlBQVk7QUFDbkM7QUFBQSxXQUNDLFVBQVUsWUFBWTtBQUN2QixpQkFBUyxTQUFTLEtBQUssWUFBWTtBQUNuQztBQUFBLFdBQ0MsVUFBVSxZQUFZO0FBQ3ZCLGlCQUFTLFNBQVMsS0FBSyxZQUFZO0FBQ25DO0FBQUE7QUFFQTtBQUFBO0FBRVIsUUFBRyxTQUFTLEdBQUU7QUFDVixVQUFJO0FBQ0osYUFBTyxjQUFjLFVBQVUsaUJBQWlCLGlCQUFpQixRQUFRLGNBQWMsUUFBUSxJQUFJLE9BQU87QUFBQSxJQUc5RztBQUFBLEVBQ0o7QUFBQSxFQUNRLGdCQUFnQjtBQUNwQixRQUFJLFNBQVM7QUFBQSxFQUVqQjtBQUlKOzs7QU16cEJBO0FBQUE7QUFBQTtBQUFBO0FBWUEsSUFBcUIscUJBQXJCLGNBQWdELEdBQUcsV0FBVztBQUFBLEVBT25ELFVBQVU7QUFBQSxFQUNwQjtBQUVEO0FBVnFCLHFCQUFyQjtBQUFBLEVBREMsR0FBRyxXQUFXLGlCQUFpQjtBQUFBLEdBQ1g7OztBQ1pyQjtBQUFBO0FBQUE7QUFBQTtBQVlBLElBQXFCLHVCQUFyQixjQUFrRCxHQUFHLFdBQVc7QUFBQSxFQU9yRCxVQUFVO0FBQUEsRUFDcEI7QUFFRDtBQVZxQix1QkFBckI7QUFBQSxFQURDLEdBQUcsV0FBVyxtQkFBbUI7QUFBQSxHQUNiOzs7QTlCbUJyQixnQkFBMkI7QUFFcEIsSUFBTSxjQUFjO0FBQUEsRUFDdEIsaUNBQWlDO0FBQUEsRUFDakMsaUNBQWlDO0FBQUEsRUFDakMsaUNBQWlDO0FBQUEsRUFDakMsK0JBQStCO0FBQUEsRUFDL0IseUJBQXlCO0FBQUEsRUFDekIsMENBQTBDO0FBQUEsRUFDMUMsMENBQTBDO0FBQUEsRUFDMUMsb0NBQW9DO0FBQUEsRUFDcEMsbUNBQW1DO0FBQUEsRUFDbkMsc0NBQXNDO0FBQUEsRUFDdEMsMkNBQTJDO0FBQUEsRUFDM0MseUNBQXlDO0FBQUEsRUFDekMsMkNBQTJDO0FBQUEsRUFDM0MsMEJBQTBCO0FBQUEsRUFDMUIsOEJBQThCO0FBQUEsRUFDOUIsNEJBQTRCO0FBQUEsRUFDNUIsaUNBQWlDO0FBQUEsRUFDakMsOEJBQThCO0FBQUEsRUFDOUIsdUNBQXVDO0FBQUEsRUFDdkMsNkNBQTZDO0FBQUEsRUFDN0Msd0NBQXdDO0FBQUEsRUFDeEMseUNBQXlDO0FBQUEsRUFDekMsb0NBQW9DO0FBQUEsRUFDcEMsc0NBQXNDO0FBQUEsRUFDdEMsbUNBQW1DO0FBQUEsRUFDbkMsd0NBQXdDO0FBQUEsRUFDeEMsc0NBQXNDO0FBQUEsRUFDdEMscUNBQXFDO0FBQUEsRUFDckMsaUNBQWlDO0FBQUEsRUFDakMsOENBQThDO0FBQUEsRUFDOUMsZ0RBQWdEO0FBQUEsRUFDaEQsU0FBUztBQUNkOyIsCiAgIm5hbWVzIjogWyJFdmVudENvbnN0IiwgIkNsaWVudEV2ZW50IiwgIlNlcnZlckV2ZW50IiwgIkV2ZW50Q29uc3QiLCAiV2VhcG9uVG9vbCIsICJFdmVudENvbnN0Il0KfQo=
