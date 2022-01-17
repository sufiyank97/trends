import React from 'react'

const PriceExpand = ({value}) => {
    return (
        <div className="bg-pri1 py-4 px-2 flex flex-col overflow-x-hidden h-full max-h-244 scrollbar-thin scrollbar-thumb-secondary7 scrollbar-track-secondary8 scrollbar-thumb-rounded-2xl">
            {
                value.radio1 && 
                <>
                    <h1 className="capitalize text-secondary6 text-12_20 mb-2">Status</h1>
                    <div className="flex flex-wrap mb-2">
                        <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.radio1}</h2>
                    </div>
                </>
            }
            {
                value.radio2 && 
                <>
                    <h1 className="capitalize text-secondary6 text-12_20 mb-2">Discounted</h1>
                    <div className="flex flex-wrap mb-2">
                        <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.radio2}</h2>
                    </div>
                </>
            }
            {
                value.radio3 && 
                <>
                    <h1 className="capitalize text-secondary6 text-12_20 mb-2">Replenished</h1>
                    <div className="flex flex-wrap mb-2">
                        <h2 className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.radio3}</h2>
                    </div>
                </>
            }
            {
                value.arrm_init.filter(f1=>f1.status).length>0 && 
                <>
                    <h1 className="capitalize text-secondary6 text-12_20 mb-2">Markdown</h1>
                    <div className="flex flex-wrap mb-2">
                        {
                            value.arrm_init.filter(f1=>f1.status).map((value,i)=>(
                                <h2 key={i} className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.name}</h2>
                            ))
                        }
                    </div>
                </>
            }
            {/* <div className="flex flex-col">
                <label htmlFor="" className="mb-2 capitalize text-pricol1 text-12_20">price & status</label>
                <select name="" id="" className="outline-none p-1 text-15 text-white bg-transparent border-2 rounded-md border-greylight4">
                    <option value="">All</option>
                </select>
            </div>
            <div className="flex flex-col my-4">
                <label htmlFor="" className="mb-2 capitalize text-pricol1 text-12_20">discounted</label>
                <select name="" id="" className="outline-none p-1 text-15 text-white bg-transparent border-2 rounded-md border-greylight4">
                    <option value="">All</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="mb-2 capitalize text-pricol1 text-12_20">replenished</label>
                <select name="" id="" className="outline-none p-1 text-15 text-white bg-transparent border-2 rounded-md border-greylight4">
                    <option value="">All</option>
                </select>
            </div> */}
        </div>
    )
}

export default PriceExpand
