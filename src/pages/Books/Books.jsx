import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks,setAllBooks]=useState([]);
    // useEffect(()=>{
    //     fetch("BookData.json")
    //     .then(res=>res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // },[])

    //  const bookPromise = fetch('./BookData.json').then(res=>res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>hello ami books</h1>
            <Suspense fallback={<span>Loding.......</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                data.map((book)=> <Book key={book.bookId} book={book}></Book>)
            }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;