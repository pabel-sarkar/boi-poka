import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const MySwal = withReactContent(Swal)
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  const handleMarkAsRead = id =>{
      // Store with Id 
      // Where to store
      // array or collection
      // if book already exist the show a alart
      // if book not exist then push in the collection or array

      // MySwal.fire({
      //   title: <p>Hello World</p>,
      //   didOpen: () => {
      //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
      //     MySwal.showLoading()
      //   },
      // }).then(() => {
      //   return MySwal.fire(<p>Shorthand works too</p>)
      // })


      toast("Wow so easy!");


      addToStoreDB(id)
  }

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-52" src={image} alt="" />
      <h5>{bookName}</h5>
      <ToastContainer />
      <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-accent m-2">Mark as Read</button>
      <button className="btn btn-info m-2">Add to WishList</button>
    </div>
  );
};

export default BookDetails;
