import React from 'react'

const AppStore = React.createContext({
    cookiesData:null,
    folders:[
        {
            name:'Folder1',
            dashboards:[]
        }
    ]
})

export default AppStore