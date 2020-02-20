import React from 'react';
import $ from '../../imports/main/jquery/jquery-vendor.js';
import circlePng from '../../assets/icon/music5.svg';
// import mg from '../../assets/img/human/3.jpg';
import musicD from '../../assets/radio/mymini.mp3';
import './music.css';


class Music extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        musicClass:"music"
    };

    componentDidMount(){

    }

    playPause=()=>{
        let _self = this;
        let m = document.getElementById('audio');
        if(this.state.musicClass === 'music pause'){
            setTimeout(()=>{
                _self.setState({musicClass:"music"});
            },0);
            $('.circle').css('animation-play-state','running');
            m.play();
        }else {
            $('.circle').css('animation-play-state','paused');
            setTimeout(()=>{
                _self.setState({musicClass:'music pause'});
            },0);
            m.pause();
        }
    }

    render(){
        return (
            <div style={{float:"left",position:"fixed",zIndex:"20000"}}>
                <audio id="audio" className={this.state.musicClass} src={musicD} autoPlay="autoPlay" loop="loop"></audio>
                <div className="music" onClick={this.playPause.bind(this)}>
                    <img className="circle" src={circlePng} alt="" />
                </div>
                {/*<img src={mg}/>*/}
            </div>
        );
    }

}
export default Music;