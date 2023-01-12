import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Input from "../InputFields/Input";
import "./MakePost.css";

const MakePost = (props) => {
  const { setOpenPost } = props;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("Add a title");
  const [description, setDescription] = useState("Add some description");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: description,
      tag: selectedIndex,
    };
    dispatch(createPost(newPost))
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={description}
        inputType="textarea"
        setData={setDescription}
        label="Description"
        classStyle="makepost-desc"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`${
                selectedIndex === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
