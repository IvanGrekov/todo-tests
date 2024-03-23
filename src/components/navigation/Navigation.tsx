import { useLocation } from 'react-router-dom';

import NavigationLink from '@/components/navigation-link/NavigationLink';
import { PREV_PAGE_STATE_KEY } from '@/constants/routerState';
import { EAppPages } from '@/types/appPages';

export default function Navigation(): JSX.Element {
    const { pathname } = useLocation();

    return (
        <nav className="flex justify-between px-6 py-4 gap-4">
            <NavigationLink to={EAppPages.HOME}>Home</NavigationLink>

            <NavigationLink to={EAppPages.ABOUT}>About</NavigationLink>

            <NavigationLink
                to={EAppPages.CONTACT}
                state={{
                    [PREV_PAGE_STATE_KEY]: pathname,
                }}
            >
                Contact
            </NavigationLink>
        </nav>
    );
}
