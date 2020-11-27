import React, { Fragment } from "react";
import "./LandingPage.css";
import Card from "../components/card/Card";

const LandingPage = () => {
    return (
        <Fragment>
            <div className="landing-page">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="wave1"
                >
                    <path
                        fill="#dcd6f3"
                        fillOpacity="1"
                        d="M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,112C840,107,960,181,1080,202.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="wave2"
                >
                    <path
                        fill="#fff"
                        fillOpacity="1"
                        d="M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,112C840,107,960,181,1080,202.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>
            <div className="card-container">
                <Card />
            </div>
        </Fragment>
    );
};

export default LandingPage;
