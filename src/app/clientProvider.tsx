'use client';

import { Provider } from 'react-redux';
import { myStore } from '@/redux/store';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={myStore}>{children}</Provider>;
};

export default ClientProvider;
