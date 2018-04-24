import React, {Component} from 'react';

const Invite = () => {
    return (
        <section id="invite" class="pad-lg light-gray-bg">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text-center">
                        <i class="fa fa-envelope-o margin-40"></i>
                        <h2 class="black">Sign Up!</h2>
                        <br />
                        <p class="black">Sign up and we'll notify you when we go live!</p>
                        <br />
                        
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <form role="form">
                                <div class="form-group">
                                    <input type="email" class="form-control" id="userEmail" placeholder="Enter Email"/>
                                </div>
                                <button type="button" onclick="emailFormButtonPressed()" class="btn btn-primary btn-lg">Sign Up</button>
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