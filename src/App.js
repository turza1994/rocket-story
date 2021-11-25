import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchAsyncRockets } from './features/rockets/rocketSlice';

function App() {
    const dispatch = useDispatch();
    const rockets = useSelector((state) => state.rockets.rockets);
    console.log(rockets);

    useEffect(() => {
        dispatch(fetchAsyncRockets());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Rocket Story</h1>
        </div>
    );
}

export default App;
