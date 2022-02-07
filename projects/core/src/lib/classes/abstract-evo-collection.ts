export abstract class AbstractEvoCollection<T> extends Array<T> {
    constructor() {
        super();
        throw new Error(`Inheritor of AbstractEvoCollection can't be instantiated, use EvoCollectionFabric.create() instead.`);
    }
}
