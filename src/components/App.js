import React from 'react';
import {Route, Link, Router} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// const pageOne = () => {
//     return (
//         <div>Page1</div>
//     );
// }

// const pageTwo = () => {
//     return (
//         <div>
//             <div>Page2</div>
//             {/* BAD approach */}
//             <a href="/pageOne">PageOne</a>
//             {/* Use Link */}
//             <Link to="/pageOne">Navigate to page one</Link>
//         </div>
//     );
// }

const App = () => {    
    return(
        <div>
            {/* <BrowserRouter>
                <Route path="/" exact component={pageOne}></Route>
                <Route path="/pageTwo" component={pageTwo}></Route>
            </BrowserRouter> */}
            {/*<BrowserRouter history={history}>  telling browserrouter not to create a history obj but use the one provided */}
            <Router history={history}>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/new" component={StreamCreate}></Route>
                    <Route path="/streams/edit/:id" component={StreamEdit}></Route>
                    <Route path="/streams/delete" component={StreamDelete}></Route>
                    <Route path="/streams/:id" component={StreamShow}></Route>
                </div>
            </Router>
            {/*</BrowserRouter>*/}
        </div>
    ); 
}

export default App;

// When we create an application and loaded inside our browser, we create an instance of BrowserRouter component
// Then this BrowserRouter internally creates an object of its own called history obj
// this is going to look at the URl and extract that portion of url that react router cares about
// history obj is then communicate that path to the broswerrouter
// then it is going to communicate to the route components .. they will decide to show or hide based on path value/prop

// we should never be using <a> tags and href to navigate inside react-router appication
// when ever we use href or click on those links, react will make a request to server and gets the index.html, then it dumps the 
// existing/old file it was showing .. which includes our script whiles .. which browser will download again execute these scripts
// by this time the entire state is lost .. our pp starts up again
// Link tag should only be used inside the BrowserRouter/router component.. if not error will be thrown

// Types of routers
// Browserrouter .. uses everything after TLD or port as path
// IN the normal traditional web servers .. when we make a request, it looks the path and return html contnent , if not avilable
// it will retur a 404 page not found
// IN react with browserrouter, when a request is made, the react devserver will check for deve resources(all the files that will be loaded)
// then it will check the public dir if there is any name
// if nto then it will return the index.html file which has bundle.js which has the app.js where browserrouter is defined
// history obj will check the url and respond to browser which will pass to route and ask to render accordingly
// so when an application which is using browserrouter is deployed to a server, it should be configured to return index.html if the 
// path is not found .. as all the paths are defined inside app for any SPA 

// Hashrouter .. uses everything after a # as path
// when using this the browser will make a request to server ignoring the value after hash
// when configuring server the server will always return index.html for any request i.e all of the req will be same
// i.e hash wil be only used for client

// memoryrouter .. doesn't use the url to track navigntions .. when using this, the url never updates .. it will always be initial domain

