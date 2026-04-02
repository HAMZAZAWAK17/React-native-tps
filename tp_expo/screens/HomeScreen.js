import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';
import AppButton from '../components/AppButton';

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    {
      id: 'tp-props',
      title: '📦 TP Props',
      subtitle: 'Passing data between components',
      screen: 'TPProps',
      variant: 'primary',
    },
    {
      id: 'tp-styling',
      title: '🎨 TP Styling',
      subtitle: 'StyleSheet & shared styles',
      screen: 'TPStyling',
      variant: 'secondary',
    },
    {
      id: 'counter-stateful',
      title: '🔢 Counter Stateful',
      subtitle: 'useState inside the component',
      screen: 'CounterStateful',
      variant: 'success',
    },
    {
      id: 'counter-stateless',
      title: '⚡ Counter Stateless',
      subtitle: 'Props-driven stateless UI',
      screen: 'CounterStateless',
      variant: 'warning',
    },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTag}>REACT NATIVE</Text>
          <Text style={styles.headerTitle}>TP Expo App</Text>
          <Text style={styles.headerSubtitle}>
            Explore React Native concepts through interactive demos
          </Text>
        </View>

        {/* Menu Cards */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <View key={item.id} style={styles.menuCard}>
              <View style={styles.menuCardContent}>
                <Text style={styles.menuCardTitle}>{item.title}</Text>
                <Text style={styles.menuCardSubtitle}>{item.subtitle}</Text>
              </View>
              <AppButton
                title="Open"
                onPress={() => navigation.navigate(item.screen)}
                variant={item.variant}
                size="small"
                style={styles.openBtn}
              />
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.footer}>S2 React Native TP · Expo</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 36,
  },
  headerTag: {
    fontSize: 11,
    letterSpacing: 3,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    lineHeight: 22,
  },
  menuContainer: {
    gap: 12,
  },
  menuCard: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  menuCardContent: {
    flex: 1,
    marginRight: 12,
  },
  menuCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 4,
  },
  menuCardSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.45)',
  },
  openBtn: {
    width: 70,
    marginVertical: 0,
  },
  footer: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.2)',
    fontSize: 12,
    marginTop: 32,
    letterSpacing: 1,
  },
});

export default HomeScreen;
