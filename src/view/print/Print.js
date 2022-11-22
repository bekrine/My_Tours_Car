import React from 'react'
import logo from '../../image/logo.jpeg'
import logoMytours from '../../image/logoMYtours.jpeg'
import jauge from '../../image/jauge_carburant1.jpeg'
import shema from '../../image/schema-vehicule1.jpeg'

function Print() {
    const titleStyle='text-center text-lg font-semibold border-2 border-black'
    const oneElementStyle='text-lg font-semibold ml-8'
    const towElementsStyle='text-lg font-semibold flex justify-around'
    const colomStyle='border-2 border-black'
    const inputStyle='grid grid-cols-2 text-lg font-semibold'
    const inputItems='ml-12'


  return (
    <div className='w-[80%] mt-10 mx-auto'>
        <div className='grid grid-flow-col auto-cols-[1fr]'>
            <div className=''>
                <div className='border-2 border-black flex  justify-center '>
                    <img src={logoMytours} width="100px" alt='logo Mytours '/>
            <p className='text-2xl text-center '>MY TOURS CAR</p>
                </div>
                <div className='border-2 border-black   '>
                    <p className='text-center'>Rue des Far Lot du centre N°69 Ouarzazate 45000</p>
                </div>
                <div className='border-2 border-black flex flex-col items-center '>
                    <div>GSM:+212 07 02 22 54 84</div>
                    <div>E-mail: mytourscar@gmail.com</div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
            <img src={logo} width='200px'  alt='logo'/>
            <p className='text-2xl text-center '>جمعية جهة درعة تافيلالت لكراء السيارات</p>
            </div>
            <div className='border-2 border-black flex flex-col '>
                <div className='text-xl m-2'>Contrat N°:</div>
                <div className='text-xl flex flex-row mb-2'>
                <div className='mr-6'>Le :11/11/1111</div> 
                <div>A :OUARZAZATE</div>
                </div>
                <div className='' >
                <p className='text-center text-sm'>Ce contrat doit accomagner le véhicule pendant tout la durée de location, afin d'être présenté à toute réquisition des services de police ou de gendarmerie </p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 '>
            <div className={colomStyle}>
                <div className={titleStyle}><span>1er CONDUCTEUR</span></div>
                <div className={oneElementStyle}>
                    <span>Nom et Prénom : </span>
                </div>
                <div className={oneElementStyle}>
                    <span>Date/lieu naissance :</span>
                </div>
                <div className={oneElementStyle}>
                    <span>Adresse:</span>
                </div>
                <div className={towElementsStyle}>
                  <div>
                      <span>Passeport:</span>
                      </div>
                      <div>
                    <span>Expire le:</span>
                          </div>  
                </div>
                <div className={towElementsStyle}>
                    <div>
                    <span>CIN:</span>
                    </div>
                    <div>
                    <span>Expire le:</span>
                    </div>
                </div>
                <div className={towElementsStyle}>
                    <div>
                    <span>Permis:</span>
                    </div>
                    <div>
                    <span>Délivré le:</span>
                    </div>
                </div>
                <div className={oneElementStyle}>
                    <span>Tél:(GSM):</span>
                </div>
            </div>
            <div className={colomStyle}>
            <div className={titleStyle}><span>2éme CONDUCTEUR</span></div>
                <div className={oneElementStyle}>
                    <span>Nom et Prénom : </span>
                </div>
                <div className={oneElementStyle}>
                    <span>Date/lieu naissance :</span>
                </div>
                <div className={oneElementStyle}>
                    <span>Adresse:</span>
                </div>
                <div className={towElementsStyle}>
                    <div>
                    <span>Passeport:</span>
                    </div>
                    <div>
                    <span>Expire le:</span>
                    </div>
                </div>
                <div className={towElementsStyle}>
                    <div>
                    <span>CIN:</span>
                    </div>
                    <div>
                    <span>Expire le:</span>
                    </div>
                </div>
                <div className={towElementsStyle}>
                    <div>
                    <span>Permis:</span>
                    </div>
                    <div>
                    <span>Délivré le:</span>
                    </div>
                </div>
                <div className={oneElementStyle}>
                    <span>Tél:(GSM):</span>
                </div>
            </div>
            <div className={colomStyle}>
                <div className={titleStyle}><p>DESCRIPTION DU VEHICULE</p></div>
                <div className={towElementsStyle}>
                    <div >
                    <span>Marque:DACIA</span>
                    </div>
                    <div>
                    <span>IMMR°:222222</span>
                    </div>
                </div>
                    <div className={towElementsStyle}>
                        <div>
                        <span>Date Heure de départ: 11/11/1111 </span>
                        </div>
                        <div>
                        <span> à : 14:22</span>
                        </div>
                    </div>
                    <div className={oneElementStyle}>
                        <span>Km de départ : </span>
                    </div>
                    <div className={towElementsStyle}>
                        <div>
                        <span>Date eure de reteur: </span>
                        </div>
                        <div>
                         <span>à:</span>
                        </div>
                    </div>
                    <div className={oneElementStyle}> 
                        <span>Km de reteur : </span>
                    </div>
                    <div className={oneElementStyle}>
                        <span>nbre du jours Facturés :</span>
                    </div>
                    <div className={oneElementStyle}>
                        <span>Prolongation Jusqu'à:</span>
                    </div>
                    <div className={oneElementStyle}>
                        <span>
                            nbre du jours prolongés : 
                        </span>
                    </div>
            </div>
            <div className={colomStyle}>
                <div className={titleStyle}><span>EQUIPEMENT ET ACCESSOIRES</span></div>
                <div className={inputStyle}>
                    <div className={inputItems}>
                    <label htmlFor='post_radio'>Poste Radio</label>
                    <input type='checkbox' name="post_radio"/>
                    </div>
                    <div className={inputItems}>
                    <label htmlFor='gilet'> Gilet</label>
                    <input type='checkbox' name="gilet"/>
                    </div>
                </div>
                <div className={inputStyle}>
                    <div className={inputItems}>
                    <label htmlFor='roue_de_secours'>Roue de Szcours</label>
                    <input type='checkbox' name="roue_de_secours"/>
                    </div>
                    <div className={inputItems}>
                    <label htmlFor='extincteur'> Extincteur</label>
                    <input type='checkbox' name="extincteur"/>
                    </div>
                </div>
                <div className={inputStyle}>
                    <div className={inputItems}>
                    <label htmlFor='cric'>Cric </label>
                    <input type='checkbox' name="cric"/>
                    </div>
                    <div className={inputItems}>
                    <label htmlFor='plaque_de_panne'> Plaque de Panne</label>
                    <input type='checkbox' name="plaque_de_panne"/>
                    </div>
                </div>
                <div className={inputStyle}>
                    <div className={inputItems} >
                    <label htmlFor='documents'>Documents</label>
                    <input type='checkbox' name="documents"/>
                    </div>
                    <div className={inputItems}>

                    <label htmlFor='siege_bebe'> Siége Bébé</label>
                    <input type='checkbox' name="siege_bebe"/>
                    </div>
                </div>
                <div className={inputItems}>
                    <label htmlFor='autres'>Autres</label>
                    <input type='checkbox' name="autres"/>
                </div>
                <div className={towElementsStyle}>
                 <span>NB:</span>
                 <p></p>
                </div>
            </div>
            <div className={colomStyle}>
                <div className={titleStyle}><span>ETAT DU VEHICULE A LA LIVRAION</span></div>
                <div>
                    <img src={jauge} alt='jauge'/>
                    <img src={shema} alt='shema voiture'/>
                </div>
            </div>
            <div className={colomStyle}>
            <div className={titleStyle}><span>ETAT DU VEHICULE A LA REPRISE</span></div>

            </div>
        </div>
    </div>
  )
}

export default Print