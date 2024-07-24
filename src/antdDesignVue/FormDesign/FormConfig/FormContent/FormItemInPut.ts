import { FormItemType } from "../FormItemType.ts";
import { FormItem } from "../FormItem.ts";

export class FormItemInPut extends FormItem{
    type: FormItemType=FormItemType.Input;
    bordered:boolean=true;
    showCount:boolean=true;
    maxlength:number=100;

    //前缀图标
    prefix?:string|any=null;
    //后缀图标
    suffix?:string|any=null;

    //事件内容
    onChange:void=undefined;
}