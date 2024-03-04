import { Component } from 'react';
import './styles.css';
import { LoadPosts } from '../../utils/load-posts.js';
import { Posts } from '../../components/Posts/index.jsx';
import Button from '../../components/Button/index.jsx';
import { SearchInput } from '../../components/SearchInput/index.jsx';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ""
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

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts

    return (
      <>
        <section className='container'>
          <div className="search-container">

            <SearchInput searchValue={searchValue} handleChange={this.handleChange} />
            {
              filteredPosts.length === 0 && (
                <p className='no-content'>Não existe posts</p>
              )
            }

          </div>
          {
            filteredPosts.length > 0 && <Posts content={filteredPosts} />
          }
          <div className='button-container'>
            {!searchValue && (
              <Button disabled={noMorePosts} event={this.loadMorePosts} text="Load more posts" />
            )}
          </div>
        </section>
      </>
    )
  }
}

export default Home;
