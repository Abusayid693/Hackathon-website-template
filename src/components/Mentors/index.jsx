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
      <div className="smallest-avatar-info">
        <p className="smallest-name">{mentor.NAME}</p>
      </div>
      <SocialWrapper item={mentor} />
    </div>
  );
};

const SmallAvatar = ({mentor}) => {
  return (
    <div className="small-avatar">
      <img
        className="rounded-circle shadow-4"
        src={mentor.SRC}
        width="80px"
        alt={mentor.NAME}
      />
      <div className="small-avatar-info">
        <p className="small-name">{mentor.NAME}</p>
        <p className="small-description text-secondary">
          {mentor.DESCRIPTION}, {mentor.COMPANY}
        </p>
      </div>
      <SocialWrapper item={mentor} />
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
      />
      <div className="avatar-info">
        <p className="name">{mentor.NAME}</p>
        <p className="description text-secondary">
          {mentor.DESCRIPTION}, {mentor.COMPANY}
        </p>
      </div>

      <SocialWrapper item={mentor} />
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
        <Row className="mentors-small-group">
          {mentors.map((mentor, i) => (
            <Col key={i} className="mentors-item" sm={2} md={2} lg={1}>
              <SmallAvatar mentor={mentor} />
            </Col>
          ))}
        </Row>
      )}

      {size === 'smallest' && (
        <Row className="mentors-smallest-group">
          {mentors.map((mentor, i) => (
            <Col key={i} className="mentors-item" sm={2} md={2} lg={2}>
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
      <div className="mentorsWrapper">
        <div className="mentors-top">
          <h2 className="display-4">{MENTORS_SECTION.TITLE}</h2>
          <h3>{MENTORS_SECTION.DESCRIPTION}</h3>
        </div>
        <div className="mentors">
          <div className="mentors-list">
            {AvatarGroup(MENTORS_SECTION.MENTORS, 'large')}
            {AvatarGroup(MENTORS_SECTION.OTHER_MENTORS, 'small')}
          </div>
          <div className="apply_mentor mb-5">
            <p>{MENTORS_SECTION.MENTOR_ACTION.PRE}</p>
            <a
              href={MENTORS_SECTION.MENTOR_ACTION.LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-mentor">
                {MENTORS_SECTION.MENTOR_ACTION.TEXT}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="supportersWrapper">
        <div className="mb-5">
          <h3 className="display-4">Apoiadores</h3>
        </div>
        <div className="pt-4">
          {AvatarGroup(MENTORS_SECTION.PARTNERS, 'smallest')}
        </div>
        <div className="apply_supporters">
          <a
            href={MENTORS_SECTION.VOLUNTEER_ACTION.LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-volunteer">
              {MENTORS_SECTION.VOLUNTEER_ACTION.TEXT}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
