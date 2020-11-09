import React, {useEffect, useState} from 'react';
export default (Component, styles) => ({ ...props }) => {
    const [hasRendered, setHasRendered] = useState(false);
    const [styleSeted, setStyleSeted] = useState(false);
    useEffect(() => setHasRendered(true), []);
    if (props.staticContext && !hasRendered && !styleSeted) { // css 服务器端渲染
        setStyleSeted(true);
        props.staticContext.css.push(styles._getCss())
        console.log(styles._insertCss(), styles._getContent())
    }
    return <Component {...props}/>;
}
    