import React, { useEffect, useState } from 'react';
import { Popover, Input, Row, Col, Drawer } from 'antd'
import {
    SearchOutlined,
    MenuOutlined,
    VerticalAlignTopOutlined
} from '@ant-design/icons';
import { Switch, HashRouter, Route, Link, Redirect } from "react-router-dom";
import './home.css'
import About from '../About/About';
import Main from '../Main/Main';
import FeedBack from '../FeedBack/FeedBack';
import SkillShare from '../../components/SkillShare/SkillShare';
import CountSkill from '../../components/CountSkill/CountSkill';
import ProcessLife from '../../components/ProcessLife/ProcessLife';

const { Search } = Input;
// git push https://github.com/zhenghao12233/blog.git master

const Home = (props: any) => {
    const [flag, setFlag] = useState(true)
    const [scrollDistance, setScrollDistance] = useState(0)
    const [tabIndex, setIndex] = useState(0)
    const [tab, setTab] = useState([
        { id: 0, name: '博客首页', url: '/', choose: true },
        { id: 1, name: '技术分享', url: '/skill', choose: false },
        { id: 2, name: '算法解析', url: '/count', choose: false },
        { id: 3, name: '程序人生', url: '/life', choose: false },
        { id: 4, name: '关于我', url: '/about', choose: false }
        // { id: 0, name: '留言', url: '/feedback', choose: false }
    ])
    const [slideSearch, setSlideSearch] = useState(false)
    const [visible, setVisible] = useState(false)

    const content = (
        <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
    )

    useEffect(() => {
        console.log(props.location.pathname)
        let i = tab.findIndex((itme => itme.url == props.location.pathname))
        if (i != -1) {
            setIndex(i)
            props.history.push(tab[i].url)
        }else {
            props.history.push(props.location.pathnam)
        }

    }, [])

    // 不要放在初始生命周期内
    window.onscroll = () => {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > scrollDistance) {
            setFlag(false)
        } else {
            setFlag(true)
        }
        setScrollDistance(scrollTop)
    }

    const jumpTab = (index: number) => {
        setIndex(index)
        props.history.push(tab[index].url)
    }

    const jumpDrawerTab = (index: number) => {
        window.scroll(0, 0)
        setIndex(index)
        props.history.push(tab[index].url)
    }

    const slideSearchFun = () => {
        console.log(11)
        setSlideSearch(!slideSearch)
    }

    const onSearch = (e: any) => {
        console.log(e)
    }

    const onClose = () => {
        setVisible(false)
    }

    const drawerVisible = () => {
        setVisible(true)
    }

    // 回到顶部动画
    const animate = (obj: any, target: number, callback?: Function) => {
        clearInterval(obj.timer)     //先清除一下再执行，不然多次按钮点击定时器会叠加，所以每次点击就清除上一次的。
        obj.timer = setInterval(function () {

            var step = (target - window.pageYOffset) / 5
            var step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (window.pageYOffset == target) {   //注意这里变成了 == 不能 >= ,因为>=就不能多个按钮交互，小距离的就会被清除
                clearInterval(obj.timer);
                /* if(callback){        //如果有这个参数，那么就调用这个参数的函数
                    callback();
                } */
                // 调用回调的另一种写法
                callback && callback();
            }
            // obj.style.left = obj.window.pageYoffset + step + 'px';  //别忘了步长还要加上现在的坐标
            window.scroll(0, window.pageYOffset + step);
        }, 15)
    }

    return (
        <div>
            {/* 置顶动画 */}
            <VerticalAlignTopOutlined onClick={() => animate({},0)} className="back_top" />
            {/* 移动端抽屉层 */}
            <Drawer
                title=""
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {tab.map((item, index) => {
                    return (
                        <div className={index == tabIndex ? 'drawer_item active' : 'drawer_item'} onClick={() => jumpDrawerTab(index)}>
                            {item.name} <span></span>
                        </div>
                    )
                })}
            </Drawer>
            <header className="home_header" style={{ top: flag ? '0px' : '-60px', opacity: flag ? 1 : .9 }}>
                <div className="hear_show">
                    <div className="max">
                        <div className="home_header_left">郑~的个人博客</div>
                        <div className="home_header_right">
                            <div className="content_box">
                                {tab.map((item, index) => {
                                    return (
                                        <div className={index == tabIndex ? 'item active' : 'item'} onClick={() => jumpTab(index)}>
                                            {item.name} <span></span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="search_box">
                                <SearchOutlined onClick={() => slideSearchFun()} style={{ fontSize: '18px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="min">
                        <MenuOutlined onClick={() => drawerVisible()} style={{ fontSize: '18px' }} />
                        <div>郑~的个人博客</div>
                        <SearchOutlined onClick={() => slideSearchFun()} style={{ fontSize: '18px' }} />
                    </div>
                </div>
                <div className="search_box" style={{ height: slideSearch ? '90px' : '0px' }}>
                    {/* <div> */}
                    <Row>
                        <Col span={24}>
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />
                        </Col>
                    </Row>
                    {/* </div> */}
                </div>
            </header>

            {/* <button style={{marginTop: '100px'}} onClick={() => setFlag(!flag)} >收起/下拉</button> */}

            <div className="center" style={{ overflow: 'hidden' }}>
                <Switch>

                    {/* <Route path="/about" component={About}></Route>
                    <Route path="/feedback" component={FeedBack}></Route>
                    <Route path="/skill" component={SkillShare}></Route>
                    <Route path="/count" component={CountSkill}></Route>
                    <Route path="/life" component={ProcessLife}></Route> */}
                    <Route path="/" component={Main}></Route>
                </Switch>
            </div>

            <div className="footer">
                <div className="footer_introduce">
                    <div className="intro_itme">
                        <Popover content={content}>
                            <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                        </Popover>

                        <div>我的微信</div>
                    </div>
                </div>
                <div className="footer_copyright">
                    Copyright © ZH All Rights Reserved.
                </div>
            </div>

        </div>
    );
}

export default Home;
