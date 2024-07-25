//配置antd-design组件名称内容
export enum FormItemType{
    Input,//文本框
    InputNumber,//数字框
    Select,
    Textarea,//文本域
    Radio,//单选按钮 
    Checkbox,//多选框 
    Switch, //开关选择类型
    DatePicker,
}

export class FormItemOption{
    value:any;
    label:any;
    disabled?:boolean=false;
}