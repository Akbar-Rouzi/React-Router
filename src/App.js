import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:id', element: <ProductDetailPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
