import React, { Component } from "react";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="row">
        <div className="col-sm-6 ">
          <div className="copyright-text">
            <p>CopyRight © 2018 Digital All Rights Reserved</p>
          </div>
        </div>
        <div className="col-sm-6">
          <ul className="social-link pull-right">
            <li>
              <p>Written by Alison Haire</p>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ally-alison-haire-89670776/">
                <span className="glyphicon glyphicon-heart-empty" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Footer };
