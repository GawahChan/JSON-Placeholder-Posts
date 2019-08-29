import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <input
                className='input-filterPosts'
                value={props.inputValue}
                placeholder='Please select between 1 and 10'
                onChange={(inputValue) => props.filterPosts(inputValue.target.value)} 
                />
        </div>
    );
}

export default Header;