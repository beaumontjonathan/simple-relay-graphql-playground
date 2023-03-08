/**
 * @generated SignedSource<<b3bbd90f90b5c3180af02900dca24d1b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly faction: {
    readonly " $fragmentSpreads": FragmentRefs<"ShipsList_faction">;
  };
  readonly hello: string;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hello",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  },
  {
    "kind": "Literal",
    "name": "search",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "sort",
    "value": {
      "direction": "ASC",
      "field": "NAME"
    }
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "faction",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShipsList_faction"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Faction",
        "kind": "LinkedField",
        "name": "faction",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ShipConnection",
            "kind": "LinkedField",
            "name": "ships",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ShipEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Ship",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "ships(first:5,search:\"\",sort:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": [
              "search",
              "sort"
            ],
            "handle": "connection",
            "key": "ShipsList_faction_ships",
            "kind": "LinkedHandle",
            "name": "ships"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "66330ce5d147949cdb5515e5c825c816",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  hello\n  faction {\n    ...ShipsList_faction\n    id\n  }\n}\n\nfragment ShipsList_faction on Faction {\n  ships(first: 5, search: \"\", sort: {direction: ASC, field: NAME}) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "0a5ad9429563322c472c68c57d309d1a";

export default node;
