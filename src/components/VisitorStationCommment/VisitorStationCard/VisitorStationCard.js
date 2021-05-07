import React from 'react'
import one from './visitorStationCard.module.scss';
import author2 from 'assets/images/author2.jpg'

export const VisitorStationCard = () => {
    return (
        <>
            <div className="card mb-3 border-0 p-3 comments-list-card">
                <div className="media"> <img src={author2} alt="John Doe" className="mr-3 rounded-circle" style={{ width: 50 }} />
                    <div className="media-body">
                        <div className={`${one.article_title} mb-3`}>
                            Commented on <span className="comment">Why Colleges now imposing uniforms?</span> <span className={`${one.text_primary}`}>with</span> <span className="commentagree">I totally agree</span>
                        </div>
                        <div className={`${one.article_body}`}>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque... </p>
                            <p className="author pt-0"><a href="#" className="authername" title="James_007">James_007</a> <span className="ago">
                                2 hours ago</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
