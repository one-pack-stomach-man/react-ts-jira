import { User } from 'screens/project-list/search-pannel'

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ users, list }: ListProps) => {
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
              <td> {users.find((user) => user.id === pro.personId)?.name} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
