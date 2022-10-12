import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const questions = useLoaderData();
    console.log(questions)
    return (
        <div>
            <h2>This is Questions section.</h2>
        </div>
    );
};

export default Questions;