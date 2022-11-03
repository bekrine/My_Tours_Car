import React from 'react'
import { Formik, Form } from 'formik'
import { MyTextInput,MySelect,MyCheckBox , MyTextarea} from '../utils/inputs'
import * as Yup from 'yup'

function AddCar() {
    return (
        <>
            <div>AddCar</div>
            <Formik
                initialValues={{
                    Matricule: '',
                    Genre: '',
                    Marque: '',
                    Puissance: '',
                    Couleur: '',
                    Chassis: '',
                    Nombre_de_place: '',
                    date_de_circulation: '',
                    Carburant:'',
                    observation:'',
                    photo:'',
                    carte_grise:false,
                    reçu_de_vignette:false,
                    visite_technique:false,
                    Roue_de_secour:false,
                    Enjoliveurs:false,
                    Siege_bebe:false,
                    Assurance:false,
                    Autorisation_de_circulation:false,
                    CRIC:false,
                    Extincteur:false,
                    Allume_cigare:false, 
                    Gilet:false,
                    Triangle_de_presignalisation:false,
                    poste_radion:false,
                    retrov:false,
                    Autres:false,

                }} validationSchema={Yup.object({
                    Matricule: Yup.string().min(5, 'Matricul doit avoir plus de 5 carcter').required('Champ Obligatoir'),
                    Genre: Yup.string().required('Champ Obligatoir'),
                    Marque: Yup.string().required('Champ Obligatoir'),
                    Nombre_de_place:Yup.number().positive('le Nombre de place doit etre Toujaur Positive'),
                    date_de_circulation:Yup.date(),
                    Carburant:Yup.string().oneOf(["essence",'gazole']).required('Champ Obligatoir')


                })}
                onSubmit={(value) => {
                    console.log(value)
                }
                }
            >
                <Form className='w-full max-w-[80%] mx-auto my-10  '>
                    <div className='flex  -mx-3 mb-6'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Matricule'
                                name='Matricule'
                                type='text'
                                placeholder='Matricule'
                            />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Genre'
                                name='Genre'
                                type='text'
                                placeholder='Genre'
                            />
                        </div> 
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Marque'
                                name='Marque'
                                type='text'
                                placeholder='MatriMarquecule'
                            />
                        </div> 
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Puissance'
                                name='Puissance'
                                type='text'
                                placeholder='Matricule'
                            />
                        </div>
                    </div >
                    <div className='flex  -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Couleur'
                                name='Couleur'
                                type='text'
                                placeholder='Couleur'
                            />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Chassis'
                                name='Chassis'
                                type='text'
                                placeholder='Chassis'
                            />
                        </div> 
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='Nombre de place'
                                name='Nombre_de_place'
                                type='text'
                                placeholder='Nombre de place'
                            />
                        </div> 
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <MyTextInput
                                label='date de circulation'
                                name='date_de_circulation'
                                type='date'
                                placeholder='date de circulation'
                            />
                        </div>
                    </div>
                        <div>
                            <MySelect label='Carburant' name='Carburant'>
                                <option value=''>Select Type de Carburant</option>
                                <option value='essence'>Essence</option>
                                <option value='gazole'>Gazole</option>
                            </MySelect>
                        </div>
                        <div className='flex  mx-auto my-4 justify-evenly'>
                        
                                <MyCheckBox  name='carte_grise'>
                                Carte Grise
                                </MyCheckBox>
                         
                           
                                <MyCheckBox  name='reçu_de_vignette'>
                                Reçu de Vignette
                                </MyCheckBox>
                            
                                <MyCheckBox  name='visite_technique'>
                                Visite Technique
                                </MyCheckBox>

                                <MyCheckBox  name='Roue_de_secour'>
                                Roue de Secour
                                </MyCheckBox>

                                <MyCheckBox  name='Enjoliveurs'>
                                Enjoliveurs
                                </MyCheckBox>
                            </div>
                            <div className='flex  mx-auto my-4 justify-evenly'>
                                <MyCheckBox  name='Siege_bebe'>
                                Siége bébé
                                </MyCheckBox>
                                <MyCheckBox  name=' Assurance'>
                                Assurance
                                </MyCheckBox>
                           
                                <MyCheckBox  name='Autorisation_de_circulation'>
                                Autorisation de Circulation
                                </MyCheckBox>
                                <MyCheckBox  name='CRIC'>
                                CRIC
                                </MyCheckBox>
                                <MyCheckBox  name='Extincteur'>
                                Extincteur
                                </MyCheckBox>
                                </div>
                                <div className='flex  mx-auto my-4 justify-evenly'>
                                <MyCheckBox  name='Allume_cigare'>
                                Allume Cigare
                                </MyCheckBox>
                                <MyCheckBox  name='Gilet'>
                                Gilet
                                </MyCheckBox>
                                <MyCheckBox  name='Triangle_de_presignalisation'>
                                Triangle de Presignalisation
                                </MyCheckBox>
                                <MyCheckBox  name='poste_radion'>
                                poste_radion
                                </MyCheckBox>
                                <MyCheckBox  name='retrov'>
                                retrov
                                </MyCheckBox>
                        </div>
                                <MyCheckBox  name='Autres'>
                                Autres
                                </MyCheckBox>
                                <MyTextarea
                                label='observation'
                                name='observation'
                                placeholder='Entre Votre Observation'
                                />
                                <div>
                                    <MyTextInput
                                    label='Photo'
                                    name='photo'
                                    type='file'
                                    placeholder='Ajouter photo'
                                    />
                                </div>
                                <div>
                                <button type='submit'>Ajouter Voiture</button>
                                </div>
                            
                </Form>
            </Formik>
        </>
    )
}

export default AddCar