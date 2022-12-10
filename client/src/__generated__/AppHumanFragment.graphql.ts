/**
 * @generated SignedSource<<ae5bca49bc6d8ec723a2dfa9df7078ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppHumanFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "AppHumanFragment";
};
export type AppHumanFragment$key = {
  readonly " $data"?: AppHumanFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppHumanFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHumanFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Human",
  "abstractKey": null
};

(node as any).hash = "741ccc07a36b99d830acc020da5f9ef8";

export default node;
