/**
 * @generated SignedSource<<2dd937370b3c09588903c1b7c86a07da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppNeverImplementedFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "AppNeverImplementedFragment";
};
export type AppNeverImplementedFragment$key = {
  readonly " $data"?: AppNeverImplementedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppNeverImplementedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppNeverImplementedFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "NeverImplemented",
  "abstractKey": "__isNeverImplemented"
};

(node as any).hash = "9d059fbc34a975295355c6e86bf5e527";

export default node;
