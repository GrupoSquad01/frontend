import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const QuestionPage = () => {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [answers, setAnswers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  // Função para buscar os dados da API
  const fetchQuestion = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/mock-data.json")
      const data = await response.json()
      setQuestions(data)
    } catch (error) {
      console.error("Erro ao buscar os dados:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestion()
  }, []) //Fixed: Added empty dependency array to useEffect

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Carregando...</p>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-red-500">Erro ao carregar os dados. Tente novamente mais tarde.</p>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]

  const handleSelectOption = (option) => {
    setSelectedOption(option)
    const newAnswers = [...answers]
    newAnswers[currentIndex] = option
    setAnswers(newAnswers)
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setSelectedOption(answers[currentIndex - 1] || null)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedOption(answers[currentIndex + 1] || null)
    }
  }

  const handleFinish = () => {
    // Conta o número de respostas corretas
    const correctAnswers = questions.filter((question, index) => question.respostaCorreta === answers[index]).length

    // Redireciona para a página de resultados com o número de acertos
    navigate("/result", { state: { correctAnswers, total: questions.length } })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-10">
        <div className="max-w-4xl mx-auto bg-white p-7 rounded-lg">
          <div className="bg-white flex items-center gap-4">
            <span className="w-3 h-8 bg-[#502694] rounded"></span>
            <h1 className="bg-white text-xl font-bold text-black">Questão {currentIndex + 1}</h1>
          </div>

          <p className="bg-white whitespace-pre-line text-[#1c2434] font-medium pt-6">{currentQuestion.titulo}</p>
          <p className="bg-white mb-5 text-[#1c2434] font-semibold italic">{currentQuestion.enunciado}</p>

          <div className="bg-white space-y-4">
            {currentQuestion.alternativas.map((alt, index) => (
              <div key={index} className="bg-white flex items-center">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={alt}
                  checked={selectedOption === alt}
                  onChange={() => handleSelectOption(alt)}
                  className="hidden peer"
                />
                <div
                  className={`bg-transparent rounded-full border-2 p-2 flex items-center justify-center cursor-pointer ${
                    selectedOption === alt ? "border-4 border-[#502694] bg-white" : "border-[#502694]  bg-white"
                  }`}
                  onClick={() => handleSelectOption(alt)}
                >
                  {selectedOption === alt && <div className="rounded-full bg-[#502694]"></div>}
                </div>
                <label htmlFor={`option-${index}`} className="bg-white ml-2 text-[#1c2434]  cursor-pointer">
                  {alt}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-start space-x-3 mt-6 bg-white">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`py-2 px-4 rounded border-2 transition-colors duration-200 ${
                currentIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-[#502694] text-black"
              }`}
            >
              Anterior
            </button>
            {currentIndex < questions.length - 1 && (
              <button
                onClick={handleNext}
                className="bg-white hover:bg-[#502694] text-black font-semibold py-2 px-4 rounded transition-colors duration-200 border-2 border-[#e2e8f0]"
              >
                Próxima
              </button>
            )}
            {currentIndex === questions.length - 1 && (
              <button
                onClick={handleFinish}
                className="bg-white hover:bg-[#502694] text-black font-semibold py-2 px-4 rounded transition-colors duration-200 border-2 border-[#e2e8f0]"
              >
                Finalizar
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default QuestionPage;