import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

//components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

//SASS
import "./Home.scss";

//images
import calendar from "../../Assets/img/calendar.svg";
import direction_icon from "../../Assets/img/direction_icon.svg";
import online_icon from "../../Assets/img/online_icon.svg";
import offline_icon from "../../Assets/img/offline_icon.svg";
import person_icon from "../../Assets/img/person_icon.svg";
import arrow from "../../Assets/img/search_arrow.svg";
import clock_icon from "../../Assets/img/clock.svg";
import design_icon from "../../Assets/img/Design.svg";
import user_icon from "../../Assets/img/user.svg";
import eye_icon from "../../Assets/img/eye.svg";
import reklama1 from "../../Assets/img/reklama1.png";
import reklama2 from "../../Assets/img/reklama2.png";
import axios from "axios";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const secondSearchClass = useRef();
  const actionSearchClass = useRef();
  const speakerClass = useRef();
  const viewDate = useRef();
  const [nextPageCount, setNextPageCount] = useState(1);

  function viewCalendar() {
    viewDate.current.classList.toggle("search__date--active");
  }
  function secondSearch() {
    secondSearchClass.current.classList.toggle("search__second--active");
    actionSearchClass.current.classList.remove("search__action--active");
    speakerClass.current.classList.remove("search__speaker--active");
  }
  function action() {
    secondSearchClass.current.classList.remove("search__second--active");
    actionSearchClass.current.classList.toggle("search__action--active");
    speakerClass.current.classList.remove("search__speaker--active");
  }
  function speaker() {
    secondSearchClass.current.classList.remove("search__second--active");
    actionSearchClass.current.classList.remove("search__action--active");
    speakerClass.current.classList.toggle("search__speaker--active");
  }

  const [postData, setPostData] = useState([]);



  const fextAllAds = async () => {
    const { data } = await axios.get(`http://localhost:9090/ads/get`);
    setPostData(data);
  };
  useEffect(() => {
    fextAllAds();
  }, []);

  



  function nextData() {
    setNextPageCount(nextPageCount + 1);
    fetch(`http://localhost:9090/ads/pagination?page=${nextPageCount}&&limit=6`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }



  async function sendSearch(evt) {
    evt.preventDefault();


    let categoryValue = [];
    let authorValue = [];
    let { date, ganre, category, author = [] } = evt.target.elements;
    category?.forEach((item) => {
      if (item.checked === true) {
        categoryValue?.push(item?.value);
      }
    });
    console.log(author);

    author?.forEach((item) => {
      if (item?.checked === true) {
        authorValue?.push(item?.value);
      } 
    });

 

    const { data } = await axios.get(
      `http://localhost:9090/ads/get?created_at=${date.value}&internal_direction=${JSON.stringify(categoryValue)}&event_type=${ganre.value}&ismi_sharifi=${JSON.stringify(authorValue)}`
    );
    console.log(data);

    if (data.length > 0) {
      setPostData(data);
    } 

    if (data.length < 0) {
      return setPostData([])
    }
  }

  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <h1 className="search__title" data-aos="zoom-in">
              Eng so'ngi master klasslar va tadbirlar bizning saytda
            </h1>
            <form
              data-aos="zoom-in"
              onSubmit={sendSearch}
              className="search__form"
            >
              <ul className="search__list">
                <li className="search__item" onClick={viewCalendar}>
                  {/* <img className='search__icon' src={calendar} alt="calendar" /> */}
                  {/* <p className='search__text'>22 / 02 / 2022</p> */}
                  <input
                    name="date"
                    className="search__date--active"
                    type="date"
                  />
                  <img
                    className="search__arrow--icon"
                    src={arrow}
                    alt="arrow"
                  />
                </li>
                <li className="search__item" onClick={secondSearch}>
                  <img
                    className="search__icon"
                    src={direction_icon}
                    alt="direction_icon"
                  />
                  <p className="search__text">Bo'lim tanlang</p>
                  <img
                    className="search__arrow--icon"
                    src={arrow}
                    alt="arrow"
                  />
                  <ul ref={secondSearchClass} className="search__second">
                    <li className="search__second--item">
                      <h2 className="search__second--category">IT</h2>
                      <div className="search__second--subCategory">
                        <input
                          id="1"
                          name="category"
                          className="search__second--checkbox"
                          value="Web dasturlash"
                          type="checkbox"
                        />
                        <div className="checkbox"></div>
                        <label htmlFor="1">
                          <p className="search__second--text">Web dasturlash</p>
                        </label>
                      </div>
                      <div className="search__second--subCategory">
                        <input
                          id="2"
                          name="category"
                          className="search__second--checkbox"
                          value="Mobile dasturlash"
                          type="checkbox"
                        />
                        <label htmlFor="2">
                          <p className="search__second--text">
                            Mobile dasturlash
                          </p>
                        </label>
                      </div>
                    </li>
                    <li className="search__second--item">
                      <h2 className="search__second--category">Dizayn</h2>
                      <div className="search__second--subCategory">
                        <input
                          id="3"
                          name="category"
                          className="search__second--checkbox"
                          value="UI/UX dizayn"
                          type="checkbox"
                        />
                        <div className="checkbox"></div>
                        <label htmlFor="3">
                          <p className="search__second--text">UI/UX dizayn</p>
                        </label>
                      </div>
                      <div className="search__second--subCategory">
                        <input
                          id="4"
                          name="category"
                          className="search__second--checkbox"
                          value="Grafik dizayn"
                          type="checkbox"
                        />
                        <label htmlFor="4">
                          <p className="search__second--text">Grafik dizayn</p>
                        </label>
                      </div>
                    </li>
                    <li className="search__second--item">
                      <h2 className="search__second--category">Biznes</h2>
                      <div className="search__second--subCategory">
                        <input
                          id="5"
                          name="category"
                          className="search__second--checkbox"
                          value="Menejment"
                          type="checkbox"
                        />
                        <div className="checkbox"></div>
                        <label htmlFor="5">
                          <p className="search__second--text">Menejment</p>
                        </label>
                      </div>
                      <div className="search__second--subCategory">
                        <input
                          id="6"
                          name="category"
                          className="search__second--checkbox"
                          value="Kredit va audit"
                          type="checkbox"
                        />
                        <label htmlFor="6">
                          <p className="search__second--text">
                            Kredit va audit
                          </p>
                        </label>
                      </div>
                    </li>

                    <li className="search__second--item">
                      <h2 className="search__second--category">Ta’lim</h2>
                      <div className="search__second--subCategory">
                        <input
                          id="7"
                          name="category"
                          className="search__second--checkbox"
                          value="Matematika"
                          type="checkbox"
                        />
                        <div className="checkbox"></div>
                        <label htmlFor="7">
                          <p className="search__second--text">Matematika</p>
                        </label>
                      </div>
                      <div className="search__second--subCategory">
                        <input
                          id="8"
                          name="category"
                          className="search__second--checkbox"
                          value="Fizika"
                          type="checkbox"
                        />
                        <label htmlFor="8">
                          <p className="search__second--text">Fizika</p>
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="search__item" onClick={action}>
                  <img
                    className="search__icon"
                    src={online_icon}
                    alt="online_icon"
                  />
                  <p className="search__text">Online / Offline</p>
                  <img
                    className="search__arrow--icon"
                    src={arrow}
                    alt="arrow"
                  />
                  <ul ref={actionSearchClass} className="search__action">
                    <li className="search__action--item">
                      <img
                        className="search__action--icon"
                        src={online_icon}
                        alt="online_icon"
                      />
                      <label htmlFor="online" className="search__action--label">
                        Online
                      </label>
                      <input
                        name="ganre"
                        value="Online"
                        className="search__action--radio"
                        type="radio"
                      />
                    </li>
                    <li className="search__action--item">
                      <img
                        className="search__action--icon"
                        src={offline_icon}
                        alt="online_icon"
                      />
                      <label
                        htmlFor="offline"
                        className="search__action--label"
                      >
                        Offline
                      </label>
                      <input
                        name="ganre"
                        value="Offline"
                        className="search__action--radio"
                        type="radio"
                      />
                    </li>
                  </ul>
                </li>
                <li onClick={speaker} className="search__item">
                  <img
                    className="search__icon"
                    src={person_icon}
                    alt="person_icon"
                  />
                  <p className="search__text">Ism familya</p>
                  <img
                    className="search__arrow--icon"
                    src={arrow}
                    alt="arrow"
                  />
                  <ul ref={speakerClass} className="search__speaker">
                    {postData?.length &&
                      postData.map((e, i) => (
                        <li key={i} className="search__speaker--item">
                          <label className="search__speaker--label">
                            <input
                              name="author"
                              value={e.ismi_sharifi}
                              className="search__speaker--input"
                              type="checkbox"
                            />
                            {e.ismi_sharifi}
                          </label>
                        </li>
                      ))}
                  </ul>
                </li>
              </ul>
              <button type="submit" className="search__btn">
                Izlash
              </button>
            </form>
          </div>
        </section>

        <section className="intro">
          <div className="container">
            <h3 className="intro__title">Oxirgi e’lonlar</h3>
            <ul className="intro__list">
              {postData.map((e, i) => {
                return (
                  <Link
                    to={"/single/" + e.ad_id}
                    key={i}
                    className="intro__card"
                    data-aos="zoom-in"
                  >
                    <img
                      className="intro__card--img"
                      src={e.ad_img}
                      alt="img"
                    />
                    <div className="intro__box">
                      <h2 className="intro__card--title">{e.description}</h2>
                      <ul className="intro__card--box">
                        <li className="intro__card--item">
                          <img
                            className="intro__card--icon"
                            src={user_icon}
                            alt="user_icon"
                          />
                          <p className="intro__card--text">{e.ismi_sharifi}</p>
                        </li>
                        <li className="intro__card--item">
                          <img
                            className="intro__card--icon"
                            src={design_icon}
                            alt="design_icon"
                          />
                          <p className="intro__card--text">
                            {e.internal_direction}
                          </p>
                        </li>
                        <li className="intro__card--item">
                          <img
                            className="intro__card--icon"
                            src={calendar}
                            alt="calendar"
                          />
                          <p className="intro__card--text">{e.created_at}</p>
                        </li>
                        <li className="intro__card--item">
                          <img
                            className="intro__card--icon"
                            src={clock_icon}
                            alt="clock_icon"
                          />
                          <p className="intro__card--text">{e.birth_day}</p>
                        </li>
                        <li className="intro__card--item">
                          <img
                            className="intro__card--icon"
                            src={
                              e.event_type === "Offline"
                                ? online_icon
                                : offline_icon
                            }
                            alt="online_icon"
                          />
                          <p className="intro__card--text">{e.event_type}</p>
                        </li>
                        <li className="intro__card--item">
                          <img
                            className="intro__card--icon"
                            src={eye_icon}
                            alt="eye"
                          />
                          <p className="intro__card--text">{e.kurish_soni}</p>
                        </li>
                      </ul>
                    </div>
                  </Link>
                );
              })}
            </ul>
            <button onClick={nextData} className="intro__nextBtn">
              Ko’proq ko’rish
            </button>
          </div>
        </section>

        <section className="advertising">
          <div className="container">
            <ul className="advertising__list">
              <li className="advertising__item" data-aos="zoom-in">
                <img
                  className="advertising__img"
                  src={reklama1}
                  alt="reklama1"
                />
              </li>
              <li className="advertising__item" data-aos="zoom-in">
                <img
                  className="advertising__img"
                  src={reklama2}
                  alt="reklama2"
                />
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
