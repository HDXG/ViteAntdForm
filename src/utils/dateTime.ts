
import dayjs, { ConfigType } from 'dayjs'

/**
 * 获得当前时间
 */
export function getNowDate(formatValue:dateFormatEnum =dateFormatEnum.YYYYMMDD) {
  return timeFormat(null,0, formatValue);
}

/**
 * 返回格式化后的时间
 * @typeValue 0默认单个日期  1多个日期
 */
export function timeFormat(timeValue: ConfigType | any,typeValue:number=0,formatValue:dateFormatEnum =dateFormatEnum.YYYYMMDD) {
  if(typeValue==1){
     if(timeValue!=null){
      var dataTime:any=[];
      timeValue.map((item)=>{
        dataTime.push(dayjs(item).format(formatValue));
      })
      return dataTime;
     }
     else
      return [];
  }
  return dayjs(timeValue).format(formatValue);
}

export enum dateFormatEnum{
  YYYYMMDD='YYYY-MM-DD',
  HHMMSS='YYYY-MM-DD HH:mm:ss',
}

