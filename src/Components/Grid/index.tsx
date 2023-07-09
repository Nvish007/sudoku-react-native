/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput} from 'react-native';
import styles from './styles';

interface GridProps {
  sudokuData: number[][];
  onChange: (newData: number[][]) => void;
}

const Grid: React.FC<GridProps> = ({sudokuData, onChange}) => {
  const handleChange = (value: string, row: number, col: number) => {
    const newData = [...sudokuData];
    newData[row][col] = Number(value);
    onChange(newData);
  };

  return (
    <View style={styles.gridContainer}>
      {sudokuData.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((cell, colIndex) => (
            <TextInput
              key={colIndex}
              style={styles.cell}
              keyboardType="numeric"
              maxLength={1}
              value={cell === 0 ? '' : String(cell)}
              onChangeText={text => handleChange(text, rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;
