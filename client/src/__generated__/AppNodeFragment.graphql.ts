/**
 * @generated SignedSource<<b559c5cdda60f84b7d87396213cc4e37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppNodeFragment$data = {
  readonly bar: string;
  readonly foo: string;
  readonly " $fragmentType": "AppNodeFragment";
};
export type AppNodeFragment$key = {
  readonly " $data"?: AppNodeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppNodeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppNodeFragment",
  "selections": [
    {
      "alias": "foo",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": "bar",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};

(node as any).hash = "60b9b6aa5485f917676cb71cd107077c";

export default node;
