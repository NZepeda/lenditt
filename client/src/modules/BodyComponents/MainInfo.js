import React, {Component} from 'react';

const MainInfo = () => {
    return (
        <section id="main-info" className="pad-xl">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                        <hr className="line purple" />
                        <h3>Rent Your Things</h3> 
                        <p>
                            Not using your belongings often? Rent out your things for others to enjoy. 
                            Plus, clear a little space at home all while doing so!  
                        </p>
                    </div>
                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                        <hr  className="line blue" />
                        <h3>Earn Some Money</h3>
                        <p>
                            Looking for a simple way to make extra cash? Post your stuff and let them make you money! 
                            Simply sit back and relax while you start to earn! 
                        </p>
                    </div>
                    <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
                        <hr  className="line yellow" />
                        <h3>Explore New Things</h3>
                        <p>
                            Looking to pick up a new hobby? Explore local items and rent the things you find interesting. 
                            You’ll never know what you like until you try it! 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainInfo;