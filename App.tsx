import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Alert} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  const [username, setUsername] = useState('');
  const [showGame, setShowGame] = useState(false);

  const handlePlay = () => {
    if (username.trim() !== '') {
      setShowGame(true);
    } else {
      Alert.alert('Please enter your name!');
    }
  };

  if (!showGame) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={username}
          onChangeText={setUsername}
        />
        <Button title="Play" onPress={handlePlay} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HomeScreen name={username} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default App;
