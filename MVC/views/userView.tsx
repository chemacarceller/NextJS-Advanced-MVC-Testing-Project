"use client";

import '@/app/users/users.css';
import { UserScript } from '@/app/users/users.js';
import { UserModel } from "../models/userModel";
import { useEffect } from 'react';

interface UserViewProps {
  usersList: UserModel[];
  title: string;
}

export function UserView({ usersList, title }: UserViewProps) {

 useEffect(() => {

    if (title) document.title = title;
    const cleanup = UserScript();

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  });
  
  return (
    <>
      <h1>User panel (<span id="users-count">{usersList.length}</span>)</h1>
      <p>Team Member management :</p>
      
      <button id="btn-toggle-status" data-showing-active="true">
        Show Inactive Users
      </button>

      <div id="users-container">
      {usersList.map((user) => (
        <div key={user.id}>
          <strong>ID: {user.id} - NAME : {user.name}</strong> —{' '}
          <span>{user.email}</span> —{' '}
          <span>{user.role}</span>
        </div>
      ))}
      </div>    
    </>  
  );
}