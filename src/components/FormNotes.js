import React from 'react';
import Form from 'react-bootstrap/Form';
import '../components/styles/Notes.css'


class FormNotes extends React.Component {
    render(){
      return (
<div className="Form__Notes">
 
  <Form.Control type="text" placeholder="Normal text" />
  <br />
  <Form.Control size="sm" type="text" placeholder="Small text" />
</div>
      );
    };
};
export default FormNotes;