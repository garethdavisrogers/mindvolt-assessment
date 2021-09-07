import React from "react";
import { SiCashapp } from "react-icons/si";
import { ImHeadphones } from "react-icons/im";
import { GiElectric } from "react-icons/gi";

const App = () => {
  return (
    <div className="container">
      <div className="section top">
        <div className="top-first-half">
          <div className="top-text">
            <h2>Safe and smart way to pay online.</h2>
            <h2>For just about everything.</h2>
            <h5>Your FirstBank Visa Debit Card.</h5>
          </div>

          <img
            className="fake-card"
            src="https://res.cloudinary.com/garethssites/image/upload/v1630988536/mindvolt/fake_credit_card_mv8gqh.jpg"
          />
        </div>
      </div>
      <div className="section middle">
        <div className="pitch">
          <h2 style={{color: 'navy'}}>For all your online spending today, rely on Visa Debit.</h2>
          <p>
            It's simple and safe to use you FirstBank Visa Debit Card for the
            purchases you make online and the bills you pay digitally. Make it
            your go-to card for things like:
          </p>
        </div>
        <div className="flex-list">
          <div>
            <SiCashapp size="36px" />
            <h3>Cell phone bills</h3>
            <p>Take care of your monthly payments online, with ease</p>
          </div>
          <div>
            <ImHeadphones size="36px" />
            <h3>Streaming services</h3>
            <p>Pay for subscriptions such as music, movies and TV streaming</p>
          </div>
          <div>
            <GiElectric size="36px" />
            <h3>Utililies</h3>
            <p>
              It's simple to pay utility bills online, from water to electric
            </p>
          </div>
        </div>
        <div className="reassurance">
          <h2 style={{color: 'navy'}}>No worries - your purchases are always protected*.</h2>
          <p>
            Peace of mind is built right in with Visa's security technology
            including Continuous Fraud Monitoring, Transaction Alerts and Data
            Encryption. Plus with Visa's Zero Liability Policy* you won't be
            held responsible for unauthorized purchases, guaranteed.
          </p>
        </div>
      </div>
      <div className="section bottom">
        <div className="bottom-banner">
          <img
            className="bottom-banner-image"
            src="https://res.cloudinary.com/garethssites/image/upload/v1630991519/mindvolt/headphones_guy_ftkwuz.jpg"
          />
          <div className="banner-text">
            <h3>
              When it's time to make an online purchase, use your FirstBank Visa
              Debit Card.
            </h3>
          </div>
          <img
            className="bottom-banner-image"
            src="https://res.cloudinary.com/garethssites/image/upload/v1630988529/mindvolt/young_couple_on_date_k7ibbo.jpg"
          />
        </div>
        <div className="liability-agreement">
          <div className="logos">
            <img
              className="icon"
              src="https://res.cloudinary.com/garethssites/image/upload/v1630992184/mindvolt/bankMega_l6qgjl.png"
            />
            <div className="logo-buffer" />
            <img
              className="icon"
              src="https://res.cloudinary.com/garethssites/image/upload/v1630992830/mindvolt/visa_logo_aikgiz.jpg"
            />
          </div>
          <p className="disclaimer">
            *Visa's Zero Liability Policy does not apply to certain commercial
            card and anonymous predpaid card transactions or transactions not
            processed by Visa. Cardholders must use care in protecting their
            card and notify their issuing financial institution immediately of
            any unauthorized use. Contact your Issuer for more detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
