import {Category} from "../categories/category";

export class Task {
	constructor(public id:number, public name:string, public description:string, public category:Category){}
}
