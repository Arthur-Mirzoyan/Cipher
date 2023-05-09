import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010'
    },
    encryption: {
        borderColor: '#8F00FF',
        borderRightWidth: 2,
        borderBottomWidth: 2,
        padding: 15,
        margin: 20,
        shadowColor: '#0439b3',
        elevation: 2
    },
    decryption: {
        borderColor: '#8F00FF',
        borderLeftWidth: 2,
        borderTopWidth: 2,
        padding: 15,
        margin: 20,
        shadowColor: '#0439b3',
        elevation: 2
    },
    text: {
        fontSize: 30,
        color: '#0439b3'
    },
    type: {
        borderColor: '#0439b3',
        borderWidth: 1,
        padding: 15,
        margin: 20,
        width: 75,
    },
    chosen: {
        borderColor: '#0000FF',
        borderWidth: 2,
        padding: 15,
        margin: 20,
        width: 75,
    },
    typeText: {
        color: '#59cae8',
        textAlign: 'center'
    },
    typeBox: {
        flexDirection: 'row'
    }
})