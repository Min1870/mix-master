import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

interface SearchFormProps {
  searchTerm: string;
}

const SearchForm = ({ searchTerm }: SearchFormProps) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
