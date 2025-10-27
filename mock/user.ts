// mock/user.ts
// todo:角色相关接口
    let routes=[
        {
            path:'/role1',
            name:'role1',
        },
        {
            path:'/role2',
            name:'role2',
        },
        {
            path:'/role3',
            name:'role3',
        }
    ]
     let createUserList= [
        {
            userId: 1,
            avatar: 'https://pic1.zhimg.com/80/v2-083faf550543c1e9f134b56b3322ee3c_720w.webp',
            username: 'admin',
            password: '123456789',
            desc: '下船不谈船里事',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token'
        },
        {
            userId: 2,
            avatar: 'https://pic1.zhimg.com/80/v2-e1427f6a21122ac163ff98d24f55d372_720w.webp',
            username: 'system',
            password: '123456789',
            desc: '旧人不谈近况，新人不讲过往',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'Admin Token'
        }
    ]
export default [
    // 用户登录接口
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }: any) => {
            // 获取请求体携带过来的用户名与密码
            const { username, password } = body
            // 调用获取用户信息函数，用于判断是否有此用户
            const checkUser = createUserList.find(
                (item) => item.username === username && item.password === password
            )
            // 没有用户则返回失败信息
            if (!checkUser) {
                return {
                    code: 201,
                    data: {
                        message: '账号或者密码不正确'
                    }
                }
            }
            // 如果有返回成功信息
            const { token } = checkUser
            return {
                code: 200,
                data: {
                    token,
                    ...checkUser
                }
            }
        }
    },
    // 获取用户信息接口
    {
        url: '/api/user/info',
        method: 'get',
        response: ({query}) => {
            // 获取请求头携带的 token
            const username = query.username
            // 查看用户信息数据中是否包含有此 token 的用户
            const checkUser = createUserList.find((item) => item.username === username)
            // 没有就返回失败信息
            if (!checkUser) {
                return {
                    code: 201,
                    data: {
                        message: '获取用户信息失败'
                    }
                }
            }
            // 有就返回成功信息
            return {
                code: 200,
                data: {
                    checkUser
                }
            }
        }
    },
    {
        url: '/api/user/add',
        method: 'post',
        response: ({body}) => {
            // 获取请求头携带的 token
            // const token = request.headers.token
            // 查看用户信息数据中是否包含有此 token 的用户
            const { username, password } = body

            const checkUser = createUserList.find((item) => item.username === username)
            if (checkUser) {
                // 用户已存在
                return {
                    code: 400,
                    data: { message: '用户已存在' }
                }
            }

            // 创建成功
            const newUser = {
                userId: createUserList.length + 1,
                avatar: 'https://pic1.zhimg.com/80/v2-083faf550543c1e9f134b56b3322ee3c_720w.webp',
                username,
                password,
                desc: '新用户',
                roles: ['普通用户'],
                buttons: [],
                routes: ['home'],
                token: `${username}-token`
            }
            createUserList.push(newUser)

            return {
                code: 201,
                data: newUser
            }
        }
    },
    {
        url:'/api/user/route',
        methods:'get',
        response:({query})=>{
            const {id}=query
            console.log(typeof id)
            let data=[]
            switch (id){
                case '1':
                    return data=[routes[0]]
                case '2':
                    return data=[routes[1]]
                case '3':
                    return data=[routes[2]];
            }
            return {
                code:'200',
                message:'success',
                data
            }


        }
    }
]
