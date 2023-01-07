import React from 'react'
import {nbrJoure} from '../../../utils/dateCalcule'

function Payment({colomStyle,titleStyle,contract}) {
    let TVA=0
    let TTC=0
    const depart = new Date(contract?.date_de_dpart)
    const returns = new Date(contract?.date_de_revnier)
   let nbrJour=nbrJoure(depart,returns)





   contract?.prix_de_louee === undefined ?TVA=0 : TVA=(contract?.prix_de_louee*20)/100 
   TVA > 0 ? TTC= contract?.prix_de_louee *  1.2: TTC=0
   
  return (
    <div className={`${colomStyle} h-[160px]`}>
    <div className={titleStyle}><span>PAIEMENT</span></div>
    <div className='flex justify-around text-sm font-bold' >

    <div>
        <span>Journée à : {contract?.prix_de_louee}  </span>
    </div>
    <div>
        <span> DH </span>
    </div>
    <div>
        <span> x {nbrJour} </span>
    </div>
    <div>
        <span> =Total Net de Location: {nbrJour >0 && contract?.prix_de_louee*nbrJour}</span>
    </div>
    </div>
    <div className='flex justify-around m-2 text-sm font-bold'>
        <div>TVA 20%  =    {TVA}   DH</div>
        <div>Avance: {contract?.le_montant_paye}</div>
        <div>Reste: {contract?.le_reste}</div>
    </div>
    <div className='flex justify-around m-2 text-sm font-bold'>
        

        <span>TTC =   {TTC}    DH</span>
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
    <div className='flex justify-around m-2 text-sm font-bold'>
        <div>
            <span>Assurance CDW : </span>
        </div>
        <div>
        <label htmlFor='normal'>NORMALE:</label>
            <input type='checkbox' disabled  checked={contract?.assurance_ordinaire} name='normal'/>
        </div>
        <div>
        <label htmlFor='tt_risques'>TT RISQUES:</label>
            <input type='checkbox' disabled checked={contract?.assurance_Trisque}  name='tt_risques'/>
        </div>
        <div>
            <span>N° document:</span>
        </div>
    </div>
    <div className='flex justify-around text-sm font-bold'>
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
  )
}

export default Payment