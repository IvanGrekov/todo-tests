import { Link, useLocation } from 'react-router-dom';

import PageTitle from '@/components/page-title/PageTitle';
import { EAppPages } from '@/types/appPages';

export default function ContactPage(): JSX.Element {
    const { state } = useLocation();

    const { prevPage } = state || {};
    const shouldShowBackButton = prevPage && prevPage !== EAppPages.CONTACT;

    return (
        <div className="flex flex-col gap-4">
            {shouldShowBackButton && <Link to={prevPage}>Back</Link>}

            <PageTitle>Contact Us</PageTitle>
        </div>
    );
}
