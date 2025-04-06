import { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../models/User';
import { Link } from 'react-router-dom';



const UsersList = () => {

  const [users, setUsers] = useState([]);
  

  useEffect(()=>{
    const getUsers = async()=>{
        try {
          const response = await axios.get('http://localhost:8000/api/users');
          setUsers(response.data.users);
        } catch (error) {
          console.log(error);
        }
    } 
    getUsers();
    
 }, []);


 const handleDlete = async (id: string)=> {
  try {
    const isConfirmed = window.confirm('Are you sure you want to delete this user?');
    if (!isConfirmed) return;
    const response = await axios.delete(`http://localhost:8000/api/users/${id}`);
    setUsers(users.filter((user: User) => user._id !== id));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
 }
 
  return (
    <div className="container mt-5">

     <table className="table table-striped  table-bordered w-100">
      
        <thead>
          <tr className='table-row text-center'>
          
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user._id} className='table-row  table-hover text-center align-middle '>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
            <td className='d-flex justify-content-center'>
              <button className='btn btn-outline-info mx-2 btn-lg' ><i className="bi bi-info-circle-fill "></i> </button>
           <Link  to={`/register/${user._id}`} className='btn btn-outline-warning mx-2 btn-lg'><i className="bi bi-pencil-square"></i></Link>
              <button className='btn btn-outline-danger mx-2 btn-lg' onClick={()=>handleDlete(user._id)}><i className="bi bi-trash3"></i></button>
            </td>  
            </tr>
          ))}
        </tbody>
      </table>   
    </div>
  );
};

export default UsersList;