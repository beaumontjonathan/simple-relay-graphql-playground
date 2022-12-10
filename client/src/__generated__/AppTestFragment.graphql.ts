/**
 * @generated SignedSource<<fc77884ee91dd13e45b1a5b18904d44a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppTestFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "AppTestFragment";
};
export type AppTestFragment$key = {
  readonly " $data"?: AppTestFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppTestFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppTestFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "b2a1fbff6e79f061c6a44ad5e2e9da40";

export default node;
