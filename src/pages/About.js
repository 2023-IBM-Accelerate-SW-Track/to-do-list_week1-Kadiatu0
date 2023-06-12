import React, { Component } from 'react';
import "./About.css";
import {profile_pic_name} from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
     <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src="/Users/lavender/github-classroom/2023-IBM-Accelerate-SW-Track/to-do-list_week1-Kadiatu0/src/assets"
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kadiatou Diallo</div>
            <div className="brief_description">
              Computer Science rising Junior at Hunter college.
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}