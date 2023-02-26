import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Route, Routes, useRoutes, useSearchParams } from 'react-router-dom'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff',
      element: <Staff />,
      children: [
        {
          path: ':staffId',
          element: <StaffItem />
        },
        {
          path: 'add',
          element: <AddStaff />
        },
        {
          index: true,
          element: <StaffList />
        }
      ]
    },

    {
      path: '*',
      element: <NotFound />
    }
  ])

  const [searchParams] = useSearchParams()
  console.log('searchParams', Object.fromEntries([...searchParams]))
  return (
    <div className='App'>
      <MainLayout>
        {/* //* C1 */}
        {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />}>
            <Route path=':staffId' element={<StaffItem />} />
            <Route path='add' element={<AddStaff />} />
            <Route index element={<StaffList />} />
          </Route>
          <Route path='*' element={<h1>404 page</h1>} />
        </Routes> */}

        {/* //* C2 */}
        {elements}
      </MainLayout>
    </div>
  )
}

export default App
