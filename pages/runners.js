import React from 'react';
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
    playerImage: 'https://selimdoyranli.com/cdn/fut-player-card/img/messi.png',
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
    playerImage: 'https://selimdoyranli.com/cdn/fut-player-card/img/messi.png',
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
    playerImage: 'https://selimdoyranli.com/cdn/fut-player-card/img/messi.png',
    skillMoves: '4*',
    weakFoot: '4*',
    stats: { pac: 93, sho: 72, pas: 89, dri: 95, def: 97, phy: 99 },
  },
  // Add more runner data as needed
];

function Runners() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Runners Page</h1>
      <div className="runners-container">
        {runnersData.map((runner) => (
          <PlayerCard key={runner.id} player={runner} />
        ))}
      </div>
    </div>
  );
}

export default Runners; 