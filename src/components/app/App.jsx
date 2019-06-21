import React from 'react'
import { HeaderContainer, Content  } from 'carbon-components-react'
import Swipe from 'react-easy-swipe'
import { useShowSideMenu } from 'hooks/redux/foundation/use-show-side-menu/useShowSideMenu'
import { AppBar } from './app-bar/AppBar'
import { SideMenu } from './side-menu/SideMenu'
import { RouteTable } from '../routes/RouteTable'


const StoryContent = () => {
  const content = (
    <RouteTable />
  )
  return <Content id="main-content">{content}</Content>
}

export function App () {
  const { setShowSideMenu } = useShowSideMenu()

  return (
    <Swipe onSwipeRight={() => setShowSideMenu(true)} onSwipeLeft={() => setShowSideMenu(false)}>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <AppBar><SideMenu /></AppBar>
            <StoryContent />
          </>
        )}/>
    </Swipe>
  )
}
