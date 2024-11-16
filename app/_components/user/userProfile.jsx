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
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          {/* Use Next.js Image Component for Banner */}
          <Image
            src={bannerImage}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
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
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {name}
          </h4>
          <p className="text-base font-normal text-gray-600">{title}</p>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
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

  return <ProfileCard {...user} />;
};

export default MyProfilePage;
