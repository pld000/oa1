// 2.1
abstract class LinkedList {
    public HEAD_OK = 1; // последняя операция head() отработала нормально
    public HEAD_ERR = 2; // список пуст

    public TAIL_OK = 1; // последняя операция tail() отработала нормально
    public TAIL_ERR = 2; // список пуст

    public RIGHT_OK = 1; // последняя операция right() отработала нормально
    public RIGHT_ERR = 2; // список пуст

    public PUT_RIGHT_OK = 1; // последняя операция put_right() отработала нормально
    public PUT_RIGHT_ERR = 2; // список пуст

    public PUT_LEFT_OK = 1; // последняя операция put_left() отработала нормально
    public PUT_LEFT_ERR = 2; // список пуст

    public ADD_TO_EMPTY_OK = 1; // последняя операция add_to_empty() отработала нормально
    public ADD_TO_EMPTY_ERR = 2; // список не пустой пуст

    public ADD_TAIL_OK = 1; // последняя операция add_tail() отработала нормально
    public ADD_TAIL_ERR = 2; // список пуст

    public FIND_OK = 1; // последняя операция find() отработала нормально
    public FIND_ERR = 2; // список пуст

    public REMOVE_OK = 1; // последняя операция remove() отработала нормально
    public REMOVE_ERR = 2; // список пуст

    public REPLACE_OK = 1; // последняя операция replace() отработала нормально
    public REPLACE_ERR = 2; // список пуст

    public REMOVE_ALL_OK = 1; // последняя операция remove_all() отработала нормально
    public REMOVE_ALL_ERR = 2; // список пуст

    public GET_OK = 1; // последняя операция get() отработала нормально
    public GET_ERR = 2; // список пуст

    public IS_HEAD_OK = 1; // последняя операция is_head() отработала нормально
    public IS_HEAD_ERR = 2; // список пуст

    public IS_TAIL_OK = 1; // последняя операция is_tail() отработала нормально
    public IS_TAIL_ERR = 2; // список пуст

    // Конструктор
    // постусловие: создан новый пустой список
    constructor() {
    }

    // Команды
    // предусловие: список не пустой
    // посусловие: курсор установлен на первый узел всписке
    public head() {
    }

    // предусловие: список не пустой
    // посусловие: курсор установлен на последний узел всписке
    public tail() {
    }

    // предусловие: список не пустой
    // предусловие: справа от курсора есть узел
    // постусловие: курсор установлен на узел справа от текущего узла
    public right() {
    }

    // предусловие: список не пустой
    // постусловие: в список добавлен новый узел с заданным значением значение справа от текущего узла
    public put_right(value) {
    }

    // предусловие: список не пустой
    // постусловие: в список добавлен новый узел с заданным значением значение слева от текущего узла
    public put_left(value) {
    }

    // предусловие: список пустой
    // постусловие: в список добавлено первое значение
    public add_to_empty(value) {
    }

    // предусловие: список не пустой
    // постусловие: в конец списка добавлен новый узел с заданным значением
    public add_tail(value) {
    }

    // предусловие: список не пустой
    // постусловие: курсор установлен на следующий узел с искомым значением, относительно текущего узла
    public find(value) {
    }

    // предусловие: список не пустой
    // постусловие: из списка удаленно текущее значение, курсор сдвинут к правому соседу если он есть,
    // в противном случае к левому, если он есть
    public remove() {
    }

    // предусловие: список не пустой
    // постусловие: у текущего узла заменяется значение на заданное
    public replace(value) {
    }

    // предусловие: список не пустой
    // постуловие: в списке удаленны все узлы с заданным значением
    public remove_all(value) {
    }

    // постусловие: из списка удаляются все значения
    public clear() {
    }

    // Запросы

    // предусловие: список не пустой
    public get() {
    }

    // предусловие: список не пустой
    public is_head() {
    }

    // предусловие: список не пустой
    public is_tail() {
    }

    public size() {
    }

    public is_value() {
    }

    // Дополнительные запросы
    public get_head_status(): number; // возвращает значение HEAD_*
    public get_tail_status(): number; // возвращает значение TAIL_*
    public get_right_status(): number; // возвращает значение RIGHT_*
    public get_put_right_status(): number; // возвращает значение PUT_RIGHT_*
    public get_put_left_status(): number; // возвращает значение PUT_LEFT_*
    public get_add_to_empty_status(): number; // возвращает значение ADD_TO_EMPTY_*
    public get_add_tail_status(): number; // возвращает значение ADD_TAIL_*
    public get_find_status(): number; // возвращает значение FIND_*
    public get_remove_status(): number; // возвращает значение REMOVE_*
    public get_replace_status(): number; // возвращает значение REPLACE_*
    public get_remove_all_status(): number; // возвращает значение REMOVE_ALL_*
    public get_clear_status(): number; // возвращает значение CLEAR_*
    public get_get_status(): number; // возвращает значение GET_*
    public get_is_head_status(): number; // возвращает значение IS_HEAD_*
    public get_is_tail_status(): number; // возвращает значение IS_TAIL_*

// 2.2
// Операция tail не сводима к другим операциям, потому что в реализации не хватает
// опереции left "сдвинуть курсор на один узел влево"

// 2.3
// Операция поиска всех узлов с заданным значением, выдающая список таких узлов, уже не нужна.
// Потому что в эффективной реализации нет возможности вернуть список узлов
