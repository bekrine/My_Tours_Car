import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextInput } from '../../utils/inputs'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { toggelModal } from '../../features/Modal/modalSlice'
import {useAddBadeClientMutation} from "../../services/client"

function AddBAdeClient() {
    const dispatch =useDispatch()
    const [addBadeClient]=useAddBadeClientMutation()


    return (
  
  
  
      <Formik
      initialValues={
          {
              N_de_carte_nationale:'',
              nom_prenme:'',
              numero_de_permis:'',
              
          }
      }validationSchema={Yup.object({
          nom_prenme:Yup.string(),
     
      })
  
      }onSubmit={(value)=>{
          addBadeClient(value)
      }}
      >
  
  
  
  <Form className='w-full max-w-[80%] mx-auto my-10  '>
                         
                     <div className='block mx-3 mb-6 w-full '>
                              <MyTextInput
                                  label='nom prenme'
                                  name='nom_prenme'
                                  type='text'
                              />
                      </div>
                     {/* ////////// */}
                     <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                       <MyTextInput
                                  label='N° de carte nationale'
                                  name='N_de_carte_nationale'
                                  type='text'
                                  placeholder='N° de carte nationale'
                                 
                              />
                              <MyTextInput
                                  label='numero de permis'
                                  name='numero_de_permis'
                                  type='text'
                              />
                      </div >
                       {/* ////////// */}
  
                               <div className='flex justify-around'>
  
                                  <button
                                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                                   type='submit'>Ajouter</button>
  
                                  <button 
                                  onClick={()=>dispatch(toggelModal())}
                                  className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
                                  type='button'>fermme</button>
                                  </div>
                              
                  </Form>
  
  
      </Formik>
  
    )
}

export default AddBAdeClient