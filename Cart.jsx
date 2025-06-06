import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

import { useSelector } from "react-redux";




export default function ReviewPage() {

  const CartData = useSelector((state) => state.CartValue.cart)

  return (
    <section className="vh-100" style={{ backgroundColor: "background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);" }} >
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Shopping Cart </span>
              <span className="h4">(1 item in your cart)</span>
            </p>

            {
              CartData.map((value, index) => (
                <>
                  <MDBCard className="mb-4">
                    <MDBCardBody className="p-4">
                      <MDBRow className="align-items-center">
                        <MDBCol md="2">
                          <MDBCardImage
                            fluid
                            src={value.image}
                            alt="Generic placeholder image"
                          />
                        </MDBCol>
                        <MDBCol md="2" className="d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Product Name</p>
                            <p className="lead fw-normal mb-0">{value.title}</p>
                          </div>
                        </MDBCol>
                        <MDBCol md="2" className="d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Category</p>
                            <p className="lead fw-normal mb-0">
                              <MDBIcon
                                fas
                                style={{ color: "#fdd8d2" }}
                              />
                              {value.category}
                            </p>
                          </div>
                        </MDBCol>
                        <MDBCol md="2" className="d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                            <p className="lead fw-normal mb-0">1</p>
                          </div>
                        </MDBCol>
                        <MDBCol md="2" className="d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Price</p>
                            <p className="lead fw-normal mb-0">{value.price}</p>
                          </div>
                        </MDBCol>
                        <MDBCol md="2" className="d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Total</p>
                            <p className="lead fw-normal mb-0">$799</p>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </>
              ))
            }

            <MDBCard className="mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                    <MDBCardImage
                      fluid
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                      alt="Generic placeholder image"
                    />
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Name</p>
                      <p className="lead fw-normal mb-0">iPad Air</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Color</p>
                      <p className="lead fw-normal mb-0">
                        <MDBIcon
                          fas
                          icon="circle me-2"
                          style={{ color: "#fdd8d2" }}
                        />
                        pink rose
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$799</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
              <MDBBtn color="light" size="lg" className="me-2">
                Continue shopping
              </MDBBtn>
              <MDBBtn size="lg">Add to cart</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}