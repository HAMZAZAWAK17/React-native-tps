import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../styles/globalStyles';

const AppButton = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
}) => {
  const variantStyles = {
    primary: { backgroundColor: colors.primary },
    secondary: { backgroundColor: colors.secondary },
    success: { backgroundColor: colors.success },
    danger: { backgroundColor: colors.danger },
    warning: { backgroundColor: colors.warning },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
    },
    dark: { backgroundColor: colors.dark },
  };

  const sizeStyles = {
    small: { paddingVertical: 8, paddingHorizontal: 16 },
    medium: { paddingVertical: 13, paddingHorizontal: 28 },
    large: { paddingVertical: 18, paddingHorizontal: 40 },
  };

  const textColors = {
    primary: colors.white,
    secondary: colors.white,
    success: colors.white,
    danger: colors.white,
    warning: colors.white,
    outline: colors.primary,
    dark: colors.white,
  };

  const textSizes = {
    small: 13,
    medium: 15,
    large: 17,
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyles[variant],
        sizeStyles[size],
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={textColors[variant]} />
      ) : (
        <Text
          style={[
            styles.text,
            { color: textColors[variant], fontSize: textSizes[size] },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 6,
    width: '100%',
  },
  text: {
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default AppButton;
