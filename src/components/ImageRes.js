import React from 'react'
import {AiFillLike} from 'react-icons/ai'

function ImageRes({img}) {
  return (
    <div className=' grid md:grid-cols-2 lg:grid-cols-3 p-3 gap-10 mt-5 justify-items-center'>
      {img.map(image=>(
        <div className="img" key={image.id}>
            <div class="card w-96 md:w-80 bg-base-100 shadow-xl">
  <figure><img src={image.webformatURL} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title font-normal">
      Image By : {image.user}
    </h2>
    <div class="card-actions justify-center mt-6">
      <div class="badge badge-outline"><span className='font-semibold'> Tags :</span>  {image.tags} </div> 
      <div class="badge badge-outline ">{image.likes} <AiFillLike className='ml-1'/></div> 

    </div>
  </div>
</div>
        </div>
      ))}
    </div>
  )
}

export default ImageRes
