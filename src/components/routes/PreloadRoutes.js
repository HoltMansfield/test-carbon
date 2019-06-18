/* eslint no-unused-vars: "off" */
import Loadable from 'react-loadable'
import { RouteLoading } from 'components/core/routing/route-loading/RouteLoading'
const FindPolicy = Loadable({ loader: () => import('./find-policy/FindPolicy'), loading: RouteLoading })
//GeneratorToken: <next-import>

export const preloadAllRoutes = () => {
  // preload all routes 2 seconds after the react app is rendered
  setTimeout(() => {
    FindPolicy.preload()
    //GeneratorToken: <next-preload>
  }, 2000)
}