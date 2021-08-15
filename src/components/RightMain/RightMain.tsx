import React from 'react'
import './index.css'
import {Popover, Button} from 'antd'
import {
    WechatOutlined,QqOutlined,GithubOutlined
} from '@ant-design/icons';

function RightMain() {
    const content = (
        <div>
            <img style={{height: '160px',width: '130px'}} src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
        </div>
    )

    return (
        <div className="right_main">
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
                    <Popover content={content} trigger="hover">
                        <WechatOutlined className="btn" />
                    </Popover>
                    <Popover content={content} trigger="hover">
                        <QqOutlined className="btn"  />
                    </Popover>
                    <Popover content={content} title="Title" trigger="hover">
                        <GithubOutlined className="btn"  />
                    </Popover>
                    
                </div>
            </div>

            {/* 排行榜 */}
            <div className="click_rank_box">
                <div className="rank_title">
                    <span className="squre"></span>
                    <h1>点击排行</h1>
                    <span className="squre"></span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
                <div className="rank_item">
                    <span>1</span>
                    <span>computed和watchcomputed和watchcomputed和watch</span>
                </div>
            </div>
        </div>
    )
}

export default RightMain
