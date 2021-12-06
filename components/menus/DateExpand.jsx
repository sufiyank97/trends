import React from 'react'

const DateExpand = () => {
    return (
        <div className="h-244 bg-pri1 py-4 px-2 flex flex-col">
            <div className="flex flex-col">
                <label htmlFor="" className="mb-2 capitalize text-pricol1 text-12_20">new in</label>
                <select name="" id="" className="outline-none p-1 text-15 text-white bg-transparent border-2 rounded-md border-greylight4">
                    <option value="">All</option>
                </select>
            </div>
            <div className="flex flex-col my-4">
                <label htmlFor="" className="mb-2 capitalize text-pricol1 text-12_20">first sell out</label>
                <select name="" id="" className="outline-none p-1 text-15 text-white bg-transparent border-2 rounded-md border-greylight4">
                    <option value="">All</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="mb-2 capitalize text-pricol1 text-12_20">first discounted</label>
                <select name="" id="" className="outline-none p-1 text-15 text-white bg-transparent border-2 rounded-md border-greylight4">
                    <option value="">All</option>
                </select>
            </div>
        </div>
    )
}

export default DateExpand
