import { useState } from "react";
import { graphql, useMutation } from "react-relay";

graphql`
  fragment AppNodeFragment on Node {
    ...on Node {
      foo: id
    }
    ...on Node {
      bar: id
      foo: id
    }
  }

  fragment AppNeverImplementedFragment on NeverImplemented {
    id
  }

  # Union
  fragment AppHumanOrPetFragment on HumanOrPet {
    __typename
    ... on Human {
      id
    }
    ... on Pet {
      id
    }
  }

  # Fragment
  fragment AppHumanFragment on Human {
    id
  }
`

export function App() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation AppMutation($name: String!, $age: String!) {
        newUser(
          otherField: ""
          yetAnotherField: 2
          input: {
            preferences: {
              loginPreferences: {
                nonNullStringNonNullList: []
                string: $name
              }
            }
            age: $age
            name: $name
          }
        ) {
          id
          age
        }
      }
    `
  );

  if (user) {
    return (
      <>
        <h1>{`Hi ${user.name}`}</h1>
        <p>{`Your age is ${user.age}`}</p>
      </>
    );
  }

  return (
    <>
      <h1>Add user</h1>
      {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : null}
      <form
        style={{ display: "flex", flexDirection: "column", maxWidth: 120 }}
        onSubmit={(event) => {
          event.preventDefault();
          commitMutation({
            onError: (error) => setError({ message: error.message }),
            onCompleted: ({ newUser }) => setUser(newUser),
            variables: {
              name: document.getElementById("name").value,
              age: parseInt(document.getElementById("age").value, 10)
            }
          });
        }}
      >
        <input
          disabled={isMutationInFlight}
          placeholder="Name"
          id="name"
          type="text"
        />
        <input
          disabled={isMutationInFlight}
          placeholder="Age"
          id="age"
          type="text"
        />
        <button disabled={isMutationInFlight} type="submit">
          Add user
        </button>
      </form>
    </>
  );
}
