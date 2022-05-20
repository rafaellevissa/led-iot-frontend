import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoutes from './routes';
// import Theme from "./Theme";

import './services/i18n-setup';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ReduxProvider store={store} >
          <CssBaseline />
            <AppRoutes />
        </ReduxProvider>
      </PersistGate>
    </Provider>
  );
}