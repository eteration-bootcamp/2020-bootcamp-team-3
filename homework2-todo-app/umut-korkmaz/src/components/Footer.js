import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import { Label, FormGroup } from "reactstrap";

const Footer = () => (
  <FormGroup className="pl-1 pt-2">
    <Label>Show: </Label>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </FormGroup>
);

export default Footer;
