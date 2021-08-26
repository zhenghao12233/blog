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

class Detail extends Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
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

    componentWillMount() {
        // this.props.history.replace("/detail?id=2")

        const query = qs.parse(this.props.location.search.substr(1))
        if (query.id) {
            let id: string = query.id as string
            window.sessionStorage.setItem("aid", id)
        }
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
        this.setState({
            article: res.data.article
        })
        console.log("文章详情", res)
    }

    // componentDidUpdate(pre: any) {
    //     console.log("pre", qs.parse(pre.location.search.substr(1)))
    //     let preId = qs.parse(pre.location.search.substr(1))
    //     console.log("this.props", qs.parse(this.props.location.search.substr(1)))
    //     let nextId = qs.parse(this.props.location.search.substr(1))

    //     if (preId != nextId) {
    //         // this.updateUserLook(nextId.id)
    //         window.sessionStorage.setItem("aid",String(nextId.id))
    //         this.findAllById(nextId.id)
    //     }
    // }

    render() {
        return(
            <Card className = "detail_box" >
                <h2 className="detail_title">{this.state.article.title}</h2>
                <div className="detail_info">
                    <span>{this.state.article.date}</span>
                    {/* <SmileOutlined style={{fontSize: '16px',marginRight: '5px'}}/>
                    <span style={{marginRight: '15px'}}>{article.user_like}</span> */}
                    <SmileOutlined style={{fontSize: '16px',marginRight: '5px'}}/>
                    <span>{this.state.article.user_look}</span>
                </div>
                <div className="detail_content" dangerouslySetInnerHTML={{ __html: this.state.article.article }} />
            </Card>
        )
    }
}

export default Detail;
