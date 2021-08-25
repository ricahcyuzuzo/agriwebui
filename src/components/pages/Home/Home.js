import React from 'react';
import Navbar from '../../Navbar';
import { SectionOne, Row, Col, H1, P, Image, Buttons, Card, H3 , SectionTwo} from './HomeStyles';
import HomeImage from '../../../image/hom.png';
import Ads from '../../../image/ads.png';
import Mission from '../../../image/mission.png';
import Purpose from '../../../image/purpose.png';

const Home = () => {
    return (
        <div style={{
        }}>
            <Navbar />
            <SectionOne>  
                <Row>
                    <Col>
                        <H1 style={{
                            fontSize: 50,
                            fontWeight: 'bolder',
                            marginTop: 50,
                        }}>Welcome to Agri Rwanda</H1>
                        <P style={{
                            fontSize: 25,
                        }}>
                            Agri Rwanda is a web app designed to facilitate farmers to reduce harvest destroyed because of lack of market, it links farming cooperatives and individual farmers to customers and facilitates restaurants, schools, hotels, penitentiaries and industries that produce products from agriculture to find the where they can buy crops they need.  
                        </P>
                        <Buttons variant='success'>Sign Up</Buttons>
                    </Col>
                    <Col style={{
                        marginTop: 50
                    }}>
                        <Image src={HomeImage} />
                    </Col>
                </Row>
            </SectionOne>
            <SectionTwo>
                <div style={{
                    marginBottom: 200
                }}>
                    <h3 style={{
                        fontFamily: 'Urbanist',
                        color: 'green',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 40
                    }}>Our main Services</h3>

                    <Row style={{
                        width: '80%'
                    }}>
                        <Card>
                            <img src={Ads} style={{
                                width: '100%',
                                height: 200,
                            }} />
                            <H3>Advertisement</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We can take your message or business to your target market around the continent in a blink of an eye.</P>
                        </Card>
                        <Card>
                            <img src='https://cdni.iconscout.com/illustration/premium/thumb/discussion-forum-2691866-2231679.png' style={{
                                width: '100%',
                                height: 200,
                            }} />
                            <H3>Forum</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide a free platform to discuss your various problems and share knowledge to other farmers in the field.</P>
                        </Card>
                        <Card>
                            <img src={Ads} style={{
                                width: '100%',
                                height: 200,
                            }} />
                            <H3>Product Post</H3>
                            <P style={{
                                textAlign: 'justify',
                                width: '85%',
                                margin: 'auto'
                            }}>We provide a free place to post your produce ready to sell so you can get customers quickly.</P>
                        </Card>
                    </Row>
                </div>
            </SectionTwo>
            <SectionTwo>
                    <Col style={{
                        width: '100%',
                        display: 'flex',
                    }}>
                        <Image src={Mission} style={{
                            width: 500,
                            height: 500,
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            marginTop: 100,
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontSize: 40,
                            fontFamily: 'Urbanist',
                        }}>Our Mission</h3>
                        <P style={{
                            fontSize: 35,
                            width: '50%'
                        }}>We are here to define the success of the farmers in the whole country and Africa in General.</P>
                        </div>
                    </Col>
                    <Col style={{
                        marginLeft: 100,
                        marginRight: 100,
                        display: 'flex'
                    }}>
                        <div style={{
                            marginTop: 100,
                            marginLeft: 80
                        }}>
                            <h3 style={{
                                color: 'green',
                                fontSize: 40,
                                textAlign: 'justify',
                                fontFamily: 'Urbanist',
                            }}>Our Purpose</h3>
                            <P style={{
                                fontSize: 35,
                                width: '65%',
                                textAlign: 'justify'
                            }}>To help farmers get confidence in their proffession and gain skills by them selves in the modern agriculture</P>
                        </div>
                        <Image src={Purpose} style={{
                            width: 500,
                            height: 500,
                            borderRadius: '50%'
                        }} />
                    </Col>
                    <Col style={{
                        width: '100%',
                        display: 'flex',
                    }}>
                        <Image src='https://www.getillustrations.com/packs/flat-vector-illustrations-for-websites/scenes/_1x/deisign%20_%20perspective,%20vision,%20view,%20designs,%20manager_md.png' style={{
                            width: 500,
                            height: 500,
                            borderRadius: '50%',
                            WebkitTransform: 'scaleX(-1)',
                            transform: 'scaleX(-1)'
                        }} />
                        <div style={{
                            marginTop: 100,
                        }}>
                        <h3 style={{
                            color: 'green',
                            fontSize: 40,
                            fontFamily: 'Urbanist',
                        }}>Our Vision</h3>
                        <P style={{
                            fontSize: 35,
                            width: '50%'
                        }}>We are willing to offer good services to farmers and link them to thier customers in East Africa in no time.</P>
                        </div>
                    </Col>
                    <Col style={{
                        width: '100%',
                        display: 'flex',
                        backgroundColor: '#f9f9f9',
                        minHeight: '100px'
                    }}>
                       <h3 style={{
                           color: 'green',
                           fontFamily: 'Urbanist',
                           margin: 'auto'
                       }}>Farma Talk @ 2021</h3> 
                    </Col>
            </SectionTwo>
            
            </div>
    )
}

export default Home