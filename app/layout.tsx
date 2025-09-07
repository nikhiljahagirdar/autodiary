"use client"

import React, { Fragment, useState } from 'react'
import "./globals.scss";
import { Provider } from 'react-redux'
import { store } from '@/shared/redux/store';
import { Initialload } from '@/shared/contextapi';

const RootLayout = ({ children, }: any) => {

  const [pageloading, setpageloading] = useState(false);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Initialload.Provider value={{ pageloading, setpageloading }}>
            {children}
          </Initialload.Provider>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;
