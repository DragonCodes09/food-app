import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="footer d-flex flex-column justify-content-center align-items-center py-4 border-top"
        style={{
          background:
            "linear-gradient(135deg,rgb(237, 224, 224),rgb(242, 92, 50))",
          color: "#fff",
        }}
      >
        <div className="social-icons mb-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mx-2"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mx-2"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mx-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon mx-2"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <span className="mb-2 text-white text-center fw-bold">
          © 2025 FoodCourt By Raj Chaudhary
        </span>

        <a
          href="/privacy-policy"
          className="text-white text-decoration-underline small"
        >
          Privacy Policy
        </a>

        {/* Custom CSS */}
        <style>
          {`
            .footer {
              position: relative;
              overflow: hidden;
            }

            .footer .social-icons {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
            }

            .footer .icon {
              font-size: 1.5rem;
              color: #fff;
              transition: transform 0.3s ease, color 0.3s ease;
            }

            .footer .icon:hover {
              color: #ffd700;
              transform: scale(1.2);
            }

            .footer::before {
              content: '';
              position: absolute;
              top: -50px;
              left: -50px;
              width: 200px;
              height: 200px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              animation: floating 6s infinite;
              z-index: 0;
            }

            .footer::after {
              content: '';
              position: absolute;
              bottom: -50px;
              right: -50px;
              width: 150px;
              height: 150px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              animation: floating 8s infinite;
              z-index: 0;
            }

            @keyframes floating {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-20px);
              }
              100% {
                transform: translateY(0);
              }
            }

            .footer span, .footer a {
              z-index: 1;
            }
          `}
        </style>
      </footer>
    </div>
  );
}
