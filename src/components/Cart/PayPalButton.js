import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { ProductConsumer } from '../../context';

export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log('The payment was succeeded!', payment);
            this.props.clearCart();
            this.props.history.push('/');
        };

        const onError = (err) => {
            console.log('Error!', err);
        };

        const env = 'sandbox'; //temporary
        const currency = 'USD';

        const client = {
            sandbox: process.env.REACT_APP_APP_ID,
            production: 'YOUR-PRODUCTION-APP-ID'
        };

        const CANCEL_ERROR = 'Your payment has been cancelled';

        return (
            <ProductConsumer>
                {(value) => (
                    <PaypalExpressBtn
                        env={env}
                        client={client}
                        currency={currency}
                        total={this.props.total}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={() => {
                            value.openErrorModal(CANCEL_ERROR);
                        }}
                    />
                )}
            </ProductConsumer>
        );
    }
}
