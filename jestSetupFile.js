export * from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: key => key }),
}));

jest.mock('expo-router/src/testing-library/mocks', () => {
    const originalModule = jest.requireActual('expo-router/src/testing-library/mocks');
  
    return {
      ...originalModule,
      initialUrlRef: {}
    };
  });

  jest.mock('expo-linking', () => {
    const module = {
        ...jest.requireActual('expo-linking'),
        createURL: jest.fn(),
    };

    return module;
});
jest.mock('@react-navigation/native', () => {
    return {
      ...jest.requireActual('@react-navigation/native'),
      useFocusEffect: jest.fn(() => ({})),
    };
  });