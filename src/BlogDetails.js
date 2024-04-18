import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    return ( 

        <div className="blog">
            <h2>blogdetail</h2>
            <p>from {id}</p>
        </div>

     );
}
 
export default BlogDetails;