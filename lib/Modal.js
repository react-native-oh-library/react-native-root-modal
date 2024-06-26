import React, { Component } from 'react';
import RootSiblings, { RootSiblingParent } from 'react-native-root-siblings';

import ModalContainer, { AnimatedModalContainer } from './ModalContainer';

class Modal extends Component {
    static displayName = 'Modal';
    static defaultProps = {
        visible: false
    };

    _getContent(Container, props) {
        return (
          <Container
            {...props}
          />
        );
    }

    render() {
        return (
            <RootSiblingParent>
                {this._getContent(ModalContainer, this.props)}
            </RootSiblingParent>
        );
    }
}

class AnimatedModal extends Modal {
    componentDidMount() {
        this._modal = new RootSiblings(
            this._getContent(AnimatedModalContainer, this.props),
            null,
            this.props.store
        );
    };

    componentDidUpdate()  {
        this._modal.update(
            this._getContent(AnimatedModalContainer, this.props),
            null,
            this.props.store
        );
    };
}

export {
  RootSiblings as ModalManager,
  AnimatedModal
}

export default Modal;
