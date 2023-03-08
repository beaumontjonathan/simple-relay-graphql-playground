import { useEffect } from 'react';
import { graphql, usePaginationFragment } from 'react-relay';

export default function ShipsList({ faction, searchTerm }) {
  const { data: { ships }, refetch } = usePaginationFragment(graphql`
    fragment ShipsList_faction on Faction
    @argumentDefinitions (
      count: { type: "Int", defaultValue: 5 }
      search: { type: "String", defaultValue: "" }
      sort: { type: "ShipSort", defaultValue: { direction: ASC, field: NAME } }
      cursor: { type: "String", defaultValue: null }
    )
    @refetchable(queryName: "ShipsListPaginationQuery")
    {
      ships(first: $count search: $search sort: $sort after: $cursor)
      @connection(key: "ShipsList_faction_ships")
      {
        edges {
          cursor
          node {
            id
            name
          }
        }
      }
    }
  `, faction);

  useEffect(() => {
    refetch({ search: searchTerm })
  }, [searchTerm])

  return (
    <ul>
      {ships.edges.map(({ node: { id, name } }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
