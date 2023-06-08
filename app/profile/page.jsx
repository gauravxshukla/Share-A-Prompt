"use client";

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import ProfileCard from '@components/Profile';

const Profile = () => {
  const router = useRouter();
  const {data : session} = useSession();
  const [posts, setPosts] = useState([]);

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  }

  useEffect(() => {
    // fetch data
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      
      console.log(data);
      setPosts(data);
    }

    if(session?.user.id)  fetchPosts();
  }, []);

  return (
    <ProfileCard 
    name = "My"
    desc = "Welcome to your personalized home page"
    data = {posts}
    handleEdit = {handleEdit}
    handleDelete = {handleDelete}
    />
  )
}
 
export default Profile