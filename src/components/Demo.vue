<template>
    <a-layout style="width: 100%;"  :style="{  height: '70px', position: 'fixed'}">
        <a-layout-header class="header">
            <h1 style="color: #fff;">Ant-Design-Vue 表单设计器</h1>
        </a-layout-header>
    </a-layout>
    <a-row style="position: fixed;width: 100%;margin-top: 70px;">
        <a-col :span="4"  >
            <LayoutSide style="background: #fff">
                <h1 style="height: 50px;text-align: center;line-height: 50px;;">组件内容</h1>
                <a-space  :size="[12, 24]" wrap >
                    <template v-for="(item,_index) in antDesignOption" :key="_index">
                        <a-tooltip :title="item.title">
                            <a-button  type="dashed" @click="handleDesignContext(item.type)">
                                <img :src="item.icon" class="Icon" alt="">
                                <span class="inline-block" >{{ item.title }}</span>
                            </a-button>
                        </a-tooltip>
                    </template>
                </a-space>
            </LayoutSide>
        </a-col>
        <a-col :span="14" >
            <a-layout style="padding: 0 5px 5px;height:800px; overflow-y: auto;">
                <a-layout-content style="background:#fff;padding:20px;overflow:inherit" >
                    <h1 >组件显示</h1>
                    <DynamicForm :options="formOption" :config="formConfig" :value="formState" :onFormFinish="handleButton"  />
                </a-layout-content>
            </a-layout>
        </a-col>
        <a-col :span="6"   >
            <a-layout style="padding: 0 5px 5px;">
                <a-layout-content style="background:#fff;min-height:100vh;">
                    <a-tabs v-model:activeKey="activeKey">
                        <a-tab-pane key="1">
                            <template #tab>
                                <img :src="SVG_ICONS.design.formConfig" width="20" height="20" />
                                <span>表单配置</span>
                            </template>
                            <a-form layout="vertical" >
                                <a-form-item label="布局方式">
                                    <a-radio-group v-model:value="formConfig.layout" :options="formConfigLayout" 
                                        @change="formConfig.layout=$event.target.value;">
                                    </a-radio-group>
                                    <hr>
                                </a-form-item>
                                <a-form-item label="操作">
                                    <a-checkbox v-model:checked="formConfig.disabled">禁用</a-checkbox>
                                    <a-checkbox v-model:checked="formConfig.rules">表单验证</a-checkbox>
                                    <hr>
                                </a-form-item>
                                <a-form-item label="标签布局">
                                    <a-radio-group @change="handleLabelWidthValue($event.target.value)" v-model:value="formConfigLabelDesign.labelWidthValue" button-style="solid">
                                        <a-radio-button value="固定">固定</a-radio-button>
                                        <a-radio-button value="栅格">栅格</a-radio-button>
                                    </a-radio-group>
                                    <hr>
                                </a-form-item>
                                <a-form-item label="标签宽度px" v-if="formConfigLabelDesign.labelWidthValue=='固定'">
                                    <a-Input-number width="100px" @change="handleLabelWidthSpanOffset"  min="0" v-model:value="formConfigLabelDesign.labelWidth" 
                                    addon-after="px"></a-Input-number>
                                    <hr>
                                </a-form-item>
                                <a-form-item label="labelCol" v-if="formConfigLabelDesign.labelWidthValue=='栅格'">
                                    <a-slider   v-model:value="formConfigLabelDesign.labelSpan" 
                                        @change="handleLabelWidthSpanOffset" :max="24" />
                                        <hr>
                                </a-form-item>
                                <a-form-item label="offset" v-if="formConfigLabelDesign.labelWidthValue=='栅格'">
                                    <a-input-number @change="handleLabelWidthSpanOffset" v-model:value="formConfigLabelDesign.labelSpan" min="0"></a-input-number>
                                    <hr>
                                </a-form-item>
                                <a-form-item label="span" v-if="formConfigLabelDesign.labelWidthValue=='栅格'">
                                    <a-input-number v-model:value="formConfigLabelDesign.labelOffSet"
                                        @change="handleLabelWidthSpanOffset"  min="0">
                                    </a-input-number>
                                    <hr>
                                </a-form-item>
                            </a-form>
                        </a-tab-pane>
                        <a-tab-pane key="2">
                            <template #tab>
                                <img :src="SVG_ICONS.design.formOption" width="20" height="20" />
                                <span>组件配置</span>
                            </template>
                                Tab 2
                        </a-tab-pane>
                    </a-tabs>
                </a-layout-content>
            </a-layout>
        </a-col>
    </a-row>
    
</template>
<script lang="ts" setup>
import { LayoutSider as LayoutSide} from 'ant-design-vue'
import { reactive, ref, watch} from 'vue';
import SVG_ICONS from '../icons/SVG_ICONS.ts';
import { FormItemType } from '../antDesignVue/public-index.ts';
import  {antDesignContext,antDesignFormConfig,
    antDesignContextService} from './demo.ts'
import   {FormConfig,DatePickerPresetsData,FormRules,FormItemOption,
    FormLabelWrapperCol,
} from '../antDesignVue/public-index'
import { timeFormat } from '../utils/dateTime'
import DynamicForm from '../antDesignVue/FormDesign/antForm'
const activeKey = ref('1');



//------------------表单配置区域-------------------------------------------------------
const formConfigLayout=ref(["horizontal","vertical","inline"]);


//表单配置
const formConfig=reactive<FormConfig | any>({
    layout:'horizontal',
    labelCol:{style:{width:'150px'}},
    disabled:false,
    rules:true,
    formDesignAndCreate:true,
    formDesignAntSelect:-1
});

watch(formConfig,(newValue)=>{
    console.log(newValue.formDesignAntSelect);
})

//Form组件配置label宽度
const formConfigLabelDesign=reactive<antDesignFormConfig>({
    labelWidthValue: '固定',
    labelWidth:100,
    labelSpan:4,
    labelOffSet:0,
    
});
//标签布局方法
const handleLabelWidthValue=(value)=>{
    if(value=='固定'){
        formConfig.labelCol={style:{width:`${formConfigLabelDesign.labelWidth}px`}}
    }else{
        formConfig.labelCol={offset:formConfigLabelDesign.labelOffSet,span:formConfigLabelDesign.labelSpan} as FormLabelWrapperCol
    }
}
//标签布局中 固定和栅栏 的方法汇总
const handleLabelWidthSpanOffset=()=>{
    if(formConfigLabelDesign.labelWidthValue=='固定'){
        handleLabelWidthValue('固定');
    }else{
        handleLabelWidthValue('栅格');
    }
}




//-----------------------表单中心区域-----------------------------------------------------------
const formState=reactive<any>({});
const formOption=reactive<any>([
{
    type:FormItemType.Input,
    label:'测试内容',
    fileId:'textarea',
    value:formState.textarea,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请输入测试内容'}] as FormRules[],
    prefix:SVG_ICONS.setup.exitfullscreennew,
    suffix:SVG_ICONS.setup.fullscreennew,
    onChange:(value)=>{
        formState.textarea=value.target.value
    }
},
{
    type:FormItemType.Input,
    label:'测试内容2',
    fileId:'textarea1',
    value:formState.textarea1,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请输入测试内容2'}] as FormRules[],
    onChange:(value)=>{
        formState.textarea1=value.target.value;
    },
},
{
    type:FormItemType.Radio,
    label:"性别",
    fileId:'resource',
    value:formState.resource,
    options:[{value:'1',label:'男'},{value:'0',label:'女'}] as FormItemOption[],
    FormRules:[{required:true,message:'请选择性别'}] as FormRules[],
},
{
    type:FormItemType.Checkbox,
    label:'职业',
    fileId:'career',
    value:formState.career,
    options:[{value:-1,label:'全选'},{value:1,label:'牛马'},{value:2,label:'小牛马'},
        {value:3,label:'大牛马'},{value:4,label:'不是牛马'}] as FormItemOption[],
    // FormRules:[{required:true,message:'请选择职业'}] as FormRules[],
    // indeterminate:true,
    onChange:(value)=>{
        console.log(value)
    }
},
{
    type:FormItemType.InputNumber,
    label:'金额',
    fileId:'money',
    value:formState.money,
    min:0,
    max:100,
    FormRules:[{required:true,message:'请输入金额'}] as FormRules[],
},
{
    type:FormItemType.DatePicker,
    label:'日期选择',
    fileId:'Date',
    value:formState.Date,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请选择日期'}] as FormRules[],
    onChange:(value)=>{
        formState.Date=timeFormat(value)
    }
},
{
    type:FormItemType.DatePicker,
    label:'日期开始结束',
    DateType:1,
    fileId:'BeginDate',
    value:formState.BeginDate,
    presets:DatePickerPresetsData(),
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请选择开始和结束日期'}] as FormRules[],
    onChange:(value)=>{
        formState.BeginDate=timeFormat(value,1)
    }
},
{
    type:'submit',
    wrapperCol:{ span:12, offset:6}  as FormLabelWrapperCol
}
])

//表单提交
const handleButton=(value)=>{
    console.log(value);
}



//组件内容区域--------------------
const antDesignOption=reactive<antDesignContext[]>([
    {
        title:'文本框',
        icon:SVG_ICONS.design.input,
        type:FormItemType.Input
    },
    {
        title:'文本域',
        icon:SVG_ICONS.design.textArea,
        type:FormItemType.Textarea
    },
    {
        title:'数字框',
        icon:SVG_ICONS.design.inputNumber,
        type:FormItemType.InputNumber
    },
    {
        title:'选择框',
        icon:SVG_ICONS.design.select,
        type:FormItemType.Select
    },
    {
        title:'单选按钮',
        icon:SVG_ICONS.design.radio,
        type:FormItemType.Radio
    },
    {
        title:'复选按钮',
        icon:SVG_ICONS.design.check,
        type:FormItemType.Checkbox
    }
])
//添加组件事件
const handleDesignContext=(item)=>{
    const antDesignService=new antDesignContextService();
    formOption.push(antDesignService.AddContext(item));
    console.log(formOption);
}



</script>
<style  scoped>
:deep(.ant-space){
    width: 310px;
}
h1{
    font-weight: bold;
    text-align: center
}
    .site-layout-background {
        background: #fff;
    }
.Icon{
    width:20x;
    height:22px;
    line-height:32px;  
    display: inline-block;  
    vertical-align: middle;
    margin-right:5px;
}
.inline-block{
    display: inline-block;  
    vertical-align: middle;
}
</style>