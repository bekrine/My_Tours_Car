import React from 'react'

function DiscriptionCar({colomStyle,titleStyle,towElementsStyle,infoCar,oneElementStyle,contract}) {

    const timeDepart=contract?.date_de_dpart?.split('T')
    const timeDeRetur=contract?.date_de_revnier?.split('T')

  return (
    <div className={colomStyle}>
    <div className={titleStyle}><p>DESCRIPTION DU VEHICULE</p></div>
    <div className={towElementsStyle}>
        <div >
        <span>Marque: {infoCar?.Marque}</span>
        </div>
        <div>
        <span>IMMR°: {infoCar?.Matricule}</span>
        </div>
    </div>
        <div className={towElementsStyle}>
            <div>
            <span>Date Heure de départ: {timeDepart?.[0]} </span>
            </div>
            <div>
            <span> à :{timeDepart?.[1]} </span>
            </div>
        </div>
        <div className={oneElementStyle}>
            <span>Km de départ : {contract?.nombre_de_killomitrage_de_depart} </span>
        </div>
        <div className={towElementsStyle}>
            <div>
            <span>Date eure de reteur: {timeDeRetur?.[0]}</span>
            </div>
            <div>
             <span>à:{timeDeRetur?.[1]}</span>
            </div>
        </div>
        <div className={oneElementStyle}> 
            <span>Km de reteur :  </span>
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
  )
}

export default DiscriptionCar