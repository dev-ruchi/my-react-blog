import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        setPosts(response.data);
      })
  }, [])

  return (
    <div className="mt-10">
      {
        posts.map(post => {
          return (
            <div key={post.id} className="flex-item-center">
              <h2 className="font-bold">{post.title}</h2>
              <div>{post.body}</div>
            </div>
          )
        })
      }

    </div>
  )
}
