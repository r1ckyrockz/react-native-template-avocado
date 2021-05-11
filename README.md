# :avocado: React Native Template Avocado

<p>
  <a href="https://travis-ci.org/react-native-community/react-native-template-typescript">
    <img alt="Build Status" src="https://img.shields.io/travis/react-native-community/react-native-template-typescript.svg" target="_blank" />
  </a>
  <a href="https://github.com/r1ckyrockz/react-native-template-avocado#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/r1ckyrockz/react-native-template-avocado/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/r1ckyrockz/react-native-template-avocado/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with TypeScript.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Minimal additional dependencies
- ... more to come

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template react-native-template-avocado
```

## Generate Bootsplash
tbd https://github.com/zoontek/react-native-bootsplash

## Generate Configuration File
https://github.com/luggit/react-native-config
https://pasindu-dilshan.medium.com/managing-configurable-versioning-in-react-native-876ef4b31c23


## Secure Values
https://github.com/emeraldsanto/react-native-encrypted-storage

There seems to be some confusion around the maximum size of items that can be stored, especially on iOS. According to this [StackOverflow question](https://stackoverflow.com/questions/13488793/is-there-any-length-limit-of-string-stored-in-keychain), the actual Keychain limit is much lower than what it should theoretically be. This does not affect Android as the `EncryptedSharedPreferences` API relies on the phone's storage, via XML files.

### Usage with older versions of React Native

#### e.g. `react-native@0.62.x` is currently not supported!

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
