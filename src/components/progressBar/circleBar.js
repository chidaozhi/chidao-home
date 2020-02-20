import React from 'react';
import * as d3 from 'd3';
import './circleBar.css';

class CircleBar extends React.Component{

    componentDidMount(){
        console.log(d3);
        let chartData = {
            "barCircleWeb":[
                {"index":0.3, "value":31, "fill":"#231F20", "label":"html+html5"},
                {"index":0.4, "value":26, "fill":"#403437", "label":"css+css3"},
                {"index":0.5, "value":24, "fill":"#53363C", "label":"js+jquery"},
                {"index":0.6, "value":12, "fill":"#5E2C3A", "label":"webpack"},
                {"index":0.7, "value":11, "fill":"#660E34", "label":"react"},
                {"index":0.8, "value":10, "fill":"#7D3A4D", "label":"vue"},
                {"index":0.9, "value":10, "fill":"#96606B", "label":"github"},
                {"index":1,   "value":9,  "fill":"#B28A91", "label":"linux"},
                {"index":1.1, "value":8,  "fill":"#D3BCBF", "label":"canvas+svg"},
                {"index":1.2, "value":7 , "fill":"#EDE4E5", "label":"UI"}
            ]
        };
        function drawBarCircleChart(data,target,values,labels){
            let w = 362,
                h = 362,
                size = data[0].value * 1.15,
                radius = 200,
                sectorWidth = .1,
                radScale = 25,
                sectorScale = 1.45,
                targetD = d3.select(target),
                valueText = d3.select(values),
                labelText = d3.select(labels);


            let arc = d3.arc()
                .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
                .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
                .startAngle(Math.PI)
                .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });

            let path = targetD.selectAll("path")
                .data(data);

            //TODO: seperate color and index from data object, make it a pain to update object order
            path.enter().append("svg:path")
                .attr("fill",function(d,i){return d.fill})
                .attr("stroke","#D1D3D4")
                .transition()
                .ease(d3.easeElastic)
                .duration(1000)
                .delay(function(d,i){return i*100})
                .attrTween("d", arcTween);

            valueText.selectAll("tspan").data(data).enter()
                .append("tspan")
                .attr(
                    "x",50
                )
                .attr("y",function(d,i){return i*14},)
                .attr("text-anchor","end")
                .text(function(d,i){return data[i].value+50 + "%"});

            labelText.selectAll("tspan").data(data).enter()
                .append("tspan")
                .attr(
                    "x",0)


                .attr("y",function(d,i){return i*14})
                .text(function(d,i){return data[i].label});

            function arcTween(b) {
                let i = d3.interpolate({value: 0}, b);
                return function(t) {
                    return arc(i(t));
                };
            }
        }

// Animation Queue
        setTimeout(function(){drawBarCircleChart(chartData.barCircleWeb,"#circleBarWebChart","#circleBarWebValues","#circleBarWebLabels")},500);

        d3.select("#circleBarWebIcon")
            .transition()
            .delay(500)
            .duration(500)
            .attr("opacity","1");
        d3.select("#circleBarWebText")
            .transition()
            .delay(750)
            .duration(500)
            .attr("opacity","1");

        d3.select("#circleBarWebClipLabels")
            .transition()
            .delay(600)
            .duration(1250)
            .attr("height","150");


    }

    render(){
        return(
            <div style={{display:"inline-block",width:"70vw"}} >
                <svg version="1.1"
                 x="0px" y="0px" width="100%" height="100%"
                 overflow="visible" preserveAspectRatio="xMinYMin meet" viewBox="0,0,700,700">

                    <g id="circleBarCharts">

                        <g id="circleBarWebGroup" transform="translate(150,20)">
                            <g id="Ordi" transform="translate(70,20)" >
                                <g>
                                    <path fill="#3D3636" d="M180.809,136.922c0,0.514-0.416,0.93-0.931,0.93l-72.138-0.022c-0.516,0-0.932-0.417-0.932-0.931
                                        l0.013-41.14c0-0.514,0.417-0.93,0.931-0.93l72.139,0.021c0.514,0.001,0.932,0.417,0.931,0.931L180.809,136.922z"></path>
                                    <path fill="#020202" d="M179.88,139.852l-72.141-0.022c-0.784-0.001-1.519-0.306-2.072-0.858
                                        c-0.555-0.555-0.859-1.292-0.858-2.076l0.013-41.136c0-1.614,1.313-2.928,2.929-2.93l72.141,0.021
                                        c1.619,0.003,2.932,1.319,2.931,2.933l-0.013,41.138C182.808,138.537,181.494,139.851,179.88,139.852z M108.81,135.831l70,0.021
                                        l0.011-39.001l-70-0.021L108.81,135.831z"></path>
                                </g>
                                <g>
                                    <path fill="#070707" d="M189.98,158.489c-2.479-5.739-6.236-14.957-6.236-14.957s-0.814-3.195-3.721-3.234
                                        c-2.908-0.04-68.262-0.028-68.262-0.028s-5.664-0.48-7.679,4.651l-4.889,13.28c0,0-2.093,5.126,4.458,5.128
                                        c6.551,0.002,77.953,0.023,77.953,0.023S192.459,164.227,189.98,158.489z M149.801,160.694c0,0-8.083-0.062-9.914-0.004
                                        c-1.525,0.048-1.458-0.932-1.392-1.261c0.013-0.066,0.025-0.106,0.025-0.106l-0.013,0.04c0,0,0.712-3.674,0.944-4.517
                                        c0.233-0.843,0.96-0.697,0.96-0.697s8.023-0.027,8.664,0.003c0.639,0.029,0.93,0.727,0.93,0.727s0.842,3.809,1.074,4.914
                                        C151.312,160.896,149.801,160.694,149.801,160.694z M114.471,151.756l2.873-9.786l52.33,0.403l3.562,9.848L114.471,151.756z"></path>
                                    <path fill="#020202" d="M183.074,163.9L183.074,163.9c-0.9,0-1.509-0.049-1.509-0.049l-77.913-0.022
                                        c-2.301,0-3.877-0.613-4.688-1.821c-1.146-1.707-0.271-3.904-0.232-3.997l4.882-13.264c1.819-4.631,6.401-4.99,7.763-4.99
                                        c0.271,0,0.427,0.014,0.427,0.014l19.603-0.003c21.182,0,46.812,0.005,48.625,0.03c2.603,0.035,3.884,2.377,4.198,3.611
                                        c0.016,0.027,3.762,9.214,6.211,14.882c0.562,1.303,0.546,2.423-0.049,3.329C189.151,163.504,185.729,163.9,183.074,163.9z
                                        M111.376,140.757c-1.202,0-5.244,0.313-6.827,4.346l-4.885,13.27c-0.014,0.033-0.719,1.821,0.133,3.082
                                        c0.615,0.911,1.912,1.374,3.855,1.374l77.953,0.023c0.049,0.002,0.623,0.048,1.469,0.048c3.354,0,5.716-0.667,6.48-1.83
                                        c0.404-0.615,0.393-1.395-0.033-2.383c-2.453-5.678-6.203-14.875-6.24-14.966c-0.052-0.18-0.784-2.89-3.265-2.923
                                        c-1.808-0.024-27.433-0.03-48.611-0.03l-19.644,0.001C111.709,140.767,111.585,140.757,111.376,140.757z M150.064,161.208
                                        c-0.186,0-0.318-0.018-0.329-0.019c0.001,0.009-3.729-0.024-6.677-0.024c-1.375,0-2.578,0.006-3.156,0.024l-0.122,0.002
                                        c-0.687,0-1.192-0.193-1.503-0.574c-0.271-0.331-0.371-0.801-0.272-1.288c0.005-0.023,0.009-0.043,0.013-0.062v0
                                        c0.029-0.151,0.718-3.703,0.953-4.554c0.186-0.673,0.678-1.074,1.318-1.074c0.066,0,0.121,0.005,0.16,0.01
                                        c0.602-0.003,8.033-0.025,8.65,0.003c0.754,0.034,1.215,0.666,1.367,1.034c0.027,0.084,0.87,3.897,1.102,5.004
                                        c0.107,0.508-0.052,0.839-0.205,1.027C151.104,161.039,150.654,161.208,150.064,161.208z M143.059,160.165
                                        c2.976,0,6.746,0.029,6.746,0.029c0.072,0.006,0.151,0.015,0.26,0.015c0.312,0,0.483-0.073,0.523-0.122
                                        c0.021-0.026,0.021-0.101,0.002-0.192c-0.225-1.07-1.02-4.673-1.07-4.898c0,0.007-0.178-0.333-0.467-0.346
                                        c-0.641-0.031-8.639-0.003-8.639-0.002l-0.101-0.01c-0.146,0-0.296,0.039-0.38,0.34c-0.225,0.814-0.928,4.442-0.936,4.479
                                        l-0.134-0.026l0.133,0.042c-0.026,0.125-0.063,0.367,0.054,0.51c0.109,0.134,0.369,0.208,0.729,0.207
                                        C140.455,160.171,141.67,160.165,143.059,160.165z M173.951,152.727l-60.146-0.476l3.165-10.784l53.056,0.409L173.951,152.727z
                                        M115.138,151.262l57.384,0.453l-3.199-8.845l-51.605-0.397L115.138,151.262z"></path>
                                </g>
                            </g>
                            <text id="circleBarWebText" opacity="0" x="200" y="143">Skills</text>
                            <g id="circleBarWebChart" transform="translate(215,150)"></g>
                            <clippath id="circleBarWebClipPath">
                                <rect id="circleBarWebClipLabels" x="205" y="215" width="180" height="0"></rect>
                            </clippath>
                            <g id="circleBarWebLegend" clipPath="url(#circleBar-web-clipPath)">
                                <text id="circleBarWebValues" transform="translate(222,225)"></text>
                                <text id="circleBarWebLabels" transform="translate(277,225)"></text>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}

export default CircleBar;