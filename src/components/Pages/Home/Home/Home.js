import React from 'react';
import Banner from '../Banner/Banner';
import FreeCancelation from '../FreeCancelation/FreeCancelation';
import OurBlogs from '../OurBlogs/OurBlogs';
import PlanAdventure from '../PlanAdventure/PlanAdventure';
import TopDestinations from '../TopDestinations/TopDestinations';
import TourDestinations from '../TourDestinations/TourDestinations';
import TravelersReviews from '../TravelersReviews/TravelersReviews';
import WhyBookWithWayfarers from '../WhyBookWithWayfares/WhyBookWithWayfarers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyBookWithWayfarers></WhyBookWithWayfarers>
            <div className="container-fluid" id="tour-destinations">
                <TourDestinations></TourDestinations>
            </div>
            <FreeCancelation></FreeCancelation>
            <PlanAdventure></PlanAdventure>
            <div className="container-fluid" id="top-destinations">
                <TopDestinations></TopDestinations>
            </div>
            <OurBlogs></OurBlogs>
            <div className="container-fluid" id="reviews">
                <TravelersReviews></TravelersReviews>
            </div>
            
            {/* 
                --Tour Destinations--
                --Free Cancelation--
                --Plan Adventure--
                --WhyBookWithWayfarers--
                --Top Destination--
                --OurBlogs--
                --TravelersReview--
            */}
        </div>
    );
};

export default Home;