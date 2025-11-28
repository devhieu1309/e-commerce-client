import React, { useRef, useEffect, useState } from "react";

const FLOW_MAP = {
  "Hủy đơn": ["Chờ xác nhận", "Đã xác nhận", "Hủy đơn"],
  "Trả hàng": ["Đã giao", "Trả hàng"],
  "Hoàn tiền": ["Trả hàng", "Hoàn tiền"],
};

export default function OrderStepper({ steps, currentStatus, timestamps }) {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  const [linePos, setLinePos] = useState({ start: 0, end: 0 });
  const [activeEnd, setActiveEnd] = useState(0);

  const isSpecial = FLOW_MAP[currentStatus] ? true : false;
  const dynamicSteps = isSpecial
    ? steps.filter((s) => FLOW_MAP[currentStatus].includes(s.key))
    : steps;

  const addToRefs = (el) => {
    if (el && !stepRefs.current.includes(el)) {
      stepRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current || stepRefs.current.length === 0) return;

    const first = stepRefs.current[0];
    const last = stepRefs.current[stepRefs.current.length - 1];

    const start = first.offsetLeft + first.offsetWidth / 2;
    const end = last.offsetLeft + last.offsetWidth / 2;

    setLinePos({ start, end });

    const currentIndex = dynamicSteps.findIndex((s) => s.key === currentStatus);

    const active =
      currentIndex >= 0
        ? stepRefs.current[currentIndex].offsetLeft +
          stepRefs.current[currentIndex].offsetWidth / 2
        : start;

    setActiveEnd(active);
  });

  const currentIndex = dynamicSteps.findIndex((s) => s.key === currentStatus);

  return (
    <div ref={containerRef} style={{ position: "relative", padding: "40px 0" }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: linePos.start,
          width: linePos.end - linePos.start,
          height: 3,
          background: "#e0e0e0",
          zIndex: 0,
          transform: "translateY(-50%)",
        }}
      />

      {/* active line */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: linePos.start,
          width: activeEnd - linePos.start,
          height: 3,
          background: "#1677ff",
          zIndex: 1,
          transform: "translateY(-50%)",
          transition: "0.3s",
        }}
      />

      {/* icons */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {dynamicSteps.map((step, index) => {
          const isActive = index <= currentIndex;

          return (
            <div
              key={step.key}
              ref={addToRefs}
              style={{
                textAlign: "center",
                width: "100%",
                position: "relative",
                zIndex: 5,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  margin: "0 auto",
                  background: isActive ? "#1677ff" : "#d9d9d9",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 20,
                  boxShadow: isActive
                    ? "0 0 10px rgba(22,119,255,0.4)"
                    : "none",
                  transition: "0.3s",
                }}
              >
                {step.icon}
              </div>

              <div style={{ marginTop: 8, fontWeight: 500 }}>{step.key}</div>

              <div style={{ fontSize: 12, color: "#888" }}>
                {timestamps?.[step.key] || ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
