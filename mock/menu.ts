const menuData = [
    {
        name: 'dashboard',
        label: '仪表盘',
        path: '/dashboard',
    },
    {
        name: 'employee',
        label: '员工管理',
        path: '/employee',
        children: [
            { name: 'employee-list', label: '员工列表', path: '/employee/list' },
            { name: 'employee-attendance', label: '考勤管理', path: '/employee/attendance' }
        ]
    },
    {
        name: 'department',
        label: '部门管理',
        path: '/department',
        children: [
            { name: 'department-list', label: '部门列表', path: '/department/list' }
        ]
    },
    {
        name: 'project',
        label: '项目管理',
        path: '/project',
        children: [
            {
                name: 'project-overview',
                label: '项目概览',
                path: '/project/overview',
            },
            {
                name: 'project-task',
                label: '任务管理',
                path: '/project/task',
                children: [
                    { name: 'task-list', label: '任务列表', path: '/project/task/list' },
                    { name: 'task-board', label: '看板', path: '/project/task/board' }
                ]
            }
        ]
    },
    {
        name: 'finance',
        label: '财务管理',
        path: '/finance',
        children: [
            { name: 'invoice', label: '发票管理', path: '/finance/invoice' },
            { name: 'budget', label: '预算管理', path: '/finance/budget' }
        ]
    },
    {
        name: 'customer',
        label: '客户管理',
        path: '/customer',
        children: [
            { name: 'customer-list', label: '客户列表', path: '/customer/list' },
            { name: 'customer-feedback', label: '客户反馈', path: '/customer/feedback' }
        ]
    },
    {
        name: 'report',
        label: '报表中心',
        path: '/report',
    },
    {
        name: 'settings',
        label: '系统设置',
        path: '/settings',
        children: [
            { name: 'user-settings', label: '用户设置', path: '/settings/user' },
            { name: 'role-settings', label: '角色权限', path: '/settings/role' }
        ]
    },
    {
        name: 'notice',
        label: '通知中心',
        path: '/notice',
    },
    {
        name: 'help',
        label: '帮助中心',
        path: '/help',
    },
    {
        name: 'analytics',
        label: '数据分析',
        path: '/analytics',
        children: [
            { name: 'sales-analytics', label: '销售分析', path: '/analytics/sales' },
            { name: 'hr-analytics', label: '人力分析', path: '/analytics/hr' }
        ]
    }
];

export default [{
    url:'/api/menus',
    methods:'get',
    response:()=>{
        return{
            code:'200',
            message:'success',
            data:menuData
        }
    }
}]