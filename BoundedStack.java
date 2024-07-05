// АТД
abstract class BoundedStack<T>

public const int POP_NIL = 0; // push() ещё не вызывалась
public const int POP_OK = 1; // последняя pop() отработала нормально
public const int POP_ERR = 2; // стек пуст

public const int PEEK_NIL = 0; // push() ещё не вызывалась
public const int PEEK_OK = 1; // последняя peek() вернула корректное значение
public const int PEEK_ERR = 2; // стек пуст

public const int PUSH_NIL = 0; // push() еще не вызывалась
public const int PUSH_OK = 1; // последняя push() успешно добавила элемент в стек
public const int PUSH_ERR = 2; // стек заполнен, последний элемент не добавлен

// конструктор
// постусловие: создан новый пустой стек с максимальным количеством bound
public BoundedStack<T> BoundedStack(int _bound);


// команды:
// предусловие: в стеке есть свободное место
// постусловие: в стек добавлено новое значение
public void push(T value);

// предусловие: стек не пустой;
// постусловие: из стека удалён верхний элемент
public void pop();

// постусловие: из стека удалятся все значения
public void clear();


// запросы:
// предусловие: стек не пустой
public T peek();

public int size();


// дополнительные запросы:
public int get_pop_status(); // возвращает значение POP_*
public int get_peek_status(); // возвращает значение PEEK_*
public int get_push_status(); // возвращает значение SIZE_*


// ------------------------------------------------------------------

// АТД реализация
class BoundedStack<T>

        // скрытые поля
        private List<T> stack; // основное хранилище стека
        private int bound = 32; // максимальное количество элементов стека
        private int peek_status; // статус запроса peek()
        private int pop_status; // статус команды pop()
        private int push_status; // статус команды push()

// интерфейс класса, реализующий АТД Stack
public const int POP_NIL = 0;
public const int POP_OK = 1;
public const int POP_ERR = 2;
public const int PEEK_NIL = 0;
public const int PEEK_OK = 1;
public const int PEEK_ERR = 2;
public const int PUSH_NIL = 0;
public const int PUSH_OK = 1;
public const int PUSH_ERR = 2;

public void BoundedStack(_bound) // конструктор
        bound = _bound
        clear()

public void push(T value)
        if (size() <= bound)
        stack.Append(value)
        push_status = PUSH_OK
        else
        push_status = PUSH_ERR


public void pop()
        if size() > 0
        stack.RemoveAt(-1)
        pop_status = POP_OK
        else
        pop_status = POP_ERR

public void clear()
        stack = [ ] // пустой список/стек

        // начальные статусы для предусловий peek(), pop() и push()
        peek_status = PEEK_NIL
        pop_status = POP_NIL
        push_status = PUSH_NIL

public T peek()
        if size() > 0
        result = stack[-1]
        peek_status = PEEK_OK
        else
        result = 0
        peek_status = PEEK_ERR
        return result

public int size()
        return stack.Length()

// запросы статусов
public int get_pop_status()
        return pop_status

public int get_peek_status()
        return peek_status

public int get_push_status()
        return push_status