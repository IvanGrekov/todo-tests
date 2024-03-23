import { PropsWithChildren } from 'react';

export default function PageTitle({ children }: PropsWithChildren): JSX.Element {
    return <h1 className="text-3xl font-bold">{children}</h1>;
}
