import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId : '759366668028-fn3a7kbpe2ndtudqu9se1t1t8nu2flae.apps.googleusercontent.com',
                scope : 'email' // what diff parts of users profile that we have to access to 
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    };
    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };
    renderAuthButton(){
        if(this.props.isSignedIn == null){
            return <div>I dont know if we are signed in</div>
        }else if(this.props.isSignedIn){
            return (
                <div className="button" onClick={this.onSignOutClick}>Sign out</div>
            );
        }else{
            return (                
                <div className="button" onClick={this.onSignInClick}>Sign in</div>
            );
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>;
    };
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);