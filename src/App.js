import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

const routeDefinations = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/products" element={<ProductsPage />}></Route>

  </Route>
)

// const appRouter = createBrowserRouter([
//   { path: '/', element: <HomePage /> },
//   { path: '/products', element: <ProductsPage /> }

// ]);

const appRouter = createBrowserRouter(routeDefinations);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
