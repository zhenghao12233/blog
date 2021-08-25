import React, { useEffect, useState } from 'react'
import {
    SmileOutlined
} from '@ant-design/icons';
import { getArticleList } from '../../api/ajax'
function SkillShare() {
    const [artcileList, setArticleList] = useState([])

    useEffect(() => {
        getArticleFun()
    }, [])

    const getArticleFun = () => {
        getArticleList('findTitleOrContentOrType', {
            title: '',
            content: '',
            type: 1
        }).then((res: any) => {
            console.log("技术分享", res)
            setArticleList(res.data.list)
        })
    }

    return (
        <div className="skill_share_box skill_content_box clear">
            <div className="content_title">技术分享</div>
            <ul>
                {
                    artcileList.map((item: any, index: any) => {
                        return (
                            <li>
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
    )
}

export default SkillShare
