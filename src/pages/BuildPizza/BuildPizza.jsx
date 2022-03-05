import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbUpIcon } from '@heroicons/react/solid';

const BuildPizza = () => {
    return (
        <section  className='w-full space-y-10 min-h-[80vh] flex flex-col items-center justify-start min-w-[320px]'>
            <h1 className='w-full h-auto px-10 text-5xl font-black text-center text-primary'>Construye tu pizza</h1>
            <select className='w-[90%] px-10 bg-primary text-2xl font-black rounded-full p-2 text-white focus:text-white focus:bg-green-500 focus:border-red-500 border-4 border-none focus:border-4 focus:outline-none cursor-pointer md:w-[50%] '>
                <option value="">Tamaño</option>
                <option value="mediana">Mediana</option>
                <option value="grande">Grande</option>
                <option value="familiar">Familiar</option>
            </select>
            <select className='w-[90%] px-10 bg-primary text-2xl font-black rounded-full p-2 text-white focus:text-white focus:bg-green-500 focus:border-red-500 border-4 border-none focus:border-4 focus:outline-none cursor-pointer md:w-[50%] '>
                <option value="">Tipo de salsa</option>
                <option value="mediana">Salsa de Jitomate</option>
                <option value="grande">Frijoles</option>
            </select>
            <div className='w-full space-y-10 flex flex-col items-center'>
                <h2 className='text-center text-3xl text-primary font-black'>Ingredientes</h2>
                <div className='w-[90%] space-x-3 flex justify-between flex-wrap'>
                    <div>
                        <input type="checkbox" id="Piña" value="Piña"/> 
                        <label className='ml-3 text-2xl font-bold text-primary' htmlFor="Piña">Piña</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Jamon" value="Jamon"/> 
                        <label className='ml-3 text-2xl font-bold text-primary' htmlFor="Jamon">Jamon</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Peperonni" value="Peperonni"/> 
                        <label className='ml-3 text-2xl font-bold text-primary' htmlFor="Peperonni">Peperonni</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Salami" value="Salami"/> 
                        <label className='ml-3 text-2xl font-bold text-primary' htmlFor="Salami">Salami</label>
                    </div>
                    <div>
                        <input type="checkbox" id="4 quesos" value="4 quesos"/> 
                        <label className='ml-3 text-2xl font-bold text-primary' htmlFor="4 quesos">4 quesos</label>
                    </div>
                </div>
            </div>
            <img className='w-40 md:w-96' src="https://i.imgur.com/f2rhzVx.png" alt="pizza"/>
            <Link 
                    className='h-14 w-[90%] px-10 mx-auto bg-secondary text-white text-3xl font-bold rounded-full flex items-center justify-center cursor-pointer animate-bounce shadow-md hover:shadow-xl'
                    to="/client/build-pizza/order/form-client">
                    Ordenar 
                    <ThumbUpIcon className='w-10'/>
            </Link>
        </section>
    );
}

export default BuildPizza;