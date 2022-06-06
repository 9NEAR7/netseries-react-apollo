import React from 'react';
import Serie from './Serie';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    series {
        id
        name
        description
        year
        seasons
        url
      }
  }
`
;

const SerieList = () => {
//   const seriesToRender = [
//     {
//       id: 'link-id-1',
//       description:
//         'Prisma gives you a powerful database toolkit 😎',
//       url: 'https://prisma.io'
//     },
//     {
//       id: 'link-id-2',
//       description: 'The best GraphQL client',
//       url: 'https://www.apollographql.com/docs/react/'
//     }
//   ];

    const { data } = useQuery(FEED_QUERY);

        return (
            <div>
                {data && (
                <>
                    {data.series.map((serie) => (
                     <Serie key={serie.id} serie={serie} />
                 ))}
                </>
            )}
        </div>
    );
};

export default SerieList;