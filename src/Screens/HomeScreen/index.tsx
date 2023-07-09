/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, Button, Alert} from 'react-native';
import Grid from '../../Components/Grid';
import styles from './styles';

interface Home {
    name: string
}
const HomeScreen: React.FC<Home> = ({name}) => {
  const [sudokuData, setSudokuData] = useState([
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
  ]);

  const solveSudoku = () => {
    const isValid = (board: any, row: any, col: any, num: any) => {
      // Check row and column
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) {
          return false;
        }
      }

      // Check the 3x3 sub-grid
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }

      return true;
    };

    const solve = (board: any) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(board, row, col, num)) {
                board[row][col] = num;
                if (solve(board)) {
                  return true;
                }
                board[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    };

    const clonedData = JSON.parse(JSON.stringify(sudokuData));
    if (solve(clonedData)) {
      setSudokuData(clonedData);
      Alert.alert('Sudoku solved!');
    } else {
      Alert.alert('Unable to solve Sudoku puzzle!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Welcome ${name}`}</Text>
      <Grid sudokuData={sudokuData} onChange={setSudokuData} />
      <Button title="Solve Sudoku" onPress={solveSudoku} />
    </View>
  );
};


export default HomeScreen;
