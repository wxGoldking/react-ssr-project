import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
export default (Component, styles) => ({ ...props }) => {
    if(props.staticContext) {
        useStyles(styles);
    }
    return <Component {...props}/>;
}
    