import { Link, useLocation } from 'react-router-dom';

import { EAppPages } from '@/types/appPages';

export default function Navigation(): JSX.Element {
    const { pathname } = useLocation();

    return (
        <nav className="flex justify-between px-6 py-4 gap-4">
            <Link to={EAppPages.HOME} className="px-4 py-2 hover:bg-gray-700 rounded">
                Home
            </Link>
            <Link to={EAppPages.ABOUT} className="px-4 py-2 hover:bg-gray-700 rounded">
                About
            </Link>
            <Link
                to={EAppPages.CONTACT}
                state={{
                    prevPage: pathname,
                }}
                className="px-4 py-2 hover:bg-gray-700 rounded"
            >
                Contact
            </Link>
        </nav>
    );
}
