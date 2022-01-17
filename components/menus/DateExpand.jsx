import React from 'react'
import moment from 'moment'
const DateExpand = ({value}) => {
    return (
        <div className="bg-pri1 py-4 px-2 flex flex-col overflow-x-hidden h-full max-h-244 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
            {
                value.radio1 && 
                <>
                    <h1 className="capitalize text-secondary6 text-12_20 mb-2">new in</h1>
                    {
                        value.radio1==="date range"?(
                            <div className="flex w-max flex-wrap mb-2 rounded-full items-center" style={{border:'1px solid #5B5B86'}}>
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'5px 8px',margin:'0 8px 0px 0'}}>{value.date1 && moment(value.date1).format("MMM Do YY")}</h2>
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'5px 8px',margin:'0 8px 0px 0'}}>{value.date2 && moment(value.date2).format("MMM Do YY")}</h2>
                            </div>
                        ):(
                            <div className="flex flex-wrap mb-2">
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.radio1}</h2>
                            </div>
                        )
                    }
                </>
            }
            {
                value.radio2 && 
                <>
                    <h1 className="capitalize text-secondary6 text-12_20 mb-2">first sell out</h1>
                    {
                        value.radio2==="date range"?(
                            <div className="flex w-max flex-wrap mb-2 rounded-full items-center" style={{border:'1px solid #5B5B86'}}>
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'5px 8px',margin:'0 8px 0px 0'}}>{value.date3 && moment(value.date3).format("MMM Do YY")}</h2>
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'5px 8px',margin:'0 8px 0px 0'}}>{value.date4 && moment(value.date4).format("MMM Do YY")}</h2>
                            </div>
                        ):(
                            <div className="flex flex-wrap mb-2">
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.radio2}</h2>
                            </div>
                        )
                    }
                </>
            }
            {
                value.radio3 && 
                <>
                    <h1 className="capitalize text-secondary6 text-12_20 mb-2">first discounted</h1>
                    {
                        value.radio3==="date range"?(
                            <div className="flex w-max flex-wrap mb-2 rounded-full items-center" style={{border:'1px solid #5B5B86'}}>
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'5px 8px',margin:'0 8px 0px 0'}}>{value.date5 && moment(value.date5).format("MMM Do YY")}</h2>
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'5px 8px',margin:'0 8px 0px 0'}}>{value.date6 && moment(value.date6).format("MMM Do YY")}</h2>
                            </div>
                        ):(
                            <div className="flex flex-wrap mb-2">
                                <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.radio3}</h2>
                            </div>
                        )
                    }
                </>
            }
        </div>
    )
}

export default DateExpand
