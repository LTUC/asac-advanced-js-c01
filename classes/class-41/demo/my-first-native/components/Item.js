import { View, Text } from "react-native";


export default function Item(props) {
    return (
        
            <Text key={props.title} onPress={() => props.onDelete(props.title)}>
                {props.title}
            </Text>
      
    )
}