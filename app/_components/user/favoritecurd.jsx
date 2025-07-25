"use client";
import React, { useEffect, useState } from "react";
import PatientCard from "@/_components/user/patiantCard"; // নিশ্চিত হও ফাইল পাথ ঠিক আছে

const FavouritesPage = () => {
  const [favouriteUsers, setFavouriteUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavourites = async () => {
    const favIds = JSON.parse(localStorage.getItem("favouriteUsers")) || [];

    if (favIds.length === 0) {
      setFavouriteUsers([]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/users/favourites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: favIds }),
      });

      const data = await res.json();
      setFavouriteUsers(data.users || []);
    } catch (err) {
      console.error("Error loading favourites", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  if (loading) return <p className="text-center mt-8">লোড হচ্ছে...</p>;

  if (favouriteUsers.length === 0)
    return <p className="text-center mt-8">কোনো পছন্দের প্রোফাইল পাওয়া যায়নি।</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {favouriteUsers.map((user) => (
        <PatientCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default FavouritesPage;
