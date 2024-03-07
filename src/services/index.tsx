import axios from "axios";

export const getLocation = () => {
  return new Promise<{ latitude: number; longitude: number }>(
    (resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    }
  );
};

export const getWeather = async (latitude: number, longitude: number) => {
	const apiKey = 'c9b92cb5f646b428dfe0ec4e811e14f7';
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
	try {
	  const response = await axios.get(url);
	  if (response.status !== 200) {
		throw new Error("Failed to fetch data");
	  }
	  const data = response.data;
	  return data;
	} catch (error) {
	  throw error;
	}
  };
  