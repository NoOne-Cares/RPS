import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'
import type { AuthStatus, User, CreatedGame, Game } from '../types/Types'

export const Games = atom<Game[]>()


export const AuthAtom = atom<AuthStatus>('loading');

export const CreatedGames = atomWithStorage<CreatedGame[]>('createdGame', [])
export const Users = atomWithStorage<User>("user", {
    publicKey: null,
    isSignedIn: false,
    signature: null
})

