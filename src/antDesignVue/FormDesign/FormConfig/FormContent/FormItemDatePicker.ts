import { FormItemType } from "../FormItemType.ts";
import { FormItem } from "../FormItem.ts";
import dayjs from "dayjs";
/*
 * 表单日期内容
 */
export class FormItemDatePicker extends FormItem{
    type: FormItemType=FormItemType.DatePicker;
    //边框内容
    bordered:boolean=true;
    //0--DatePicker  1--RangePicker
    DateType:number=0;
    //预设范围
    presets?:DatePickerPresets[];
    //日期选择弹出的位置
    placement:DatePickerTanPlacement=DatePickerTanPlacement.bottomLeft;
    //日期选择
    picker?:FormItemDatePickerType|any=null;
    //后缀图标
    suffix?:string|any=null;
   //事件内容
   onChange:(any)=>void=function(){};
}
/***
 * 返回预设时间默认值
 */
export function DatePickerPresetsData(data:DatePickerPresets[]|any=null){
    return data==null?[ { label: '七天前', value: [dayjs().add(-7, 'd'), dayjs()] },
    { label: '14天前', value: [dayjs().add(-14, 'd'), dayjs()] },
    { label: '30天前', value: [dayjs().add(-30, 'd'), dayjs()] },
    { label: '90天前', value: [dayjs().add(-90, 'd'), dayjs()] }] as DatePickerPresets[]
    :data as DatePickerPresets[];
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

export class DatePickerPresets{
    label:string='';
    value:any='';
}
