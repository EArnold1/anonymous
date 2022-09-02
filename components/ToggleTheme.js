import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
const ToggleTheme = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();
    return (
        <div>
            <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
        </div>
    )
}

export default ToggleTheme
