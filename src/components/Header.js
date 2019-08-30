import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            <h1>{props.title}</h1>
            <h3>My ID:
                <input
                    className='input-filterPosts'
                    value={props.inputValue}
                    placeholder='Please select between 1 and 10'
                    onChange={(inputValue) => props.filterPosts(inputValue.target.value)}
                />
            </h3>
        </div>
    );
}

export default Header;