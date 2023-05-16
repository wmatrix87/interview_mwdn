import React, { FC, useState } from 'react'
import Carousel from '../../features/carousel'
import Gallery from '../../features/gallery'
import useImages from '../../hooks/useImages'

const Layout: FC = () => {
  const  { loading, images} = useImages()
  const [state, toggleState] = useState<boolean>(false);

  const handleToggle = () => toggleState(prevCheck => !prevCheck);

  if (loading) return <div>Loading...</div>

  return <div>
    <button onClick={handleToggle}>toggle state</button>
    {!state && <Carousel images={images} />}
    {state && <Gallery images={images} />}
  </div>
}

export default Layout