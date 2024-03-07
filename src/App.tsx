import { RouterProvider, createBrowserRouter } from "react-router-dom";
import View from "./containers/View";
import Add from "./containers/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <View />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
