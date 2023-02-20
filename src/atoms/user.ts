import { atomWithStorage } from 'jotai/utils';

import { User } from '../types/user';

export const userAtom = atomWithStorage<User | undefined>('user', undefined);
