import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {PRICE} from './../AppConstants'
const PriceStatus = () => {
    const {dispatch}=useContext(AppStore)
    const arr=[
        'all',
        'full price',
        'not full price',
        '0%-10%',
        '10%-20%',
        '20%-30%',
        '30%-40%',
        '40%-50%',
        '50%-60%',
        '60%-70%',
        '70%-80%',
        '80%-90%',
        '90%-100%',
    ]
    const [radio1,setradio1]=useState(null)
    const [radio2,setradio2]=useState(null)
    const [radio3,setradio3]=useState(null)
    return (
        <div className="flex flex-col p-4 w-316 h-auto bg-secondary rounded-md">
            <div className="flex self-end cursor-pointer" onClick={()=>dispatch({type:PRICE,payload:false})}>
                <img src="/close.png" alt="" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">status</h1>
                <div className="flex mt-1 ">
                    <div className="flex items-center">
                    <input value="r1" checked={radio1==="r1"} onChange={()=>setradio1('r1')} type="radio" name="" id="all"  style={{accentColor:'yellow'}}/>
                                <span></span>
                                <label htmlFor="all" className="capitalize flex items-center text-white text-12_20 ml-2">
                                all
                                </label>
                    </div>
                    <div className="flex mx-4 items-center">
                    <input value="r2" checked={radio1==="r2"} onChange={()=>setradio1('r2')} type="radio" name="" id="in stock"  style={{accentColor:'yellow'}}/>
                                <span></span>
                                <label htmlFor="in stock" className="capitalize flex items-center text-white text-12_20 ml-2">
                                in stock
                                </label>
                    </div>
                    <div className="flex items-center">
                            <input value="r3" checked={radio1==="r3"} onChange={()=>setradio1('r3')} type="radio" name="" id="out of stock"  style={{accentColor:'yellow'}}/>
                        <span></span>
                                <label htmlFor="out of stock" className="capitalize flex items-center text-white text-12_20 ml-2">
                                out of stock
                                </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col my-2">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">discounted products</h1>
                <div className="flex mt-1 justify-evenly">
                    <div className="flex items-center">
                            <input value="r1" checked={radio2==="r1"} onChange={()=>setradio2('r1')} type="radio" name="" id="all1"  style={{accentColor:'yellow'}}/>
                        <span></span>
                                <label htmlFor="all1" className="capitalize flex items-center text-white text-12_20 ml-2">
                                all
                                </label>
                    </div>
                    <div className="flex mx-1 items-center">
                            <input value="r2" checked={radio2==="r2"} onChange={()=>setradio2('r2')} type="radio" name="" id="exclude discounted"  style={{accentColor:'yellow'}}/>
                        <span></span>
                                <label htmlFor="exclude discounted" className="capitalize flex items-center text-white text-12_20 ml-2">
                                exclude discounted
                                </label>
                    </div>
                    <div className="flex items-center">
                            <input value="r3" checked={radio2==="r3"} onChange={()=>setradio2('r3')} type="radio" name="" id="only discounted"  style={{accentColor:'yellow'}}/>
                        <span></span>
                                <label htmlFor="only discounted" className="capitalize flex items-center text-white text-12_20 ml-2">
                                only discounted
                                </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">select brands</h1>
                <div className="flex mt-1 ">
                    <div className="flex items-center">
                            <input value="r1" checked={radio3==="r1"} onChange={()=>setradio3('r1')} type="radio" name="" id="all3"  style={{accentColor:'yellow'}}/>
                        <span></span>
                                <label htmlFor="all3" className="capitalize flex items-center text-white text-12_20 ml-2">
                                all
                                </label>
                    </div>
                    <div className="flex mx-4 items-center">
                            <input value="r2" checked={radio3==="r2"} onChange={()=>setradio3('r2')} type="radio" name="" id="atleast once"  style={{accentColor:'yellow'}}/>
                        <span></span>
                                <label htmlFor="atleast once" className="capitalize flex items-center text-white text-12_20 ml-2">
                                atleast once
                                </label>
                    </div>
                    <div className="flex items-center">
                            <input value="r3" checked={radio3==="r3"} onChange={()=>setradio3('r3')} type="radio" name="" id="never"  style={{accentColor:'yellow'}}/>
                        <span></span>
                                <label htmlFor="never" className="capitalize flex items-center text-white text-12_20 ml-2">
                                never
                                </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full my-2">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">price range</h1>
                <div className="flex justify-between w-full px-2">
                    <input type="text" name="" placeholder="From" style={{borderColor:'rgba(255, 255, 255, 0.3)'}} className="bg-transparent text-12_20 border-2 py-2 px-1 rounded-md outline-none w-full" id="" />
                    <input type="text" name="" placeholder="To" style={{borderColor:'rgba(255, 255, 255, 0.3)'}} className="bg-transparent text-12_20 border-2 py-2 px-1 rounded-md outline-none w-full ml-4" id="" />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h1 className="text-12_20 capitalize text-pricol1 mb-2">select markdowns</h1>
                <div className="grid grid-cols-2 gap-2 px-2">
                    {
                        arr.map((item,i)=>(
                            <div className="flex items-center" key={i}>
                                <input id={i} className="style-checkbox" type="checkbox" name=""  style={{lineHeight:'initial'}} />
                                <label htmlFor={i} className="capitalize flex items-center text-white text-12_20 ml-2">
                                    {item}
                                </label>
                                {/* <label className="capitalize flex items-center text-white text-12_20 ml-2">
                                    <input  type="checkbox" name="" id="" style={{accentColor:'yellow'}} />
                                    {item}
                                </label> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PriceStatus
