
const getStoreBook  = ()=>{

  const storedBookSTR = localStorage.getItem("redList");
  if(storedBookSTR){
   const storedBookData = JSON.parse(storedBookSTR);
   return storedBookData;
  }
  else{
    return [];
  }

}

const addToStoreDB = (id)=>{
const storedBookData = getStoreBook();

if(storedBookData.includes(id)){
    console.log("hello")
    alert("vai ai id alredy exist")
}
else{
    storedBookData.push(id)
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("redList",data)
}
}
export {addToStoreDB,getStoreBook}