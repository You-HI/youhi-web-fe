import { atom } from 'jotai';

import { GlobalStoreState } from '@/types/store';

// TODO: test atom 제거
export const globalAtom = atom<GlobalStoreState>({
  test: false,
});

export const testReadOnlyAtom = atom((get) => get(globalAtom).test);

export const testReadWriteAtom = atom(
  (get) => get(globalAtom).test,
  (get, set, test: boolean) => {
    set(globalAtom, (prev) => ({ ...prev, test }));
  },
);
