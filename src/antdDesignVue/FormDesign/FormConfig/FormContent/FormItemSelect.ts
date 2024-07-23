import { FormItemOption, FormItemType } from "../FormItemType.ts";
import { FormItem } from "../FormItem.ts";

export enum FormItemSelectMode{
    multiple='multiple',
    tags='tags',
    combobox='combobox'
}

export class FormItemSelect extends FormItem{
    type: FormItemType=FormItemType.Select;
    optionFilterProp:string='';
    //清除
    allowClear:boolean=false;
    //边框内容
    bordered:boolean=true;
    //option内容
    options:FormItemOption[]|undefined;
    //设置Select模式内容 
    mode:FormItemSelectMode=FormItemSelectMode.combobox;

    onChange:(any)=>void=function(){};
}