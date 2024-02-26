import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "The title 1",
        body: "The body 1"
      },
      {
        id: 2,
        title: "The title 2",
        body: "The body 2"
      },
      {
        id: 13,
        title: "The title 3",
        body: "The body 3"
      },
    ]
  }

  render() {
    const { posts } = this.state

    return (
      <>
        <div className="App">
          {posts.map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default App;
