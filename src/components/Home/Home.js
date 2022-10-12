import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/top-section.jpg'
import './Home.css'
import SpotTests from '../SpotTests/SpotTests'

const Home = () => {
    return (
        <div>
            <div className='home-container lg:flex items-center justify-items-center'>
                <img src={ img } alt="" />
                <div>
                    <h2 className='md:text-6xl font-bold'>Want to Judge Your Programming Knowladge?</h2>
                    <Link to='/tests'><button type="button" className=" w-1/4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mb-2 lg:mt-4">Start Practice</button></Link>
                </div>
            </div>
            <SpotTests></SpotTests>
        </div>
    );
};

export default Home;