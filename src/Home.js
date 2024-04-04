import { useState } from 'react';
const Home = () => {
    const handleClick = (e) => {
        console.log('hello, luis', e);
    }
    const handleOneMoreTime = (name) => {
        console.log(name)
    }
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return (
    <div class="home">
        {blogs.map((blog) => (
            <div class="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
        ))}
        <h2 style={{color:'blue'}}>Homepage</h2>
        <button onClick={handleClick}>click me</button>
        <button onClick={()=>{
         handleOneMoreTime('luis')   
        }} >click on luis</button>
       
    </div>
     );
}
 
export default Home;