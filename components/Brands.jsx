import React,{useState,useContext,useEffect} from 'react'
import AppStore from './store'
import {COMPETITION,COLOUR,PRICE,MARKET} from './AppConstants'
import {
    PriceExpand,
    DateExpand,
    Competition,
    Colours,
    PriceStatus,
    Markets,
} from './menus'
const Brands = () => {
    const {state,dispatch}=useContext(AppStore)
    const {competition,colour,price,market}=state
    const [compe,setCompe]=useState(false)
    const [col,setCol]=useState(false)
    const [price1,setPrice]=useState(false)
    const [market1,setMarket]=useState(false)
    useEffect(()=>{
        setCompe(competition)
        setCol(colour)
        setPrice(price)
        setMarket(market)
    },[competition,colour,price,market])
    const [priceExpand,setPriceExpand]=useState(false)
    const [dateExpand,setDateExpand]=useState(false)
    return (
        <div className="flex flex-col p-2 w-316  bg-secondary justify-between">
            <div className="flex text-white h-39 items-center text-14 cursor-pointer justify-between capitalize">
                <h1 onClick={()=>dispatch({type:MARKET,payload:!market1})} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${market1?'bg-pri1':''}`} style={{height:'100%'}}>
                    markets
                </h1>
                {
                    market1 &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'0'}}>
                        <div className="pt-4">
                            <img src="/left.png" alt="" />
                        </div>
                        <Markets />
                    </div>
                }
            </div>
            <div className="flex relative text-white h-39 items-center text-14  justify-between capitalize">
                <h1 onClick={()=>dispatch({type:COMPETITION,payload:!compe})} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${compe?'bg-pri1':''}`} style={{height:'100%'}}>
                    competition
                </h1>
                {
                    compe &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'0'}}>
                        <div className="pt-4">
                            <img src="/left.png" alt="" />
                        </div>
                        <Competition />
                    </div>
                }
            </div>
            <div className="flex text-white h-39 items-center text-14 cursor-pointer justify-between capitalize">
                <h1 className="hover:bg-pri1 p-2 w-full flex items-center" style={{height:'100%'}}>
                    categories
                </h1>
            </div>
            <div className="flex relative text-white h-39 items-center text-14  justify-between capitalize">
                <h1 onClick={()=>dispatch({type:COLOUR,payload:!col})} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${col?'bg-pri1':''}`} style={{height:'100%'}}>
                colors
                </h1>
                {
                    col &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'0'}}>
                        <div className="pt-4">
                            <img src="/left.png" alt="" />
                        </div>
                        <Colours />
                    </div>
                }
            </div>
            <div className="flex relative text-white h-39 items-center text-14 cursor-pointer justify-between capitalize">
                <h1 onClick={()=>dispatch({type:PRICE,payload:!price1})} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${price1?'bg-pri1':''}`} style={{height:'100%'}}>
                    price & status
                </h1>
                {
                    priceExpand?(
                        <div onClick={()=>setPriceExpand(!priceExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <img src="/minus.png"  alt="" />
                        </div>
                    ):(
                        <div onClick={()=>setPriceExpand(!priceExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <img src="/plus.png"  alt="" />
                        </div>
                    )
                }
                {
                    price1 &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'0'}}>
                        <div className="pt-4">
                            <img src="/left.png" alt="" />
                        </div>
                        <PriceStatus />
                    </div>
                }
            </div>
            {
                priceExpand && <PriceExpand />
            }
            <div className="flex text-white h-39 items-center text-14 cursor-pointer justify-between capitalize">
                <h1 className="hover:bg-pri1 p-2 w-full flex items-center" style={{height:'100%'}}>
                    date & time
                </h1>
                {
                    dateExpand?(
                        <div onClick={()=>setDateExpand(!dateExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <img src="/minus.png"  alt="" />
                        </div>
                    ):(
                        <div onClick={()=>setDateExpand(!dateExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <img src="/plus.png"  alt="" />
                        </div>
                    )
                }
            </div>
            {
                dateExpand && <DateExpand />
            }
        </div>
    )
}

export default Brands
