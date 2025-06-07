import { logic } from '../../logic';
import { useState } from 'react';

export const Post = ({ post, onPostDeleted, onPostEdited }) => {
  const [editMode, setEditMode] = useState(false);

  const handleDeleteClick = () => {
    if (confirm('Delete post?'))
      try {
        logic
          .deletePost(post.id)
          .then(() => {
            console.log('post deleted');
            onPostDeleted();
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
  };

  const handleChangeEditViewClick = () => {
    setEditMode(!editMode);
  };

  const handleEditedClick = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const text = form.text.value;

    try {
      logic.editPost(post.id, text, image);
      form.reset();

      onPostEdited();
      setEditMode(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <article className=" rounded grid gap-2 mt-2 justify-center" key={post.id}>
        <h3 className="border rounded  mt-2 text-center bg-orange-400 font-bold ">{post.author.username}</h3>
        <img src={post.image} />
        {editMode ? (
          <form action="" className="flex flex-col " onSubmit={handleEditedClick}>
            <div className="flex flex-col ">
              <label htmlFor="image">Image </label>
              <input type="text" name="image" id="image" placeholder={post.image} className=" border-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">Text </label>
              <input type="text" name="text" id="text" placeholder={post.text} className="border-2" />
            </div>
            <button className="border-4 border-black px-2 mx-1 cursor-pointer">Confirmar edición</button>
          </form>
        ) : (
          <div className="border rounded text-center bg-sky-300">
            <p>{post.text}</p>
            <time>{post.date}</time>
          </div>
        )}

        {post.own && (
          <div>
            {editMode ? (
              <div>
                <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleChangeEditViewClick}>
                  Cancelar edición
                </button>
              </div>
            ) : (
              <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleChangeEditViewClick}>
                Editar
              </button>
            )}
            <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>
              🗑️
            </button>
          </div>
        )}
      </article>
    </>
  );
};
