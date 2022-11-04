import {useField} from 'formik'

export const MyTextInput=({label,...props})=>{
    const [field,meta]=useField(props)
    
    return(
        <>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
         htmlFor={props.name}>{label}</label>
       
       <input 
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${meta.touched && meta.error ?'border-red-500':null} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
         {...field} {...props}/>
        {
            meta.touched && meta.error ?(<p className='text-red-500 text-xs italic'>{meta.error}</p>):null
        }
        </>
    )

}

export const MySelect=({label,...props})=>{
    const[field,meta]=useField(props)
    return (
        <>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
         htmlFor={props.name}>{label}</label>
         <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" '
          {...field} {...props}/>
         {
            meta.touched && meta.error ?(<p className='text-red-500 text-xs italic'>{meta.error}</p>):null
        }
        </>
    )

}

export const MyCheckBox=({children,...props})=>{
    const [field,meta]=useField({...props,type:'checkbox'})
    return(
        <div className='flex m-2 items-center pl-4 rounded border border-gray-200 dark:border-gray-700'>
    
            <input className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
             type='checkbox' {...field} {...props}/>
           
        <label htmlFor={props.name} className='py-4 ml-2 mr-1 w-full text-sm font-medium text-black ' 
        >  {children}   </label>
    
        {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
        </div>
    )

} 


export const MyTextarea=({label,...props})=>{
    const [field,meta]=useField(props)

    return(
        <div className='m-5'>
            <label className='block mb-2 text-sm font-medium text-black '
            htmlFor={props.name} >{label}</label>
            <textarea 
            className='block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            {...field} {...props} ></textarea>
            {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
        </div>
    )

} 