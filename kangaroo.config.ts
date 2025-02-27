import { defineConfig } from './src/main/defineConfig';

export default defineConfig({
  appId: 'org.visvere-attestations',
  productName: 'Visvere Attestations',
  version: '0.0.5',
  macOSCodeSigning: false,
  windowsEVCodeSigning: false,
  fallbackToIndexHtml: true,
  autoUpdates: true,
  systray: true,
  passwordMode: 'no-password',
  bins: {
    holochain: {
      version: '0.4.0-rc.0',
      sha256: {
        'x86_64-unknown-linux-gnu':
          '72afacb5827e98de6d519ebd512a0b8406e93b13bc008cf30f9fc45fcb786eb8',
        'x86_64-pc-windows-msvc.exe':
          '16db39df6d87549266196327a8790ee269ba2bde56583e028e49d59f28aed505',
        'x86_64-apple-darwin': '95ba72ac620468a35ae7f5de000cc0c3736708e2de62dfd70c522d07e007b931',
        'aarch64-apple-darwin': '7a6da07aa73e457464b0ee4a0ec64f1828b82d1c19242faf20e5487143680b56',
      },
    },
    lair: {
      version: '0.5.2',
      sha256: {
        'x86_64-unknown-linux-gnu':
          '5fa1b2ece8896208c313c01b531d99d861e156de8f2d2ddc2709a82bc2533550',
        'x86_64-pc-windows-msvc.exe':
          '42a4a6eaf3cd1cb52bdc6512b392e874467bc6d7f5763b89a303767a9d979ad9',
        'x86_64-apple-darwin': '22cadfb73435ce0c97e6581123b4fc3fe9ff0a5ef5b04eed3b4895a84f5cbb79',
        'aarch64-apple-darwin': '246bb1090e9e875babe056df413f75ad8dd1ba4971f293dd5e94ea05ea364aa0',
      },
    },
  },
});
