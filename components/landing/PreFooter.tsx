import { Button, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const PreFooter = () => {
    return (
        <Grid templateColumns="repeat(5,1fr)" bg="gray.900">
            <GridItem colSpan={1} />
            <GridItem colSpan={3}>

                <Flex align="center" justify="center" p="10%" flexDir="column" h="100%">
                    <Heading color="white" w="lg" textAlign="center"  >
                        Hire and Manage <br />Remote Talent
                    </Heading>
                    <Text color="whiteAlpha.700" mt="4" w="md" textAlign="center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ab commodi ipsum numquam architecto eius atque   placeat?</Text>
                    <Button size="lg" variant="outline" mt="16" bg="blue.400" color="white" border="none" borderRadius="none" >
                        Hire Talent
                    </Button>


                </Flex>

            </GridItem>
            <GridItem colSpan={1} />
        </Grid>
    )
}

export default PreFooter
