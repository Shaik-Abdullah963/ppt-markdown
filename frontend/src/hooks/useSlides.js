import { useEffect, useState } from 'react';
import { fetchSlides, createSlide, updateSlide, deleteSlide } from '../services/api';

export function useSlides() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSlides().then(res => {
      setSlides(res.data.map(s => s.content));
      setLoading(false);
    });
  }, []);

  const saveSlide = async (index, content) => {
    const existing = await fetchSlides();
    const slide = existing.data[index];
    if (slide) {
      await updateSlide(slide.id, { ...slide, content });
    } else {
      await createSlide({ title: `Slide ${index+1}`, content, order: index });
    }
    // refresh
    const res = await fetchSlides();
    setSlides(res.data.map(s => s.content));
  };

  return { slides, saveSlide, loading };
}
