import React from 'react'
import {useEffect,useState} from 'react'
import ImageRes from './ImageRes';
function Search() {

    const [images,setImages]=useState([]);
    const [text,setText]=useState('');
    const handleChange=(e)=>{
        setText(e.target.value);
            fetch(`https://pixabay.com/api/?key=28815613-66467884fc3ba80e27d9bd609&q=${text}&image_type=photo&pretty=true`)
            .then(res=>{
                return res.json()
            }).then(data=>{
                console.log(data.hits)
                setImages(data.hits)
            })
          
            }

            
    
    
    
  return (
    <div className='p-5 text-center '>
        <form>
        <div className="relative">

            <input type="text" value={text} onChange={handleChange} placeholder="Type here" className="input input-bordered   w-full" />
        </div>
        </form>
         {images.length > 0 ? <ImageRes img={images} /> : null }
    </div>

    
  )
}

export default Search
