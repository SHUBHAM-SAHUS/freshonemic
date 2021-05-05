import React from 'react';
import './visitorSidebar.scss'
import p3 from 'assets/images/p3.png'
import p1 from "assets/images/p1.png"
import p4 from "assets/images/p4.png"
import p5 from "assets/images/p5.png"
import p11 from "assets/images/p11.png"

export const VisitorSidebar = () => {
    return (
        <div className="row" id="leftSidebar">
       
            <div className="widget-section blue-bg col-md-12 pt-4">
                <section>
                    <ul className="list-unstyled sidebarlink text-uppercase">
                        <li className="selected"><a className="visitor_a" href="#"><img src={p1} alt />Station </a> </li>
                        <li><a className="visitor_a" href="#"><img src={p3} alt /> Topics </a></li>
                        <li><a className="visitor_a" href="#"><img src={p4} alt /> Posts </a></li>
                        <li><a className="visitor_a" href="#"><img src={p5} alt /> Comments </a></li>
                        <li><a className="visitor_a" href="#"><img src={p11} alt /> Recommendations </a></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
