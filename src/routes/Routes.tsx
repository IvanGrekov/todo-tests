import { Route, Routes as ReactRoutes } from 'react-router-dom';

import AboutPage from '@/components/about-page/AboutPage';
import ContactPage from '@/components/contact-page/ContactPage';
import HomePage from '@/components/home-page/HomePage';
import { EAppPages } from '@/types/appPages';

export default function Routes(): JSX.Element {
    return (
        <ReactRoutes>
            <Route path={EAppPages.HOME} element={<HomePage />} />

            <Route path={EAppPages.ABOUT} element={<AboutPage />} />

            <Route path={EAppPages.CONTACT} element={<ContactPage />} />
        </ReactRoutes>
    );
}
