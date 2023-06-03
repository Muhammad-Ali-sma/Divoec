import React from 'react'

const Banner = () => {
    return (
        <div className="main_banner">
            <figure><img src="./images/banner_img.jpg" alt="banner_img" /></figure>
            <div className="banner_area">
                <div className="container">
                    <div className="banner_cont_wrap" data-aos="fade-right">
                        <div className="banner_cont_wrap_roll">
                            <div className="banner_cont_wrap_inner">
                                {/* <h1 className='banner_heading'>
                                    <span></span>
                                    <div class="message">
                                        <div>WEB DEVELOPERS</div>
                                        <div>GRAPHIC DESIGNERS</div>
                                        <div>CUSTOMER SERVICE</div>
                                        <div>TECH SUPPORT</div>
                                        <div>MARKETING MANAGER</div>
                                        <div>DRAFTERS</div>
                                        <div>ENGINEERS</div>
                                    </div>
                                </h1>
                                <p>Diovec’s cost-effective hiring solution helps businesses scale their operations with
                                    skilled engineers in Thailand.</p> */}
                                <section class="rotatingText">
                                    <div class="rotatingText-content">
                                        <span class="rotatingText-description">
                                            HIRE THE BEST
                                        </span>
                                        <h4 class="rotatingText-adjective">WEB DEVELOPERS</h4>
                                        <h4 class="rotatingText-adjective">GRAPHIC DESIGNERS</h4>
                                        <h4 class="rotatingText-adjective">CUSTOMER SERVICE</h4>
                                        <h4 class="rotatingText-adjective">TECH SUPPORT</h4>
                                        <h4 class="rotatingText-adjective">MARKETING MANAGER</h4>
                                        <h4 class="rotatingText-adjective">DRAFTERS</h4>
                                        <h4 class="rotatingText-adjective">ENGINEERS</h4>
                                    </div>
                                </section>
                            </div>
                            {/* <div className="banner_cont_wrap_inner">
                                <h2>WE MAKE IT EASY TO HIRE OFFSHORE ENGINEERS</h2>
                                <p>An affordable offshore staffing solution for businesses that want to build their team
                                    with skilled engineers in Thailand.</p>
                            </div>
                            <div className="banner_cont_wrap_inner">
                                <h1>HIRE OFFSHORE ENGINEERS THAT HELP YOUR BUSINESS THRIVE</h1>
                                <p>Diovec’s cost-effective hiring solution helps businesses scale their operations with
                                    skilled engineers in Thailand.</p>
                            </div>
                            <div className="banner_cont_wrap_inner">
                                <h2>WE MAKE IT EASY TO HIRE OFFSHORE ENGINEERS</h2>
                                <p>An affordable offshore staffing solution for businesses that want to build their team
                                    with skilled engineers in Thailand.</p>
                            </div> */}
                        </div>
                        <div className="pg_btn">
                            <a href="#form_sec" className="cmn_btn" data-scroll>HIRE TODAY</a>
                            <a href="#testimonial_sec" className="cmn_btn learn_more_btn" data-scroll>LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner