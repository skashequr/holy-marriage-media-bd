import React from "react";
import Image from "next/image"; // Importing the Next.js Image component

const ProfileCard = ({
  name,
  title,
  profilePicture,
  bannerImage,
  posts,
  followers,
  following,
}) => {
  return (
    <div className="grid grid-cols-1 my-4 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
      <div className="relative flex flex-col items-center rounded-lg border border-gray-200 w-[90%] sm:w-[350px] lg:w-[400px] mx-auto p-6 bg-white shadow-md dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
        <div className="relative flex  items-center justify-center lg:m-3 w-full h-20 sm:h-24 lg:h-48 rounded-xl bg-cover">
          {/* Use Next.js Image Component for Banner */}
          <Image
            src={bannerImage}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute lg:my-9 -my-2 -bottom-8 sm:-bottom-8 lg:-bottom-20 flex items-center justify-center w-[87px] h-[87px] rounded-full border-4 border-white bg-pink-400 dark:border-navy-700">
            {/* Use Next.js Image Component for Profile Picture */}
            <Image
              src={profilePicture}
              alt="Profile Picture"
              width={87} // Set the width and height explicitly
              height={87}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center text-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            {name}
          </h4>
          <p className="text-base font-normal text-gray-600">{title}</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:gap-12 md:gap-14 lg:gap-16 justify-center text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              {posts}
            </p>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              {followers}
            </p>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              {following}
            </p>
            <p className="text-sm font-normal text-gray-600">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyProfilePage = () => {
  const user = {
    name: "Adela Parkson",
    title: "Product Manager",
    profilePicture: "https://i.ibb.co.com/HNcr6jD/image.png",
    bannerImage:
      "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png",
    posts: 17,
    followers: "9.7K",
    following: 434,
  };

  return (
    <div className="grid grid-cols-2">
      <ProfileCard {...user} />
      <ProfileCard {...user} />
      <ProfileCard {...user} />
    </div>
  );
};

export default MyProfilePage;
