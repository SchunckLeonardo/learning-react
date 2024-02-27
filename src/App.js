import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';

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
    const { posts } = this.state

    return (
      <>
        <section className='container'>
          <div className="posts">
            {posts.map(post => (
              <PostCard key={post.id} infos={post} />
            ))}
          </div>
        </section>
      </>
    )
  }
}

export default App;
