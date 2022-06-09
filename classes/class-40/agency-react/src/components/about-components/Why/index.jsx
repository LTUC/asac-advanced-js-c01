import React from 'react'
import { Container, Row } from 'react-bootstrap';

export default function index() {
  return (
    <Container fluid className="why-us">
        <Row className="inner-why-us d-flex direction-column gap-4">
          <h2>DO YOU LIKE WHAT YOU SEE ?</h2>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem seqi nesciunt. Neque poro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <div>
            <a href="" className="btn btn-primary">Learn more</a>
          </div>
        </Row>
      </Container>
  )
}
