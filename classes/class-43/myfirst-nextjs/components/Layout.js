import { Center } from '@chakra-ui/react';
import Nav from './Nav';

export default function Layout(props) {
    return (
        <div>
            <Nav />
            <Center bg='tomato' h='400px' color='white'>
                {props.children}
            </Center>
        </div>
    )
}
