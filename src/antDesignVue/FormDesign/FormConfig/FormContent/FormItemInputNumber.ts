import { FormItem } from "../FormItem";




/**
 * Form组件数字框
 */
export class FormItemInputNumber extends FormItem{
    //最小数
    min:number=0;

    //最大数默认值
    max:number=1000;

    step:number=0.001;

    //边框
    bordered:boolean=true;

    //前缀图标
    prefix?:string | any=null;

}