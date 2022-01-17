import React from 'react'

const MarketExpand = ({name,values}) => {
    var activeData=values.filter(v1=>v1.status)
    return (
        <> 
            <h1 className="capitalize text-secondary6 text-12_20 mb-2">{name}</h1>
            <div className="flex flex-wrap mb-2">
                {
                    activeData.map((value,i)=>(
                        <h2 key={i} className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value.name}</h2>
                    ))
                }
                <h2></h2>
            </div>
        </>
    )
}

export default MarketExpand
