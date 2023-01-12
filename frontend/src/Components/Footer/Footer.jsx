import "./Footer.css";

const Footer = (props) => {
  const { isOpenPost, setOpenPost } = props;
  return (
    <footer onClick={() => setOpenPost(!isOpenPost)}>
      <div className="footer-title">
        {isOpenPost ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
