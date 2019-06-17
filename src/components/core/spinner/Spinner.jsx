import React from 'react'
import { FadeIn } from 'animate-css-styled-components'
import Flex from 'flexbox-react'
import { useSpinner } from 'hooks/core/use-spinner/useSpinner'
import { FixedPosition } from './styled'


export function Spinner () {
  const { showSpinner } = useSpinner()

  if (!showSpinner) {
    return null
  }

  return (
    <FixedPosition>
      <Flex flexGrow={1} justifyContent="center" marginTop="50px">
        <FadeIn>
          <div>SPINNER HERE</div>
        </FadeIn>
      </Flex>
    </FixedPosition>
  )
}