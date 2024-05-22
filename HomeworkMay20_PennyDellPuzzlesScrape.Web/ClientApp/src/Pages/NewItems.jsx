import { useEffect, useState } from "react";
import axios from 'axios';

const NewItems = () => {

    const [newItems, setNewItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getNewItems = async () => {
            const { data } = await axios.get('/api/pennydellpuzzles/newitems');
            setIsLoading(false);
            setNewItems(data);
        }
        getNewItems();
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
                    <h1><b>New Items</b></h1>
                </div>
            </div>
            <div className='col-md-12' style={{ marginTop: 80 }}>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {newItems.map(i =>
                        <div key={i.name} className="card ms-2" style={{ display: 'inline-flex', width: '20rem' }} >
                            <img src={i.imageUrl} className="card-img-top object-fit-sm-contain" alt={i.name} style={{maxHeight: 425} } />
                            <h5 className='mt-2'>{i.price}</h5>
                            <div className="card-body">
                                <p className="card-text" style={{marginBottom: '50px'} }>
                                    <a key={i.name} href={i.url} target='_blank'><button className='btn btn-secondary w-75 mb-2' style={{ position: 'absolute', bottom: 0 }}>{i.name.slice(0, i.name.length > 45 ? 45 : i.name.length)}{i.name.length > 45 ? '...' : ''}</button></a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default NewItems;