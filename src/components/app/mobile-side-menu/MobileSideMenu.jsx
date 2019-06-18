import React from 'react'
import Flex from 'flexbox-react'
import { SideMenu } from '../side-menu/SideMenu'
// import { } from './styled'


export function MobileSideMenu () {
  return (
    <Flex flexGrow={1} flexDirection="column" minHeight="100vh">
      <Flex flexGrow={1}>
        <Flex width="300px" style={{backgroundColor: 'red' }}><SideMenu /></Flex>
        <Flex flexGrow={1} minHeight="100vh" style={{ backgroundColor: 'black' }}>Derp</Flex>
      </Flex>
    </Flex>
  )
}
