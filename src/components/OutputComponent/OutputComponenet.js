import React from 'react';

const OutputComponent = (props) => {
    const style = {
        padding: "0px",
        fontSize: "12px",
        letterSpacing: "0.05rem",
        color: "#999"
    }
    return (
        <ul style={style}>
            {props.items.map((item,index) => <p key={index}>{item}</p>)}
        </ul>
    )
}

export default OutputComponent;