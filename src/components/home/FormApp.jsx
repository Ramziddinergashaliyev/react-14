import { useCallback, useEffect, useState } from "react";
import FormCreate from "./FormCreate";
import FormManage from "./FormManage";

const initialState = {
  id: null,
  title: "",
  text: "",
  status: "",
  time: "",
};

function FormApp() {
  const [form, setform] = useState(initialState);

  const [data, setData] = useState(() => {
    let localData = localStorage.getItem("form");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(data));
  }, [data]);

  let createForm = useCallback(
    (todos) => {
      setData((prev) => [...prev, todos]);
      setform(initialState);
    },
    [data]
  );

  let deleteForm = useCallback(
    (id) => {
      let filterData = data?.filter((el) => el.id !== id);
      setData(filterData);
    },
    [data]
  );

  let updateForm = useCallback(
    (payload) => {
      console.log(payload);
      let index = data?.findIndex((el) => el.id === payload.id);
      data?.splice(index, 1, payload);
      setData([...data]);
      setform(initialState);
    },
    [data]
  );

  let getValue = useCallback((payload) => {
    setform((p) => ({ ...p, ...payload }));
  }, []);

  let updateValus = useCallback((payload) => {
    setform(payload);
  }, []);

  return (
    <div>
      <FormCreate
        form={form}
        createForm={createForm}
        updateForm={updateForm}
        getValue={getValue}
      />
      <FormManage
        updateValus={updateValus}
        deleteForm={deleteForm}
        data={data}
      />
    </div>
  );
}

export default FormApp;
