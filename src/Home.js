
import BlogList from './BlogList';
import useFetch from './useFetch';

//const Home is a stateless functional component
const Home = () => {
   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            
            {blogs && <BlogList blogs={blogs} title="All Blogs!!"/>}
            <h2 style={{color:'blue'}}>Homepage</h2>
        
        </div>
     );
}
 
export default Home;