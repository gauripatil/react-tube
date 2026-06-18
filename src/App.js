import "./App.css";

// Compoennts
import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import InProgress from "./components/InProgress";

// Store
import { Provider } from "react-redux";
import store from "./stores/store";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router";
import ShortsContainer from "./components/ShortsContainer";

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
      {
        path: "/shorts",
        element: <ShortsContainer />,
      },
      {
        path: "/trending",
        element: <InProgress name="Trending" />
      },
      {
        path: "/music",
        element: <InProgress name="Music" />
      },
      {
        path: "/movies",
        element: <InProgress name="Movies" />
      },
      { 
        path: "/sports",
        element: <InProgress name="Sports" />
      },
      { path: "/subscriptions",
        element: <InProgress name="Subscriptions" />
      },
      {
        path: "/library",
        element: <InProgress name="Library" />,
      },
      {
        path: "/history",
        element: <InProgress name="History" />,
      },
      {
        path: "/watch-later",
        element: <InProgress name="Watch Later" />,
      },
      {
        path: "/liked-videos",
        element: <InProgress name="Liked Videos" />,
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
