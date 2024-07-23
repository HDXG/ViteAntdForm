
import {  defineComponent, PropType, watch } from 'vue';
import {  FormConfig, FormItemType } from './FormConfig/public-index';
import { Button, CheckboxGroup, Form,FormItem,Input,message,RadioGroup,Select} from 'ant-design-vue'

function renderFormItem(formItems: any[]) {
    return formItems.map((ele: any) => 
        {
            return (<FormItem label={ele?.label} name={ele?.fileId}
                wrapper-col={ele?.wrapperCol}
                rules={ele?.FormRules}>{createFormItem(ele)}
            </FormItem>)
        })
}

function createFormItem(formItem: any){
    if(formItem.type === FormItemType.Input)
        return (<Input v-model:value={formItem.value} placeholder={formItem.placeholder} onChange={formItem?.onChange}></Input>)
    if(formItem.type === FormItemType.Radio) 
        return (<RadioGroup
        v-model:value={formItem.value}
        options={formItem.options}  name={formItem.name} onChange={formItem?.onChange}></RadioGroup>)
    if(formItem.type===FormItemType.Checkbox)
        return (<CheckboxGroup
              v-model:value={formItem.value}   options={formItem.options}  onChange={formItem?.onChange}
        ></CheckboxGroup>)
    if(formItem.type===FormItemType.Select){
        return(<Select
            v-model:value={formItem.value}  mode={formItem.mode} options={formItem.options} onChange={formItem?.onChange} 
            ></Select>)
    }
    //提交按钮内容
    if(formItem.type==='submit'){
        return(
            <Button type='primary'  html-type="submit">提交</Button> 
            // {/* <Button type='primary' class="marginLeftButton" >重置</Button> */}
        )
    }
    return (<div>1</div>)
}


export default  defineComponent({
    name:'DynamicForm',
    props: {  
        options: {  type: Array as PropType<any[]>, required: true,},
        config:{type:null,required:true},
        value:{type:null,required:true},
        onFormFinish: {  
            type: Function as PropType<(values: any) => void>,  
            required: false,  
          },  
        onFormFinishFailed: {  
            type: Function as PropType<(errorInfo: any) => void>,  
            required: false,  
          },  
      },  
    setup(props){
        //表单提交成功事件
        const handleSubmit = (values:any) => { 
            if (props.onFormFinish) {  
                props.onFormFinish(values);  
            }  
        };  
        //表单提交失败事件
        const handlefinishFailed=(errorInfo:any)=>{
            message.error(errorInfo.errorFields[0].errors);
            // if (props.onFormFinishFailed) {  
            //     props.onFormFinishFailed(errorInfo);  
            // }  
        }
        watch(props.options,(newValue:any[])=>{
            newValue.map((item)=>{
                props.value[item.fileId]=item.value; 
            })
        });
        const config=props.config as FormConfig;
        return ()=>(<Form   name="basic" model={props.value} 
            label-col={config?.labelcol}
            wrapper-col={config?.wrapperCol}
            layout={config?.layout}
            autocomplete={config?.autocomplete}
            onFinish={handleSubmit}
            onFinishFailed={handlefinishFailed} 
          >
            {renderFormItem(props.options)}
        </Form>);
    },
});