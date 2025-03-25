import React, { useEffect } from "react";
import mixitup from "mixitup";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import {
  RiArrowUpLine,
} from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
// Import react-slick and CSS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offerImage from "../assets/offer-bg.png";
import offerbgImage from "../assets/offer.png";
import aboutImage from "../assets/about.png";
import homeImage from "../assets/home.png";
import teslaLogo from "../assets/logo3.png";
import audiLogo from "../assets/logo1.png";
import porscheLogo from "../assets/logo2.png";
import logobrand3 from "../assets/logo6.png";
import logobrand4 from "../assets/logo4.png";
import logobrand5 from "../assets/logo5.png";
import teslaImg from "../assets/featured1.png";
import teslaImg2 from "../assets/featured2.png";
import audiImg from "../assets/featured3.png";
import porscheImg from "../assets/featured4.png";
import porscheImg2 from "../assets/featured5.png";
import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import popular3 from "../assets/popular3.png";
import popular4 from "../assets/popular4.png";
import features from "../assets/features.png";
import Footer from "../components/Footer";
function Home() {
  useEffect(() => {
    const container = document.querySelector(".brands_content");
    if (container) {
      mixitup(container, {
        selectors: { target: ".brands_card" },
        animation: { duration: 300 },
      });
    }

    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true,
    });

    sr.reveal(`.home_title,.popular_container,.features_img,.brands_filters`);
    sr.reveal(`.home_subtitle`, { delay: 500 });
    sr.reveal(`.home_elec`, { delay: 600 });
    sr.reveal(`.home_img`, { delay: 800 });
    sr.reveal(`.home_car-data`, { delay: 1000, interval: 200, origin: "bottom" });
    sr.reveal(`.home_button`, { delay: 1000, interval: 200, origin: "bottom" });
    sr.reveal(`.about_group,.offer_data`, { origin: "left" });
    sr.reveal(`.about_data,.offer_img`, { origin: "right" });
    sr.reveal(`.features_map`, { delay: 600, origin: "bottom", interval: 200 });
    sr.reveal(`.features_card,.logos_content,.footer_content`, { interval: 300 });
    sr.reveal(`.brands_card`, { interval: 200 });
  }, []);

  const handleActive = (e) => {
    const buttons = document.querySelectorAll(".brands_item");
    buttons.forEach((btn) => btn.classList.remove("active-brands"));
    e.currentTarget.classList.add("active-brands");
  };

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="shape shape_big"></div>
        <div className="shape shape_small"></div>
        <div className="home_container container grid">
          <div className="home_data">
            <h1 className="home_title">Chọn Chiếc Xe Mạnh Mẽ Của Bạn</h1>
            <h2 className="home_subtitle">Porsche Mission E</h2>
            <h3 className="home_elec">
              <i className="ri-flashlight-fill"></i> Electric Car
            </h3>
          </div>
          <img src={homeImage} alt="Home" className="home_img" />
          <a href="#" className="home_button">
            START
          </a>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about_container container grid">
          <div className="about_group">
            <img src={aboutImage} alt="About" className="about_img" />
            <div className="about_card">
              <h3 className="about_card-title">Trạm sạc tại nhà.</h3>
              <p className="about_card-description">
                Tiện dụng và dễ dàng sử dụng...
              </p>
            </div>
          </div>
          <div className="about_data">
            <h2 className="section_title about_title">
              Hiện Đại. <br />
              Công Nghệ Tương Lai.
            </h2>
            <p className="about_description">
              Trải nghiệm những chiếc xe điện hiệu suất cao được sản xuất bởi
              các thương hiệu nổi tiếng. Với thiết kế hiện đại, công nghệ tiên
              tiến và các nền tảng sáng tạo, những chiếc xe này không chỉ bền bỉ
              mà còn mang đến một tầm nhìn mới về công nghệ của tương lai.
            </p>
            <a href="#" className="button">
              Tìm hiểu thêm...
            </a>
          </div>
        </div>
      </section>

      <section className="popular section" id="popular">
        <h2 className="section_title">
          Sản Phẩm <br />
          Phổ Biến Của Thương Hiệu Porsche
        </h2>
        <div className="popular_container container">
          <Slider {...sliderSettings}>
            <div>
              <article className="popular_card">
                <div className="shape shape_smaller"></div>
                <h1 className="popular_title">Porsche</h1>
                <h3 className="popular_subtitle">Turbo S</h3>
                <img src={popular1} alt="Turbo S" className="popular_img" />
                <div className="popular_data">
                  <div className="popular_data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7sec
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-funds-box-line"></i>356Km/h
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>
                <h3 className="popular__price">$175,900</h3>
                <button className="button popular_button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
            </div>
            <div>
              <article className="popular_card">
                <div className="shape shape_smaller"></div>
                <h1 className="popular_title">Porsche</h1>
                <h3 className="popular_subtitle">Taycan</h3>
                <img src={popular2} alt="Taycan" className="popular_img" />
                <div className="popular_data">
                  <div className="popular_data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7sec
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-funds-box-line"></i>356Km/h
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>
                <h3 className="popular__price">$114,900</h3>
                <button className="button popular_button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
            </div>
            <div>
              <article className="popular_card">
                <div className="shape shape_smaller"></div>
                <h1 className="popular_title">Porsche</h1>
                <h3 className="popular_subtitle">Turbo S cross</h3>
                <img
                  src={popular3}
                  alt="Turbo S cross"
                  className="popular_img"
                />
                <div className="popular_data">
                  <div className="popular_data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7sec
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-funds-box-line"></i>356Km/h
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>
                <h3 className="popular__price">$150,900</h3>
                <button className="button popular_button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
            </div>
            <div>
              <article className="popular_card">
                <div className="shape shape_smaller"></div>
                <h1 className="popular_title">Porsche</h1>
                <h3 className="popular_subtitle">Boxster 718</h3>
                <img src={popular4} alt="Boxster 718" className="popular_img" />
                <div className="popular_data">
                  <div className="popular_data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7sec
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-funds-box-line"></i>356Km/h
                  </div>
                  <div className="popular_data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>
                <h3 className="popular__price">$125,900</h3>
                <button className="button popular_button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
            </div>
          </Slider>
        </div>
      </section>
      <section class="features section">
        <h2 class="section_title">
          Các Tính Năng <br />
          Nổi Bật
        </h2>
        <div class="features_container container grid">
          <div class="features_group">
            <img src={features} alt="" />

            <div class="features_card features_card-1">
              <h3 class="features_card-title">800v</h3>
              <p class="features_card-description">
                Turbo <br /> Chargin
              </p>
            </div>
            <div class="features_card features_card-2">
              <h3 class="features_card-title">350</h3>
              <p class="features_card-description">
                Km/h <br /> Range
              </p>
            </div>
            <div class="features_card features_card-3">
              <h3 class="features_card-title">480</h3>
              <p class="features_card-description">
                Km <br /> Travel
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brands section" id="brands">
        <h2 className="section_title">Brands Luxury Cars</h2>
        <div className="brands_container container">
          <ul className="brands_filters">
            <li>
              <button
                className="brands_item active-brands"
                data-filter="all"
                onClick={handleActive}
              >
                All
              </button>
            </li>

            <li>
              <button
                className="brands_item"
                data-filter=".porsche"
                onClick={handleActive}
              >
                <img src={porscheLogo} alt="porsche" />
              </button>
            </li>
            <li>
              <button
                className="brands_item"
                data-filter=".tesla"
                onClick={handleActive}
              >
                <img src={teslaLogo} alt="tesla" />
              </button>
            </li>
            <li>
              <button
                className="brands_item"
                data-filter=".audi"
                onClick={handleActive}
              >
                <img src={audiLogo} alt="audi" />
              </button>
            </li>
            {/* ... */}
          </ul>
          <div className="brands_content grid">
            <article className="brands_card mix porsche">
              <div className="shape shape_smaller"></div>
              <h1 className="brands_title">Audi</h1>
              <h3 className="brands_subtitle">E-tron</h3>
              {/* Bọc image bằng Link truyền dữ liệu sản phẩm qua state */}
              <Link
                to="/product-detail"
                state={{
                  product: {
                    id: 1,
                    name: "Audi E-tron",
                    price: "$175,900",
                    description:
                      "Audi Q8 e-tron 2025 bản SUV có kích thước tổng thể DxRxC lần lượt là 4.901 x 2.192 x 1.629 mm. Về mặt thiết kế, Q8 e-tron đã được gọt dũa nhiều chi tiết giúp xe gọn gàng hơn, cải thiện tính khí động học nhằm tối ưu phạm vi hoạt động. Nổi bật nhất ở phần đầu xe là bộ lưới tản nhiệt Singleframe đặc trưng hình bát giác.",
                    image: audiImg,
                  },
                }}
              >
                <img src={audiImg} alt="" className="brands_img" />
              </Link>
              <h3 className="brands_price">$175,900</h3>
              <button className="button popular_button">
                {/* <RiShoppingCartLine /> */}
              </button>
            </article>
            <article className="brands_card mix tesla">
              <div className="shape shape_smaller"></div>
              <h1 className="brands_title">Tesla</h1>
              <h3 className="brands_subtitle">Model X</h3>

              <Link
                to="/product-detail"
                state={{
                  product: {
                    id: 1,
                    name: "Tesla Model X",
                    price: "$98,900",
                    description:
                      "Tesla Model X 2025 được trang bị 2 động cơ điện với tổng sức mạnh lên tới 752Hp. Tất cả các phiên bản đều sử dụng hệ dẫn động 4 bánh toàn thời gian. Phiên bản Model X 75D có công suất 328 mã lực, chạy tối đa 382 km (cho 1 lần sạc đầy). Phiên bản Model X 90D sản sinh công suất 463 mã lực, chạy tối đa 415 km.",
                    image: teslaImg,
                  },
                }}
              >
                <img
                  src={teslaImg}
                  alt="Tesla Model X"
                  className="brands_img"
                />
              </Link>
              <h3 className="brands_price">$98,900</h3>
              <button className="button popular_button">
                {/* <RiShoppingCartLine /> */}
              </button>
            </article>
            <article className="brands_card mix tesla">
              <div className="shape shape_smaller"></div>
              <h1 className="brands_title">Tesla</h1>
              <h3 className="brands_subtitle">Model 3</h3>

              <Link
                to="/product-detail"
                state={{
                  product: {
                    id: 1,
                    name: "Tesla Model 3",
                    price: "$98,900",
                    description: "Mô tả sản phẩm Tesla Model X",
                    image: teslaImg2,
                  },
                }}
              >
                <img
                  src={teslaImg2}
                  alt="Tesla Model 3"
                  className="brands_img"
                />
              </Link>
              <h3 className="brands_price">$98,900</h3>
              <button className="button popular_button">
                {/* <RiShoppingCartLine /> */}
              </button>
            </article>
            <article className="brands_card mix audi">
              <div className="shape shape_smaller"></div>
              <h1 className="brands_title">Porsche</h1>
              <h3 className="brands_subtitle">Panarema</h3>

              <Link
                to="/product-detail"
                state={{
                  product: {
                    id: 0,
                    name: "Porsche Panarema",
                    price: "$126,900",
                    description: "Mô tả sản phẩm Porsche Panarema",
                    image: porscheImg,
                  },
                }}
              >
                <img
                  src={porscheImg}
                  alt="Porsche Panarema"
                  className="brands_img"
                />
              </Link>
              <h3 className="brands_price">$126,900</h3>
              <button className="button popular_button">
                {/* <RiShoppingCartLine /> */}
              </button>
            </article>
            <article className="brands_card mix audi">
              <div className="shape shape_smaller"></div>
              <h1 className="brands_title">Porsche</h1>
              <h3 className="brands_subtitle">Boxster 987</h3>

              <Link
                to="/product-detail"
                state={{
                  product: {
                    id: 0,
                    name: "Porsche Boxster 987",
                    price: "$126,900",
                    description: "Mô tả sản phẩm Porsche Boxster 987",
                    image: porscheImg2,
                  },
                }}
              >
                <img
                  src={porscheImg2}
                  alt="Porsche Boxster 987"
                  className="brands_img"
                />
              </Link>
              <h3 className="brands_price">$126,900</h3>
              <button className="button popular_button">
                {/* <RiShoppingCartLine /> */}
              </button>
            </article>
          </div>
        </div>
      </section>
      <section className="offer section">
        <div className="offer_container container grid">
          <img src={offerImage} alt="Offer Background" className="offer_bg" />
          <div className="offer_data">
            <h2 className="section_title offer_title">
              Bạn có muốn đăng ký nhận Ưu Đãi ?
            </h2>
            <p className="offer_description">
              Đăng ký nhận ưu đãi từ chúng tôi để nhận thông tin mới nhất...
            </p>
            <a href="#" className="button">
              Theo dõi ngay...
            </a>
          </div>
          <img src={offerbgImage} alt="Offer" className="offer_img" />
        </div>
      </section>
      <section class="logos section">
        <div class="logos_container container grid">
          <div class="logos_content">
            <img src={teslaLogo} alt="" className="logos_img" />
          </div>
          <div class="logos_content">
            <img src={porscheLogo} alt="" className="logos_img" />
          </div>
          <div class="logos_content">
            <img src={audiLogo} alt="" className="logos_img" />
          </div>
          <div class="logos_content">
            <img src={logobrand3} alt="" className="logos_img" />
          </div>
          <div class="logos_content">
            <img src={logobrand4} alt="" className="logos_img" />
          </div>
          <div class="logos_content">
            <img src={logobrand5} alt="" className="logos_img" />
          </div>
        </div>
      </section>
     <Footer/>
    <a href="#" class="scrollup" id="scroll-up">
      <RiArrowUpLine />
    </a>
    </main>
  );
}

export default Home;
