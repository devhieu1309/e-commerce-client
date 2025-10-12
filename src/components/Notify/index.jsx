import { Badge, Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.css";

function Notify() {
  const items = [
    {
      label: <div className="notify__item">
        <div className="notify__item-icon">
            <BellOutlined/>
        </div>
        <div className="notify__item-content">
            <div className="notify__item-title">
                Item 1
            </div>
            <div className="notify__item-time">
                8 phút trước
            </div>
        </div>
      </div>,
      key: "1",
    },
    {
      label: <div className="notify__item">
        <div className="notify__item-icon">
            <BellOutlined/>
        </div>
        <div className="notify__item-content">
            <div className="notify__item-title">
                Item 2
            </div>
            <div className="notify__item-time">
                18 phút trước
            </div>
        </div>
      </div>,
      key: "2",
    },
    {
      label: <div className="notify__item">
        <div className="notify__item-icon">
            <BellOutlined/>
        </div>
        <div className="notify__item-content">
            <div className="notify__item-title">
                Item 3
            </div>
            <div className="notify__item-time">
                19 phút trước
            </div>
        </div>
      </div>,
      key: "3",
    },
    {
      label: <div className="notify__item">
        <div className="notify__item-icon">
            <BellOutlined/>
        </div>
        <div className="notify__item-content">
            <div className="notify__item-title">
                Item 4
            </div>
            <div className="notify__item-time">
                20 phút trước
            </div>
        </div>
      </div>,
      key: "4",
    },
  ];

  return(
    <>
        <Dropdown
            menu={{ 
                items,
            }}
            trigger={['click']}
            popupRender={(menu => (
                <>
                    <div className="notify__dropdown">
                        <div className="notify__header">
                            <div className="notify__header-title">
                                <BellOutlined/> Notification
                            </div>
                            <Button type="link">View All</Button>
                        </div>
                        <div className="notify__body">
                            {menu}
                        </div>
                    </div>
                </>
            ))}
        >
            <Badge dot>
                <Button type="text" icon={<BellOutlined/>}></Button>
            </Badge>
        </Dropdown>
    </>
  );
}

export default Notify;
