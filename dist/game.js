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

// JavaScripts/GamePlayMain.ts
var GamePlayMain_exports = {};
__export(GamePlayMain_exports, {
  default: () => GamePlayMain
});
var GamePlayMain = class extends Core.Script {
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
var foreign11 = __toESM(require_build());
var MWModuleMap = {
  "JavaScripts/Config/ConfigBase": ConfigBase_exports,
  "JavaScripts/Config/GameConfig": GameConfig_exports,
  "JavaScripts/Config/Monsters": Monsters_exports,
  "JavaScripts/DefaultUI": DefaultUI_exports,
  "JavaScripts/Entity/Monster/MonsterBase": MonsterBase_exports,
  "JavaScripts/Factory/Fac_InteractObject": Fac_InteractObject_exports,
  "JavaScripts/GamePlayMain": GamePlayMain_exports,
  "JavaScripts/Interface/IInteraction": IInteraction_exports,
  "JavaScripts/ui-generate/DefaultUI_generate": DefaultUI_generate_exports,
  "JavaScripts/ui-generate/MonstInfoUI_generate": MonstInfoUI_generate_exports,
  "build": foreign11
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYnVpbGQudHMiLCAiPHN0ZGluPiIsICJKYXZhU2NyaXB0cy9Db25maWcvQ29uZmlnQmFzZS50cyIsICJKYXZhU2NyaXB0cy9Db25maWcvR2FtZUNvbmZpZy50cyIsICJKYXZhU2NyaXB0cy9Db25maWcvTW9uc3RlcnMudHMiLCAiSmF2YVNjcmlwdHMvRGVmYXVsdFVJLnRzIiwgIkphdmFTY3JpcHRzL0VudGl0eS9Nb25zdGVyL01vbnN0ZXJCYXNlLnRzIiwgIkphdmFTY3JpcHRzL0ZhY3RvcnkvRmFjX0ludGVyYWN0T2JqZWN0LnRzIiwgIkphdmFTY3JpcHRzL0dhbWVQbGF5TWFpbi50cyIsICJKYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uLnRzIiwgIkphdmFTY3JpcHRzL3VpLWdlbmVyYXRlL0RlZmF1bHRVSV9nZW5lcmF0ZS50cyIsICJKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9Nb25zdEluZm9VSV9nZW5lcmF0ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiIiwgImltcG9ydCAqIGFzIGZvcmVpZ24xIGZyb20gJy4vSmF2YVNjcmlwdHMvQ29uZmlnL0NvbmZpZ0Jhc2UnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjIgZnJvbSAnLi9KYXZhU2NyaXB0cy9Db25maWcvR2FtZUNvbmZpZyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduMyBmcm9tICcuL0phdmFTY3JpcHRzL0NvbmZpZy9Nb25zdGVycyc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNCBmcm9tICcuL0phdmFTY3JpcHRzL0RlZmF1bHRVSSc7XG5pbXBvcnQgKiBhcyBmb3JlaWduNSBmcm9tICcuL0phdmFTY3JpcHRzL0VudGl0eS9Nb25zdGVyL01vbnN0ZXJCYXNlJztcbmltcG9ydCAqIGFzIGZvcmVpZ242IGZyb20gJy4vSmF2YVNjcmlwdHMvRmFjdG9yeS9GYWNfSW50ZXJhY3RPYmplY3QnO1xuaW1wb3J0ICogYXMgZm9yZWlnbjcgZnJvbSAnLi9KYXZhU2NyaXB0cy9HYW1lUGxheU1haW4nO1xuaW1wb3J0ICogYXMgZm9yZWlnbjggZnJvbSAnLi9KYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uJztcbmltcG9ydCAqIGFzIGZvcmVpZ245IGZyb20gJy4vSmF2YVNjcmlwdHMvdWktZ2VuZXJhdGUvRGVmYXVsdFVJX2dlbmVyYXRlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xMCBmcm9tICcuL0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL01vbnN0SW5mb1VJX2dlbmVyYXRlJztcbmltcG9ydCAqIGFzIGZvcmVpZ24xMSBmcm9tICcuL2J1aWxkJztcblxuZXhwb3J0IGNvbnN0IE1XTW9kdWxlTWFwID0geyBcbiAgICAgJ0phdmFTY3JpcHRzL0NvbmZpZy9Db25maWdCYXNlJzogZm9yZWlnbjEsXG4gICAgICdKYXZhU2NyaXB0cy9Db25maWcvR2FtZUNvbmZpZyc6IGZvcmVpZ24yLFxuICAgICAnSmF2YVNjcmlwdHMvQ29uZmlnL01vbnN0ZXJzJzogZm9yZWlnbjMsXG4gICAgICdKYXZhU2NyaXB0cy9EZWZhdWx0VUknOiBmb3JlaWduNCxcbiAgICAgJ0phdmFTY3JpcHRzL0VudGl0eS9Nb25zdGVyL01vbnN0ZXJCYXNlJzogZm9yZWlnbjUsXG4gICAgICdKYXZhU2NyaXB0cy9GYWN0b3J5L0ZhY19JbnRlcmFjdE9iamVjdCc6IGZvcmVpZ242LFxuICAgICAnSmF2YVNjcmlwdHMvR2FtZVBsYXlNYWluJzogZm9yZWlnbjcsXG4gICAgICdKYXZhU2NyaXB0cy9JbnRlcmZhY2UvSUludGVyYWN0aW9uJzogZm9yZWlnbjgsXG4gICAgICdKYXZhU2NyaXB0cy91aS1nZW5lcmF0ZS9EZWZhdWx0VUlfZ2VuZXJhdGUnOiBmb3JlaWduOSxcbiAgICAgJ0phdmFTY3JpcHRzL3VpLWdlbmVyYXRlL01vbnN0SW5mb1VJX2dlbmVyYXRlJzogZm9yZWlnbjEwLFxuICAgICAnYnVpbGQnOiBmb3JlaWduMTEsXG59XG4iLCAiXG4vL1x1NTE0M1x1N0QyMFx1NzY4NFx1NTdGQVx1N0M3QlxuZXhwb3J0IGludGVyZmFjZSBJRWxlbWVudEJhc2V7XG5cdGlkOm51bWJlcjtcbn1cbi8vXHU5MTREXHU3RjZFXHU3Njg0XHU1N0ZBXHU3QzdCXG5leHBvcnQgY2xhc3MgQ29uZmlnQmFzZTxUIGV4dGVuZHMgSUVsZW1lbnRCYXNlPntcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0tFWTpzdHJpbmcgPSAnS2V5JzsvL1x1OEJGQlx1NTNENlx1OTUyRShcdTk2NjRcdTRFODZJRFx1NEU0Qlx1NTkxNlx1NzY4NFx1NTIyQlx1NTQwRFx1RkYwQ1x1NUUyNmtleVx1NzY4NFx1NUI1N1x1NkJCNVx1NUZDNVx1OTg3Qlx1NjYyRnN0cmluZ1x1N0M3Qlx1NTc4Qilcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0xBTkdVQUdFOnN0cmluZyA9ICdMYW5ndWFnZSc7Ly9cdTUxNzNcdTgwNTRcdThCRURcdThBMDBcdTg4NjhcdTc2ODRpZFx1NjIxNmtleShcdTU5ODJcdTY3OUNcdTY3MDlcdThGRDlcdTRFMkF0YWdcdUZGMENcdTVCRkNcdTg4NjhcdTVERTVcdTUxNzdcdTg5ODFcdTYyOEFcdTY1NzBcdTYzNkVcdTc1MUZcdTYyMTBcdTRFM0FzdHJpbmdcdTdDN0JcdTU3OEJcdUZGMENcdTU2RTBcdTRFM0FcdTRGMUFcdTgxRUFcdTUyQThcdThGREJcdTg4NENcdTUwM0NcdTc2ODRcdThGNkNcdTYzNjIpXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBR19NQUlOTEFOR1VBR0U6c3RyaW5nID0gJ01haW5MYW5ndWFnZSc7Ly9cdTRFM0JcdThCRURcdThBMDB0YWdcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFHX0NISUxETEFOR1VBR0U6c3RyaW5nID0gJ0NoaWxkTGFuZ3VhZ2UnOy8vXHU1QjUwXHU4QkVEXHU4QTAwdGFnXG5cblx0cHJpdmF0ZSByZWFkb25seSBFTEVNRU5UQVJSOkFycmF5PFQ+ID0gW107XG5cdHByaXZhdGUgcmVhZG9ubHkgRUxFTUVOVE1BUDpNYXA8bnVtYmVyLCBUPiA9IG5ldyBNYXA8bnVtYmVyLCBUPigpO1xuXHRwcml2YXRlIHJlYWRvbmx5IEtFWU1BUDpNYXA8bnVtYmVyIHwgc3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuXHRwcml2YXRlIHN0YXRpYyBsYW5ndWFnZUluZGV4Om51bWJlciA9IDBcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0TGFuZ3VhZ2U6KGtleTpzdHJpbmd8bnVtYmVyKT0+c3RyaW5nO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihleGNlbERhdGE6QXJyYXk8QXJyYXk8YW55Pj4pe1xuXHRcdGxldCBoZWFkZXJMaW5lOm51bWJlciA9IDI7Ly9cdTg4NjhcdTU5MzRcdTc2ODRcdTg4NENcdTY1NzBcblx0XHR0aGlzLkVMRU1FTlRBUlIgPSBuZXcgQXJyYXkoZXhjZWxEYXRhLmxlbmd0aCAtIGhlYWRlckxpbmUpO1xuXHRcdFxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoOyBpKyspe1xuXHRcdFx0dGhpcy5FTEVNRU5UQVJSW2ldID0ge30gYXMgVFxuXHRcdH1cblx0XHRsZXQgY29sdW1uID0gZXhjZWxEYXRhWzBdLmxlbmd0aDsvL1x1NTIxN1x1NjU3MFxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCBjb2x1bW47IGorKyl7Ly9cdTkwNERcdTUzODZcdTU0MDRcdTUyMTdcblx0XHRcdGxldCBuYW1lOnN0cmluZyA9IGV4Y2VsRGF0YVswXVtqXTtcblx0XHRcdGxldCB0YWdzOkFycmF5PHN0cmluZz4gPSBleGNlbERhdGFbMV1bal0uc3BsaXQoJ3wnKTtcblx0XHRcdGlmKHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfQ0hJTERMQU5HVUFHRSkpIGNvbnRpbnVlO1xuXHRcdFx0bGV0IGpPZmZlY3Q6bnVtYmVyID0gMDsvL1x1NTIxN1x1NTA0Rlx1NzlGQlx1OTFDRlxuXHRcdFx0aWYodGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19NQUlOTEFOR1VBR0UpKXtcblx0XHRcdFx0bGV0IGluZGV4ID0gaiArIENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleDtcblx0XHRcdFx0bGV0IHRhcmdldFRhZ3M6QXJyYXk8c3RyaW5nPiA9IGV4Y2VsRGF0YVsxXVtpbmRleF0uc3BsaXQoJ3wnKTtcblx0XHRcdFx0aWYoaW5kZXggPCBjb2x1bW4gJiYgdGFyZ2V0VGFncy5pbmNsdWRlcyhDb25maWdCYXNlLlRBR19DSElMRExBTkdVQUdFKSl7XG5cdFx0XHRcdFx0ak9mZmVjdCA9IENvbmZpZ0Jhc2UubGFuZ3VhZ2VJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGV0IGhhc1RhZ19LZXk6Ym9vbGVhbiA9IHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfS0VZKTtcblx0XHRcdGxldCBoYXNUYWdfTGFuZ3VhZ2U6Ym9vbGVhbiA9IHRhZ3MuaW5jbHVkZXMoQ29uZmlnQmFzZS5UQUdfTEFOR1VBR0UpO1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVEFSUi5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGxldCBlbGUgPSB0aGlzLkVMRU1FTlRBUlJbaV07XG5cdFx0XHRcdGxldCB2YWx1ZSA9IGV4Y2VsRGF0YVtpICsgaGVhZGVyTGluZV1baiArIGpPZmZlY3RdO1xuXHRcdFx0XHRpZihqID09IDApey8vSURcblx0XHRcdFx0XHR0aGlzLkVMRU1FTlRNQVAuc2V0KHZhbHVlLCBlbGUpO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihoYXNUYWdfS2V5KXtcblx0XHRcdFx0XHRcdHRoaXMuS0VZTUFQLnNldCh2YWx1ZSwgZXhjZWxEYXRhW2kgKyBoZWFkZXJMaW5lXVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGhhc1RhZ19MYW5ndWFnZSl7XG5cdFx0XHRcdFx0XHRpZihDb25maWdCYXNlLmdldExhbmd1YWdlICE9IG51bGwpe1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IENvbmZpZ0Jhc2UuZ2V0TGFuZ3VhZ2UodmFsdWUpO1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gXCJ1bmtub3dcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbGVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9cdThCQkVcdTdGNkVcdTgzQjdcdTUzRDZcdThCRURcdThBMDBcdTc2ODRcdTY1QjlcdTZDRDVcblx0cHVibGljIHN0YXRpYyBpbml0TGFuZ3VhZ2UobGFuZ3VhZ2VJbmRleDpudW1iZXIsIGdldExhbmd1YWdlRnVuOihrZXk6c3RyaW5nfG51bWJlcik9PnN0cmluZyl7XG5cdFx0Q29uZmlnQmFzZS5sYW5ndWFnZUluZGV4ID0gbGFuZ3VhZ2VJbmRleDtcblx0XHRDb25maWdCYXNlLmdldExhbmd1YWdlID0gZ2V0TGFuZ3VhZ2VGdW47XG5cdFx0aWYoQ29uZmlnQmFzZS5sYW5ndWFnZUluZGV4IDwgMCl7XG5cdFx0XHRDb25maWdCYXNlLmxhbmd1YWdlSW5kZXggPSBDb25maWdCYXNlLmdldFN5c3RlbUxhbmd1YWdlSW5kZXgoKTtcblx0XHR9XG5cdH1cblx0Ly9cdTgzQjdcdTUzRDZcdTdDRkJcdTdFREZcdThCRURcdThBMDBcdTdEMjJcdTVGMTVcblx0cHJpdmF0ZSBzdGF0aWMgZ2V0U3lzdGVtTGFuZ3VhZ2VJbmRleCgpOm51bWJlcntcblx0XHRsZXQgbGFuZ3VhZ2UgPSBVdGlsLkxvY2FsZVV0aWwuZ2V0RGVmYXVsdExvY2FsZSgpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImVuXCIpKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0aWYgKCEhbGFuZ3VhZ2UubWF0Y2goXCJ6aFwiKSkge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXHRcdGlmICghIWxhbmd1YWdlLm1hdGNoKFwiamFcIikpIHtcblx0XHRcdHJldHVybiAyO1xuXHRcdH1cblx0XHRpZiAoISFsYW5ndWFnZS5tYXRjaChcImRlXCIpKSB7XG5cdFx0XHRyZXR1cm4gMztcblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH1cblx0LyoqXG5cdCogXHU2ODM5XHU2MzZFaWRcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTUxNDNcdTdEMjBcblx0KiBAcGFyYW0gaWQgaWR8a2V5XG5cdCogQHJldHVybnMgRWxlbWVudFxuXHQqL1xuXHRwdWJsaWMgZ2V0RWxlbWVudChpZDpudW1iZXJ8c3RyaW5nKTogVCB7XG5cdFx0bGV0IGVsZSA9IHRoaXMuRUxFTUVOVE1BUC5nZXQoTnVtYmVyKGlkKSkgfHwgdGhpcy5FTEVNRU5UTUFQLmdldCh0aGlzLktFWU1BUC5nZXQoaWQpKTtcblx0XHRpZihlbGUgPT0gbnVsbCl7XG5cdFx0XHRjb25zb2xlLmVycm9yKHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiXHU5MTREXHU3RjZFXHU4ODY4XHU0RTJEXHU2MjdFXHU0RTBEXHU1MjMwXHU1MTQzXHU3RDIwIGlkOlwiICsgaWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlO1xuXHR9XG5cdC8qKlxuXHQqIFx1NjgzOVx1NjM2RVx1NUI1N1x1NkJCNVx1NTQwRFx1NTQ4Q1x1NUI1N1x1NkJCNVx1NTAzQ1x1NjdFNVx1NjI3RVx1NEUwMFx1NEUyQVx1NTE0M1x1N0QyMFxuXHQqIEBwYXJhbSBmaWVsZE5hbWUgXHU1QjU3XHU2QkI1XHU1NDBEXG5cdCogQHBhcmFtIGZpZWxkVmFsdWUgXHU1QjU3XHU2QkI1XHU1MDNDXG5cdCogQHJldHVybnMgXHU3QjJDXHU0RTAwXHU0RTJBXHU2MjdFXHU1MjMwXHU3Njg0RWxlbWVudFxuXHQqL1xuXHRwdWJsaWMgZmluZEVsZW1lbnQoZmllbGROYW1lOnN0cmluZywgZmllbGRWYWx1ZTphbnkpOiBUe1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoOyBpKyspe1xuXHRcdFx0aWYodGhpcy5FTEVNRU5UQVJSW2ldW2ZpZWxkTmFtZV0gPT0gZmllbGRWYWx1ZSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLkVMRU1FTlRBUlJbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQqIFx1NjgzOVx1NjM2RVx1NUI1N1x1NkJCNVx1NTQwRFx1NTQ4Q1x1NUI1N1x1NkJCNVx1NTAzQ1x1NjdFNVx1NjI3RVx1NEUwMFx1N0VDNFx1NTE0M1x1N0QyMFxuXHQqIEBwYXJhbSBmaWVsZE5hbWUgXHU1QjU3XHU2QkI1XHU1NDBEXG5cdCogQHBhcmFtIGZpZWxkVmFsdWUgXHU1QjU3XHU2QkI1XHU1MDNDXG5cdCogQHJldHVybnMgXHU2MjQwXHU2NzA5XHU3QjI2XHU1NDA4XHU4OTgxXHU2QzQyXHU3Njg0RWxlbWVudFxuXHQqL1xuXHRwdWJsaWMgZmluZEVsZW1lbnRzKGZpZWxkTmFtZTpzdHJpbmcsZmllbGRWYWx1ZTphbnkpOkFycmF5PFQ+e1xuXHRcdGxldCBhcnI6QXJyYXk8VD4gPSBbXTtcblx0XHRmb3IobGV0IGkgPSAwO2kgPCB0aGlzLkVMRU1FTlRBUlIubGVuZ3RoO2krKyl7XG5cdFx0XHRpZih0aGlzLkVMRU1FTlRBUlJbaV1bZmllbGROYW1lXSA9PSBmaWVsZFZhbHVlKXtcblx0XHRcdFx0YXJyLnB1c2godGhpcy5FTEVNRU5UQVJSW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXHQvKipcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTUxNDNcdTdEMjAqL1xuXHRwdWJsaWMgZ2V0QWxsRWxlbWVudCgpOkFycmF5PFQ+e1xuXHRcdHJldHVybiB0aGlzLkVMRU1FTlRBUlI7XG5cdH1cbn0iLCAiaW1wb3J0IHtDb25maWdCYXNlLCBJRWxlbWVudEJhc2V9IGZyb20gXCIuL0NvbmZpZ0Jhc2VcIjtcbmltcG9ydCB7TW9uc3RlcnNDb25maWd9IGZyb20gXCIuL01vbnN0ZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29uZmlne1xuXHRwcml2YXRlIHN0YXRpYyBjb25maWdNYXA6TWFwPHN0cmluZywgQ29uZmlnQmFzZTxJRWxlbWVudEJhc2U+PiA9IG5ldyBNYXAoKTtcblx0LyoqXG5cdCogXHU1OTFBXHU4QkVEXHU4QTAwXHU4QkJFXHU3RjZFXG5cdCogQHBhcmFtIGxhbmd1YWdlSW5kZXggXHU4QkVEXHU4QTAwXHU3RDIyXHU1RjE1KC0xXHU0RTNBXHU3Q0ZCXHU3RURGXHU5RUQ4XHU4QkE0XHU4QkVEXHU4QTAwKVxuXHQqIEBwYXJhbSBnZXRMYW5ndWFnZUZ1biBcdTY4MzlcdTYzNkVrZXlcdTgzQjdcdTUzRDZcdThCRURcdThBMDBcdTUxODVcdTVCQjlcdTc2ODRcdTY1QjlcdTZDRDVcblx0Ki9cblx0cHVibGljIHN0YXRpYyBpbml0TGFuZ3VhZ2UobGFuZ3VhZ2VJbmRleDpudW1iZXIsIGdldExhbmd1YWdlRnVuOihrZXk6c3RyaW5nfG51bWJlcik9PnN0cmluZyl7XG5cdFx0Q29uZmlnQmFzZS5pbml0TGFuZ3VhZ2UobGFuZ3VhZ2VJbmRleCwgZ2V0TGFuZ3VhZ2VGdW4pO1xuXHRcdHRoaXMuY29uZmlnTWFwLmNsZWFyKCk7XG5cdH1cblx0cHVibGljIHN0YXRpYyBnZXRDb25maWc8VCBleHRlbmRzIENvbmZpZ0Jhc2U8SUVsZW1lbnRCYXNlPj4oQ29uZmlnQ2xhc3M6IHsgbmV3KCk6IFQgfSk6IFQge1xuXHRcdGlmICghdGhpcy5jb25maWdNYXAuaGFzKENvbmZpZ0NsYXNzLm5hbWUpKSB7XG5cdFx0XHR0aGlzLmNvbmZpZ01hcC5zZXQoQ29uZmlnQ2xhc3MubmFtZSwgbmV3IENvbmZpZ0NsYXNzKCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5jb25maWdNYXAuZ2V0KENvbmZpZ0NsYXNzLm5hbWUpIGFzIFQ7XG5cdH1cblx0cHVibGljIHN0YXRpYyBnZXQgTW9uc3RlcnMoKTpNb25zdGVyc0NvbmZpZ3sgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKE1vbnN0ZXJzQ29uZmlnKSB9O1xufSIsICJpbXBvcnQgeyBDb25maWdCYXNlLCBJRWxlbWVudEJhc2UgfSBmcm9tIFwiLi9Db25maWdCYXNlXCI7XG5jb25zdCBFWENFTERBVEE6QXJyYXk8QXJyYXk8YW55Pj4gPSBbW1wiaWRcIixcIm5hbWVcIixcIm1heEhQXCIsXCJsZXZlbFwiLFwiYXRrXCIsXCJtb2RlbEd1aWRcIl0sW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxbMSxcIlx1ODcxOFx1ODZEQlwiLDEwMCwyLDEsXCIxOTI1NjlcIl0sWzIsXCJcdTUxNTRcdTVCNTBcIiwyMDAsMiwxLFwiMTM4MjY4XCJdLFszLFwiXHU5RThCXHU5RTdGXCIsMzAwLDIsMSxcIjEyNjAzMFwiXV07XG5leHBvcnQgaW50ZXJmYWNlIElNb25zdGVyc0VsZW1lbnQgZXh0ZW5kcyBJRWxlbWVudEJhc2V7XG4gXHQvKipcdTYwMkFcdTcyNjlJRCovXG5cdGlkOm51bWJlclxuXHQvKipcdTYwMkFcdTcyNjlcdTU0MERcdTVCNTcqL1xuXHRuYW1lOnN0cmluZ1xuXHQvKipcdTY3MDBcdTU5MjdcdTg4NDBcdTkxQ0YqL1xuXHRtYXhIUDpudW1iZXJcblx0LyoqXHU3QjQ5XHU3RUE3Ki9cblx0bGV2ZWw6bnVtYmVyXG5cdC8qKlx1NjUzQlx1NTFGQlx1NTI5QiovXG5cdGF0azpudW1iZXJcblx0LyoqXHU5ODg0XHU1MjM2XHU0RjUzR3VpZCovXG5cdG1vZGVsR3VpZDpzdHJpbmdcbiB9IFxuZXhwb3J0IGNsYXNzIE1vbnN0ZXJzQ29uZmlnIGV4dGVuZHMgQ29uZmlnQmFzZTxJTW9uc3RlcnNFbGVtZW50Pntcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcihFWENFTERBVEEpO1xuXHR9XG5cbn0iLCAiXHVGRUZGaW1wb3J0IEludGVyYWN0QWN0b3IgZnJvbSBcIi4vSW50ZXJmYWNlL0lJbnRlcmFjdGlvblwiO1xyXG5cclxuQFVJLlVJQ2FsbE9ubHkoJycpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRGVmYXVsdCBleHRlbmRzIFVJLlVJQmVoYXZpb3Ige1xyXG5cdENoYXJhY3RlcjogR2FtZXBsYXkuQ2hhcmFjdGVyO1xyXG5cclxuXHRJbnRlcmFjdEJ0bjogVUkuQnV0dG9uXHJcblx0TmVhckludGVyYWN0R3VpZCA6c3RyaW5nXHJcblx0LyogXHU4OUUzXHU2NzkwXHU4RDQ0XHU2RTkwSURcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgcmVzb2x2ZVN0cmluZyhhc3NldElkczogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBhc3NldElkQXJyYXk6IHN0cmluZ1tdID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgYXNzZXRJZDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgcyA9IGFzc2V0SWRzLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGEgb2Ygcykge1xyXG4gICAgICAgICAgICBpZiAoYSA9PSBcIixcIikge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRJZEFycmF5LnB1c2goYXNzZXRJZCk7XHJcbiAgICAgICAgICAgICAgICBhc3NldElkID0gXCJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0SWQgKz0gYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXNzZXRJZCkge1xyXG4gICAgICAgICAgICBhc3NldElkQXJyYXkucHVzaChhc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0SWRBcnJheTtcclxuICAgIH1cclxuXHJcblx0LyogXHU1MjFEXHU1OUNCXHU1MzE2XHU4RDQ0XHU2RTkwICovXHJcblx0cHJpdmF0ZSBpbml0QXNzZXRzKGFzc2V0SWRzOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGxldCBhc3NldElkQXJyYXkgPSB0aGlzLnJlc29sdmVTdHJpbmcoYXNzZXRJZHMpO1xyXG5cdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBhc3NldElkQXJyYXkpIHtcclxuXHRcdFx0VXRpbC5Bc3NldFV0aWwuYXN5bmNEb3dubG9hZEFzc2V0KGVsZW1lbnQpXHJcblx0XHR9XHJcblx0fVxyXG5cdHByaXZhdGUgVHJ5SW50ZXJhY3QoKTp2b2lkIHtcclxuXHRcdGxldCBvYmo6R2FtZU9iamVjdCA9IEdhbWVPYmplY3QuZmluZCh0aGlzLk5lYXJJbnRlcmFjdEd1aWQpXHJcblx0XHRpZiAob2JqID09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHRsZXQgYSA9IG9iai5nZXRTY3JpcHRzKClcclxuXHRcdGxldCBhY3RvciA6IEludGVyYWN0QWN0b3IgPSA8SW50ZXJhY3RBY3Rvcj5vYmouZ2V0U2NyaXB0QnlOYW1lKFwiSUludGVyYWN0aW9uXCIpXHJcblx0XHRhY3Rvci5PbkludGVyYWN0KGdldEN1cnJlbnRQbGF5ZXIoKSwgMSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgU2hvd0ludGVyYWN0QnV0dG9uKGd1aWQgOnN0cmluZyk6dm9pZCB7XHJcblx0XHR0aGlzLkludGVyYWN0QnRuLnZpc2liaWxpdHkgPSBVSS5TbGF0ZVZpc2liaWxpdHkuVmlzaWJsZVxyXG5cdFx0dGhpcy5OZWFySW50ZXJhY3RHdWlkID0gZ3VpZFxyXG5cdH1cclxuXHRwcml2YXRlIEhpZGVJbnRlcmFjdEJ1dHRvbihndWlkOnN0cmluZyk6dm9pZHtcclxuXHRcdGlmICh0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPT0gZ3VpZCkge1xyXG5cdFx0XHR0aGlzLk5lYXJJbnRlcmFjdEd1aWQgPSBcIlwiXHJcblx0XHRcdHRoaXMuSW50ZXJhY3RCdG4udmlzaWJpbGl0eSA9IFVJLlNsYXRlVmlzaWJpbGl0eS5Db2xsYXBzZWRcclxuXHRcdH1cclxuXHR9XHJcblx0LyoqIFx1NEVDNVx1NTcyOFx1NkUzOFx1NjIwRlx1NjVGNlx1OTVGNFx1NUJGOVx1OTc1RVx1NkEyMVx1Njc3Rlx1NUI5RVx1NEY4Qlx1OEMwM1x1NzUyOFx1NEUwMFx1NkIyMSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKSB7XHJcblx0XHQvL1x1NTIxRFx1NTlDQlx1NTMxNlx1NTJBOFx1NzUzQlx1OEQ0NFx1NkU5MCBcclxuXHRcdHRoaXMuaW5pdEFzc2V0cyhcIjk1Nzc3LDYxMjQ1XCIpXHJcblx0XHQvL1x1OEJCRVx1N0Y2RVx1ODBGRFx1NTQyNlx1NkJDRlx1NUUyN1x1ODlFNlx1NTNEMW9uVXBkYXRlXHJcblx0XHR0aGlzLmNhblVwZGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHQvL1x1NjI3RVx1NTIzMFx1NUJGOVx1NUU5NFx1NzY4NFx1OERGM1x1OERDM1x1NjMwOVx1OTRBRVxyXG4gICAgICAgIGNvbnN0IEp1bXBCdG4gPSB0aGlzLnVpV2lkZ2V0QmFzZS5maW5kQ2hpbGRCeVBhdGgoJ1Jvb3RDYW52YXMvQnV0dG9uX0p1bXAnKSBhcyBVSS5CdXR0b25cclxuXHRcdGNvbnN0IEF0dGFja0J0biA9IHRoaXMudWlXaWRnZXRCYXNlLmZpbmRDaGlsZEJ5UGF0aCgnUm9vdENhbnZhcy9CdXR0b25fQXR0YWNrJykgYXMgVUkuQnV0dG9uXHJcblx0XHR0aGlzLkludGVyYWN0QnRuID0gdGhpcy51aVdpZGdldEJhc2UuZmluZENoaWxkQnlQYXRoKCdSb290Q2FudmFzL0ludGVyYWN0QnRuJykgYXMgVUkuQnV0dG9uXHJcblx0XHR0aGlzLkludGVyYWN0QnRuLnZpc2liaWxpdHkgPSBVSS5TbGF0ZVZpc2liaWxpdHkuQ29sbGFwc2VkXHJcblx0XHRcclxuXHRcdEV2ZW50cy5hZGRMb2NhbExpc3RlbmVyKFwiY2xpZW50X3Nob3dfaW50ZXJhY3RfYnV0dG9uXCIsIChndWlkOiBzdHJpbmcpPT57XHJcblx0XHRcdHRoaXMuU2hvd0ludGVyYWN0QnV0dG9uKGd1aWQpXHJcblx0XHR9KTtcdFxyXG5cdFx0RXZlbnRzLmFkZExvY2FsTGlzdGVuZXIoXCJjbGllbnRfaGlkZV9pbnRlcmFjdF9idXR0b25cIiwgKGd1aWQ6IHN0cmluZyk9PntcclxuXHRcdFx0dGhpcy5IaWRlSW50ZXJhY3RCdXR0b24oZ3VpZClcclxuXHRcdH0pXHJcblx0XHQvL1x1NzBCOVx1NTFGQlx1OERGM1x1OERDM1x1NjMwOVx1OTRBRSxcdTVGMDJcdTZCNjVcdTgzQjdcdTUzRDZcdTRFQkFcdTcyNjlcdTU0MEVcdTYyNjdcdTg4NENcdThERjNcdThEQzNcclxuICAgICAgICBKdW1wQnRuLm9uUHJlc3NlZC5hZGQoKCk9PntcclxuXHRcdFx0aWYgKHRoaXMuQ2hhcmFjdGVyKSB7XHJcblx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIuanVtcCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdEdhbWVwbGF5LmFzeW5jR2V0Q3VycmVudFBsYXllcigpLnRoZW4oKHBsYXllcikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5DaGFyYWN0ZXIgPSBwbGF5ZXIuY2hhcmFjdGVyO1xyXG5cdFx0XHRcdFx0Ly9cdTg5RDJcdTgyNzJcdTYyNjdcdTg4NENcdThERjNcdThEQzNcdTUyOUZcdTgwRkRcclxuXHRcdFx0XHRcdHRoaXMuQ2hhcmFjdGVyLmp1bXAoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU2NTNCXHU1MUZCXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIEF0dGFja0J0bi5vblByZXNzZWQuYWRkKCgpPT57XHJcblx0XHRcdFx0R2FtZXBsYXkuYXN5bmNHZXRDdXJyZW50UGxheWVyKCkudGhlbigocGxheWVyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLkNoYXJhY3RlciA9IHBsYXllci5jaGFyYWN0ZXI7XHJcblx0XHRcdFx0XHQvL1x1OEJBOVx1NTJBOFx1NzUzQlx1NTNFQVx1NTcyOFx1NEUwQVx1NTM0QVx1OEVBQlx1NjRBRFx1NjUzRVxyXG5cdFx0XHRcdFx0bGV0IGFuaW0xID0gcGxheWVyLmNoYXJhY3Rlci5sb2FkQW5pbWF0aW9uKFwiNjEyNDVcIik7XHJcblx0XHRcdFx0XHRhbmltMS5zbG90ID0gR2FtZXBsYXkuQW5pbVNsb3QuVXBwZXI7XHJcblx0XHRcdFx0XHQvL1x1ODlEMlx1ODI3Mlx1NjI2N1x1ODg0Q1x1NjUzQlx1NTFGQlx1NTJBOFx1NEY1Q1xyXG5cdFx0XHRcdFx0aWYoYW5pbTEuaXNQbGF5aW5nKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0YW5pbTEucGxheSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSlcdFxyXG5cclxuXHRcdC8vXHU3MEI5XHU1MUZCXHU0RUE0XHU0RTkyXHU2MzA5XHU5NEFFLFx1NUYwMlx1NkI2NVx1ODNCN1x1NTNENlx1NEVCQVx1NzI2OVx1NTQwRVx1NjI2N1x1ODg0Q1x1NEVBNFx1NEU5Mlx1NTJBOFx1NEY1Q1xyXG4gICAgICAgIHRoaXMuSW50ZXJhY3RCdG4ub25QcmVzc2VkLmFkZCgoKT0+e1xyXG5cdFx0XHR0aGlzLlRyeUludGVyYWN0KClcclxuXHRcdH0pXHRcclxuXHRcdFxyXG4gICAgfVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvblN0YXJ0XHU0RTRCXHU1NDBFIFxyXG5cdCAqIFx1NUJGOVx1NEU4RVVJXHU3Njg0XHU2ODM5XHU4MjgyXHU3MEI5XHU3Njg0XHU2REZCXHU1MkEwXHU2NENEXHU0RjVDXHVGRjBDXHU4RkRCXHU4ODRDXHU4QzAzXHU3NTI4XHJcblx0ICogXHU2Q0U4XHU2MTBGXHVGRjFBXHU4QkU1XHU0RThCXHU0RUY2XHU1M0VGXHU4MEZEXHU0RjFBXHU1OTFBXHU2QjIxXHU4QzAzXHU3NTI4XHJcblx0ICovXHJcblx0cHJvdGVjdGVkIG9uQWRkZWQoKSB7XHJcblx0fVxyXG5cclxuXHQvKiogXHJcblx0ICogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENvbkFkZGVkXHU0RTRCXHU1NDBFXHJcblx0ICogXHU1QkY5XHU0RThFVUlcdTc2ODRcdTY4MzlcdTgyODJcdTcwQjlcdTc2ODRcdTc5RkJcdTk2NjRcdTY0Q0RcdTRGNUNcdUZGMENcdThGREJcdTg4NENcdThDMDNcdTc1MjhcclxuXHQgKiBcdTZDRThcdTYxMEZcdUZGMUFcdThCRTVcdTRFOEJcdTRFRjZcdTUzRUZcdTgwRkRcdTRGMUFcdTU5MUFcdTZCMjFcdThDMDNcdTc1MjhcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25SZW1vdmVkKCkge1xyXG5cdH1cclxuXHJcblx0LyoqIFxyXG5cdCogXHU2Nzg0XHU5MDIwVUlcdTY1ODdcdTRFRjZcdTYyMTBcdTUyOUZcdTU0MEVcdUZGMENVSVx1NUJGOVx1OEM2MVx1NTE4RFx1ODhBQlx1OTUwMFx1NkJDMVx1NjVGNlx1OEMwM1x1NzUyOCBcclxuXHQqIFx1NkNFOFx1NjEwRlx1RkYxQVx1OEZEOVx1NEU0Qlx1NTQwRVVJXHU1QkY5XHU4QzYxXHU1REYyXHU3RUNGXHU4OEFCXHU5NTAwXHU2QkMxXHU0RTg2XHVGRjBDXHU5NzAwXHU4OTgxXHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU1QkY5XHU4QkU1XHU2NTg3XHU0RUY2XHU1NDhDVUlcdTc2RjhcdTUxNzNcdTVCRjlcdThDNjFcdTRFRTVcdTUzQ0FcdTVCNTBcdTVCRjlcdThDNjFcdTc2ODRcdTVGMTVcdTc1MjhcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQqIFx1NkJDRlx1NEUwMFx1NUUyN1x1OEMwM1x1NzUyOFxyXG5cdCogXHU5MDFBXHU4RkM3Y2FuVXBkYXRlXHU1M0VGXHU0RUU1XHU1RjAwXHU1NDJGXHU1MTczXHU5NUVEXHU4QzAzXHU3NTI4XHJcblx0KiBkdCBcdTRFMjRcdTVFMjdcdThDMDNcdTc1MjhcdTc2ODRcdTY1RjZcdTk1RjRcdTVERUVcdUZGMENcdTZCRUJcdTc5RDJcclxuXHQqL1xyXG5cdC8vcHJvdGVjdGVkIG9uVXBkYXRlKGR0IDpudW1iZXIpIHtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU4QkJFXHU3RjZFXHU2NjNFXHU3OTNBXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25TaG93KC4uLnBhcmFtczphbnlbXSkge1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdThCQkVcdTdGNkVcdTRFMERcdTY2M0VcdTc5M0FcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkhpZGUoKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NUY1M1x1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU2NjJGXHU1M0VGXHU0RUU1XHU2M0E1XHU2NTM2XHU0RThCXHU0RUY2XHU3Njg0XHU2NUY2XHU1MDE5XHJcblx0ICogXHU2MjRCXHU2MzA3XHU2MjE2XHU1MjE5XHU5RjIwXHU2ODA3XHU4OUU2XHU1M0QxXHU0RTAwXHU2QjIxVG91Y2hcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFOEJcdTRFRjZcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdTRFODZcclxuXHQgKiBcdTU5ODJcdTY3OUNcdTU5MDRcdTc0MDZcdTRFODZcdUZGMENcdTkwQTNcdTRFNDhcdThGRDlcdTRFMkFVSVx1NzU0Q1x1OTc2Mlx1NTNFRlx1NEVFNVx1NjNBNVx1NjUzNlx1OEZEOVx1NkIyMVRvdWNoXHU1NDBFXHU3RUVEXHU3Njg0TW92ZVx1NTQ4Q0VuZFx1NEU4Qlx1NEVGNlxyXG5cdCAqIFx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NTkwNFx1NzQwNlx1RkYwQ1x1OTBBM1x1NEU0OFx1OEZEOVx1NEUyQVVJXHU3NTRDXHU5NzYyXHU1QzMxXHU2NUUwXHU2Q0Q1XHU2M0E1XHU2NTM2XHU4RkQ5XHU2QjIxVG91Y2hcdTU0MEVcdTdFRURcdTc2ODRNb3ZlXHU1NDhDRW5kXHU0RThCXHU0RUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0ZWQoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJblBvaW50ZXJFdmVudDpVSS5Qb2ludGVyRXZlbnQpIDpVSS5FdmVudFJlcGx5e1xyXG5cdC8vXHRyZXR1cm4gVUkuRXZlbnRSZXBseS51bkhhbmRsZWQ7IC8vVUkuRXZlbnRSZXBseS5oYW5kbGVkXHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjI0Qlx1NjMwN1x1NjIxNlx1NTIxOVx1OUYyMFx1NjgwN1x1NTE4RFVJXHU3NTRDXHU5NzYyXHU0RTBBXHU3OUZCXHU1MkE4XHU2NUY2XHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25Ub3VjaE1vdmVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5Qb2ludGVyRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSA6VUkuRXZlbnRSZXBseXtcclxuXHQvL1x0cmV0dXJuIFVJLkV2ZW50UmVwbHkudW5IYW5kbGVkOyAvL1VJLkV2ZW50UmVwbHkuaGFuZGxlZFxyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyNEJcdTYzMDdcdTYyMTZcdTUyMTlcdTlGMjBcdTY4MDdcdTc5QkJcdTVGMDBVSVx1NzU0Q1x1OTc2Mlx1NjVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIE9uVG91Y2hFbmRlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCkgOlVJLkV2ZW50UmVwbHl7XHJcblx0Ly9cdHJldHVybiBVSS5FdmVudFJlcGx5LnVuSGFuZGxlZDsgLy9VSS5FdmVudFJlcGx5LmhhbmRsZWRcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU1RjUzXHU1NzI4VUlcdTc1NENcdTk3NjJcdTRFMEFcdThDMDNcdTc1MjhkZXRlY3REcmFnL2RldGVjdERyYWdJZlByZXNzZWRcdTY1RjZcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQgKiBcdTUzRUZcdTRFRTVcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjZcdTc2ODRcdTVGMDBcdTU5Q0JcdTc1MUZcdTYyMTBcclxuXHQgKiBcdThGRDRcdTU2REVcdTRFMDBcdTZCMjFcdTc1MUZcdTYyMTBcdTc2ODRcdTYyRDZcdTYyRkRcdTRFOEJcdTRFRjYgbmV3RHJhZ0Ryb3BcdTUzRUZcdTRFRTVcdTc1MUZcdTYyMTBcdTRFMDBcdTZCMjFcdTRFOEJcdTRFRjZcclxuXHQgKi9cclxuXHQvL3Byb3RlY3RlZCBvbkRyYWdEZXRlY3RlZChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluUG9pbnRlckV2ZW50OlVJLlBvaW50ZXJFdmVudCk6VUkuRHJhZ0Ryb3BPcGVyYXRpb24ge1xyXG5cdC8vXHRyZXR1cm4gdGhpcy5uZXdEcmFnRHJvcChudWxsKTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU3RUNGXHU4RkM3XHU4RkQ5XHU0RTJBVUlcdTY1RjZcdTg5RTZcdTUzRDFcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ092ZXIoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50LEluRHJhZ0Ryb3BPcGVyYXRpb246VUkuRHJhZ0Ryb3BPcGVyYXRpb24pOmJvb2xlYW4ge1xyXG5cdC8vXHRyZXR1cm4gdHJ1ZTtcclxuXHQvL31cclxuXHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHU1NzI4XHU4RkQ5XHU0RTJBVUlcdTkxQ0FcdTY1M0VcdTVCOENcdTYyMTBcdTY1RjZcclxuXHQgKiBcdThGRDRcdTU2REV0cnVlXHU3Njg0XHU4QkREXHU4ODY4XHU3OTNBXHU1OTA0XHU3NDA2XHU0RTg2XHU4RkQ5XHU2QjIxXHU0RThCXHU0RUY2XHVGRjBDXHU0RTBEXHU0RjFBXHU1MThEXHU1RjgwXHU4RkQ5XHU0RTJBVUlcdTc2ODRcdTRFMEJcdTRFMDBcdTVDNDJcdTc2ODRVSVx1N0VFN1x1N0VFRFx1NTE5Mlx1NkNFMVx1OEZEOVx1NEUyQVx1NEU4Qlx1NEVGNlxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJvcChJbkdlbW90cnkgOlVJLkdlb21ldHJ5LEluRHJhZ0Ryb3BFdmVudDpVSS5Qb2ludGVyRXZlbnQsSW5EcmFnRHJvcE9wZXJhdGlvbjpVSS5EcmFnRHJvcE9wZXJhdGlvbik6Ym9vbGVhbiB7XHJcblx0Ly9cdHJldHVybiB0cnVlO1xyXG5cdC8vfVxyXG5cclxuXHQvKipcclxuXHQgKiBcdTYyRDZcdTYyRkRcdTY0Q0RcdTRGNUNcdTc1MUZcdTYyMTBcdTRFOEJcdTRFRjZcdTg5RTZcdTUzRDFcdTU0MEVcdThGREJcdTUxNjVcdThGRDlcdTRFMkFVSVx1NjVGNlx1ODlFNlx1NTNEMVxyXG5cdCAqL1xyXG5cdC8vcHJvdGVjdGVkIG9uRHJhZ0VudGVyKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCxJbkRyYWdEcm9wT3BlcmF0aW9uOlVJLkRyYWdEcm9wT3BlcmF0aW9uKSB7XHJcblx0Ly99XHJcblxyXG5cdC8qKlxyXG5cdCAqIFx1NjJENlx1NjJGRFx1NjRDRFx1NEY1Q1x1NzUxRlx1NjIxMFx1NEU4Qlx1NEVGNlx1ODlFNlx1NTNEMVx1NTQwRVx1NzlCQlx1NUYwMFx1OEZEOVx1NEUyQVVJXHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnTGVhdmUoSW5HZW1vdHJ5IDpVSS5HZW9tZXRyeSxJbkRyYWdEcm9wRXZlbnQ6VUkuUG9pbnRlckV2ZW50KSB7XHJcblx0Ly99XHJcblx0XHJcblx0LyoqXHJcblx0ICogXHU2MkQ2XHU2MkZEXHU2NENEXHU0RjVDXHU3NTFGXHU2MjEwXHU0RThCXHU0RUY2XHU4OUU2XHU1M0QxXHU1NDBFXHVGRjBDXHU2Q0ExXHU2NzA5XHU1QjhDXHU2MjEwXHU1QjhDXHU2MjEwXHU3Njg0XHU2MkQ2XHU2MkZEXHU0RThCXHU0RUY2XHU4MDBDXHU1M0Q2XHU2RDg4XHU2NUY2XHU4OUU2XHU1M0QxXHJcblx0ICovXHJcblx0Ly9wcm90ZWN0ZWQgb25EcmFnQ2FuY2VsbGVkKEluR2Vtb3RyeSA6VUkuR2VvbWV0cnksSW5EcmFnRHJvcEV2ZW50OlVJLlBvaW50ZXJFdmVudCkge1xyXG5cdC8vfVxyXG5cclxufVxyXG4iLCAiXHVGRUZGXHJcbkBDb3JlLkNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0ZXJCYXNlIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZpbXBvcnQgSW50ZXJhY3RBY3RvciBmcm9tIFwiLi4vSW50ZXJmYWNlL0lJbnRlcmFjdGlvblwiO1xyXG5cclxuQENvcmUuQ2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjX0ludGVyYWN0T2JqZWN0IGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgcHJpdmF0ZSBndWlkTGlzdDogTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj4gPSBuZXcgTWFwPHN0cmluZywgSW50ZXJhY3RBY3Rvcj47XHJcbiAgICBwcml2YXRlIGFjIDogSW50ZXJhY3RBY3RvcjtcclxuICAgIC8qKiBcdTVGNTNcdTgxMUFcdTY3MkNcdTg4QUJcdTVCOUVcdTRGOEJcdTU0MEVcdUZGMENcdTRGMUFcdTU3MjhcdTdCMkNcdTRFMDBcdTVFMjdcdTY2RjRcdTY1QjBcdTUyNERcdThDMDNcdTc1MjhcdTZCNjRcdTUxRkRcdTY1NzAgKi9cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTQ2OFx1NjcxRlx1NTFGRFx1NjU3MCBcdTZCQ0ZcdTVFMjdcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NTFGRFx1NjU3MFx1NjI2N1x1ODg0Q1x1OTcwMFx1ODk4MVx1NUMwNnRoaXMudXNlVXBkYXRlXHU4RDRCXHU1MDNDXHU0RTNBdHJ1ZVxyXG4gICAgICogQHBhcmFtIGR0IFx1NUY1M1x1NTI0RFx1NUUyN1x1NEUwRVx1NEUwQVx1NEUwMFx1NUUyN1x1NzY4NFx1NUVGNlx1OEZERiAvIFx1NzlEMlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MTFBXHU2NzJDXHU4OEFCXHU5NTAwXHU2QkMxXHU2NUY2XHU2NzAwXHU1NDBFXHU0RTAwXHU1RTI3XHU2MjY3XHU4ODRDXHU1QjhDXHU4QzAzXHU3NTI4XHU2QjY0XHU1MUZEXHU2NTcwICovXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufSIsICJcdUZFRkZAQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheU1haW4gZXh0ZW5kcyBDb3JlLlNjcmlwdCB7XHJcblxyXG59XHJcbiIsICJcdUZFRkZAQ29yZS5DbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdEFjdG9yIGV4dGVuZHMgQ29yZS5TY3JpcHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFQTRcdTRFOTJcdTcyNjlcdTc2ODRcdTU3M0FcdTY2NkZcdTRFMkRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtX09iamVjdDogR2FtZU9iamVjdDtcclxuICAgIHByaXZhdGUgbV90cmlnZ2VyOiBUcmlnZ2VyO1xyXG4gICAgcHJpdmF0ZSBtX2d1aWQ6c3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubV9PYmplY3QgPSB0aGlzLmdhbWVPYmplY3RcclxuICAgICAgICB0aGlzLm1fdHJpZ2dlciA9IDxUcmlnZ2VyPnRoaXMubV9PYmplY3QuZ2V0Q2hpbGRCeU5hbWUoXCJUcmlnZ2VyXCIpIFxyXG4gICAgICAgIHRoaXMubV9ndWlkID0gdGhpcy5tX09iamVjdC5ndWlkO1xyXG4gICAgICAgIHRoaXMubV90cmlnZ2VyLm9uRW50ZXIuYWRkKGdvID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1fT2JqZWN0LmlzUnVubmluZ0NsaWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBcdTUyMjRcdTY1QURcdThGREJcdTUxNjVcdTc4QjBcdTY0OUVcdTUzM0FcdTU3REZcdTc2ODRcdTVCRjlcdThDNjFcdTY2MkZcdTU0MjZcdTRFM0FcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgaWYgKCEoZ28gaW5zdGFuY2VvZiBHYW1lcGxheS5DaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdTRFMERcdTY2MkZcdTg5RDJcdTgyNzJcdUZGMENcdTUwNUNcdTZCNjJcdTYyNjdcdTg4NENcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGdvID0gPEdhbWVwbGF5LkNoYXJhY3Rlcj5nb1xyXG4gICAgICAgICAgICBpZiAoIShnbyA9PSBnZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTk3NUVcdTY3MkNcdTU3MzBcdTczQTlcdTVCQjZcdTYzQTdcdTUyMzZcdTc2ODRcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKFwiY2xpZW50X3Nob3dfaW50ZXJhY3RfYnV0dG9uXCIsIHRoaXMubV9ndWlkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5tX3RyaWdnZXIub25MZWF2ZS5hZGQoZ28gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubV9PYmplY3QuaXNSdW5uaW5nQ2xpZW50KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFx1NTIyNFx1NjVBRFx1OEZEQlx1NTE2NVx1NzhCMFx1NjQ5RVx1NTMzQVx1NTdERlx1NzY4NFx1NUJGOVx1OEM2MVx1NjYyRlx1NTQyNlx1NEUzQVx1ODlEMlx1ODI3MlxyXG4gICAgICAgICAgICBpZiAoIShnbyBpbnN0YW5jZW9mIEdhbWVwbGF5LkNoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFx1NEUwRFx1NjYyRlx1ODlEMlx1ODI3Mlx1RkYwQ1x1NTA1Q1x1NkI2Mlx1NjI2N1x1ODg0Q1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdvID0gPEdhbWVwbGF5LkNoYXJhY3Rlcj5nb1xyXG4gICAgICAgICAgICBpZiAoIShnbyA9PSBnZXRDdXJyZW50UGxheWVyKCkuY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTk3NUVcdTY3MkNcdTU3MzBcdTczQTlcdTVCQjZcdTYzQTdcdTUyMzZcdTc2ODRcdTg5RDJcdTgyNzJcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEV2ZW50cy5kaXNwYXRjaExvY2FsKFwiY2xpZW50X2hpZGVfaW50ZXJhY3RfYnV0dG9uXCIsIHRoaXMubV9ndWlkKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFQTRcdTRFOTJcdTcyNjlcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgcHVibGljIEluaXQoZ3VpZCA6IHN0cmluZywgdHJhbnNmb3JtIDogVHJhbnNmb3JtKSA6c3RyaW5ne1xyXG4gICAgICAgIHRoaXMubV9PYmplY3QgPSBHYW1lT2JqZWN0LnNwYXduKHtndWlkOiBndWlkLCByZXBsaWNhdGVzIDogdHJ1ZSwgdHJhbnNmb3JtIDogdHJhbnNmb3JtfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1fZ3VpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNDbGllbnQoKSA6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKTtcclxuICAgIH1cclxuICAgIC8qKlx1NUYwMFx1NTlDQlx1NEVBNFx1NEU5Mlx1RkYwQ1x1NzUzMVx1NUJBMlx1NjIzN1x1N0FFRlVJXHU1QzQyXHU5NzYyXHU1M0QxXHU4RDc3Ki9cclxuICAgIHB1YmxpYyBPbkludGVyYWN0KHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICBpZiAodGhpcy5tX09iamVjdC5pc1J1bm5pbmdDbGllbnQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLkludGVyYWN0SW1wbGVtZW50KHBsYXllciwgaW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuRnVuY3Rpb24oQ29yZS5TZXJ2ZXIpXHJcbiAgICBwcm90ZWN0ZWQgSW50ZXJhY3RJbXBsZW1lbnQocGxheWVyOlBsYXllciwgaW5kZXg6bnVtYmVyKTp2b2lke1xyXG4gICAgICAgIHRoaXMuRG9PblNlcnZlcihwbGF5ZXIsIGluZGV4KTtcclxuICAgICAgICB0aGlzLkRvT25DbGllbnQocGxheWVyLCBpbmRleCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMlx1NjIzN1x1N0FFRlx1ODlFNlx1NTNEMVx1RkYwQ1x1NTcyOFx1NTNEMVx1NzUxRlx1NEVBNFx1NEU5Mlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBAQ29yZS5GdW5jdGlvbihDb3JlLkNsaWVudClcclxuICAgIHByb3RlY3RlZCBEb09uQ2xpZW50KHBsYXllcjpQbGF5ZXIsIGluZGV4Om51bWJlcik6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZygnXHU1QkEyXHU2MjM3XHU3QUVGXHU0RUE3XHU3NTFGXHU0RUE0XHU0RTkyXHVGRjBDXHU3M0E5XHU1QkI2JywgcGxheWVyKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY3MERcdTUyQTFcdTdBRUZcdTg5RTZcdTUzRDFcdUZGMENcdTU3MjhcdTUzRDFcdTc1MUZcdTRFQTRcdTRFOTJcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgQENvcmUuRnVuY3Rpb24oQ29yZS5TZXJ2ZXIpXHJcbiAgICBwcm90ZWN0ZWQgRG9PblNlcnZlcihwbGF5ZXI6UGxheWVyLCBpbmRleDpudW1iZXIpOnZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1x1NjcwRFx1NTJBMVx1N0FFRlx1NEVBN1x1NzUxRlx1NEVBNFx1NEU5Mlx1RkYwQ1x1NzNBOVx1NUJCNicsIHBsYXllcilcclxuICAgIH1cclxufVxyXG4iLCAiXHVGRUZGXHJcbi8qKlxyXG4gKiBBVVRPIEdFTkVSQVRFIEJZIFVJIEVESVRPUi5cclxuICogV0FSTklORzogRE8gTk9UIE1PRElGWSBUSElTIEZJTEUsTUFZIENBVVNFIENPREUgTE9TVC5cclxuICogQVVUSE9SOiBcdTYyNjdcdTdCMTRcdTdFQ0ZcdTVFNzRcclxuICogVUk6IFVJL0RlZmF1bHRVSS51aVxyXG4gKiBUSU1FOiAyMDIzLjA4LjA1LTAwLjI5LjI5XHJcbiovXHJcblxyXG5cclxuXHJcbkBVSS5VSUNhbGxPbmx5KCdVSS9EZWZhdWx0VUkudWknKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0VUlfR2VuZXJhdGUgZXh0ZW5kcyBVSS5VSUJlaGF2aW9yIHtcclxuXHRcblxyXG4gXHJcblx0LyoqXHJcblx0KiBvblN0YXJ0IFx1NEU0Qlx1NTI0RFx1ODlFNlx1NTNEMVx1NEUwMFx1NkIyMVxyXG5cdCovXHJcblx0cHJvdGVjdGVkIG9uQXdha2UoKSB7XHJcblx0fVxyXG5cdCBcclxufVxyXG4gIiwgIlx1RkVGRlxyXG4vKipcclxuICogQVVUTyBHRU5FUkFURSBCWSBVSSBFRElUT1IuXHJcbiAqIFdBUk5JTkc6IERPIE5PVCBNT0RJRlkgVEhJUyBGSUxFLE1BWSBDQVVTRSBDT0RFIExPU1QuXHJcbiAqIEFVVEhPUjogXHU2MjY3XHU3QjE0XHU3RUNGXHU1RTc0XHJcbiAqIFVJOiBVSS9Nb25zdEluZm9VSS51aVxyXG4gKiBUSU1FOiAyMDIzLjA4LjA1LTAwLjI5LjI5XHJcbiovXHJcblxyXG5cclxuXHJcbkBVSS5VSUNhbGxPbmx5KCdVSS9Nb25zdEluZm9VSS51aScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0SW5mb1VJX0dlbmVyYXRlIGV4dGVuZHMgVUkuVUlCZWhhdmlvciB7XHJcblx0XG5cclxuIFxyXG5cdC8qKlxyXG5cdCogb25TdGFydCBcdTRFNEJcdTUyNERcdTg5RTZcdTUzRDFcdTRFMDBcdTZCMjFcclxuXHQqL1xyXG5cdHByb3RlY3RlZCBvbkF3YWtlKCkge1xyXG5cdH1cclxuXHQgXHJcbn1cclxuICJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQU1PLElBQU0sY0FBTixNQUF3QztBQUFBLEVBTTdCLGFBQXNCLENBQUM7QUFBQSxFQUN2QixhQUE0QixvQkFBSSxJQUFlO0FBQUEsRUFDL0MsU0FBc0Msb0JBQUksSUFBSTtBQUFBLEVBSXhELFlBQVksV0FBNEI7QUFDOUMsUUFBSSxhQUFvQjtBQUN4QixTQUFLLGFBQWEsSUFBSSxNQUFNLFVBQVUsU0FBUyxVQUFVO0FBRXpELGFBQVEsSUFBSSxHQUFHLElBQUksS0FBSyxXQUFXLFFBQVEsS0FBSTtBQUM5QyxXQUFLLFdBQVcsS0FBSyxDQUFDO0FBQUEsSUFDdkI7QUFDQSxRQUFJLFNBQVMsVUFBVSxHQUFHO0FBQzFCLGFBQVEsSUFBSSxHQUFHLElBQUksUUFBUSxL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
