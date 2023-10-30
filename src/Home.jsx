import { useSpring, animated, useTransition, config } from "react-spring";
import "./page.css";
import { useEffect, useState } from "react";
function Home(props) {
  const [showHome, setShowHome] = useState(true);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(false);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const handleNotifyClick = () => {
    // Here you can send the email to your server for further processing
    // Replace this with actual email sending logic
    if (email) {
      // Send the email using an API or backend service
      sendEmail(email);
    }
  };

  const sendEmail = (email) => {
    // Replace this with your email sending logic
    // You may need to make an API request to your server or use a service like Nodemailer (Node.js) for sending emails.
  };
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  const transition = useTransition(showHome, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const textAnimationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <>
      {showHome ? (
        <div className="home-container">
          <animated.div
            className={`animated-text ${showHome ? "" : "fade-out"}`}
            style={animationProps}
          >
            {props.name}
            <span className="small-tm">TM</span>
          </animated.div>
          <animated.div className="animated-est" style={animationProps}>
            <span className="est-2023">Est2023</span>
          </animated.div>
        </div>
      ) : (
        <div className="page-container">
          <div className="header">
            <animated.div className="animated-text" style={animationProps}>
              {props.name}
              <span className="small-tm">TM</span>
            </animated.div>
            <animated.div className="animated-est" style={animationProps}>
              <span className="est-2023">Est2023</span>
            </animated.div>
          </div>
          <div className="separator"></div>
          <animated.div className="body-container" style={animationProps}>
            <div className="custom-div">
              <span className="custom-text">AW'23</span>
              <br />
              <span className="special-date"> COMING SOON</span>
            </div>
            <div className="long-text">
              Sign up to be the first to know when we go live.
            </div>
            <div>
              <form
                action="https://formsubmit.co/verbanaindia@gmail.com"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="email-input"
                  required
                />
                <button className="notify-button" type="submit">
                  Notify Me
                </button>
              </form>
            </div>
          </animated.div>
          <div className="separator"></div>
          <footer className="footer">&copy; 2023 Verbana India</footer>
        </div>
      )}
    </>
  );
}

export default Home;
