import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary';

const withErrorHandler = ( WrappedComponent, axios ) => {
  return class extends Component {

    constructor() {
      super ();
      this.state = { error: null };

      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterseptor = axios.interceptors.response.use(res => res, err => {
        this.setState({ error: err });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterseptor);
    }

    clearErrorHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
        <Modal
          show={ this.state.error }
          onDismiss={ this.clearErrorHandler }>
          Something went wrong :/
        </Modal>
        <WrappedComponent { ...this.props } />
      </Aux>
      )
    }
  }
}

export default withErrorHandler;