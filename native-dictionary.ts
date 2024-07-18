abstract class NativeDictionary<T> {
    // Конструктор
    // постусловие: создан новый пустой словарь
    constructor() {
    }

    // Команды
    //постусловие: в словарь добавлен значение value с ключом key
    abstract put(key: string, value: T): void {
    }


    // Запросы
    abstract get(key: string): T { // получить значение по ключу key

    }
}
