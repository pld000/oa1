abstract class ParentQueue<T> {
  public REMOVE_FRONT_OK = 1; // последняя операция remove_front() отработала нормально
  public REMOVE_FRONT_ERR = 2; // список пуст

  public GET_FRONT_OK = 1; // последняя операция get_front() отработала нормально
  public GET_FRONT_ERR = 2; // список пуст

  protected _queue: T[];

  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
  }

  // команды
  // постусловие: в хвост очереди добавлен новый элемент
  abstract add_tail(value: T): void;

  // предусловие: очередь не пуста;
  // постусловие: из головы очереди удалён элемент
  abstract remove_front(): void;

  // постусловие: из очереди удаляются все элементы
  abstract clear(): void;

  // запросы
  // предусловие: очередь не пуста
  abstract get_front(): T; // получить элемент из головы очереди;

  abstract size(): number; // текущий размер очереди

  // запросы статусов
  abstract get_remove_front_status(): number; // успешно; очередь пуста
  abstract get_get_front_status(): number; // успешно; очередь пуста
}

abstract class Queue<T> extends ParentQueue<T> {
  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
    super();
  }
}

abstract class Deque<T> extends ParentQueue<T> {
  public REMOVE_TAIL_OK = 1; // последняя операция remove_tail() отработала нормально
  public REMOVE_TAIL_ERR = 2; // список пуст

  public GET_TAIL_OK = 1; // последняя операция get_tail() отработала нормально
  public GET_TAIL_ERR = 2; // список пуст

  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
    super();
  }

  // команды
  // постусловие: в голову очереди добавлен новый элемент
  abstract add_front(value: T): void;

  // предусловие: очередь не пуста;
  // постусловие: из хвоста очереди удалён элемент
  abstract remove_tail(): void;

  // запросы
  // предусловие: очередь не пуста
  abstract get_tail(): T; // получить элемент из хвоста очереди;

  // запросы статусов
  abstract get_remove_tail_status(): number; // успешно; очередь пуста
  abstract get_get_tail_status(): number; // успешно; очередь пуста
}
