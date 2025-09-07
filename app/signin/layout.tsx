"use client"

import React, { Fragment, useEffect, useRef } from 'react'
import Switcher from '@/shared/layouts-components/switcher/switcher'

const layout = ({ children }: any) => {

  const bodyRef: any = useRef(null);

  useEffect(() => {
    bodyRef.current = document.body
    bodyRef.current.classList.add('bg-white');

    return () => {
      bodyRef.current.classList.remove('bg-white');
    };

  }, []);

  return (
    <Fragment>
      <Switcher />
      {children}
    </Fragment>
  )
}

export default layout