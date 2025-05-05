import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { useEffect } from "react";

const DetailQuiz = () => {
    const params = useParams();
    const quizId = params.id; // Get the quiz ID from the URL parameters

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        const res = await getDataQuiz(quizId);
        console.log("check res", res);
        if (res && res.EC === 0) {
            // Handle the response data as needed
        }
    }

    return (
        <div className="detail-quiz-container">
            <h1>Detail Quiz</h1>
            <p>This is the detail quiz page.</p>
        </div>
    );
}
export default DetailQuiz;