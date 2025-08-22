import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../public/RajeshPower.jpg";
import logo from "../public/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [electricEffect, setElectricEffect] = useState(false);

  const canvasRef = useRef(null);

  // ⚡ Draw jagged sparks around border
  useEffect(() => {
    if (!electricEffect) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationId;

    function drawBorderSparks() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.shadowBlur = 25;
      ctx.shadowColor = "rgba(0, 100, 255, 1)"; // glow
      ctx.strokeStyle = `rgba(0, 80, 255, ${Math.random() * 0.5 + 0.5})`; // dark blue flicker

      ctx.beginPath();

      // jagged effect function
      const jaggedLine = (x1, y1, x2, y2, segments = 20) => {
        ctx.moveTo(x1, y1);
        let dx = (x2 - x1) / segments;
        let dy = (y2 - y1) / segments;
        for (let i = 0; i < segments; i++) {
          let cx = x1 + dx * i + (Math.random() - 0.5) * 6; // jitter
          let cy = y1 + dy * i + (Math.random() - 0.5) * 6;
          ctx.lineTo(cx, cy);
        }
        ctx.lineTo(x2, y2);
      };

      // 🔹 Top border
      jaggedLine(2, 2, canvas.width - 2, 2);

      // 🔹 Right border
      jaggedLine(canvas.width - 2, 2, canvas.width - 2, canvas.height - 2);

      // 🔹 Bottom border
      jaggedLine(canvas.width - 2, canvas.height - 2, 2, canvas.height - 2);

      // 🔹 Left border
      jaggedLine(2, canvas.height - 2, 2, 2);

      ctx.stroke();

      animationId = requestAnimationFrame(drawBorderSparks);
    }

    drawBorderSparks();

    const timer = setTimeout(() => {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setElectricEffect(false);
      navigate("/home"); // redirect
    }, 600);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
    };
  }, [electricEffect, navigate]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image */}
      <div className="w-full md:w-[60%] bg-gray-200 h-auto md:h-auto">
        <img
          src={bgImg}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[40%] bg-white flex items-center justify-center p-6 relative">
        <div className="w-full max-w-sm flex flex-col items-center text-center rounded-lg px-4 py-8 relative shadow-xl">
          {/* 🔹 Border Sparks Canvas */}
          {electricEffect && (
            <canvas
              ref={canvasRef}
              className="absolute -top-1 -left-1 w-[calc(100%+2px)] h-[calc(100%+2px)] rounded-lg pointer-events-none"
            />
          )}

          {/* Logo */}
          <img src={logo} alt="Logo" className="mb-6 w-32 md:w-40 relative z-10" />

          {showForgotPassword ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
              <input
                type="email"
                placeholder="Enter your registered email"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4 w-full">
                Send Reset Link
              </button>
              <button
                onClick={() => setShowForgotPassword(false)}
                className="w-full border border-green-500 text-green-500 py-2 rounded hover:bg-green-500 hover:text-white transition"
              >
                Back to Login
              </button>
            </>
          ) : (
            <>
              {/* User ID */}
              <input
                type="text"
                placeholder="User ID"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
              />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 mb-4">
                <button
                  onClick={() => setElectricEffect(true)}
                  className="bg-[#005AAB] text-sm rounded-md hover:bg-[#0068c3] text-white px-4 py-2 w-full sm:w-auto shadow-lg"
                >
                  Login
                </button>

                <button className="bg-gray-800 text-sm rounded-md hover:bg-gray-500 text-white px-4 py-2  w-full sm:w-auto">
                  Cancel
                </button>
                <span
                  className="text-red-500 cursor-pointer font-medium text-sm "
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </span>
              </div>

              {/* Footer text */}
              <p className="text-[#005AAB] font-bold text-sm">
                Managing operations in easy manor
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
