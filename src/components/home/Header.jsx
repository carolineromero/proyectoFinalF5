import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logoSomosF5 from '../../assets/img/header/somosF5-logoMorado.svg'
import cerrarIcon from '../../assets/img/header/burgerIcon.png'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="m-0 flex justify-between bg-grisF5 p-4 md:bg-slate-100 ">
    <img src={logoSomosF5} alt="logo F5" className='w-18' />
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 bg-grisF">
          <img src={cerrarIcon} alt="icono cerrar" className="w-9" />
        {/*   <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
             
                  <Link to='/profile'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>Perfil</Link>
              
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/workers'
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}>Trabajadores</Link>
              )}
            </Menu.Item>
            
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                 <Link to='/'
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}>Sign Out</Link>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}
