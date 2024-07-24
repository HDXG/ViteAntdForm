
export class FormConfig {
    autocomplete:string='autocomplete';

    //	表单布局
    layout:FormLayout=FormLayout.horizontal
    //label宽度
    labelcol:FormLabelWrapperCol|any|{style:{width:'150px'}}=new FormLabelWrapperCol();
    //
    wrapperCol:FormLabelWrapperCol|any|{style:{width:'150px'}}=new FormLabelWrapperCol();

    //是否禁用 true=禁用
    disabled:boolean=false;
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