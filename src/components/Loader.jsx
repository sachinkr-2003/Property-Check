import React from 'react';

const Loader = () => {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .loader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }
          .loader-content {
            text-align: center;
          }
          .loader-ring {
            width: 80px;
            height: 80px;
            border: 8px solid rgba(255, 255, 255, 0.2);
            border-top: 8px solid #ffc107;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          .loader-dots {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
          }
          .loader-dot {
            width: 12px;
            height: 12px;
            background: #ffc107;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out;
          }
          .loader-dot:nth-child(1) { animation-delay: -0.32s; }
          .loader-dot:nth-child(2) { animation-delay: -0.16s; }
          .loader-text {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            animation: pulse 1.5s infinite;
          }
        `}
      </style>
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-ring"></div>
          <div className="loader-text">Loading...</div>
          <div className="loader-dots">
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
            <div className="loader-dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
