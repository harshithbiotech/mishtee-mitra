"use client";

import React, { useState, useEffect } from 'react';

export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Animation effect for the "Agent Online" pulsing dot
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 800)
    return () => clearInterval(interval);
  }, []);

  // Design Constants
  const colors = {
    orange: "#FF8C00",
    green: "#2ECC71",
    lightGray: "#F4F7F6",
    white: "#FFFFFF",
    darkText: "#333333",
    shadow: "0 4px 12px rgba(0,0,0,0.1)"
  };

  return (
    <div style={{
      backgroundColor: colors.lightGray,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      {/* Mobile Container */}
      <div style={{
        width: "100%",
        maxWidth: "500px",
        backgroundColor: colors.white,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        
        {/* Header Section */}
        <header style={{ textAlign: "center", marginBottom: "30px", width: "100%" }}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo" 
            style={{ width: "80px", marginBottom: "10px" }}
          />
          <h1 style={{ 
            color: colors.orange, 
            fontSize: "24px", 
            margin: "0",
            fontWeight: "800",
            letterSpacing: "-0.5px"
          }}>
            mishTee Delivery Mitra
          </h1>
          
          {/* Status Indicator */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            marginTop: "10px",
            gap: "8px"
          }}>
            <div style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: colors.green,
              opacity: isPulsing ? 1 : 0.4,
              transition: "opacity 0.4s ease-in-out",
              boxShadow: `0 0 8px ${colors.green}`
            }} />
            <span style={{ 
              fontSize: "14px", 
              fontWeight: "600", 
              color: colors.darkText 
            }}>
              Agent Online
            </span>
          </div>
        </header>

        {/* Task Card Section */}
        <main style={{ width: "100%", flex: 1 }}>
          <div style={{
            backgroundColor: colors.white,
            borderRadius: "16px",
            padding: "24px",
            boxShadow: colors.shadow,
            border: "1px solid #eee",
            marginBottom: "20px"
          }}>
            <p style={{ 
              margin: "0 0 8px 0", 
              color: "#666", 
              fontSize: "12px", 
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              Current Task
            </p>
            <h2 style={{ 
              margin: "0", 
              fontSize: "20px", 
              color: colors.darkText,
              fontWeight: "700"
            }}>
              Deliver to: <span style={{ color: colors.orange }}>Arjun Mehta</span>
            </h2>
            <div style={{ 
              marginTop: "15px", 
              paddingTop: "15px", 
              borderTop: "1px dashed #ddd",
              fontSize: "14px",
              color: "#555"
            }}>
              📍 402, Green Valley Apartments, Mumbai
            </div>
          </div>
        </main>

        {/* Action Button */}
        <footer style={{ width: "100%", paddingBottom: "20px" }}>
          <button 
            onClick={() => alert("Launching Navigation...")}
            style={{
              width: "100%",
              backgroundColor: colors.orange,
              color: colors.white,
              border: "none",
              borderRadius: "12px",
              padding: "18px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(255, 140, 0, 0.3)",
              transition: "transform 0.1s active",
              outline: "none"
            }}
            onMouseOver={(e) => e.currentTarget.style.filter = "brightness(1.1)"}
            onMouseOut={(e) => e.currentTarget.style.filter = "brightness(1)"}
          >
            Start Navigation
          </button>
        </footer>

      </div>
    </div>
  );
}
