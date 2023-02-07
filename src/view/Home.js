import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../utils/Loader'

function Home() {
    return (
        <>
            <div className='mt-14 grid grid-cols-3 gap-4 justify-center justify-items-center'>

            <div className='shadow-lg shadow-red-500/50 h-[50vh] w-[30vh] rounded-lg flex justify-center transform transition duration-500 hover:scale-110'>

                    <div className='mx-2 my-auto'>
                        <div className='font-serif m-2 transform transition duration-500 hover:translate-x-1'>
                            <Link to={'/addCarInfo'}
                            className=""
                            >
                                
                            Ajouter une Voiture
                            </Link>
                            </div>
                            <div className='font-serif m-2 transform transition duration-500 hover:translate-x-1'>
                            <Link to={'/maintenanc'}>
                            Voiture Statistique
                            </Link>
                            </div>
                    </div>
                </div>
                <div className='shadow-lg shadow-red-500/50 h-[50vh] w-[30vh] rounded-lg flex justify-center transform transition duration-500 hover:scale-110'>



                    <div className='mx-2 my-auto'>

                    <div className='font-serif m-2 transform transition duration-500 hover:translate-x-1'>

                            <Link to={'/addClient'}>
                            Ajouter un Client
                            </Link>
                            </div>
                            <div className='font-serif m-2 transform transition duration-500 hover:translate-x-1'>

                            <Link to={'/AllClients'}>
                            Tout les Clients
                            </Link>
                            </div>
                    </div>
                </div>

                <div className='shadow-lg shadow-red-500/50 h-[50vh] w-[30vh] rounded-lg flex justify-center transform transition duration-500 hover:scale-110'>
                    <div className='mx-2 my-auto'>
                    <div className='font-serif m-2 transform transition duration-500 hover:translate-x-1'>

                            <Link to={'/mauviseClient'}
                            
                            >
                            Ajouter un Mauvais Client
                            </Link>
                            </div>
                            <div className='font-serif m-2 transform transition duration-500 hover:translate-x-1'>

                            <Link to={'/AllbadeClients'}>
                            Tout Mauvais Clients
                            </Link>
                            </div>
                    </div>
                </div>

            </div>
        <Loader/>
        </>
    )
}

export default Home