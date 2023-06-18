import { useState, useEffect } from 'react'

function useMediaQuery(mediaQuery) {
    const [doesMatch, setMatches] = useState(false);

    useEffect(() => {
        const match = window.matchMedia(mediaQuery);
        setMatches(match.matches);
        const listener = () => {
            setMatches(match.matches);
        }
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, []);

    return doesMatch;
}

export default useMediaQuery