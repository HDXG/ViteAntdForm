import { FormItem } from "../FormItem";
import { FormItemOption } from "../FormItemType";

/**
 * 多选框配置中心
 */
export class FormItemCheckbox extends FormItem{

    options:FormItemOption[]=[];

    //全选属性
    indeterminate:boolean=false;

    onChange:(any)=>void=function(){};

}