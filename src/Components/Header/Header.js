import "./Header.css";
import headerImage from "../assets/book.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${bookImage})`
  };

  return (
    <header className="Header" style={style}>
      <h1>The most fresh coffee beans</h1>
      <p>This is an internet shop</p>
    </header>
  );
}

export default Header;
