import React,{useState,useContext,useEffect,Fragment} from 'react'
import AppStore from './store'
import {COMPETITION,COLOUR,PRICE,DATE,MARKET,PINNED_BTN,KEYWORD} from './AppConstants'
import {
    PriceExpand,
    DateExpand,
    Competition,
    Colours,
    PriceStatus,
    Markets,
    MarketExpand,
    DateStatus,
    Keywords,
    KeywordExpand,
} from './menus'
import Pin from '../public/ic-pin.svg'
import Pinh from '../public/ic-pin-hover.svg'
import Pinned from '../public/ic-pinned.svg'
import Add from '../public/ic-add.svg'
import Minus from '../public/ic-minus.svg'
const Brands = () => {
    const {state,dispatch}=useContext(AppStore)
    const {competition,colour,price,date1,market,pinned,markets,competitions,colours,prices,dates,keyword,keywords}=state
    const [compe,setCompe]=useState(false)
    const [col,setCol]=useState(false)
    const [price1,setPrice]=useState(false)
    const [date11,setDate]=useState(false)
    const [market1,setMarket]=useState(false)
    const [keyword1,setKeyword]=useState(false)
    const [pin,setPinned]=useState(false)

    useEffect(()=>{
        setCompe(competition)
        setCol(colour)
        setPrice(price)
        setDate(date1)
        setMarket(market)
        setKeyword(keyword)
        setPinned(pinned)
    },[competition,colour,price,market,pinned,date1,keyword])
    useEffect(()=>{
        if(markets){
            if(markets.arrm_init.some(i1=>i1.status) || markets.arr1m_init.some(i1=>i1.status) || markets.arr2m_init.some(i1=>i1.status) || markets.arr3m_init.some(i1=>i1.status)){
                setMarketStatus(true)
            }else{
                setMarketStatus(false)
            }
        }
        if(competitions){
            if(competitions.arrm_init.some(i1=>i1.status) || competitions.arr1m_init.some(i1=>i1.status)){
                setCompetitionStatus(true)
            }else{
                setCompetitionStatus(false)
            }
        }
        if(colours){
            if(colours.arrm_init.some(i1=>i1.status)){
                setcoloursStatus(true)
            }else{
                setcoloursStatus(false)
            }
        }
        if(prices){
            if(prices.arrm_init.some(i1=>i1.status) || prices.radio1 || prices.radio2 || prices.radio3){
                setpricesStatus(true)
            }else{
                setpricesStatus(false)
            }
        }
        if(dates){
            if(dates.radio1 || dates.radio2 || dates.radio3 ){
                setdatesStatus(true)
            }else{
                setdatesStatus(false)
            }
        }
        if(keywords){
            if(keywords.include.length>0 || keywords.exclude.length>0 ){
                setkeywordStatus(true)
            }else{
                setkeywordStatus(false)
            }
        }
    },[markets,competitions,colours,prices,dates,keywords])
    const [marketStatus,setMarketStatus]=useState(false)
    const [competitionStatus,setCompetitionStatus]=useState(false)
    const [coloursStatus,setcoloursStatus]=useState(false)
    const [keywordStatus,setkeywordStatus]=useState(false)
    const [pricesStatus,setpricesStatus]=useState(false)
    const [datesStatus,setdatesStatus]=useState(false)

    const [marketExpand,setMarketExpand]=useState(false)
    const [competitionExpand,setCompetitionsExpand]=useState(false)
    const [keywordExpand,setkeywordExpand]=useState(false)
    const [coloursExpand,setcoloursExpand]=useState(false)
    const [priceExpand,setPriceExpand]=useState(false)
    const [dateExpand,setDateExpand]=useState(false)
    return (
        <div className="flex flex-col p-2 w-316 justify-between">
            <div className="flex justify-end w-full items-center h-44" >
                <div className="flex w-max cursor-pointer group" onClick={()=>dispatch({type:PINNED_BTN,payload:!pin})} style={{padding: '0px 12px 0px 0px'}}>
                    {
                        pin?(
                            <Pinned />
                            ):(
                            <>
                                <Pin className="block group-hover:hidden" />
                                <Pinh className={`hidden group-hover:block`} />
                            </>
                        )
                    }

                </div>
            </div>
            <div className="flex text-white h-39 items-center text-14  justify-between capitalize">
                <h1 onClick={()=>{
                    dispatch({type:MARKET,payload:!market1})
                    dispatch({type:COMPETITION,payload:false})
                    dispatch({type:COLOUR,payload:false})
                    dispatch({type:PRICE,payload:false})
                    dispatch({type:DATE,payload:false})
                    dispatch({type:KEYWORD,payload:false})
                }} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${market1?'bg-pri1':''}`} style={{height:'100%'}}>
                    markets
                </h1>
                {
                    marketStatus ? marketExpand?(
                        <div onClick={()=>setMarketExpand(!marketExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <Minus className="svg1"/>
                        </div>
                    ):(
                        <div onClick={()=>setMarketExpand(!marketExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <Add className="svg1"/>
                        </div>
                    ):<Fragment />
                }
                {
                    market1 &&
                    <div className="absolute flex " style={{right:'-20.5rem',zIndex:'1',top:'.5rem'}}>
                        <div className="" style={{paddingTop:'3.5rem'}}>
                            <img src="/left.png" alt="" />
                        </div>
                        <Markets />
                    </div>
                }
            </div>
            {
                marketStatus && marketExpand && 
                <>
                    <div className="bg-pri1 py-4 px-2 flex flex-col overflow-x-hidden h-full max-h-244 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
                        <div style={{padding:'0px 16px'}}>
                            {
                                markets.arrm_init.some(item=>item.status)?(
                                    <MarketExpand name="regions" values={markets.arrm_init} />
                                ):<Fragment/>
                            }
                            {
                                markets.arr1m_init.some(item=>item.status)?(
                                    <MarketExpand name="segments" values={markets.arr1m_init} />
                                ):<Fragment/>
                            }
                            {
                                markets.arr2m_init.some(item=>item.status)?(
                                    <MarketExpand name="adults" values={markets.arr2m_init} />
                                ):<Fragment/>
                            }
                            {
                                markets.arr3m_init.some(item=>item.status)?(
                                    <MarketExpand name="children" values={markets.arr3m_init} />
                                ):<Fragment/>
                            }
                        
                        </div>
                    </div>
                </>
            }
            <div className="flex relative text-white h-39 items-center text-14  justify-between capitalize">
                <h1 onClick={()=>{
                    dispatch({type:MARKET,payload:false})
                    dispatch({type:COMPETITION,payload:!compe})
                    dispatch({type:COLOUR,payload:false})
                    dispatch({type:PRICE,payload:false})
                    dispatch({type:DATE,payload:false})
                    dispatch({type:KEYWORD,payload:false})
                }} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${compe?'bg-pri1':''}`} style={{height:'100%'}}>
                    competition
                </h1>
                {
                    competitionStatus ? competitionExpand?(
                        <div onClick={()=>setCompetitionsExpand(!competitionExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <Minus className="svg1"/>
                        </div>
                    ):(
                        <div onClick={()=>setCompetitionsExpand(!competitionExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <Add className="svg1"/>
                        </div>
                    ):<Fragment />
                }
                {
                    compe &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'-4rem'}}>
                        <div className="" style={{paddingTop:'4.5rem'}}>
                            <img src="/left.png" alt="" />
                        </div>
                        <Competition />
                    </div>
                }
            </div>
            {
                competitionStatus && competitionExpand && 
                <>
                    <div className="bg-pri1 py-4 px-2 flex flex-col overflow-x-hidden h-full max-h-244 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
                        <div style={{padding:'0px 16px'}}>
                            {
                                competitions.arrm_init.some(item=>item.status)?(
                                    <MarketExpand name="retailers" values={competitions.arrm_init} />
                                ):<Fragment/>
                            }
                            {
                                competitions.arr1m_init.some(item=>item.status)?(
                                    <MarketExpand name="brands" values={competitions.arr1m_init} />
                                ):<Fragment/>
                            }
                        </div>
                    </div>
                </>
            }
            <div className="flex text-white h-39 items-center text-14 cursor-pointer justify-between capitalize">
                <h1 className="hover:bg-pri1 p-2 w-full flex items-center" style={{height:'100%'}}>
                    categories
                </h1>
            </div>
            <div className="flex relative text-white h-39 items-center text-14  justify-between capitalize">
                <h1 onClick={()=>{
                    dispatch({type:MARKET,payload:false})
                    dispatch({type:COMPETITION,payload:false})
                    dispatch({type:COLOUR,payload:false})
                    dispatch({type:DATE,payload:false})
                    dispatch({type:PRICE,payload:false})
                    dispatch({type:KEYWORD,payload:!keyword1})
                }} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${keyword1?'bg-pri1':''}`} style={{height:'100%'}}>
                keywords
                </h1>
                {
                    keywordStatus ? keywordExpand?(
                        <div onClick={()=>setkeywordExpand(!keywordExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <Minus className="svg1"/>
                        </div>
                    ):(
                        <div onClick={()=>setkeywordExpand(!keywordExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <Add className="svg1"/>
                        </div>
                    ):<Fragment />
                }
                {
                    keyword1 &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'-3rem'}}>
                        <div className="" style={{paddingTop:'3.5rem'}}>
                            <img src="/left.png" alt="" />
                        </div>
                        <Keywords />
                    </div>
                }
            </div>
            {
                keywordStatus && keywordExpand && 
                <>
                    <div className="bg-pri1 py-4 px-2 flex flex-col overflow-x-hidden h-full max-h-244 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
                        <div style={{padding:'0px 16px'}}>
                            {
                                keywords.include.length>0?(
                                    <KeywordExpand name="Include" values={keywords.include} />
                                ):<Fragment/>
                            }
                            {
                                keywords.exclude.length>0?(
                                    <KeywordExpand name="Exclude" values={keywords.exclude} />
                                ):<Fragment/>
                            }
                        </div>
                    </div>
                </>
            }
            <div className="flex relative text-white h-39 items-center text-14  justify-between capitalize">
                <h1 onClick={()=>{
                    dispatch({type:MARKET,payload:false})
                    dispatch({type:COMPETITION,payload:false})
                    dispatch({type:COLOUR,payload:!col})
                    dispatch({type:DATE,payload:false})
                    dispatch({type:PRICE,payload:false})
                    dispatch({type:KEYWORD,payload:false})
                }} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${col?'bg-pri1':''}`} style={{height:'100%'}}>
                colors
                </h1>
                {
                    coloursStatus ? coloursExpand?(
                        <div onClick={()=>setcoloursExpand(!coloursExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <Minus className="svg1"/>
                        </div>
                    ):(
                        <div onClick={()=>setcoloursExpand(!coloursExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <Add className="svg1"/>
                        </div>
                    ):<Fragment />
                }
                {
                    col &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'-3rem'}}>
                        <div className="" style={{paddingTop:'3.5rem'}}>
                            <img src="/left.png" alt="" />
                        </div>
                        <Colours />
                    </div>
                }
            </div>
            {
                coloursStatus && coloursExpand && 
                <>
                    <div className="bg-pri1 py-4 px-2 flex flex-col overflow-x-hidden h-full max-h-244 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
                        <div style={{padding:'0px 16px'}}>
                            {
                                colours.arrm_init.some(item=>item.status)?(
                                    <MarketExpand name="Colors" values={colours.arrm_init} />
                                ):<Fragment/>
                            }
                        </div>
                    </div>
                </>
            }
            <div className="flex relative text-white h-39 items-center text-14 cursor-pointer justify-between capitalize">
                <h1 onClick={()=>{
                    dispatch({type:MARKET,payload:false})
                    dispatch({type:COMPETITION,payload:false})
                    dispatch({type:COLOUR,payload:false})
                    dispatch({type:DATE,payload:false})
                    dispatch({type:KEYWORD,payload:false})
                    dispatch({type:PRICE,payload:!price1})
                }} className={`hover:bg-pri1 p-2 w-full cursor-pointer flex items-center ${price1?'bg-pri1':''}`} style={{height:'100%'}}>
                    price & status
                </h1>
                {
                    pricesStatus ? priceExpand?(
                        <div onClick={()=>setPriceExpand(!priceExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <Minus className="svg1"/>
                        </div>
                    ):(
                        <div onClick={()=>setPriceExpand(!priceExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <Add className="svg1"/>
                        </div>
                    ):<Fragment />
                }
                {
                    price1 &&
                    <div className="absolute flex " style={{right:'-21rem',zIndex:'1',top:'-15rem'}}>
                        <div className="" style={{paddingTop:'15.5rem'}}>
                            <img src="/left.png" alt="" />
                        </div>
                        <PriceStatus />
                    </div>
                }
            </div>
            {
                pricesStatus && priceExpand && <PriceExpand value={prices}/>
            }
            <div className="flex text-white h-39 items-center text-14 cursor-pointer justify-between capitalize">
                <h1 onClick={()=>{
                    dispatch({type:MARKET,payload:false})
                    dispatch({type:COMPETITION,payload:false})
                    dispatch({type:COLOUR,payload:false})
                    dispatch({type:PRICE,payload:false})
                    dispatch({type:DATE,payload:!date1})
                    dispatch({type:KEYWORD,payload:false})
                }} className="hover:bg-pri1 p-2 w-full flex items-center" style={{height:'100%'}}>
                    date & time
                </h1>
                {
                    datesStatus ? dateExpand?(
                        <div onClick={()=>setDateExpand(!dateExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer bg-pri1">
                            <Minus className="svg1"/>
                        </div>
                    ):(
                        <div onClick={()=>setDateExpand(!dateExpand)} className="flex w-44 h-44 items-center justify-center cursor-pointer hover:bg-pri1">
                            <Add className="svg1"/>
                        </div>
                    ):<Fragment />
                }
                {
                    date11 &&
                    <div className="absolute flex " style={{right:'-20.5rem',zIndex:'1',top:'3rem'}}>
                        <div className="" style={{paddingTop:'15.5rem'}}>
                            <img src="/left.png" alt="" />
                        </div>
                        <DateStatus />
                    </div>
                }
            </div>
            {
                datesStatus && dateExpand && <DateExpand value={dates}/>
            }
        </div>
    )
}

export default Brands
