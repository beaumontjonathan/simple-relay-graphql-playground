import { Suspense, lazy } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

const Ships = lazy(() => import('./Ships'));

export default function App() {
  const result = useLazyLoadQuery(graphql`
    query AppQuery {
      hello
      faction {
        ...ShipsList_faction
      }
    }
  `, {});

  console.log(result);

  return (
    <Suspense fallback="Loading...">
      <Ships faction={result.faction} />
    </Suspense>
  )
}
