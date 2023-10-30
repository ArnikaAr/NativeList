import { Stack } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';
import i18n from "../src/translations/index";
import { I18nextProvider } from "react-i18next";


export default function RootLayout() {
    return (
        <I18nextProvider i18n={i18n}>
            <PaperProvider>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </PaperProvider>
        </I18nextProvider>
    );
}