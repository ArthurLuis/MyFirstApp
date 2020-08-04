import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button:{
        width: "100%",
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
    },
    title:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: '#fff',
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    
})  

export default styles ;