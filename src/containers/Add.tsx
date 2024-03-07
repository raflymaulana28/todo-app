import { Fragment, useState } from "react";
import Container from "../components/Container";
import AppBar from "../components/AppBar";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";
function Add(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const initialForm = {
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  };
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = (e: any) => {
	e.preventDefault();
    setLoading(true);
    const newTodo = {
      ...form,
      id: uuid(),
    };
    dispatch(addTodo(newTodo) as any);
	alert("Todo added successfully");
	setLoading(false);
	setForm(initialForm);
    navigate(-1);
  };
  return (
    <Fragment>
      <AppBar
        title={
          <div className="flex items-center">
            <FaChevronLeft
              className="cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            />
            <h1 className="text-2xl font-bold ml-2">Add Todo</h1>
          </div>
        }
        right={
          <button
            onClick={onSubmit}
            disabled={loading}
            className="bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center gap-1"
          >
            {loading ? "Loading..." : "Save"}
          </button>
        }
      />
      <Container>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={form.title}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={form.date}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Start Time</label>
            <input
              name="startTime"
              onChange={handleChange}
              value={form.startTime}
              type="time"
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">End Time</label>
            <input
              onChange={handleChange}
              value={form.endTime}
              type="time"
              name="endTime"
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Description</label>
            <textarea
              onChange={handleChange}
              value={form.description}
              name="description"
              className="w-full rounded-lg border border-gray-300 p-2"
              rows={5}
            ></textarea>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Add;
