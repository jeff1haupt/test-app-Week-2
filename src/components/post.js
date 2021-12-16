import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
            count: 0
        };
    }
    render() {
        // setTimeout( () => this.setState(state => ({count: state.count + 1}), () => console.log(this.state.count)), 1000);
        // let tempComments = this.state.comments;
        // setTimeout(() => this.setState({content: 'state updated', comments:[]}, 
        //     () => setTimeout(() => this.setState({comments: tempComments}), 2000)), 2000);
        let comments;
        if (this.state.comments) {
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);
        }
        return(
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time 
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    {comments}
                </div>
            </div>
        );
    }
}