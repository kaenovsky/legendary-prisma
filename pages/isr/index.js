import Navbar from '@/components/navbar';
import React from 'react';
import CardGrid from '@/components/cardgrid';

const Index = ({chars}) => {
    console.log("caracteres:", chars)
    return (
        <div>
            <Navbar />
            <div className="container mx-auto my-8">
                <h1 className="text-3xl font-semibold mb-4">Star Wars Characters (ISR - Incremental Static Regeneration)</h1>
                <p className='text-xl mb-10'>Recomendado para sitios web con contenido estático o semiestático, ya que proporciona un rendimiento superior y una mayor seguridad al generar páginas de antemano.</p>
                <CardGrid cards={chars} />
            </div>
        </div>
    );
}

export async function getStaticProps() { 
    const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json';
    const res = await fetch(url);
    const chars = await res.json();

    return {
        props: { chars },
        revalidate: 10 // 10 segundos de revalidación de página estática. Si la página estática no se actualiza en 10 segundos, se actualiza automáticamente.
    }
}

export default Index;
