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
    ]
})

export default AppStore