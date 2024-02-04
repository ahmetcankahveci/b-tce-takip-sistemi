import { Switch, Tooltip } from '@mui/material';

const ThemeSwitcher = ({ darkMode, handleModeChange }) => {
    return (
        <Tooltip title={!darkMode ? "Karanlik Mode" : "Aydinlik Mod"}>
            <Switch
                color="default"
                checked={darkMode}
                aria-label="theme switch"
                onChange={handleModeChange}
            />
        </Tooltip>
    )
};

export default ThemeSwitcher;