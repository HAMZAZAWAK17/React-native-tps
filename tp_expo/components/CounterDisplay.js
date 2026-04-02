import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';

/**
 * CounterDisplay - A stateless component
 * Receives: count, onIncrement, onDecrement, onReset via props
 */
const CounterDisplay = ({ count, onIncrement, onDecrement, onReset, label }) => {
  const getCountColor = () => {
    if (count > 0) return colors.success;
    if (count < 0) return colors.danger;
    return colors.text;
  };

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.countBox}>
        <Text style={[styles.countText, { color: getCountColor() }]}>{count}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.btnWrapper}>
          <Text style={[styles.ctrlBtn, styles.decrementBtn]} onPress={onDecrement}>
            −
          </Text>
        </View>

        <View style={styles.btnWrapper}>
          <Text style={[styles.ctrlBtn, styles.incrementBtn]} onPress={onIncrement}>
            +
          </Text>
        </View>
      </View>

      <Text style={styles.resetBtn} onPress={onReset}>
        ↺ Reset
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textLight,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  countBox: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 28,
  },
  countText: {
    fontSize: 56,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  btnWrapper: {
    width: 64,
    height: 64,
  },
  ctrlBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    textAlign: 'center',
    lineHeight: 64,
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  decrementBtn: {
    backgroundColor: colors.danger,
  },
  incrementBtn: {
    backgroundColor: colors.success,
  },
  resetBtn: {
    fontSize: 15,
    color: colors.textLight,
    fontWeight: '600',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 24,
    overflow: 'hidden',
  },
});

export default CounterDisplay;
