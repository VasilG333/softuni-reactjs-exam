import { Link } from "react-router-dom";

export const Chefs = () => {
    return (
        <section className="section" id="chefs">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
              <div className="section-heading">
                <h6>Our Chefs</h6>
                <h2>We offer the best ingredients for you</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay" />
                  <ul className="social-icons">
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                  <img src="assets/images/chefs-01.jpg" alt="Chef #1" />
                </div>
                <div className="down-content">
                  <h4>Randy Walker</h4>
                  <span>Pastry Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay" />
                  <ul className="social-icons">
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-behance" />
                      </Link>
                    </li>
                  </ul>
                  <img src="assets/images/chefs-02.jpg" alt="Chef #2" />
                </div>
                <div className="down-content">
                  <h4>David Martin</h4>
                  <span>Cookie Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay" />
                  <ul className="social-icons">
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-google" />
                      </Link>
                    </li>
                  </ul>
                  <img src="assets/images/chefs-03.jpg" alt="Chef #3" />
                </div>
                <div className="down-content">
                  <h4>Peter Perkson</h4>
                  <span>Pancake Chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};