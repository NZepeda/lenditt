import React, {Component} from 'react';
import iphone from '../../assets/images/iphone.png';

const BeTheFirst = () => {
    return (
        <section id="be-the-first" className="pad-xl">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 text-center margin-30 wow fadeIn" data-wow-delay="0.6s">
                    <h2>Put Your Things To Work</h2>
                    <p className="lead">With Lenditt, turn your belongings into assets by sharing them with others.</p>
                    </div>
                </div>
            
                <div className="iphone wow fadeInUp" data-wow-delay="1s">
                    <img src={iphone}/>
                </div>
            </div>
      </section>
    )
}

export default BeTheFirst;