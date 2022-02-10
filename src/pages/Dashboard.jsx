import React from 'react'
import { Col, Container, Row, Table, Dropdown } from 'react-bootstrap'
import { IconCalendar, IconHome, Icon3 } from '../Assets/images/icons'
import BankChart from '../components/BankChart'
import CreditChart from '../components/CreditChart'
import Item from '../components/Item'
// import BankChart from '../components/BankChart'

const Dashboard = () => {
  return (
    <div className='home'>
      <Container>
        <div className="home_head">
          <div className="heading_tab">
            <h2 className='heading'>Hello, Liam!</h2>
            <p className='sub_heading'>Finance Mission Control</p>
          </div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <img src={IconCalendar} alt="" />
              <span>Last 7 Days</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">Sunday</Dropdown.Item>
              <Dropdown.Item href="/">Monday</Dropdown.Item>
              <Dropdown.Item href="/">Tuesday</Dropdown.Item>
              <Dropdown.Item href="/">Wednesday</Dropdown.Item>
              <Dropdown.Item href="/">Thursday</Dropdown.Item>
              <Dropdown.Item href="/">Friday</Dropdown.Item>
              <Dropdown.Item href="/">Saturday</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row>
          <Col lf={8} md={8}>
            <Row>
              <Col lf={6} md={6}>
                <div className="table_sec mb-4">

                </div>
                <Item title='Analysis on receivables' number='$ 498.58' />
                <Item title='Burn Rate' number='$ 650.10' month='per month' />

              </Col>
              <Col lf={6} md={6}>
                <div className="table_sec bank-sec mb-4">

                  <div className="bankchart">
                    <div className="icon">
                      <img src={IconHome} alt="" />
                    </div>
                    <BankChart />
                  </div>
                  <div className="credit">
                    <div className="icon">
                      <img src={Icon3} alt="" />
                    </div>
                    <CreditChart />
                  </div>
                </div>
                <Item title='Analysis on payable' number='$ 5,410.40' />
                <Item title='Customer lifetime value' number='$ 8,312.31' />

              </Col>
            </Row>
          </Col>
          <Col lf={4} md={4}>
            <div className='table_sec'>
              <div className="table_sec_head">
                <span>Expenses</span>
                <span>This Week</span>
              </div>
              <Table>
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