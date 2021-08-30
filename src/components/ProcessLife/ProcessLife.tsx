import React, { useState, useEffect, useRef, Component } from 'react'
import { Pagination, Card } from 'antd'
import {
    SmileOutlined
} from '@ant-design/icons';
import { withRouter, NavLink } from 'react-router-dom'
import './index.css'
import { getArticleList } from '../../api/ajax'
import { dateTransfer } from '../../utils/transfer'
import { jumpUrl } from '../../utils/config'

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

    onChange = (page: any, pagesize: any) => {
        console.log(page, pagesize)
        this.getArticleFun(page, pagesize)
    }

    jumpDetail(id: any) {
        console.log(this.props)
        window.sessionStorage.setItem("aid", id)
        // this.props.history.push("/detail?id=" + id)
        window.open(window.location.origin + "/#/detail?id=" + id);
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
                                    // <NavLink to={"/detail?id=" + item.id}>
                                    <li className="small_process" onClick={() => this.jumpDetail(item.id)}>
                                        <div className="top_content">
                                            <img src={item.thumb || 'http://47.108.172.171:5000/public/img_26f40dd26.png'} alt="" />
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
                                    // </NavLink>
                                )
                            })
                        }
                    </ul>
                </div>

                <div style={{ height: '20px', clear: 'both' }}></div>
                <Pagination
                    total={this.state.total}
                    showSizeChanger
                    showQuickJumper
                    defaultPageSize={6}
                    onChange={(page, pagesize) => this.onChange(page, pagesize)}
                    showTotal={total => `共 ${total} 条`}
                />

            </div>
        )
    }
}

export default withRouter(ProcessLife)
