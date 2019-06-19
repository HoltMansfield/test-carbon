import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'


export const FullWidthGrid = styled(Grid)`
  flexGrow: 1;
`

export function GridContainer ({ children }) {
  return (
    <FullWidthGrid container spacing={0}>
      {children}
    </FullWidthGrid>
  )
}
