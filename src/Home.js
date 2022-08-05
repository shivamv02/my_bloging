// import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // // let name='mario';
    // const [name,setName]=useState('mario')  //use to make name reactive for rendering the page again with new data
    // const [age,setAge]=useState(24);
    // const handleClick=(e)=>{
    //     setName('luigi');
    //     setAge(30); 
    //    // console.log('hello Rahul',e);
    // const clickAgain=(name,e)=>{
    //     console.log('hello'+name,e.target);
    // }
    // const [blogs,setBlogs]=useState([
    //     {title:'My new website',body:'lorem ipsum....',author:'mario',id:1},
    //     {title:'My welcome party',body:'lorem ipsum....',author:'yoshi',id:2},
    //     {title:'web dev top tips',body:'lorem ipsum....',author:'mario',id:3}

    // ]);
     // const handleDelete=(id)=>{
    //    const newblogs=blogs.filter((blog)=>blog.id!==id);
    //     setBlogs(newblogs);
    // }
    // const [name,setName]=useState('mario');
     
    const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
          {error&&<div>{error}</div>}
          {isPending&&<div>Loading.....</div>}
         {blogs&&<BlogList blogs={blogs} title="All Blogs !"/>}



           {/* /* <h2>Homepage</h2>
            <p>{name} is {age} year old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> clickAgain('Rahul singh',e)}>click me again</button> */ 
           }
           {/* <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/> */}
           {/* <button onClick={()=>setName('luigi')}>click me</button>
           <p>{name}</p> */}
           {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs"/> */}
        </div>
     );
}
 
export default Home;