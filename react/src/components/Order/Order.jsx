import "./Order.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import homeSvg from "../../Assets/img/Home.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Order() {
  const offRef = useRef();
  const onRef = useRef();
  const [post, setPost] = useState([]);
  const [sub, subcategory] = useState([]);

  const selectfunc = (evt) => {
    fetch(
      `http://localhost:9090/subcategory/get?subcategory=${evt.target.value}`
    )
      .then((res) => res.json())
      .then((data) => subcategory(data));
  };

  useEffect(() => {
    fetch(`http://localhost:9090/category/get`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  // const onlinefunc = (evt) => {
  //   console.log(evt.target.value);
  //   offRef.current.classList.add("order");
  //   if (offRef.current.classList.contains("order")) {
  //     offRef.current.classList.add("clicked");
  //     offRef.current.classList.remove("type_btn");
  //     onRef.current.classList.add("type_btn");
  //     onRef.current.classList.remove("clicked");
  //   } else {
  //     offRef.current.classList.remove("clicked");
  //     offRef.current.classList.add("type_btn");
  //     onRef.current.classList.add("clicked");
  //     onRef.current.classList.remove("type_btn");
  //   }
  // };

  const SubmitFunc = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const {
      image,
      text,
      description,
      qoshimcha_tel,
      telefon_raqami,
      professiya,
      event_type,
      ismi_sharifi,
      yuridik_nomi,
      ad_link,
      internal_direction,
      external_direction,
      birth_day,
      created_at,
    } = evt.target.elements;
    console.log(yuridik_nomi?.value);

    formData.append("created_at", created_at.value);
    formData.append("birth_day", birth_day.value);

    formData.append("external_direction", external_direction.value);
    formData.append("internal_direction", internal_direction.value);
    formData.append("event_type", event_type.value);

    formData.append("ad_link", ad_link.value);
    formData.append("yuridik_nomi", yuridik_nomi?.value);
    formData.append("ismi_sharifi", ismi_sharifi?.value);

    formData.append("professiya", professiya.value);
    formData.append("telefon_raqami", telefon_raqami.value);

    formData.append("qoshimcha_tel", qoshimcha_tel.value);
    formData.append("description", description.value);
    formData.append("ad_img", image.files[0]);
    formData.append("mavzu_matni", text.value);
    axios
      .post(`http://localhost:9090/ads/post`, formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  console.log(post);

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={SubmitFunc}>
          <div className="top_container">
            <span className="order_span">
              <img className="order_home_svg" src={homeSvg} alt="img" />
              <p className="order_tile">E’lon berish</p>
            </span>
            <h1 className="order_title_order">E’lon berish</h1>

            <div className="order_form">
              <div className="order_div_order">
                <h1 className="order_div_title">Vaqt va yo’nalishni tanlang</h1>
                <div className="order_mini_div_one">
                  <p className="order_div_text">
                    O’tkaziladigan sanani kiriting
                  </p>
                  <input
                    name="created_at"
                    type="date"
                    className="order_div_select"
                  />
                  <input
                    name="birth_day"
                    type="time"
                    className="order_div_select_tis"
                  />
                </div>
                <div className="order_mini_div_two">
                  <p className="order_div_text_two">Yo’nalishni belgilang</p>
                  <p className="order_div_text_three">Ichki yo’nalishni</p>
                  <select
                    onClick={selectfunc}
                    name="external_direction"
                    className="order_div_select_direction"
                  >
                    {post?.length &&
                      post?.map((e) => (
                        <option className="order_div_option" value={e.category}>
                          {e.category}
                        </option>
                      ))}
                  </select>
                  <select
                    name="internal_direction"
                    className="order_div_select_mini_direction"
                    defaultValue={"web"}
                  >
                    {sub?.length &&
                      sub?.map((e) => (
                        <option
                          className="order_div_option"
                          value={e.subcategory}
                        >
                          {e.subcategory}
                        </option>
                      ))}
                  
                  </select>
                </div>
                  <p className="order_div_text_two">Tadbir turi</p>
                  <select name="event_type"   className="order_div_select_mini_direction" >
                    <option  className="order_div_option" value="Offline">Offline</option>
                    <option  className="order_div_option" value="Online"> Online  </option>
                  </select>
                  <div className="">
                    <p className="order_div_text_link">Link kiriting</p>
                    <input
                      name="ad_link"
                      required
                      type="url"
                      className="order_input_link"
                    />
                  </div>
                </div>
              </div>
          </div>
          <div className="top_container_two">
            <h1 className="order_title_order">Tashkilotchi</h1>
            <div className="order_flex_div">
              <div className="user_normal_div">
                <label htmlFor="1" className="order_normal_title">
                  Jismoniy shaxs
                </label>
                <input
                  id="1"
                  required
                  type="radio"
                  value="standard"
                  name="user"
                  className="order_normal_check"
                  onClick={() => {
                    const p = document.querySelector(".ptag");
                    p.style.display = "none";
                    const input = document.querySelector(".inputtag");
                    input.style.display = "none";
                    input.defaultValue = "deleted";
                  }}
                />
              </div>
              <div className="user_normal_div">
                <label htmlFor="2" className="order_normal_title">
                  Yuridik shaxs
                </label>
                <input
                  id="2"
                  required
                  type="radio"
                  value="normal"
                  name="user"
                  className="order_normal_check"
                  onClick={() => {
                    const p = document.querySelector(".ptag");
                    p.style.display = "block";
                    const input = document.querySelector(".inputtag");
                    input.style.display = "block";
                    input.defaultValue = "";
                  }}
                />
              </div>
            </div>
            <div className="order_form">
              <div className="order_div_order">
                <div className="order_mini_div_two order_mini_div_twow">
                  <div>
                    <p className="order_div_text_two_prof ptag">Yuridik nomi</p>
                    <input
                      name="yuridik_nomi"
                      required
                      type="text"
                      className="order_div_select_direction inputtag"
                    />
                  </div>
                  <div className="order_div_select_mini_div">
                    <p className="order_div_text_two_prof">Ismi sharifi</p>
                    <input
                      name="ismi_sharifi"
                      required
                      type="text"
                      className="order_div_select_mini_directions"
                    />
                  </div>
                </div>
                <div className="order_mini_div_three">
                  <p className="order_div_text_two_prof">Professiya</p>
                  <input
                    name="professiya"
                    type="text"
                    required
                    className="order_div_select_prof_direction"
                  />
                  <div className="order_link_div">
                    <p className="order_div_text_link">Telefon raqami</p>
                    <input
                      name="telefon_raqami"
                      required
                      type="tel"
                      defaultValue="+998"
                      maxLength="13"
                      minLength="13"
                      className="order_input_link_prof"
                    />
                  </div>
                  <p className="order_div_text_two_tel">Qo’shimcha tel raqam</p>
                  <input
                    name="qoshimcha_tel"
                    required
                    type="tel"
                    defaultValue="+998"
                    maxLength="13"
                    minLength="13"
                    className="order_div_select_mini_direction_tel"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order_div_order">
            <div className="order_div_post">
              <h3 className="order_div_post-title">Post</h3>
              <h2 className="order_div_post-text">Mavzuni sarlavhasi</h2>
              <p className="order_div_post-description">Description</p>
              <input
                className="order_div_post-imput-description"
                placeholder="Description"
                name="description"
                type="text"
              />
              <input className="" type="file" name="image" id="" />
              <textarea
                className=""
                name="text"
                id=""
                cols="30"
                rows="10"
                placeholder="Mavzu matni"
              ></textarea>
            </div>
            <button className="" type="submit">
              E’lonni yuborish
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Order;
