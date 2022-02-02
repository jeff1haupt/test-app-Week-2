import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Cringe from './cringe';
import Happy from './happy';

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return (
            <div className='card w-75'>
                <div className='card-header bg-success text-white'>
                    {this.props.username} {this.props.date}
                </div>
                <div className='card-body'>
                    {this.props.content}
                </div>
                <div className='card-footer'>
                    <LikeButton />
                    <span>&nbsp;</span>
                    <ReplyButton />
                    <Cringe />
                    <Happy />
                </div>
            </div>
        );
    }
}