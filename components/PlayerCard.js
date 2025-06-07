import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-front">
          <div className="fut-player-card">
            <div className="player-card-top">
              <div className="player-master-info">
                <div className="player-rating">
                  <span>{player.rating}</span>
                </div>
                <div className="player-position">
                  <span>{player.position}</span>
                </div>
                <div className="player-nation">
                  <img src={player.nationImage} alt={player.nation} draggable="false" />
                </div>
                <div className="player-club">
                  <img src={player.clubImage} alt={player.club} draggable="false" />
                </div>
              </div>
              <div className="player-picture">
                <img src={player.playerImage} alt={player.name} draggable="false" />
                <div className="player-extra">
                  <span>{player.skillMoves}SM</span>
                  <span>{player.weakFoot}WF</span>
                </div>
              </div>
            </div>
            <div className="player-card-bottom">
              <div className="player-info">
                <div className="player-name">
                  <span>{player.name}</span>
                </div>
                <div className="player-features">
                  <div className="player-features-col">
                    <span>
                      <div className="player-feature-value">{player.stats.pac}</div>
                      <div className="player-feature-title">PAC</div>
                    </span>
                    <span>
                      <div className="player-feature-value">{player.stats.sho}</div>
                      <div className="player-feature-title">SHO</div>
                    </span>
                    <span>
                      <div className="player-feature-value">{player.stats.pas}</div>
                      <div className="player-feature-title">PAS</div>
                    </span>
                  </div>
                  <div className="player-features-col">
                    <span>
                      <div className="player-feature-value">{player.stats.dri}</div>
                      <div className="player-feature-title">DRI</div>
                    </span>
                    <span>
                      <div className="player-feature-value">{player.stats.def}</div>
                      <div className="player-feature-title">DEF</div>
                    </span>
                    <span>
                      <div className="player-feature-value">{player.stats.phy}</div>
                      <div className="player-feature-title">PHY</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <h3>More About {player.name}</h3>
          <p>Nationality: {player.nation}</p>
          <p>Club: {player.club}</p>
          <p>Overall Rating: {player.rating}</p>
          <p>More detailed information or a short bio can go here.</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard; 