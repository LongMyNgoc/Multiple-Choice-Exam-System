"use client";
import { FC } from "react";
import QuizCard from "./QuizCard";
import { QuizListProps } from "@/app/types/quizList";
import { quizListData } from "@/app/data/quizListData"; // import mảng quiz
import AI from "../Data/AI";
import CNJava from "../Data/CNJava";
import LTCB_Cplusplus from "@/app/components/Data/LTCB_C";
import CNNET from "../Data/CNNET";
import CNPM from "../Data/CNPM";
import CNWeb from "../Data/CNWeb";
import ComputerAssembly from "../Data/ComputerAssembly";
import CSDL from "../Data/CSDL";
import CTDL from "../Data/CTDL";
import DevOps from "../Data/DevOps";
import DHMT from "../Data/DHMT";
import DTDM from "../Data/DTDM";
import HDH from "../Data/HDH";
import HTVTT from "../Data/HTVTT";
import LTDT from "../Data/LTDT";
import LTNC_Cplusplus from "../Data/LTNC_C";
import LTPHP from "../Data/LTPHP";
import LTWindow from "../Data/LTWindow";
import ML from "../Data/ML";
import MMT from "../Data/MMT";
import OOP_Cplusplus from "../Data/OOP_C";
import PTTKGT from "../Data/PTTKGT";
import PTTKHDT from "../Data/PTTKHDT";
import ReactNative from "../Data/ReactNative";
import TKWeb from "../Data/TKWeb";
import Unity from "../Data/Unity";

const QuizList: FC<QuizListProps> = ({ selectedQuiz, setSelectedQuiz }) => {
  switch (selectedQuiz){
    case "ttnt":
      return <AI />
    case "ltcbc":
      return <LTCB_Cplusplus />
    case "cnjava":
      return <CNJava />
    case "cnnet":
      return <CNNET />
    case "cnpm":
      return <CNPM />
    case "cnweb":
      return <CNWeb />
    case "computerassembly":
      return <ComputerAssembly />
    case "csdl":
      return <CSDL />
    case "ctdl":
      return <CTDL />
    case "devops":
      return <DevOps />
    case "dhmt":
      return <DHMT />
    case "dtdm":
      return <DTDM />
    case "hdh":
      return <HDH />
    case "htvtt":
      return <HTVTT />
    case "ltdt":
      return <LTDT />
    case "ltncc":
      return <LTNC_Cplusplus />
    case "ltphp":
      return <LTPHP />
    case "ltwindow":
      return <LTWindow />
    case "ml":
      return <ML />
    case "mmt":
      return <MMT />
    case "ltcoop":
      return <OOP_Cplusplus />
    case "pttkgt":
      return <PTTKGT />
    case "pttkhdt":
      return <PTTKHDT />
    case "reactnative":
      return <ReactNative />
    case "tkweb":
      return <TKWeb />
    case "unity":
      return <Unity />
  }

  return (
    <div className="d-flex flex-wrap gap-3">
      {quizListData.map((quiz) => (
        <QuizCard
          key={quiz.id}
          image={quiz.image}
          title={quiz.title}
          onClick={() => setSelectedQuiz(quiz.id)}
        />
      ))}
    </div>
  );
};

export default QuizList;
