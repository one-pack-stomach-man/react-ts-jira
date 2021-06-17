import { useState } from "react";

export const SearchPannel = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  return <form action="">
      <div>
          <input type="text" value={param.name} onChange={evt => setParam({
              ...param,
              name: evt.target.value,
          })} />
          <select name="" id="" value={ param.personId } onChange={ evt => setParam({
              ...param,
              personId: evt.target.personId,
          }) }></select>
      </div>
  </form>;
};
