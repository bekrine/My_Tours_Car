import { Form, Formik } from 'formik'
import React from 'react'
import { useAddCarMantenanceMutation, useGetCarsMaintenanceQuery } from '../../services/car'
import { MySelect, MyTextInput } from '../../utils/inputs'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { toggelModal } from '../../features/Modal/modalSlice'

function MaintenanceForm() {
    const{data,isLoading,isError,error}=useGetCarsMaintenanceQuery()
    const[addCarMantenance]=useAddCarMantenanceMutation()

    let content 
    if(isLoading){
        content=<option>loadin...</option>
    }else if(data){
    content=data?.map(mat=>{
            return(
                <option key={mat.id} value={mat.id}>{mat.Matricule}</option>
            )
        })
    }else if(isError){
        content=<div>{error}</div>
    }



    const dispatch =useDispatch()



  return (



    <Formik
    initialValues={
        {
            Matricule:'',
            date_entretient:'',
            entretient:'',
            date_prochain_entretient:"",
            km_lors_entretient:'',
            km_pour_prochain:'',
            km_total:"",
            montant_entretient:'',
        }
    }validationSchema={Yup.object({
        montant_entretient:Yup.number(),
   
    })

    }onSubmit={(value)=>{
        addCarMantenance(value)
    }}
    >



<Form className='w-full max-w-[80%] mx-auto my-10  '>
                       
                   <div className='block mx-3 mb-6 w-full '>
                       <MySelect
                       label='Choiser une voiture'
                       name='Matricule'
                       >
                                <option value=''>Choiser une voiture</option>
                                {
                                    content
                                }
                       </MySelect>
                    </div>
                    <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                            <MyTextInput
                                label='Entretient'
                                name='entretient'
                                type='text'
                                placeholder='entretient'
                               
                            />
                    </div >
                   {/* ////////// */}
                   <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                            <MyTextInput
                                label='date entretient'
                                name='date_entretient'
                                type='date'
                            />
                            <MyTextInput
                                label='date Prochain Entretient'
                                name='date_prochain_entretient'
                                type='date'
                            />
                    </div >
                     {/* ////////// */}
                   <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                            <MyTextInput
                                label='km Lors Entretient'
                                name='km_lors_entretient'
                                type='number'
                                placeholder='km Lors Entretient'
                            />
                            <MyTextInput
                                label='km pour Prochain'
                                name='km_pour_prochain'
                                type='number'
                                placeholder='km pour Prochain'
                            />
                    </div>
                   <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>

                            <MyTextInput
                                label='km Total'
                                name='km_total'
                                type='number'
                                placeholder='km Total'
                            />
                            <MyTextInput
                                label='montant Entretient'
                                name='montant_entretient'
                                type='number' 
                                placeholder='montant Entretient'
                            />
                           
                    </div >
                             <div className='flex justify-around'>

                                <button
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                                 type='submit'>Ajouter Entretient</button>

                                <button 
                                onClick={()=>dispatch(toggelModal())}
                                className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
                                type='button'>fermme</button>
                                </div>
                            
                </Form>


    </Formik>

  )

}

export default MaintenanceForm