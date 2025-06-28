import { useEffect, useState } from "react";
import Input from "./Input";
import type { ListItem } from "./List";
import List from "./List";

const localListString = localStorage.getItem("list");

const localList = localListString ? JSON.parse(localListString) : [];

const Body = () => {
  const [list, setList] = useState<ListItem[]>(localList);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="px-5">
      <Input
        addList={(message) => {
          setList([
            ...list,
            {
              id: list.length + 1,
              message: message,
              complete: false,
            },
          ]);
        }}
      />
      <List
        list={list}
        complete={(item) => {
          setList(
            list.map((listItem) =>
              item.id === listItem.id
                ? { ...listItem, complete: !item.complete }
                : listItem
            )
          );
        }}
        deleteItem={(item) => {
          let id: number = 1;
          const newList: ListItem[] = [];
          list.forEach((listItem) => {
            if (item.id !== listItem.id) {
              newList.push({ ...listItem, id: id });
              id += 1;
            }
          });
          setList(newList);
        }}
      />
    </div>
  );
};

export default Body;
