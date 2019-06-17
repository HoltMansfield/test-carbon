import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import { useRouter } from 'hooks/core/use-router/useRouter'
import { useScrollBack } from 'hooks/core/use-scroll-back/useScrollBack'
import { NotFound } from 'components/core/routing/not-found/NotFound'
import { RouteLoading } from 'components/core/routing/route-loading/RouteLoading'
import { useLoggedInUser } from 'hooks/core/use-logged-in-user/useLoggedInUser'
import { getSecureConfig } from 'config/secure'
import { preloadAllRoutes } from './PreloadRoutes'

import { Accordion,AccordionItem } from 'carbon-components-react' //DELETE ME

// import { AuthorizedRoute } from './AuthorizedRoute'
const Login = Loadable({ loader: () => import('components/core/routing/login/Login'), loading: RouteLoading })

const x = {
      className: 'some-class',
      disabled: false,
      small: false,
      size: 'field',
      onClick: () => alert('mama')
    }
const ExampleComponent = () => {
  return (
    <Accordion>
  <AccordionItem
    title={'Section 1 title'}
    open={false}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem title="Section 2 title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
  <AccordionItem
    title={
      <h4>
        Section 4 title (<em>the title can be a node</em>)
      </h4>
    }
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  </AccordionItem>
</Accordion>

  )
}
const config = getSecureConfig()

function RouteTable () {
  const { history } = useRouter()
  const { setLoggedInUser } = useLoggedInUser()
  useScrollBack(history)
  preloadAllRoutes()

  return (
    <Switch>
      {/* Default Route */}
      <Route exact path="/" component={ExampleComponent} /> } />
      <Route path='/login' render={(props) => <Login {...props} history={history} setLoggedInUser={setLoggedInUser} auth0Config={config.auth0} />} />

      {/* 404 route must be last */}
      <Route component={NotFound} />
    </Switch>
  )
}

export { RouteTable }
