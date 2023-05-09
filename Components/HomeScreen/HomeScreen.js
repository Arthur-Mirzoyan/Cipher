import React, { useState } from 'react';
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";

export function HomeScreen({ navigation }) {
    const [type, setType] = useState('simple');

    return (
        <View style={styles.main}>

            <View style={styles.typeBox}>
                <Pressable
                    style={type == 'simple' ? styles.chosen : styles.type}
                    onPress={() => setType('simple')}
                >
                    <Text style={styles.typeText}>Caesar</Text>
                </Pressable>
                <Pressable
                    style={type != 'simple' ? styles.chosen : styles.type}
                    onPress={() => setType('super')}
                >
                    <Text style={styles.typeText}>Super</Text>
                </Pressable>
            </View>

            <Pressable style={styles.encryption} onPress={() => navigation.navigate('Encryption', { type: type })}>
                <Text style={styles.text}>Encryption</Text>
            </Pressable>
            <Pressable style={styles.decryption} onPress={() => navigation.navigate('Decryption', { type: type })}>
                <Text style={styles.text}>Decryption</Text>
            </Pressable>
        </View>
    )
}