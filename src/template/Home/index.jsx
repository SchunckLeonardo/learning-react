import { Component } from 'react';
import './styles.css';
import { LoadPosts } from '../../utils/load-posts.js';
import { Posts } from '../../components/Posts/index.jsx';
import Button from '../../components/Button/index.jsx';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndImages = await LoadPosts()
    this.setState({
      allPosts: postsAndImages,
      posts: postsAndImages.slice(page, postsPerPage)
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    this.setState({ posts, page: nextPage })
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    return (
      <>
        <section className='container'>
          <Posts content={posts} />
          <div className='button-container'>
            <Button disabled={noMorePosts} event={this.loadMorePosts} text="Load more posts" />
          </div>
        </section>
      </>
    )
  }
}

export default Home;
