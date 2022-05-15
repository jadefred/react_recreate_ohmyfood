import React from "react";

function Entrees(props) {
  const entree = props.dishes.filter((i) => i.type === "entrées");

  return (
    <>
      <div className="card">
        <h3>Entrées</h3>
        <div class="card--all-choices">
          {entree.map((i, index) => {
            return (
              <div className="card__detiles card--display-animation" id={`card-${index + 1}`} key={i.name}>
                <div className="card__food">
                  <h4>{i.name}</h4>
                  <p>{i.subtitle}</p>
                </div>
                <p className="card__price">{i.price / 100}€</p>
                <div className="card__tick">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Entrees;
