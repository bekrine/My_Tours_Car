import React from 'react'
import {Formik,Form} from 'formik'
import {MyCheckBox, MyTextarea, MyTextInput} from '../../utils/inputs'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {AllClient ,addContract} from '../../features/AddClient/ClientSlice'
import {useAddClientMutation} from '../../services/client'
import Modal from "../../utils/Modal"
import Print from '../print/Print'
import { isOpenState, toggelModal } from '../../features/Modal/modalSlice'


function CarRentalContract() {


    const [addClient]=useAddClientMutation()
    const extraInfo=useSelector(AllClient)
    const dispatch=useDispatch()
    const navigate=useNavigate()
  return (
    <>
    <Formik
    initialValues={
        {
            N_de_contrat:'',
            date_de_contrat:'',
            lieux_de_contrat:'',
            date_de_dpart:'',
            nombre_de_killomitrage_de_depart:"",
            date_de_revnier :'',
            prix_de_louee:'',
            remises:'',
            le_montant_paye :'', 
            le_reste:'',
            assurance_ordinaire:false,
            assurance_Trisque:false,
            observation:'',
   
        }
    }validationSchema={Yup.object({
        N_de_contrat:Yup.number().required('champs obligatoir'),
        nombre_de_killomitrage_de_depart:Yup.number(),
        prix_de_louee:Yup.number(),
        le_montant_paye:Yup.number(),
    })

    }onSubmit={async(value)=>{
        // let data={...extraInfo,contract:value}
        //  await addClient(data)
         dispatch(addContract(value))
        navigate('/print')
    }}
    >

<Form className='w-full max-w-[80%] mx-auto my-10  '>
                    <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                        
                            <MyTextInput
                                label='N° de contrat'
                                name='N_de_contrat'
                                type='text'
                                placeholder='N° de contrat'
                            />
                        
                            <MyTextInput
                                label='date de contrat'
                                name='date_de_contrat'
                                type='date'
                            />
                        
                            <MyTextInput
                                label='lieux de contrat'
                                name='lieux_de_contrat'
                                type='text'
                                placeholder='lieux de contrat' 
                            />
                      
                    </div >
                   {/* ////////// */}
                   <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                        
                            <MyTextInput
                                label='date de dpart'
                                name='date_de_dpart'
                                type='datetime-local'
                            />
                        
                            <MyTextInput
                                label='nombre de km de depart'
                                name='nombre_de_killomitrage_de_depart'
                                type='number'
                                placeholder='lnombre de killomitrage de depart'
                            />

                        
                            <MyTextInput
                                label='date de revnier'
                                name='date_de_revnier'
                                type='date'
                                
                            />
                       </div >
                     {/* ////////// */}
                   <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                        
                            <MyTextInput
                                label='prix de louee '
                                name='prix_de_louee'
                                type='number'
                                placeholder='prix de louee'
                            />
                   
                            <MyTextInput
                                label='remises'
                                name='remises'
                                type='number'
                                placeholder='remises'
                            />
                        
                            <MyTextInput
                                label='le montant paye'
                                name='le_montant_paye'
                                type='number'
                                placeholder='le_montant_paye'
                            />

                            </div >
                             {/* ////////// */}
                   <div className='block mx-3 mb-6  md:flex  mx-3 mb-6'>
                        
                   
                            <MyTextInput
                                label='le reste'
                                name='le_reste'
                                type='number'
                                placeholder='le reste'
                            />
                            <MyCheckBox name='assurance_ordinaire'>
                            assurance ordinaire
                            </MyCheckBox>
                            <MyCheckBox name='assurance_Trisque'>
                            assurance TT Risques
                            </MyCheckBox>
                     </div>
                   <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                        
                            <MyTextarea 
                            label='observation'
                            name='observation'/>
                     
                   </div> 
                             <div>
                                <button 
                                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                                type='submit'>Ajouter Client</button>
                                </div>
                            
                </Form>


    </Formik>
    </>
  )
}

export default CarRentalContract