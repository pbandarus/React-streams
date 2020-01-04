import React from 'react';
import {Field,reduxForm} from 'redux-form'

class StreamForm extends React.Component{
    renderError({error , touched}){
        if(touched && error){
            return(
                <div>{error}</div> 
            );
        }
    }
    renderInput = (formProps) =>{
        console.log(formProps);
        return (
            <div className="row">
                <div className="col-12">
                    <label>{formProps.label}</label><br/>
                    <input onChange={formProps.input.onChange} value={formProps.input.value} />
                    {/*<div>{formProps.meta.error}</div>*/}
                    {this.renderError(formProps.meta)}
                </div>
            </div>
        );
    }
    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.onSubmit(formValues);
    }
    render(){
        return (
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} style={{padding:"20px"}}>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="btn-primary">Submit</button>
                </form>
        ); 
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description';
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',   // name of the form
    validate
})(StreamForm);

// In case of using a reduxFOrm, it takes one more arg along with the current comp called initiaValues
// which can be used to prefil the form


// importing redux form
// import 2 helpers Field, reduxForm
// Field is a react component that we evantually show on the screen
// reduxForm is a function,this function is going to have exactly the same behaviour as connect function
// which is going to trigger action creators and get some form datya to component .. this all happens automatically
// unlike connect function which takes multiple args, reduxForm will take a single object and we put buch of config into that object

// <Field /> cpomponent is imported from redux-form .. we will use this to show a field to user(input i.e text/radio/checkbox etc)
// we have to pass some props to this component
// one that is always required is name prop ... name is not the field title/label
// but is name of the property that field is going to manage
// when using the field component it doen't know what to do / how to render some type of input element on the DOM/screen
// do let it know, we have to add a prop called component .. this will tell the field what to show on the screen

// validating form
// For every interacgtion witht the form, redux is going to call the validate function
// we have to define the valuidate function .. this is going to be called with all the curren tvalues in the form
// then we see if hte enterd all the valid inp[uts based on the values from formValues object
// then we return an empty obj if everything is correct, if not we returnan object with key value pairs
// with name as the key and error as error message

// then we need to make sure to wire this up to reduxForm so that it knows to use the validate fuinction
// we do this with key as vali8date and value as validate
