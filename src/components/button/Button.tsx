import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

interface IButtonProps extends PropsWithChildren {
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    alternative?: boolean;
    className?: string;
    onClick: () => void;
}

export default function Button({
    children,
    type,
    alternative,
    className,
    onClick,
}: IButtonProps): JSX.Element {
    const defaultClassName = alternative
        ? 'py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';

    return (
        <button type={type} onClick={onClick} className={`${defaultClassName} ${className}`}>
            {children}
        </button>
    );
}
