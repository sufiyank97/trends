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
            <div className="hover:bg-pri2 p-1 flex self-end cursor-pointer" onClick={()=>dispatch({type:MARKET,payload:false})}>
                <img src="/ic-close.svg" alt="" />
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
                            <div className="flex items-center" key={i}>
                                <input id={i} className="style-checkbox" type="checkbox" name=""  style={{lineHeight:'initial'}}/>
                                <label htmlFor={i} className="capitalize flex items-center text-white text-12_20 ml-2">
                                    {item}
                                </label>
                                {/* <label className="capitalize flex items-center text-white text-12_20">
                                    <input className="mr-1" type="checkbox" name="" id="" style={{accentColor:'yellow'}} />
                                    {item}
                                </label> */}
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
                            <div className="flex items-center" key={i}>
                                <input id={`${item}-1`}  className="style-checkbox" type="checkbox" name=""   />
                                <label htmlFor={`${item}-1`} className="capitalize flex items-center text-white text-12_20 ml-2">
                                    {item}
                                </label>
                                {/* <input id={item} className="mr-1" type="checkbox" name="" id="" style={{accentColor:'yellow'}} />
                                <label htmlFor={item} className="capitalize flex items-center text-white text-12_20">
                                    {item}
                                </label> */}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col my-2">
                <div className="flex mt-1 ">
                    <div className="flex ml-2 items-center">
                        <input value="r1" checked={radio1==="r1"} onChange={()=>setradio1('r1')} type="radio" name="" id="adults" className="style-radio" />
                                <label htmlFor="adults" className="capitalize flex items-center text-white text-12_20 ml-2">
                                adults
                                </label>
                    </div>
                    <div className="flex ml-4 items-center">
                        <input value="r2" checked={radio1==="r2"} onChange={()=>setradio1('r2')} type="radio" name="" id="children" className="style-radio" />
                                <label htmlFor="children" className="capitalize flex items-center text-white text-12_20 ml-2">
                                children
                                </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-2 gap-2 px-2">
                    {
                        arr2.map((item,i)=>(
                            <div className="flex items-center" key={i}>
                                <input id={item} className="style-checkbox" type="checkbox" name="" />
                                <label htmlFor={item} className="capitalize flex items-center text-white text-12_20 ml-2">
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
