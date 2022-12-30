// Imports
import {Row, Col} from 'react-bootstrap';

// Data
import {MENTORS_SECTION} from '../../Module/General';

const SocialWrapper = ({item}) => {
  return (
    <div className="social-wrapper">
      {!!item.LINKEDIN && (
        <a href={item.LINKEDIN} className="text-secondary">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      )}
      {!!item.INSTAGRAM && (
        <a href={item.INSTAGRAM} className="text-secondary">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      )}
      {!!item.GITHUB && (
        <a href={item.GITHUB} className="text-secondary">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      )}
    </div>
  );
};

const SmallestAvatar = ({mentor}) => {
  return (
    <div className="smallest-avatar">
      <img
        className="rounded-circle shadow-4"
        src={mentor.SRC}
        width="100px"
        alt={mentor.NAME}
      />
      <SocialWrapper item={mentor} />
      <div className="smallest-avatar-info">
        <p className="smallest-name">{mentor.NAME}</p>
      </div>
    </div>
  );
};

const Avatar = ({mentor}) => {
  return (
    <div className="default-avatar">
      <img
        src={mentor.SRC}
        className="rounded-circle shadow-4"
        alt={mentor.NAME}
        width="200px"
      />
      <SocialWrapper item={mentor} />
      <div className="avatar-info">
        <div className="name">
          <p>{mentor.NAME}</p>
        </div>
        <div className="description">
          <p className="text-secondary">
            {mentor.DESCRIPTION}, {mentor.COMPANY}
          </p>
        </div>
      </div>
    </div>
  );
};

const AvatarGroup = (mentors, size) => {
  return (
    <>
      {size === 'large' && (
        <Row className="mentors-group">
          {mentors.map((mentor, i) => (
            <Col key={i} className="mentors-item" sm={12} md={4} lg={2}>
              <Avatar mentor={mentor} />
            </Col>
          ))}
        </Row>
      )}

      {size === 'small' && (
        <Row className="mentors-smallest-group">
          {mentors.map((mentor, i) => (
            <Col key={i} className="mentors-small-item" sm={6} md={6} lg={2}>
              <SmallestAvatar mentor={mentor} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

const Mentors = () => {
  return (
    <div className="mentorsContainer">
      <div className="mentors-top">
        <h2 className="title_default">{MENTORS_SECTION.TITLE}</h2>
        <h3 className="text-secondary">{MENTORS_SECTION.DESCRIPTION}</h3>
      </div>
      <div className="mentors">
        <div className="mentors-list">
          {AvatarGroup(MENTORS_SECTION.MENTORS, 'large')}
        </div>
      </div>
      <div>
        <h2 className="title_default">{MENTORS_SECTION.OTHER_MENTORS.TITLE}</h2>
        <h3 className="text-secondary">
          {MENTORS_SECTION.OTHER_MENTORS.DESCRIPTION}
        </h3>
      </div>
      <div className="mentors">
        <div className="mentors-list">
          {AvatarGroup(MENTORS_SECTION.OTHER_MENTORS.MENTORS, 'large')}
        </div>
      </div>
    </div>
  );
};

const Supporters = () => {
  return (
    <div className="supportersContainer">
      <div className="mb-5">
        <h2 className="title_default">Apoiadores</h2>
        <h3 className="text-secondary">
          {MENTORS_SECTION.SUPPORTERS_DESCRIPTION}
        </h3>
      </div>
      <div className="pt-4">
        {AvatarGroup(MENTORS_SECTION.PARTNERS, 'small')}
      </div>
      {/*<div className="apply_supporters">*/}
      {/*  <a*/}
      {/*    href={MENTORS_SECTION.VOLUNTEER_ACTION.LINK}*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <button className="btn btn-volunteer">*/}
      {/*      {MENTORS_SECTION.VOLUNTEER_ACTION.TEXT}*/}
      {/*    </button>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
};

export {Mentors, Supporters};
