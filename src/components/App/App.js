import React from 'react';

import Footer from '../Footer';
import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastPlayground/ToastProvider';

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;
