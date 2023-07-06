import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listInClient = [
    {
        id: 1,
        position: 'UI/UX Designer',
        descWorksInfo: "2 Magazine is a Bangkok-based lifestyle magazine covering art, dining, culture and interesting interviews. From a print publication, it has transformed into an online magazine. As part of this project, the back-office operations were tested by the magazine’s content editor to make sure it’s easy to upload content online."
    }
]

function InfoCareers() {
    return (
        <section className='sectionInfoCareers'>
            <div className='wrapPage'>
                {
                    listInClient.map(user => {
                        return <Container key={user.id}>
                            <Row>
                                <Col lg={{span: 5, offset:1}}>
                                <h3>Careers</h3></Col>
                            </Row>
                            <Row>
                                <Col lg={{span: 5, offset:1}}>
                                    <div className='wrapItemInfoCareer'>
                                        <h3>Position</h3>
                                        <h2>UI/UX Designer</h2>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='wrapItemInfoCareer'>
                                        <h3>Why this role important for SUFFIX</h3>
                                        <p>User Experience, Usability, and Artistic communication are other essential ways of providing clients solutions through visual means. The designer, thus, plays a vital role in the SUFFIX team to visualize all given content to meet the end-user's needs.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    })
                }
            </div>
        </section>
    );
}

export default InfoCareers;