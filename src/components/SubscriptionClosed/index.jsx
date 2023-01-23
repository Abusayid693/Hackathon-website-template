import React from 'react';
import {Row, Col, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import {SectionForm} from 'components/Form/index.jsx';

// Data
import {SUBSCRIPTION_CLOSED_SECTION} from '../../Module/General';

const SubscriptionClosed = () => {
  return (
    <div className="subscriptionClosedSection">
      <h2 className="title_default">{SUBSCRIPTION_CLOSED_SECTION.TITLE}</h2>
      <p>{SUBSCRIPTION_CLOSED_SECTION.DESCRIPTION}</p>
      <SectionForm
        title={SUBSCRIPTION_CLOSED_SECTION.FORM_TITLE}
        description={SUBSCRIPTION_CLOSED_SECTION.FORM_DESCRIPTION}
        successText={SUBSCRIPTION_CLOSED_SECTION.FORM_SUCCESS}
        backgroundColor="dark"
      />
    </div>
  );
};

export default SubscriptionClosed;
