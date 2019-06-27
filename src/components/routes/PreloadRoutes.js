/* eslint no-unused-vars: "off" */
import Loadable from 'react-loadable'
import { RouteLoading } from 'components/core/routing/route-loading/RouteLoading'
const FindPolicy = Loadable({ loader: () => import('./find-policy/FindPolicy'), loading: RouteLoading })
const Login = Loadable({ loader: () => import('./login/Login'), loading: RouteLoading })
const Home = Loadable({ loader: () => import('./home/Home'), loading: RouteLoading })
const CreatePolicy = Loadable({ loader: () => import('./create-policy/CreatePolicy'), loading: RouteLoading })
const CreatePolicyFromProfile = Loadable({ loader: () => import('./create-policy-from-profile/CreatePolicyFromProfile'), loading: RouteLoading })
const Console = Loadable({ loader: () => import('./console/Console'), loading: RouteLoading })
//GeneratorToken: <next-import>

export const preloadAllRoutes = () => {
  // preload all routes 2 seconds after the react app is rendered
  setTimeout(() => {
    FindPolicy.preload()
    Login.preload()
    Home.preload()
    CreatePolicy.preload()
    CreatePolicyFromProfile.preload()
    Console.preload()
    //GeneratorToken: <next-preload>
  }, 2000)
}