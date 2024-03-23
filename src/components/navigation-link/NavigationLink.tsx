import { PropsWithChildren } from 'react';
import { Link, To } from 'react-router-dom';

interface INavigationLinkProps extends PropsWithChildren {
    to: To;
    state?: Record<string, unknown>;
    className?: string;
}

export default function NavigationLink({
    to,
    state,
    children,
    className,
}: INavigationLinkProps): JSX.Element {
    return (
        <Link
            to={to}
            state={state}
            className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${className}`}
        >
            {children}
        </Link>
    );
}
