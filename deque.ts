abstract class ParentQueue<T> {
  protected _queue: T[];

  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
  }

  // команды
  // постусловие: в хвост очереди добавлен новый элемент
  abstract add_tail(value: T);

  // предусловие: очередь не пуста;
  // постусловие: из головы очереди удалён элемент
  abstract remove_front() {

  };

  // запросы
  // предусловие: очередь не пуста
  abstract get_front(): T; // получить элемент из головы очереди;

  abstract size(): number; // текущий размер очереди

  // запросы статусов
  abstract get_remove_front_status(); // успешно; очередь пуста
  abstract get_get_front_status(); // успешно; очередь пуста
}

abstract class Queue<T> extends ParentQueue<T> {
  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
    super();
  }
}

abstract class Deque<T> extends ParentQueue<T> {
  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
    super();
  }

  // команды
  // постусловие: в голову очереди добавлен новый элемент
  abstract add_front(value: T);

  // предусловие: очередь не пуста;
  // постусловие: из хвоста очереди удалён элемент
  abstract remove_tail();

  // запросы
  // предусловие: очередь не пуста
  abstract get_tail(): T; // получить элемент из хвоста очереди;

  // запросы статусов
  abstract get_remove_tail_status(); // успешно; очередь пуста
  abstract get_get_tail_status(); // успешно; очередь пуста
}
