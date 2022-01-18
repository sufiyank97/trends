import React,{useState,useContext,useEffect} from 'react'
import AppStore from './../store'
import {COMPETITION,COMPETITION_BTN} from './../AppConstants'
import Close from '../../public/ic-close.svg'
const Competition = () => {
    const {state,dispatch}=useContext(AppStore)
    const {competitions}=state
    const [arr,setArr]=useState([])
    const [arr1,setArr1]=useState([])
    useEffect(()=>{
        setArr(competitions.arrm_init)
        setArr1(competitions.arr1m_init)
    },[competitions])
    return (
        <div className="flex flex-col p-6 w-316 h-auto bg-secondary rounded-md">
            <Close className="svg1 flex self-end cursor-pointer" onClick={()=>dispatch({type:COMPETITION,payload:false})}/>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 mb-2 font-noto">select retailers</h1>
            </div>
            <div className="flex flex-col mb-2 w-full bg-pri1" style={{borderRadius: '18px 18px 6px 6px'}}>
                <input type="text" name="" id="" className="search w-full outline-none mb-2" placeholder="Search for retailer..." />
                <div className="flex flex-col w-full overflow-x-hidden h-full max-h-160 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
                    {
                        arr.map((item,i)=>(
                                <label  className="capitalize flex h-32 hover:bg-secondary4 items-center text-white text-12_20" key={i} style={{padding:'8px 16px'}}>
                                    <input  onChange={(e)=>{
                                        var competition_data={...competitions}
                                        competition_data['arrm_init']=competition_data['arrm_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        dispatch({
                                            type:COMPETITION_BTN,
                                            payload:competition_data
                                        })
                                    }} checked={item.status} className="style-checkbox1 ml-2" type="checkbox" name=""  style={{lineHeight:'initial'}}/>
                                    {item.name}
                                </label>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-12_20 capitalize text-secondary6 my-2 font-noto">select brands</h1>
            </div>
            <div className="flex flex-col mb-2 w-full bg-pri1" style={{borderRadius: '18px 18px 6px 6px'}}>
                <input type="text" name="" id="" className="search w-full outline-none mb-2" placeholder="Search for brand..." />
                <div className="flex flex-col w-full overflow-x-hidden h-full max-h-160 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
                    {
                        arr1.map((item,i)=>(
                            // <div className="flex items-center h-32" key={i} style={{padding:'8px 16px'}}>
                                <label  className="capitalize flex h-32 hover:bg-secondary4 items-center text-white text-12_20" key={i} style={{padding:'8px 16px'}}>
                                    <input  onChange={(e)=>{
                                        var competition_data={...competitions}
                                        competition_data['arr1m_init']=competition_data['arr1m_init'].map(ar=>ar.name===item.name?{...ar,'status':e.target.checked}:{...ar})
                                        console.log(competition_data,'l')
                                        dispatch({
                                            type:COMPETITION_BTN,
                                            payload:competition_data
                                        })
                                    }} checked={item.status} className="style-checkbox1 ml-2" type="checkbox" name=""  style={{lineHeight:'initial'}}/>
                                    {item.name}
                                </label>
                            // </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Competition
