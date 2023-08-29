import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import "./QR_Comp.css";
import Photo from "./14.png";

const QR_Comp = () => {
  const [text, settext] = useState("");
  const [type, setType] = useState("squares");
  const [range, setrange] = useState("25");
  const [padding, setpadding] = useState("0");
  const [paddingstyle, setpaddingstyle] = useState("square");
  const [EyeRadius, seteyeRadius] = useState(10);
  const [PhotoLink, setPhotoLink] = useState("");

  const Addtext = (e) => {
    e.preventDefault();
    // settext(e.target.value);
    let val = e.target.value;

    settext(val.replace(/\s/g, ""));
  };
  return (
    <div className="containers">
      {text === "" ? null : (
        <div div className="Qrholder">
          <QRCode
            value={text}
            logoImage={Photo}
            logoPadding={padding}
            logoPaddingStyle={paddingstyle}
            logoWidth={range}
            logoHeight={range}
            qrStyle={type}
            removeQrCodeBehindLogo={false}
            eyeRadius={EyeRadius}
          />
        </div>
      )}

      <div className="inputholder">
        <input
          className="intype"
          type="text"
          value={text}
          onChange={(e) => Addtext(e)}
        />
        <h5>Add Photo To QR Code ? Past Link Hear :</h5>
        <input
          className="intype"
          type="link"
          value={PhotoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        ></input>

        {/* TYPE OF QR CODE */}
        <div style={{ margin: 7 }}>
          <label style={{ marginRight: 5 }}>Type Of QR-Code : </label>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="square"
              onClick={() => setType("squares ")}
              checked
            />
            <label class="form-check-label" for="inlineRadio1">
              square
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="circle"
              onClick={() => setType("dots")}
            />
            <label class="form-check-label" for="inlineRadio2">
              dots
            </label>
          </div>
        </div>
        {/*TILL HEAR TYPE OF QR CODE */}

        {/* LOGO SIZE OF QR CODE */}
        <div style={{ margin: 7 }}>
          <label for="customRange1" class="form-label">
            Logo Size
          </label>
          <input
            type="range"
            class="form-range"
            id="customRange1"
            min="20"
            max="90"
            onChange={(e) => setrange(e.target.value)}
          ></input>
        </div>
        {/* TILL HEAR LOGO SIZE OF QR CODE */}

        {/* PADDING AND STYLE FOR LOGO */}
        <div style={{ margin: 7 }}>
          <label for="customRange2" class="form-label">
            Paddign For Photo
          </label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="10"
            id="customRange2"
            value={padding}
            onChange={(e) => setpadding(e.target.value)}
          />

          {padding === "0" ? null : (
            <div style={{ margin: 7 }}>
              <label style={{ marginRight: 5 }}>
                Type Of Padding Of Logo :{" "}
              </label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio1"
                  value="square"
                  onClick={() => setpaddingstyle("square ")}
                  checked
                />
                <label class="form-check-label" for="inlineRadio11">
                  square
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions1"
                  id="inlineRadio2"
                  value="circle"
                  onClick={() => setpaddingstyle("circle")}
                />
                <label class="form-check-label" for="inlineRadio2">
                  circle
                </label>
              </div>
            </div>
          )}
        </div>
        {/* TILL HEAR PADDING FOR LOGO */}

        {/* three eye EyeRadius */}
        <div>
          <label for="customRange3" class="form-label">
            Eye REdius+ For Photo :
          </label>
          <input
            type="number"
            value={EyeRadius}
            onChange={(e) => seteyeRadius(e.target.value)}
          />
        </div>
        {/* TILL HEAR three eye EyeRadius */}
        {text === "" ? null : (
          <h4>
            Qr Code For : "
            <a href={text} target="_blank" rel="noreferrer">
              {text}
            </a>
            "
          </h4>
        )}
      </div>
    </div>
  );
};

export default QR_Comp;
