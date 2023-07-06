import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const listThinkHome = [
    {
        id: 1,
        thumbnail: '/images/home/think/1.jpg',
        title: 'Solve the business problem by gets to the core of how the problems work?'
    },
    {
        id: 2,
        thumbnail: '/images/home/think/2.jpg',
        title: "Why your business needs an outsider's point of view? "
    },
    {
        id: 3,
        thumbnail: '/images/home/think/3.jpg',
        title: 'Fact-Based Thinking'
    },

]


function ThinkHome() {
    return (
        <div className='wrapPage'>
            <section className='sectionThinkHome'>
                <h3>Think</h3>
                <Container>
                    <Row>
                        {
                            listThinkHome.map(user => {
                                return <Col lg={4} key={user.id}>
                                    <a>
                                        <div className='ItemThinkHome'>
                                            <img src={user.thumbnail}></img>
                                            <h2>{user.title}</h2>
                                        </div>
                                    </a>
                                </Col>
                            })
                        }

                    </Row>
                </Container>
                <a>
                    <button>All Client</button>
                </a>
            </section>
        </div>
    );
}

export default ThinkHome;