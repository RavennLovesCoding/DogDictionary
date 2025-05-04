import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Nav (){
    return (
        <>
   <div>
   <nav className="navbar navbar-expand-lg navigation">
  <a className="navbar-brand" href="#">Dog Dictionary</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="">FAQ</a>
      </li>
      
      
    </ul>
  </div>
</nav>
   </div>
</>
)}

export default Nav