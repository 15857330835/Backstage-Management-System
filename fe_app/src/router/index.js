import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "group-foo" */ '../views/home')
const Administrator = () => import(/* webpackChunkName: "group-foo" */ '../views/administrator')
const Chart = () => import(/* webpackChunkName: "group-foo" */ '../views/chart')
const Edit = () => import(/* webpackChunkName: "group-foo" */ '../views/edit')
const Error = () => import(/* webpackChunkName: "group-foo" */ '../views/error')
const Explain = () => import(/* webpackChunkName: "group-foo" */ '../views/explain')
const Food = () => import(/* webpackChunkName: "group-foo" */ '../views/food')
const Food_add = () => import(/* webpackChunkName: "group-foo" */ '../views/food_add')
const Login = () => import(/* webpackChunkName: "group-foo" */ '../views/login')
const Order = () => import(/* webpackChunkName: "group-foo" */ '../views/order')
const Register = () => import(/* webpackChunkName: "group-foo" */ '../views/register')
const Set = () => import(/* webpackChunkName: "group-foo" */ '../views/set')
const Shop = () => import(/* webpackChunkName: "group-foo" */ '../views/shop')
const Shop_add = () => import(/* webpackChunkName: "group-foo" */ '../views/shop_add')
const Shop_modify = () => import(/* webpackChunkName: "group-foo" */ '../views/shop_modify')
const User = () => import(/* webpackChunkName: "group-foo" */ '../views/user')


Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            mate:{
                name:'Home'
            }
        },
        {
            path:'/administrator',
            component:Administrator,
            mate:{
                name:'Administrator'
            }
        },
        {
            path:'/chart',
            component:Chart,
            mate:{
                name:'Chart'
            }
        },
        {
            path:'/edit',
            component:Edit,
            mate:{
                name:'Edit'
            }
        },
        {
            path:'/explain',
            component:Explain,
            mate:{
                name:'Explain'
            }
        },
        {
            path:'/food',
            component:Food,
            mate:{
                name:'Food'
            }
        },
        {
            path:'/food_add',
            component:Food_add,
            mate:{
                name:'Food_add'
            }
        },
        {
            path:'/order',
            component:Order,
            mate:{
                name:'Order'
            }
        },
        {
            path:'/login',
            component:Login,
            mate:{
                name:'Login'
            }
        },
        {
            path:'/register',
            component:Register,
            mate:{
                name:'Register'
            }
        },
        {
            path:'/set',
            component:Set,
            mate:{
                name:'Set'
            }
        },
        {
            path:'/shop',
            component:Shop,
            mate:{
                name:'Shop'
            }
        },
        {
            path:'/shop_add',
            component:Shop_add,
            mate:{
                name:'Shop_add'
            }
        },
        {
            path:'/shop_modify',
            component:Shop_modify,
            name:'shop_modify',
            mate:{
                name:'Shop_modify'
            }
        },
        {
            path:'/user',
            component:User,
            mate:{
                name:'User'
            }
        },
        {
            path:'*',
            component:Error,
            mate:{
                name:'Error'
            }
        }
    ]
})


export default router