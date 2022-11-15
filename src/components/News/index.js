import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../Home/FooterHome';
import HomeHeader from '../Home/HomeHeader';
import Drawer from '../Mobile/Drawer';
import Blogs from './Blogs';
import BlogSideBar from './BlogSideBar';
import HeroNews from './HeroNews';

function News() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeHeader action={drawerAction.toggle} />
            <HeroNews
                title="Blogs"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/news', title: 'Blogs' },
                ]}
            />
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <Blogs />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default News;
