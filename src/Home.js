import { useState, useEffect } from 'react';
import BlogList from './BlogList';

//const Home is a stateless functional component
const Home = () => {
    //define a state variable called blogs and a function to update it called setBlogs
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const [name, setName] = useState('mario');
    

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res);
                    return res.json();
                
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                    //console.log(err.message);
                });
        }, 1000);
    }, []);
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!"/>}
            <button onClick={()=>setName('luigi')}>change name</button>
            <p>{name}</p>
            <h2 style={{color:'blue'}}>Homepage</h2>
        
        </div>
     );
}
 
export default Home;