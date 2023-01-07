import React from 'react'

function Driver({colomStyle,title ,titleStyle,oneElementStyle,towElementsStyle,infoDriver }) {
  return (
    <div className={colomStyle}>
    <div className={titleStyle}><span>{title}</span></div>
    <div className={oneElementStyle}>
        <span>Nom et Prénom : {infoDriver?.nom_prenme}</span>
    </div>
    <div className={oneElementStyle}>
        <span>Date/lieu naissance : {infoDriver?.date_de_naissance} {infoDriver?.lieux_de_naissance}</span>
    </div>
    <div className={oneElementStyle}>
        <span>Adresse : {infoDriver?.adresse}</span>
    </div>


    <div className='w-[80%]'>

    <div className={towElementsStyle}>
      <div>
          <span>Passeport: {infoDriver?.Numero_du_passeport}</span>
          </div>
          <div>
        <span>Expire le: {infoDriver?.date_de_obtenire_permis}</span>
              </div>  
    </div>
    <div className={towElementsStyle}>
        <div>
        <span>CIN: {infoDriver?.N_de_carte_nationale}</span>
        </div>
        <div>
        <span>Expire le: {infoDriver?.valable_jusque}</span>
        </div>
    </div>
    <div className={towElementsStyle}>
        <div>
        <span>Permis: {infoDriver?.numero_de_permis}</span>
        </div>
        <div>
        <span>Délivré le: {infoDriver?.date_de_obtenire_permis}</span>
        </div>
    </div>
    </div>
    <div className={oneElementStyle}>
        <span>Tél:(GSM): {infoDriver?.numero_de_telephon}</span>
    </div>
</div>
  )
}

export default Driver