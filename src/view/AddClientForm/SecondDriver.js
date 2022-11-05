import React from 'react'
import {Formik,Form} from 'formik'
import {MyTextInput} from '../../utils/inputs'
import * as Yup from 'yup'



function SecondDriver() {
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
        console.log(value)
    }}
    >



<Form className='w-full max-w-[80%] mx-auto my-10  '>
                    <div className='flex  -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='nom prenme'
                                name='nom_prenme'
                                type='text'
                                placeholder='nom prenme'
                            />
                        </div> 
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='N° de Carte Nationale'
                                name='N_de_carte_nationale'
                                type='text'
                                placeholder='N° de Carte Nationale'
                            />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Date de Naissance'
                                name='date_de_naissance'
                                type='date' 
                            />
                        </div> 
                      
                    </div >
                   {/* ////////// */}
                   <div className='flex  -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='lieux de naissance'
                                name='lieux_de_naissance'
                                type='text'
                                placeholder='lieux de naissance'
                            />
                        </div>

                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='adresse'
                                name='adresse'
                                type='text'
                                placeholder='adresse'
                            />
                        </div> 
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Numero du Passeport'
                                name='Numero_du_passeport'
                                type='text'
                                placeholder='Numero du Passeport'
                            />
                        </div>
                       </div >
                     {/* ////////// */}
                   <div className='flex  -mx-3 mb-6'>
                   <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='passeport valable jusque'
                                name='passeport_valable_jusque'
                                type='date'
                            />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='numero de permis'
                                name='numero_de_permis'
                                type='text'
                                placeholder='numero de permis'
                            />
                        </div>

                   <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='date de obtenire permis'
                                name='date_de_obtenire_permis'
                                type='date'
                            />
                        </div>
                            </div >
                             {/* ////////// */}
                   <div className='flex  -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='numero_de_telephon'
                                name='numero_de_telephon'
                                type='number' 
                                placeholder='numero de telephon'
                            />
                        </div> 
                     </div>
                    
                             <div>
                                <button type='submit'>Suivant</button>
                                </div>
                            
                </Form>


    </Formik>
    </>
  )
}

export default SecondDriver