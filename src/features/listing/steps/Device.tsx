import AddDevice from "@/components/device-management/add-device";
import "./Device.scss";
const Device = () => {
  return (
    <section className="wrapper">
      <section>
        <h1>Device management</h1>
        <p className="subtitle">
          Add details of the device, if any already installed on your car. If
          none, then continue to next step.
        </p>
      </section>

      <hr className="separator" />
      <AddDevice deviceId={1} />
      <AddDevice deviceId={2} />
      <AddDevice deviceId={3} />
      <AddDevice deviceId={4} />
    </section>
  );
};

export default Device;
