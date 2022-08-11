import { Link } from "react-router-dom";

export const Reservations = () => {
    return (
        <section className="section" id="reservation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="left-text-content">
                            <div className="section-heading">
                                <h6>Contact Us</h6>
                                <h2>
                                    Here You Can Make A Reservation Or Just walkin to our cafe
                                </h2>
                            </div>
                            <p>
                                Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a
                                eleifend riqsie, namei sollicitudin urna diam, sed commodo purus
                                porta ut.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="phone">
                                        <i className="fa fa-phone" />
                                        <h4>Phone Numbers</h4>
                                        <span>
                                            <Link to="/">080-090-0990</Link>
                                            <br />
                                            <Link to="/">080-090-0880</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="message">
                                        <i className="fa fa-envelope" />
                                        <h4>Emails</h4>
                                        <span>
                                            <Link to="/">hello@company.com</Link>
                                            <br />
                                            <Link to="/">info@company.com</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4>Table Reservation</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <fieldset>
                                            <input
                                                name="name"
                                                type="text"
                                                id="name"
                                                placeholder="Your Name*"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <fieldset>
                                            <input
                                                name="email"
                                                type="text"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                placeholder="Your Email Address"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <fieldset>
                                            <input
                                                name="phone"
                                                type="text"
                                                id="phone"
                                                placeholder="Phone Number*"
                                                required=""
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <select
                                                value="number-guests"
                                                name="number-guests"
                                                id="number-guests"
                                            >
                                                <option value="number-guests">Number Of Guests</option>
                                                <option name={1} id={1}>
                                                    1
                                                </option>
                                                <option name={2} id={2}>
                                                    2
                                                </option>
                                                <option name={3} id={3}>
                                                    3
                                                </option>
                                                <option name={4} id={4}>
                                                    4
                                                </option>
                                                <option name={5} id={5}>
                                                    5
                                                </option>
                                                <option name={6} id={6}>
                                                    6
                                                </option>
                                                <option name={7} id={7}>
                                                    7
                                                </option>
                                                <option name={8} id={8}>
                                                    8
                                                </option>
                                                <option name={9} id={9}>
                                                    9
                                                </option>
                                                <option name={10} id={10}>
                                                    10
                                                </option>
                                                <option name={11} id={11}>
                                                    11
                                                </option>
                                                <option name={12} id={12}>
                                                    12
                                                </option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6">
                                        <div id="filterDate2">
                                            <div
                                                className="input-group date"
                                                data-date-format="dd/mm/yyyy"
                                            >
                                                <input
                                                    name="date"
                                                    id="date"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="dd/mm/yyyy"
                                                />
                                                <div className="input-group-addon">
                                                    <span className="glyphicon glyphicon-th" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <fieldset>
                                            <select value="time" name="time" id="time">
                                                <option value="time">Time</option>
                                                <option name="Breakfast" id="Breakfast">
                                                    Breakfast
                                                </option>
                                                <option name="Lunch" id="Lunch">
                                                    Lunch
                                                </option>
                                                <option name="Dinner" id="Dinner">
                                                    Dinner
                                                </option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea
                                                name="message"
                                                rows={6}
                                                id="message"
                                                placeholder="Message"
                                                required=""
                                                defaultValue={""}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button
                                                type="submit"
                                                id="form-submit"
                                                className="main-button-icon"
                                            >
                                                Make A Reservation
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};