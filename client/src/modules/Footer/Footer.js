import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 margin-20">
                        <ul className="list-inline social">
                            <li>Connect with us on</li>
                            <li><a href="https://twitter.com/LendittApp"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
                            <li><a href="https://www.facebook.com/LendittApp-110325252946044/"><FontAwesomeIcon icon={["fab", "facebook"]}/></a></li>
                            <li><a href="https://www.instagram.com/lendittapp"><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
      </footer>
    )
}

export default Footer;