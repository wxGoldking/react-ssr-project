import React from 'react';
export default (props) => {
    if(props.staticContext) {
        props.staticContext.NOT_FOUND = true;
    }
    return <div>
        404 Not Found
    </div>
}