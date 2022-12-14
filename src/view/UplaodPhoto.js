import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect,useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { useDispatch  } from 'react-redux'
import { storage } from '../app/firebase'
import {addCarImage} from '../features/AddCar/CarSlice'
import { toggelModal} from '../features/Modal/modalSlice'



function UplaodPhoto() {
    const [img,setimg]=useState([])
    let [progress,setProgress]=useState(null) 
    const dispatch=useDispatch()
    const addCarImages=()=>{
        img.forEach(async(image)=>{
            const imageRef=ref(storage,`images/${image.name}`)
         const uploadTask =  uploadBytesResumable(imageRef,image)
            uploadTask.on('state_changed',(onSnapShot)=>{
                progress === 100 ?setProgress(null): setProgress(Math.floor((onSnapShot.bytesTransferred/onSnapShot.totalBytes)*100))
    
    
            },(error)=>{
                console.log(error.code)
                setProgress(null)
                setimg([])
            },
            async()=>{
          const respanec= await getDownloadURL(uploadTask.snapshot.ref)
             dispatch(addCarImage(respanec))
            }
            )
        })

    }
   
    const {
        getRootProps,
        getInputProps}=useDropzone({accept: {'image/*': []},onDrop:acptedFile=>
            { 
               let newImg=acptedFile.map(file=>Object.assign(file,{id:Math.random(),preview:URL.createObjectURL(file)}))
                setimg(prev=>[...prev,...newImg])
             }})
             const deleteImg=(id)=>{
                let filterImg=img.filter(file=>file.id !== id)
                setimg(filterImg)
             }

    const thumbs=img.map(file=>(
            <div key={file.id} className='w-[100px] relative flex justify-between border-2 border-dashed border-black'>
                <svg onClick={()=>{deleteImg(file.id)}}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute w-[30%] h-[60%] right-[-20%] top-[-40%] ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               
                <img className='w-full height-full' src={file.preview}  onLoad={()=>URL.revokeObjectURL(file.preview)}/>
            </div>
    ))


    useEffect(()=>{
        return () => img.forEach(file => URL.revokeObjectURL(file.preview));
    },[])
  return (
      <>
      <div className='my-10 mx-auto flex justify-center '><h1 className='w-fit '>Ajouter photo</h1></div>
               <section className='border-dashed border-2 border-sky-500  mx-10 my-10 bg-slate-300'>
                   <div className='p-14 flex justify-center ' {...getRootProps()}>
                       <input accept='image/*' {...getInputProps()}/>
                       <p>Drag 'n' drop some files here, or click to select files</p>
                   </div>
                   <div className='flex justify-around '>
                   {
                        thumbs              
                    }
                    </div>
               </section>
        <div className='my-10 mx-auto flex justify-center'>

        <button
        onClick={()=>addCarImages()}
         className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' 
        > {progress !== null ? `${progress} %`  :'Ajouter Photo'}</button>
        <button
        onClick={()=>dispatch(toggelModal())}
         className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800' 
        > Close</button>
        </div>
        </>
        )
  
}

export default UplaodPhoto