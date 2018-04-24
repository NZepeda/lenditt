import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Invite = () => {
    return (
        <section id="invite" className="pad-lg light-gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 text-center">
                        <FontAwesomeIcon icon="envelope" className="margin-40 envelope" size="3x"/>
                        <h2 className="black">Sign Up!</h2>
                        <br />
                        <p className="black">Sign up and we'll notify you when we go live!</p>
                        <br />
                        
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <form role="form">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="userEmail" placeholder="Enter Email"/>
                                </div>
                                <button type="button" onclick="emailFormButtonPressed()" className="btn btn-primary btn-lg">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Invite;