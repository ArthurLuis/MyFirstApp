import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: "hidden",
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 10,
    },
    subTitle: {
        color: colors.secondary,
        marginBottom: 10,
        fontWeight: "bold"
    },
})  

export default styles ;