import React from 'react'

const AskYourself = () => {
    return (
        <div className="diovec_hiring cmn_gap">
            <div className="container">
                <div className="main-row">
                    <div className="main-col hiring_col_left">
                        <div className="hiring_left_wrap" data-aos="fade-up">
                            <figure><img src="./images/hiring_img.jpg" alt="hiring_img"/></figure>
                        </div>
                    </div>
                    <div className="main-col hiring_col_right">
                        <div className="hiring_right_wrap" data-aos="fade-down">
                            <h6>PROBLEM</h6>
                            <h2>Ask Yourself, Is Your Business Struggling With:</h2>
                            <ul>
                                <li>Recruiting skilled software engineers?</li>
                                <li>Finding experienced civil engineers?</li>
                                <li>Skyrocketing salary demands?</li>
                                <li>Lack of extra resources to meet cyclical demand?</li>
                            </ul>
                            <p>At Diovec, we help software companies and civil engineering firms hire teams of talented
                                engineers offshore, which saves you time and costs. You can go from searching to onboarding
                                in a matter of days/weeks, not months.</p>
                            <div className="pg_btn">
                                <a href="#form_sec" className="cmn_btn" data-scroll>START HIRING</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskYourself