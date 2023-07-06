import './style.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listInfoWorks = [
    {
        id: 1,
        imageBanner: '/images/workInfo/banner.jpg',
        imageBannerCenter:'/images/workInfo/bannerCenter.jpg',
        imageBannerBottom:'/images/workInfo/bannerBottom.jpg',
        descWorksInfo: "2 Magazine is a Bangkok-based lifestyle magazine covering art, dining, culture and interesting interviews. From a print publication, it has transformed into an online magazine. As part of this project, the back-office operations were tested by the magazine’s content editor to make sure it’s easy to upload content online."
    }
]

function InfoWorks() {
    return (
        <section className='sectionInfoWorks'>
            <div className='wrapPage'>
                {
                    listInfoWorks.map(user => {
                        return <Container key={user.id}>
                            <Row>
                                <Col lg={12}>
                                    <img src={user.imageBanner}></img>
                                </Col>
                                <Col lg={{span:10,offset:1}}>
                                    <p>{user.descWorksInfo}</p>
                                </Col>
                                <Col lg={12}>
                                    <img className='imageBannerCenter' src={user.imageBannerCenter}></img>
                                    <img className='imageBannerBottom' src={user.imageBannerBottom}></img>
                                </Col>
                            </Row>
                        </Container>
                    })
                }
            </div>
        </section>
    );
}

export default InfoWorks;