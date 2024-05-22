import { useMemo } from "react";

function FormManage({ data, deleteForm, updateValus }) {
  let total = useMemo(() => {
    return data.length;
  }, []);
  let todosItems = data?.map((el) => (
    <tr key={el.id}>
      <td>{el.text}</td>
      <td>{el.title}</td>
      <td>{el.time}</td>
      <td>{el.status}</td>
      <td>
        <button className="table__edit" onClick={() => updateValus(el)}>
          edit
        </button>
      </td>
      <td>
        <button className="table__delete" onClick={() => deleteForm(el.id)}>
          delete
        </button>
      </td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Text</th>
          <th>Time</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{todosItems}</tbody>
    </table>
  );
}

export default FormManage;
