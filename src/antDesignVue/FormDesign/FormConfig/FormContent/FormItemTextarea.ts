import { FormItemType } from "../FormItemType.ts";
import { FormItem } from "../FormItem.ts";


export class FormItemTextareaType{
    minRows:number=4;
    maxRows:number=4;
}

export class FormItemTextarea extends FormItem{
    type: FormItemType=FormItemType.Textarea;
    showCount:boolean=true;
    maxlength:number=200;
    allowClear:boolean=true;
    autoSize:FormItemTextareaType | any;
}