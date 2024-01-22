import React from "react";
import style from "../CSS/Contact.module.css";
import arrow_icon from "../Assets/arrow_icon.png";
import right_img from "../Assets/right_img.png";
export const ContactPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0644429e-3273-4911-acdf-e51a1c25c55b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div>
          <h1>
            Connecting people <br /> with knowledge
          </h1>
        </div>
        <img
          src="https://about.udemy.com/wp-content/uploads/2021/07/company.png"
          alt="banner"
        />
      </div>
      <div className={style.origin}>
        <h1>Our origins</h1>
        <div>
          <p>
            Born and raised in a quaint Indian village, <br />
            eduSync founder Ranjit faced limited educational opportunities until
            he gained access to a computer. <br />
            Fueled by his dream to excel in mathematics, <br />
            he navigated the vast expanse of the internet, ultimately earning a
            silver medal in the International Math Olympiad.
            <br />
            <br />
            Witnessing the transformative power of online learning in his own
            life, Ranjit collaborated with co-founders Vishwendra,
            <br /> driven by a common vision: to bring quality education within
            reach for every individual through eduSync in India.
          </p>
        </div>
      </div>
      <div className={style.contact_container}>
        <form className={style.contact_left} onSubmit={onSubmit}>
          <div className={style.contact_left_title}>
            <h2>Get in touch</h2>
            <hr />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={style.contact_input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className={style.contact_input}
            required
          />
          <textarea
            type="text"
            name="message"
            placeholder="Your name"
            className={style.contact_input}
            required
          />
          <button type="submit">
            Submit <img src={arrow_icon} alt="" />
          </button>
        </form>
        <div className={style.contact_right}>
          <img src={right_img} alt="" />
        </div>
      </div>
    </div>
  );
};
