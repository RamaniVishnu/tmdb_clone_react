//import {configureBrowserRouter} from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import FormApp from '../components/FormApp';
import Favourite from '../components/Products/Favourite';
import Movies from '../components/Products/Movies';
import Products from '../components/Products/Products';
import RentProduct from '../components/Products/RentProduct';
import TheatreProduct from '../components/Products/TheatreProduct';
import TVProduct from '../components/Products/TVProduct';
import About from '../components/Accordion/About';
import AdvancedAbout from '../components/Accordion/AdvancedAbout'
import Quiz from '../components/SurveysList/Quiz';
import SampleQuiz from '../components/SurveysList/SampleQuiz';
import TheatreMovie from '../components/Products/TheatreMovies'

export const allRoutes = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"/",
                element: <Products />
            },
            {
                path:"/tv",
                element: <TVProduct />
            },
            {
                path:"/rent",
                element: <RentProduct />
            },
            {
                path:"/theatre",
                element: <TheatreProduct />
            },

        ]
    },
    {
        path:"/product/:id",
        element: <Movies />
    },
    {
        path: "/product/movies/:id",
        element: <TheatreMovie />
    },
    {
        path:"/favourite",
        element: <Favourite />
    },
    {
        path:"/form",
        element: <FormApp />
    },
    {
        path:"/about",
        element: <About />,
    },
    {
        path: "/advancedabout",
        element: <AdvancedAbout />
    },
    {
        path: '/survey',
        element: <Quiz />
    },
    {
        path:'/samplequiz',
        element: <SampleQuiz />
    }
])