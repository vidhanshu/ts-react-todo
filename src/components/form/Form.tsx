import "./form.css";
import Input from "../input/Input";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { AppContext } from "../../App";
import { useContext, useState } from "react";
import { isNonEmptyAll } from "../../utils";
function Form() {
  const { addTask, tasks } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form className="form">
      <Logo />
      <Input
        autoFocus={true}
        placeholder="title"
        value={title}
        onChange={(evt) => {
          setTitle(evt.target.value);
        }}
      />
      <Input
        placeholder="description"
        value={description}
        onChange={(evt) => {
          setDescription(evt.target.value);
        }}
      />
      <Button
        onClick={(evt: any) => {
          evt.preventDefault();
          if (!isNonEmptyAll([title, description])) {
            return;
          }
          addTask({
            id: tasks.length + 1,
            title,
            description,
          });
          setTitle("");
          setDescription("");
        }}
      >
        Add Task
      </Button>
    </form>
  );
}

export default Form;
