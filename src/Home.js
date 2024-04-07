import { useState, useEffect } from 'react';
import BlogList from './BlogList';

//const Home is a stateless functional component
const Home = () => {
    //define a state variable called blogs and a function to update it called setBlogs
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('useEffect ran');
        console.log(name);
    }, [name]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios Blogs" handleDelete={handleDelete} />
            <button onClick={()=>setName('luigi')}>change name</button>
            <p>{name}</p>
            <h2 style={{color:'blue'}}>Homepage</h2>
        
        </div>
     );
}
 
export default Home;