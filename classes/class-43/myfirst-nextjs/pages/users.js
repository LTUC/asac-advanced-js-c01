import { Stack, HStack, VStack ,Box, Text} from '@chakra-ui/react'

export default function users(props) {
    return (
        <div>
            <VStack
                
                spacing={4}
                align='stretch'
            >
                {
                    props.users.map(user=>{
                        return(
                            <Box>
                                <Text>{user.name}</Text>
                            </Box>
                        )
                    })
                }
            </VStack>
        </div>


    )
}

export async function getStaticProps() {
    let usersData = await fetch('https://jsonplaceholder.typicode.com/users');
    let results = await usersData.json();
    return {
        props: { users: results }, // will be passed to the page component as props
    }
}