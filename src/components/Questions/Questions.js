import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question'

const Questions = () => {
    const data = useLoaderData();
    const questions = data.data.questions;
    // console.log(questions)
    return (
        <div className=''>
            {
                questions.map(question => <Question
                    key={ question.id }
                    question={ question }
                ></Question>)
            }
        </div>
    );
};

export default Questions;