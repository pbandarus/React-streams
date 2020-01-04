import React from 'react';
import {connect} from 'react-redux';

import {fetchStream, editStream} from '../../actions';

import StreamForm from  './StreamForm';

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }
    render(){
        if(!this.props.stream){
            return <div>Loading ....</div>
        }else{
            return(
                <div>
                    <h3>Edit Stream</h3>
                    <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit}></StreamForm>
                </div>
            );
        }
    }
    // when our component is first rendered, this.props.stream is undefined
    // We will use an if statement to check
}

const mapStateToProps = (state, ownProps) => {
    // ownProps is the reference to the props arg available to this component
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);