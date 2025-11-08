import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-blackshadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">CodingSpider</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/online-class">Online Classes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/hire-partners">Hire Partners</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/placement">Placement</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/trainers">Trainers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainNavbar;
