import React, { useContext } from "react";
import { ThemeContext } from "react";
import avatar from "../Assets/avatar.png";
import pin from "../Assets/003-pin.svg";
import url from "../Assets/002-url.svg";
import twitter from "../Assets/004-twitter.svg";
import office from "../Assets/001-office-building.svg";

const UserCard = () => {
  return (
    <div className="rounded-2xl bg-kalas6 mt-4 ml-6 w-11/12">
      <div className="absolute mt-8 flex">
        <span>
          <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full" />
        </span>
        <div className="absolute ml-32 w-36 h-16 mt-px">
          <div>
            <h1 className="text-kalas4 text-base font-fonty font-semibold">
              The Octocat
            </h1>
            <h4 className="text-kalas1 font-fonty font-medium text-xs">
              @Octocat
            </h4>
          </div>
          <p className="text-kalas2 font-fonty font-semibold text-xs mt-1.5">
            Joined 25 Jan 2011
          </p>
        </div>
      </div>
      <div className="absolute mt-36">
        <p className="text-kalas3 font-fonty text-xs leading-6">
          Lorem ipsum dolor sit amet, consectectuer adipsiscing elit . Doneo
          odio. Quisque vlutpat mattis eros.
        </p>
      </div>
      <div className="absolute mt-60 w-72 h-20 rounded-xl bg-kalas5 flex font-fonty  font-normal leading-normal text-center">
        <div>
          <p className=" text-kalas3 text-xs w-20 ">Repos</p>
          <h2 className="text-kalas4 text-base font-bold uppercase">8</h2>
        </div>
        <div>
          <p className=" text-kalas3 text-xs w-20">Followers</p>
          <h2 className="text-kalas4 text-base font-bold uppercase">3938</h2>
        </div>
        <div>
          <p className=" text-kalas3 text-xs w-20">Following</p>
          <h2 className="text-kalas4 text-base font-bold uppercase">9</h2>
        </div>
      </div>
      <div className="absolute mt-80 text-kalas3 font-fonty text-xs font-normal leading-normal">
        <div className="flex ">
          <img src={pin} alt="location" className="w-3.5 h-5" />
          <h2 className="ml-6">San Francisco</h2>
        </div>
        <div className="flex mt-4">
          <img src={url} alt="url" className="" />
          <h2 className="ml-6">https://github.blog</h2>
        </div>
        <div className="flex mt-4">
          <img src={twitter} alt="twitter" />
          <h2 className="ml-6">Not Available</h2>
        </div>
        <div className="flex mt-4">
          <img src={office} alt="office" />
          <h2 className="ml-6">@github</h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
