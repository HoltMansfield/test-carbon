import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { useRouter } from 'hooks/core/use-router/useRouter'
import { useScrollBack } from 'hooks/core/use-scroll-back/useScrollBack'
import { NotFound } from 'components/core/routing/not-found/NotFound'
import { RouteLoading } from 'components/core/routing/route-loading/RouteLoading'
import { preloadAllRoutes } from './PreloadRoutes'
import { AuthorizedRoute } from './AuthorizedRoute'
const FindPolicy = Loadable({ loader: () => import('./find-policy/FindPolicy'), loading: RouteLoading })
const Login = Loadable({ loader: () => import('./login/Login'), loading: RouteLoading })
const Home = Loadable({ loader: () => import('./home/Home'), loading: RouteLoading })
const CreatePolicy = Loadable({ loader: () => import('./create-policy/CreatePolicy'), loading: RouteLoading })
const CreatePolicyFromProfile = Loadable({ loader: () => import('./create-policy-from-profile/CreatePolicyFromProfile'), loading: RouteLoading })
const Console = Loadable({ loader: () => import('./console/Console'), loading: RouteLoading })


function RouteTable () {
  const { history } = useRouter()
  useScrollBack(history)
  preloadAllRoutes()

  return (
    <Switch>
      <Route path='/login' component={Login} />
      <AuthorizedRoute exact path="/" component={Home} />
      <AuthorizedRoute exact path="/find-policy" component={FindPolicy} />
      <AuthorizedRoute exact path="/create-policy" component={CreatePolicy} />
      <AuthorizedRoute exact path="/create-policy-from-profile" component={CreatePolicyFromProfile} />
      <AuthorizedRoute exact path="/console" component={Console} />

      {/* 404 route must be last */}
      <AuthorizedRoute component={NotFound} />
    </Switch>
  )
}

export { RouteTable }