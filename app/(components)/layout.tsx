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
    }, []);



    return (
        <Fragment>
            {theme.pageloading && children}
        </Fragment>
    );

    // Apply attributes to document element
    useEffect(() => {
        const html = document.documentElement;
        Object.entries({
            'lang': localVariable.lang,
            'dir': localVariable.dir,
            'data-theme-mode': localVariable.dataThemeMode,
            'data-header-styles': localVariable.dataHeaderStyles,
            'data-vertical-style': localVariable.dataVerticalStyle,
            'data-nav-layout': localVariable.dataNavLayout,
            'data-menu-styles': localVariable.dataMenuStyles,
            'data-toggled': localVariable.toggled,
            'data-nav-style': localVariable.dataNavStyle,
            'data-page-style': localVariable.dataPageStyle,
            'data-width': localVariable.dataWidth,
            'data-menu-position': localVariable.dataMenuPosition,
            'data-header-position': localVariable.dataHeaderPosition,
            'data-icon-overlay': localVariable.iconOverlay,
            'data-bg-img': localVariable.bgImg
        }).forEach(([key, value]) => {
            if (value) html.setAttribute(key, value);
            else html.removeAttribute(key);
        });
        
        Object.entries(customstyles).forEach(([key, value]) => {
            html.style.setProperty(key, value);
        });
    }, [localVariable, customstyles]);
}

export default Layout;
