"use client"
import { Fragment, useEffect, useRef } from 'react'
import Backtotop from '@/shared/layouts-components/backtotop/backtotop'
import Landing from './(components)/(landing-layout)/landing/page'

export default function Home() {
  const bodyRef: any = useRef(null);

  useEffect(() => {
    bodyRef.current = document.body
    bodyRef.current?.classList.add('landing-body')
    return () => {
      bodyRef.current?.classList.remove('landing-body')
    }
  }, []);

  const getDocumentElement = (): HTMLElement => {
    return document.documentElement;
  };

  useEffect(() => {
    const html = getDocumentElement()
    html.removeAttribute('data-bg-img');
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-bg-img") {
          html.removeAttribute('data-bg-img');
        }
      });
    });
    
    observer.observe(html, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Fragment>
      <div>
        <Landing />
      </div>
      <Backtotop />
    </Fragment>
  )
}