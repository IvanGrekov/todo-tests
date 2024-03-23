import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import '@/index.css';
import AppLayout from '@/components/app-layout/AppLayout';
import Routes from '@/routes/Routes';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppLayout>
                <Routes />
            </AppLayout>
        </BrowserRouter>
    </React.StrictMode>,
);
