import "../Edit/EditPage.css"
import "../Posts/MakePost.css";


const Input = (props) => {
  const { inputType, classStyle, label, data, setData } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
