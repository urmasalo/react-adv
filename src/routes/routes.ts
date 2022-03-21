
import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXCOMPONENT = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXCOMPONENT> | JSXCOMPONENT,
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: ' 🥱 Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: '😀 No Lazy'
    }
]