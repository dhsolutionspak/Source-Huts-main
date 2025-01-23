import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timer to stop loading after 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (!isLoading) {
        return null; // Return null to remove the loader after 3 seconds
    }

    return (
        <>
            <div className="loading-area">
                <div className="loading-box"></div>
                <div className="loading-pic">
                    <div className="logo-loading">
                        <img
                            src="/assets/images/logo.png" // Update this path to your logo's actual location
                            alt="Loading..."
                            className="loading-logo"
                        />
                        <div className="spinner">
                            <div className="spinner-circle"></div>
                            <div className="spinner-circle"></div>
                            <div className="spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .loading-area {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #000; /* Black background */
                }

                .loading-box {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                .loading-pic .logo-loading {
                    position: relative;
                    text-align: center;
                }

                .loading-logo {
                    width: 100px; /* Adjust size as needed */
                    animation: fade-in 1.5s infinite alternate;
                    filter: brightness(1.5); /* Ensures the logo is visible on a black background */
                }

                .spinner {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }

                .spinner-circle {
                    width: 12px;
                    height: 12px;
                    background-color: #ffffff; /* White circles for visibility */
                    border-radius: 50%;
                    animation: bounce 1.2s infinite;
                }

                .spinner-circle:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .spinner-circle:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes bounce {
                    0%, 80%, 100% {
                        transform: scale(0);
                    }
                    40% {
                        transform: scale(1);
                    }
                }

                @keyframes fade-in {
                    0% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}
