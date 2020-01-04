import React from  'react';
import ReactDOM from 'react-dom';
import history from '../history'

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="modal" role="dialog" onClick={() => history.push('/')}>
            <div className="modal-dialog" role="document">
                <div className="modal-content" pnClick={(e) => e.stopPropagation()}>
                    <div className="modal-body">
                        fhgkdhfjkdfjghd
                    </div>
                </div>
            </div>            
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;

// When using react portals, instead of returning some JSX there wil be a little change
// we use createPortal function which take 2 args , first is JSX.
// second is the reference to the elemetn where this has to be rendered in to (body element)
// we create a new element in index.html as sibbling to the root element