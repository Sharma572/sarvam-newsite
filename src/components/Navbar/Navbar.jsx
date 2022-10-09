import React from 'react'
import Logo from '../../assets/img/sarvam logo/INSTA.png';

export default function Navbar() {
  return (
    <div>
        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
            <div className="humberger__menu__logo">
                <a href="#"><img src={Logo} alt="" /></a>
            </div>
            <div className="humberger__menu__cart">
                <ul>
                    <li><a ><i className="fa fa-heart"></i> <span>1</span></a></li>
                    <li><a><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                </ul>
                <div className="header__cart__price">item: <span>$150.00</span></div>
            </div>
            <div className="humberger__menu__widget">
                <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                        <li><a >Spanis</a></li>
                        <li><a >English</a></li>
                    </ul>
                </div>
                <div className="header__top__right__auth">
                    <a href="#"><i className="fa fa-user"></i> Login</a>
                </div>
            </div>
            <nav className="humberger__menu__nav mobile-menu">
                <ul>
                    <li className="active"><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a href="#">Pages</a>
                        <ul className="header__menu__dropdown">
                            <li><a>Shop Details</a></li>
                            <li><a>Shoping Cart</a></li>
                            <li><a>Check Out</a></li>
                            <li><a>Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div className="header__top__right__social">
                <a><i className="fa fa-facebook"></i></a>
                <a><i className="fa fa-twitter"></i></a>
                <a><i className="fa fa-linkedin"></i></a>
                <a><i className="fa fa-pinterest-p"></i></a>
            </div>
            <div className="humberger__menu__contact">
                <ul>
                    <li><i className="fa fa-envelope"></i>Sarvam</li>
                    <li>Free Shipping for all Order of $99</li>
                </ul>
            </div>
        </div>
    {/* humberger End  */}

    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> Sarvam</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a><i className="fa fa-facebook"></i></a>
                                <a><i className="fa fa-twitter"></i></a>
                                <a><i className="fa fa-linkedin"></i></a>
                                <a><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="header__top__right__language">
                                <img src="img/language.png" alt="" />
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href="#"><i className="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a><img src={Logo} alt=""  style={{height:"60px"}}/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li><a>Shop Details</a></li>
                                    <li><a>Shoping Cart</a></li>
                                    <li><a>Check Out</a></li>
                                    <li><a>Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    </div>
  );
}
