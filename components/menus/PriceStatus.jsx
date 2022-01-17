import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {PRICE,PRICES_BTN} from './../AppConstants'
const PriceStatus = () => {
    const {state,dispatch}=useContext(AppStore)
    const {prices}=state
    const [arr,setArr]=useState([])
    const [radio1,setradio1]=useState(null)
    const [radio2,setradio2]=useState(null)
    const [radio3,setradio3]=useState(null)
    useEffect(()=>{
        setArr(prices.arrm_init)
        setradio1(prices.radio1)
        setradio2(prices.radio2)
        setradio3(prices.radio3)
    },[prices])
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <div className="hover:bg-pri2 p-1 flex self-end cursor-pointer" onClick={()=>dispatch({type:PRICE,payload:false})}>
                <img src="/close.png" alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">status</h1>
                <div className="flex mt-2 ">
                    <div className="flex items-center">
                        <label htmlFor="all" className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input value="all" checked={radio1==="all"} onChange={()=>dispatch({
                                type:PRICES_BTN,
                                payload:{
                                    ...prices,
                                    radio1:'all'
                                }
                            }
                            )} type="radio" name="" id="all"  style={{accentColor:'yellow'}}/>
                            all
                        </label>
                    </div>
                    <div className="flex mx-4 items-center">
                        <label htmlFor="in stock" className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input value="in stock" checked={radio1==="in stock"} onChange={()=>dispatch({
                                type:PRICES_BTN,
                                payload:{
                                    ...prices,
                                    radio1:'in stock'
                                }
                            }
                            )} type="radio" name="" id="in stock"  style={{accentColor:'yellow'}}/>
                                in stock
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="out of stock" className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input value="out of stock" checked={radio1==="out of stock"} onChange={()=>dispatch({
                                type:PRICES_BTN,
                                payload:{
                                    ...prices,
                                    radio1:'out of stock'
                                }
                            }
                            )} type="radio" name="" id="out of stock"  style={{accentColor:'yellow'}}/>
                            out of stock
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-6">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">discounted products</h1>
                <div className="flex mt-2 flex-wrap">
                    <div className="flex h-28 items-center">
                        <label htmlFor="all1" className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input value="all" checked={radio2==="all"} onChange={()=>dispatch({
                                type:PRICES_BTN,
                                payload:{
                                    ...prices,
                                    radio2:'all'
                                }
                            }
                            )} type="radio" name="" id="all1"  style={{accentColor:'yellow'}}/>
                            all
                        </label>
                    </div>
                    <div className="flex h-28 mx-4 items-center">
                            <label htmlFor="exclude discounted" className="capitalize flex items-center text-white text-12_20 ml-2">
                                <input value="exclude discounted" checked={radio2==="exclude discounted"} onChange={()=>dispatch({
                                    type:PRICES_BTN,
                                    payload:{
                                        ...prices,
                                        radio2:'exclude discounted'
                                    }
                                }
                                )} type="radio" name="" id="exclude discounted"  style={{accentColor:'yellow'}}/>
                                exclude discounted
                            </label>
                    </div>
                    <div className="flex h-28 items-center">
                        <label htmlFor="only discounted" className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input value="only discounted" checked={radio2==="only discounted"} onChange={()=>dispatch({
                                type:PRICES_BTN,
                                payload:{
                                    ...prices,
                                    radio2:'only discounted'
                                }
                            }
                            )} type="radio" name="" id="only discounted"  style={{accentColor:'yellow'}}/>
                            only discounted
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">select brands</h1>
                <div className="flex mt-2 ">
                    <div className="flex items-center">
                        <label htmlFor="all3" className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input value="all" checked={radio3==="all"} onChange={()=>dispatch({
                                type:PRICES_BTN,
                                payload:{
                                    ...prices,
                                    radio3:'all'
                                }
                            }
                            )} type="radio" name="" id="all3"  style={{accentColor:'yellow'}}/>
                            all
                        </label>
                    </div>
                    <div className="flex mx-4 items-center">
                            <label htmlFor="atleast once" className="capitalize flex items-center text-white text-12_20 ml-2">
                                <input value="atleast once" checked={radio3==="atleast once"} onChange={()=>dispatch({
                                    type:PRICES_BTN,
                                    payload:{
                                        ...prices,
                                        radio3:'atleast once'
                                    }
                                }
                                )} type="radio" name="" id="atleast once"  style={{accentColor:'yellow'}}/>
                                atleast once
                            </label>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="never" className="capitalize flex items-center text-white text-12_20 ml-2">
                            <input value="never" checked={radio3==="never"} onChange={()=>dispatch({
                                type:PRICES_BTN,
                                payload:{
                                    ...prices,
                                    radio3:'never'
                                }
                            }
                            )} type="radio" name="" id="never"  style={{accentColor:'yellow'}}/>
                            never
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full my-6">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">price range</h1>
                <div className="flex justify-between w-full px-2 mt-2">
                    <input type="text" name="" placeholder="From" style={{borderColor:'rgba(255, 255, 255, 0.3)'}} className="bg-transparent text-12_20 border-2 py-2 px-1 rounded-md outline-none w-full" id="" />
                    <input type="text" name="" placeholder="To" style={{borderColor:'rgba(255, 255, 255, 0.3)'}} className="bg-transparent text-12_20 border-2 py-2 px-1 rounded-md outline-none w-full ml-4" id="" />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">select markdowns</h1>
                <div className="grid grid-cols-2 gap-0 px-2">
                    {
                        arr.map((item,i)=>(
                            <div className="flex items-center h-28" key={i} >
                                <label  className="capitalize flex items-center text-white text-12_20">
                                    <input  onChange={(e)=>{
                                        var prices_data={...prices}
                                        prices_data['arrm_init']=prices_data['arrm_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        dispatch({
                                            type:PRICES_BTN,
                                            payload:prices_data
                                        })
                                    }} checked={item.status} className="style-checkbox1 ml-2" type="checkbox" name=""  style={{lineHeight:'initial'}}/>
                                    {item.name}
                                </label>
                            </div>
                        ))
                    }
                    {/* {
                        arr.map((item,i)=>(
                            <div className="flex items-center" key={i}>
                                <input id={i} className="style-checkbox" type="checkbox" name=""  style={{lineHeight:'initial'}} />
                                <label htmlFor={i} className="capitalize flex items-center text-white text-12_20 ml-2">
                                    {item}
                                </label>
                            </div>
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}

export default PriceStatus
