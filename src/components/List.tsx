export interface ListItem {
  id: number;
  message: string;
  complete: boolean;
}

interface Props {
  list: ListItem[];
}

const List = ({ list }: Props) => {
  return (
    <ul className="flex flex-col gap-2 mt-3">
      {list.map((item) => (
        <li
          key={item.id}
          className="p-3 shadow-md bg-gray-50 hover:bg-gray-100"
        >
          {item.message}
        </li>
      ))}
    </ul>
  );
};

export default List;
