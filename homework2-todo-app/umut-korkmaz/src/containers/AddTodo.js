import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Button, Form, Input, FormGroup } from "reactstrap";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <FormGroup className="col-md-12 mr-0 p-0">
          <Input
            className="col-md-9 float-left"
            innerRef={(node) => (input = node)}
          />
          <Button className="col-md-3 float-left" type="submit">
            Add Todo
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default connect()(AddTodo);
