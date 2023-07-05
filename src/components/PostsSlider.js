import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Post01 from "../assets/img/posts/post01.jpg";
import Post02 from "../assets/img/posts/post02.jpg";
import Post03 from "../assets/img/posts/post03.jpg";
import Post04 from "../assets/img/posts/post04.jpg";
import Post05 from "../assets/img/posts/post05.jpg";

const PostsSlider = () => {
  const postSliderItems = [
    {
      id: 1,
      imgname: Post01,
      resolution: "1080 X 1080",
      postname: "Linkedin Post",
    },
    {
      id: 2,
      imgname: Post02,
      resolution: "1080 X 1920",
      postname: "Facebook Story",
    },
    {
      id: 3,
      imgname: Post03,
      resolution: "1080 X 1080",
      postname: "Facebook Post",
    },
    {
      id: 4,
      imgname: Post04,
      resolution: "1080 X 1920",
      postname: "Instagram Story",
    },
    {
      id: 5,
      imgname: Post05,
      resolution: "1080 X 566",
      postname: "Instagram Post",
    },
    {
      id: 6,
      imgname: Post01,
      resolution: "1080 X 1080",
      postname: "Linkedin Post",
    },
    {
      id: 7,
      imgname: Post02,
      resolution: "1080 X 1920",
      postname: "Facebook Story",
    },
    {
      id: 8,
      imgname: Post03,
      resolution: "1080 X 1080",
      postname: "Facebook Post",
    },
    {
      id: 9,
      imgname: Post04,
      resolution: "1080 X 1920",
      postname: "Instagram Story",
    },
    {
      id: 10,
      imgname: Post05,
      resolution: "1080 X 566",
      postname: "Instagram Post",
    },
  ];
  return (
    <div>
      <div className="PostSlider">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pageination={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {postSliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="post-item">
                <figure className="position-relative">
                  <img src={item.imgname} alt="" className="img-fluid w-100" />
                  <span className="post-resolution">{item.resolution}</span>
                  <div className="item-links">
                    <Link to="">
                      <span class="icon-download icomoon"></span>
                    </Link>
                    <Link to="">
                      <span class="icon-edit icomoon"></span>
                    </Link>
                    <Link to="">
                      <span class="icon-fullscreen"></span>
                    </Link>
                  </div>
                </figure>
                <h6 className="text-center h6">{item.postname}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PostsSlider;
