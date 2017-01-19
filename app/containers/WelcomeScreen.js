import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';

const { height, _ } = Dimensions.get('window');

class WelcomeScreen extends Component {
  buttonPressed(){
    console.log('Button Pressed');
    Actions.nextscreen();
  }

  render() {
    const swiperHeight = height - 60;
    
    return (
      <View style={{ flex: 1 }}>

        <Swiper showsButtons={true}
          dot={<View style={{backgroundColor:'white', width: 13, height: 13,
            borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
          activeDot={<View style={{backgroundColor: 'black', width: 13, height: 13,
            borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          height={swiperHeight}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Page 1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Page 2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Page 3</Text>
          </View>
        </Swiper>

        <Button text={'Next'} onPress={this.buttonPressed.bind(this)} />

      </View>
    );
  }
}

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
};

export default WelcomeScreen;
