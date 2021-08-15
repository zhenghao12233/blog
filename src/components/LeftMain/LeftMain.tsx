import React, { useEffect, useState, Component } from 'react';
import './index.css'
import {
    LeftOutlined,
    RightOutlined,
    SmileOutlined
} from '@ant-design/icons';

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
    test = (e:any) => {
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
                <div className="skill_share_box skill_content_box">
                    <div className="content_title">技术分享</div>
                    <ul>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                    </ul>
                </div>
                {/* 算法解析 */}
                <div className="skill_share_box skill_content_box">
                    <div className="content_title">算法解析</div>
                    <ul>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                        <li>
                            <img className="thumb" src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                            <b className="title">几个优雅的JavaScript运算符</b>
                            <h4 className="content">
                                ECMAScript发展进程中，会有很多功能的更新，比如销毁，箭头功能，模块，它们极大的改变JavaScript编写方式，可能有些人喜欢，有些人不喜欢，但像每个新功能一样，我们最终会习惯它们。新版本的ECMAScript引入了三个新的逻辑赋值运算符：空运算符，AND和OR运算符，这些运算符的出现，也是希望让我们的代码更干净简洁，下面分享几个优雅的JavaScript运算符使用技巧
                            </h4>
                            <span className="like">
                                <SmileOutlined style={{ color: 'rgb(255, 186, 95)' }} />
                                <span>38</span>
                            </span>
                        </li>
                    </ul>
                </div>
                {/* 程序人生 */}
                <div className="process_life_box skill_content_box">
                    <div className="content_title">程序人生</div>
                    <ul>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="top_content">
                                <img src="https://img0.baidu.com/it/u=1783627040,2442271822&fm=26&fmt=auto&gp=0.jpg" alt="" />
                                <div className="content_info">
                                    <span className="abstract">Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。</span>
                                    <div>
                                        <span>2021-08-15</span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            20
                                        </span>
                                        <span>
                                            <SmileOutlined style={{ marginRight: '5px' }} />
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
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
