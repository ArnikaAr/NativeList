import * as React from 'react';
import { Switch } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const ThemeSwitcher = () => {
    const theme = useTheme();

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default ThemeSwitcher;