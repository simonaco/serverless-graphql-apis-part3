import React, { Component } from 'react';
import './App.css';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const getTeams = gql`
  query {
    teams {
      id
      name
      points
    }
  }
`;

const App = () => (
  <div>
    <Query query={getTeams}>
      {({ loading, data }) => (
        <div>
          <svg height="700" width="700">
            {!loading &&
              data.teams.map(team => (
                <circle
                  cx={team.id * 50}
                  cy={50}
                  r={team.points / 1000}
                  stroke="black"
                  strokeWidth="3"
                  fill={team.name}
                />
              ))}
          </svg>
        </div>
      )}
    </Query>
  </div>
);

export default App;
