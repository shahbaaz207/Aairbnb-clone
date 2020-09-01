import React from "react";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://3rxg9qea18zhtl6s2u8jammft-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Lyric-New-Orleans-3-Bed-3-Bath-Apartment.jpg"
          title="Online Expriences"
          description="Unique activities we can do together,led by a world of host"
          price="$122/night"
        />
        <Card
          src="https://images.wsj.net/im-71583?width=620&size=1.5"
          title="Unique Stays"
          description="Spaces that are more than just aplace to sleep"
          price="$100/night"
        />
        <Card
          src="https://skift.com/wp-content/uploads/2018/10/london-airbnb-living-room-e1539104712815.jpg"
          title="Entire Homes"
          description="Spaces that are more than just aplace to sleep"
          price="$190/night"
        />
      </div>

      <div className="home_section">
        <Card
          src="https://images.squarespace-cdn.com/content/v1/5bc5dd89f8135a188f4d62a5/1568803935620-1SU091638MU7ZFU38ZLH/ke17ZwdGBToddI8pDm48kHu5svlZ00FUyClFqi3Au_IUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcbdQeNAHQXCpuMbuWyPhuyCCYwhtkuqVQGi_PieSd3ivFfuEiNfrWCGCI6BiBdQD4/The+Nordroom+-+A+Stylish+London+Airbnb+with+Vintage+Touches"
          title="3 Badroom Flat in Bournemouth"
          description="Spaces that are more than just aplace to sleep"
          price="$120/night"
        />
        <Card
          src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2015/06/16/12/sohopenthouse.jpg?w968"
          title="Penthouse in Landon"
          description="Spaces that are more than just aplace to sleep"
          price="$200/night"
        />
        <Card
          src="https://cityrelay.com/wp-content/uploads/2020/06/14-3-1920x1282-opt-1.jpg"
          title="1 Badroom apartment"
          description="Spaces that are more than just aplace to sleep"
          price="$210/night"
        />
      </div>
    </div>
  );
};

export default Home;
