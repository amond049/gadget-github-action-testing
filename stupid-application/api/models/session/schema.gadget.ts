import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://stupid-application.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "aiB15UQeAGyN",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "Cm4jnh2-kE18",
    },
  },
};
