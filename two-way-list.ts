abstract class LinkedList<T> extends ParentList<T> {
}

abstract class TwoWayList<T> extends ParentList<T> {
  // предусловие: левее курсора есть элемент;
  // постусловие: курсор сдвинут на один узел влево
  abstract left(): void;

  abstract get_left_status(): number; // успешно; левее нет элемента
}

abstract class ParentList<T> {
// конструктор
// постусловие: создан новый пустой список
  constructor() {
  }

// команды
// предусловие: список не пуст;
// постусловие: курсор установлен на первый узел в списке
  abstract head(): void;

// предусловие: список не пуст;
// постусловие: курсор установлен на последний узел в списке
  abstract tail(): void;

// предусловие: правее курсора есть элемент;
// постусловие: курсор сдвинут на один узел вправо
  abstract right(): void;

// предусловие: список не пуст;
// постусловие: следом за текущим узлом добавлен новый узел с заданным значением
  abstract put_right(value: T): void;

// предусловие: список не пуст;
// постусловие: перед текущим узлом добавлен новый узел с заданным значением
  abstract put_left(value: T): void;

// предусловие: список не пуст;
// постусловие: текущий узел удалён, курсор смещён к правому соседу,
// если он есть, в противном случае курсор смещён к левому соседу, если он есть
  abstract remove(): void;

// постусловие: список очищен от всех элементов
  abstract clear(): void;

// постусловие: новый узел добавлен в хвост списка
  abstract add_tail(value: T): void;

// постусловие: в списке удалены все узлы с заданным значением
  abstract remove_all(value: T): void;

// предусловие: список не пуст;
// постусловие: значение текущего узла заменено на новое
  abstract replace(value: T): void;

// постусловие: курсор установлен на следующий узел
// с искомым значением, если такой узел найден
  abstract find(value: T): void;

// запросы
  abstract get<T>(); // предусловие: список не пуст
  abstract is_head(): boolean;

  abstract is_tail(): boolean;

  abstract is_value(): boolean;

  abstract size(): number;

// запросы статусов (возможные значения статусов)
  abstract get_head_status(): number; // успешно; список пуст
  abstract get_tail_status(): number; // успешно; список пуст
  abstract get_right_status(): number; // успешно; правее нет элемента
  abstract get_put_right_status(): number; // успешно; список пуст
  abstract get_put_left_status(): number; // успешно; список пуст
  abstract get_remove_status(): number; // успешно; список пуст
  abstract get_replace_status(): number; // успешно; список пуст
  abstract get_find_status(): number; // следующий найден; следующий не найден; список пуст
  abstract get_get_status(): number; // успешно; список пуст
}
