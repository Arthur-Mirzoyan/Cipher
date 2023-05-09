import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010'
    },
    spacing: {
        padding: 10,
        borderColor: '#8F00FF',
        borderWidth: 2,
        color: '#2c75ff',
        fontSize: 20,
        flexWrap: 'wrap',
        width: '30%',
        marginHorizontal: 15
    },
    spacingText: {
        color: 'white',
        fontSize: 20
    },
    spacingBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderColor: '#8F00FF',
        borderWidth: 2,
        color: '#2c75ff',
        fontSize: 20,
        flexWrap: 'wrap',
        minWidth: '80%',
        maxWidth: '90%'
    },
    output: {
        fontSize: 20,
        color: 'white',
        margin: 15,
        marginBottom: 50
    },
    copy: {
        margin: 10
    },
    scrollView: {
        marginTop: 50,
        alignItems: 'center'
    }
})