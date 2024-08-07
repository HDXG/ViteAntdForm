
import {  defineComponent, PropType, watch } from 'vue';
import {  FormItemType } from './FormConfig/public-index';
import { Button, CheckboxGroup, DatePicker, Form,FormItem,Input,InputNumber,message,RadioGroup,RangePicker,Select, Textarea} from 'ant-design-vue'
import 'dayjs/locale/zh-cn';
import { timeFormat } from '../../utils/dateTime';
function renderFormItem(formItems: any[],formConfig:any) {
    return formItems.map((ele: any,index:number) => 
        {
            //IsItDisplayed 判断表单项是否显示
            if(ele.IsItDisplayed){
                return (<></>);
            }
            return (<FormItem  label={ele?.label} name={ele?.fileId}
                onClick={() =>
                    formConfig.formDesignAntSelect=index
                }
                class={formConfig?.formDesignAndCreate?
                    formConfig.formDesignAntSelect==index?'formItemDivSelect':'formItemDiv':''}
                wrapper-col={ele?.wrapperCol}
                rules={formConfig?.rules?ele?.FormRules:[]}>
                    {createFormItem(ele)}
            </FormItem>)
        })
}

function createFormItem(formItem: any){
    if(formItem.type === FormItemType.Input){
        return (<Input v-model:value={formItem.value}
            bordered={formItem?.bordered}
            placeholder={formItem.placeholder} 
            allow-clear={formItem.clear}
            onChange={formItem?.onChange}
            disabled={formItem.disabled}
            prefix={formItem?.prefix!=null?<img src={formItem.prefix} class='InputIcon' />:null}
            suffix={formItem?.suffix!=null?<img src={formItem.suffix} class='InputIcon' />:null}
            >
        </Input>)
    }
    //文本域内容
    if(formItem.type===FormItemType.Textarea){
        return (<Textarea  v-model:value={formItem.value}
            bordered={formItem?.bordered}
            placeholder={formItem.placeholder} 
            showCount={formItem.showCount}
            auto-size={formItem.autoSize}
            onChange={formItem?.onChange}
            disabled={formItem.disabled}
            >
        </Textarea>)
    }
    if(formItem.type === FormItemType.Radio) {
        return (<RadioGroup
            v-model:value={formItem.value}
            options={formItem.options}  name={formItem.name} onChange={formItem?.onChange}></RadioGroup>)
    } 
    //选择框
    if(formItem.type===FormItemType.Select){
        return(<Select v-model:value={formItem.value} mode={formItem.mode} 
            options={formItem.options} 
            onChange={formItem?.onChange} 
            suffixIcon={formItem?.suffixIcon!=null?<img src={formItem.suffixIcon} class='InputIcon' />:null}>
                
            </Select>)
    }
    //日期选择
    if(formItem.type===FormItemType.DatePicker){
        if(formItem.DateType==1){
            return(<RangePicker v-model:value={formItem.value} 
                picker={formItem?.picker}
                bordered={formItem.bordered}
                presets={formItem?.presets}
                onChange={formItem?.onChange} 
                suffixIcon={formItem?.suffixIcon!=null?<img src={formItem.suffixIcon} class='InputIcon' />:null}
            ></RangePicker>)
        }
        else
            return(<DatePicker v-model:value={formItem.value} 
                picker={formItem?.picker}
                bordered={formItem.bordered}
                presets={formItem?.presets}
                onChange={formItem?.onChange} 
                suffixIcon={formItem?.suffixIcon!=null?<img src={formItem.suffixIcon} class='InputIcon' />:null}
            ></DatePicker>)
    }
    //数字文本框
    if(formItem.type===FormItemType.InputNumber){
        return(<InputNumber v-model:value={formItem.value} 
            min={formItem.min}
            max={formItem.max}
            bordered={formItem.bordered}
            onChange={formItem?.onChange} 
            prefix={formItem?.prefix!=null?<img src={formItem.prefix} class='InputIcon' />:null}
        ></InputNumber>)
    }
    //多选框
    if(formItem.type===FormItemType.Checkbox){
        return (<CheckboxGroup v-model:value={formItem.value}  
            options={formItem.options} 
            onChange={formItem?.onChange}
            indeterminate={formItem?.indeterminate}>
            </CheckboxGroup>)
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
        const finishFailed=(errorInfo:any)=>{
            console.log(2);
            console.log(errorInfo);
            message.error(errorInfo.errorFields[0].errors);
            // if (props.onFormFinishFailed) {  
            //     props.onFormFinishFailed(errorInfo);  
            // }  
        } 
        watch(props.options,(newValue:any[])=>{
            if(Object.keys(props.value).length==0)
                return;
            newValue.map((item)=>{
                switch(item.type as FormItemType){
                     //日期判断
                    case FormItemType.DatePicker:
                        if(item.value!='')
                        {
                            var dateTime:any=null;
                            if(item.DateType==1){
                                dateTime=timeFormat(item.value,1);
                            }
                            else
                                dateTime=timeFormat(item.value);
                            props.value[item.fileId]=dateTime;
                        }
                        break;
                    default:
                        props.value[item.fileId]=item.value; 
                        break;
                }
            })
        });
        return ()=>(<Form   name="basic" model={props.value} 
            label-col={props.config?.labelCol}
            wrapper-col={props.config?.wrapperCol}
            layout={props.config?.layout}
            autocomplete={props.config?.autocomplete}
            disabled={props.config?.disabled}
            onFinish={handleSubmit}
            onFinishFailed={finishFailed} > 
                {renderFormItem(props.options,props.config)}
        </Form>);
    },
});