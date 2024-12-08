import React from "react";
import "../assets/scss/Developer.scss";
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Portrait,
  Twitter,
} from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <div className="Developer-profile">
        <div className="Developer-profileDetails">
          <p>A music player application built using React, CSS, and HTML.</p>
          <p>Designed to deliver a seamless and responsive user experience.</p>
          <p>
            Features essential controls for playing, pausing, skipping tracks,
            and adjusting volume.
          </p>
          <p>
            Showcases album artwork and provides track details for better
            engagement.
          </p>
          <p>
            Developed with a keen focus on simplicity and user-friendliness.
          </p>
          <p>
            An ideal project to explore and enhance front-end development
            skills.
          </p>
          <div className="Card-btn">
            <IconButton
              target={"_blank"}
              href={"https://www.facebook.com/vishal.kld"}
              title={"vishal.kld"}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://twitter.com/Vishal_kld"}
              title={"Vishal_kld"}
            >
              <Twitter />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.instagram.com/vishalsingh023/"}
              title={"vishalsingh023"}
            >
              <Instagram />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
