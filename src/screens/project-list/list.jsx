export const List = ({ users, list }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((pro) => {
          return (
            <tr key={pro.id}>
              <td> {pro.name} </td>
              <td> { users.find(user => user.id === pro.personId)?.name} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
