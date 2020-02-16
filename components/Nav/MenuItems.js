import React from 'react';
import Link from 'next/link';
import { encrypt } from '../../utils/crypt';
import { useRouter } from "next/router";
import classNames from 'classnames';

const MenuItems = (props) => {

    const { query: { category = undefined } = {} } = useRouter();

    const isActiveMenuItem = name => {
        return category == name;
    }
    return (
        <ul>
            <li className={classNames({ 'active': isActiveMenuItem(undefined) })}>
                <Link href="/">Home</Link>
            </li>
            <li className={classNames({ 'active': isActiveMenuItem('men') })}>
                <Link href={{ pathname: '/styles', query: { category: 'men', filter: encrypt({ Subcategories: ['men'] }) } }} >Men</Link>
            </li>
            <li className={classNames({ 'active': isActiveMenuItem('women') })}>
                <Link href={{ pathname: '/styles', query: { category: 'women', filter: encrypt({ Subcategories: ['women'] }) } }}>Women</Link>
            </li>
            <li className={classNames({ 'active': isActiveMenuItem('new') })}>
                <Link href={{ pathname: '/styles', query: { category: 'new', filter: encrypt({ Subcategories: ['new'] }) } }}>New</Link>
            </li>
            <li className={classNames({ 'active': isActiveMenuItem('trending') })}>
                <Link href={{ pathname: '/styles', query: { category: 'trending', filter: encrypt({ Subcategories: ['trending'] }) } }}>Trending</Link>
            </li>
            <li className={classNames({ 'active': isActiveMenuItem('sale') })}>
                <Link href={{ pathname: '/styles', query: { category: 'sale', filter: encrypt({ Subcategories: ['sale'] }) } }}>Sale</Link>
            </li>
        </ul>
    );
}

export default MenuItems;