import { PropsWithChildren } from 'react';

import Navigation from '@/components/navigation/Navigation';

function AppLayout({ children }: PropsWithChildren): JSX.Element {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main className="p-6">{children}</main>
        </>
    );
}

export default AppLayout;
