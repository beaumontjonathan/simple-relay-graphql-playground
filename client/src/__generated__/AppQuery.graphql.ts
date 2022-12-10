/**
 * @generated SignedSource<<12e5f9e91a14f2cc0d5e8b5060fc5e9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly hello: string | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "fooBar": "Foo",
          "otherField": ""
        }
      }
    ],
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": "hello(input:{\"fooBar\":\"Foo\",\"otherField\":\"\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4331372d853c571c1db349a90f1071eb",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  hello(input: {fooBar: Foo, otherField: \"\"})\n}\n"
  }
};
})();

(node as any).hash = "8917d4474de57a593668e298d1ad0e41";

export default node;
