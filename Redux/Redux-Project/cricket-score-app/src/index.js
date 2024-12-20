import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Main/Home/Home';
import Matches from './Components/Main/Matches/Matches';
import AboutUs from './Components/Main/AboutUs/AboutUs';
import ContactUs from './Components/Main/ContactUs/ContactUs';
import Teams from './Components/Main/Teams/Teams';
import AddMatch from './Components/Main/Matches/AddMatch';
import MyGames from './Components/Main/Matches/MyGames/MyGames';
import AddPlayer from './Components/Main/Matches/AddPlayer';
import CustomMatch from './Components/Main/Matches/Custom Match';
import AddTeam from './Components/Main/Matches/AddTeam';
import MatchScoring from './Components/Main/Matches/MyGames/MyMatches/MatchScoring';
import MatchOverview from './Components/Main/Matches/MyGames/MyMatches/MatchOverview';
import SelectSquad from './Components/Main/Matches/MyGames/MyMatches/SelectSquad';
import GiveScore from './Components/Main/Matches/MyGames/MyMatches/GiveScore';
import ScoreCard from './Components/Main/Matches/MyGames/MyMatches/ScoreCard';




const root = ReactDOM.createRoot(document.getElementById('root'));

const myrouter = createBrowserRouter([
  {
     path : '/',
     element : <App/>,
     children : [
      {
          path : '/',
          element : <Home/>
      },
      {
         path : '/matches',
         element : <Matches/>,
         children : [
                    
                    {
                        path : '/matches',
                        element: <MyGames/>,
                       
                    },
                    {
                        path : '/matches/customMatch',
                        element : <CustomMatch/>,
                        children:[
                          {
                              path : '/matches/customMatch/addTeam',
                              element : <AddTeam/>
                          },
                          {
                             path : '/matches/customMatch/addPlayer',
                             element : <AddPlayer/>
                          },
                          {
                            path : '/matches/customMatch/createMatch',
                            element : <AddMatch/>
                          },
                          {
                            path : '/matches/customMatch',
                            element : <AddPlayer/>
                          }
                          
                        ]
                    },
                     ,
                    {
                         path : '/matches/myGames',
                         element : <MyGames/>,
                         
                    },
                    {
                      path : '/matches/:cname',
                      element : <MatchScoring/>,
                      children : [ 
                                 {
                                      path : '/matches/:cname/matchOverview',
                                      element : <MatchOverview/>
                                  },
                                  {
                                       path : '/matches/:cname/matchSelectSquad',
                                       element: <SelectSquad/>
                                  },
                                  {  
                                       path : '/matches/:cname/matchGiveScore',
                                       element : <GiveScore/>

                                  },
                                  {
                                       path : '/matches/:cname/matchScoreCard',
                                       element: <ScoreCard/>

                                  },
                                  {
                                      path :  '/matches/:cname',
                                      element : <MatchOverview/>
                                  }]
                    }
                    
                  ]
      },
      {
         path : '/match-centers',
         element : <Teams/>
      },
      {
         path : '/about-us',
         element : <AboutUs/>
      },
      {
        path : '/contact-us',
        element : <ContactUs/>
      }]
  },
  {

      
  }
  ])

root.render(

  <RouterProvider router = {myrouter}>
        <App />
  </RouterProvider>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
