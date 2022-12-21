import React from "react";

// CSS
import * as S from "./Styles";

// Interface
import { ITask } from "../../interfaces/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task:ITask):void
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <S.Task key={task.id}>
            <S.Details>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </S.Details>
            <S.Actions>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
            </S.Actions>
          </S.Task>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
