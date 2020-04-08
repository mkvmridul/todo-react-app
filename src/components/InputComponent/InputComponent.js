import React from 'react';

const InputComponent = (props) => {
        return (
            <form  onSubmit={props.submit}>
                <input type="text"  placeholder="please add Items" name="value"/>
            </form>
        )
}


export default InputComponent;