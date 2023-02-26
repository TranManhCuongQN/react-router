import React from 'react'
import { Link, NavLink } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  // Hạn chế dùng thẻ a bởi vì khi sử dụng những thẻ a gây nên việc reload lại cả trang web nó ko đúng với SPA (Single Page Application)

  //* end: Những thẻ con dashboard (url) nó mà match thì thằng cha ko match nữa thằng con của url='/' là url='/about' thì url='/about' nó match rồi thì url='/' nó ko match nữa. Thì khi có match nữa thì nó ko có active nữa
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to='/'
                end
                // style={({ isActive }) => ({
                //   fontWeight: isActive ? 800 : undefined
                // })}
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300 ${activeClass}`
                }}
              >
                {/* render props */}
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/staff'
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300 ${activeClass}`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Staff</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                replace
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300 ${activeClass}`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>About</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}
