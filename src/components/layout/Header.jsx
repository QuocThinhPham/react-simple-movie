import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = [
    {
        id: 1,
        to: '/',
        title: 'Home',
    },
    {
        id: 2,
        to: '/movies',
        title: 'Movies',
    },
];

const Header = () => {
    return (
        <header className='flex items-center justify-center gap-6 py-7'>
            {navigation &&
                navigation.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.to}
                        className={({ isActive }) =>
                            isActive ? 'text-indianred' : ''
                        }>
                        {item.title}
                    </NavLink>
                ))}
        </header>
    );
};

export default Header;
