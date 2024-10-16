# Holochain-Kangaroo Electron

> PREREQUISITE: [Install and package Visible-Verication]([https://developer.holochain.org/docs/install/](https://github.com/Visible-Verification/visver)).

# Instructions to create a build of Visible Verification using Kangaroo-electron

1. Inside your terminal, clone this repo

```
git clone https://github.com/Visible-Verification/kangaroo-build.git
```

2. Change directory into it

```
cd kangaroo-build
```

3. Setup and Install dependencies

```
npm setup
npm install
```

4. Add the .webhapp file to the kangaroo pouch
- Open up kangaroo-build repo in your file explorer
- Drag the packaged `visible-verification.webhapp` file from the Visible-Verification repo into the `pouch` directory. 
The `visible-verification.webhapp` file should be located in `/workdir` of the visible-verifacation repo 

5. To test the build locally, run:

```
npm run dev
```

6. To build the app locally for your platform, run the build command for your respecive platform:

```
yarn build:linux

# or
yarn build:mac

# or
yarn build:windows
```

# Getting latest changes:

To retreive the latest version of kangaroo-build run:

```
git pull
npm install
```



# Details for Blue

## Code Signing

### macOS

To use code signing on macOS for your release in CI you will have to

1. Set the `macOSCodeSigning` field to `true` in `kangaroo.config.ts`
2. Add the following secrets to your github repository with the appropriate values:
- `APPLE_DEV_IDENTITY`
- `APPLE_ID_EMAIL`
- `APPLE_ID_PASSWORD`
- `APPLE_TEAM_ID`


### Windows

If you want to code sign your app with an EV certificate, you can follow [this guide](https://melatonin.dev/blog/how-to-code-sign-windows-installers-with-an-ev-cert-on-github-actions/) to get your EV certificate hosted on Azure Key Vault and then

1. Set the `windowsEVCodeSigning` field to `true` in `kangaroo.config.ts`
2. Add all the necessary secrets to the repository:
- `AZURE_KEY_VAULT_URI`
- `AZURE_CERT_NAME`
- `AZURE_TENANT_ID`
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`


## Permissions on macOS

Access to things like camera and microphone on macOS require special permissions to be set in the .plist file. For this, uncomment the corresponding permissions in `./templates/electron-builder-template.yml` as needed.


