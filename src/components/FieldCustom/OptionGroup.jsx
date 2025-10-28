import { Radio, Space } from "antd";
import { DollarOutlined } from "@ant-design/icons";

function OptionGroup({ title, options, value, onChange }) {
  // console.log("options:", options);

  return (
    <section>
      <div className="section_header mb-[17px] flex items-center font-medium">
        <p className="text-[25px]">{title}</p>
      </div>

      <div className="border border-gray-300 rounded-md p-3">
        <Radio.Group
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className="w-full"
        >
          <Space direction="vertical" className="w-full">
            {options.map((opt, idx) => (
              <div
                key={idx}
                className={`flex justify-between w-full px-3 py-2 ${idx !== options.length - 1 ? "" : ""
                  }`}
              >
                
                <Radio value={opt.value}>{opt.label}</Radio>
                {opt.icon ? (
                  opt.icon
                ) : opt.price ? (
                  <span className="text-gray-600 font-medium !text-[15px]">{opt.price}</span>
                ) : null}


              </div>
            ))}
          </Space>
        </Radio.Group>
      </div>
    </section>
  );
}

export default OptionGroup;
