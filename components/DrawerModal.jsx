import React, { useReducer, useEffect,useState,useContext,Fragment, useCallback } from 'react';
import {
  useQuery,
  useMutation,
  useApolloClient,
  useReactiveVar
} from '@apollo/client';
import StripeDashboard from './StripeDashboard'
import FolderOpen from './FolderOpen'
import DashboardOpen from './DashboardOpen'
import Modal from 'react-modal'
import AppStore from './store'
import {FOLDERS_DATA,DASHBOARDS_DATA,SELECTED_FOLDER_DATA} from './AppConstants'
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
import { currentUser } from '../apollo/client';
const DrawerModal = ({handelOpen1}) => {
    const {state,dispatch}=useContext(AppStore)
    const {folders,dashboards}=state
    const inittabs1=[
        {
            name:'my folders',
            active:true
        },
        {
            name:'shared with me',
            active:false
        },
        {
            name:'template',
            active:false
        },
    ]
    const [tabs1,setTabs1]=useState(inittabs1)
    const CUSTOM_STYLING={
        overlay:{
            background: 'rgba(51, 52, 73, 0.8)',
            // opacity: "0.95",
            zIndex:'11111'
        },
        content:{
            position:'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform:'translate(-50%,-50%)',
            width: '699px',
            height: '315px',
            background: '#fff',
            borderRadius:'16px',
            boxSizing: 'border-box',
            boxShadow: '2px 4px 24px 2px rgba(0, 0, 0, 0.25)',
            padding: '0px',
        }
    }
    const [openFolder,setOpenFolder]=useState(false)
    const [openDashboard,setOpenDashboard]=useState(false)
    const [myFolders,setMyFolders]=useState([])
    useEffect(()=>{
        if(folders.length>0){
            setMyFolders1(folders)
        }
    },[folders])
    // Apollo
    const client = useApolloClient();

    const user = useReactiveVar(currentUser);

    const { data: userFoldersData, foldersLoading, foldersError } = useQuery(
        GET_FOLDERS,
        {
        variables: {
            userId: user.id
        }
        }
    );
    const [myFolders1,setMyFolders1]=useState([])
    useEffect(()=>{
        if(userFoldersData){
            if(userFoldersData.getFolderByUserId){
                var foldersData=Object.values(userFoldersData.getFolderByUserId).map((item,i)=>i==0?{...item,'status':true}:{...item,'status':false})
                dispatch({
                    type:FOLDERS_DATA,
                    payload:foldersData
                })
            }
        }
    },[userFoldersData])
    const [selectedFolder,setSelectedFolder]=useState(null)
    const [myDashboards,setDashboards]=useState([])
    const { data, dashboardsLoading, dashboardsError } = useQuery(
        GET_DASHBOARDS_BY_FOLDER_ID,
        {
            variables: {
                folderId: selectedFolder?.id || null
            },
            skip: !selectedFolder
        }
        );
    console.log(myDashboards,'myDashboards')
    // Delete dashboard
    const [deleteDashboard] = useMutation(DELETE_DASHBOARD, {
        update: (cache, { data: { deleteDashboard } }) => {
        const { getDashboardByFolderId } = cache.readQuery({
            query: GET_DASHBOARDS_BY_FOLDER_ID,
            variables: { folderId: selectedFolder.id }
        });
        cache.writeQuery({
            query: GET_DASHBOARDS_BY_FOLDER_ID,
            variables: { folderId: selectedFolder.id },
            data: {
            getDashboardByFolderId: getDashboardByFolderId.filter(
                dashboard => dashboard.id !== deleteDashboard.id
            )
            }
        });
        }
    });
    useEffect(()=>{
        if(data){
            if(Object.values(data.getDashboardByFolderId).length>0){
                // if(myDashboards.length>0){
                //     var dashboardsData=Object.values(data.getDashboardByFolderId)
                //     var arr1=[...myDashboards]
                //     dashboardsData.map(item=>{
                //         if(myDashboards.every(item1=>item1.id!==item.id)){
                //             arr1.push({...item,status:false})
                //         }
                //     })
                //     dispatch({
                //         type:DASHBOARDS_DATA,
                //         payload:arr1
                //     })
                // }else{
                    var dashboardsData=Object.values(data.getDashboardByFolderId).map((item,i)=>i==0?{...item,'status':false}:{...item,'status':false})
                    dispatch({
                        type:DASHBOARDS_DATA,
                        payload:dashboardsData
                    })
                // }
            }else{
                dispatch({
                    type:DASHBOARDS_DATA,
                    payload:[]
                })
            }
        }else{
            dispatch({
                type:DASHBOARDS_DATA,
                payload:[]
            })
        }
    },[data])
    useEffect(()=>{
        setDashboards(dashboards)
    },[dashboards])
    useEffect(()=>{
        if(myFolders1.length>0){
            const selectedFolderData=myFolders1.find(item=>item.status)
            dispatch({
                type:SELECTED_FOLDER_DATA,
                payload:selectedFolderData
            })
            setSelectedFolder(selectedFolderData)
        }
    },[myFolders1])
    const handleDashboardStatus=(item)=>{
        dispatch({
            type:DASHBOARDS_DATA,
            payload:myDashboards.map(item1=>item1.id===item.id?{...item1,'status':!item1.status}:{...item1})
        })
        // const folders=[...myFolders]
        // dispatch({
        //     type:FOLDERS_DATA,
        //     payload:folders.map(folder=>{
        //         if(folder.name===item.name){
        //             const dashboardF=folder.dashboards.map(dashboard=>{
        //                 if(dashboard.name===item1.name){
        //                     dashboard['status']=!dashboard['status']
        //                     return dashboard
        //                 }else{
        //                     dashboard['status']=false
        //                     return dashboard
        //                 }
        //             })
        //             folder['dashboards']=dashboardF
        //             return folder
        //         }else{
        //             return folder
        //         }
        //     })
        // })

    }
    const handleDashboardDelete=(item,item1)=>{
        const folders=[...myFolders]
        dispatch({
            type:FOLDERS_DATA,
            payload:folders.map(folder=>{
                if(folder.name===item.name){
                    const dashboardF=folder.dashboards.filter(dashboard=>dashboard.name!=item1.name)
                    folder['dashboards']=dashboardF
                    return folder
                }else{
                    return folder
                }
            })
        })
    }
    
    return (
        <>
            <Modal
                isOpen={openFolder}
                style={CUSTOM_STYLING}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={()=>setOpenFolder(false)}
                ariaHideApp={false}
            >
                <FolderOpen handelFolOpen={()=>setOpenFolder(false)}/>
            </Modal>
            <Modal
                isOpen={openDashboard}
                style={CUSTOM_STYLING}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                onRequestClose={()=>setOpenDashboard(false)}
                ariaHideApp={false}
            >
                <DashboardOpen handelDashOpen={()=>setOpenDashboard(false)}/>
            </Modal>
            <div className="flex" style={{height:'inherit'}}>
                <div className="flex flex-col w-316">
                    <div className="flex h-39 justify-around">
                        {
                            tabs1.map((item,i)=>(
                                <div key={i} onClick={()=>setTabs1(tabs1=>tabs1.map(item1=>item1.name===item.name?{...item1,active:true}:{...item1,active:false}))} className="flex items-center cursor-pointer justify-center w-full" style={{borderTop:item.active?'3px solid #7EC243':''}}>
                                    <span   className={`capitalize text-12_20 ${item.active?'text-white':'text-pricol1'}`}>{item.name}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-around items-center h-60" style={{padding:'12px 16px'}}>
                        <input onChange={(e)=>{
                                if(!e.target.value){
                                    setMyFolders1(folders)
                                }else{
                                    setMyFolders1(folders.filter(item=>item.folderName.toLowerCase().includes(e.target.value.toLowerCase())))
                                }
                            }} type="text" className="text-12_20 w-191 outline-none text-white" style={{borderRadius:'50px',background:'rgba(0, 0, 0, 0.07)',padding:'8px 16px'}} placeholder="Search for folders..."/>
                        <span onClick={()=>setOpenFolder(true)} className="cursor-pointer capitalize text-yellow text-13">+add folder</span>
                    </div>
                    <div className="flex flex-col w-full">
                        {
                            myFolders1.map((item,i,arr)=>(
                                <div  key={i} className={`flex items-center px-4 hover:bg-pri1 cursor-pointer items-center justify-between h-48 w-full ${item.status?'bg-pri1':''}`}>
                                    <div onClick={()=>{
                                    if(myFolders.length!=1){
                                        // setMyFolders(folders=>folders.map(item1=>item1.name===item.name?{...item1,status:true}:{...item1,status:false}))
                                        dispatch({
                                            type:FOLDERS_DATA,
                                            payload:folders.map(item1=>item1.id===item.id?{...item1,status:true}:{...item1,status:false}) 
                                        })
                                    }
                                }} className="flex items-center w-full" style={{height:'100%'}}>
                                        <img src="/folder.png" className="h-15" alt="" />
                                        <h1 className="text-14 text-white px-2">{item.folderName}</h1>
                                    </div>
                                    <div className="flex h-20">
                                        <img src="/delete.png" className="w-full pr-2" alt="" onClick={()=>{
                                            if(myFolders.length===1){
                                                alert('Cant able to delete')
                                            }else{
                                                var arr=[]
                                                const cc=folders.filter(folder=>folder.name!=item.name)
                                                cc[0]['status']=true
                                                arr.push(cc)
                                                console.log(cc)
                                                dispatch({
                                                    type:FOLDERS_DATA,
                                                    payload:cc
                                                })
                                            }
                                        }} />
                                        <img src="/dots.png" className="w-full" alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col w-633 bg-pri1 overflow-hidden">
                    <div className="flex justify-between items-center h-60" style={{padding:'0 24px'}}>
                        <span onClick={()=>setOpenDashboard(true)} className="cursor-pointer capitalize text-yellow text-13">+add dashboard</span>
                        <div className="flex items-center">
                            <input onChange={(e)=>{
                                console.log(e.target.value)
                                if(!e.target.value){
                                    setDashboards(dashboards)
                                }else{
                                    setDashboards(dashboards.filter(dashboard=>dashboard.dashboard_name.toLowerCase().includes(e.target.value.toLowerCase())))
                                }
                            }} className="w-240 h-36 text-13 outline-none text-white" style={{borderRadius:'50px',padding:'8px 16px',background:'rgba(0, 0, 0, 0.05)'}} type="text" placeholder="Search for dashboard.."/>
                            <label className="flex items-center ml-4">
                                <input type="checkbox" onChange={(e)=>{
                                dispatch({
                                    type:DASHBOARDS_DATA,
                                    payload:myDashboards.map(item=>{
                                        return {...item,status:e.target.checked}
                                    })
                                })
                            }} />
                                <span  className="ml-2 text-12_20 text-pricol1 capitalize">expand all</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-auto" style={{padding:'0px 24px',height:'calc(100vh - 120px)'}}>
                    {
                        myDashboards.map((item,i)=>{
                            var {id}=item
                            return (
                                <Fragment key={i}>
                                    <StripeDashboard active={item.status} data={item} handleDashboardStatus={()=>handleDashboardStatus(item)} handleDashboardDelete={()=>deleteDashboard({ variables: { id } })}/>
                                </Fragment>
    
                            )
                        }
                        )
                        // myFolders.filter(item=>item.status).map((item,i)=>(
                        //     item.dashboards.map((item1,i1)=>(
                        //     <Fragment key={i1}>
                        //     </Fragment>
                        //     ))
                        // ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DrawerModal