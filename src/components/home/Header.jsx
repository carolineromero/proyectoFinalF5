import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import logoSomosF5 from '../../assets/img/header/somosF5-logoMorado.svg'
import cerrarIcon from '../../assets/img/header/burgerIcon.png'
import { Link, useNavigate } from 'react-router-dom' 
import {useAuth} from '../../context/authContext'
 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 
export default function Example() {

  const {user, logout, loading} = useAuth()
  console.log(user); 

  const navigate = useNavigate()
  const handleLogout = async () => {
    await logout();
    navigate("/");
  } 

if (loading) return <div class="text-center">
<div role="status">
    <svg class=" mt-48 items-center inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
</div>

  return (
    
    <div className="m-0 flex h-20 justify-between bg-transparent p-4 ">
      <Link to="/Home">
      <img src={logoSomosF5} alt="logo F5" className='w-18' />
      </Link>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-full border px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 bg-grisF">
            <img src={cerrarIcon} alt="icono cerrar" className="w-7" />
   
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-40 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                
                
                  <Link to='/profile'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >Perfil </Link>
             
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (

                 <Link to='/workers'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Trabajadores </Link>
              )}
            </Menu.Item>
           
          
              <Menu.Item>
                {({ active }) => (
                  
                  <button
                    type=""  onClick={handleLogout}  
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
         
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}