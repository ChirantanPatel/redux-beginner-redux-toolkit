import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({})
    const [id, setId] = useState(1);
    const [idFromButtonClick, setidFromButtonClick] = useState(1)

    const handleClick = () => {
        setidFromButtonClick(id)
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log(res);
            setPosts(res.data);
        }).catch(error => {
            console.log(error);
        });

    }, []);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts/" + idFromButtonClick).then(res => {
            console.log(res);
            setPost(res.data);
        }).catch(error => {
            console.log(error);
        });

    }, [idFromButtonClick]);

    return (
        <div>

            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}> Fetch Post </button>
            <div>
                {post.title}
            </div>

            <h2> Detail List : </h2>
            <ul>
                {
                    posts.map(post => <li key={post.id}> {post.title} </li> )
                }
            </ul>
        </div>
    )
}

export default DataFetching
