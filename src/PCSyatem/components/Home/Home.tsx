import React from "react";
import ImageCarousel from "../../../components/Common/Card/ImageCarousel";
import Card from "../../../components/Common/Card/Card";
import ImageSlider from "../../../components/Common/slider/ImageSlider";

const Home = () =>{
    const Imageslider = [
        "https://storage.googleapis.com/assets.thehindustep.in/img%2Fproducts%2Fpd_bg_w_d77b0d1c1800743f720075e9e13261ef.png",
        "https://www.watermarkinsights.com/wp-content/uploads/2024/09/itemeditorimage_649188486323d-1-1024x512.webp",
        "https://www.mgiclasses.com/assets/front/images/220-SM744603.jpg",
    ];

    const carouselImages = [
    {
      src: "https://coachingfederation.org/wp-content/uploads/bb-plugin/cache/icf-community-events-foundation-volunteers-coaching-services-landscape-571dd3e779e49bceafe62a0a0726ed62-p5elk9s2m80t.jpg",
      alt: "Two women shaking hands and smiling warmly",
      title: "Coaching Resources",
      description: "Looking to achieve a goal? Solve a problem? We’ve got content to help."
    },
    {
      src: "https://coachingfederation.org/wp-content/uploads/bb-plugin/cache/icf-community-and-events-collaborative-brainstorming-scaled-landscape-2b32071e43dbf981d5a8456d0eaf3cf1-dxpgvo2zchkt.jpg",
      alt: "A diverse team collaborating on a transparent whiteboard with sticky notes",
      title: "Events",
      description: "Creativity + Camaraderie = Ignited Passion. This is what you’ll unleash at our events with industry experts and peers."
    },
    {
      src: "https://coachingfederation.org/wp-content/uploads/bb-plugin/cache/icf-home-business-coaching-in-organization-scaled-landscape-166fc59ca95ddf91f6e4ddad298e8380-yhpkola0educ.jpg",
      alt: "Close-up of a coaching session, notebook and pens visible",
      title: "Community",
      description: "Discussions go beyond words in our community platform — they become catalysts for growth, connection, and excellence in coaching."
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2TfEF6_ZpwiodjsKraWVvLmFJrDtz-zcTJNlldxYD4ZIIx6kmwSyB3LRmNJxfQFPpQM&usqp=CAUhttps://www.cvent.com/sites/default/files/image/2019-11/the-best-of-connect.jpg",
      alt: "Panel discussion at a coaching conference",
      title: "Global Events and Conferences",
      description: "Attend global events and conferences, gaining insights from leading experts and expanding your professional network significantly."
    },
    {
        src: "https://cdn.prod.website-files.com/63badcc4f1d829f6963dc16c/63d78468046879cd7ca7b6a4_62c584174e24837f65bef5df_engaging-interactive-webinar-best-practices-and-formats.jpeg",
        alt: "A speaker presenting to an audience at an event",
        title: "Webinars and Live Events",
        description: "Access a wealth of knowledge through our extensive library of webinars and recorded sessions, available on demand."
    },
    {
        src: "https://ph-ic.com/wp-content/uploads/2025/08/Educational-Credential-Assessment.png",
        alt: "A group of students engaged in a study session",
        title: "Education and Credentials",
        description: "Advance your career with Pioneer Coaching-accredited education programs and earn valuable credentials recognized worldwide."
    }
    ];

    const cardData = [
  {
    title: "Become a Credentialed Coach With Pioneer",
    description: "Coaching is not a course, it's a mindset. Earning an ICF credential challenges you to continuously grow, making you a better coach tomorrow than you are today. Bring this difference to your clients.",
    imageSrc: '/images/Credentialed.png',
    imageAlt: 'Coach talking to a client on a rooftop'
  },
  {
    title: "Join a Global Community of Professional Coaches",
    description: "Have passion blended with purpose. Unlock a world of opportunities to advance in your coaching journey. Become a better coach and learn from peers who share your coaching mindset. See if you qualify for Pioneer Coaching membership and learn more about the benefits our members enjoy:",
    imageSrc: '/images/Global-Community.png',
    imageAlt: 'Coaches shaking hands in a professional setting'
  },
];


    return(
        <>
          <ImageSlider images={Imageslider} />
          <div className="font-[sans] mx-auto flex flex-col justify-center pt-8 pb-0 lg:px-48 2xl:px-50 sm:px-10">
            <h1 className="text-[#001033] text-5xl font-[Montserrat,sans-serif] font-bold leading-tight mb-6">
                Become the Coach <span className="text-[#2c3986]">You Wish You Had</span>
            </h1>
            <p className="text-[#434f58] text-lg leading-relaxed ">
                We are all architects of change. Uncover the power in you to foster meaningful <br/>
                transformation with our comprehensive library of resources, events, and professional <br/>
                development opportunities.
            </p>
        </div>

        <div className="">
        <ImageCarousel images={carouselImages} />
        </div>
        
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 py-8 star-background 
            relative overflow-hidden ">
          
            {/* --- BLUE GLOBE EFFECT DIV --- */}
            <div className="section-globe-blue"></div>
          <header className="text-center mb-16 max-w-2xl mx-auto ">
            <h1 className="text-4xl md:text-5xl text-gray-300 font-extrabold mb-2 font-Mulish">Dreams Don't Work</h1>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-400 mb-4">Unless You Do</h2>
            <p className="text-sm opacity-70">
              Often the hardest part is getting started. Are you ready for the next chapter of your 
              coaching career but don't know where to begin? Your journey to coaching success 
              starts here.
            </p>
          </header>
          <section className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto z-10">
            {cardData.map((card, index) => (
              <Card 
                key={index}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
              />
            ))}
          </section>
        </div>
        </>
    )
}
export default Home;