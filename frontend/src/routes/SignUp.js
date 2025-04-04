import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import HttpClient from '../services/httpClient';
import { UserContext } from '../contexts/UserContext';
import { useLoading } from '../contexts/LoadingContext';
import { AppName } from "../services/utils";
import AppButton from '../components/Common/AppButton';
import AppInput from '../components/Common/AppInput';

function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    // const { showError } = useToast();
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
        const payload = {
            ...formData,
            firstName: formData.fullName.split(' ')[0],
            lastName: formData.fullName.split(' ')[1]
        }
        try {
            const { data: { data } } = await HttpClient.post(`/api/users/create`, payload);
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
            console.log(error);

            // const { data: { message } } = error.response;
            // showError(message);
        }
    }

    return (
        <div className='w-full h-screen flex min-h-screen items-center justify-center h-full bg-gray-600 bg-cover bg-center'>
            <div className="lg:w-1/3 w-full px-10 bg-white rounded-md shadow-2xl">
                <header className='py-10'>
                    <p className='text-3xl text-center'>{AppName}</p>
                </header>
                <section className='flex-1 flex flex-col gap-1 py-6'>
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-2xl font-bold">Create an account</h2>
                        <p className="text-sm leading-6 tracking-wide">
                            Already have an account? <NavLink to={'/sign-in'} className={'px-1 text-gray-800'}>Sign In</NavLink>
                        </p>
                    </div>
                    <form onSubmit={onSubmit} className="flex flex-col gap-4 my-10" method="POST">
                        <AppInput label="Full Name" placeholder='please enter full name' type="text" name="fullName" onChange={onChange} required />
                        <AppInput label="Email Address" placeholder='please enter email'type="email" name="email" onChange={onChange} required />
                        <AppInput label="Password" type="password" placeholder='please enter password'name="password" onChange={onChange} required />
                        <AppButton classes="mt-8 bg-gray-600 hover:bg-gray-800 focus-visible:outline-gray-600">Submit</AppButton>
                    </form>
                </section>

                <footer className='flex flex-row justify-center py-8 text-xs'>
                    <span>{AppName} &copy; 2024</span>
                </footer>
            </div>
        </div>
    )
}

export default SignUp