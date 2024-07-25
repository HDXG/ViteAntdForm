import { FormItemType } from "../FormItemType.ts";
import { FormItem } from "../FormItem.ts";
export class FormItemDatePicker extends FormItem{
    type: FormItemType=FormItemType.DatePicker;
    //边框内容
    bordered:boolean=true;

    //0DatePicker  1--RangePicker
    DateType:number=0;

    //日期选择弹出的位置
    placement:DatePickerTanPlacement=DatePickerTanPlacement.bottomLeft;
    //日期选择
    picker?:FormItemDatePickerType|any=null;
    //后缀图标
    suffix?:string|any=null;

   //事件内容
   onChange:(any)=>void=function(){};
}

export enum FormItemDatePickerType{
    week,
    month,
    quarter,
    year
}

export enum DatePickerTanPlacement{
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
}