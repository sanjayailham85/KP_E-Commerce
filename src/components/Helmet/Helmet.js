import React from "react";

const Helmet = (props) => {

    document.title = 'Devices Shop -' + props.title
    return (
        <div className="w-500">{props.children}</div>
    )
}

export default Helmet