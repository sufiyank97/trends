import React from 'react'

const PriceExpand = () => {
    return (
        <div className="h-244 bg-pri1 py-4 px-2 flex flex-col">
            <div className="flex flex-col">
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
            </div>
        </div>
    )
}

export default PriceExpand
