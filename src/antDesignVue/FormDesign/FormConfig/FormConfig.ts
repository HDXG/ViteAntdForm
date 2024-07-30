
export class FormConfig {
    autocomplete:string='autocomplete';

    //	表单布局
    layout:FormLayout=FormLayout.horizontal
    //label宽度
    labelCol:FormLabelWrapperCol|any|{style:{width:'150px'}}=new FormLabelWrapperCol();
    //
    wrapperCol:FormLabelWrapperCol|any|{style:{width:'150px'}}=new FormLabelWrapperCol();

    //是否禁用 true=禁用
    disabled:boolean=false;

    //是否启用验证内容
    rules:boolean=true;

    //判断是表单设计器还是  创建表单false
    formDesignAndCreate:boolean=false;

    //表单设计器中选中的组件
    formDesignAntSelect:number=-1;
};

export class FormLabelWrapperCol{
    offset:number=0;
    span:number=6;
}

export enum FormLayout{
    horizontal='horizontal',//标签与组件一行
    vertical='vertical',//标签在组件上
    inline='inline'//Form组件为一行显示

}