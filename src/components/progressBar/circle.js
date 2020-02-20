import React from 'react';
import $ from '../../imports/main/jquery/jquery-vendor.js';
import Raphael from '../../imports/other/raphael/raphael2.2.1.min.js';
import './circle.css';

class Circle extends React.Component{
    componentDidMount(){
        let o = {
            init: function(){
                this.diagram();
            },
            random: function(l, u){
                return Math.floor((Math.random()*(u-l+1))+l);
            },
            diagram: function(){
                let r = Raphael('diagram', 600, 500),
                    rad = 73,
                    defaultText = 'Skills',
                    speed = 250;

                r.circle(250, 250, 75).attr({ stroke: 'none', fill: '#193340' });

                let title = r.text(250, 250, defaultText).attr({
                    font: '20px Granjon',
                    fill: '#fff'
                }).toFront();

                r.customAttributes.arc = function(value, color, rad){
                    var v = 3.6*value,
                        alpha = v == 360 ? 359.99 : v,
                        random = o.random(91, 240),
                        a = (random-alpha) * Math.PI/180,
                        b = random * Math.PI/180,
                        sx = 250 + rad * Math.cos(b),
                        sy = 250 - rad * Math.sin(b),
                        x = 250 + rad * Math.cos(a),
                        y = 250 - rad * Math.sin(a),
                        path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
                    return { path: path, stroke: color }
                }

                $('.get').find('.arc').each(function(i){
                    let t = $(this),
                        color = t.find('.color').val(),
                        value = t.find('.percent').val(),
                        text = t.find('.text').text();
                    //间距
                    rad += 18;
                    let z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 15 });

                    z.mouseover(function(){
                        //线宽
                        this.animate({ 'stroke-width': 26, opacity: .75 }, 1000, 'elastic');
                        if(Raphael.type != 'VML') //solves IE problem
                            this.toFront();
                        title.stop().animate({ opacity: 0 }, speed, '>', function(){
                            this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
                        });
                    }).mouseout(function(){
                        this.stop().animate({ 'stroke-width': 15, opacity: 1 }, speed*4, 'elastic');
                        title.stop().animate({ opacity: 0 }, speed, '>', function(){
                            title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
                        });
                    });
                });

            }
        };
        o.init();
    }



    render(){
        return(
            <div>
                <div id="circleBarContent">

                    <div className="legend">

                        <h1>Skills:</h1>

                        <div className="skills">

                            <ul>

                                <li className="html">Html+Html5</li>

                                <li className="css">Css+Css3</li>

                                <li className="js">JS+jQuery</li>

                                <li className="webpack">Webpack</li>

                                <li className="reactVue">React+Vue</li>

                                <li className="gitLinux">Linux+Github</li>

                                <li className="canSvg">Canvas+SVG</li>

                                <li className="ui">UI</li>


                            </ul>

                        </div>

                    </div>

                    <div id="diagram"></div>

                </div>

                <div className="get">

                    <div className="arc">

                        <span className="text">Html+Html5</span>

                        <input type="hidden" className="percent" value="95" />

                        <input type="hidden" className="color" value="#AAA4A1" />

                    </div>

                    <div className="arc">

                        <span className="text">Css+Css3</span>

                        <input type="hidden" className="percent" value="90" />

                        <input type="hidden" className="color" value="#ABC8DD" />

                    </div>

                    <div className="arc">

                        <span className="text">JS+jQuery</span>

                        <input type="hidden" className="percent" value="80" />

                        <input type="hidden" className="color" value="#D3DDE5" />

                    </div>

                    <div className="arc">

                        <span className="text">Webpack</span>

                        <input type="hidden" className="percent" value="70" />

                        <input type="hidden" className="color" value="#B0B7C4" />

                    </div>

                    <div className="arc">

                        <span className="text">React+Vue</span>

                        <input type="hidden" className="percent" value="65" />

                        <input type="hidden" className="color" value="#A9875D" />

                    </div>

                    <div className="arc">

                        <span className="text">Linux+Github</span>

                        <input type="hidden" className="percent" value="65" />

                        <input type="hidden" className="color" value="#B5B8BF" />

                    </div>

                    <div className="arc">

                        <span className="text">Canvas+SVG</span>

                        <input type="hidden" className="percent" value="60" />

                        <input type="hidden" className="color" value="#B8C6D1" />

                    </div>
                    <div className="arc">

                        <span className="text">UI</span>

                        <input type="hidden" className="percent" value="50" />

                        <input type="hidden" className="color" value="#A8A5A3" />

                    </div>

                </div>
            </div>
        );
    }
}
export default Circle;