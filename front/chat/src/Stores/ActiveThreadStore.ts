import { writable } from "svelte/store";
import { MucRoom } from "../Xmpp/MucRoom";

function createActiveThreadStore() {
  const { subscribe, update, set } = writable<MucRoom | undefined>();

  return {
    subscribe,
    update,
    set,
    reset() {
      set(undefined);
    },
  };
}

export const activeThreadStore = createActiveThreadStore();
