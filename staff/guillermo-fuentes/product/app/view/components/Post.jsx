import { logic } from '../../logic';

export const Post = ({ post, onPostDeleted }) => {
  const handleDeleteClick = () => {
    if (confirm('Delete post?'))
      try {
        logic.deletePost(post.id);

        onPostDeleted();
      } catch (error) {
        alert(error.message);
      }
  };

  return (
    <>
      <article className=" rounded grid gap-2 mt-2 justify-center" key={post.id}>
        <h3 className="border rounded  mt-2 text-center bg-orange-400 font-bold ">{post.author}</h3>
        <img src={post.image} />
        <div className="border rounded text-center bg-sky-300">
          <p>{post.text}</p>
          <time>{post.date}</time>
        </div>

        {post.own && (
          <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>
            🗑️
          </button>
        )}
      </article>
    </>
  );
};
