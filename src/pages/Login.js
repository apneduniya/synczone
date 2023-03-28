import Head from 'next/head';
import React, { Suspense, useState } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Login = () => {

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [formSuccess, setFormSuccess] = useState(false);

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  return (
    <>
      <Head>
        <title>Login | SyncZone</title>
      </Head>
      {loading ?
        <div className="loading-screen">
          <div className="loading-blob-1"></div>
          <div className="loading-blob-2"></div>
        </div>
        :
        ""}
      <div className='login-container'>
        <div className='login-stars'></div>
        <div className='login-stars2'></div>
        <div className='login-stars3'></div>
        <Suspense fallback={<div>Loading...</div>} >
          <Spline scene="https://prod.spline.design/OintksjhtMVDTTSN/scene.splinecode" className='login-spline' onLoad={(e) => { setLoading(false) }} />
        </Suspense>
        <div className='login-form-container'>
          <h3 className='login-heading'>Login</h3>
          <form method="POST" className="login-form">
            <div>
              <label>Email</label>
              <input type="email" name="email" onChange={handleInput} value={formData.email} required placeholder="jhon@example.com" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" name="password" onChange={handleInput} value={formData.password} required placeholder="@jhon123ABC" />
            </div>

            <button
              type="submit"
              className='login-form-submit-button'
            >
              <span className='login-form-submit-button-text-log'>L O G </span><span className='login-form-submit-button-text-in'> I N</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
