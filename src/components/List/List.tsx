import React, { useEffect, useState, Component } from 'react'
import { Pagination } from 'antd'
import {
    SmileOutlined
} from '@ant-design/icons';
import { withRouter, NavLink } from 'react-router-dom'
import { getArticleList } from '../../api/ajax'
import qs from 'querystring'
import { jumpUrl } from '../../utils/config'

class List extends Component<any, any>  {

    constructor(props: any) {
        super(props);
        this.state = {
            artcileList: [],
            total: 0,
        }
    }

    // const [artcileList, setArticleList] = useState([])
    // const [total,setTotal] = useState(0)
    // const [ pageNode, setPageNode ] = useState({})

    componentWillMount() {
        // console.log(this.props?.location?.pathname)
        // console.log("state", this.props )
        const query = qs.parse(this.props.location.search.substr(1))
        console.log("query",query)
        let search: string = ''
        if (query.search) {
            window.sessionStorage.setItem("search",String(query.search))
            search = query.search as string
        }else {
            search = window.sessionStorage.getItem("search") as string
        }
        this.getArticleFun(search,1, 6)
    }



    // useEffect(() => {
    //     console.log(props?.location?.pathname)
    //     getArticleFun(1,6)
    // }, [])
    getArticleFun = async (search: string,page: number, size: number) => {
        let res = await getArticleList('findTitleOrContentOrType', {
            title: search,
            content: search,
            // type: 2,
            page: page <= 0 ? 1 : page,
            size
        })
        console.log("算法解析", res)
        this.setState({
            artcileList: res.data.list,
            total: res.data.total
        })
    }

    jumpDetail = (id:number) => {
        console.log(this.props)
        console.log(window.location.origin)
        // this.props.history.push({
        //     pathnam: "/detail",
        //     query: {
        //         id
        //     }
        // })
        window.sessionStorage.setItem("aid", String(id))
        window.open(window.location.origin + "/#/detail?id=" + id);
    }


    onChange = (page:any,pagesize:any) => {
        console.log(page,pagesize)
        const query = qs.parse(this.props.location.search.substr(1))
        let search: string = ''
        if (query.search) {
            search = query.search as string
        }else {
            search = window.sessionStorage.getItem("search") as string
        }
        this.getArticleFun(search,page, pagesize)
    }

    render() {
        return (
            <div>
                <div className="skill_share_box skill_content_box">
                    <div className="content_title">搜索结果</div>
                    <ul>
                        {
                            this.state.artcileList.map((item: any, index: any) => {
                                return (
                                    // <NavLink to={"/detail?id=" + item.id}>
                                        <li onClick={() => this.jumpDetail(item.id)}>
                                        <img className="thumb" src={item.thumb} alt="" />
                                        <b className="title">{item.title}</b>
                                        <h4 className="content">
                                            {item.content}
                                        </h4>
                                        <span className="like">
                                            <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                            <span>{item.user_look}</span>
                                        </span>
                                    </li>
                                    // </NavLink>
                                )
                            })
                        }
                        {/* <li>
        <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
        <b className="title">几个优雅的JavaScript运算符</b>
        <h4 className="content">
            ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
        </h4>
        <span className="like">
            <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
            <span>38</span>
        </span>
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

            </div >
        )
    }
}

export default withRouter(List)
