import React from 'react'
import hero_img from '../../assets/img/hero-image/website022.jpg';

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#">Head Protection</a></li>
                            <li><a href="#">Eye Protection</a></li>
                            <li><a href="#">Hand Protection</a></li>
                            <li><a href="#">Feet Protection</a></li>             
                            <li><a href="#">Fire Protection</a></li>
                            <li><a href="#">Road Safety</a></li>
                            <li><a href="#">General Protection</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?" />
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>044-4555 2227</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item set-bg" data-setbg={hero_img}>
                        <div className="hero__text">
                            <span>Sarvam Safety Equipment</span>
                            <h2></h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="#" className="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
