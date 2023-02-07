import React, { useEffect, useRef  } from 'react'
import { useSelector } from 'react-redux'
import { ExistingClientInof } from '../../features/AddClient/ClientSlice'
import { useLazySearchBadeClientQuery, } from "../../services/client"




function Search({ setInfo }) {
    const searchFor = useRef('')
    const [getClient, resulte] = useLazySearchBadeClientQuery()


    useEffect(() => {
       
        if (resulte && resulte.data?.clients?.length > 0) {
            setInfo(resulte.data?.clients[0].info)
        }
    }, [resulte])

    return (
        <>
            <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                <div className='w-full md:px-3 mb-6 md:mb-0'>
                    <label htmlFor="recherch"
                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    >Recherch</label>
                    <input
                        ref={searchFor}
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        type='text' />
                </div>

                <div className='w-full flex justify-center my-6 md:w-1/2 px-3 mb-6 md:mb-0'>

                    <button
                        onClick={() => getClient(searchFor.current.value)}
                        className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5  mr-2  dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'
                        type='button'> Recherch</button>
                </div>
            </div>
            <div className={resulte?.data?.badeClients?.length > 0 ? "block" : 'hidden'} >
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    Mauvais client
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    {
                        resulte?.data?.badeClients?.length > 0 &&
                        <p>Nom Prénom : {resulte?.data?.badeClients[0]?.nom_prenme} | numero de permis {resulte?.data?.badeClients[0]?.numero_de_permis} | N de Carte Nationale {resulte?.data?.badeClients[0].N_de_carte_nationale}</p>
                    }
                </div>
            </div>
            {/* ///// */}
            <div className={resulte.data?.clients?.length === 0 && resulte.data?.badeClients?.length === 0 ? "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" : 'hidden'} role="alert">
                <div className="flex">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                        <p className="text-sm">client ñ'es pas exister</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Search