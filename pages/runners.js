import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import PlayerCard from '../components/PlayerCard';

const runnersData = [
  {
    id: 1,
    name: 'ITO',
    rating: 99,
    position: 'IV',
    nation: 'Japan',
    nationImage: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    club: 'VfB Stuttgart',
    clubImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/VfB_Stuttgart_logo.svg/1200px-VfB_Stuttgart_logo.svg.png',
    playerImage: '/images/ito.png', // Specific image for Ito
    skillMoves: '4*',
    weakFoot: '4*',
    stats: { pac: 99, sho: 56, pas: 86, dri: 90, def: 94, phy: 99 },
  },
  {
    id: 2,
    name: 'GONÇALO GUEDES',
    rating: 99,
    position: 'ST',
    nation: 'Portugal',
    nationImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    club: 'Villarreal CF',
    clubImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png',
    playerImage: '/images/goncalo_guedes.png', // Specific image for Gonçalo Guedes
    skillMoves: '4*',
    weakFoot: '4*',
    stats: { pac: 99, sho: 99, pas: 93, dri: 99, def: 44, phy: 92 },
  },
  {
    id: 3,
    name: 'BISSECK',
    rating: 99,
    position: 'IV',
    nation: 'Germany',
    nationImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
    club: 'Inter Milan',
    clubImage: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg',
    playerImage: '/images/bisseck.png', // Specific image for Bisseck
    skillMoves: '4*',
    weakFoot: '4*',
    stats: { pac: 93, sho: 72, pas: 89, dri: 95, def: 97, phy: 99 },
  },
  // Add more runner data as needed
];

function Runners() {
  const { data: session } = useSession();

  const signedInUserCard = session ? {
    id: 'user',
    name: session.user.name.toUpperCase(),
    rating: 99, // Placeholder rating
    position: 'USR', // Placeholder position
    nation: 'User',
    nationImage: session.user.image || 'https://via.placeholder.com/150', // Use user's image if available
    club: 'Alpha Run',
    clubImage: 'https://via.placeholder.com/150', // Placeholder club image
    playerImage: session.user.image || 'https://via.placeholder.com/150', // Use user's image if available
    skillMoves: '5*',
    weakFoot: '5*',
    stats: { pac: 99, sho: 99, pas: 99, dri: 99, def: 99, phy: 99 }, // Placeholder stats
  } : null;

  const displayRunners = session 
    ? [signedInUserCard, ...runnersData] // Revert to only signedInUserCard and runnersData
    : runnersData;

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Runners Page</h1>

      {!session && (
        <div className="auth-buttons-container">
          <button onClick={() => signIn('google')} className="thq-button-filled">
            Sign in with Google
          </button>
        </div>
      )}

      {session && (
        <div className="auth-buttons-container">
          <h2>Welcome, {session.user.name}!</h2>
          <button onClick={() => signOut()} className="thq-button-outline">
            Sign out
          </button>
        </div>
      )}

      <div className="runners-container">
        {displayRunners.map((runner) => (
          <PlayerCard key={runner.id} player={runner} />
        ))}
      </div>
    </div>
  );
}

export default Runners; 