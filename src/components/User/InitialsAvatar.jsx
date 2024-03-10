import { getColorForUserId } from "../../utils/utils";

function InitialsAvatar({ user, isHeader }) {
  const getInitials = (name = "", surname = "") => {
    return `${name[0].toUpperCase()}${surname[0].toUpperCase()}`;
  };

  const avatarSize = isHeader ? "w-12 h-12" : "w-14 h-14";
  const avatarBackground = { backgroundColor: getColorForUserId(user.userId) };

  return (
    <div
      className={`rounded-full w-14 h-14  flex items-center justify-center ${avatarSize}`}
      style={avatarBackground}
    >
      {getInitials(user.name, user.surname)}
    </div>
  );
}

export default InitialsAvatar;
