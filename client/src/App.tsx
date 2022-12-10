import { useRef, useState } from "react";
import { graphql, useMutation } from "react-relay";
import { AppMutation, AppMutation$data } from './__generated__/AppMutation.graphql'

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
`;

graphql`
  fragment AppNeverImplementedFragment on NeverImplemented {
    id
  }
`;

graphql`
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
`;

graphql`
  # Fragment
  fragment AppHumanFragment on Human {
    id
  }
`;

export function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [user, setUser] = useState<AppMutation$data['newUser'] | null>(null);
  const [commitMutation, isMutationInFlight] = useMutation<AppMutation>(
    graphql`
      mutation AppMutation($name: String!, $age: String!) {
        newUser(
          otherField: ""
          yetAnotherField: 2
          input: {
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
        <h1>{`Hi ${user.id}`}</h1>
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
              name: nameRef.current!.value,
              age: ageRef.current!.value,
            }
          });
        }}
      >
        <input
          ref={nameRef}
          placeholder="Name"
          disabled={isMutationInFlight}
          type="text"
        />
        <input
          ref={ageRef}
          disabled={isMutationInFlight}
          placeholder="Age"
          type="text"
        />
        <button disabled={isMutationInFlight} type="submit">
          Add user
        </button>
      </form>
    </>
  );
}
