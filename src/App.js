import { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNewImg();
  },[])

  const getNewImg = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12", {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          "x-api-key": "fb312193-ab48-45ec-a651-20f474384702"
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setImages(result);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(images)

  return (
    <div className='App'>

    <button onClick={getNewImg}>Fetch data</button>
    <Gallery images={images} />
    {isLoading && <h2>Loading...</h2>}

    

    </div>
  );
}

export default App;
