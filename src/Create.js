import { useState } from 'react';
const Create = () => {
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[author, setAuthor] = useState('mario');
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <teytarea>
                    <label>Blog content:</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </teytarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
            </form>
        </div>
     );
}
 
export default Create;