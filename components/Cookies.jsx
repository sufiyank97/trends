import React,{useContext} from 'react'
import AppStore from './store'
import {COOKIES_DATA} from './AppConstants'
const Cookies = () => {
    const {dispatch}=useContext(AppStore)
    return (
        <div className="fixed flex justify-center items-center h-88 w-full z-20" style={{background:'rgba(51, 52, 73, 0.9)'}}>
            <h1 className="text-white text-12_20 w-480">We are using cookies in order to improve your experience visiting this website. Accept or follow the link for more information.</h1>
            <div className="flex items-center ml-4">
                <button className="capitalize focus:outline-none bg-secondary1 text-white px-2 py-1 rounded-md text-12_20" onClick={()=>dispatch({type:COOKIES_DATA,payload:true})}>accept</button>
                <h1 className="text-white mx-4 text-12_20">or</h1>
                <h1 className="text-secondary1 text-12_20 cursor-pointer">more info</h1>
            </div>
        </div>
    )
}

export default Cookies
