"use client"
import { Fragment, useEffect, useRef } from 'react'
import Backtotop from '@/shared/layouts-components/backtotop/backtotop'
import Landing from '../(components)/(landing-layout)/landing/page'

export default function Home() {
  const bodyRef: any = useRef(null);

  useEffect(() => {
    bodyRef.current = document.body
    bodyRef.current?.classList.add('landing-body')
    
    const html = document.documentElement;
    html.removeAttribute('data-bg-img');
    
    return () => {
      bodyRef.current?.classList.remove('landing-body')
    }
  }, []);

  return (
    <Fragment>
      <Landing />
      <Backtotop />
    </Fragment>
  )
}