import "./App.css";

// Compoennts
import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

// Store
import { Provider } from "react-redux";
import store from "./stores/store";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;

/**
 * Header
 * Body
 *    - Sidebar
 *      - MenuItems
 *    - Main
 *     - VideoContainer
 *     - VideoCard
 *     - ButtonList
 *
 *
 */
