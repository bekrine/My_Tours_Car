import React, { useEffect,useState } from 'react'
import Dropzone from 'react-dropzone'



function UplaodPhoto() {
    const [img,setimg]=useState([])
    console.log(img)



    const thumbs=img.map(file=>(
            <div className='w-[100px] flex justify-between'>
                <img className='w-full height-full' src={file.preview}  onLoad={()=>URL.revokeObjectURL(file.preview)}/>
            </div>
    ))


    useEffect(()=>{
        return () => img.forEach(file => URL.revokeObjectURL(file.preview));
    },[])
  return (
      <>
      <div className='my-10 mx-auto flex justify-center '><h1 className='w-fit '>Ajouter photo</h1></div>
   <Dropzone 
     onDrop={acptedFile=>
       { 
          let newImg=acptedFile.map(file=>Object.assign(file,{preview:URL.createObjectURL(file)}))
           setimg(prev=>[...prev,...newImg])
        }}
         >
       {
           ({getInputProps,getRootProps})=>(
               <section className='border-dashed border-2 border-sky-500  mx-10 my-10 bg-slate-300'>
                   <div className='p-14 flex justify-center ' {...getRootProps()}>
                       <input {...getInputProps()}/>
                       <p>Drag 'n' drop some files here, or click to select files</p>
                   </div>
                   <div className='flex justify-around '>
                   {

                       thumbs
                       
                    }
                    </div>
               </section>
           )
           
           
        }
       
   </Dropzone>
        <div className='my-10 mx-auto flex justify-center'>

        <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' 
        > Ajouter Voiture</button>
        </div>
        </>
  )
}

export default UplaodPhoto