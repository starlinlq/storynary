import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useStore } from "../../app/stores/stores";
import StoryCard from "../storyCard/StoryCard";

function Profile() {
  const [state, setState] = useState<object[]>([]);
  const { user } = useStore();
  const { profile: p } = user;

  useEffect(() => {
    user.loadUserStories();
  });

  return (
    <div className="profile">
      {p.map((data) => (
        <Fragment key={data.id}>
          <div className="background">
            <img
              src="https://wallpaperaccess.com/full/1853607.jpg"
              alt="background"
            />
          </div>
          <div className="account">
            <img src={data.profile_pic_url} alt="profile_picture" />
            <div className="details">
              <h1>{user.name}</h1>
              <span>{data.city} </span>
              <div className="followers">
                <span>followers</span>
                <span>following</span>
              </div>
            </div>
          </div>
          <div className="stories">
            <h1>Stories</h1>
            {user.posts.map((data) => (
              <Fragment key={data.id}>
                <StoryCard
                  name={data.name}
                  story={data.story}
                  id={data.id}
                  title={data.title}
                  category={data.category}
                  photo_url={data.photo_url}
                />
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default observer(Profile);