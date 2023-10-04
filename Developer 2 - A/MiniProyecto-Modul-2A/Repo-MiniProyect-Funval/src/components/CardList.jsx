import React from "react";

function CardList(targetas) {
  const estado = targetas.superH;
  const estado2 = targetas.beds;
  return (
      <>
          <div className="card_img">
              <img src={targetas.photo} className="card-img-top" alt="imagen" ></img>
          </div>
          <div className="card_01" >
              {estado && (<span className="card_superH">SUPER HOST</span>)}

              <span className="card_beds">
                  {targetas.type} {estado2 == null ? "" : `. ${targetas.beds} beds`} 
              </span>

              <div className="card_stars">
                  <span className="material-symbols-outlined align-middle" style={{ color: "rgb(235, 87, 87)" }}>
                      star
                  </span>
                  <span className="card_rating">{targetas.rating}</span>
              </div>
          </div>
          <div>
              <p className="fw-bold">{targetas.title}</p>
          </div>
      </>
  )
}
export default CardList






// function CardList({ data }) {
//   return (
//     <section id="cards">
//       {data.map((el, i) => (
//         <Card
//           key={i}
//           superHost={el.superHost}
//           photo={el.photo}
//           title={el.title}
//           type={el.type}
//           beds={el.beds}
//           rating={el.rating}
//           maxGuests={el.maxGuests}
//         />
//       ))}
//     </section>
//   );
// }

// export default CardList;
