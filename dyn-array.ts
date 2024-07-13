abstract class DynArray<T> {
    private array: T[];
    private count: number;
    private capacity: number;

    // конструктор
    // постусловие: создается новый массив с количеством элементов count
    constructor(private _count) {
    }

    // Команды
    // предусловие: index вставляемого элемента не превышает capacity
    // постусловие: при необходимости массив расширяется, в массив добавлено значение value в позицию с номером index
    abstract insert(index: number, value: T): void;

    // предусловие: index не превышает количество элементов в массиве
    // постусловие: из массива удален элемент с номером index
    abstract remove(index: number): void;

    // постусловие: размер текущего массива увеличивается
    abstract extend(): void;

    // постусловие: размер текущего массива уменьшается
    abstract reduce(): void

    // постусловие:

    // Запросы
    // предусловие: index не превышает количество элементов в массиве
    abstract get(index: number): T; // получить элемент с позицией index

    abstract size(): number; // количество элементов в массиве

    abstract find(value: T): number; // получить индекс элемента со значением value
    abstract filter(value: T): T[]; // получить массив элементов со значением value

    abstract get_get_status(); // элемент получен; index в массиве отсутствует
    abstract get_insert_status(); // элемент вставлен; index в массиве отсутствует
    abstract get_remove_status(); // элемент вставлен; index в массиве отсутствует
}
