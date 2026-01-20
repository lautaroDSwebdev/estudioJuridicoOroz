import Presentacion from '@/_components/inicio/Presentacion'
import SobreNosotros from '@/_components/inicio/SobreNosotros'
import Carrusel from '@/_components/ui-reusable/Carrusel'
import React from 'react'

const page = () => {
  return (
    <div>
      <Presentacion/>
      <SobreNosotros/>
      <Carrusel/>
    </div>
  )
}

export default page
