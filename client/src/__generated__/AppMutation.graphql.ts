/**
 * @generated SignedSource<<a976183c56d99fe42e1ae95256a77704>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppMutation$variables = {
  age: string;
  name: string;
};
export type AppMutation$data = {
  readonly newUser: {
    readonly age: string;
    readonly id: string;
  };
};
export type AppMutation = {
  response: AppMutation$data;
  variables: AppMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "age"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "age",
            "variableName": "age"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      },
      {
        "kind": "Literal",
        "name": "otherField",
        "value": ""
      },
      {
        "kind": "Literal",
        "name": "yetAnotherField",
        "value": 2
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "newUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "8554f029d72e73bfcaf18f539cc84d81",
    "id": null,
    "metadata": {},
    "name": "AppMutation",
    "operationKind": "mutation",
    "text": "mutation AppMutation(\n  $name: String!\n  $age: String!\n) {\n  newUser(otherField: \"\", yetAnotherField: 2, input: {age: $age, name: $name}) {\n    id\n    age\n  }\n}\n"
  }
};
})();

(node as any).hash = "ce8010f12523174fad203349e62fdede";

export default node;
