import React, { useEffect, useState, Component } from 'react';
import './index.css'
import {
    LeftOutlined,
    RightOutlined,
    SmileOutlined
} from '@ant-design/icons';

import SkillShare from '../SkillShare/SkillShare';
import CountSkill from '../CountSkill/CountSkill';
import ProcessLife from '../ProcessLife/ProcessLife';

class LeftMain extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            timer: null,
            swiperIndex: 0,
            rotateDeg: 0,
            thumbList: [
                "https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg",
                "https://img0.baidu.com/it/u=251614576,2693916083&fm=26&fmt=auto&gp=0.jpg",
                "https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg",
                "https://img0.baidu.com/it/u=2849358178,3144634908&fm=26&fmt=auto&gp=0.jpg"
            ]
        }
    }
    componentWillMount() {

    }

    componentDidMount() {
        this.autoSwiper()
        // 类似组件监听滚动
        // window.addEventListener("scroll",this.test)
    }
    test = (e: any) => {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log("滚动距离" + scrollTop);
    }

    // 自动转换
    autoSwiper = () => {
        this.setState({
            timer: setInterval(() => {
                if (this.state.swiperIndex <= 2) {
                    this.setState({
                        swiperIndex: this.state.swiperIndex + 1,
                        rotateDeg: this.state.rotateDeg + 90
                    })
                } else {
                    this.setState({
                        swiperIndex: 0,
                        rotateDeg: this.state.rotateDeg + 90
                    })
                }

                console.log(this.state.swiperIndex)
            }, 3000)
        })
    }

    prevSwiper = () => {
        clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
        if (this.state.swiperIndex >= 1) {
            this.setState({
                swiperIndex: this.state.swiperIndex - 1,
                rotateDeg: this.state.rotateDeg - 90
            })
        } else {
            this.setState({
                swiperIndex: 3,
                rotateDeg: this.state.rotateDeg - 90
            })
        }
        this.autoSwiper()
    }

    nextSwiper = () => {
        clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
        if (this.state.swiperIndex <= 2) {
            this.setState({
                swiperIndex: this.state.swiperIndex + 1,
                rotateDeg: this.state.rotateDeg + 90
            })
        } else {
            this.setState({
                swiperIndex: 0,
                rotateDeg: this.state.rotateDeg + 90
            })
        }
        this.autoSwiper()
    }

    toggleSwiper = (index: number) => {
        console.log(index)
        clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
        let newRotate: number = (index - this.state.swiperIndex) * 90
        this.setState({
            swiperIndex: index,
            rotateDeg: this.state.rotateDeg + newRotate
        })
        this.autoSwiper()
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    render() {
        return (
            <div className="left_main">
                {/* 轮播 */}
                <div className="swiper_box">
                    <ul className="swiper_img" style={{ transform: `rotateY(` + this.state.rotateDeg + 'deg)' }}>
                        {
                            this.state.thumbList.map((item: string) => {
                                return (
                                    <li>
                                        <img src={item} alt="轮播图" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="arrow-box">
                        <LeftOutlined onClick={this.prevSwiper} />
                        <RightOutlined onClick={this.nextSwiper} />
                    </div>
                    <div className="squre-box">
                        <span className={this.state.swiperIndex == 0 ? 'squre active' : 'squre'} onClick={() => this.toggleSwiper(0)}></span>
                        <span className={this.state.swiperIndex == 1 ? 'squre active' : 'squre'} onClick={() => this.toggleSwiper(1)}></span>
                        <span className={this.state.swiperIndex == 2 ? 'squre active' : 'squre'} onClick={() => this.toggleSwiper(2)}></span>
                        <span className={this.state.swiperIndex == 3 ? 'squre active' : 'squre'} onClick={() => this.toggleSwiper(3)}></span>
                    </div>
                </div>
                {/* 小型图文 */}
                <div className="swiper_article">
                    <ul>
                        <li>
                            <span>js防抖与节流的区别及实现</span>

                            <img src="https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <i></i>
                        </li>
                        <li>
                            <span>react的widthRouter</span>

                            <img src="https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <i></i>
                        </li>
                    </ul>
                </div>

                {/* 技术分享 */}
                <SkillShare />
                <div style={{height: '20px',float: 'left',opacity: 0}}>占位符</div>
                {/* 算法解析 */}
                <CountSkill />
                <div style={{height: '20px',float: 'left',opacity: 0}}>占位符</div>
                {/* 程序人生 */}
                <ProcessLife />

            </div>
        )
    }
}


// const LeftMain = () => {
//     let timer: any = null
//     let swiperIndex: number = 0
//     let init: number = 0
//     const [sindex,setIndex] = useState(0)
//     const [rotateDeg, setRotateDeg] = useState(0)
//     // const [tiemr1, setTimer1] = useState({})
//     useEffect(() => {
//         // setTimer1(
//         //     setInterval(() => {
//         //         console.log("zzz")
//         //     }, 2000)
//         // )
//         timer = setInterval(() => {
//             swiperIndex += 1
//             if (swiperIndex == 4) swiperIndex = 0
//             console.log(swiperIndex)
//             setIndex(swiperIndex)
//             init += 90
//             setRotateDeg(init)
//         }, 3000)
//         return () => {
//             clearInterval(timer)
//             // setTimer1(setInterval(() => {
//             // }, 10000000))
//             // clearInterval(tiemr1)
//         }
//     }, [])

//     const prevSwiper = () => {
//         clearInterval(timer)
//         init -= 90
//         setRotateDeg(init)

//         timer = setInterval(() => {
//             swiperIndex += 1
//             if (swiperIndex == 4) swiperIndex = 0
//             console.log(swiperIndex)
//             init += 90
//             setRotateDeg(init)
//         }, 3000)
//     }   
//     const nextSwiper = () => {
//         console.log(rotateDeg)
//         clearInterval(timer)
//         timer = null
//         init = rotateDeg + 90
//         setRotateDeg(init)

//         // timer = setInterval(() => {
//         //     swiperIndex += 1
//         //     if (swiperIndex == 4) swiperIndex = 0
//         //     console.log(swiperIndex)
//         //     init += 90
//         //     setRotateDeg(init)
//         // }, 3000)
//     }

//     return (
// <div className="left_main">
//     <div className="swiper_box">
//         <ul className="swiper_img" style={{ transform: `rotateY(` + rotateDeg + 'deg)' }}>
//             <li>
//                 <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
//             </li>
//             <li>
//                 <img src="https://img0.baidu.com/it/u=251614576,2693916083&fm=26&fmt=auto&gp=0.jpg" alt="" />
//             </li>
//             <li>
//                 <img src="https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg" alt="" />
//             </li>
//             <li>
//                 <img src="https://img0.baidu.com/it/u=2849358178,3144634908&fm=26&fmt=auto&gp=0.jpg" alt="" />
//             </li>
//         </ul>
//         <div className="arrow-box">
//             <LeftOutlined onClick={() => prevSwiper()} />
//             <RightOutlined onClick={() => nextSwiper()} />
//         </div>
//         <div className="squre-box">
//             <span className={sindex == 0 ? 'squre active' : 'squre'}></span>
//             <span className={sindex == 1 ? 'squre active' : 'squre'}></span>
//             <span className={sindex == 2 ? 'squre active' : 'squre'}></span>
//             <span className={sindex == 3 ? 'squre active' : 'squre'}></span>
//         </div>
//     </div>
//     <div className="swiper_article">
//         <ul>
//             <li>
//                 <span>js防抖与节流的区别及实现</span>

//                 <img src="https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg" alt="" />
//                 <i></i>
//             </li>
//             <li>
//                 <span>react的widthRouter</span>

//                 <img src="https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg" alt="" />
//                 <i></i>
//             </li>
//         </ul>
//     </div>
// </div>
//     );
// }

export default LeftMain;
