import React, { useEffect, useState } from 'react';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import { Switch,HashRouter, Route, Link, Redirect } from "react-router-dom";
import './home.css'
import About from '../About/About';
import Main from '../Main/Main';
import FeedBack from '../FeedBack/FeedBack';

// git push https://github.com/zhenghao12233/blog.git master

const Home = (props:any) => {
    const [flag, setFlag] = useState(true)
    const [tabIndex,setIndex] = useState(0)
    const [tab,setTab] = useState([
        {id: 0, name: '博客首页', url: '/',choose: true},
        {id: 0, name: '关于我', url: '/about',choose: false},
        {id: 0, name: '留言', url: '/feedback',choose: false}
    ])

    useEffect(() => {
        let i = tab.findIndex((itme => itme.url == props.location.pathname))
        setIndex(i)
        props.history.push(tab[i].url)
    },[])

    const jumpTab = (index:number) => {
        console.log(index)
        // let newtab = [...tab]
        // newtab.forEach((item,i) => {
        //     if (index == i) {
        //         item.choose = true
        //     }else {
        //         item.choose = false
        //     }
        // })
        // setTab(newtab)
        setIndex(index)
        props.history.push(tab[index].url)
    }

    return (
        <div>
            <header className="home_header" style={{ top: flag ? '0px' : '-60px', opacity: flag ? 1 : .9 }}>
                <div>
                    <div>
                        <div className="home_header_left">郑~的个人博客</div>
                        <div className="home_header_right">
                            <div className="content_box">
                                {tab.map((item,index) => {
                                    return (
                                        <div className={index == tabIndex ? 'item active' : 'item'} onClick={ () => jumpTab(index)}>
                                            {item.name} <span></span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="search_box">
                                <LoadingOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <button style={{marginTop: '100px'}} onClick={() => setFlag(!flag)} >收起/下拉</button> */}
        
            <div style={{marginTop: '60px'}}>
                <Switch>
                    
                    <Route path="/about" component={About}></Route>
                    <Route path="/feedback" component={FeedBack}></Route>
                    <Route path="/" component={Main}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Home;
