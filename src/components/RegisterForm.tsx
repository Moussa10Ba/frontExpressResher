import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import User from "../models/User";

const RegisterForm = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (id) {
      console.log(id);
      const getUser = async () => {
        const response = await axios.get(
          `http://localhost:8000/api/users/${id}`
        );
        setUser(response.data.user);
      };
      getUser();
    }
  }, [id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (id) {
        const res = await axios.put(`http://localhost:8000/api/users/${id}`, user);
        if(res.status == 200){
          window.alert('User Updated SuccesFully');
        }
        window.alert('Oups something went Wrong....');
      } else {
        await axios.post(`http://localhost:8000/api/users/`, user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 w-50">
      <h2 className="text-center">{id ? "Updating User" : "New User"}</h2>
      <form onSubmit={ handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            value={user?.firstName}
            onChange={(e) =>
              setUser({
                ...user as User,
                firstName: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            value={user?.lastName}
            onChange={(e) => {
              setUser({
                ... user as User,
                lastName: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control form-control-lg"
            value={user?.email}
            onChange={(e) =>
              setUser({
                ...user as User,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control form-control-lg"
            value={user?.phoneNumber}
            onChange={(e) =>
              setUser({
                ...user as User,
                phoneNumber: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adress</label>
          <input
            type="text"
            className="form-control form-control-lg"
            value={user?.address}
            onChange={(e) =>
              setUser({
                ...user,
                address: e.target.value,
              })
            }
          />
        </div>
        {id ? (
          <button type="submit" className="btn btn-primary btn-lg w-50 block ">
            Save changes
          </button>
        ) : (
          <button type="submit" className="btn btn-primary btn-lg w-50 block ">
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
