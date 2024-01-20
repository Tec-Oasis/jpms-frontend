import AlterNav from "../components/AlterNav";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
export default function ProfilePage() {
  return (
    <div>
      <AlterNav />
      <div
        style={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
          }}
        >
          <ProfileCard />
        </div>
        <div
          style={{
            width: "40rem",
          }}
        >
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
