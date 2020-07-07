import React, { useState } from "react";
import "./index.css";

import { startLoginEmailPassword } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "eduardo@correo.com",
    password: "123456",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("procesar el logeo");
    dispatch(startLoginEmailPassword(formValues.email, formValues.password));
  };

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Iniciar sesión</h3>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Correo</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Iniciar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
