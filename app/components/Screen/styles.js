import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },

})  

export default styles ;