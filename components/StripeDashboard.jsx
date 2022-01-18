import React,{useState,Fragment} from 'react'
import Delete from '../public/ic-delete.svg'
import Alert from '../public/ic-alert.svg'
import Modal from 'react-modal'
import EmailOpen from './EmailOpen'
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
        width: '626px',
        height: '316px',
        background: '#fff',
        borderRadius:'16px',
        boxSizing: 'border-box',
        boxShadow: '2px 4px 24px 2px rgba(0, 0, 0, 0.25)',
        padding: '24px 40px',
    }
}
const StripeDashboard = ({active,data,handleDashboardStatus,handleDashboardDelete}) => {
    const [openFolder,setOpenFolder]=useState(false)
    var arr1=[]
    for(var i=1;i<=10;i++){
        arr1.push(i)
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
                <EmailOpen handelFolOpen={()=>setOpenFolder(false)}/>
            </Modal>
            <div onClick={()=>handleDashboardStatus()} className={`cursor-pointer hover:bg-secondary3  flex flex-col justify-center ${active?'bg-secondary2':'bg-secondary'} `} style={{borderRadius:'8px',marginTop:'11px'}}>
                <div className={`flex justify-between group items-center h-60`} style={{padding:'0 24px'}}>
                    <span className="flex text-14 text-white capitalize">
                        {data.dashboard_name}
                    </span>
                    <div className="flex text-14 text-pricol1">
                        <div className={`${active?'flex':'hidden group-hover:flex'}`}>
                            <Delete className="mr-4 cursor-pointer svg2"  onClick={()=>handleDashboardDelete()}/>
                            <Alert className="mr-4 cursor-pointer svg2"  onClick={()=>setOpenFolder(true)}/>
                        </div>
                        <span>
                            {/* {data.products} products */}
                            1920 products
                        </span>
                    </div>
                </div>
                {
                    active?(
                        <div className="flex flex-col w-full">
                            <span className="w-full" style={{height:'.1rem',background: 'rgba(255, 255, 255, 0.15)'}}></span>
                            <div className="flex justify-between w-full h-200" style={{padding:'24px'}}>
                                <div className="flex">
                                    <img src="/img1.png" alt="" />
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {
                                        arr1.map(item=>(
                                            <img key={item} className="w-full" src="/img2.png" alt="" />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ):<Fragment/>
                }
            </div>
        </>
    )
}

export default StripeDashboard
