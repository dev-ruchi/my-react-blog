import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function App() {

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        setPosts(response.data);
      })
  }, [])


  function getNewId() {
    return posts.at(-1).id + 1;
  }


  function addPost(e) {
    e.preventDefault();
    setPosts([{ userId: 1, id: getNewId(), title: postTitle, body: postBody }, ...posts]);
  }


  return (
    <div className="mt-10">

      <h3>Add new post</h3>

      {/* Post form start */}
      <Form onSubmit={addPost}>
        <Form.Group className="mb-3" controlId="post-title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={postTitle} onChange={(e) => { setPostTitle(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="post-body">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={3} value={postBody} onChange={(e) => { setPostBody(e.target.value) }} />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>{' '}
      </Form>

      {/* Post form end */}

      <h3 className="mt-5">Recent posts</h3>


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
