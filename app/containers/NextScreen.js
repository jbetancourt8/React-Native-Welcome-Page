import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input';

class NextScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  submitButtonPressed() {
    console.log('First Name: ' + this.state.firstName);
    console.log('Second Name: ' + this.state.lastName);
    console.log('Email Address: ' + this.state.email);
  }

  onFirstNameChanged(text){
    this.setState({
      firstName: text
    });
  }

  render() {
    return(
      <View style={{ flex: 1 }}>

        <Header
          button={'Back'}
          onPress={Actions.pop}
          title={'Next Screen'} />

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Input
            label={'First Name:'}
            value={this.state.firstName}
            onChangeText={this.onFirstNameChanged.bind(this)}
          />

          <Input
            label={'Last Name:'}
            value={this.state.lastName}
            onChangeText={(text) => this.setState({lastName: text})}
          />

          <Input
            label={'Email Address:'}
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>

        <View style={styles.footerStyle}>
          <Button text={'Submit'} onPress={this.submitButtonPressed.bind(this)} />
        </View>

      </View>
    );
  }
}

const styles = {
  inputStyle: {
    flexDirection: 'row',
    height: 40,
    margin: 5,
    padding: 5,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5
  },
  footerStyle:{
    flex: 1
  }
};

export default NextScreen;
