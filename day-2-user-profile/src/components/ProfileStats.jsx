import "./ProfileStats.css"
import group_icon from '../assets/group_icon.png';
import person_add_icon from '../assets/person_add_icon.png';
import work_icon_blue from '../assets/work_icon_blue.png';
function ProfileStats({ projects, followers, following }) {

    function card_click(){
        
        alert("Card clicked!")
    }
  return (
    <div className="projects">
        <div className="card" onClick={card_click}>
            <img src={group_icon} alt="projects"/>
            <div className="text">{projects}</div>
            <p>Projects</p>
        </div>

      <div className="card" onClick={card_click}>
        <img src={person_add_icon} alt="followers"/>
        <div className="text">{followers}</div>
        <p>Followers</p>
      </div>
      <div className="card" onClick={card_click}>
        <img src={work_icon_blue} alt="projects"/>
        <div className="text">{following}</div>
        <p>Following</p>
      </div>
    </div>
  );
}

export default ProfileStats;
