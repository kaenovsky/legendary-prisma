import Navbar from '@/components/navbar';
import React from 'react';
import CardGrid from '@/components/cardgrid';

const Index = ({chars}) => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold mb-4">Star Wars Characters (SSR)</h1>
            <p className='text-xl mb-10'>Útil para páginas con contenido dinámico que cambia frecuentemente o cuando se requiere acceso a la lógica del servidor en cada solicitud.</p>
                <CardGrid cards={chars} />
            </div>
        </div>
    );
}

export async function getServerSideProps() { 
    const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json';
    const res = await fetch(url);
    const chars = await res.json();

    return {
        props: { chars }
    }
}

export default Index;
