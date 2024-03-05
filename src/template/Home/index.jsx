import { useEffect, useState, useCallback } from 'react';
import './styles.css';
import { LoadPosts } from '../../utils/load-posts.js';
import { Posts } from '../../components/Posts/index.jsx';
import Button from '../../components/Button/index.jsx';
import { SearchInput } from '../../components/SearchInput/index.jsx';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndImages = await LoadPosts();
    setPosts(postsAndImages.slice(page, postsPerPage));
    setAllPosts(postsAndImages);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  return (
    <section className="container">
      <div className="search-container">
        <SearchInput searchValue={searchValue} handleChange={handleChange} />
        {filteredPosts.length === 0 && <p className="no-content">Não existe posts</p>}
      </div>
      {filteredPosts.length > 0 && <Posts content={filteredPosts} />}
      <div className="button-container">
        {!searchValue && <Button disabled={noMorePosts} event={loadMorePosts} text="Load more posts" />}
      </div>
    </section>
  );
};

export default Home;
