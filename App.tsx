/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

interface ICalculatorItem {
  title: string;
  value: string;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const currentBtnStyle = (value: string) => value === '0' ? styles.buttonCircleZero : styles.buttonCircl  

  const calculatorData: ICalculatorItem[] = [
    {
      title: 'C',
      value: 'clear',
    },
    {
      title: 'A',
      value: 'clearAll',
    },
    {
      title: '%',
      value: 'percent',
    },
    {
      title: '/',
      value: 'divide',
    },
    {
      title: '7',
      value: '7',
    },
    {
      title: '8',
      value: '8',
    },
    {
      title: '9',
      value: '9',
    },
    {
      title: 'x',
      value: 'multiple',
    },
    {
      title: '4',
      value: '4',
    },
    {
      title: '5',
      value: '5',
    },
    {
      title: '6',
      value: '6',
    },
    {
      title: '-',
      value: 'minus',
    },
    {
      title: '1',
      value: '1',
    },
    {
      title: '2',
      value: '2',
    },
    {
      title: '3',
      value: '3',
    },
    {
      title: '+',
      value: 'plus',
    },
    {
      title: '0',
      value: '0',
    },
    {
      title: '.',
      value: 'point',
    },
    {
      title: '=',
      value: 'equality',
    },
  ];

  const listBtn = () => {
    return calculatorData.map(btn => {
      return (
        <View
          style={[
            btn.value === '0' ? styles.buttonCircleZero : styles.buttonCircle,
          ]}
          key={btn.value}>
          <Text style={{color: 'white', fontSize: 20}}>{btn.title}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.flex}>{listBtn()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonCircle: {
    height: 88,
    width: 84,
    borderRadius: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFF',
    margin: 5,
  },
  buttonCircleZero: {
    height: 88,
    width: 84 * 2,
    borderRadius: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFF',
    margin: 5,
  },

  flex: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
