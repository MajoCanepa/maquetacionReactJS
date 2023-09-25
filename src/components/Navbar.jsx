
import '../../public/navbar.css'

export const Navbar = () => {
    return (
      <nav className="navbar  navbar-ligth">
        <div className="container">
          <a className="navbar-brand text-light d-flex align-items-center" href="/">
            <img src="../../public/muni2.jpeg" alt="" className="logo-navbar" />
            <span className="mx-4">Municipalidad Formosa</span>
          </a>
        </div>
      </nav>
    )
  }
  
// navbar-expand-lg bg-secondary
// text-dark