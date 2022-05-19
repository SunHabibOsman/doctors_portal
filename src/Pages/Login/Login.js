import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../../Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import useToken from '../../hooks/useToken';
const Login = () => {

  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const [email, setEmail] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || guser);
  if (loading || gloading) {
    return <Loading></Loading>;
  }

  if (token) {

    navigate(from, { replace: true });

  }
  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)


  }
  const handleForget = async () => {
    await sendPasswordResetEmail(email);
  }
  let errormessage;
  if (error || gerror) {
    errormessage = (error?.message || gerror?.message)
    toast(errormessage)
  }
  return (
    <div className='mx-auto flex items-center justify-center'>

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl  justify-center font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>

              </label>
              <input type="email"
                onBlur={(e) => setEmail(e.target.value)}
                placeholder="Email Here"
                className="input input input-bordered input-info w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please Enter Valid Email' // JS only: <p>error message</p> TS only support string
                  }
                })} />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt  text-red-500">{errors.email.message}</span>}


              </label>
              <label className="label">
                <span className="label-text">Password</span>
                <span onClick={handleForget} className="label-text-alt"><p>Forget Password !</p></span>

              </label>
              <input type="password"
                placeholder="Password Here"
                className="input input input-bordered input-info w-full max-w-xs"
                {...register("password", {
                  required: {

                    value: true,
                    message: "password is required"
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "1 capital letter 1number "

                  }
                })} />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'pattern' && <span className="label-text-alt  text-red-500">{errors.password.message}</span>}


              </label>
            </div>

            <input type="submit" className='btn btn-primary w-full text-white' value={"Login Now"} />
          </form>
        </div>
        <p>create new account <Link to={'/signup'} className='text-secondary'>SignUp Now</Link></p>
        <div className="divider">OR</div>
        <div className="grid h-20 card rounded-box place-items-center"><button onClick={() => signInWithGoogle()} className='btn btn-secondary text-white w-full'>Sign With Goggle</button></div>
      </div>
    </div>

  );
};

export default Login;