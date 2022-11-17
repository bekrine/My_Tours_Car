import React from 'react'
import {Formik,Form} from 'formik'
import {MyTextInput} from '../../utils/inputs'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import {addSecondDriver} from '../../features/AddClient/ClientSlice'
import {toggelModal} from '../../features/Modal/modalSlice'


function SecondDriver() {

    const dispatch=useDispatch()
  return (
    <>
    <Formik
    initialValues={
        {
            N_de_carte_nationale:'',
            Numero_du_passeport:'',
            nom_prenme:"",
            passeport_valable_jusque:'',
            date_de_naissance:'',
            lieux_de_naissance:'',
            adresse:'',
            numero_de_telephon:'',
            numero_de_permis :'',
            date_de_obtenire_permis:'',
        }
    }validationSchema={Yup.object({
        N_de_carte_nationale:Yup.string().required('champs obligatoir'),
        nom_prenme:Yup.string().required('champs obligatoir'),
        numero_de_permis:Yup.string().required('champs obligatoir'),
    })

    }onSubmit={(value)=>{
        dispatch(addSecondDriver(value))
       dispatch(toggelModal())
    
    }}
    >



<Form className='w-full max-w-[80%] mx-auto my-6  '>
                    <div className='block mx-4 mb-2  md:flex mx-4 mb-2'>
                            <MyTextInput
                                label='nom prenme'
                                name='nom_prenme'
                                type='text'
                                placeholder='nom prenme'
                            />
                            <MyTextInput
                                label='N° de Carte Nationale'
                                name='N_de_carte_nationale'
                                type='text'
                                placeholder='N° de Carte Nationale'
                            />
                                </div >
                                
                             {/* ////////// */}
                             <div className='block mx-4 mb-2  md:flex mx-4 mb-2'>
                            <MyTextInput
                                label='Date de Naissance'
                                name='date_de_naissance'
                                type='date' 
                            />
                            <MyTextInput
                                label='lieux de naissance'
                                name='lieux_de_naissance'
                                type='text'
                                placeholder='lieux de naissance'
                            />
                                </div >
                                {/* ////////// */}
                              <div className='block mx-4 mb-2  md:flex mx-4 mb-2'>
                            <MyTextInput
                                label='adresse'
                                name='adresse'
                                type='text'
                                placeholder='adresse'
                            />
                            <MyTextInput
                                label='Numero du Passeport'
                                name='Numero_du_passeport'
                                type='text'
                                placeholder='Numero du Passeport'
                            />

                            </div >
                             {/* ////////// */}
                   <div className='block mx-4 mb-2  md:flex mx-4 mb-2'>
                            <MyTextInput
                                label='passeport valable jusque'
                                name='passeport_valable_jusque'
                                type='date'
                            />
                            <MyTextInput
                                label='numero de permis'
                                name='numero_de_permis'
                                type='text'
                                placeholder='numero de permis'
                                />
                                </div>

                                <div className='block mx-4 mb-2  md:flex mx-4 mb-2'>
                            <MyTextInput
                                label='date de obtenire permis'
                                name='date_de_obtenire_permis'
                                type='date'
                                />
                            <MyTextInput
                                label='numero_de_telephon'
                                name='numero_de_telephon'
                                type='number' 
                                placeholder='numero de telephon'
                                />
                                </div>
                    
                             <div className='flex justify-around'>
                                <button 
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                                type='submit'>Suivant</button>
                                <button 
                                onClick={()=>dispatch(toggelModal())}
                                className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
                                type='button'>fermme</button>
                                </div>
                            
                </Form>


    </Formik>
    </>
  )
}

export default SecondDriver