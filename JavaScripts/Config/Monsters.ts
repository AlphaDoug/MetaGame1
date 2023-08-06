import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["id","name","maxHP","level","atk","modelGuid"],["","","","","",""],[1,"蜘蛛",100,2,1,"192569"],[2,"兔子",200,2,1,"138268"],[3,"麋鹿",300,2,1,"126030"]];
export interface IMonstersElement extends IElementBase{
 	/**怪物ID*/
	id:number
	/**怪物名字*/
	name:string
	/**最大血量*/
	maxHP:number
	/**等级*/
	level:number
	/**攻击力*/
	atk:number
	/**预制体Guid*/
	modelGuid:string
 } 
export class MonstersConfig extends ConfigBase<IMonstersElement>{
	constructor(){
		super(EXCELDATA);
	}

}