import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const GridWrapper = ({ children, columns }) => {
  return (
    <Grid
      templateColumns={[`repeat(${columns}, 1fr)`, `repeat(${columns + 2}, 1fr)`]}

    >
      <GridItem colSpan={[0, 1]}></GridItem>
      <GridItem colSpan={columns}>{children}</GridItem>
      <GridItem colSpan={[0, 1]}></GridItem>
    </Grid>
  )
}

export default GridWrapper
