import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

const Posts = ({ content = [] }) => {
  return (
    <div className="posts">
      {content.map((post) => (
        <PostCard key={post.id} infos={post} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  content: [],
};

Posts.propTypes = {
  content: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};

export default Posts;
