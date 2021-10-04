import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SearchBar from './Searchbar'

const navigation = [
  { name: 'Home', href: '/dashboard', current: true },
  { name: 'Connections', href: '#', current: false },
  { name: 'Groups', href: '#', current: false },
  { name: 'Latest Views', href: '/login', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 w-screen fixed top-0 left-0 z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ImCross className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://boxy-svg.com/images/logos/logo-full.svg"
                    alt="Website"
                  /> */}
                  <img
                    className="hidden md:block h-8 w-auto"
                    src="https://boxy-svg.com/images/logos/logo-full.svg"
                    alt="Website"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <SearchBar/>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <FaBell className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 h-10 flex justify-center items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/png;base64,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"
                        alt=""
                      />
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href=" "
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href=" "
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href=" "
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}