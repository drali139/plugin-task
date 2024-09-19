import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ali.testOneSignalNotifications',
  appName: 'plugins',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  ios: {
    // ... additional configuration
    handleApplicationNotifications: false
  }
};

export default config;
