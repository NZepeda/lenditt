import React, {Component} from 'react';
import {Rol, Col} from 'react-bootstrap';
import logo from '../../assets/images/lendittlogo.png';
const Header = () => {
    return (
        <header>
            <div className="container">        
                <div className="row header-info">
                    <div className="col-sm-10 col-sm-offset-1 text-center">
                        <img className="page-logo" src={logo}/>
                        <h1 className="wow fadeIn header-title">Lenditt</h1>
                        <br />
                        <p className="lead wow fadeIn" data-wow-delay="0.5s">Rent. Earn. Explore.</p>
                        <br />
                        
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                <div className="row">
                                    <div className="col-xs-6 text-right wow fadeInUp" data-wow-delay="1s">
                                        <a href="#be-the-first" className="btn btn-secondary btn-lg scroll">About</a>
                                    </div>
                                    <div className="col-xs-6 text-left wow fadeInUp" data-wow-delay="1.4s">
                                        <a href="#invite" className="btn btn-primary btn-lg scroll">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;