import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {KEYWORD,KEYWORDS_BTN} from './../AppConstants'
import Close from '../../public/ic-close.svg'
const Keywords=()=>{
    const {state,dispatch}=useContext(AppStore)
    const {keywords}=state
    const [include,setInclude]=useState(null)
    const [exclude,setExclude]=useState(null)
    return (
        <div className="flex flex-col p-6 w-316 h-auto bg-secondary rounded-md">
            <Close className="svg1 flex self-end cursor-pointer" onClick={()=>dispatch({type:KEYWORD,payload:false})}/>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">manage keywords</h1>
            </div>
            <div className="flex flex-col mt-2.5">
                <div className="flex flex-col">
                    <h1 className="text-10 text-secondary6 mb-1">INCLUDE PRODUCTS with these keywords</h1>
                    <div className="flex items-center">
                        <input type="text" className="bg-transparent outline-none w-216 h-36 border border-secondary9 py-2 px-3" placeholder="Type keywords..." style={{borderRadius:'4px'}} value={include} onChange={(e)=>setInclude(e.target.value)} />
                        <span className="ml-4 font-noto text-13 text-yellow cursor-pointer" onClick={()=>{
                            if(include){
                                dispatch({
                                    type:KEYWORDS_BTN,
                                    payload:{...keywords,'include':[...keywords['include'],include]}
                                })
                            }
                        }}>+Add</span>
                    </div>
                </div>
                <div className="flex flex-col mt-5">
                    <h1 className="text-10 text-secondary6 mb-1">EXCLUDE PRODUCTS with these keywords</h1>
                    <div className="flex items-center">
                        <input type="text" className="bg-transparent outline-none w-216 h-36 border border-secondary9 py-2 px-3" placeholder="Type keywords..." style={{borderRadius:'4px'}} value={exclude} onChange={(e)=>setExclude(e.target.value)}/>
                        <span className="ml-4 font-noto text-13 text-yellow cursor-pointer" onClick={()=>{
                            if(exclude){
                                dispatch({
                                    type:KEYWORDS_BTN,
                                    payload:{...keywords,'exclude':[...keywords['exclude'],exclude]}
                                })
                            }
                        }}>+Add</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keywords