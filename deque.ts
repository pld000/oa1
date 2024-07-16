abstract class ParentQueue<T> {
  public REMOVE_FRONT_NIL = 0; // remove_front() не вызывалась
  public REMOVE_FRONT_OK = 1; // последняя операция remove_front() отработала нормально
  public REMOVE_FRONT_ERR = 2; // список пуст

  public GET_FRONT_NIL = 0; // get_front() не вызывалась
  public GET_FRONT_OK = 1; // последняя операция get_front() отработала нормально
  public GET_FRONT_ERR = 2; // список пуст

  protected _queue: T[];

  private remove_front_status: number; // статус запроса remove_front()
  private get_front_status: number; // статус запроса get_front()

  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
    this._queue = [];
  }

  // команды
  // постусловие: в хвост очереди добавлен новый элемент
  abstract add_tail(value: T): void;

  // предусловие: очередь не пуста;
  // постусловие: из головы очереди удалён элемент
  abstract remove_front(): void;

  // постусловие: из очереди удаляются все элементы
  abstract clear(): void {
    this._queue = [];

    this.remove_front_status = REMOVE_FRONT_NIL;
    this.get_front_status = GET_FRONT_NIL;
  };

  // запросы
  // предусловие: очередь не пуста
  abstract get_front(): T; // получить элемент из головы очереди;

  abstract size(): number { // текущий размер очереди
    return this._queue.length;
  }

  // запросы статусов
  abstract get_remove_front_status(): number { // успешно; очередь пуста
    return this.remove_front_status;
  }

  abstract get_get_front_status(): number { // успешно; очередь пуста
    return this.get_front_status;
  }
}

abstract class Queue<T> extends ParentQueue<T> {
  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
    super();
  }
}

abstract class Deque<T> extends ParentQueue<T> {
  public REMOVE_TAIL_NIL = 0; // remove_tail() не вызывалась
  public REMOVE_TAIL_OK = 1; // последняя операция remove_tail() отработала нормально
  public REMOVE_TAIL_ERR = 2; // список пуст

  public GET_TAIL_NIL = 0; // get_tail() не вызывалась
  public GET_TAIL_OK = 1; // последняя операция get_tail() отработала нормально
  public GET_TAIL_ERR = 2; // список пуст

  private remove_tail_status: number; // статус запроса remove_tail()
  private get_tail_status: number; // статус запроса get_tail()

  // Конструктор
  // постусловие: создана пустая очередь
  constructor() {
    super();
  }

  // Команды
  // постусловие: в голову очереди добавлен новый элемент
  abstract add_front(value: T): void;

  // предусловие: очередь не пуста;
  // постусловие: из хвоста очереди удалён элемент
  abstract remove_tail(): void;

  abstract clear() {
    super.clear();

    this.remove_tail_status = REMOVE_TAIL_NIL;
    this.get_tail_status = GET_TAIL_NIL;
  }

  // Запросы
  // предусловие: очередь не пуста
  abstract get_tail(): T; // получить элемент из хвоста очереди;

  // запросы статусов
  abstract get_remove_tail_status(): number { // успешно; очередь пуста
    return this.remove_tail_status;
  }

  abstract get_get_tail_status(): number { // успешно; очередь пуста
    return this.get_tail_status;
  }
}
