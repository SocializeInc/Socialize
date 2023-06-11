import "./UserformCard.css";

const UserformCard = (props) => {
  const classes = "userform-card " + props.className;

  return (
    <div className={classes}>
      <div className="title">{props.title}</div>
      {props.children}
    </div>
  );
};

export default UserformCard;
