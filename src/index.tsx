import { createRoot } from 'react-dom/client'
import { App } from './app'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutPage, ShopPage } from 'pages'
import { Suspense } from 'react'

const root = document.getElementById('root')
console.log(root)

if (!root) {
    throw new Error('Root not found')
}

const container = createRoot(root)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
    ],
  },
])
container.render(<RouterProvider router={router} />)