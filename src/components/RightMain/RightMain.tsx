import React, { useEffect, useState, useRef } from 'react'
import './index.css'
import {Popover, Button} from 'antd'
import {
    WechatOutlined,QqOutlined,GithubOutlined
} from '@ant-design/icons';

import wechat from './wechat.jpg'
import qq from './qq.jpg'

function RightMain() {

    const [ recommendList, setRecommendList ] = useState([
        {
            id: 1,
            title: 'ces'
        }
    ])

    const content1 = (
        <div>
            <img style={{height: '160px',width: '130px'}} src={wechat} alt="" />
        </div>
    )

    const content2 = (
        <div>
            <img style={{height: '240px',width: '150px'}} src={qq} alt="" />
        </div>
    )

    return (
        // <div className="right_main">
        <div>
            {/* 个人介绍 */}
            <div className="introduce_box">
                <h2 className="title">
                    郑～的个人简介
                </h2>
                <div className="item">
                    <span>职业：</span>
                    <span>程序员，前端开发工程师</span>
                </div>
                <div className="item">
                    <span>现居：</span>
                    <span>重庆市-沙坪坝区</span>
                </div>
                <div className="item">
                    <span>Email：</span>
                    <span>1223363269@qq.com</span>
                </div>
                <div className="btn_box">
                    <Popover content={content1} trigger="hover">
                        <WechatOutlined className="btn" />
                    </Popover>
                    <Popover content={content2} trigger="hover">
                        <QqOutlined className="btn"  />
                    </Popover>
                    {/* <Popover content={content} title="Title" trigger="hover">
                        <GithubOutlined className="btn"  />
                    </Popover> */}
                    
                </div>
            </div>

            {/* 排行榜 */}
            <div className="click_rank_box">
                <div className="rank_title">
                    <span className="squre"></span>
                    <h1>点击排行</h1>
                    <span className="squre"></span>
                </div>
                {
                    recommendList.map((item,index) => {
                        return (
                            <div className="rank_item">
                                <span>{index + 1}</span>
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
                
                {/* <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div> */}
                
            </div>
        </div>
    )
}

export default RightMain
