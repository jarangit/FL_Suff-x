import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listInfoThink = [
    {
        id: 1,
        imageBanner: '/images/thinkInfo/banner.jpg',
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem vitae fusce morbi orci nulla id turpis. Sit lectus orci, pellentesque nec a, viverra tortor sed. Diam habitant ultrices condimentum tortor purus sit et. Quis ornare duis cursus vitae egestas volutpat.",
        desc: "2 Magazine is a Bangkok-based lifestyle magazine covering art, dining, culture and interesting interviews. From a print publication, it has transformed into an online magazine. As part of this project, the back-office operations were tested by the magazine’s content editor to make sure it’s easy to upload content online."
    }
]

function InfoThink() {
    return (
        <section className='sectionInfoThink'>
            <div className='wrapPage'>
                {
                    listInfoThink.map(user => {
                        return <Container key={user.id}>
                            <Row>
                                <Col lg={12}>
                                    <img className='imageBannerThinkInfo' src={user.imageBanner}></img>
                                </Col>
                                <Col>
                                    <h4>{user.subTitle}</h4>
                                    <p>{user.desc}</p>
                                </Col>
                            </Row>
                        </Container>
                    })
                }
            </div>
        </section>
    );
}

export default InfoThink;