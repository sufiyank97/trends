import React,{useState,useContext,useEffect} from 'react'
import {FOLDERS_DATA} from './AppConstants'
import AppStore from './store'

const DashboardOpen = ({handelDashOpen}) => {
    const {state,dispatch}=useContext(AppStore)
    const {folders}=state
    const [dashboardName,setDashboard]=useState('')
    return (
        <div className="flex flex-col justify-around h-full" style={{padding:'0 24px'}}>
            <span className="text-24 text-black1 capitalize">create dashboard</span>
            <input value={dashboardName} onChange={(e)=>setDashboard(e.target.value)} type="text" placeholder="Dashboard name" className="outline-none text-grey3 text-16 w-full" style={{padding:'12px 16px',border:'1px solid #D9D9D9',borderRadius:'6px'}} />
            <div className="flex items-center self-end">
                <span onClick={()=>handelDashOpen()} className="capitalize cursor-pointer text-16 text-black2">cancel</span>
                <span onClick={()=>{
                    const foldersData={
                        name:dashboardName,
                        images:[],
                        products:1920,
                        status:true
                    }
                    const cc=folders.map(item=>item.status?{...item,dashboards:[...item.dashboards,foldersData]}:{...item})
                    dispatch({
                        type:FOLDERS_DATA,
                        payload:cc
                    })
                    handelDashOpen()
                }} className="ml-4 capitalize cursor-pointer text-16 text-white bg-secondary1" style={{borderRadius:'6px',padding:'10px 20px'}}>create dashboard</span>
            </div>
        </div>
    )
}

export default DashboardOpen
