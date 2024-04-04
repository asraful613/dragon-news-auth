import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Result } from "postcss";

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const form=new FormData (e.currentTarget);
        const name=form.get('name')
        const photo=form.get('photo')
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password,name,photo);
        createUser(email,password)
        .then(result=>{
          console.log(result.user);
        })
        .catch(error=>{
          console.log(error);
        })
    }
    return (
        <div>
            
            <Navbar></Navbar>
           <div>
           <h2 className="text-3xl my-10 text-center font-semibold">Please Register</h2>
            <form onSubmit={handleRegister} className="shadow-xl lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">Already have an account <Link className="text-blue-600 font-bold" to={"/login"}>login</Link></p>
           </div>
        </div>
    );
};

export default Register;