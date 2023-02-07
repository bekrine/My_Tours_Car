
import logo from '../image/logoT.png'


function Navbar() {


  return (
    <nav className='px-2 bg-white shadow-lg shadow-gray-200/50  dark:bg-gray-900 dark:border-gray-700'>

    <div className='container  flex flex-wrap justify-between items-center mx-auto'>
      <div className='flex items-center'>
        <img src={logo} width='300px' alt='logo' />
      </div>
    


        <div className=' p-1 border-2 border-slate-900 rounded-full hover:bg-red-100 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>

        </div>


    </div>
    </nav>

  )
}

export default Navbar