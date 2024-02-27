import { PostCard } from '../PostCard';
import "./styles.css"

export const Posts = (props) => {
    const {content} = props

    return (
        <div className="posts">
            {content.map(post => (
                <PostCard key={post.id} infos={post} />
            ))}
        </div>
    )
}