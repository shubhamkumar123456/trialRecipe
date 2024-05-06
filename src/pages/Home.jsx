import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate()
  let inputRef = useRef();
    const [items, setitems] = useState([]);
    const [searchitem, setsearchitem] = useState("pizza");
    console.log(searchitem)

  let fetchData = async()=>{
  
    let res = await fetch(`https://api.edamam.com/search?q=${searchitem}&app_id=249b8c77&app_key=accc417489d9e0dfa317fbc0cb7be4c8`)

    let data = await res.json()
    console.log(data)
    // console.log(data.hits)
    setitems(data.hits)
  }

  //  
  useEffect(()=>{
    fetchData() 
  },[searchitem])

     console.log(items)



const handleSearch = (e)=>{
  e.preventDefault()
  let searchValue = inputRef.current.value;
  // console.log(searchValue)

  if(searchValue){

    setsearchitem(searchValue)
  }
}


const handleClick = (ans)=>{
  console.log(ans)
  navigate('/recipe',{state:ans})
}

  return (
 <div>
    <form onSubmit={handleSearch} className="d-flex col-md-6 m-auto my-2" role="search">
  <input ref={inputRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button  className="btn btn-outline-success" type="submit">Search</button>
</form>

     <div className='row d-flex justify-content-center gap-2'>
       {
      items.map((ele)=>{
        return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
        <button onClick={()=>handleClick(ele)}>click me</button>
    {/* <Link state={ele} to="/recipe" className="btn btn-primary">view recipe</Link> */}

  
  </div>
</div>

        })
       }

    </div>
 </div>
  )
}

export default Home
