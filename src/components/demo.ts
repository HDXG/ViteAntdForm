
import { FormItemInPut,  FormItemInputNumber,  FormItemRadio, FormItemSelect, FormItemTextarea, 
    FormItemType,FormItemCheckbox } from "../antDesignVue/public-index";

export class antDesignContext{
    title:string='';
    icon:string='';
    type:FormItemType=FormItemType.Input
};

/**
 * 根据组件内容的按钮点击，添加不同的表单配置内容
 */
export class antDesignContextService{
    
    AddContext(params:FormItemType) {
        console.log(params);
        switch(params){
            case FormItemType.Input:
                    var item=new FormItemInPut();
                    item.type=FormItemType.Input;
                    item.label="测试文本框";
                    item.placeholder='请输入内容';
                    return item;
                break;
            case FormItemType.InputNumber:
                    var itemInputNumber=new FormItemInputNumber();
                    itemInputNumber.type=FormItemType.InputNumber;
                    itemInputNumber.label='数字文本框';
                    return itemInputNumber;
                break;
            case FormItemType.Textarea:
                    var itemTextarea=new FormItemTextarea();
                    itemTextarea.type=FormItemType.Textarea;
                    itemTextarea.label='多行文本域';
                    return itemTextarea;
                break;
            case FormItemType.Select:
                    var itemSelect=new FormItemSelect();
                    itemSelect.label='选择框';
                    itemSelect.type=FormItemType.Select;
                    return itemSelect;
                break;
            case FormItemType.Radio:
                    var itemRadio=new FormItemRadio();
                    itemRadio.type=FormItemType.Radio;
                    itemRadio.label='单选按钮组';
                    itemRadio.options=[{label:'默认',value:'0'}];
                    return itemRadio;
                break;
            case FormItemType.Checkbox:
                    var itemCheck=new FormItemCheckbox();
                    itemCheck.type=FormItemType.Checkbox;
                    itemCheck.label='复选框按钮组';
                    itemCheck.options=[{label:'默认',value:'0'}];
                    return itemCheck;
                break;
            
        }
    }
}