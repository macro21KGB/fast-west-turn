import { Game } from './interfaces';

export function addNewGameToStorage(game: Game) {
    const games = getGamesFromStorage();
    games.push(game);
    localStorage.setItem('fast-west-games', JSON.stringify(games));
}

export function getGamesFromStorage(): Game[] {
    const games = localStorage.getItem('fast-west-games');
    return games ? JSON.parse(games) : [];
}