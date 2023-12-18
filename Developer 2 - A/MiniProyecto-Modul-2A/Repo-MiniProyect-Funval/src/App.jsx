import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("stays.json");
        const resJson = await res.json();
        setData(resJson);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const itemsPerPage = 3;

  const firstRowData = data.slice(0, 7); // Del índice 0 al 6
  const secondRowData = data.slice(7, 14); // Del índice 7 al 14

  const totalPagesFirstRow = Math.ceil(firstRowData.length / itemsPerPage);
  const totalPagesSecondRow = Math.ceil(secondRowData.length / itemsPerPage);

  const [currentPage1, setCurrentPage1] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);

  const startIndex1 = currentPage1 * itemsPerPage;
  const endIndex1 = startIndex1 + itemsPerPage;
  const visibleData1 = firstRowData.slice(startIndex1, endIndex1);

  const startIndex2 = currentPage2 * itemsPerPage;
  const endIndex2 = startIndex2 + itemsPerPage;
  const visibleData2 = secondRowData.slice(startIndex2, endIndex2);

  const handlePrevClick1 = () => {
    setCurrentPage1((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick1 = () => {
    setCurrentPage1((prev) => Math.min(prev + 1, totalPagesFirstRow - 1));
  };

  const handlePrevClick2 = () => {
    setCurrentPage2((prev) => Math.max(prev - 1, 0));
  };

  const handleNextClick2 = () => {
    setCurrentPage2((prev) => Math.min(prev + 1, totalPagesSecondRow - 1));
  };

  return (
    <div className='card-aptos'>
      <div className="listas-orientadas">
        <div className='btn-bf'>
        <button onClick={handlePrevClick1} disabled={currentPage1 === 0}>&lt;
          </button>
        </div>
        {visibleData1.map((el, i) => (
          <Card key={i} photo={el.photo} title={el.title} type={el.type} beds={el.beds} superHost={el.superHost} rating={el.rating}/>
        ))}
        {/* Botones para la primera fila */}
        <div className='btn-aft'>
          <button onClick={handleNextClick1} disabled={currentPage1 === totalPagesFirstRow - 1}>
          &gt;
          </button>
        </div>
      </div>
      <div className="listas-orientadas">
        <div className='btn-bf'>
        <button onClick={handlePrevClick2} disabled={currentPage2 === 0}>
        &lt;
          </button>
        </div>
        {visibleData2.map((el, i) => (
          <Card key={i} photo={el.photo} title={el.title} type={el.type} beds={el.beds} superHost={el.superHost} rating={el.rating}/>
        ))}
        {/* Botones para la segunda fila */}
        <div className='btn-aft'>
          <button onClick={handleNextClick2} disabled={currentPage2 === totalPagesSecondRow - 1}>
          &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
