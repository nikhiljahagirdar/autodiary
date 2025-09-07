"use client"

import React, { Fragment, useEffect, useState, useContext, useRef, } from 'react'
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { data$, getState } from '@/shared/layouts-components/services/switcherServices';
import { Initialload } from '@/shared/contextapi';

const Layout = ({ children }: any) => {

    const [localVariable, setLocalVariable] = useState(getState());

    const customstyles: any = {
        ...(localVariable.colorPrimaryRgb !== '' && { '--primary-rgb': localVariable.colorPrimaryRgb }),
        ...(localVariable.bodyBg !== '' && { '--body-bg-rgb': localVariable.bodyBg }),
        ...(localVariable.bodyBg2 !== '' && { '--body-bg-rgb2': localVariable.bodyBg2 }),
        ...(localVariable.lightRgb !== '' && { '--light-rgb': localVariable.lightRgb }),
        ...(localVariable.formControlBg !== '' && { '--form-control-bg': localVariable.formControlBg }),
        ...(localVariable.gray !== '' && { '--gray-3': localVariable.gray }),
        ...(localVariable.inputBorder !== '' && { '--input-border': localVariable.inputBorder }),
    };

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setLocalVariable(e);
        });

        return () => subscription.unsubscribe();
    }, []);

    const theme: any = useContext(Initialload);
    useEffect(() => {
        if (typeof window !== 'undefined' && !theme.pageloading) {
            LocalStorageBackup(theme.setpageloading);
        }
    }, [theme.pageloading, theme.setpageloading]);



    useEffect(() => {
        if (typeof document !== 'undefined') {
            const html = document.documentElement;
            html.setAttribute('lang', localVariable.lang || 'en');
            html.setAttribute('dir', localVariable.dir || 'ltr');
            html.setAttribute('data-theme-mode', localVariable.dataThemeMode || 'light');
            html.setAttribute('data-header-styles', localVariable.dataHeaderStyles || 'transparent');
            html.setAttribute('data-vertical-style', localVariable.dataVerticalStyle || 'doublemenu');
            html.setAttribute('data-nav-layout', localVariable.dataNavLayout || 'vertical');
            html.setAttribute('data-menu-styles', localVariable.dataMenuStyles || 'transparent');
            if (localVariable.toggled) html.setAttribute('data-toggled', localVariable.toggled);
            if (localVariable.dataNavStyle) html.setAttribute('data-nav-style', localVariable.dataNavStyle);
            if (localVariable.horStyle) html.setAttribute('hor-style', localVariable.horStyle);
            html.setAttribute('data-page-style', localVariable.dataPageStyle || 'flat');
            html.setAttribute('data-width', localVariable.dataWidth || 'fullwidth');
            html.setAttribute('data-menu-position', localVariable.dataMenuPosition || 'fixed');
            html.setAttribute('data-header-position', localVariable.dataHeaderPosition || 'fixed');
            if (localVariable.iconOverlay) html.setAttribute('data-icon-overlay', localVariable.iconOverlay);
            if (localVariable.bgImg) html.setAttribute('data-bg-img', localVariable.bgImg);
            if (localVariable.iconText) html.setAttribute('icon-text', localVariable.iconText);
            
            Object.assign(html.style, customstyles);
            
            if (localVariable.body) {
                document.body.className = localVariable.body;
            }
        }
    }, [localVariable, customstyles]);

    return (
        <Fragment>
            {theme.pageloading && children}
        </Fragment>
    );
}

export default Layout;
