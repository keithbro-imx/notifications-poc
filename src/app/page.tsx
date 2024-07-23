"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("none");
  const click = async () => {
    setStatus("beforeRegisterServiceWorker");
    const registration = await navigator.serviceWorker.register(
      "/service-worker.js",
      {
        scope: "/",
      }
    );
    setStatus("afterRegisterServiceWorker");
    console.log({ registration });

    if (!("Notification" in window)) {
      setStatus("Notification not supported");
      return;
    }

    try {
      const res = await Notification.requestPermission();
      console.log({ res });
      if (res === "granted") {
        setStatus("permissionGranted");
      } else {
        setStatus("permissionDenied");
      }
    } catch (e) {
      if (e instanceof Error) {
        setStatus(e.message);
      }
      setStatus(JSON.stringify(e));
    }

    setStatus("beforeCreateNotification");

    setTimeout(() => {
      console.log("sending");
      registration.showNotification("Hello " + Math.random(), {
        body: "Hello, World!" + Math.random(),
      });
      setStatus("afterCreateNotification");
    }, 5000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Status: {status}</div>
      <button
        onClick={click}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Me
      </button>
    </main>
  );
}
