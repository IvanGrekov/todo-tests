import { useNavigate } from 'react-router-dom';

import Button from '@/components/button/Button';
import PageTitle from '@/components/page-title/PageTitle';
import { PREV_PAGE_STATE_KEY } from '@/constants/routerState';
import { EAppPages } from '@/types/appPages';

export default function HomePage(): JSX.Element {
    const navigate = useNavigate();

    const onClick = (): void => {
        navigate(EAppPages.CONTACT, { state: { [PREV_PAGE_STATE_KEY]: EAppPages.HOME } });
    };

    return (
        <div className="flex flex-col gap-4">
            <Button className="self-start" onClick={onClick}>
                Contact
            </Button>
            <PageTitle>Home</PageTitle>
        </div>
    );
}
