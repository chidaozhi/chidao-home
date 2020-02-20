import React from 'react';
import './cursor.css';

class Cursor extends React.Component{
    componentDidMount(){
        setTimeout( ()=>{
            //鼠标特效
            $(document).mousemove(function (e) {
                $('.cursor span')
                    .eq(0)
                    .css({
                        left: e.pageX,
                        top: e.pageY
                    });
                setTimeout(function() {
                    $('.cursor span')
                        .eq(1)
                        .css({
                            left: e.pageX,
                            top: e.pageY
                        });
                }, 100);
            });
            $('.circle,.mainScroll,.skip,.callButton span').mouseover(function () {
                    $('.cursor span')
                        .eq(1)
                        .css({
                            width:30,
                            height:30,
                            backgroundColor:"#330000",
                            opacity:0.3
                        });
            });
            $('.circle,.mainScroll,.skip,.callButton span').mouseout(function () {
                $('.cursor span')
                    .eq(1)
                    .css({
                        width:10,
                        height:10,
                        backgroundColor:"#e5e6ef",
                        opacity:1
                    });
            });
            //禁止右键
            document.oncontextmenu = function()
            {
                return false;
            }


            function nocontextmenu()
            {
                if(document.all) {
                    event.cancelBubble=true;
                    event.returnvalue=false;
                    return false;
                }
            }

        },0);

    }

    render(){
        return(
            <div>
                <div className='cursor'>
                    <span style={{ransform:'translateZ(90px)'}}></span>
                    <span style={{ransform:'translateZ(50px)'}}></span>
                </div>
            </div>
        );
    }
}

export default Cursor;