import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import NewItems from './Pages/NewItems';
import PuzzlersCorner from './Pages/PuzzlersCorner';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/newitems' element={<NewItems />} />
                <Route path='/puzzlerscorner' element={<PuzzlersCorner />} />
            </Routes>
        </Layout>
    );
}

export default App;