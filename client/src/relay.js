import { Environment, Network, RecordSource, Store } from "relay-runtime";

const makeGraphQLPostRequest = async (body) => {
  const url = window.location.origin.replace(":4007", ":5000") + "/graphql";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });

  return response;
};

const fetchQuery = async (operation, variables) => {
  let response = await makeGraphQLPostRequest(
    JSON.stringify({
      query: operation.text,
      variables
    })
  );

  if (response.status !== 200) {
    throw new Error("Unsuccessful GraphQL request");
  }

  return response.json();
};

export const relayEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});
