import "../../assets/scss/Footer.scss";
import Image from "../../assets/image/image";

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content-column">
            <div>
              <img
                className="mt-4"
                src={Image.Arazlogo}
                alt=""
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Mağazalarımız</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Əhmədli</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">Azadlıq</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Binəqədi</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Elmlər</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Haqqımızda</h2>
              <ul id="menu-quick-links" class="footer-menu-list">
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Mağazalar Xəritəsi
                  </a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Vakansiyalar
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Tərəfdaşlarımız</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Şərtlər və Qaydalar</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Əlaqə</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">012 436 70 00</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">info@araz.az</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">www.araz.az</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-call-to-action footerArrow">
        <a
          className="footer-call-to-action-button button"
          href="#"
          target="_self"
        >
          {" "}
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
      </footer>
    
    </div>
  );
};

export default Footer;
