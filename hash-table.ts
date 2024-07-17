const hashFn = value => value;

abstract class HashTable<T> {
    public PUT_OK = 1; // последняя операция put() отработала нормально
    public PUT_ERR = 2; // хеш таблица пуст

    public REMOVE_OK = 1; // последняя операция remove() отработала нормально
    public REMOVE_ERR = 2; // хеш таблица пуст

    private put_status: number;
    private remove_status: number;

    private _maxSize: number;
    private _hashTable: T[];

    // Конструктор
    // постусловие: создана пустая хеш таблица
    constructor(maxSize: number) {
        this._maxSize = maxSize;
        this._hashTable = [];
    }

    // Команды

    // предусловие: в таблице есть свободное место
    // постусловие: в таблицу добавлен элемент со значением value
    abstract put(value: T): void {
        if (this.size() <= this.maxSize()) {
            this._hashTable[hashFn(value)] = value;
            this.put_status = this.PUT_OK;
        } else {
            this.put_status = this.PUT_ERR;
        }
    }

    // предусловие: хеш таблица не пуста
    // постусловие: из таблицы удален элемент со значением value
    abstract remove(value: T): void {
        if (this.size() > 0) {
            this._hashTable.remove(hashFn(value));
            this.remove_status = this.REMOVE_OK;
        } else {
            this.remove_status = this.REMOVE_ERR;
        }
    }

    // Запросы
    abstract find(value: T): number { // получить индекс в хеш таблице элемента со значением value
        return hashFn(value);
    }

    abstract maxSize(): number { // размер хеш таблицы
        return this._maxSize;
    }

    abstract size(): number { // количество элементов в хеш таблице
        return this._hashTable.length;
    }

    // запросы статусов
    abstract get_put_status(): number { // успешно; хеш таблица пуста
        return this.put_status;
    }

    abstract get_remove_status(): number { // успешно; хеш таблица пуста
        return this.remove_status;
    }
}
