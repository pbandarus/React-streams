import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from  './GoogleAuth';

const Header = () => {
    return (
        <div className="row col-12">
            <div className="col-5">
                <Link to="/" >Streamy</Link>
            </div>
            <div className="col-5">
                <Link to="/" >All streams</Link>
            </div>
            <div className="col-2"> 
                <GoogleAuth/>
            </div>
        </div>
    );
}

export default Header;