import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Agenda24',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
