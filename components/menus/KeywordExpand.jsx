import React from 'react'

const KeywordExpand = ({name,values}) => {
    return (
        <> 
            <h1 className="capitalize text-secondary6 text-12_20 mb-2">{name}</h1>
            <div className="flex flex-wrap mb-2">
                {
                    values.map((value,i)=>(
                        <h2 key={i} className="text-12_20 capitalize text-white rounded-full" style={{padding:'2px 8px',margin:'0 8px 10px 0',border:'1px solid #5B5B86'}}>{value}</h2>
                    ))
                }
            </div>
        </>
    )
}

export default KeywordExpand
