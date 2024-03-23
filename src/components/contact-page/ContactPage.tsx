import { useLocation } from 'react-router-dom';

import BackButtonLink from '@/components/back-button-link/BackButtonLink';
import PageTitle from '@/components/page-title/PageTitle';
import { PREV_PAGE_STATE_KEY } from '@/constants/routerState';
import { EAppPages } from '@/types/appPages';

export default function ContactPage(): JSX.Element {
    const { state } = useLocation();

    const prevPagePath = state?.[PREV_PAGE_STATE_KEY];
    const shouldShowBackButton = prevPagePath && prevPagePath !== EAppPages.CONTACT;

    return (
        <div className="flex flex-col gap-4">
            {shouldShowBackButton && (
                <BackButtonLink className="self-start" to={prevPagePath}>
                    Back
                </BackButtonLink>
            )}

            <PageTitle>Contact Us</PageTitle>
        </div>
    );
}
