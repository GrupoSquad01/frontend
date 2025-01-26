import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { correctAnswers, total } = location.state || { correctAnswers: 0, total: 0 };
  console.log("ResultPage state:", location.state)

  return (
    <div className="bg-[#502694] min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow-lg text-center">
        <h1 className="bg-white text-2xl font-bold text-[#1c2434]">Resultado</h1>
        <p className="bg-white mt-4 text-lg font-semibold text-[#1c2434]">
          Você acertou {correctAnswers} de {total} perguntas.
        </p>
      </div>
    </div>
  );
};

export default ResultPage;