import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const listClientsHome = [
    {
        id: 1,
        image: '/images/home/clients/1.svg',
    },
    {
        id: 2,
        image: '/images/home/clients/1.svg',
    },
    {
        id: 3,
        image: '/images/home/clients/1.svg',
    },
    {
        id: 4,
        image: '/images/home/clients/1.svg',
    },
    {
        id: 5,
        image: '/images/home/clients/1.svg',
    },
    {
        id: 6,
        image: '/images/home/clients/1.svg',
    },
    {
        id: 7,
        image: '/images/home/clients/1.svg',
    },
    {
        id: 8,
        image: '/images/home/clients/1.svg',
    }
]


function ClientsHome() {
    return (
        <div className='wrapPage'>
            <section className='sectionClientHome'>
                <Container>
                    <Row>
                        <Col>
                            <h3>Clients</h3>
                            <div className='wrapListClientHome'>
                                <ul>
                                    {
                                        listClientsHome.map(user => {
                                            return <li key={user.id} ><img src={user.image}></img></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <a>
                    <button>All Client</button>
                </a>
            </section>
        </div>
    );
}

export default ClientsHome;