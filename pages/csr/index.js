import React, {useState, useEffect} from 'react';
import Navbar from '@/components/navbar';
import CardGrid from '@/components/cardgrid';

const Index = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json';
        const res = await fetch(url);
        let chars = await res.json();
        //chars.sort((a, b) => a.name.localeCompare(b.name)); // Ordenar por nombre alfabéticamente para que se vea mejor en el grid de cards.
        chars = chars.slice(0,3);
        setChars(chars);
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto my-8">
                <h1 className="text-3xl font-semibold mb-4">Star Wars Characters (CSR)</h1>
                <p className='text-xl mb-10'>Útil para aplicaciones interactivas donde la carga dinámica de datos en el lado del cliente es esencial. Puede ser más adecuado cuando el contenido cambia rápidamente y la latencia inicial no es una preocupación</p>
                <CardGrid cards={chars} />
            </div>
        </div>
    );
}

export default Index;
