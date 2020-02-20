import React from 'react';
import '../../imports/other/starCanvas.js';
import Cursor from '../cursor/cursor.js';
import starMusic from '../../assets/radio/starmusic.mp3';
import starClick from '../../assets/radio/starclick.mp3';
import '../../imports/other/icomoon/right-arrow/style.css';
import './star.css';

class Star extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        StarCanvas('canvas');
    }

    skip = () => {
        let m = document.getElementById('star-click');
        m.play();
        setTimeout(()=>{
            this.props.skip();
        },1500)
    }



    render(){
        return(
            <div id="star">
                <p className="starTxt">
                    <span className="line easeIn t2">
                        我们活在浩瀚的宇宙里
                    </span>
                    <span className="line easeIn t4">
                        漫天漂浮的宇宙尘埃和星河光尘
                    </span>
                    <span className="line easeIn t6">
                        我们是比这些还要渺小的存在
                    </span>
                    <span className="line easeIn t8">
                        你并不知道生活在什么时候突然改变方向，陷入墨水一般浓稠的黑暗里去
                    </span>
                    <span className="line easeIn t10">
                        你被失望拖进深渊，你被疾病拉近坟墓，你被挫折践踏的体无完肤
                    </span>
                    <span className="line easeIn t12">
                        你被嘲笑、被讽刺、被讨厌、被怨恨、被放弃
                    </span>
                    <span className="line easeIn t14">
                        但是我们却总在内心里保留着希望保留着不甘心放弃跳动的心
                    </span>
                    <span className="line easeIn t16">
                        我们依然在大大的绝望里小小的努力着
                    </span>
                    <span className="line easeIn t18">
                        这种不想放弃的心情，它们变成无边黑暗的小小星辰。。。
                    </span>
                    <span className="line easeIn t20">
                        我们
                    </span>
                    <span className="line easeIn t22">
                        都是小小的星辰。。。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--郭敬明
                    </span>

                </p>
                <canvas id="canvas" width="100vw" height="100vh"></canvas>
                <div className="skip" onClick={this.skip.bind(this)}>
                    Skip
                    <span className="skip-right icon-right-arrow"></span>
                </div>
                <div className="star-music">
                    <audio id="star-music" src={starMusic} autoPlay="autoPlay"></audio>
                    <audio id="star-click" src={starClick} preload="load"></audio>
                </div>
                <Cursor></Cursor>

            </div>
        );
    }
}

export default Star;
