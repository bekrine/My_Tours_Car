import React from 'react'

function Equipments({colomStyle,titleStyle,inputStyle,inputItems,infoCar,towElementsStyle}) {
  return (
    <div className={colomStyle}>
    <div className={titleStyle}><span>EQUIPEMENT ET ACCESSOIRES</span></div>
    <div className={inputStyle}>
        <div className={inputItems}>
        <label htmlFor='post_radio'>Poste Radio :</label>
        <input className='ml-1' disabled checked={infoCar?.poste_radion} type='checkbox' name="post_radio"/>
        </div>
        <div className={inputItems}>
        <label htmlFor='gilet'> Gilet :</label>
        <input className='ml-1' disabled checked={infoCar?.Gilet} type='checkbox' name="gilet"/>
        </div>
    </div>
    <div className={inputStyle}>
        <div className={inputItems}>
        <label htmlFor='roue_de_secours'>Roue de Secours :</label>
        <input className='ml-1' disabled checked={infoCar?.Roue_de_secour} type='checkbox' name="roue_de_secours"/>
        </div>
        <div className={inputItems}>
        <label htmlFor='extincteur'> Extincteur :</label>
        <input className='ml-1' disabled checked={infoCar?.Extincteur} type='checkbox' name="extincteur"/>
        </div>
    </div>
    <div className={inputStyle}>
        <div className={inputItems}>
        <label htmlFor='cric'>Cric :</label>
        <input className='ml-1' disabled checked={infoCar?.Cric} type='checkbox' name="cric"/>
        </div>
        <div className={inputItems}>
        <label htmlFor='plaque_de_panne'> Plaque de Panne :</label>
        <input className='ml-1' disabled checked={infoCar?.Triangle_de_presignalisation} type='checkbox' name="plaque_de_panne"/>
        </div>
    </div>
    <div className={inputStyle}>
        <div className={inputItems} >
        <label htmlFor='documents'>Documents :</label>
        <input className='ml-1' disabled checked={infoCar?.carte_grise} type='checkbox' name="documents"/>
        </div>
        <div className={inputItems}>

        <label htmlFor='siege_bebe'> Siége Bébé :</label>
        <input className='ml-1' disabled checked={infoCar?.Siege_bebe} type='checkbox' name="siege_bebe"/>
        </div>
    </div>
    <div className={inputItems}>
        <label htmlFor='autres'>Autres: </label>
        <input className='ml-1' disabled checked={infoCar?.Autres} type='checkbox' name="autres"/>
    </div>
    <div className={towElementsStyle}>
     <span>NB:</span>
     <p></p>
    </div>
</div>
  )
}

export default Equipments