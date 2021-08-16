import { Box, Button, Flex, Grid, GridItem, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import GridWrapper from '../../layouts/GridWrapper'
import Butler from './Butler'

const Sidekick = () => {
    return (
        <Box bg="blackAlpha.900" h="100vh" >
            < GridWrapper columns={3} >

                <Flex align="center" justify="center" flexDirection="column" h="100vh" >
                    <>
                        <Heading as="h3" fontSize="270px" color="white" >100,000</Heading>
                        <Heading as="h4" fontSize="4xl" mt="4" color="white" textAlign="center" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
                    </>
                    <Grid
                        // h="md"
                        mt="12"
                        w="100%"
                        templateColumns={[`repeat(${3}, 1fr)`, `repeat(${1 + 2}, 1fr)`]}
                        templateRows={[`repeat(${1}, 1fr)`, `repeat(${2}, 1fr)`]}
                        pb="10"

                    >
                        <GridItem colSpan={[0, 1]} p="4" >

                            <Butler title={'We serve'} stat={'50,000 people'} />
                        </GridItem>
                        <GridItem colSpan={1} p="4" >

                            <Butler title={'In'} stat={'30 different countries'} />

                        </GridItem>
                        <GridItem colSpan={[0, 1]} p="4">


                            <Butler title={'Who speak'} stat={'100 different languages'} />

                        </GridItem>
                        <GridItem colSpan={[0, 1]} p="4" >

                            <Butler title={'We serve'} stat={'50,000 people'} />
                        </GridItem>
                        <GridItem colSpan={1} p="4" >

                            <Butler title={'In'} stat={'30 different countries'} />

                        </GridItem>
                        <GridItem colSpan={[0, 1]} p="4">


                            <Butler title={'Who speak'} stat={'100 different languages'} />

                        </GridItem>
                    </Grid>



                </Flex>
            </GridWrapper ></Box >
    )
}

export default Sidekick
