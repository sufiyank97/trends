import React,{useState,useContext,useEffect} from 'react'
import AppStore from './store'
import Cookies from './Cookies'
import Modal from 'react-modal'
import UserModal from './UserModal'
import DrawerModal from './DrawerModal'
import Brands from './Brands'
const CUSTOM_STYLING={
    overlay:{
        background: 'transparent',
        // opacity: "0.95",
        zIndex:'11111'
    },
    content:{
        position:'absolute',
        top: '56px',
        left: 'auto',
        right: '0px',
        bottom: 'auto',
        width: '316px',
        height: 'auto',
        background: '#464775',
        border:'0px',
        boxSizing: 'border-box',
        borderRadius: '6px',
    }
}
const CUSTOM_STYLING1={
    overlay:{
        // background: 'rgba(51, 52, 73, 0.8)',
        background: 'transparent',
        // opacity: "0.95",
        zIndex:'11111'
    },
    content:{
        position:'absolute',
        top: '60px',
        left: '80px',
        right: 'auto',
        bottom: 'auto',
        width: 'auto',
        height: '100vh',
        background: '#464775',
        border:'0px',
        boxSizing: 'border-box',
        padding: '0px',
        borderRadius:'0px'
    }
}
const CUSTOM_STYLING2={
    overlay:{
        background: 'rgba(51, 52, 73, 0.8)',
        // opacity: "0.95",
        zIndex:'11111'
    },
    content:{
        position:'absolute',
        top: '65px',
        left: '80px',
        right: 'auto',
        bottom: 'auto',
        width: 'auto',
        height: 'auto',
        // maxHeight: '619px',
        background: '#464775',
        border:'0px',
        boxSizing: 'border-box',
        padding: '0px',
    }
}
const Dashboard = () => {
    const {state}=useContext(AppStore)
    const {cookiesData,pinned}=state
    const [cookies,setCookies]=useState(false)
    useEffect(()=>{
        if(cookiesData){
            setCookies(true)
        }else{
            setCookies(false)
        }
    },[cookiesData])
    const menus=[
        {
            name:'dashboard',
            img:'/ic-dashboard.svg'
        },
        {
            name:'summary',
            img:'/ic-summary.svg'
        },
        {
            name:'brands',
            img:'/ic-brands.svg'
        },
        {
            name:'trends',
            img:'/ic-trends.svg'
        },
        {
            name:'market',
            img:'/ic-market.svg'
        },
    ]
    const initMenus=[
        {
            name:'overview',
            active:true
        },
        {
            name:'facebook',
            active:false
        },
        {
            name:'twitter',
            active:false
        },
        {
            name:'instagram',
            active:false
        },
        {
            name:'searches',
            active:false
        },
    ]
    const [menus1,setMenus1]=useState(initMenus)
    const initsubtabs=[
        {
            name:'social stream',
            active:true
        },
        {
            name:'social buzz',
            active:false
        }
    ]
    const [subTabs,setSubTabs]=useState(initsubtabs)
    const [active,setActive]=useState(null)
    const [isOpen,setOpen]=useState(false)
    const [isOpen1,setOpen1]=useState(false)
    const [isOpen2,setOpen2]=useState(false)
    const images=[]
    for(var i=0;i<=28;i++){
        images.push(i)
    }
    const [brands,setBrands]=useState(false)
    const [pin,setPinned]=useState(false)
    useEffect(()=>{
        setPinned(pinned)
    },[pinned])
    return (
        <div>
            {
                !cookies && <Cookies />
            }
            <Modal
                isOpen={isOpen}
                style={CUSTOM_STYLING}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={()=>setOpen(false)}
                ariaHideApp={false}
            >
                <UserModal handelAccOpen={()=>setOpen(false)}/>
            </Modal>
            <Modal
                isOpen={isOpen1}
                style={CUSTOM_STYLING1}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={()=>{
                    setOpen1(false)
                    setActive('')
                }}
                ariaHideApp={false}
            >
                <DrawerModal handelOpen1={()=>{
                    setOpen1(false)
                    setActive('')
                }}/>
            </Modal>
            <Modal
                isOpen={isOpen2}
                style={CUSTOM_STYLING2}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={()=>setOpen2(false)}
                ariaHideApp={false}
            >
                <Brands />
                {/* <DrawerModal handelOpen1={()=>setOpen1(false)}/> */}
            </Modal>
            <div className="relative overflow-hidden">
                <div className="flex items-center justify-between w-full absolute bg-primary h-60" style={{paddingLeft:'80px'}}>
                    <h1 className="capitalize text-white text-16 pl-4 font-noto">brands</h1>
                    <div className="flex items-center pr-4 cursor-pointer" onClick={()=>setOpen(!isOpen)}>
                        <h1 className="text-white text-12 capitalize pr-1 font-noto">alex b.</h1>
                        <div className="flex  w-24">
                            <img src="/user.png" alt="" className="w-full"/>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center w-80  bg-primary h-screen">
                    <div className="flex justify-center h-60 z-10 items-center w-full">
                        <div className="flex w-28">
                            <img src="/logo2.svg" className="w-full" alt="" />
                        </div>
                    </div>
                    {
                        menus.map((item,i)=>(
                            <div key={i} onClick={()=>{
                                setActive(item.name)
                                if(item.name==="dashboard"){
                                    setOpen1(!isOpen1)
                                    setBrands(false)
                                }else if(item.name==="brands"){
                                    setBrands(!brands)
                                    setOpen1(false)
                                }else{
                                    setBrands(false)
                                    setOpen1(false)
                                    setBrands(false)
                                }
                            }} className={`z-10 flex ${i===0 && 'mt-2'} cursor-pointer hover:bg-secondary ${active===item.name?'bg-secondary border-l-4 border-green1':''} flex-col w-full justify-center h-83 items-center`}>
                                <div className="flex w-28">
                                    <img src={item.img} className="w-full object-none" alt="" />
                                </div>
                                <h1 className="capitalize text-grey text-11 pt-2 font-noto">{item.name}</h1>
                            </div>
                        ))
                    }
                    {
                        brands &&
                        <div className="absolute bg-secondary h-screen" style={{right:'-19.5rem',zIndex:'1',top:'3.7rem'}}>
                            <Brands />
                        </div>
                    }
                </div>
                <div className="absolute w-full overflow-y-scroll h-full" style={{top:'60px',paddingLeft:pin?'393px':'80px'}}>
                    <div className="flex w-full h-auto px-5 flex-col bg-greylight">
                        <div className="flex justify-between py-2">
                            <h1 className="capitalize text-black1 text-12 font-noto" style={{borderBottom:'3px solid #7EC243',height:'fit-content'}}>main</h1>
                            <img src="/trendslogo.svg" alt="" />
                        </div>
                        <div className="flex mt-4">
                            {
                                menus1.map((item,i)=>(
                                    <div key={i} onClick={()=>{
                                        setMenus1(menus1=>menus1.map(menu=>menu.name===item.name?{...menu,active:true}:{...menu,active:false}))
                                        
                                    }} className={`flex ${item.active?'bg-white':''}  justify-center items-center cursor-pointer w-118 h-68`} style={{borderTop: item.active?'2px solid #21241E':'1px solid #F1F1F1',borderBottom:item.active?'':'1px solid #F1F1F1'}}>
                                        <h1 className={`${item.active?'text-black':'text-greylight1'} text-16_28 capitalize font-noto`}>{item.name}</h1>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex bg-white">
                            {
                                subTabs.map((item,i)=>(
                                    <span key={i} onClick={()=>setSubTabs(subTabs=>subTabs.map(subTab=>subTab.name===item.name?{...subTab,active:true}:{...subTab,active:false}))} className={`p-2 cursor-pointer font-noto capitalize text-12 ${item.active?'text-black1':'text-greylight2'}`} style={{borderTop:item.active?'2px solid #7EC243':''}}>
                                        {item.name}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="p-4 grid grid-cols-7 mb-16 bg-white gap-4">
                            {
                                images.map(item=>(
                                    <img key={item} src="/image1.png" alt="" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard