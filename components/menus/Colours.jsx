import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {COLOUR,COLOURS_BTN} from './../AppConstants'
const Colours = () => {
    const {state,dispatch}=useContext(AppStore)
    const {colours}=state
    const [arr,setArr]=useState([])
    useEffect(()=>{
        setArr(colours.arrm_init)
    },[colours])
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <div className="hover:bg-pri2 p-1 flex self-end cursor-pointer" onClick={()=>dispatch({type:COLOUR,payload:false})}>
                <img src="/close.png" alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">select colors</h1>
                    <input type="text" name="" id="" className="search w-full outline-none" placeholder="Search region list..." />
            </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    {
                        arr.map((item,i)=>(
                            <div className="flex items-center h-32" key={i} style={{padding:'8px 16px'}}>
                                <label  className="capitalize flex items-center text-white text-12_20">
                                    <input  onChange={(e)=>{
                                        var colours_data={...colours}
                                        colours_data['arrm_init']=colours_data['arrm_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        dispatch({
                                            type:COLOURS_BTN,
                                            payload:colours_data
                                        })
                                    }} checked={item.status} className="style-checkbox1 ml-2" type="checkbox" name=""  style={{lineHeight:'initial'}}/>
                                    {item.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Colours