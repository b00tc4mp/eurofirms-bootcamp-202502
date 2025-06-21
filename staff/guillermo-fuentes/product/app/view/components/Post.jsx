import { logic } from '../../logic';

import { useContext } from '../../context';

export const Post = ({ post, onPostDeleted }) => {
  const { alert, confirm } = useContext();

  const handleDeleteClick = () => {
    confirm('Delete post?').then((result) => {
      if (result)
        try {
          logic
            .deletePost(post.id)
            .then(() => onPostDeleted())
            .catch((error) => {
              console.error(error);

              alert(error.message);
            });
        } catch (error) {
          console.error(error);

          alert(error.message);
        }
    });
  };

  console.log('Post -> render');

  return (
    <article className="bg-white rounded-2xl shadow-md w-full overflow-hidden border border-gray-200">
      <div className="flex items-center justify-between p-4">
        <h3 className="font-semibold text-gray-800">@{post.author.username}</h3>

        {post.own && (
          <button onClick={handleDeleteClick} className="text-red-500 hover:text-red-700 text-xl" title="Delete post">
            🗑️
          </button>
        )}
      </div>

      <div className="w-full aspect-square bg-gray-100 overflow-hidden">
        <img src={post.image} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-700">{post.text}</p>
        <time className="text-xs text-gray-400 block">{new Date(post.date).toLocaleString()}</time>
      </div>
    </article>
  );
};
