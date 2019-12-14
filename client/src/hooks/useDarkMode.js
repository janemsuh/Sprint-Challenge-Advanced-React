import { useEffect } from 'react';

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('dark');

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode];
}