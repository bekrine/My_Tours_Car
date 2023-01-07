import React from 'react'

function Signatur({colomStyle}) {
  return (
    <div className='h-[168px] border-b overflow-hidden  border-black'>
    <div className='text-center text-l font-bold border-x border-b border-black'><span>SIGNATURES</span></div>
    <div className='grid grid-cols-2 border-x border-b border-black'>
        <div className='text-center border-r border-black font-semibold  ml-2'>
            <span>LOCATAIRE :</span>
        </div>
        <div className='text-center font-semibold  mr-2'>
            <span>La SOCIETE :</span>
        </div>
    </div>
    <div className='grid grid-cols-4 h-full '>

        <div className='border-x border-black'>
            <div className='text-center text-sm font-semibold border-b border-r border-black'>A LA LIVRAISON</div>
            <div><p className='text-center  p-b-[4.5px] text-xs'> Par Sa Signature,Le Client Déclare Avoir Lu et Approuvée les Conditions Stipulées Ci-Dessus et au Verso Du Contrat</p></div>
        </div>
        <div className='border-r-2 border-black'>
        <div className='text-center text-sm font-semibold border-b border-r border-black'>A LA REPRISA</div>
        <div><p className='text-center'>بموجب هذا الإمضاء أصرح أني قرأت و وافقت على مضمون العقد كله </p></div>
        </div>
        <div className='border-r-2 border-black' >
            <div className='text-center text-sm font-semibold border-b border-r border-black'>A LA LIVRAISON</div>
            <div><p></p></div>
        </div>
        <div className='border-r-2 border-black'>
        <div className='text-center text-sm font-semibold border-b border-r border-black'>A LA REPRISA</div>
        <div><p></p></div>
        </div>
    </div>
</div>
  )
}

export default Signatur