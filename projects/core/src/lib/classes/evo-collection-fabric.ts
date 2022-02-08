import { AbstractEvoCollection } from './abstract-evo-collection';

export class EvoCollectionFabric {
    static create<T extends AbstractEvoCollection<K>, K>(collectionType: (new () => T), itemType: (new (...args: any[]) => K), data: any[]) {
        const collection = Object.create(collectionType.prototype);

        for (const item of data) {
            collection.push(new itemType(item));
        }

        return collection as T;
    }
}
