import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('useeffect ran');
    });
    return (
        <div class="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios Blogs" />

            <h2 style={{color:'blue'}}>Homepage</h2>
        
        </div>
     );
}
 
export default Home;