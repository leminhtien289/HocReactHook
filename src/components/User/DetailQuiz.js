import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { useEffect } from "react";
import _ from "lodash";

const DetailQuiz = () => {
    const params = useParams();
    const quizId = params.id; // Get the quiz ID from the URL parameters

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log("check res", res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy('id')
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;

                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers)
                        console.log("check item", item);
                    });

                    return {
                        questionId: key,
                        answers,
                        questionDescription,
                        image,
                    };
                })
                .value();
            console.log("check data", data);
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