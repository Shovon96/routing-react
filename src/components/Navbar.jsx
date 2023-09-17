import { useState } from 'react';
import { TfiMenu, TfiClose } from 'react-icons/Tfi';


const Navbar = () => {

    const [navbarOpen, setNabvarOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' }
    ];


    return (
        <nav className='p-2 md:p-0'>
            <div className='text-2xl md:hidden' onClick={() => setNabvarOpen(!navbarOpen)}>
                {
                    navbarOpen === true ? <TfiClose></TfiClose> : <TfiMenu></TfiMenu>
                }
            </div>
            <ul className={`md:flex justify-center gap-10 my-4 absolute md:static duration-1000 ml-10 bg-fuchsia-400 bg-opacity-50 m-3 px-24 md:px-0 md:my-0 rounded-lg
                ${navbarOpen ? 'top-2' : '-top-64'}`}>
                {
                    routes.map(route =>
                        <li className="list-none text-xl font-bold text-gray-800 my-2 hover:bg-gray-400 rounded-lg px-3 md:p-2" key={route.id}>
                            <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;