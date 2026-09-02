import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';

export default function SettingsScreen() {
  function handleOpenWeb() {
    Linking.openURL('http://localhost:3000').catch(() => {
      Alert.alert('Error', 'Could not open web app');
    });
  }

  function handleOpenDeepLink(url: string) {
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', `Could not open ${url}`);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Test Deep Links</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleOpenDeepLink('moviebox://movie/550')}
      >
        <Text style={styles.buttonText}>moviebox://movie/550</Text>
        <Text style={styles.buttonSubtext}>Fight Club</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleOpenDeepLink('moviebox://movie/238')}
      >
        <Text style={styles.buttonText}>moviebox://movie/238</Text>
        <Text style={styles.buttonSubtext}>The Godfather</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleOpenDeepLink('moviebox://search?q=batman')}
      >
        <Text style={styles.buttonText}>moviebox://search?q=batman</Text>
        <Text style={styles.buttonSubtext}>Search for Batman</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleOpenDeepLink('moviebox://favorites')}
      >
        <Text style={styles.buttonText}>moviebox://favorites</Text>
        <Text style={styles.buttonSubtext}>View favorites</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Web App</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenWeb}>
        <Text style={styles.buttonText}>Open Web App</Text>
        <Text style={styles.buttonSubtext}>http://localhost:3000</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>About</Text>
      <View style={styles.infoRow}>
        <Text style={styles.label}>App Name</Text>
        <Text style={styles.value}>MovieBox</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Deep Link Scheme</Text>
        <Text style={styles.value}>moviebox://</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Version</Text>
        <Text style={styles.value}>1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 16,
  },
  sectionTitle: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  buttonSubtext: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#1F2937',
    marginVertical: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1F2937',
  },
  label: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  value: {
    color: 'white',
    fontSize: 14,
  },
});
