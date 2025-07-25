import React from 'react'
import { AuthPage } from './pages/Auth/AuthPage'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import HomePage from './pages/MainPage/HomePage/HomePage'
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import WelcomePage from './pages/MainPage/WelcomePage/WelcomePage'
import {AdminPage} from '../src/pages/AdminPage/AdminPage'
import {SectionInstitutionPage} from '../src/pages/SectionInstitutionPage/SectionInstitutionPage'
import {UserSettingsPage} from '../src/pages/UserSettingsPage/UserSettingsPage'
import AddDonationPage from './pages/MainPage/AddDonationPage/AddDonationPage'

import {AllDonationsMade} from '../src/pages/AdminPage/AllDonationsMade/AllDonationsMade'
import {ListOfInstitutions} from '../src/pages/AdminPage/ListOfInstitutions/ListOfInstitutions'
import {RegisteredUsers} from '../src/pages/AdminPage/RegisteredUsers/RegisteredUsers'
import {RequestFromInstitutions} from '../src/pages/AdminPage/RequestFromInstitutions/RequestFromInstitutions'

import {ConfigurationOfTheInstitution} from '../src/pages/SectionInstitutionPage/ConfigurationOfTheInstitution/ConfigurationOfTheInstitution'
import {DonationsToMyInstitution} from '../src/pages/SectionInstitutionPage/DonationsToMyInstitution/DonationsToMyInstitution'
import {MyInstitution} from '../src/pages/SectionInstitutionPage/MyInstitution/MyInstitution'

import {DonationHistory} from '../src/pages/UserSettingsPage/DonationHistory/DonationHistory'
import {RequestToRegisterAnInstitution} from '../src/pages/UserSettingsPage/RequestToRegisterAnInstitution/RequestToRegisterAnInstitution'
import {UserInformation} from '../src/pages/UserSettingsPage/UserInformation/UserInformation'
import InstitutionDetail from './pages/MainPage/DetailsInstitutionPage/InstitutionDetail'
import {CommentsPage}  from './pages/CommentsPage/CommentsPage'
import ConfigurationPublication from './pages/SectionInstitutionPage/configurationPublication/ConfigurationPublication'
import { UserNotifications } from './components/layout/navbar/UserNotifications'
import { UnderConstruction } from './components/underConstruction/UnderConstruction'
import { ProtectedRoute, ProtectedRouteAdmin, ProtectedRouteInstitution } from './shared/utils/ProtectedRoute'
import { ServiceUnavailable } from './components/ServiceUnavailable/ServiceUnavailable'

export const routes = [
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
    children: [
      { path: '', element: <Navigate to="login" /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  },
  {
  path: '/main',
  element: <MainPage />,
  children: [
    { path: '', element: <Navigate to="home" /> },
    { path: 'home', element: <HomePage /> },
    { path: 'institution/:id', element: <InstitutionDetail /> },
    { path: 'publication/:publicationId', element: <CommentsPage /> },
    {
      element: <ProtectedRoute/>,
      children: [
        { path: 'institution/:id/donate', element: <AddDonationPage /> },
        { path: 'myNotifications', element: <UserNotifications /> },
      ]
    }
  ]
},
  {
    element: <ProtectedRouteAdmin/>,
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
        children: [
          { path: '', element: <Navigate to="ListOfInstitutions" /> },
          { path: 'AllDonationsMade', element: <AllDonationsMade/>},
          { path: 'ListOfInstitutions', element: <ListOfInstitutions/>},
          { path: 'RegisteredUsers', element: <RegisteredUsers/>},
          { path: 'RequestFromInstitutions', element: <RequestFromInstitutions/>}
        ]
      },
    ]
  },
    {
      element: <ProtectedRouteInstitution/>,
      children: [
        {
            path: '/sectioninstitution',
            element: <SectionInstitutionPage/>,
            children: [
              { path: '', element: <Navigate to="MyInstitution" /> },
              { path: 'ConfigurationOfTheInstitution', element: <ConfigurationOfTheInstitution/>},
              { path: 'DonationsToMyInstitution', element: <DonationsToMyInstitution/>},
              { path: 'MyInstitution', element: <MyInstitution/>},
              { path: 'ConfigurationPublication', element: <ConfigurationPublication/>}
            ]
          },
      ]
    },
    {
      element: <ProtectedRoute/>,
      children: [
          {
            path: '/usersettings',
            element: <UserSettingsPage/>,
            children: [
              { path: '', element: <Navigate to="UserInformation" /> },
              { path: 'DonationHistory', element: <DonationHistory/>},
              { path: 'RequestToRegisterAnInstitution', element: <RequestToRegisterAnInstitution/>},
              { path: 'UserInformation', element: <UserInformation/>}
            ]
          },
      ]
    },
    {
      path: '/employer',
      element: <UnderConstruction />
    },
    {
      path: '/healthplan',
      element: <UnderConstruction />
    },
    {
      path: '/individual',
      element: <UnderConstruction />
    },
    {
      path: '/resource',
      element: <UnderConstruction />
    },
    {
      path: '/about',
      element: <UnderConstruction />
    },
    {
      path: '/press',
      element: <UnderConstruction />
    },
    {
      path: '/career',
      element: <UnderConstruction />
    },
    {
      path: '/contact',
      element: <UnderConstruction />
    },
    {
      path: '/terms',
      element: <UnderConstruction />
    },
    {
      path: '/privacy',
      element: <UnderConstruction />
    },
    {
      path: '/securty',
      element: <UnderConstruction />
    },
    {
      path: '/cookie',
      element: <UnderConstruction />
    },
    ,{
      path: '/serviceunavailable',
      element: <ServiceUnavailable />
    },
  {
    path:'*',
    element: <NotFoundPage/>
  }
]