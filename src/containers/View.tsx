import { Fragment, useEffect, useState } from "react";
import Container from "../components/Container";
import AppBar from "../components/AppBar";
import ListTodo from "../components/ListTodo";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLocation, getWeather } from "../services";
import moment from "moment";

function View(): JSX.Element {
  const navigate = useNavigate();
  const todos = useSelector((state: any) => state.todos.todos);
  const [weather, setWeather] = useState<any>(null);
  const getLocationAndWeather = async () => {
    try {
      const { latitude, longitude } = await getLocation();
      const weatherData = await getWeather(latitude, longitude);
      setWeather(weatherData);
      return weatherData;
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    (async () => {
      await getLocationAndWeather();
    })();
  }, []);
  return (
    <Fragment>
      <AppBar
        title={
          <div>
            <h1 className="text-xl font-semibold">City {weather?.name}</h1>
            <h1 className="text-xl font-semibold">
              {moment().format("DD MMM YYYY")}
            </h1>
            <h1 className="text-xl font-semibold">
              Weather {weather?.weather[0].description}
            </h1>
          </div>
        }
        right={
          <button
            onClick={() => {
              navigate("/add");
            }}
            className="bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center gap-1"
          >
            <FaPlus /> Add Todo
          </button>
        }
      />
      <Container>
        <div className="flex flex-col gap-4">
          {todos?.todos?.length === 0 && (
            <p className="text-center">No todos available</p>
          )}
          {todos &&
            todos.todos?.map((todo: any) => (
              <ListTodo data={todo} key={todo?.id} />
            ))}
        </div>
      </Container>
    </Fragment>
  );
}

export default View;
