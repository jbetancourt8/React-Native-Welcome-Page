import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

class Input extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>{this.props.label}</Text>
        <TextInput
          style={styles.inputStyle}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
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
};

export default Input;
