import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {MARKET} from './../AppConstants'
const Markets = () => {
    const {dispatch}=useContext(AppStore)
    const arr=[
        'argentina (AR)',
        'argentina (AR)',
        'argentina (AR)',
        'argentina (AR)',
        'argentina (AR)',
        'argentina (AR)',
    ]
    const arr1=[
        'value',
        'mass',
        'premium',
        'luxury',
    ]
    const arr2=[
        'girls',
        'unisex',
        'boys',
        'baby',
    ]
    const [radio1,setradio1]=useState(null)
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <div className="flex self-end cursor-pointer" onClick={()=>dispatch({type:MARKET,payload:false})}>
                <img src="/close.png" alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">select regions</h1>
                <div className="flex relative px-2 h-36 rounded-md items-center" style={{background:'rgba(0, 0, 0, 0.07)',borderRadius:'10px'}}>
                    <div className="absolute">
                        <img src="/search.png" alt="" />
                    </div>
                    <input type="text" name="" id="" className="bg-transparent w-full outline-none" placeholder="Search region list..." style={{marginLeft:'30px',color:'rgba(255, 255, 255, 0.3)'}}/>
                </div>
            </div>
            <div className="flex flex-col my-2 w-full">
                <div className="grid grid-cols-2 gap-2 px-2">
                    {
                        arr.map((item,i)=>(
                            <div className="flex" key={i}>
                                <label className="capitalize flex items-center text-white text-12_20">
                                    <input className="mr-1" type="checkbox" name="" id="" style={{accentColor:'yellow'}} />
                                    {item}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">select segments</h1>
                <div className="grid grid-cols-2 gap-2 px-2">
                    {
                        arr1.map((item,i)=>(
                            <div className="flex" key={i}>
                                <label className="capitalize flex items-center text-white text-12_20">
                                    <input className="mr-1" type="checkbox" name="" id="" style={{accentColor:'yellow'}} />
                                    {item}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col my-2">
                <div className="flex mt-1 justify-evenly">
                    <div className="flex">
                        <label className="capitalize flex items-center text-white text-12_20">
                            <input value="r1" checked={radio1==="r1"} onChange={()=>setradio1('r1')} type="radio" name="" id="" className="mr-1" style={{accentColor:'yellow'}}/>
                            adults
                        </label>
                    </div>
                    <div className="flex">
                        <label className="capitalize flex items-center text-white text-12_20">
                            <input value="r2" checked={radio1==="r2"} onChange={()=>setradio1('r2')} type="radio" name="" id="" className="mr-1" style={{accentColor:'yellow'}}/>
                            children
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-2 gap-2 px-2">
                    {
                        arr2.map((item,i)=>(
                            <div className="flex" key={i}>
                                <label className="capitalize flex items-center text-white text-12_20">
                                    <input className="mr-1" type="checkbox" name="" id="" style={{accentColor:'yellow'}} />
                                    {item}
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
