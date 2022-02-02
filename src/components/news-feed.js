import { render } from "@testing-library/react";
import React from "react";
import Post from "./post";

function NewsFeed() {
    let comments = [
        { content: "This is my post using functional components", 
          username: "Jeff", 
          date: "January 31, 2022" },
        { content: "Here is another post from the functional NewsFeed", username: "Isiah", date: "February 1, 2022"},
        { content: "Here's the final post from the NewsFeed functional component", username: "Lisa", date: "February 2, 2022"}
    ];

    return (
        <div className="container">
            <Post {...{comments: comments, content: "This is my post content inside the functional component", username: "Jeff"}} />
            <Post {...{content: 'Here is another post!!!', username: "Myles"}} />
            <Post />
        </div>
    )
}

export default NewsFeed

// export default class NewsFeed extends React.Component {
//     render() {
//         let comments = [{
//             content: 'This is my post',
//             username: 'Tommy',
//             date: '12-12-2018'
//         },
//         {
//             content: 'This is my post',
//             username: 'Sammy',
//             date: '12-17-2018'
//         },
//         {
//             content: `Here's a post from me`,
//             username: 'Sally',
//             date: '12-19-2018'
//         }];
//         return (
//             <div className="container">
//                 <Post {...{comments: comments, content: "This is my post content"}} />
//                 <Post {...{content: 'Here is another post!!!'}} />
//                 <Post />
//             </div>
//         )
//     }
// }