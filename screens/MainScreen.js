import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import TableRow from '../components/TableRow';
import { FontAwesome5 } from '@expo/vector-icons';


export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: [
                { id: 1, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 2, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 3, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 4, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 5, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 6, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 7, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 8, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
                { id: 9, wilaya: 'djlfa', contaminated: '5', suspected: '100' },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0, backgroundColor: '#0573A0' }}>
                    <TouchableOpacity style={{ alignItems: 'flex-start', margin: 16, marginTop: 30 }} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                    {this.state.stats.map(stats => (
                        <TableRow
                            key={stats.id}
                            wilaya={stats.wilaya}
                            contaminated={stats.contaminated}
                            suspected={stats.suspected}
                        />
                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    tabContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',

    }
})