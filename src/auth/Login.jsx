import { Link } from "react-router-dom";
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/signin', {
                userEmail: data.userEmail,
                userPassword: data.userPassword,
                userName: data.userName,
            });

            if (response.status === 200) {
                navigate('/');
            } else {
                alert('Erreur de connexion');
            }
        } catch (error) {
            console.error('Erreur de connexion', error);
            alert('Erreur de connexion');
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Daily-health
                    </h1>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                        Sign in to your account
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your email</label>
                            <input
                                {...register('userEmail', { required: 'Email est requis' })}
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
                                placeholder="name@company.com"
                            />
                            {errors.userEmail && <span className="text-red-500">{errors.userEmail.message}</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                            <input
                                {...register('userPassword', { required: 'Mot de passe est requis' })}
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
                            />
                            {errors.userPassword && <span className="text-red-500">{errors.userPassword.message}</span>}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Login
                        </button>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                            Don’t have an account yet? <Link to={'/auth/register'} className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
