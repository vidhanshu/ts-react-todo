import "./list.css";
import { AppContext } from "../../App";
import { useContext } from "react";
import Button from "../button/Button";

function List() {
  const { removeTask, tasks } = useContext(AppContext);
  return (
    <div className="list">
      {tasks.map((item, index) => {
        return (
          <div key={index} className="listCard">
            <div className="list__card__content">
              <h1 className="listCard__title">{item.title}</h1>
              <p className="listCard__description">{item.description}</p>
            </div>
            <Button
              className="listCard__remove"
              onClick={() => removeTask(item.id)}
            >
              X
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
