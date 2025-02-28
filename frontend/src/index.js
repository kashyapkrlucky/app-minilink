import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { UserProvider } from './contexts/UserContext';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './services/i18n';
import { ToastProvider } from './contexts/ToastContext';
import { LoadingProvider } from './contexts/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <UserProvider>
            <ToastProvider>
                <LoadingProvider>
                    <I18nextProvider i18n={i18n}>
                        <App />
                    </I18nextProvider>
                </LoadingProvider>
            </ToastProvider>
        </UserProvider>
    </Provider>
);
