// import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({book}) => {
    // const data = use(bookPromise);
    // console.log(data)
const {bookName,image,publisher,rating,bookId,category,tags,yearOfPublishing} = book

    console.log(book)
    return (
       <Link to={`/bookDetails/${bookId}`}>
            <div className="shadow mt-4 p-6 border mx-auto card bg-base-100 w-96 shadow-sm">
  <figure className="p-4 bg-slate-100 w-2/3 mx-auto">
    <img className=" h-[166px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex gap-8 justify-center">
        {
            tags.map(tag=><button className="">{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by : {publisher}</p>
    <div className="border border-dashed"></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaRegStarHalfStroke /></div>
    </div>
  </div>
       </div>      
       </Link>
    );
};

export default Book;