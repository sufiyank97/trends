import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {MARKET,MARKETS_BTN,MARKETS_STATUS_BTN} from './../AppConstants'
import Close from '../../public/ic-close.svg'
const Markets = () => {
    const {state,dispatch}=useContext(AppStore)
    const {markets}=state
    const [arr,setArr]=useState([])
    const [arr1,setArr1]=useState([])
    const [arr2,setArr2]=useState([])
    const [arr3,setArr3]=useState([])
    useEffect(()=>{
        setArr(markets.arrm_init)
        setArr1(markets.arr1m_init)
        setArr2(markets.arr2m_init)
        setArr3(markets.arr3m_init)
    },[markets])
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <Close className="svg1 flex self-end cursor-pointer" onClick={()=>dispatch({type:MARKET,payload:false})}/>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">select regions</h1>
            </div>
            <div className="flex flex-col mb-2 w-full bg-pri1" style={{borderRadius: '18px 18px 6px 6px'}}>
                    <input type="text" name="" id="" className="search w-full outline-none" placeholder="Search region list..." />
                <div className="flex flex-col w-full overflow-x-hidden h-full max-h-160 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
                    {
                        arr.map((item,i)=>(
                            <div className="flex items-center h-32" key={i} style={{padding:'8px 16px'}}>
                                <label  className="capitalize flex items-center text-white text-12_20">
                                    <input  onChange={(e)=>{
                                        var market_data={...markets}
                                        market_data['arrm_init']=market_data['arrm_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        dispatch({
                                            type:MARKETS_BTN,
                                            payload:market_data
                                        })
                                    }} checked={item.status} className="style-checkbox1 ml-2" type="checkbox" name=""  style={{lineHeight:'initial'}}/>
                                    {item.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div> 
            <div className="flex flex-col w-full my-2">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">select segments</h1>
                <div className="grid grid-cols-2 gap-1 px-2">
                    {
                        arr1.map((item,i)=>(
                            <div className="flex items-center" key={i}>
                                <label  className="capitalize flex items-center text-white text-12_20 ">
                                    <input  onChange={(e)=>{
                                        var market_data={...markets}
                                        market_data['arr1m_init']=market_data['arr1m_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        dispatch({
                                            type:MARKETS_BTN,
                                            payload:market_data
                                        })
                                    }} checked={item.status} className="style-checkbox" type="checkbox" name=""   />
                                    {item.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col my-2">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">adults</h1>
                <div className="grid grid-cols-2 gap-1 px-2">
                    {
                        arr2.map((item,i)=>(
                            <div className="flex items-center" key={i}>
                                <label  className="capitalize flex items-center text-white text-12_20">
                                    <input  onChange={(e)=>{
                                        var market_data={...markets}
                                        market_data['arr2m_init']=market_data['arr2m_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        dispatch({
                                            type:MARKETS_BTN,
                                            payload:market_data
                                        })
                                    }} checked={item.status} className="style-checkbox" type="checkbox" name="" />
                                    {item.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col w-full my-2">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">children</h1>
                <div className="grid grid-cols-2 gap-1 px-2">
                    {
                        arr3.map((item,i)=>(
                            <div className="flex items-center" key={i}>
                                <label  className="capitalize flex items-center text-white text-12_20">
                                    <input onChange={(e)=>{
                                        var market_data={...markets}
                                        market_data['arr3m_init']=market_data['arr3m_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        dispatch({
                                            type:MARKETS_BTN,
                                            payload:market_data
                                        })
                                    }} checked={item.status} className="style-checkbox" type="checkbox" name="" />
                                    {item.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Markets
