import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import User from "../models/User";

const RegisterForm = () => {

  const {id} =  useParams();
  const [user, setUser] = useState<User>();

  useEffect(()=>{
    if(id){
      console.log(id);
      const getUser = async()=>{
        const response =  await axios.get(`http://localhost:8000/api/users/${id}`);
        setUser(response.data.user);
        console.log(response.data.user);
      }      
     getUser();
    }

  }, [id]);


  return (
    <div className="container mt-5 w-50">
      <h2 className="text-center">{id ? "Updating User" : "New User"}</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control form-control-lg" value={user?.firstName}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control form-control-lg"  value={user?.lastName}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control form-control-lg" value={user?.email}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control form-control-lg" value={user?.phoneNumber} />
        </div>
        <div className="mb-3">
          <label className="form-label">Adress</label>
          <input type="text" className="form-control form-control-lg" value={user?.address} />
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-50 block ">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
