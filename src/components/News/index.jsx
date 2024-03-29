import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import useToggle from '../../Hooks/useToggle';
import FooterHome from '../Home/FooterHome';
import HomeHeader from '../Home/HomeHeader';
import Drawer from '../Mobile/Drawer';
import Blog from './Blog';
import HeroNews from './HeroNews';

function SingleNews() {
    const { language } = useContext(LanguageContext);
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} text={language}/>
            <HomeHeader action={drawerAction.toggle} text={language}/>
            <HeroNews
                title="Noticias"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/news', title: 'noticias' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <Blog text={language}/>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHome text={language}/>
        </>
    );
}

export default SingleNews;
