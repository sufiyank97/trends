import React,{Fragment} from 'react'

const StripeDashboard = ({active}) => {
    var arr1=[]
    for(var i=1;i<=10;i++){
        arr1.push(i)
    }
    return (
        <div className={`flex flex-col justify-center ${active?'bg-secondary2':'bg-secondary'} `} style={{borderRadius:'8px',marginTop:'11px'}}>
            <div className={`flex justify-between items-center h-60`} style={{padding:'0 24px'}}>
                <span className="flex text-14 text-white">
                    Dashboard
                </span>
                <div className="flex text-14 text-pricol1">
                    {
                        active?(
                            <div className="flex">
                                <img src="delete.png" className="mr-4" alt="" />
                                <img src="notify.png" className="mr-4" alt="" />
                            </div>
                        ):<Fragment/>
                    }
                    <span>
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
    )
}

export default StripeDashboard
