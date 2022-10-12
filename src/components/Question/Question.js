import React from 'react';

const Question = (props) => {
    const { question, options } = props.question;
    // console.log(question, options, correctAnswer)
    return (
        <div className='md:w-1/2 mx-auto my-8 md:bg-gray-200 rounded-lg md:px-40 md:py-10'>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">{ question }</h3>
            <div className='grid md:grid-cols-2 md:gap-2'>
                {
                    options.map(option => <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{ option }</label>
                    </div>)
                }

            </div>

        </div>
    );
};

export default Question;