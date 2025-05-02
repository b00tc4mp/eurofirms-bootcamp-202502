import { logic } from '../../logic';
import { useEffect, useState } from 'react';
export const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  console.log('useState');
  console.log(posts);
  console.log('ID Post desde post' + props.postId);
  //useEffect siempre  se ejecuta al menos 1 vez cuando carga el componente y tambien se ejecutara cuando hay un cambio
  //dentro del array

  useEffect(() => {
    try {
      const posts = logic.getPosts();
      setPosts(posts);
      console.log('useEffect');
      console.log(posts);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  const handlePostDeleted = () => {
    try {
      const posts = logic.getPosts();

      setPosts(posts);
    } catch (error) {
      alert(error.message);
    }
  };

  console.log('Posts->render');

  return (
    <>
      {posts.map((post) => {
        const handleDeleteClick = () => {
          if (confirm('Delete post?'))
            try {
              logic.deletePost(post.id);

              handlePostDeleted();
            } catch (error) {
              alert(error.message);
            }
        };

        return (
          <article className=" rounded grid gap-2 mt-2 justify-center" key={post.id}>
            <h3 className="border rounded  mt-2 text-center bg-orange-400 font-bold ">{post.author}</h3>
            <img src={post.image} />
            <div className="border rounded text-center bg-sky-300">
              <p>{post.text}</p>
              <time>{post.date}</time>
            </div>

            <button className="bg-amber-200 rounded-2xl font-bold" onClick={() => props.onPostEdited(post.id)}>
              {' '}
              Boton Editar
            </button>
            {post.own && (
              <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>
                🗑️
              </button>
            )}
          </article>
        );
      })}
    </>
  );
};
