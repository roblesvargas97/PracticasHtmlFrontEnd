import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { HashLink } from 'react-router-hash-link';

const Client = () => {
    return (
        <section className='w-full h-auto my-3 space-y-10 min-w-[320px]'>
            <div className='w-full space-y-10 min-h-[80vh] flex flex-col items-center justify-center' >
                <h1 className='w-full h-auto px-10 text-5xl font-black text-center text-primary'>!La felicidad en forma de pizza¡</h1>
                <img className='w-full h-[275px]' src="https://i.imgur.com/yOQJCss.png " alt="banner"/>
                <HashLink 
                    className='h-14 w-[80%] px-10 mx-auto bg-secondary text-white text-3xl font-bold rounded-full flex items-center justify-between cursor-pointer animate-bounce shadow-md hover:shadow-xl' 
                    smooth
                    to='/client/#menu'
                >
                        Ver Menu <ChevronDownIcon className='w-10'/>  
                    </HashLink>
            </div>
            <div id='menu' className='w-full h-auto flex flex-col justify-center items-center space-y-10'>
                <h2 className='w-full h-auto text-center font-black text-primary text-3xl'>Menu</h2> 
                <div className='w-[80%] bg-primary rounded-2xl shadow-md hover:shadow-xl'>
                    <div className='bg-white rounded-t-2xl border-2 border-red-600'>
                        <h3 className='text-center text-3xl font-black text-primary'>Pizzabrosa</h3>
                    </div>
                    <div>
                        <img src='https://i.imgur.com/J5WcXYz.png' alt='pizzabrosa'/>
                    </div>
                    <div className='bg-white text-center text-primary font-black text-2xl'>
                        <p>Peperonni y 4 quesos.</p>
                    </div>
                    <div className='flex justify-between px-10 py-2'>
                        <select className='w-[45%] bg-secondary text-xl font-black rounded-full p-2 text-white focus:text-gray-700 focus:bg-white focus:border-green-500 border-4 border-none focus:border-4 focus:outline-none cursor-pointer'>
                            <option value='mediana'>Mediana</option>
                            <option value='grande'>Grande</option>
                            <option value='familiar'>Familiar</option>
                        </select>
                        <button className='w-[45%] text-xl bg-blue-500 rounded-full font-black text-white'>
                            Comprar 
                        </button>
                    </div>
                </div>
                <div className='w-[80%] bg-primary rounded-2xl shadow-md hover:shadow-xl'>
                    <div className='bg-white rounded-t-2xl border-2 border-red-600'>
                        <h3 className='text-center text-3xl font-black text-primary'>PizzaWaiana</h3>
                    </div>
                    <div>
                        <img src='https://i.imgur.com/ErnZ4iP.png' alt='pizza hawaiana'/>
                    </div>
                    <div className='bg-white text-center text-primary font-black text-2xl'>
                        <p>Jamon , piña y queso.</p>
                    </div>
                    <div className='flex justify-between px-10 py-2'>
                        <select className='w-[45%] bg-secondary text-xl font-black rounded-full p-2 text-white focus:text-gray-700 focus:bg-white focus:border-green-500 border-4 border-none focus:border-4 focus:outline-none cursor-pointer'>
                            <option value='mediana'>Mediana</option>
                            <option value='grande'>Grande</option>
                            <option value='familiar'>Familiar</option>
                        </select>
                        <button className='w-[45%] text-xl bg-blue-500 rounded-full font-black text-white'>
                            Comprar 
                        </button>
                    </div>
                </div>
                <div className='w-[80%] bg-primary rounded-2xl shadow-md hover:shadow-xl'>
                    <div className='bg-white rounded-t-2xl border-2 border-red-600'>
                        <h3 className='text-center text-3xl font-black text-primary'>PepePizza</h3>
                    </div>
                    <div>
                        <img src='https://i.imgur.com/0DtP5xK.png' alt='pizza de peperonni'/>
                    </div>
                    <div className='bg-white text-center text-primary font-black text-2xl'>
                        <p>Pepperonni y queso.</p>
                    </div>
                    <div className='flex justify-between px-10 py-2'>
                        <select className='w-[45%] bg-secondary text-xl font-black rounded-full p-2 text-white focus:text-gray-700 focus:bg-white focus:border-green-500 border-4 border-none focus:border-4 focus:outline-none cursor-pointer'>
                            <option value='mediana'>Mediana</option>
                            <option value='grande'>Grande</option>
                            <option value='familiar'>Familiar</option>
                        </select>
                        <button className='w-[45%] text-xl bg-blue-500 rounded-full font-black text-white'>
                            Comprar 
                        </button>
                    </div>
                </div>
                <div className='w-[80%] bg-primary rounded-2xl shadow-md hover:shadow-xl'>
                    <div className='bg-white rounded-t-2xl border-2 border-red-600'>
                        <h3 className='text-center text-3xl font-black text-primary'>CarnesLocas</h3>
                    </div>
                    <div>
                        <img src='https://i.imgur.com/gpg37Ne.png' alt='pizza de peperonni'/>
                    </div>
                    <div className='bg-white text-center text-primary font-black text-2xl'>
                        <p>Pepperonni , jamon y salami.</p>
                    </div>
                    <div className='flex justify-between px-10 py-2'>
                        <select className='w-[45%] bg-secondary text-xl font-black rounded-full p-2 text-white focus:text-gray-700 focus:bg-white focus:border-green-500 border-4 border-none focus:border-4 focus:outline-none cursor-pointer'>
                            <option value='mediana'>Mediana</option>
                            <option value='grande'>Grande</option>
                            <option value='familiar'>Familiar</option>
                        </select>
                        <button className='w-[45%] text-xl bg-blue-500 rounded-full font-black text-white'>
                            Comprar 
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Client;