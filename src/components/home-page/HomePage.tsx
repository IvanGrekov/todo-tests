import { useNavigate } from 'react-router-dom';

import PageTitle from '@/components/page-title/PageTitle';
import { EAppPages } from '@/types/appPages';

export default function HomePage(): JSX.Element {
    const navigate = useNavigate();

    const onClick = (): void => {
        navigate(EAppPages.CONTACT, { state: { prevPage: EAppPages.CONTACT } });
    };

    return (
        <div className="flex flex-col gap-4">
            <button className="self-start" onClick={onClick}>
                Contact
            </button>
            <PageTitle>Home</PageTitle>
        </div>
    );
}
