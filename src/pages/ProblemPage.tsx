import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Problem } from "../apis/problems/problems-models";
import { getProblem } from "../apis/problems/problems-api";
import Markdown from "react-markdown";

export default function ProblemPage() {
  const [problem, setProblem] = useState<Problem | null>(null);
  const { id = "" } = useParams();

  useEffect(() => {
    getProblem(id).then(setProblem);
  }, []);

  return (
    <>
      <h1>{problem?.title}</h1>
      <Markdown>{problem?.description}</Markdown>
    </>
  );
}
