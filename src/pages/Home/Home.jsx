import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
       <section className='w-full h-[85vh] py-5 space-y-10' >
            <h1 className='text-5xl font-black text-center text-primary'>Bienvenido a Ready Pizza</h1>
            <h2 className='text-3xl font-bold text-center text-primary'>Por favor seleccione una vista:</h2>
            <div className='w-full h-[30%] flex space-y-10 flex-col items-center justify-center' >
                <button 
                    onClick={()=> navigate('/client')}
                    className='w-[60%] h-20 bg-secondary text-3xl text-white font-bold rounded-full motion-safe:animate-bounce cursor-pointer'>
                    Vista Cliente
                </button>
                <button 
                    className='w-[60%] h-20 bg-secondary text-3xl text-white font-bold rounded-full motion-safe:animate-bounce cursor-pointer'>
                    Vista Pizzero
                </button>
            </div>
            <h1 className='text-5xl font-black text-center text-primary'>Logo</h1>
       </section>
    );
}

export default Home;