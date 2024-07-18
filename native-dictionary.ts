const hashFn = value => value;

abstract class NativeDictionary<T> {
    public REMOVE_NIL = 0; // remove() не вызывалась
    public REMOVE_OK = 1; // последняя операция remove() отработала нормально
    public REMOVE_ERR = 2; // в словаре нет элемента с ключем key

    public GET_NIL = 0; // get() не вызывалась
    public GET_OK = 1; // последняя операция get() отработала нормально
    public GET_ERR = 2; // в словаре нет элемента с ключем key

    private slots: string[];
    private values: T[];

    private remove_status: number; // статус запроса remove()
    private get_status: number; // статус запроса get()

    // Конструктор
    // постусловие: создан новый пустой словарь
    constructor() {
        this.clear();
    }

    // Команды
    // постусловие: в словарь добавлено значение value по ключу key
    abstract put(key: string, value: T): void {
        const slot = hashFn(key);
        this.slots[slot] = key;
        this.values[slot] = value;
    }

    // предусловие: в таблице есть элемент с ключем key
    // постусловие: из словаря удален элемент с ключем key
    abstract remove(key: string): void {
        if (this.isKey(key)) {
            this.remove_status = this.REMOVE_OK;
            const slot = this.slots[hashFn(key)];
            this.slots[slot] = null;
            this.values[slot] = null;
        } else {
            this.get_status = this.REMOVE_ERR;
        }
    }

    // постусловие: из словаря удаляются все элементы
    abstract clear(): void {
        this.slots = [];
        this.values = [];

        this.remove_status = this.REMOVE_NIL;
        this.get_status = this.GET_NIL;
    };

    // Запросы
    // предусловие: в таблице есть элемент с ключем key
    abstract get(key: string): T { // получить значение по ключу key
        if (this.isKey(key)) {
            this.get_status = this.GET_OK;
            const slot = this.slots[hashFn(key)];
            return this.values[slot];
        } else {
            this.get_status = this.GET_ERR;
        }
    }

    abstract isKey(key: string): boolean { // содержится ли элемент с ключем key в словаре
        return this.slots[hashFn(key)] === key;
    }

    // Запросы статусов
    abstract get_remove_status() // элемент удален; в словаре нет элемента с ключем key
    abstract get_get_status() // элемент получен; в словаре нет элемента с ключем key
}
