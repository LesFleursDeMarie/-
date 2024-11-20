import Lectura from '../../Players/Lectura';
import React from 'react';

function SobreNosotros() {
  return (
    <div>
      <Lectura title="Objetivo">
        <p>
          Nuestro principal objetivo es transformar los espacios cotidianos en
          ambientes acogedores y llenos de vida, utilizando elementos
          decorativos y plantas que conecten a las personas con la naturaleza.
          En un mundo donde la rutina y el estrés predominan, buscamos ofrecer
          soluciones decorativas que no solo embellezcan los hogares, sino que
          también promuevan tranquilidad, bienestar y creatividad.
        </p>
        <p>
          Además, queremos ser un puente entre los amantes de la decoración y la
          sostenibilidad, ofreciendo productos cuidadosamente seleccionados que
          sean accesibles, funcionales y estéticamente agradables. Nos
          esforzamos por brindar una experiencia de compra personalizada,
          combinando productos de calidad con un servicio excepcional,
          incluyendo la posibilidad de realizar envíos dentro de nuestra zona
          para mayor comodidad de nuestros clientes. Nuestra meta a largo plazo
          es posicionarnos como una marca de confianza en el sector,
          destacándose, no solo por los productos que vendemos, sino también por
          el impacto positivo que generamos en los hogares de nuestra comunidad
          y el medio ambiente.
        </p>
      </Lectura>

      <Lectura title="Motivo de creación">
        <p>
          Este proyecto nació de una pasión compartida por la decoración y el
          amor por las plantas, elementos que consideramos esenciales para
          transformar cualquier espacio en un lugar especial. Nos inspiró la
          idea de que las plantas no solo son decorativas, sino que también
          mejoran la calidad del aire, reducen el estrés y generan una sensación
          de conexión con la naturaleza.
        </p>
        <p>
          Reconocimos que muchas personas buscan formas sencillas de
          personalizar sus hogares sin complicaciones, pero a menudo enfrentan
          desafíos como falta de tiempo, conocimiento o acceso a productos de
          calidad. Decidimos llenar ese vacío creando una empresa que facilite
          el acceso a plantas hermosas y elementos decorativos cuidadosamente
          seleccionados, ideales para cualquier espacio.
        </p>
      </Lectura>

      <Lectura title='Ubicación' font={false}>
        <p>
          Nuestra sede está ubicada en Jose Severo Malabia 958,
        </p>
          <p>Tucumán, San Miguel De Tucumán</p>
          <p>Jujuy Altura 1700</p>
      </Lectura>
    </div>
  );
}

export default SobreNosotros;
