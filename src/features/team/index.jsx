import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Scrollbar, A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import TeamItem from "./team-item";

Team.propTypes = {
  data: PropTypes.array,
};

const swiperOptions = {
  modules: [Navigation, Scrollbar, A11y],
  spaceBetween: 30,
slidesPerView: 1,

  navigation: {
    clickable: true,
    nextEl: ".nav-prev-testimonial",
    prevEl: ".nav-next-testimonial",
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
  // navigation
  scrollbar: { draggable: true },
};

function Team(props) {
  const { data } = props;

  const [dataBlock] = useState({
    subtitle: "Our team",
    title: "Meet our TEAM",
    desc: "Who we are",
    text: "Purus, laoreet dui augue ut euismod. Elementum ante sociis volutpat tellus enim, nisl consectetur mauris. Venenatis congue id quis eget viverra. Vestibulum, justo, euismod congue feugiat eget fames gravida posuere.",
  });
  return (
    <section className="tf-section tf-team">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-6 col-12">
            <div
              className="tf-title st2 mb-61"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <p className="h8 sub-title">{dataBlock.subtitle}</p>
              <h4 className="title">{dataBlock.title}</h4>
            </div>
            <div
              className="content mobie-30"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="h7 txt-tranf-cap m-b16">{dataBlock.desc}</div>
              <p>{dataBlock.text}</p>
            </div>
            <div className="box-navigation">
				<div className="navigation swiper-nav-next nav-next-testimonial"><span className="icon fa-angle-left" /></div>
				<div className="navigation swiper-nav-prev nav-prev-testimonial"><span className="icon fa-angle-right" /></div>
			</div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-6 col-12">
            <div
              className="wrap-team"
              data-aos="fade-up"
              data-aos-duration="800"
            >
                <div className="swiper">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <TeamItem item={item} />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
