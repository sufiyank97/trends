import React from 'react'

const AppStore = React.createContext({
    cookiesData:null,
    folders:[
        {
            name:'Folder1',
            dashboards:[
                {
                    name:'Dashboard1',
                    images:[],
                    products:1920,
                    status:false
                }
            ],
            status:true
        }
    ],
    competition:false,
    colour:false,
    price:false,
    market:false,
})

export default AppStore