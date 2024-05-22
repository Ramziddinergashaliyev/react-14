import "./form.scss";

function FormCreate({ updateForm, form, getValue, createForm }) {
  const handleCreate = (e) => {
    e.preventDefault();
    if (form.id) {
      updateForm(form);
    } else {
      let date = new Date();
      form.id = date.getTime();
      form.time = `${date.getHours()}:${date.getMinutes()}`;
      createForm(form);
    }
  };

  return (
    <form onSubmit={handleCreate} className="form" action="">
      <h1 className="table__title">Table Date</h1>
      <input
        required
        value={form.text}
        onChange={(e) => getValue({ text: e.target.value })}
        placeholder="title"
        type="text"
      />
      <input
        required
        value={form.title}
        onChange={(e) => getValue({ title: e.target.value })}
        placeholder="text"
        type="text"
      />
      <select
        required
        value={form.status}
        onChange={(e) => getValue({ status: e.target.value })}
      >
        <option value="" selected disabled hidden>
          Tanlang
        </option>
        <option value="Muxum">Muxum</option>
        <option value="Xoxishingiz">Xoxishingiz</option>
        <option value="Shart emas">Shart emas</option>
      </select>
      <button>{form.id ? "Save" : "Submit"}</button>
    </form>
  );
}

export default FormCreate;
