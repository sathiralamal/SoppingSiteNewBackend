//for admin to view all bank payments and do actions

import React, { Component } from "react";
import {
    Button,
    Container,
    Table, Alert,
} from "reactstrap";

import CFooter from "@coreui/react/es/CFooter";
import axios from "axios";


class payAdminReceipt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        };

        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }

    componentDidMount() {

        const options = {
            headers: {
                "content-type": "application/json", // whatever you want
                authorization: "Bearer ".concat(localStorage.getItem("AccessToken")),
            }
        };

        axios.get(global.backend+'/payment/getBankPaymentDetails',options)
            .then(res=>{this.setState({
                data: res.data
            });
            }).catch(err=>console.log('Error!! unsuccessful :'+err.data));
    }

    handleChangeStatus(id,id1){
        const sendId ={id,id1};
        const options = {
            headers: {
                "content-type": "application/json", // whatever you want
                authorization: "Bearer ".concat(localStorage.getItem("AccessToken")),
            }
        };
        axios.post(global.backend+'/payment/changeCardStatus', sendId, options)
            .then(res=>{//window.location.reload()
                    })
            .catch(err=>console.log('Error!! unsuccessful :'+err.data));
        
    }

    render() {
        return (
            <div>
                <Container>
                    <Alert color="info">
                        <h1 className="my-auto mx-auto text-center text-dark">PAYMENT BANK-DASHBOARD</h1>
                    </Alert>

                    <Table responsive="md">
                        <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Payment ID</th>
                            <th>Order ID</th>
                            <th>Payment Date</th>
                            <th>Payment amount</th>
                            <th>Payment type</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                        </thead>
                        {this.state.data.map(payments=>(
                            <tbody>
                                <tr>
                                <td>{payments.userID}</td>
                                <td>{payments.payID}</td>
                                <td>{payments.orderID}</td>
                                <td>{payments.payDate}</td>
                                <td>{payments.payAmount}</td>
                                <td>{payments.payType}</td>
                                <td>{payments.paymentStatus}</td>
                                <td>{payments.paymentStatus == 'Processing' ? <Button onClick={() => this.handleChangeStatus(payments.payID,payments.userID)}>Complete</Button> : <p>No actions</p>}</td>

                                </tr>
                            </tbody>
                        ))}
                    </Table>

                    <CFooter><h6 className="text-right">By <span className="text-danger">PaymentAdmin</span></h6></CFooter>
                </Container>


            </div>
        );
    }
}

export default payAdminReceipt;
