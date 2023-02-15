import {Form,Button} from 'react-bootstrap';
import App from '../../App';


const ReviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {
  return (
    
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        <Button className="game-header-button" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default ReviewForm