import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import FloattingActionButton from '../components/FloattingActionButton';
import { FontAwesome5 } from '@expo/vector-icons';



export default class Advices extends React.Component {
    constructor(props) {
        super(props);
        this._navigate = this._navigate.bind(this);
        this.state = {
            scannerOpened: false,
        }
    }
    _navigate() {
        this.props.navigation.navigate("QrScanner");
    }
    _openScanner() {
        const scannerOpened = !this.state.scannerOpened;
        this.setState({ scannerOpened });
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 0, backgroundColor: '#0573A0' }}>
                    <TouchableOpacity style={{ alignItems: 'flex-start', margin: 16, marginTop: 30 }} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>

                </View>
                <ScrollView style={styles.container}>

                    <View style={styles.logo}>
                        <Image source={require("../assets/Covid_logo.png")} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Conseils des spécialists
                        </Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardTitleContainer}>
                            <Text style={styles.cardTitle}>
                                ما هو فيروس كورونا؟
                                </Text>
                        </View>
                        <Text style={styles.textContainer}>
                            فيروس كورونا الجديد 2019 (2019-nCoV) هو فيروس جديد يسبب أمراض الجهاز التنفسي لدى البشر ويمكن أن ينتشر من شخص لآخر. تم التعرف على الفيروس لأول مرة خلال التحقيق في وباء في ووهان ، الصين.
                        </Text>
                        <View style={styles.cardTitleContainer}>
                            <Text style={styles.cardTitle}>
                            هل يمكن أن ينتقل الفيروس التاجي عن طريق الماء؟
                                </Text>
                        </View>
                        <Text style={styles.textContainer}>
                        حتى الآن، لم يتم الإبلاغ عن أي تلوث بالمياه.
                        </Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardTitleContainer}>
                            <Text style={styles.cardTitle}>
                            ما هي الأعراض لدى شخص مصاب بفيروس كورونا الجديد؟
                                </Text>
                        </View>
                        <Text style={styles.textContainer}>
                        الأعراض الرئيسية هي الحمى والسعال أو ضيق في التنفس. في الحالات الأكثر شدة، قد يصاب المريض بضيق تنفسي حاد أو فشل كلوي حاد أو حتى فشل متعدد الحشوات يمكن أن يؤدي إلى الوفاة.
                        </Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardTitleContainer}>
                            <Text style={styles.cardTitle}>
                            احم نفسك من المرض
                                </Text>
                        </View>
                        <Text style={styles.textContainer}>
                        تجنب المخالطة اللصقية مع الأشخاص المرضى و تجنب التعامل المباشر مع حيوانات المزرعة دون استخدام وسائل الوقاية الشخصية و تجنب البصق في الأماكن العامة , ولمس العين او الأنف أو الفم.
                        </Text>
                    </View>

                </ScrollView>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('QrCodeScanner')}
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                        position: 'absolute',
                        bottom: 10,
                        right: '3%',

                        height: 60,

                        borderRadius: 100,
                    }}
                >
                    <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#008AC3', '#02A3E5', '#00B5FF']} style={styles.gradient} >
                        <Image source={require("../assets/Qr.png")} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    scrollContainer: {
        flex: 1,

        flexDirection: 'column',
        height: undefined,
        alignItems: 'center'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: "500"
    },
    logoContainer: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',

    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -35
    },
    title: {
        textAlign: 'center',
        color: '#0573A0',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto',


    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        shadowOffset: { width: 5, height: 5, },
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.7,
        paddingVertical: 30,
        paddingHorizontal: 10,
        shadowRadius: 1,
        elevation: 10,
        marginBottom: 20,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    cardTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomColor: '#0000000F',
        borderBottomWidth: 1,
    },
    cardTitle: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 'bold',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        fontSize:17
    }

})

