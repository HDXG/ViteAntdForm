//配置antd-design组件名称内容
export enum FormItemType{
    Input = 'AInput',//文本框
    InputNumber = 'InputNumber',//数字框
    Select='Select',
    Textarea='textarea',//文本域
    Radio = 'Radio',//单选按钮 
    Checkbox = 'Checkbox',//多选框 
    Switch='switch', //开关选择类型
}

export class FormItemOption{
    value:any;
    label:any;
    disabled?:boolean=false;
}