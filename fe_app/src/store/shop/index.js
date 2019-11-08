import request from '../../utils/request'
const SHOP_ADD='SHOP_ADD'
const SHOP_DEL='SHOP_DEL'
const SHOP_MODIFY='SHOP_MODIFY'
const SHOP_QUERY='SHOP_QUERY'

export default {
    state:{
        data:null
    },
    actions:{
        async add({commit},payload){
            const result =await request({
                url:'/shop',
                method:'POST',
                data:payload
            })

            commit({
                type:SHOP_ADD,
                payload:result.data
            })
        },
        async del({commit},_id){
            const result = await request({
                url:'/shop',
                method:'DELETE',
                params:{
                    _id
                }
            })
            commit({
                type:SHOP_DEL,
                payload:result.data.result
            })
        },
        async modify({commit},data){
            const result = await request({
                url:'/shop',
                method:'PUT',
                params:data
            })
            commit({
                type:SHOP_MODIFY,
                payload:result.data
            })
        },
        async query({commit}){
            const result = await request({
                url:'/shop',
                method:'GET',
            })
            commit({
                type:SHOP_QUERY,
                payload:result.data.result
            })
        }
    },
    mutations:{
        SHOP_ADD(state,action){
            state.data = action.payload
        },
        SHOP_DEL(state,action){
            state.data = action.payload
        },
        SHOP_MODIFY(state,action){
            state.data = action.payload
        },
        SHOP_QUERY(state,action){
            state.data = action.payload
        }
    }
}