import React from 'react';
import $ from '../../imports/main/jquery/jquery-vendor.js';
import './timeline.css';

class Timeline extends React.Component{
    componentDidMount(){
        $(".list .liwrap").mouseover(function(){
            $(".list li").removeClass("thiscur");
            $(this).parent().addClass("thiscur")
        });
    }

    render(){
        return(
            <div style={{marginLeft:"15%",marginTop:"calc(50vh - 300px)"}}>
                <div id="history">

                    <div className="title">
                        {/*<h2>我的经历</h2>*/}
                        <div id="circle">
                            <div className="cmsk"></div>
                            <div className="circlecontent">
                                <strong>year</strong>
                            </div>
                            <a href="#" className="clock"></a>
                        </div>
                    </div>

                    <div id="content">
                        <ul className="list">

                            <li>
                                <div className="liwrap">
                                    <div className="lileft">
                                        <div className="date">
                                            <span className="year">2017</span>
                                            <span className="md">11</span>
                                        </div>
                                    </div>

                                    <div className="point"><b></b></div>

                                    <div className="liright">
                                        <div className="histt"><a href="#">电子政务OA系统PC端|前后分离重构</a></div>
                                        <div className="hisct">随着国家政策推动，项目增多，用户提出的需求增多，经与leader、后台人员决定使用前后分离方案，使用webpack自动构建工具便已打包，对各个模块进行组件化管理。</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="liwrap">
                                    <div className="lileft">
                                        <div className="date">
                                            <span className="year">2016</span>
                                            <span className="md">6</span>
                                        </div>
                                    </div>

                                    <div className="point"><b></b></div>

                                    <div className="liright">
                                        <div className="histt"><a href="#">浪潮云产品支撑平台|模块化开发</a></div>
                                        <div className="hisct">负责开发监控管理页面，使用canvas,svg制表制图</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="liwrap">

                                    <div className="lileft">
                                        <div className="date">
                                            <span className="year">2016</span>
                                            <span className="md">4~8</span>
                                        </div>
                                    </div>

                                    <div className="point"><b></b></div>

                                    <div className="liright">
                                        <div className="histt"><a href="#">浪潮公有云官网|响应式布局</a></div>
                                        <div className="hisct">友好的展示界面</div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="liwrap">
                                    <div className="lileft">
                                        <div className="date">
                                            <span className="year">2015</span>
                                            <span className="md">7</span>
                                        </div>
                                    </div>

                                    <div className="point"><b></b></div>

                                    <div className="liright">
                                        <div className="histt"><a href="#">毕业于吉林大学</a></div>
                                        <div className="hisct">进入浪潮集团任前端工程师一职</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;