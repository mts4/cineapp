import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'

// Organism
import BackNavigate from '../../organism/BackNavigate'
import SocialSignLogin from '../../organism/SocialSignLogin'
import LogInForm from '../../organism/LogInForm'

const LogInTemplate = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <BackNavigate text='Login' />
        <SocialSignLogin method='login' />
        <LogInForm />
      </View>
    </SafeAreaView>
  )
}

export default LogInTemplate

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 20,
  },
})
