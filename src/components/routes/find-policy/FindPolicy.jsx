import React from 'react'
import Grid from '@material-ui/core/Grid'
import { GridContainer } from 'components'
// import { useFindPolicyLogic } from './useFindPolicyLogic'
// import { } from './styled'


export default function FindPolicy () {
  // const { someValue } = useFindPolicyLogic()

  return (
    <GridContainer>
      <Grid item xs={12} lg={6}>Full row</Grid>
      <Grid item xs={12} lg={6}>Full row</Grid>
    </GridContainer>
  )
}
