import NotFound from '../components/NotFound'
import Head from 'next/head';
import { Fragment } from 'react';

export default function NotFoundPage() {
    return (
        <Fragment>
            <Head>
                <title>404 - Hotel Booking</title>
                <meta content="noindex,noffolow" name="robots"/>
            </Head>
            <NotFound />
        </Fragment>
       
    )
}