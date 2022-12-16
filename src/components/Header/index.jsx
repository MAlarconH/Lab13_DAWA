import "./header.css"

const Header = () => {
    return (
      <header>
        <div className="logo"> 
            <h1> Miguel Alarcón </h1>
        </div>
        <nav>
          <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/about">Projects</a> </li>
            <li> <a href="/about">About</a> </li> 
            <li> <a href="/about">Contact</a> </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header