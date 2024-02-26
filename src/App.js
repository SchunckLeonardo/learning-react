import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [

    ]
  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const imagesResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, images] = await Promise.all([postsResponse, imagesResponse])
    const postsJson = await posts.json()
    const imagesJson = await images.json()

    const postsAndImages = postsJson.map((post, index) => {
      return { ...post, cover: imagesJson[index].url}
    })

    this.setState({ posts: postsAndImages })

  }

  render() {
    const { posts, counter } = this.state

    return (
      <>
        <section className='container'>
          <div className="posts">
            {posts.map(post => (
              <div className='post' key={post.id}>
                <img src={post.cover} alt={post.title} />
                <div className='post-content'>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    )
  }
}

export default App;
