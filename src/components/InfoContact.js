import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form"


function InfoContact() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const onSubmit = () => {
        return console.log(getValues());
        // data => console.log(data);
    }

    return (
        <section className='sectionInfoCulture'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3>Get in touch</h3>
                            <h1>Need to bounce off ideas for an upcoming project?  Let’s do great work together.</h1>
                        </Col>
                        <Col lg={6}>
                            <h3>Enquiry</h3>
                            <h2>What services are you looking for</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="firstName">First name</label>
                                <input
                                    id="firstName"
                                    aria-invalid={errors.firstName ? "true" : "false"}
                                    {...register('firstName', { required: true })}
                                />
                                {errors.firstName && (
                                    <span role="alert">
                                        This field is required
                                    </span>
                                )}
                                    
                                <input type="submit" />
                            </form>

                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <h3>Location</h3>
                            <h1>Need to bounce off ideas for an upcoming project?  Let’s do great work together.</h1>
                        </Col>
                        <Col lg={6}>
                            <h3>Address</h3>
                            <h2>SUFFIX CO.,LTD.
                                4A 4th Floor 111 We Space Building Thonglor 5 Sukhumvit 55 Klongton-Nua, Watthana, Bangkok 10110
                            </h2>
                            <Row>
                                <Col>
                                    <h3>Telephone</h3>
                                    <button onClick={() => window.location = 'tel:021852476'}>+66 21852476</button>

                                </Col>
                                <Col>
                                    <h3>Email</h3>
                                    <button onClick={() => window.location = 'mailto:hi@suffix.works'}>hi@suffix.works</button>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default InfoContact;