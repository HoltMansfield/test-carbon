import React from 'react'
import Flex from 'flexbox-react'
import { Header, HeaderName, HeaderGlobalAction, HeaderGlobalBar } from 'carbon-components-react'
import Search20 from '@carbon/icons-react/es/user--avatar/16'
import { useScreenSizes } from 'hooks/core/use-screen-sizes/useScreenSizes'
// import { } from './styled'


export function AppBar () {
  const { isLargeDesktop } = useScreenSizes()

  return (
    <Flex flexGrow={1}>
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#">Schedule 1</HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
              <Search20/>
            </HeaderGlobalAction>
          </HeaderGlobalBar>
      </Header>
    </Flex>
  )
}
