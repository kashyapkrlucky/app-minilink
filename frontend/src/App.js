import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './routes/ProtectedRoute';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './services/i18n';

import Login from './routes/Login';
import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Examples from './components/Examples';
import NotFound from './routes/NotFound';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/examples" element={<Examples />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </I18nextProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
