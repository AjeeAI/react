import ProfileHeader from "./components/ProfileHeader.jsx";
import ProfileStats from "./components/ProfileStats.jsx";
import SkillBadge  from "./components/SkillBadge.jsx";

import "./App.css";
function App(){
  return (
    <div className="App">
     <div className="profile-card">
         <ProfileHeader
      avatar={"https://imgs.search.brave.com/wnbFfAsy8LKpXau8udUZ4k8xmfV-8EsC1RbiKapuXNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzIwLmpwZz9z/c2w9MQ"}
      name={"Adesoji Ajijolaoluwa"}
      title={"Web Developer"}
      />

      <ProfileStats
      projects={200}
      followers={100}
      following={20}
      />

      <SkillBadge
      skills={["React", "Flutter", "FastAPI"]}
      level={["beginner", "intermediate", "expert"]}
      />
     </div>
    </div>
  );
}

export default App;