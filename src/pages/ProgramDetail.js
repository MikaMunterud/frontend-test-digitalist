import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import "../sass/ProgramDetail.scss";

export default function ProgramDetail() {
  const { id } = useParams();
  const [programInfo, setProgramInfo] = useState(null);

  useEffect(
    function () {
      function getProgramInfo() {
        const program = data.products.filter(function (product) {
          return product.name === id;
        });
        setProgramInfo(program);
      }
      getProgramInfo();
    },
    [id]
  );

  if (programInfo === null) {
    return <h2>Loading...</h2>;
  }

  if (programInfo.length === 0) {
    return <h2>Data could not be found...</h2>;
  }

  return (
    <section className="programDetail">
      <img
        className="programDetail_image"
        src={programInfo[0].image}
        alt={`Logo of ${programInfo[0].image}`}
      />
      <h2 className="programDetail_heading">
        {programInfo[0].name.toUpperCase()}
      </h2>
      <p className="programDetail_description">{programInfo[0].description}</p>
      <a
        className="programDetail_link"
        href={programInfo[0].link}
        target="_blank"
        rel="noreferrer"
      >
        Read more on Mozilla
      </a>
    </section>
  );
}
