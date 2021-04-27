import React from 'react';
import p1 from 'assets/images/p1.png';
import p2 from 'assets/images/p2.png';
import p3 from 'assets/images/p3.png';
import p4 from 'assets/images/p4.png';
import p5 from 'assets/images/p5.png';
import p6 from 'assets/images/p6.png';
import p7 from 'assets/images/p7.png';
import p8 from 'assets/images/p8.png';
import p9 from 'assets/images/p9.png';
import p10 from 'assets/images/p10.png';
import p11 from 'assets/images/p11.png';
import './sectionRightSideBar.scss';

export const SectionRightSideBar = () => {
    return (
        <div className="col-md-2">
            <div className="row">
                <div className="widget-section blue-bg col-md-12 pt-4">
                    <section>
                        <ul className="list-unstyled">
                            <li className="pb-4 pt-4"><a className="section_color" href="#"><img src={p1} alt />&nbsp;&nbsp;&nbsp; My Station </a> </li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p2} alt />&nbsp;&nbsp;&nbsp; Analytics </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p3} alt />&nbsp;&nbsp;&nbsp; Topics </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p5} alt />&nbsp;&nbsp;&nbsp; Comments </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p6} alt />&nbsp;&nbsp;&nbsp; Pins </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p4} alt />&nbsp;&nbsp;&nbsp; Posts </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p7} alt />&nbsp;&nbsp;&nbsp; Upvoted </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p8} alt />&nbsp;&nbsp;&nbsp; Downvoted </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p9} alt />&nbsp;&nbsp;&nbsp; Playlist </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p10} alt />&nbsp;&nbsp;&nbsp; Flagged </a></li>
                            <li className="pb-4 pb-4"><a className="section_color" href="#"><img src={p11} alt />&nbsp;&nbsp;&nbsp; Recommendations </a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
