import { useEffect } from 'react';
import { graphql, useRefetchableFragment } from 'react-relay';

export default function ShipsList({ faction, searchTerm }) {
  const [{ ships }, refetch] = useRefetchableFragment(graphql`
    fragment ShipsList_faction on Faction
    @argumentDefinitions (
      search: { type: "String", defaultValue: "" }
    )
    @refetchable(queryName: "ShipsListPaginationQuery")
    {
      ships(search: $search) {
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
