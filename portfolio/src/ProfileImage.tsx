import ProfilePic from "./assets/portfolio-logo.svg";
import "./ProfileImage.css";

function ProfileImage() {
  return (
    <>
      <img className="profile" src={ProfilePic} />
    </>
  );
}

export default ProfileImage;
