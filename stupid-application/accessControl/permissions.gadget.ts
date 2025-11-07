import type { GadgetPermissions } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://stupid-application.gadget.app/edit/settings/permissions
 */
export const permissions: GadgetPermissions = {
  type: "gadget/permissions/v1",
  roles: {
    unauthenticated: {
      storageKey: "unauthenticated",
    },
    admin: {
      storageKey: "5sk88gmoibpj",
      default: {
        read: true,
        action: true,
      },
      models: {
        session: {
          read: true,
        },
      },
    },
  },
};
