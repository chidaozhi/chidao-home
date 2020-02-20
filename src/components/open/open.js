import React from 'react';
import $ from '../../imports/main/jquery/jquery-vendor.js';
import openMusic from '../../assets/radio/staropen.mp3';
import './open.css';
import noneImg from '../../assets/img/human/2.jpg';

class Open extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loadCount : 0,
            imgCount:0
        };
    };
    componentDidMount(){
        $('body').addClass('open');
        this.opening();
    };
    componentDidUpdate(){

    }
    opening = () =>{
        let _self = this;
        let imgCount = document.getElementsByTagName('img').length,
            targetEle = $('.opening_bar span'),
            nowPosition = 0;
        setTimeout(()=>{
            _self.setState({imgCount});
        },0);
        $("img,video").each(function(){
            $('img,video').on('load',function(){
                setTimeout(()=>{
                    _self.setState({loadCount:_self.state.loadCount+1});
                },0);
            });
        });

        // openingFlg = true;

        let loadTimer = setInterval(function(){
            if(nowPosition > 99.9){
                clearInterval(loadTimer);
                targetEle.stop().css({'left':'auto','right':'0'}).animate({'width':'0%'},500,function(){
                    $('.loading').removeClass('none');
                    $('.opening').addClass('none');
                    $('.loading_up').delay(100).animate({'height':'0%'},625);
                    $('.loading_down').delay(100).animate({'height':'0%'},625,function () {
                        $('body').removeClass('open');
                        $('.loading_inner,.loading').remove();
                    });
                });
            }else{
                let targetPosition = (_self.state.loadCount / _self.state.imgCount) * 100;
                // nowPosition += (targetPosition - nowPosition) * 0.02;
                nowPosition += (targetPosition - nowPosition) * 0.05;
                targetEle.stop().animate({'width':nowPosition + '%'},10);
            }
        },5);
        // console.log('opening OK!');
    }

    render(){
        return(
            <div id="open">
                <div className="opening">
                    <div className="opening_bar"><span></span></div>
                </div>
                <div className="loading none">
                    <div className="loading_inner">
                        <div className="loading_up"></div>
                        <div className="loading_down"></div>
                    </div>
                </div>
                <div className="open-music">
                    <audio id="open-music" src={openMusic} autoPlay="autoPlay"></audio>
                </div>
                {/*<img src={noneImg} alt="" style={{display:"none"}}/>*/}
            </div>
        );
    }
}

export default Open;