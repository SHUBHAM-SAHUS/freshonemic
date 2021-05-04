import React from 'react';
import { VisitorSidebar } from './VisitorSidebar/VisitorSidebar';

export const VisitorStation = () => {
    return (
        <div>
             <section className="main">
                <div className="container-fluid">
                    <div className="row">
                    {/* left sidebar */}
                        <div className="col-md-2 col-12" id="">
                            <div className="row">
                               <VisitorSidebar/>
                            </div>
                        </div>
                    {/* left sidebar end */}
                    </div>
                </div>
            </section>
        </div>
    )
}
