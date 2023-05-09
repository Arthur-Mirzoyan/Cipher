import React, { useState } from 'react';
import { Text, TextInput, View, Clipboard, Alert, ScrollView, StatusBar } from "react-native";
import { styles } from './style';
import { previousLetter, superMixAnti } from '../../helpers/decipher';
import { FontAwesome5 } from '@expo/vector-icons';

export function DecryptionScreen({ navigation, route }) {
    const [input, setInput] = useState("");
    const [spacing, setSpacing] = useState('1');
    let type = route.params.type;

    return (
        <View style={styles.main}>
            {
                type != 'super' && (
                    <View style={styles.spacingBox}>
                        <Text style={styles.spacingText}>Spacing number :</Text>
                        <TextInput
                            style={styles.spacing}
                            onChangeText={text => {
                                if (text.trim() != '' && text.toUpperCase() === text.toLowerCase()) {
                                    setSpacing(text);
                                }
                            }}
                        />
                    </View>
                )
            }
            <StatusBar backgroundColor='#101010' />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    value={input}
                    onChangeText={text => setInput(text)}
                    onEndEditing={e => setInput(e.nativeEvent.text.trim())}
                />
                <FontAwesome5
                    name="clipboard"
                    size={30}
                    color="#2c75ff"
                    style={styles.copy}
                    onPress={() => {
                        Clipboard.setString(type == 'super' ? superMixAnti(input, spacing) : previousLetter(input, spacing));
                        Alert.alert(
                            'Success',
                            'Text copied successfully.',
                            [{ text: 'Home', onPress: () => navigation.navigate('Home') }],
                            { cancelable: true },
                        )
                    }}
                />
                <Text multiline={true} style={styles.output}>{type == 'super' ? superMixAnti(input, spacing) : previousLetter(input, spacing)}</Text>
            </ScrollView>
        </View>
    )
}