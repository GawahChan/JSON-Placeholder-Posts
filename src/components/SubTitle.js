import React from 'react'
import './SubTitle.css';

function SubTitle(props) {
    return (
        <div className='subTitle'>
            <h2>{props.title}</h2>
            <div className={`btn-displayPosts ${props.display ? 'up' : 'down'}`}
                onClick={props.toggleDisplay}
            />
        </div>
    );
}

export default SubTitle;