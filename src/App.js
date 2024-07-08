import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';


const appRouter = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  {path: '/products', element: <ProductsPage />}

]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
