"use client";

import { useState } from "react";

export default function Home() {
  const [permission, setPermission] = useState("");
  const click = async () => {
    const res = await Notification.requestPermission();
    console.log({ res });
    setPermission(res);

    const x = setInterval(() => {
      console.log("sending");
      const notif = new Notification("Hello " + Math.random(), {
        body: "Hello, World!" + Math.random(),
      });
      notif.addEventListener("show", (event) => {
        console.log("Notification shown", event);
      });
      console.log({ notif });
    }, 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> Permission: {permission}</div>
      <button
        onClick={click}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Me
      </button>
    </main>
  );
}
