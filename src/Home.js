const Home = () => {
    const handleClick = (e) => {
        console.log('hello, luis', e);
    }
    const handleOneMoreTime = (name) => {
        console.log(name)
    }
    return (
    <div>
        <h2 style={{color:'blue'}}>Homepage</h2>
        <button onClick={handleClick}>click me</button>
        <button onClick={()=>{
         handleOneMoreTime('luis')   
        }} >click on luis</button>
       
    </div>
     );
}
 
export default Home;