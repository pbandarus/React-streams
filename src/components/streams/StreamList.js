import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return(
                <div>
                    <Link to={`/streams/edit/${stream.id}`} className="col-xs-2 btn btn-primary">Edit</Link>
                    <Link to={`/streams/edit/${stream.id}`} className="col-xs-2 btn btn-danger">Delete</Link>
                </div>
            );
        }
    }
    renderList(){
        return this.props.streams.map(stream => {
            return(
                <div className="col-xs-12" key={stream.id}>
                    <div className="col-xs-4">
                        {stream.title}
                    </div>
                    <div className="col-xs-4">
                        {stream.description}
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            );
        });
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{ textAlign: 'right'}}>
                    <Link to="/streams/new" className="btn btn-primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }
    render(){
        return (    
            <div>
                <div>{this.renderList()} </div>
                <div>{this.renderCreate()}</div>
            </div>       
        );
    }
}

const mapStateToProps =  (state) => {
    return {
        streams : Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }; 
    // Object.values turns all the vlues in a obj to array
    // we will usually have the dataq in the form of objects in redux store, as it will be easy to manipulate the data 
    // i.e add/delete
    // but again we will have that back in the form of array int eh componente to use map function a nd display
};

export default connect(mapStateToProps, {fetchStreams})(StreamList);