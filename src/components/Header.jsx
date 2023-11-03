import '../assets/styles/Header.css'
import ReactLogo from '../assets/img/react.svg';

const Header = function () {
  return (
    <nav>
      <div>
        <img src={ReactLogo} alt="React Logo" />
        <h1>React Facts</h1>
      </div>
      <h2>React Course - Project 1</h2>
    </nav>
  );
}

export default Header;