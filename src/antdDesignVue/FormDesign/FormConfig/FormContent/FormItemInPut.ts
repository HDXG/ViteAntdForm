import { FormItemType } from "../FormItemType.ts";
import { FormItem } from "../FormItem.ts";

export class FormItemInPut extends FormItem{
    type: FormItemType=FormItemType.Input;
    bordered:boolean=true;
    showCount:boolean=true;
    maxlength:number=100;
}