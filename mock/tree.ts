// todo:设计树，根据门户，角色设计
const treeData = Array.from({ length: 20 }, (_, i) => ({
    key: `dept-${i+1}`,
    name: `部门${i+1}`,
    children: Array.from({ length: 3 }, (__, j) => ({
        id: (i+1)*10 + j+1,
        code: (i+1)*10 + j+1,
        name: `项目${i+1}-${j+1}`,
        sort: `${i+1}-${j+1}`,
        children: Array.from({ length: 3 }, (___, k) => ({
            id: (i+1)*100 + (j+1)*10 + (k+1),
            code: (i+1)*100 + (j+1)*10 + (k+1),
            name: `模块${i+1}-${j+1}-${k+1}`,
            sort: `${i+1}-${j+1}-${k+1}`
        }))
    }))
}))

export default [
    {
        url: '/api/tree',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'success',
                data: treeData
            }
        }
    },
    {
        url: '/api/tree',
        method: 'post',
        response: ({body}) => {
            const {name,key,code,sort} = body
            treeData.push({
                // id: treeData.length+1,
                name,
                // code,
                // sort,
                key,
                // relParentId,
                // level: 0,
                // deep: 0,
                children: []
            })
        }
    },
]