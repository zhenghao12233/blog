import React, {useEffect, useState,useRef} from 'react';
import { Card } from 'antd'
import {
    LeftOutlined,
    RightOutlined,
    SmileOutlined
} from '@ant-design/icons';
import './index.css'

const Detail = () => {

    const [domString, setDomString] = useState("<p>121321</p>")

    return (
        <Card className="detail_box">
            <h2 className="detail_title">几个优雅的JavaScript运算符使用技巧</h2>
            <div className="detail_info">
                <span>2021-05-25</span>
                <SmileOutlined style={{fontSize: '16px',marginRight: '5px'}}/>
                <span style={{marginRight: '15px'}}>20</span>
                <SmileOutlined style={{fontSize: '16px',marginRight: '5px'}}/>
                <span>20</span>
            </div>
            <div className="detail_content" dangerouslySetInnerHTML={{ __html: domString }} />
        </Card>
    );
}

export default Detail;
