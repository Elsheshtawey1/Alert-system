import { BellRing, CheckCircle, Info, AlertTriangle, AlertCircle } from "lucide-react";
import Alert from "./component/Alert/Alert";

function App() {
  return (
    <>
      <div>
        <Alert
          type="danger"
          icon={<AlertTriangle />}
          title="Error Occurred"
          description={
            <>
              {" "}
              An error occurred while processing your request <a href=""> Please try again </a> later.
            </>
          }
        />

        <Alert
          type="success"
          icon={<CheckCircle />}
          title="Operation Successful"
          description={
            <>
              Your changes have been <a href="#">saved successfully!</a>
            </>
          }
        />

        <Alert
          type="info"
          icon={<Info />}
          title="Information"
          description={
            <>
              Check the <a href="#">system logs</a> for more details on recent updates.
            </>
          }
        />

        <Alert
          type="warning"
          icon={<AlertCircle />}
          title="Warning"
          description={
            <>
              Your subscription will <a href="#">expire in 3 days</a> . Renew soon to avoid service interruption.{" "}
            </>
          }
        />

        <Alert
          type="primary"
          icon={<BellRing />}
          title="Primary Alert"
          description={
            <>
              This is a primary alert for <a href="#">important notices</a>.
            </>
          }
        />
      </div>
    </>
  );
}

export default App;
