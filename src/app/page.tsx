'use client';

export default function Home() {
  const click = async () => {
    const res = await Notification.requestPermission();
    console.log({res})

    setInterval(() => {
      console.log("sending")
      new Notification('Hello', {});
      console.log("sent")
    }, 2000);

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={click} className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
    </main>
  );
}
