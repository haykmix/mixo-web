import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../Home/FooterHome';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import Forms from './Forms';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Contact"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/contact', title: 'Contact' },
                ]}
            />
            <Forms />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Contact;
