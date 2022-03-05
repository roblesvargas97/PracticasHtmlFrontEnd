import React from 'react';

const Administrator = () => {
    return (
       <section className='w-full space-y-10 min-h-[85vh] flex flex-col items-center justify-start'>
            <h1 className='w-full h-auto px-10 text-5xl font-black text-center text-primary'>!Hola buen dia Admin¡</h1>
            <h2 className='text-3xl font-black text-primary'>Cantidad de Ingredientes</h2>
            <table className='border border-green-500' >
                <tbody>
                    <tr>
                        <th className='border border-white rounded-t-lg text-3xl text-white text-center bg-primary' >Harina:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>3.8 kg</td>
                    </tr>
                    <tr>
                        <th className='border border-white text-3xl text-white text-center bg-primary'>Jamon:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>4.3 kg</td>
                    </tr>
                    <tr>
                        <th className='border border-white text-3xl text-white text-center bg-primary'>Piña:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>23 latas de piñas</td>
                    </tr>
                    <tr>
                        <th className='border border-white text-3xl text-white text-center bg-primary'>Queso:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>5.5 kg</td>
                    </tr>
                    <tr>
                        <th className='border border-white text-3xl text-white text-center bg-primary'>Salami:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>8 kg</td>
                    </tr>
                    <tr>
                        <th className='border border-white text-3xl text-white text-center bg-primary'>Peperonni:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>9 kg</td>
                    </tr>
                    <tr>
                        <th className='border border-white text-3xl text-white text-center bg-primary'>Salsa:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>7 kg</td>
                    </tr>
                    <tr>
                        <th className='border border-white rounded-b-lg text-3xl text-white text-center bg-primary'>Frijoles:</th>
                        <td className='border border-red-500 bg-white text-3xl text-primary text-center'>10 kg</td>
                    </tr>
                </tbody>
            </table>
            <h2 className='text-3xl font-black text-primary'>Pedidos</h2>
            <div className='w-full overflow-x-scroll flex justify-center'>
                <table className='border border-green-500 mb-5'>
                    <thead>
                        <tr>
                            <th className='border border-white bg-primary text-white text-3xl text-left'>Name</th>
                            <th className='border border-white bg-primary text-white text-3xl text-left'>Telefono</th>
                            <th className='border border-white bg-primary text-white text-3xl text-left'>Correo</th>
                            <th className='border border-white bg-primary text-white text-3xl text-left'>Colonia</th>
                            <th className='border border-white bg-primary text-white text-3xl text-left'>Calle</th>
                            <th className='border border-white bg-primary text-white text-3xl text-left'>Referencias</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-red-500 text-3xl text-primary bg-white text-center'>Antonio Perez</td>
                            <td className='border border-red-500 text-3xl text-primary bg-white text-center'>5564685789</td>
                            <td className='border border-red-500 text-3xl text-primary bg-white text-center'>Benito Juarez</td>
                            <td className='border border-red-500 text-3xl text-primary bg-white text-center'>ejem@mail.com</td>
                            <td className='border border-red-500 text-3xl text-primary bg-white text-center'>Patria</td>
                            <td className='border border-red-500 text-3xl text-primary bg-white text-center'>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>

       </section>
        
    );
}

export default Administrator;