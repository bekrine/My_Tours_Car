import React from 'react'

function PrintAr() {
  return (
    <div className='w-[80%] mt-10  mb-10 mx-auto'>
    <div className='grid grid-flow-col auto-cols-[1fr]'>
        <div className=''>
            <div className='border-2 border-black flex  justify-center '>
                <img src={logoMytours} width="200px" alt='logo Mytours '/>
        <p className='text-2xl text-center font-bold '>MY TOURS CAR</p>
            </div>
            <div className='border-2 border-black   '>
                <p className='text-center text-xl'>Rue des Far Lot du centre N°69 Ouarzazate 45000</p>
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
                <label htmlFor='post_radio'>Poste Radio :</label>
                <input className='ml-6' type='checkbox' name="post_radio"/>
                </div>
                <div className={inputItems}>
                <label htmlFor='gilet'> Gilet :</label>
                <input className='ml-6' type='checkbox' name="gilet"/>
                </div>
            </div>
            <div className={inputStyle}>
                <div className={inputItems}>
                <label htmlFor='roue_de_secours'>Roue de Szcours :</label>
                <input className='ml-6' type='checkbox' name="roue_de_secours"/>
                </div>
                <div className={inputItems}>
                <label htmlFor='extincteur'> Extincteur :</label>
                <input className='ml-6' type='checkbox' name="extincteur"/>
                </div>
            </div>
            <div className={inputStyle}>
                <div className={inputItems}>
                <label htmlFor='cric'>Cric :</label>
                <input className='ml-6' type='checkbox' name="cric"/>
                </div>
                <div className={inputItems}>
                <label htmlFor='plaque_de_panne'> Plaque de Panne :</label>
                <input className='ml-6' type='checkbox' name="plaque_de_panne"/>
                </div>
            </div>
            <div className={inputStyle}>
                <div className={inputItems} >
                <label htmlFor='documents'>Documents :</label>
                <input className='ml-6' type='checkbox' name="documents"/>
                </div>
                <div className={inputItems}>

                <label htmlFor='siege_bebe'> Siége Bébé :</label>
                <input className='ml-6' type='checkbox' name="siege_bebe"/>
                </div>
            </div>
            <div className={inputItems}>
                <label htmlFor='autres'>Autres: </label>
                <input className='ml-6' type='checkbox' name="autres"/>
            </div>
            <div className={towElementsStyle}>
             <span>NB:</span>
             <p></p>
            </div>
        </div>
        <div className={colomStyle}>
            <div className={titleStyle}><span>ETAT DU VEHICULE A LA LIVRAION</span></div>
            
                <div className='ml-4 mt-2'>
                    <div><span>R:rayures</span></div>
                    <div><span>B:bosses</span></div>
                    <div><span>E:éclots</span></div>
                    <div><span>C:cassure</span></div>
                </div>
                <div className='flex justify-around'>

                <div className='flex'>
                <span>carburant</span>
                <img src={jauge} width='100px' alt='jauge'/>
                </div>
                <img src={shema} width='200px' alt='shema voiture'/>
                </div>
            
        </div>
        <div className={colomStyle}>
        <div className={titleStyle}><span>ETAT DU VEHICULE A LA REPRISE</span></div>
        <div className='ml-4 mt-2'>
                    <div><span>R:rayures</span></div>
                    <div><span>B:bosses</span></div>
                    <div><span>E:éclots</span></div>
                    <div><span>C:cassure</span></div>
                </div>
                <div className='flex justify-around'>

                <div className='flex'>
                <span>carburant</span>
                <img src={jauge} width='100px' alt='jauge'/>
                </div>
                <img src={shema} width='200px' alt='shema voiture'/>
                </div>
        </div>
    </div>
    <div className={colomStyle}>
        <div className={titleStyle}><span>PAIEMENT</span></div>
        <div className='flex justify-around'>

        <div>
            <span>Journée à :   </span>
        </div>
        <div>
            <span> DH </span>
        </div>
        <div>
            <span> x </span>
        </div>
        <div>
            <span> =Total Net de Location: </span>
        </div>
        </div>
        <div className='flex justify-around m-2'>
            <div>TVA 20%  =       DH</div>
            <div>Avance:</div>
            <div>Reste:</div>
        </div>
        <div className='flex justify-around m-2'>
            

            <span>TTC =       DH</span>
            <span>Mode de paiement</span>
            <span>
                <label htmlFor='espece'>Espace:</label>
                <input type='checkbox' name='espece'/>
             </span>
            <span>
                <label htmlFor='cheque'>Chéque:</label>
                <input type='checkbox' name='cheque'/>
             </span>
            <span>
                <label htmlFor='carte'>Carte:</label>
                <input type='checkbox' name='carte'/>
             </span>
        </div>
        <div className='flex justify-around m-2'>
            <div>
                <span>Assurance CDW : </span>
            </div>
            <div>
            <label htmlFor='normal'>NORMALE:</label>
                <input type='checkbox' name='normal'/>
            </div>
            <div>
            <label htmlFor='tt_risques'>TT RISQUES:</label>
                <input type='checkbox' name='tt_risques'/>
            </div>
            <div>
                <span>N° document:</span>
            </div>
        </div>
        <div className='flex justify-around'>
            <div>
                <span>Divers:       </span>
            </div>
            <div>
                <span>
                    DH/Jx  
                </span>
            </div>
            <div>
                <span>
                    = 
                </span>
            </div>
            <div>
                
                    <span>Franchise: oui-non:    </span>
                
            </div>
            <div>
                
                    <span>DH</span>
                
            </div>
        </div>
    </div>
    <div className={colomStyle}>
        <div className='text-center text-xl font-bold border-2 border-black'><span>SIGNATURES</span></div>
        <div className='flex justify-between border-b-2 border-black'>
            <div className='text-center font-semibold text-lg ml-2'>
                <span>LOCATAIRE :</span>
            </div>
            <div className='text-center font-semibold text-lg mr-2'>
                <span>La SOCIETE :</span>
            </div>
        </div>
        <div className='grid grid-cols-4 '>

            <div className='border-r-2 border-black'>
                <div className='text-center text-lg font-semibold border-b-2 border-r-2 border-black'>A LA LIVRAISON</div>
                <div><p className='text-center'> Par Sa Signature,Le Client Déclare Avoir Lu et Approuvée les Conditions Stipulées Ci-Dessus et au Verso Du Contrat</p></div>
            </div>
            <div className='border-r-2 border-black'>
            <div className='text-center text-lg font-semibold border-b-2 border-r-2 border-black'>A LA REPRISA</div>
            <div><p className='text-center'>بموجب هذا الإمضاء أصرح أني قرأت و وافقت على مضمون العقد كله </p></div>
            </div>
            <div className='border-r-2 border-black' >
                <div className='text-center text-lg font-semibold border-b-2 border-r-2 border-black'>A LA LIVRAISON</div>
                <div><p></p></div>
            </div>
            <div className='border-r-2 border-black'>
            <div className='text-center text-lg font-semibold border-b-2 border-r-2 border-black'>A LA REPRISA</div>
            <div><p></p></div>
            </div>
        </div>
    </div>
    <div className='border-2 border-black'>
        <p className='text-center'>

كل ضرر يـمـس الـشـركـة خــلال مـدة الـكـراء مـن طـرف المستاجر سيعرضه للمساءلة الإدارية والقانونية إلى حين جبر الضرر مع أداء جميع المصاريف الناتجة عن ذلك
        </p>
        <p className='text-center'>
        
Chaque dommage touch la Société pendant la période de location, locataire sera exposé à la responsabilité administrative et judiciaire
jusqu'à décision finale, ainsi le paiement de tous les frais résultants
        </p>
    </div>
</div>
  )
}

export default PrintAr