import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listTeamWorks = [
    {
        id: 1,
        position: 'Account Executive',
        name: 'Name Surname'
    },
    {
        id: 2,
        position: 'Designer',
        name: 'Name Surname'
    },
    {
        id: 3,
        position: 'Front-end Developer',
        name: 'Name Surname'
    },
    {
        id: 4,
        position: 'Front-end Developer',
        name: 'Name Surname'
    },
]

function TeamWorksInfo() {
    return (
        <section className='sectionTeamWorksInfo'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Client</h3>
                            <div className='wrapItemTeamWorks'>
                                {
                                    listTeamWorks.map(user => {
                                        return <Col>
                                            <div className='ItemTeamWorks' key={user.id}>
                                                <h3>{user.position}</h3>
                                                <h2>{user.name}</h2>
                                            </div>
                                        </Col>
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default TeamWorksInfo;