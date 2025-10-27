// todo:设计树，根据门户，角色设计
const treeData=[
    {
        id:1,
        name:'testTree',
        level:0,
        deep:0,
        children:[],
        relParentId:0
    }
]
export default [
    {
        url:'api/tree',
        method:'get',
        response:()=>{
            return{
                code:200,
                message:'success',
                data:treeData
            }
        }
    },
    {
        url:'api/tree',
        method:'post',
        response:({body})=>{
           const {name,relParentId}=body
            treeData.push({
                id:Date.now(),
                name,
                relParentId,
                level: 0,
                deep: 0,
                children: []
            })
        }
    },
]