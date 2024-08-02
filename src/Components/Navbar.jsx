import { navbar } from "../constant/utils";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setCategory }) => {
  
  const linksChange = (link) =>{
    setCategory(link)
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="badge bg-light text-dark fs-4">NewsInd</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navbar.links.map((links, index)=>(
                 <li key={index} className="nav-item btn">
                <div
                  className="nav-link"
                  onClick={()=> linksChange(links)}>
                  {links[0].toUpperCase() + links.slice(1)}
                </div>
              </li>
              ))}       
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;