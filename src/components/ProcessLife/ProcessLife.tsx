import React, { useState, useEffect, useRef, Component } from 'react'
import { Pagination } from 'antd'
import {
    SmileOutlined
} from '@ant-design/icons';
import { withRouter, NavLink } from 'react-router-dom'
import './index.css'
import { getArticleList } from '../../api/ajax'
import { dateTransfer } from '../../utils/transfer'

class ProcessLife extends Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            artcileList: [],
            total: 0
        }
    }

    // const [artcileList, setArticleList] = useState([])

    // useEffect(() => {
    //     getArticleFun()
    // }, [])

    componentWillMount() {
        console.log(this.props?.location?.pathname)
        this.getArticleFun(1, 6)
    }

    getArticleFun = async (page: number, size: number) => {
        let res = await getArticleList('findTitleOrContentOrType', {
            title: '',
            content: '',
            type: 3,
            page: page <= 0 ? 1 : page,
            size
        })
        console.log("程序人生", res)
        this.setState({
            artcileList: res.data.list,
            total: res.data.total
        })
    }

    onChange = (page:any,pagesize:any) => {
        console.log(page,pagesize)
        this.getArticleFun(page, pagesize)
    }


    render() {
        return (
        <div>
            <div className="process_life_box skill_content_box">
            <div className="content_title">程序人生</div>
            <ul>
                {
                    this.state.artcileList.map((item: any, index: any) => {
                        return (
                            <NavLink to={"/detail?id=" + item.id}>
                                <li className="small_process">
                                    <div className="top_content">
                                        <img src={item.thumb} alt="" />
                                        <div className="content_info">
                                            <span className="abstract">{item.content}</span>
                                            <div>
                                                <span>{dateTransfer(item.date)}</span>
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
                            </NavLink>
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

                <div style={{height: '20px',clear: 'both'}}></div>
                <Pagination
                    total={this.state.total}
                    showSizeChanger
                    showQuickJumper
                    defaultPageSize={6}
                    onChange={(page,pagesize) => this.onChange(page,pagesize)}
                    showTotal={total => `共 ${total} 条`}
                />

        </div>
    )
    }
}

export default ProcessLife
