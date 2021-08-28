import React, { useEffect, useState, useRef, Component } from 'react';
import { Card } from 'antd'
import {
    LeftOutlined,
    RightOutlined,
    SmileOutlined
} from '@ant-design/icons';
import './index.css'
import qs from 'querystring'
import { findAllBy, updateUserLook } from '../../api/ajax'
import { dateTransfer } from '../../utils/transfer'

class Detail extends Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            storageId: '',
            article: {
                article: '',
                title: '',
                content: '',
                date: '',
                user_like: 0,
                user_look: 0
            }
        }
    }

    // const [article, setArticle] = useState({
    //     article: '',
    //     title: '',
    //     content: '',
    //     date: '',
    //     user_like: 0,
    //     user_look: 0
    // })

    // useEffect(() => {
    //     console.log(props)
    //     const query = qs.parse(props.location.search.substr(1))
    //     console.log("query",query)
    //     if (query.id) {
    //         let id:string = query.id as string
    //         window.sessionStorage.setItem("aid", id )
    //     }

    //     updateUserLookFun(query.id || window.sessionStorage.getItem("aid"))
    //     findAllById(query.id || window.sessionStorage.getItem("aid"))
    // },[])

    // 浏览器刷新不执行，将请求数据放在didMount
    componentWillMount() {
        // this.props.history.replace("/detail?id=2")
        console.log("willMount")
        // const query = qs.parse(this.props.location.search.substr(1))
        // if (query.id) {
        //     let id: string = query.id as string
        //     window.sessionStorage.setItem("aid", id)
        // }
        // this.setState({
        //     storageId: query.id || window.sessionStorage.getItem("aid")
        // })
        // this.updateUserLookFun(query.id || window.sessionStorage.getItem("aid"))
        // this.findAllById(query.id || window.sessionStorage.getItem("aid"))
    }

    // 确保刷新参数丢失
    componentDidMount() {
        console.log("didMount")
        const query = qs.parse(this.props.location.search.substr(1))
        this.setState({
            storageId: query.id || window.sessionStorage.getItem("aid")
        })
        this.updateUserLookFun(query.id || window.sessionStorage.getItem("aid"))
        this.findAllById(query.id || window.sessionStorage.getItem("aid"))
    }

    updateUserLookFun = (id: any) => {
        updateUserLook("updateUserLook", {
            id
        }).then((res: any) => {
            console.log("查看结果", res)
        })
    }

    findAllById = async (id: any) => {
        let res = await findAllBy("findAllById", {
            id
        })
        // setArticle(res.data.article)

        // res.data.article.article = res.data.article.article.replace(/<pre[^>]*>/gi, '<pre style="background: #454545;">')
        
        this.setState({
            article: res.data.article
        })
        console.log("文章详情", res)
    }

    static getDerivedStateFromProps(nextProps:any, prevState:any) {
        //该方法内禁止访问this
        // const { id } = nextProps.location.query;
        console.log("prevState", prevState)
        console.log("nextProps", nextProps)
        const query = qs.parse(nextProps.location.search.substr(1))
        if (query.id !== prevState.storageId) {
          //通过对比nextProps和prevState，返回一个用于更新状态的对象
          return {
            storageId: query.id
          }
        
        }
        //不需要更新状态，返回null
        return null
      }
    
      componentDidUpdate(prevProps:any, prevState:any) {
        if (this.state.storageId !== prevState.storageId) {
            //在这可以做你自己的需求
            console.log("111")
            // 确保不调用两遍
            this.findAllById(this.state.storageId || window.sessionStorage.getItem("aid"))
        }
        
      }

    render() {
        return (
            <Card className="detail_box" >
                <h2 className="detail_title">{this.state.article.title}</h2>
                <div className="detail_info">
                    <span>{dateTransfer(this.state.article.date,'YY:MM:DD hh:mm:ss')}</span>
                    {/* <SmileOutlined style={{fontSize: '16px',marginRight: '5px'}}/>
                    <span style={{marginRight: '15px'}}>{article.user_like}</span> */}
                    <SmileOutlined style={{ fontSize: '16px', marginRight: '5px' }} />
                    <span>{this.state.article.user_look}</span>
                </div>
                <div className="detail_content" dangerouslySetInnerHTML={{ __html: this.state.article.article }} />
            </Card>
        )
    }
}

export default Detail;
