import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {COMPETITION} from './../AppConstants'

const Competition = () => {
    const {dispatch}=useContext(AppStore)
    const arr=['jakeshoes','jakeshoes','jakeshoes','jakeshoes','jakeshoes','jakeshoes',]
    const arr1=['boohoo','new look','nike']
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <div className="flex self-end cursor-pointer" onClick={()=>dispatch({type:COMPETITION,payload:false})}>
                <img src="/close.png" alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">select retailers</h1>
                <div className="flex relative px-2 h-36 rounded-md items-center" style={{background:'rgba(0, 0, 0, 0.07)',borderRadius:'10px'}}>
                    <div className="absolute">
                        <img src="/search.png" alt="" />
                    </div>
                    <input type="text" name="" id="" className="bg-transparent w-full outline-none" placeholder="Search for retailer..." style={{marginLeft:'30px',color:'rgba(255, 255, 255, 0.3)'}}/>
                </div>
            </div>
            <div className="grid grid-cols-2 px-2 pt-2 gap-2">
                {
                    arr.map((item,i)=>(
                        <div className="flex items-center" key={i}>
                            <label  className="capitalize flex items-center text-white text-12_20 ">
                                <input type="checkbox" className="mr-2" name="" id={item} style={{accentColor:'yellow'}}/>
                                {item}
                            </label>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">select brands</h1>
                <div className="flex relative px-2 h-36 rounded-md items-center" style={{background:'rgba(0, 0, 0, 0.07)',borderRadius:'10px'}}>
                    <div className="absolute">
                        <img src="/search.png" alt="" />
                    </div>
                    <input type="text" name="" id="" className="bg-transparent w-full outline-none" placeholder="Search for brand..." style={{marginLeft:'30px',color:'rgba(255, 255, 255, 0.3)'}}/>
                </div>
            </div>
            <div className="grid grid-cols-2 px-2 pt-2 gap-2">
                {
                    arr1.map((item,i)=>(
                        <div className="flex items-center" key={i}>
                            <label  className="capitalize flex items-center text-white text-12_20 ">
                                <input type="checkbox" className="mr-2" name="" id={item} style={{accentColor:'yellow'}}/>
                                {item}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Competition
