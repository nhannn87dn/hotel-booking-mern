import { useRouter } from "next/router";

const NoSelectedRoom = () => {
  const router = useRouter();
  return (
    <div
          style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
        >
          <div className="error_box">You have not selected a room</div>
          <button type="button" onClick={() => router.push("/rooms")}>
            Return List Rooms
          </button>
        </div>
  )
}

export default NoSelectedRoom