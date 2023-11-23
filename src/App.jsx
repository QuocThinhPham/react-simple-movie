import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/banner/Banner';
import MainLayout from './components/layout/MainLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
// const MoviePagePagination = lazy(() => import('./pages/MoviePagePagination'));
const MoviePageLoadmore = lazy(() => import('./pages/MoviePageLoadmore'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path='/' element={<MainLayout></MainLayout>}>
                    <Route
                        index
                        element={
                            <>
                                <Banner></Banner>
                                <HomePage></HomePage>
                            </>
                        }
                    />
                    <Route
                        path='/movies'
                        element={<MoviePageLoadmore></MoviePageLoadmore>}
                    />
                    <Route
                        path='/movies/:movieId'
                        element={<MovieDetailsPage></MovieDetailsPage>}
                    />
                </Route>
                <Route path='*' element={<NotFoundPage></NotFoundPage>} />
            </Routes>
        </Suspense>
    );
}
