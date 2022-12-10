/**
 * @generated SignedSource<<91738b9078f41e91ffad908616d1e7f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppHumanOrPetFragment$data = {
  readonly __typename: "Human";
  readonly id: string;
  readonly " $fragmentType": "AppHumanOrPetFragment";
} | {
  readonly __typename: "Pet";
  readonly id: string;
  readonly " $fragmentType": "AppHumanOrPetFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "AppHumanOrPetFragment";
};
export type AppHumanOrPetFragment$key = {
  readonly " $data"?: AppHumanOrPetFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppHumanOrPetFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHumanOrPetFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Human",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Pet",
      "abstractKey": null
    }
  ],
  "type": "HumanOrPet",
  "abstractKey": "__isHumanOrPet"
};
})();

(node as any).hash = "b2e07862c1bef465ab08ee75ac152e72";

export default node;
