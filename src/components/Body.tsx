import { useState } from "react";
import Input from "./Input";
import type { ListItem } from "./List";
import List from "./List";

const Body = () => {
  const [list, setList] = useState<ListItem[]>([
    {
      id: 1,
      message: "Wake up",
      complete: false,
    },
    {
      id: 2,
      message: "Fix Bed",
      complete: false,
    },
  ]);
  return (
    <div className="px-5">
      <Input />
      <List list={list} />
    </div>
  );
};

export default Body;
