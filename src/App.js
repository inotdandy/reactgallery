import { useState, useEffect } from 'react'
import ImagesCard from './components/ImagesCard';
import ImageSearch from './components/ImageSearch';
function App() {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
          setImages(data.hits)
          setIsLoading(false)
        })
        .catch(err => console.log(err));
  },[term])

  return (
    <div className="container mx-auto">
      <ImageSearch textSearch={(text) => setTerm(text)}/>
      { !isLoading && images.length === 0 && <h1 className="mx-auto text-center text-5xl">No Images found</h1> }
      { isLoading ? <h1 className="mx-auto text-center text-6xl">Loading ...</h1> :<div className="grid grid-cols-3 gap-4">
        {
          images.map(image => (
            <ImagesCard key={image.id} image={image} />
          ))
        }
      </div>}
    </div>
  );
}

export default App;
