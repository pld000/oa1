abstract class PowerSet {
  public REMOVE_NIL = 0; // операция remove() не вызывалась
  public REMOVE_OK = 1; // последняя операция remove() отработала нормально
  public REMOVE_ERR = 2; // множество пустое

  private poserSet: any[];

  private remove_status: number; // статус запроса remove()

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

  // предусловие: значение value присутствует во множестве
  // постусловие: из множества удалено значение value
  abstract remove(value: any): void {
    if (this.get(value)) {
      this.remove_status = this.REMOVE_OK;
      this.poserSet.remove(value);
    } else {
      this.remove_status = this.REMOVE_ERR;
    }
  }

  // постусловие: из словаря удаляются все элементы
  abstract clear(): void {
    this.poserSet = [];
    this.remove_status = this.REMOVE_NIL;
  };

  // Запросы
  abstract get(value: any): boolean { // проверить наличие значения во множестве
    return Boolean(this.poserSet.find(item => item === value));
  }

  // Запросы статусов
  abstract get_remove_status() // элемент удален; в словаре нет элемента с ключем key
}
