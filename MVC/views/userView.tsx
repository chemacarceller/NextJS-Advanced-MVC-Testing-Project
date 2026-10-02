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
    
    const cleanup = UserScript();

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  });
  
  return (
    <>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>{title}</h1>
        <p>Team member management : </p>
        
        <button id="btn-toggle-status" data-showing-active="true" style={{ padding: "0.5rem 1rem", cursor: "pointer", marginBottom: "1rem" }} >
          Show Inactive Users
        </button>

        <div id="users-container" style={{ display: 'grid', gap: '1rem', marginTop: '1rem', fontFamily: 'sans-serif' }} >
          {usersList && usersList.map((user) => (
            <div key={user.id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }} >
              <strong>ID: {user.id} - NAME : {user.name}</strong>{' '}
              — <span style={{ color: '#666' }}>{user.email}</span>{' '}
              — <span style={{ color: '#666' }}>{user.role}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
