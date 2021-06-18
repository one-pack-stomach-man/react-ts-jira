import { useEffect, useState } from "react";
import { SearchPannel } from "./search-pannel";
import { List } from "./list";
import qs from "qs";
import { clearnObj, useMount, useDebounce } from "utils/index";

// const url = process.env.API_URL;
const url = "http://localhost:3003";
console.log("---", url);

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debouncedParam = useDebounce(param);

  useEffect(() => {
    // const paramStr =
    fetch(`${url}/projects?${qs.stringify(clearnObj(debouncedParam))}`).then(
      async (response) => {
        response.ok && setList(await response.json());
      }
    );
  }, [debouncedParam]);

  useMount(() => {
    // const paramStr =
    fetch(`${url}/users`).then(async (response) => {
      response.ok && setUsers(await response.json());
    });
  });

  return (
    <div>
      <SearchPannel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
