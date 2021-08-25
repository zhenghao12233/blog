
import { ajax } from './index.js'

/* 
    获取列表
        url:  findTitleOrContentOrType
        参数:  [title,content,[page],[size],[type]]
            title、contnet模糊查询（两者满足一项），空为查找全部
*/
export const getArticleList = (url ,data ) => {
    return ajax(url, data);
}

/* 
    获取单篇文章
        url: findAllById
        参数: [id]
*/
export const findAllBy = (url ,data) => {
    return ajax(url, data)
}

