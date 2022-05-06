import React from 'react';

export default function Comment({comment}){
    return (
        <div>
            <div className='d-block'>
                <span className='fw-bold'>{comment.user.name}: </span>
                <span>{comment.comment}</span>
                
            </div>
        </div>);
}