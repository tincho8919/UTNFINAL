import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{ width: '100%', zIndex: 1000 }}>
      <Container>
        <Row>
          <Col md={3}>
            <h3>Follow Us:</h3>
          </Col>
          <Col md={9} className="d-flex justify-content-between">
            <Col md={3}>
              <nav>
                <a href="https://chat.whatsapp.com/LFIH859lJWk7SnkrAvkCuC" className="text-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green"
                    className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </nav>
            </Col>
            <Col md={3}>
              <nav>
                <a href="https://www.gmail.com/" className="text-light">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-gmail" width="40"
                    height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="red"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z"></path>
                    <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z"></path>
                    <path d="M16 4l-4 4l-4 -4"></path>
                    <path d="M4 6.5l8 7.5l8 -7.5"></path>
                  </svg>
                </a>
              </nav>
            </Col>
            <Col md={3}>
              <nav>
                <a href="https://www.facebook.com/profile.php?id=100082192417567&mibextid=2JQ9oc" 
                  className="text-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue"
                    className="bi bi-facebook" viewBox="0 0 16 16">
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </nav>
            </Col>
            <Col md={3}>
              <nav>
                <a href="https://www.linkedin.com/in/martin-fino-966a54286" className="text-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#007BFF"
                    className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </nav>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="text-center m-5">
              Copyright 2023 TrabajoFinal. All rights reserved. Terms of use & privacy policy.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

