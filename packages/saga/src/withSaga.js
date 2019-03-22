import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useSaga from './useSaga';

export default function withSaga(WrappedComponent, saga) {
	function WithSagaWrapper({ dispatch, ...props }) {
		useSaga(dispatch, saga);
		return <WrappedComponent {...props} />;
	}
	WithSagaWrapper.displayName = `WithSaga(${WrappedComponent.displayName})`;
	WithSagaWrapper.propTypes = { dispatch: PropTypes.func.isRequired };

	return connect()(WithSagaWrapper);
}
