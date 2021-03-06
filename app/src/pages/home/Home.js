import React from "react"
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Home = () => {
	return (
		<>
			<main className="d-flex align-items-center mh-80">
				<Container fluid="true">
					<Row>
						<Col sm={6} lg={{span: 4, offset: 1}}>
							<Card bg="transparent" className="border-0 rounded-0">
								<Card.Body>
									<Form>

										<Form.Group>
											<InputGroup>
												<InputGroup.Prepend>
													<InputGroup.Text>
														<FontAwesomeIcon icon="envelope"/>
													</InputGroup.Text>
												</InputGroup.Prepend>
												<FormControl type="email" placeholder="Email"/>
											</InputGroup>
										</Form.Group>

										<Form.Group>
											<InputGroup>
												<InputGroup.Prepend>
													<InputGroup.Text>
														<FontAwesomeIcon icon="key"/>
													</InputGroup.Text>
												</InputGroup.Prepend>
												<FormControl type="password" placeholder="Password"/>
											</InputGroup>
										</Form.Group>

										<div className="text-md-right">
											<Button variant="primary" type="submit">
												<FontAwesomeIcon icon="sign-in-alt"/>&nbsp;Sign In
											</Button>
										</div>

									</Form>

									<div className="my-2">
										<span className="font-weight-light font-italic">Don't have an account?&nbsp;</span>
										<Link to="/signup">Sign Up</Link>
									</div>

								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	)
};