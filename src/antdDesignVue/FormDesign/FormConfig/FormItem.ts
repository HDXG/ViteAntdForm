import { FormRules } from "./FormContent/FormRules";
import { FormItemType } from "./FormItemType";

export class FormItem{
   //类型
   type:FormItemType=FormItemType.Input;
   //左侧显示label内容
   label:string='';
   // 绑定字段
   fileId: string = '';
   // 值
   value: any = '';
   //name内容

   
   // 是否禁用
   disabled: boolean = false;
    //是否显示
   IsItDisplayed:boolean=true;
   //placeholder 框内可显示文字
   placeholder: string = '';

   FormRules?:FormRules[];
}