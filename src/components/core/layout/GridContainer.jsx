import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'


export const FullWidthGrid = styled(Grid)`
  flexGrow: 1;
`

export function GridContainer ({ children, spacing }) {
  const gridSpacing = spacing || 3

  return (
    <FullWidthGrid container spacing={gridSpacing}>
      {children}
    </FullWidthGrid>
  )
}
