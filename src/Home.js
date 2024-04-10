import { useState, useEffect } from 'react';
import BlogList from './BlogList';

//const Home is a stateless functional component
const Home = () => {
    //define a state variable called blogs and a function to update it called setBlogs
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');
    

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            <button onClick={()=>setName('luigi')}>change name</button>
            <p>{name}</p>
            <h2 style={{color:'blue'}}>Homepage</h2>
        
        </div>
     );
}
 
export default Home;