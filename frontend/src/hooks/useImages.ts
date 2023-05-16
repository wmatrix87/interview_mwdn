import { useState, useEffect } from 'react';
import { Image } from '../types'


const useImages = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    setLoaded(false);
    fetch('http://localhost:3000/images').then((data) => data.json())
      .then((data) => {
        setImages(data);
        setLoaded(true);
        setLoading(false);
      })
      .catch((reason) => {
        setLoaded(true);
        setLoading(false);
        setError(reason.message)
      });
  }, []);

  return { loading, loaded, error, images};
};

export default useImages;
