import { DeviceTypeMap } from "@/utils/constants";
import { useState } from "react";
import "./add-device.scss";
import { useIsMobile } from "@/utils/hooks";

const AddDevice = ({ deviceId }: { deviceId: number }) => {
  const isMobile = useIsMobile();
  const [isBringingOwnDevice, setIsBringingOwnDevice] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const deviceType = DeviceTypeMap[deviceId];
  const isType4 = deviceId === 4;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    setUploadedImage(file);
  };

  return (
    <section id="device-section-wrapper">
      <h2>Device {deviceId}</h2>
      <section id="device-byod">
        <section id="device-type-input">
          <label htmlFor="device">Device type</label>
          <input
            readOnly
            type="text"
            value={deviceType}
            name="device"
            className="device-type-input"
          />
        </section>

        {!isType4 && (
          <section id="device-type-switch">
            <div className="top-row">
              <h3>Bringing your own device?</h3>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={isBringingOwnDevice}
                  onChange={() => setIsBringingOwnDevice((prev) => !prev)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <p className="hint">
              Toggle this on if you're bringing your own device. Leave it off if
              Drive Mate is to provide the device.
            </p>
          </section>
        )}
      </section>

      <section
        id="device-form"
        className={`device-form-container ${
          isType4 ? "show" : isBringingOwnDevice ? "show" : "hide"
        }`}
      >
        <section id="device-form-serial-input">
          <label htmlFor="device-serial-number">Serial number</label>
          <input
            name="device-serial-number"
            type="text"
            className="device-serial-input"
            placeholder={
              isMobile
                ? "Enter the serial number"
                : "Enter the serial number of the device"
            }
          />
        </section>

        <section id="device-form-image-input">
          <label htmlFor="device-image-upload">
            Upload an image of the device
          </label>
          <button className="uploadBox">
            <input
              name="device-image-upload"
              type="file"
              onChange={handleImageUpload}
              className="device-image-input"
            />
            {uploadedImage ? (
              <p className="uploadedText">{uploadedImage.name}</p>
            ) : (
              <p className="uploadText">Click to upload</p>
            )}
          </button>
        </section>
      </section>

      {!isType4 && <hr className="separator" />}
    </section>
  );
};

export default AddDevice;
