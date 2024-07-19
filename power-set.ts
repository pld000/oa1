abstract class PowerSet {
  public REMOVE_NIL = 0; // операция remove() не вызывалась
  public REMOVE_OK = 1; // последняя операция remove() отработала нормально
  public REMOVE_ERR = 2; // множество пустое

  public GET_NIL = 0; // операция get() не вызывалась
  public GET_OK = 1; // последняя операция get() отработала нормально
  public GET_ERR = 2; // множество пустое

  private poserSet: any[];

  private remove_status: number; // статус запроса remove()
  private get_status: number; // статус запроса get()

  // Конструктор
  // постусловие: создано пустое множество
  constructor() {
    this.clear();
  }

  // Команды
  // постусловие: во множество добавлен новый элемент
  abstract put(value: any): void {
    this.poserSet.push(value);
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
    this.poserSet = [];

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

  // Запросы статусов
  abstract get_remove_status() // элемент удален; в словаре нет элемента с ключем key
  abstract get_get_status() // элемент получен; в словаре нет элемента с ключем key
}
