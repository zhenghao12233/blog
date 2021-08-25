import React, { useState, useEffect, useRef } from 'react'
import {
    SmileOutlined
} from '@ant-design/icons';
import './index.css'
import { getArticleList } from '../../api/ajax'

function ProcessLife() {

    const [artcileList, setArticleList] = useState([])

    useEffect(() => {
        getArticleFun()
    }, [])

    const getArticleFun = () => {
        getArticleList('findTitleOrContentOrType', {
            title: '',
            content: '',
            type: 3
        }).then((res: any) => {
            console.log("程序人生", res)
            setArticleList(res.data.list)
        })
    }

    return (
        <div className="process_life_box skill_content_box">
            <div className="content_title">程序人生</div>
            <ul>
                {
                    artcileList.map((item: any, index: any) => {
                        return (
                            <li className="small_process">
                                <div className="top_content">
                                    <img src={item.thumb} alt="" />
                                    <div className="content_info">
                                        <span className="abstract">{item.content}</span>
                                        <div>
                                            <span>{item.date}</span>
                                            {/* <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span> */}
                                            <span>
                                                <SmileOutlined style={{ marginRight: '5px' }} />
                                            {item.user_look}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }


                {/* <li className="small_process">
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li> */}
            </ul>
        </div>
    )
}

export default ProcessLife
