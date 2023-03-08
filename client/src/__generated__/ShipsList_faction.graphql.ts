/**
 * @generated SignedSource<<75c8e9f526fc0fd6449206c3d4f0fb1f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShipsList_faction$data = {
  readonly id: string;
  readonly ships: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly id: string;
        readonly name: string | null;
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "ShipsList_faction";
};
export type ShipsList_faction$key = {
  readonly " $data"?: ShipsList_faction$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShipsList_faction">;
};

import ShipsListPaginationQuery_graphql from './ShipsListPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ShipsListPaginationQuery_graphql,
      "identifierField": "id"
    }
  },
  "name": "ShipsList_faction",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/)
  ],
  "type": "Faction",
  "abstractKey": null
};
})();

(node as any).hash = "d437ec6a313c0b617b742e17e1b6fc8c";

export default node;
