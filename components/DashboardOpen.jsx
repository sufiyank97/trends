import React,{useState,useContext,useEffect} from 'react'
import {FOLDERS_DATA} from './AppConstants'
import AppStore from './store'
import {
    useQuery,
    useMutation,
    useApolloClient,
    useReactiveVar
} from '@apollo/client';
import { GET_CURRENT_USER, GET_SELECTED_FOLDER } from '../apollo/local/queries';
import {
  GET_FOLDERS,
  GET_SHARED_FOLDERS,
  GET_DASHBOARDS_BY_FOLDER_ID
} from '../apollo/remote/queries';
import {
  CREATE_FOLDER,
  CREATE_DASHBOARD,
  DELETE_DASHBOARD
} from '../apollo/remote/mutations';
const DashboardOpen = ({handelDashOpen}) => {
    const {state,dispatch}=useContext(AppStore)
    const {folders,selectedFolderValue}=state
    const [dashboardName,setDashboard]=useState('')
    const [selectedFolder,setselectedFolder]=useState({})
    useEffect(()=>{
        if(Object.keys(selectedFolderValue).length>0){
            setselectedFolder(selectedFolderValue)
        }
    },[selectedFolderValue])
    // Create dashboard
    const [createDashboard] = useMutation(CREATE_DASHBOARD, {
        variables: {
            folderId: selectedFolder?.id || null,
            dashboardDesc: dashboardName,
            dashboardName: dashboardName
        },
        update: (cache, { data: { createDashboard } }) => {
        const { getDashboardByFolderId } = cache.readQuery({
            query: GET_DASHBOARDS_BY_FOLDER_ID,
            variables: { folderId: selectedFolder.id }
        });
        cache.writeQuery({
            query: GET_DASHBOARDS_BY_FOLDER_ID,
            variables: { folderId: selectedFolder.id },
            data: {
            getDashboardByFolderId: getDashboardByFolderId.concat(createDashboard)
            }
        });
        }
    });
    return (
        <div className="flex flex-col justify-around h-full" style={{padding:'0 24px'}}>
            <span className="text-24 text-black1 capitalize font-noto">create dashboard</span>
            <input value={dashboardName} onChange={(e)=>setDashboard(e.target.value)} type="text" placeholder="Dashboard name" className="outline-none text-grey3 text-16 w-full" style={{padding:'12px 16px',border:'1px solid #D9D9D9',borderRadius:'6px'}} />
            <div className="flex items-center self-end">
                <span className="bg-transparent hover:bg-greylight focus:bg-greylight1 active:bg-greylight1 cursor-pointer w-75 h-42 flex items-center justify-center" style={{marginRight:'16px',padding: '10px 20px',borderRadius:'6px'}} onClick={()=>handelDashOpen()}>
                    <h2 className="text-16_22 text-black2 font-noto">Cancel</h2>
                </span>
                <span onClick={async()=>{
                    await createDashboard()
                    handelDashOpen()
                }} className="bg-secondary1 hover:bg-secondary11 focus:bg-secondary111 cursor-pointer w-75 h-42 flex items-center justify-center" style={{padding: '10px 20px',borderRadius:'6px'}}>
                    <h2 className="text-16_22 text-white font-noto">create dashboard</h2>
                </span>
            </div>
        </div>
    )
}

export default DashboardOpen
