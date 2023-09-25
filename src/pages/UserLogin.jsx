import { useState } from "react";
export const  UserLogin = () => {
  const [formData, setFormData] = useState({
    user: "",
    pass: "",
  });
  const handleInputChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value });
  }
    return (
      <main className="container d-flex justify-content-center align-items-center">
        <form
          action="/login"
          id="formLogin"
          className="text-center bg-light border rounded-4 text-dark p-5 shadow w-50 d-flex flex-column align-items-center" href="login"
        >
          <h1>Login</h1>
          <br />
          <div className="d-flex flex-column align-items-center">
            <div className="mb-3 d-flex justify-content-start align-items-center">
              <label htmlFor="user" className="form-label me-2">
                Username:
              </label>
              <input
                className="form-control form-control-sm d-flex justify-content-center align-items-center rounded-4 text-dark"
                type="text"
                name="user"
                id="usuario"
                required=""
                value={formData.user}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 d-flex justify-content-start align-items-center">
              <label htmlFor="password" className="form-label me-2">
                Password:
              </label>
              <input
                className="form-control form-control-sm d-flex justify-content-center align-items-center rounded-4 text-dark "
                type="password"
                name="pass"
                id="password"
                required=""
                value={formData.pass}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-secondary me-3 mb-3 d-flex justify-content-center align-items-center w-50 rounded-4 text-light shadow"
          >
            Login
          </button>
        </form>
      </main>
    );
  };
  