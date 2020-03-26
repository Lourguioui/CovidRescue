
 
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-generator';
 
import {
    
    StyleSheet,
    View,
    TextInput
} from 'react-native';
 
export default class QrCode extends Component {
  state = {
    text: '213540',
  };
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='black'
          fgColor='white'/>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});




// //This is an example code to generate QR code//
// import React, { Component } from 'react';
// //import react in our code.
// import { StyleSheet, View, TextInput, TouchableOpacity, Text,} from 'react-native';
// // import all basic components
// import QRCode from 'react-native-qrcode';
// //import QRCode

// class QrCode extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputValue: '',
//       // Default Value of the TextInput
//       valueForQRCode: '',
//       // Default value for the QR Code
//     };
//   }

//   getTextInputValue = () => {
//     // Function to get the value from input
//     // and Setting the value to the QRCode
//     this.setState({ valueForQRCode: this.state.inputValue });
//   };

//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <QRCode
//           value={this.state.valueForQRCode}
//           //Setting the value of QRCode
//           size={250}
//           //Size of QRCode
//           bgColor="#000"
//           //Backgroun Color of QRCode
//           fgColor="#fff"
//           //Front Color of QRCode
//         />
//         <TextInput
//           // Input to get the value to set on QRCode
//           style={styles.TextInputStyle}
//           onChangeText={text => this.setState({ inputValue: text })}
//           underlineColorAndroid="transparent"
//           placeholder="Enter text to Generate QR Code"
//         />
//         <TouchableOpacity
//           onPress={this.getTextInputValue}
//           activeOpacity={0.7}
//           style={styles.button}>
//           <Text style={styles.TextStyle}> Generate QR Code </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default App;
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     margin: 10,
//     alignItems: 'center',
//     paddingTop: 40,
//   },

//   TextInputStyle: {
//     width: '100%',
//     height: 40,
//     marginTop: 20,
//     borderWidth: 1,
//     textAlign: 'center',
//   },

//   button: {
//     width: '100%',
//     paddingTop: 8,
//     marginTop: 10,
//     paddingBottom: 8,
//     backgroundColor: '#F44336',
//     marginBottom: 20,
//   },

//   TextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//   },
// });









// import React from 'react';

// import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';

// import QRCode  from 'react-native-custom-qr-codes-expo';


// export default class QrCode extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Account: {
//                 phoneNumber: '',
//                 firstName: '',
//                 lastName: '',
//                 wilaya: '',
//                 city: '',
//             }

//         }
//     }
//     componentDidMount() {
//         this._loadingAccount().done();
//     }


//     _loadingAccount = async () => {
//         var Account = await AsyncStorage.getItem('account');
//         this.setState({ Account: Account });
//     }


//     render() {
//         return (
//             <View style={styles.container}>
//                 <QRCode content='213540526634' style={styles.qrCode}/>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         flexDirection:'column',
//         justifyContent:'center',
//     },
//     qrCode:{
//         flex:1,
//         justifyContent:'center',
//         alignContent:'center',
//         alignItems:'center'
//     }
// })