import server from './request'

interface adminLoginData {
    username: string,
    password: string,
}
export function adminLogin (data:adminLoginData){
    return server({
        url:'/login',
        method:'post',
        data  
        
    })
}
export function getGoodsList () {
    return server({
        url:'/getGoodsList',
        method:'get',
    })
}
export function userList () {
    return server({
        url:'/getUserList',
        method:'get',
    })
}
export function roleList () {
    return server({
        url:'/getRoleList',
        method:'get',
    })
}
export function getAuthorityList () {
    return server({
        url:'/getAuthorityList',
        method:'get',
    })
}
export function getSaleDate () {
    return server({
        url:'/saleData',
        method:'get',
    })
}
export function getviedoData () {
    return server({
        url:'/viedoData',
        method:'get',
    })
}