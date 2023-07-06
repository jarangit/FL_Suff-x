import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const listClientsHome = [
    {
        id: 1,
        thumbnail: '/images/works/1.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution',
        slug:''
    },
    {
        id: 2,
        thumbnail: '/images/works/2.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 3,
        thumbnail: '/images/works/3.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 4,
        thumbnail: '/images/works/4.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 5,
        thumbnail: '/images/works/5.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 6,
        thumbnail: '/images/works/6.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 7,
        thumbnail: '/images/works/7.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 8,
        thumbnail: '/images/works/8.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 9,
        thumbnail: '/images/works/9.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 10,
        thumbnail: '/images/works/10.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
]


function ListWorks() {
    return (
        <section className='sectionListWorks'>
            <div className='wrapPage'>
                <Container>
                    <Row>
                        {
                            listClientsHome.map(user => {
                                return <Col lg={6}>
                                    <Link to="/worksInfo">
                                        <div className='ItemListWorks' key={user.id}>
                                            <img src={user.thumbnail}></img>
                                            <h2>{user.title}</h2>
                                            <p>{user.catagory}</p>
                                        </div>
                                    </Link>
                                    
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ListWorks;