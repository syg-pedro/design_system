import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'br.com.sygecom.designsystem',
  appName: 'Sygecom DS',
  webDir: '.output/public',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    StatusBar: {
      style: 'default',
      backgroundColor: '#ffffff',
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
  },
}

export default config
