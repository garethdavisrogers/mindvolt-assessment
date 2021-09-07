import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="section top">
        <div className="top-first-half">
          <h2>Safe and smart way to pay online.</h2>
          <h2>For just about everything.</h2>
          <h5>Your FirstBank Visa Debit Card.</h5>
          <img
            className="fake-card"
            src="https://res.cloudinary.com/garethssites/image/upload/v1630988536/mindvolt/fake_credit_card_mv8gqh.jpg"
          />
        </div>
      </div>
      <div className="section middle">
        <div>
          <h1>For all your online spending today, rely on Visa Debit.</h1>
          <p>
            It's simple and safe to use you FirstBank Visa Debit Card for the
            purchases you make online and the bills you pay digitally. Make it
            your go-to card for things like:
          </p>
        </div>
        <div className="flex-list">
          <div>
            <h3>Cell phone bills</h3>
            <p>Take care of your monthly payments online, with ease</p>
          </div>
          <div>
            <h3>Streaming services</h3>
            <p>Pay for subscriptions such as music, movies and TV streaming</p>
          </div>
          <div>
            <h3>Utililies</h3>
            <p>
              It's simple to pay utility bills online, from water to electric
            </p>
          </div>
        </div>
        <div>
          <h2>No worries - your purchases are always protected*.</h2>
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
            src="https://res.cloudinary.com/garethssites/image/upload/v1630988534/mindvolt/headphones_guy_qa7jwa.jpg"
          />
          <div>
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
          <p>
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
