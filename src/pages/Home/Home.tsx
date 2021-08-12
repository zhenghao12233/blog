import React, { useEffect, useState } from 'react';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';
import  './home.css'

const Home = () => {
    const [ flag, setFlag ] = useState(true)

    return (
        <div>
            <header  className="home_header" style={{top: flag ? '0px': '-60px', opacity: flag ? 1 : .9 }}>
                <div className="home_header_left">郑好的个人博客</div>
                <div className="home_header_right">
                    <div className="search_box"></div>
                </div>
            </header>
            {/* <button style={{marginTop: '100px'}} onClick={() => setFlag(!flag)} >收起/下拉</button> */}
        </div>
    );
}

export default Home;
