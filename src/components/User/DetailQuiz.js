import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { useEffect } from "react";
import _ from "lodash";
import './DetailQuiz.scss';


const DetailQuiz = () => {
    const params = useParams();
    const quizId = params.id; // Get the quiz ID from the URL parameters
    const location = useLocation();
    console.log("check location", location);

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
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">Question 1: How are you?</div>
                    <div className="answer">
                        <div className="a-child">A. jasdjsad</div>
                        <div className="a-child">B. jasdjsad</div>
                        <div className="a-child">C. jasdjsad</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary ">Next</button>
                </div>
            </div>
            <div className="right-content">
                countdown
            </div>
        </div>
    );
}
export default DetailQuiz;