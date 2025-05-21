import { logic } from '../../logic';
export const CreatePost = (props) => {
  const onCancelClicked = props.onCancelClicked;
  const onPostCreated = props.onPostCreated;
  const handleCancelClick = () => onCancelClicked();
  const handleCreatePostSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const text = form.text.value;
    console.log(image, text);
    try {
      logic
        .createPost(image, text)
        .then(() => {
          form.reset();

          onPostCreated();
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <>
      <div>
        <i>Logo</i>
        <h1 className="text-3xl text-center">Create Post</h1>
        <form className="flex flex-col gap-2 " onSubmit={handleCreatePostSubmit}>
          <div className="flex flex-col ">
            <label htmlFor="image">Image </label>
            <input type="text" name="image" id="image" placeholder=" your image" className=" border-2" />
          </div>
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
