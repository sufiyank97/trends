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
    dashboards:[],
    selectedFolderValue:{},
    competition:false,
    colour:false,
    price:false,
    keyword:false,
    date1:false,
    market:false,
    pinned:false,
    markets:{
        arrm_init:[
            {
                name:'argentina (AR)',
                status:false
            },
            {
                name:'india',
                status:false
            },
            {
                name:'USA',
                status:false
            },
            {
                name:'UK',
                status:false
            },
            {
                name:'Africa',
                status:false
            },
            {
                name:'Duabi',
                status:false
            },
            {
                name:'pakistan',
                status:false
            },
        ],
        arr1m_init:[
            {
                name:'value',
                status:false
            },
            {
                name:'mass',
                status:false
            },
            {
                name:'premium',
                status:false
            },
            {
                name:'luxury',
                status:false
            },
        ],
        arr3m_init:[
            {
                name:'girls',
                status:false
            },
            {
                name:'unisex',
                status:false
            },
            {
                name:'boys',
                status:false
            },
            {
                name:'baby',
                status:false
            },
        ],
        arr2m_init:[
            {
                name:'women',
                status:false
            },
            {
                name:'men',
                status:false
            },
        ]
    },
    competitions:{
        arrm_init:[
            {
                name:'jakeshoes',
                status:false
            },
            {
                name:'jakeshoes1',
                status:false
            },
            {
                name:'jakeshoes2',
                status:false
            },
            {
                name:'jakeshoes3',
                status:false
            },
            {
                name:'jakeshoes4',
                status:false
            },
        ],
        arr1m_init:[
            {
                name:'boohoo',
                status:false
            },
            {
                name:'new look',
                status:false
            },
            {
                name:'nike',
                status:false
            },
        ],
    },
    colours:{
        arrm_init:[
            {
                name:'black',
                status:false
            },
            {
                name:'red',
                status:false
            },
            {
                name:'white',
                status:false
            },
            {
                name:'grey',
                status:false
            },
            {
                name:'purple',
                status:false
            },
        ],
    },
    prices:{
        arrm_init:[
            {
                name:'all',
                status:false
            },
            {
                name:'full price',
                status:false
            },
            {
                name:'not full price',
                status:false
            },
            {
                name:'0%-10%',
                status:false
            },
            {
                name:'10%-20%',
                status:false
            },
            {
                name:'20%-30%',
                status:false
            },
            {
                name:'30%-40%',
                status:false
            },
            {
                name:'40%-50%',
                status:false
            },
            {
                name:'50%-60%',
                status:false
            },
            {
                name:'60%-70%',
                status:false
            },
            {
                name:'70%-80%',
                status:false
            },
            {
                name:'80%-90%',
                status:false
            },
            {
                name:'90%-100%',
                status:false
            },
        ],
        radio1:null,
        radio2:null,
        radio3:null,
    },
    dates:{
        radio1:null,
        radio2:null,
        radio3:null,
        date1:null,
        date2:null,
        date3:null,
        date4:null,
        date5:null,
        date6:null,

    },
    markets_status:false
})

export default AppStore