import React from 'react'
import './index.css'
import {
    SoundOutlined
} from '@ant-design/icons';
function About() {
    return (
        <div className="about_center">
            <div className="thumb">
                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
            </div>
            <div className="about_item">
                郑~
            </div>
            <div className="about_item">
                男、97后
            </div>
            <div className="about_item">
                现居重庆市沙坪坝区
            </div>
            <div className="about_item">
                是一名前端开发工程师
            </div>
            <div className="about_item">
                是万千程序员中的一只
            </div>
            <div className="about_item">
                喜欢编程，喜欢探索新技术
            </div>
            <div className="about_item">
                希望看到这里的你也不要轻易地放弃
            </div>
            <div className="about_item">
                这条路上的你并不是孤军奋战，有千千万万的猿在陪你前行
            </div>
            <div className="about_item">
                联系方式：1223363269@qq.com
            </div>

            <div className="about_blog">
                <SoundOutlined style={{marginRight: '10px'}}/>本博客后端基于java + spring + mysql； 前端采用响应式设计，基于react + typescript + antd。
            </div>
        </div>
    )
}

export default About
