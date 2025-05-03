
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
    // worst case
    const [sort,setSort] = useState("")
    const [readList,setReadList] = useState([])
    const data = useLoaderData()
    // console.log(data)
useEffect(()=>{
    const  storeBookData = getStoreBook();
    const conVertedStoredBooks = storeBookData.map(id=>parseInt(id));
    const myReadList = data.filter(book => conVertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
},[])

 const handleSort = (type)=>{
    setSort(type)
    if(type === "pages"){
        const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
       setReadList(sortedByPage)
       console.log(sortedByPage)
    }
    if(type === "retings"){
     const sortedByReting = [...readList.sort((a,b)=>a.rating - b.rating)]
     setReadList(sortedByReting)
    }
 }
   
  return (
    <div>
      <div className="flex justify-center">
      <details className="">
  <summary className="btn m-1">Short by {sort ? sort : ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
    <li><a onClick={()=>handleSort("retings")}>Reting</a></li>
  </ul>
</details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>book i read {readList.length}</h2>
          {
            readList.map(b=><Book book={b} key={b.bookId}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>my wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
