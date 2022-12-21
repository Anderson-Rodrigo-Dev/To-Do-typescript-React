// CSS
import * as S from "./Styles";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Interface
import { ITask } from "../../interfaces/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <S.Form onSubmit={addTaskHandler}>
      <S.InputContainer>
        <S.InputLabel htmlFor="title">Título</S.InputLabel>
        <S.InputText
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel htmlFor="difficulty">Dificuldade:</S.InputLabel>
        <S.InputText
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </S.InputContainer>
      <S.InputSubmit value={btnText} />
    </S.Form>
  );
};

export default TaskForm;
