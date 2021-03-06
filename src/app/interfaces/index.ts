export interface Register {
  name: string;
  email?: string;
  password: string;
  id?: number | undefined;
  photo_url: string;
  city: string;
  about: string;
}
export type Follower = {
  data: {}[];
};
export interface Comment {
  id: number;
  user_id: number;
  user_name: string;
  comment: string;
}

export interface Story {
  description?: string;
  story: string;
  photo_url: string;
  title: string;
  name: string;
  user_name?: string;
  id: number;
  category_title: string;
  comments: Comment[];
  created_at: string;
  profile_photo: string;
  user_id: number;
  likes: {
    user_id: number;
    post_id: number;
    created_at: string;
    id: number;
    updated_at: string;
  }[];
}

export interface SingleStory {
  post: Story[];
  url: string;
}
export interface User {
  name: string;
  id: number;
}
export interface Login {
  email: string;
  password: string;
}

export interface Profile {
  id: number;
  city: string;
  profile_pic_url: string;
  about_me: string;
  user_name: string;
  user_id?: number;
}

/*
{
  "name": "thomas",
  "profile": {
      "id": 6,
      "user_id": 6,
      "city": "Going Places",
      "profile_pic_url": "https://images.saatchiart.com/saatchi/984876/art/6484557/5554235-FNOTTBWC-7.jpg",
      "about_me": "Living",
      "created_at": "2021-06-26T19:39:26.000-04:00",
      "updated_at": "2021-06-26T19:39:26.000-04:00"
  },
  "token": {
      "type": "bearer",
      "token": "Nw.zpYrqUWAocBZ1vm1TUFrRM82JHewmflZn2wUGnA4y5IYu_hvYjRptcUIBq3l",
      "expires_at": "2021-07-06T19:39:26.810-04:00"
  }
}

*/
