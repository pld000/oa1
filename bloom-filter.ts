abstract class BloomFilter {
    // Конструктор
    // постусловие: создан битовый массив длинной f_len
    constructor(f_len: number) {
    }

    // Команды
    // предусловие: в bloom filters есть свободное место
    // постусловие: в битовый массив установленны единицы, в позиции вычисленные хеш-функциями
    abstract add(value: string)

    // Запросы
    abstract isValue(value: string): boolean // проверить наличие значения в bloom filter

    // Запросы статусов
    abstract get_add_status(): number // элемент добавлен;
}
