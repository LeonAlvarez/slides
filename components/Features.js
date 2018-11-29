import React from 'react'
import {Appear} from 'mdx-deck'

export const Feature = ({children, style, src}) => {
  return (
    <div style={{position: 'absolute', zIndex: 10,  ...style}}>
      { src ? <img height="60px" height="60px" src={src} /> : '' }
      {children ? (
        <div
          style={{
            borderRadius: 6,
            padding: 4,
            backgroundColor: 'rgba(1,22,39, 1)',
            color: 'white',
          }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export const Features = () => (
  <div style={{fontSize: 24}}>
    <Appear>
      <div>
        <Feature src={"public/music.png"} style={{top: '10%', left: '40%'}}>Reproducir música</Feature>
      </div>
      <div>
        <Feature src={"public/laugh.png"} style={{top: '30%', left: '10%'}}>Chistes</Feature>
      </div>
      <div>
        <Feature src={"public/clock.png"} style={{top: '30%', left: '60%'}}>Información en tiempo real</Feature>
      </div>
      <div>
        <Feature src={"public/info.png"} style={{top: '33%', left: '33%'}}>Información servicios públicos</Feature>
      </div>
      <div>
        <Feature src={"public/news.png"} style={{top: '60%', left: '15%'}}>Noticias</Feature>
      </div>
      <div>
        <Feature src={"public/cart.png"} style={{top: '65%', left: '30%'}}>Compras</Feature>
      </div>
      <div>
        <Feature src={"public/user.png"} style={{top: '60%', left: '50%'}}>Nueva interfaz de usuario para aplicaciones existentes</Feature>
      </div>
      <div>
        <Feature src={"public/light.png"} style={{top: '80%', left: '40%'}}>Controlar dispositivos inteligentes</Feature>
      </div>
    </Appear>
  </div>
)