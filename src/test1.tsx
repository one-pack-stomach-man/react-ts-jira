import { useArray } from "useArray";

export const Test = () => {
  const arrs = [
    { name: "jack", age: 12 },
    { name: "jack1", age: 13 },
  ];

  const { value, clear, add, removeIndex0 } = useArray(arrs);
  return (
    <>
    <button onClick={ () => add({ name: 'john', age: 22 }) }>add</button>
    <button onClick={ () => removeIndex0() }>removeIndex0</button>
    <button onClick={ () => clear() }>clear</button>
      {value.map((person) => {
        return (
          <div>
            <div>name: {person.name}</div>
            <div>{person.age}</div>
          </div>
        );
      })}
    </>
  );
};
