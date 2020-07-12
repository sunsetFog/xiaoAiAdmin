
export const topRouterMap = [
    {
        'parentName':'infoShow',
        'data':[
            {
                path: 'infoShow1',
                name: 'infoShow1',
                meta: {
                    title: '个人信息子菜单1',
                    icon: 'fa-asterisk',
                    routerType: 'topmenu'
                },
                component: resolve => require(['@/page/infoManage/infoShow'], resolve)
            },
            {
                path: 'infoShow2',
                name: 'infoShow2',
                meta: {
                    title: '个人信息子菜单2',
                    icon: 'fa-asterisk',
                    routerType: 'topmenu'
                },
                component: resolve => require(['@/page/fundList/moneyData'], resolve)
            },
            {
                path: 'infoShow3',
                name: 'infoShow3',
                meta: {
                    title: '个人信息子菜单3',
                    icon: 'fa-asterisk',
                    routerType: 'topmenu'
                },
                component: resolve => require(['@/page/fundList/moneyData'], resolve)
            },
            {
                path: 'infoShow4',
                name: 'infoShow4',
                meta: {
                    title: '个人信息子菜单4',
                    icon: 'fa-asterisk',
                    routerType: 'topmenu'
                },
                component: resolve => require(['@/page/fundList/moneyData'], resolve)
            },
            {
                path: 'infoShow5',
                name: 'infoShow5',
                meta: {
                    title: '个人信息子菜单5',
                    icon: 'fa-asterisk',
                    routerType: 'topmenu'
                },
                component: resolve => require(['@/page/fundList/moneyData'], resolve)
            }
        ]
    },
    {
        'parentName':'infoModify',
        'data':[
            {
                path:'infoModify1',
                name:'infoModify1',
                meta:{
                    title:'修改信息子菜单1',
                    icon:'fa-asterisk',
                    routerType:'topmenu'
                },
                component: resolve => require(['@/page/infoManage/infoModify'], resolve)
            },
            {
                path:'infoModify2',
                name:'infoModify2',
                meta:{
                    title:'修改信息子菜单2',
                    icon:'fa-asterisk',
                    routerType:'topmenu'
                },
                component: resolve => require(['@/page/fundList/moneyData'], resolve)
            },
            {
                path:'infoModify3',
                name:'infoModify3',
                meta:{
                    title:'修改信息子菜单3',
                    icon:'fa-asterisk',
                    routerType:'topmenu'
                },
                component: resolve => require(['@/page/fundList/moneyData'], resolve)
            }
        ]
    }
]


