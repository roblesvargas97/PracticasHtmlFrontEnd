import React from 'react';

const OrderForm = () => {
    return (
        <section className='w-full space-y-10 min-h-[85vh] flex flex-col items-center justify-start'>
            <h1 className='w-full h-auto px-10 text-5xl font-black text-center text-primary'>Introduce tu informacion de contacto</h1>

            <form className='s space-y-10' action="#">
                <div className='flex flex-col'>
                    <label className='text-2xl font-black text-primary' htmlFor="nombre">Nombre</label>
                    <input className='text-2xl font-normal border-2 rounded-full focus:border-green-600 py-1 px-2' type="text" id='nombre' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-2xl font-black text-primary' htmlFor="telefono">Telefono</label>
                    <input className='text-2xl font-normal border-2 rounded-full focus:border-green-600 py-1 px-2' type="number" id='telefono' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-2xl font-black text-primary' htmlFor="email">Correo Electronico</label>
                    <input className='text-2xl font-normal border-2 rounded-full focus:border-green-600 py-1 px-2' type="text" id='email' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-2xl font-black text-primary' htmlFor="colonia">Colonia</label>
                    <input className='text-2xl font-normal border-2 rounded-full focus:border-green-600 py-1 px-2' type="text" id='colonia' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-2xl font-black text-primary' htmlFor="calle">Calle</label>
                    <input className='text-2xl font-normal border-2 rounded-full focus:border-green-600 py-1 px-2' type="text" id='calle' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-2xl font-black text-primary' htmlFor="referencias">Referencias</label>
                    <input className='text-2xl font-normal border-2 rounded-full focus:border-green-600 py-1 px-2' type="text" id='referencias' />
                </div>
                <input className='h-14 w-[90%] px-10 mx-auto bg-secondary text-white text-3xl font-bold rounded-full flex items-center justify-center cursor-pointer animate-bounce shadow-md hover:shadow-xl' type="submit"  />    
            </form>


        </section>
    );
}

export default OrderForm;