import React, { useEffect } from 'react';
import AutoPartsCard from './productCard'

const AutoPartsList = ({ parts }) => {
  useEffect(() => {
    const styles = `
      .auto-parts-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr); /* Para pantallas pequeñas */
        gap: 1.5rem; /* Espacio entre los elementos */
      }

      @media (min-width: 640px) {
        .auto-parts-list {
          grid-template-columns: repeat(2, 1fr); /* Para pantallas medianas */
        }
      }

      @media (min-width: 1024px) {
        .auto-parts-list {
          grid-template-columns: repeat(3, 1fr); /* Para pantallas grandes */
        }
      }

      @media (min-width: 1280px) {
        .auto-parts-list {
          grid-template-columns: repeat(4, 1fr); /* Para pantallas extra grandes */
        }
      }
    `;

    const css = new CSSStyleSheet();
    css.replace(styles).then(() => {
      document.adoptedStyleSheets.push(css);
    });

    return () => {
      const index = document.adoptedStyleSheets.indexOf(css);
      if (index > -1) {
        document.adoptedStyleSheets.splice(index, 1);
      }
    };
  }, []);

  return (
    <div className="auto-parts-list">
      {parts.map(part => (
        <AutoPartsCard key={part.id} part={part} />
      ))}
    </div>
  );
};

export default AutoPartsList;
