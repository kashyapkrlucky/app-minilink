import React, { useContext, useEffect, useState } from 'react';
import Input from "../components/Common/Input";
import Button from "../components/Common/Button";
import { NavLink, useNavigate } from "react-router-dom";
import HttpClient from '../services/httpClient';
import { UserContext } from '../contexts/UserContext';
import { useToast } from '../contexts/ToastContext';
import { useLoading } from '../contexts/LoadingContext';
import { AppName } from "../services/utils";

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { showError } = useToast();
  const { showLoading } = useLoading();
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => {
      return { ...formData, [name]: value }
    })
  }

  const onSubmit = async (e) => {
    showLoading(true);
    e.preventDefault();
    try {
      const { data: { data } } = await HttpClient.post(`/api/users/sign-in`, formData);
      if (data) {
        showLoading(false);
        localStorage.setItem('authToken', data.token);
        const { data: { data: item } } = await HttpClient.get(`/api/users/profile/${data.id}`);
        localStorage.setItem('user', JSON.stringify(item));
        setUser(item);
        navigate('/dashboard');
      }
    } catch (error) {
      showLoading(false);
      const { data: { message } } = error.response;
      showError(message);
    }
  }
  useEffect(() => {
    let auth = localStorage.getItem('authToken');
    if (auth) {
      navigate('/dashboard');
    }
  });

  return (
    <div className='w-full h-screen flex min-h-screen items-center justify-center h-full bg-gray-600 bg-cover bg-center'>
            <div className="lg:w-1/3 w-full px-10 bg-white rounded-md shadow-2xl">
        <header className='py-10'>
          <p className='text-3xl text-center'>{AppName}</p>
        </header>
        <section className='flex-1 flex flex-col gap-1 py-10'>
          <div className='flex flex-col gap-1'>
            <h2 className="text-2xl font-bold">Sign In</h2>
            <p className="text-sm leading-6 tracking-wide">
              New to NetWorkIn? <NavLink to={'/sign-up'} className={'px-1 text-gray-800'}>Join Now</NavLink>
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10" method="POST">
            <Input label="Email Address" type="email" name="email" onChange={onChange} required />
            <Input label="Password" type="password" name="password" onChange={onChange} required />
            <Button classes="mt-8 bg-gray-600 hover:bg-gray-800 focus-visible:outline-gray-600" label="Sign In"></Button>
          </form>
        </section>

        <footer className='flex flex-row justify-center py-8 text-xs'>
          <span>{AppName} &copy; 2024</span>
        </footer>
      </div>
    </div>
  )
}

export default SignIn

