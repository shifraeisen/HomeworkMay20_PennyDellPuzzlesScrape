import { useEffect, useState } from "react";
import axios from 'axios';

const PuzzlersCorner = () => {

    const [puzzles, setPuzzles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPuzzles = async () => {
            const { data } = await axios.get('/api/pennydellpuzzles/puzzlerscorner');
            setPuzzles(data);
            setIsLoading(false);
            console.log(data);
        }
        getPuzzles();
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
            <div className='container' style={{ marginTop: 80 }}>
                <div className='text-center'>
                    <h1><b>Puzzler's Corner</b></h1>
                </div>
            </div>
            <div style={{ marginTop: 150 }}>
                <a href={puzzles[0].url} target='_blank'><div className='col-md-2 offset-md-3' style={{ display: 'inline-flex' }}>
                    <button className='btn btn-lg btn-outline-warning w-100'>{puzzles[0].title.slice(0, 18)}...</button>
                </div></a>
                <a href={puzzles[1].url} target='_blank'><div className='col-md-2' style={{ display: 'inline-flex' }}>
                    <button className='btn btn-lg btn-outline-danger w-100'>{puzzles[1].title}</button>
                </div></a>
                <a href={puzzles[2].url} target='_blank'><div className='col-md-2' style={{ display: 'inline-flex' }}>
                    <button className='btn btn-lg btn-outline-dark w-100'>{puzzles[2].title}</button>
                </div></a>
            </div>
            <a href={puzzles[3].url} target='_blank'><div className='col-md-2 offset-md-4 mt-5' style={{ display: 'inline-flex' }}>
                <button className='btn btn-lg btn-outline-secondary w-100'>{puzzles[3].title}</button>
            </div></a>
            <a href={puzzles[4].url} target='_blank'><div className='col-md-2' style={{ display: 'inline-flex' }}>
                <button className='btn btn-lg btn-outline-info w-100'>{puzzles[4].title}</button>
            </div></a>
        </>
    )
}
export default PuzzlersCorner;