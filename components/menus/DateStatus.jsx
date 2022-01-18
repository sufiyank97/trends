import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {DATE,DATES_BTN} from './../AppConstants'
import DatePicker from 'react-datepicker'
import Close from '../../public/ic-close.svg'
const DateStatus = () => {
    const {state,dispatch}=useContext(AppStore)
    const {dates}=state
    const [radio1,setradio1]=useState(null)
    const [radio2,setradio2]=useState(null)
    const [radio3,setradio3]=useState(null)
    const [startDate1, setStartDate1] = useState(null);
    const [startDate2, setStartDate2] = useState(null);
    const [startDate3, setStartDate3] = useState(null);
    const [startDate4, setStartDate4] = useState(null);
    const [startDate5, setStartDate5] = useState(null);
    const [startDate6, setStartDate6] = useState(null);
    useEffect(()=>{
        setradio1(dates.radio1)
        setradio2(dates.radio2)
        setradio3(dates.radio3)
        setStartDate1(dates.date1)
        setStartDate2(dates.date2)
        setStartDate3(dates.date3)
        setStartDate4(dates.date4)
        setStartDate5(dates.date5)
        setStartDate6(dates.date6)
    },[dates])
    useEffect(()=>{
        if(radio1!=="date range"){
            dispatch({
                type:DATES_BTN,
                payload:{...dates,date1:null,date2:null}
            })
        }else if(radio2!=="date range"){
            dispatch({
                type:DATES_BTN,
                payload:{...dates,date3:null,date4:null}
            })
        }else if(radio3!=="date range"){
            dispatch({
                type:DATES_BTN,
                payload:{...dates,date5:null,date6:null}
            })
        }
    },[radio1,radio2,radio3])
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <Close className="svg1 flex self-end cursor-pointer" onClick={()=>dispatch({type:DATE,payload:false})}/>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">new in</h1>
                <div className="grid grid-cols-2 gap-2 my-2 ">
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input checked={radio1==="all"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio1:'all'
                                }
                            }
                            )} type="radio" name="" id="all"  style={{accentColor:'yellow'}}/>
                            all
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio1==="past week"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio1:'past week'
                                }
                            }
                            )} type="radio" name="" id="past week"  style={{accentColor:'yellow'}}/>
                                past week
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio1==="past month"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio1:'past month'
                                }
                            }
                            )} type="radio" name="" id="past month"  style={{accentColor:'yellow'}}/>
                            past month
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio1==="past 3 months"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio1:'past 3 months'
                                }
                            }
                            )} type="radio" name="" id="past 3 months"  style={{accentColor:'yellow'}}/>
                            past 3 months
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio1==="date range"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio1:'date range'
                                }
                            }
                            )} type="radio" name="" id="date range"  style={{accentColor:'yellow'}}/>
                            date range
                        </label>
                    </div>
                    <div className="flex items-center">
                        <DatePicker className="mx-2 p-2 w-76 bg-transparent border rounded outline-none border-secondary9 py-2 px-3"  placeholderText='From' selected={startDate1} onChange={(date) => dispatch({
                            type:DATES_BTN,
                            payload:{...dates,date1:date}
                        })} />
                    </div>
                    <div className="flex items-center">
                        <DatePicker className="p-2 w-76 bg-transparent border rounded outline-none border-secondary9 py-2 px-3"  placeholderText='To' selected={startDate2} onChange={(date) => dispatch({
                            type:DATES_BTN,
                            payload:{...dates,date2:date}
                        })} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-6">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">first sell out</h1>
                <div className="grid grid-cols-2 gap-2 my-2 ">
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input checked={radio2==="all"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio2:'all'
                                }
                            }
                            )} type="radio" name="" id="all"  style={{accentColor:'yellow'}}/>
                            all
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio2==="past week"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio2:'past week'
                                }
                            }
                            )} type="radio" name="" id="past week"  style={{accentColor:'yellow'}}/>
                                past week
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio2==="past month"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio2:'past month'
                                }
                            }
                            )} type="radio" name="" id="past month"  style={{accentColor:'yellow'}}/>
                            past month
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio2==="past 3 months"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio2:'past 3 months'
                                }
                            }
                            )} type="radio" name="" id="past 3 months"  style={{accentColor:'yellow'}}/>
                            past 3 months
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio2==="date range"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio2:'date range'
                                }
                            }
                            )} type="radio" name="" id="date range"  style={{accentColor:'yellow'}}/>
                            date range
                        </label>
                    </div>
                    <div className="flex items-center">
                        <DatePicker className="mx-2 p-2 w-76 bg-transparent border rounded outline-none border-secondary9 py-2 px-3"  placeholderText='From' selected={startDate3} onChange={(date) => dispatch({
                            type:DATES_BTN,
                            payload:{...dates,date3:date}
                        })} />
                    </div>
                    <div className="flex items-center">
                        <DatePicker className="p-2 w-76 bg-transparent border rounded outline-none border-secondary9 py-2 px-3"  placeholderText='To' selected={startDate4} onChange={(date) => dispatch({
                            type:DATES_BTN,
                            payload:{...dates,date4:date}
                        })} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">First Discounted</h1>
                <div className="grid grid-cols-2 gap-2 my-2 ">
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input checked={radio3==="all"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio3:'all'
                                }
                            }
                            )} type="radio" name="" id="all"  style={{accentColor:'yellow'}}/>
                            all
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio3==="past week"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio3:'past week'
                                }
                            }
                            )} type="radio" name="" id="past week"  style={{accentColor:'yellow'}}/>
                                past week
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio3==="past month"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio3:'past month'
                                }
                            }
                            )} type="radio" name="" id="past month"  style={{accentColor:'yellow'}}/>
                            past month
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio3==="past 3 months"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio3:'past 3 months'
                                }
                            }
                            )} type="radio" name="" id="past 3 months"  style={{accentColor:'yellow'}}/>
                            past 3 months
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <label  className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input  checked={radio3==="date range"} onChange={()=>dispatch({
                                type:DATES_BTN,
                                payload:{
                                    ...dates,
                                    radio3:'date range'
                                }
                            }
                            )} type="radio" name="" id="date range"  style={{accentColor:'yellow'}}/>
                            date range
                        </label>
                    </div>
                    <div className="flex items-center">
                        <DatePicker className="mx-2 p-2 w-76 bg-transparent border rounded outline-none border-secondary9 py-2 px-3"  placeholderText='From' selected={startDate5} onChange={(date) => dispatch({
                            type:DATES_BTN,
                            payload:{...dates,date5:date}
                        })} />
                    </div>
                    <div className="flex items-center">
                        <DatePicker className="p-2 w-76 bg-transparent border rounded outline-none border-secondary9 py-2 px-3"  placeholderText='To' selected={startDate6} onChange={(date) => dispatch({
                            type:DATES_BTN,
                            payload:{...dates,date6:date}
                        })} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateStatus
