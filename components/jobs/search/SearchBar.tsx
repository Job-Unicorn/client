import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import GridWrapper from '../../../layouts/GridWrapper'

const SearchBar = () => {
  return (
    <Box  p="8" borderBottomColor="gray.200" borderBottomWidth="thin">
      <GridWrapper columns={3} >
        <Input placeholder="Search" />
      </GridWrapper>
    </Box>
  )
}

export default SearchBar
