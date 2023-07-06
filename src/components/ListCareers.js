import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const listItemCareers = [
    {
        id: 1,
        position: 'UI/UX Designer',
        desc: 'User Interface, Usability, and Artistic communication are essential ways of providing solutions for clients through visual means.'
    },
    {
        id: 2,
        position: 'Front-End Developer',
        desc: 'Don’t underestimate the power of technology for business, especially in this digital age.  '
    },
]


function ListCareers() {
    return (
        <section className='sectionListCareers'>
            <div className='wrapPage'>
                <Container>
                <h3>Careers</h3>
                    {
                        listItemCareers.map(user => {
                            return <Row key={user.id} className='wrapItemListCareers'>
                                <Col lg={6}>
                                    <div className='ItemListCareers'>
                                        <h3>Position</h3>
                                        <h2>{user.position}</h2>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='ItemListCareers'>
                                        <h3>Why this role important for SUFFIX</h3>
                                        <p>{user.desc}</p>
                                    </div>
                                </Col>
                            </Row>
                        })
                    }
                </Container>
            </div>
        </section>
    );
}

export default ListCareers;