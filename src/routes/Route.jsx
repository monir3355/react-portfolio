import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Technologies from "../components/skills/Technologies";
import Experience from "../components/skills/Experience";
import Educations from "../components/skills/Educations";
import Courses from "../components/skills/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "technologies",
        element: <Technologies />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "educations",
        element: <Educations />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
    ],
  },
]);

export default router;
