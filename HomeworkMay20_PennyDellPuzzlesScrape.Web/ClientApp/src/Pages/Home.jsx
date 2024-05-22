import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('/api/pennydellpuzzles/products');
            setIsLoading(false);
            setProducts(data);
        }
        getProducts();
    }, []);
    if (isLoading) {
        return (
            <div className='container' style={{ marginTop: 200 }}>
                <div className='text-center'>
                    <img src='/src/pages/loadingimage/Bean Eater@1x-1.0s-200px-200px.gif' />
                    <h3>Loading....</h3>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='container' style={{ marginTop: 100 }}>
                <div className='text-center'>
                    <h1>Penny Dell Puzzle Product Categories</h1>
                </div>
            </div>
            <div className='container' style={{ display: 'inline-flex' }}>
                <div className='col-md-2' style={{ marginTop: 80 }}>
                    {products.map(p =>
                        <a key={p.name} href={p.url} target='_blank'><button className='btn btn-outline-dark col-md-2 w-100 mb-4 ms-3 mt-3'>{p.name}</button></a>
                    )}
                </div>
                <div className='col-md-8 offset-md-1' style={{ marginTop: 80 }}>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        {products.map(p =>
                            <div key={p.name} className="card ms-2" style={{ display: 'inline-flex', width: '12rem' }} >
                                <img src={p.imageUrl} className="card-img-top object-fit-sm-contain" alt={p.name} />
                                <div className="card-body">
                                    <p className="card-text">
                                        <a key={p.name} href={p.url} target='_blank'><button className='btn btn-info w-100'>{p.name}</button></a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;