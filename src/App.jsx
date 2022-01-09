import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap'

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
            <Card key={post.id}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
          )
        })
      }

    </div>
  )
}
