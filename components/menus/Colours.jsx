import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {COLOUR} from './../AppConstants'
const Colours = () => {
    const {dispatch}=useContext(AppStore)
    const colors=[
        '#E64242',
        '#E2E642',
        '#45E642',
        '#E642CB',
        '#4542E6',
        '#42DCE6',
        '#E64242',
        '#E2E642',
        '#45E642',
        '#E642CB',
        '#4542E6',
        '#42DCE6',
    ]
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <div className="flex self-end cursor-pointer" onClick={()=>dispatch({type:COLOUR,payload:false})}>
                <img src="/close.png" alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">select colors</h1>
                <div className="grid grid-cols-6 gap-2 px-2 items-center">
                    {
                        colors.map((item,i)=>(
                            <div key={i} className={`flex w-20 h-20 `} style={{background:item,borderRadius:'50%',border:`1px solid ${item}`}}>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Colours