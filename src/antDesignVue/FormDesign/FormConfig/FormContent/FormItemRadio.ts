import { FormItemOption, FormItemType } from "../FormItemType.ts";
import { FormItem } from "../FormItem.ts";

export class FormItemRadio extends FormItem{
    type: FormItemType=FormItemType.Radio;
    //指定当前是否选中
    checked:boolean=false;
    options:FormItemOption[]|string[]|number[]|undefined;
    name:string='radioGroup';
    onChange:(any)=>void=function(){};
}