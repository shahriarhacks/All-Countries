import { RouterProvider } from 'react-router-dom';
import { router } from './layout/roots';

function App() {
  return (
    < >
      <RouterProvider router={router} />
    </>
  );
}

export default App;
