import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux'

const HeadTags = ({ children }) => {
    const HeadData = useSelector(state => state.head);
    const { title, description, keywords } = HeadData
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {children}
        </Head>
    );
}

export default HeadTags;