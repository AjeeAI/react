import ProfileCard from "./components/ProfileCard";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import Card from "./components/Card";
import ButtonStyle from "./components/ButtonStyle";
import CompanyCard from "./components/CompanyCard";
function App() {
  return (
    <div>
      <ProfileCard
      name="Birthday Card"
      message="Happy Birthday!"
      color="lightblue"
    />

    <ProfileCard
      name="Thank You Card"
      message="Thank You for Your Help!"
      color="lightgreen"
    />

    <UserCard 
      name="John Doe"
      email="john@example.com"
      location="New York"
    />

    <Button />

    <Card>
      <h2>Lagos Tech Meetup</h2>
      <p>Join us this Saturday!</p>
    </Card>

    <ButtonStyle/>

    <div className="app">
      <h1>Top Nigerian Tech Companies</h1>
      <div className="company-grid">
        <CompanyCard 
          name="Paystack"
          industry="Fintech"
          location="Lagos"
          employees="200+"
          logo="paystack-logo.png"
          featured={true}
        />
        <CompanyCard 
          name="Flutterwave"
          industry="Payment Solutions"
          location="Lagos"
          employees="500+"
          logo="flutterwave-logo.png"
          featured={true}
        />
        <CompanyCard 
          name="Andela"
          industry="Tech Talent"
          location="Lagos"
          employees="1000+"
          logo="andela-logo.png"
          featured={false}
        />
      </div>
    </div>
    </div>
  );
}


export default App;