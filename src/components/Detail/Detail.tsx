import React, {useEffect, useState,useRef} from 'react';
import { Card } from 'antd'
import {
    LeftOutlined,
    RightOutlined,
    SmileOutlined
} from '@ant-design/icons';
import './index.css'
import qs from 'querystring'
import { findAllBy } from '../../api/ajax'

const Detail = (props:any) => {

    const [article, setArticle] = useState({
        article: '',
        title: '',
        content: '',
        date: '',
        user_like: 0,
        user_look: 0
    })

    useEffect(() => {
        console.log(props)
        const query = qs.parse(props.location.search.substr(1))
        console.log("query",query)
        if (query.id) {
            let id:string = query.id as string
            window.sessionStorage.setItem("aid", id )
        }

        findAllById(query.id || window.sessionStorage.getItem("aid"))
    },[])

    const findAllById = async (id:any) => {
        let res = await findAllBy("findAllById",{
            id
        })
        setArticle(res.data.article)
        console.log("文章详情",res)
    }

    return (
        <Card className="detail_box">
            <h2 className="detail_title">{article.title}</h2>
            <div className="detail_info">
                <span>{article.date}</span>
                {/* <SmileOutlined style={{fontSize: '16px',marginRight: '5px'}}/>
                <span style={{marginRight: '15px'}}>{article.user_like}</span> */}
                <SmileOutlined style={{fontSize: '16px',marginRight: '5px'}}/>
                <span>{article.user_look}</span>
            </div>
            <div className="detail_content" dangerouslySetInnerHTML={{ __html: article.article }} />
        </Card>
    );
}

export default Detail;
