import React from 'react'
import { Col, Container, Row, Table, Dropdown } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div className='home'>
      <Container><div className="home_head">
        <div className="heading_tab">
          <h2 className='heading'>Hello, Liam!</h2>
          <p className='sub_heading'>Finance Mission Control</p>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Last 7 Days          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Sunday</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Monday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

        <Row>
          <Col lf={4} md={4}>s</Col>
          <Col lf={4} md={4}>d</Col>
          <Col lf={4} md={4}>
            <div className='table_sec'>
              <div className="table_sec_head">
                <span>Expenses</span>
                <span>This Week</span>
              </div>
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th colSpan={2}>Name</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td colSpan={2}>Advertising</td>
                    <td>$ 705</td>
                  </tr>
                  <tr>
                    <td>2 </td>
                    <td colSpan={2}>Car & Truck Expenses</td>
                    <td>$ 674</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Contractors</td>
                    <td>$ 428</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td colSpan={2}>Education and Training</td>
                    <td>$ 404</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td colSpan={2}>Employee Benefits</td>
                    <td>$ 399</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td colSpan={2}>Meals & Entertainment</td>
                    <td>$ 370</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td colSpan={2}>Office Expenses & Postage</td>
                    <td>$ 355</td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td colSpan={2}>Other Expenses</td>
                    <td>$ 210</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td colSpan={2}>Professional Services</td>
                    <td>$ 190</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td colSpan={2}>Rent</td>
                    <td>$ 188</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard