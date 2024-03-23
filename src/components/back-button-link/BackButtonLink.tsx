import { PropsWithChildren } from 'react';
import { Link, To } from 'react-router-dom';

interface IBackButtonLinkProps extends PropsWithChildren {
    to: To;
    className?: string;
}

export default function BackButtonLink({ to, className }: IBackButtonLinkProps): JSX.Element {
    return (
        <Link
            to={to}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
        >
            <svg
                className="w-3.5 h-3.5 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
            </svg>
            Back
        </Link>
    );
}
