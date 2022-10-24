import React, { useEffect, useState } from 'react';
import SpotTest from '../SpotTest/SpotTest'

const SpotTests = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        fetch("https://spot-test-server.vercel.app/quiz")
            .then(res => res.json())
            .then(data => setTopics(data.data));
    }, [])
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-1 md:gap-2 md:mx-24 md:mt-20'>
            {
                topics.map(topic => <SpotTest
                    key={ topic.id }
                    spotTest={ topic }
                ></SpotTest>)
            }
        </div>
    );
};

export default SpotTests;