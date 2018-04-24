import React from 'react';
import Header from '../Header/Header'
import BeTheFirst from '../BodyComponents/BeTheFirst';
import MainInfo from '../BodyComponents/MainInfo';
import Invite from '../BodyComponents/Invite';
import Footer from '../Footer/Footer';
import * as qs from 'query-string';
class AppWrapper extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(qs.parse(this.props.location.search).type)
    }
    getTypeOfVisitor(){
        return qs.parse(this.props.location.search).type;
    }
    render(){
        return(
            <div>
                <Header />
                <div className="mouse-icon hidden-xs">
                    <div className="scroll"></div>
                </div>
                <BeTheFirst/>
                <MainInfo />
                <Invite type={this.getTypeOfVisitor()}/>
                <Footer />
            </div>
        )
      
    }
}

export default AppWrapper;