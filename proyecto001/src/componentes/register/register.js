
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function FormRegister() {
  return (
    <InputGroup hasValidation>
      <InputGroup.Text>@</InputGroup.Text>
      <Form.Control type="text" required isValid />
      <Form.Control.Feedback type="invalid">
        Please choose a username.
      </Form.Control.Feedback>
    </InputGroup>
  );
}

