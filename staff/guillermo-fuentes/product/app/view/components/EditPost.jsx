import { logic } from '../../logic';
export const EditPost = ({ onCancelClickedEdited, onPostEdited, postId }) => {
  const handleCancelClick = () => onCancelClickedEdited();
  const handleCreatePostSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    //const image = form.image.value;
    const text = form.text.value;
    console.log('ID en componente ' + props.postId, text);
    try {
      logic.editPost(postId, text);
      form.reset();

      onPostEdited();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div>
        <i>Logo</i>
        <h1 className="text-3xl text-center">Create Post</h1>
        <form className="flex flex-col gap-2 " onSubmit={handleCreatePostSubmit}>
          <div className="flex flex-col">
            <label htmlFor="text">Text </label>
            <input type="text" name="text" id="text" placeholder=" the post text" className="border-2" />
          </div>

          <div className="flex justify-between">
            <a href="#" className="bg-blue-200 text-black rounded-full p-2" onClick={handleCancelClick}>
              Cancel{' '}
            </a>
            <button className="bg-blue-200 text-black rounded-full p-2">Create </button>
          </div>
        </form>
      </div>
    </>
  );
};
