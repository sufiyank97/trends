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
import { currentUser } from '../apollo/client';
const FolderOpen = ({handelFolOpen}) => {
    const {state,dispatch}=useContext(AppStore)
    const {folders}=state
    const [folderName,setFolder]=useState('')
    const user = useReactiveVar(currentUser);
    const [createFolder] = useMutation(CREATE_FOLDER, {
        variables: {
          userid: user.id,
          folderDesc: folderName,
          folderName: folderName
        },
        update: (cache, { data: { createFolder } }) => {
          const { getFolderByUserId } = cache.readQuery({
            query: GET_FOLDERS,
            variables: { userId: user.id }
          });
          cache.writeQuery({
            query: GET_FOLDERS,
            variables: { userId: user.id },
            data: {
              getFolderByUserId: getFolderByUserId.concat(createFolder)
            }
          });
        }
      });
    return (
        <div className="flex flex-col justify-around h-full" style={{padding:'0 24px'}}>
            <span className="text-24 text-black1 capitalize">create folder</span>
            <input value={folderName} onChange={(e)=>setFolder(e.target.value)} type="text" placeholder="Folder name" className="outline-none text-grey3 text-16 w-full" style={{padding:'12px 16px',border:'1px solid #D9D9D9',borderRadius:'6px'}} />
            <div className="flex items-center self-end">
                <span onClick={()=>handelFolOpen()} className="capitalize cursor-pointer text-16 text-black2">cancel</span>
                <span onClick={async()=>{
                    // const foldersData={
                    //     name:folderName,
                    //     dashboards:[],
                    //     status:false
                    // }
                    // dispatch({
                    //     type:FOLDERS_DATA,
                    //     payload:[...folders,foldersData]
                    // })
                    await createFolder()
                    handelFolOpen()
                }} className="ml-4 capitalize cursor-pointer text-16 text-white bg-secondary1" style={{borderRadius:'6px',padding:'10px 20px'}}>create folder</span>
            </div>
        </div>
    )
}

export default FolderOpen
