import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default function QrCodeScanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [openScanner, setOpernScanner] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    if (!openScanner) {
        return (
            <View>
                <TouchableOpacity onPress={setOpernScanner(true)} style={styles.button}>
                    <Text>
                        Ouvrire le scanneur
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#00749e',
    },
})