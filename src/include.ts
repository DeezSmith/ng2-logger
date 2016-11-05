import { Level } from './level';

export function contain(arr: any[], item: any): boolean {
    return arr.filter(l => l === item || item.match(l)).length > 0;
};
