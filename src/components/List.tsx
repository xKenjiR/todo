export interface ListItem {
  id: number;
  message: string;
  complete: boolean;
}

interface Props {
  list: ListItem[];
  complete: (item: ListItem) => void;
  deleteItem: (item: ListItem) => void;
}

const List = ({ list, complete, deleteItem }: Props) => {
  return (
    <ul className="flex flex-col gap-2 mt-3">
      {list.map((item) =>
        item.complete ? (
          ""
        ) : (
          <li
            key={item.id}
            className="todo flex justify-between p-3 rounded-md bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-600 dark:text-white transition-colors shadow-md cursor-pointer"
            onClick={() => complete(item)}
          >
            <div className="font-medium">{item.message}</div>
            <div
              className="delete font-medium text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300 transition-colors underline"
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item);
              }}
            >
              Delete
            </div>
          </li>
        )
      )}
      {list.map((item) =>
        item.complete ? (
          <li
            key={item.id}
            className="todo flex justify-between p-3 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white transition-colors shadow-md cursor-pointer"
            onClick={() => complete(item)}
          >
            <div className="font-medium line-through opacity-60">
              {item.message}
            </div>
            <div
              className="delete font-medium text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300 transition-colors underline"
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(item);
              }}
            >
              Delete
            </div>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );
};

export default List;
