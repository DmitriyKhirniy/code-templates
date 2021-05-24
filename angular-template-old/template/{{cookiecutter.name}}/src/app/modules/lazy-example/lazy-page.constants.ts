import { gql } from 'apollo-angular';

export const Query = gql`
          {
            weathercurrent(siteCode: "FRO") {
              siteCode
              siteName
              latitude
              longitude
              sky
              description
              temperature
              relativeHumidity
              updatedTime
              precipitationHr
              snow
            }
          }
        `;

export const QueryExample = `
          {
            weathercurrent(siteCode: "FRO") {
              siteCode
              siteName
              latitude
              longitude
              sky
              description
              temperature
              relativeHumidity
              updatedTime
              precipitationHr
              snow
            }
          }
        `;
