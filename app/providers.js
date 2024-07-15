"use client"; // This directive tells Next.js that this is a client component

import { Provider } from 'react-redux';
import store from '../redux/store';

export function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
