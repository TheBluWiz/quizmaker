import { useCallback } from "react";

// Available themes for the components
import "survey-core/defaultV2.min.css";
// import "survey-core/modern.min.css";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useMutation } from "@apollo/client";
// import { ADD_RESPONSE } from "../utils/mutations";
const CreateQuiz = require("../utils/CreateQuiz");

const surveyJson = CreateQuiz();
let surveyId = "";
let respondentId = "";
let authorId = "";
// const [addResponse] = useMutation(ADD_RESPONSE);

function RenderQuiz() {
  const survey = new Model(surveyJson);
  surveyId = surveyJson.surveyId;
  respondentId = surveyJson.respondentId;
  authorId = surveyJson.authorId;
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    console.log(results);
    handleQuizSubmit(sender.data, surveyId, respondentId, authorId);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

const handleQuizSubmit = async (data, surveyId, respondentId, authorId) => {
  console.log(data);
  console.log(surveyId);
  console.log(respondentId);
  console.log(authorId);
  //   const mutationResponse = await addResponse({
  //     variables: {
  //       surveyId: surveyId,
  //       authorId: authorId,
  //       respondentId: respondentId,
  //       quizData: data,
  //     },
  //   });
};

export default RenderQuiz;
