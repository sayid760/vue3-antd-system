// import {get} from '@/utils/request'

// //左侧菜单
// export const getMenuList = () => {
//   return get('/static/menuList.json')
// }

// //菜单管理列表
// export const getList = () => {
//   return get('/static/list.json')
// }
import { request } from '/@/utils/api.request'

// 左侧菜单
export const getMenuList = (data) => request.post('/admin/menus', data)